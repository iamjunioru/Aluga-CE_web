import { useState, useContext } from "react";
import { SignInWrapper, Input, Button, Form, SignInContent } from "./styled";
import Loader from "../../components/Loader";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";
import { UserService } from "../../services/UserService";
import { toast } from "react-toastify";

interface Inputs {
  email: string;
  password: string;
  name: string;
  phone_number: string;
}

function SignIn() {
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [isLoading, setLoading] = useState<boolean>(false);
  const userContext = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setLoading(true);
    if (isLogin) {
      const { email, password } = data;
      UserService.signIn(email, password)
        .then((response) => {
          userContext.setUser(response.data.user);
          localStorage.setItem("token", response.data.token);
          toast.success(
            response.data.message || "Login realizado com sucesso"
          );
          navigate("/home");
        })
        .catch((err) => {
          const error = err.response.data;
          console.log(error);
          toast.error(error.errors.default || "Email ou senha inválidos");
        })
        .finally(() => {
          setLoading(false);
        });
      return;
    }
    const { email, password, name, phone_number } = data;
    UserService.signUp(email, password, name, phone_number)
      .then((response) => {
        userContext.setUser(response.data.user);
        localStorage.setItem("token", response.data.token);
        toast.success(
          response.data.message || "Cadastro realizado com sucesso"
        );
        navigate("/home");
      })
      .catch((error) => {
        console.log(error);
        toast.error(
          error.response?.data?.message || "Email ou senha inválidos"
        );
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const ValidateEmail = (error: any) => {
    switch (error.type) {
      case "required":
        return "Campo obrigatório";
      case "minLength":
        return "o Email deve conter pelo menos 3 caracteres";
      case "pattern":
        return "Formato de email inválido";
      default:
        return "Você deve inserir um email válido";
    }
  };

  const toggleLogin = () => {
    setIsLogin(!isLogin);
    reset();
  };

  return (
    <SignInWrapper>
      <SignInContent>
        <Form onSubmit={handleSubmit(onSubmit)}>
          {isLoading ? (
            <Loader />
          ) : isLogin ? (
            <>
              <h1>Sign In</h1>
              <Input
                type="email"
                placeholder="Email"
                {...register("email", {
                  required: true,
                  minLength: 3,
                  pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                })}
              />
              {errors.email && <span>{ValidateEmail(errors.email)}</span>}
              <Input
                type="password"
                placeholder="Password"
                {...register("password", { required: true })}
              />
              {errors.password && <span>Campo obrigatório</span>}

              <Button type="submit">Sign In</Button>
              <p>
                Don't have an account?{" "}
                <span onClick={toggleLogin}>Sign Up</span>
              </p>
            </>
          ) : (
            <>
              <h1>Sign Up</h1>
              <Input
                type="text"
                placeholder="Name"
                {...register("name", { required: true })}
              />
              {errors.name && <span>Campo obrigatório</span>}
              <Input
                type="email"
                placeholder="Email"
                {...register("email", {
                  required: true,
                  minLength: 3,
                  pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                })}
              />
              {errors.email && <span>{ValidateEmail(errors.email)}</span>}
              <Input
                type="text"
                placeholder="Phone Number"
                {...register("phone_number", { required: true })}
              />
              {errors.phone_number && <span>Campo obrigatório</span>}
              <Input
                type="password"
                placeholder="Password"
                {...register("password", { required: true })}
              />

              {errors.password && <span>Campo obrigatório</span>}
              <Button type="submit">Sign Up</Button>
              <p>
                Already have an account?{" "}
                <span onClick={toggleLogin}>Sign In</span>
              </p>
            </>
          )}
        </Form>
      </SignInContent>
    </SignInWrapper>
  );
}

export default SignIn;
