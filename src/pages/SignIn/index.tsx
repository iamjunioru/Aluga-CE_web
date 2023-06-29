import { useState, useContext } from "react";
import { SignInWrapper, Button, Form, SignInContent } from "./styled";
import Loader from "../../components/Loader";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";
import { UserService } from "../../services/UserService";
import { toast } from "react-toastify";

export interface Inputs {
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
          localStorage.setItem("token", response.data.accessToken);
          toast.success(
            response.data.message || "Login realizado com sucesso"
          );
          navigate("/");
        })
        .catch((err) => {
          if (err) {
            toast.error(
              err.response?.data?.message || "Email ou senha inválidos"
            );
          }
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
        localStorage.setItem("token", response.data.accessToken);
        toast.success(
          response.data.message || "Cadastro realizado com sucesso"
        );
        navigate("/");
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
              <h1>Bem vindo de volta!</h1>
              <input
                type="email"
                aria-label="email"
                title="email"
                placeholder="Email"
                {...register("email", {
                  required: true,
                  minLength: 3,
                  pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                })}
              />
              {errors.email && <span id="span-error-message">{ValidateEmail(errors.email)}</span>}
              <input
                type="password"
                aria-label="senha"
                title="senha"
                placeholder="Senha"
                {...register("password", { required: true })}
              />
              {errors.password && <span id="span-error-message">Campo obrigatório</span>}

              <Button type="submit">Sign In</Button>
              <p className="dont-have-account">
                Não tem uma conta?{" "}
                <span onClick={toggleLogin}>
                  <strong>Cadastre-se</strong>
                </span>
              </p>
            </>
          ) : (
            <>
              <h1>
                Cadastre-se
              </h1>
              <input
                type="text"
                aria-label="name"
                title="nome de usuário"
                placeholder="Nome de usuário"
                {...register("name", { required: true })}
              />
              {errors.name && <span id="span-error-message">Campo obrigatório</span>}
              <input
                type="email"
                aria-label="email"
                title="email"
                placeholder="Email"
                {...register("email", {
                  required: true,
                  minLength: 3,
                  pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                })}
              />
              {errors.email && <span id="span-error-message">{ValidateEmail(errors.email)}</span>}
              <input
                type="text"
                aria-label="número de telefone"
                title="número de telefone"
                placeholder="(88) 99999-9999"
                {...register("phone_number", { required: true })}
              />
              {errors.phone_number && <span id="span-error-message">Campo obrigatório</span>}
              <input
                type="password"
                aria-label="senha"
                title="senha"
                placeholder="Senha"
                {...register("password", { required: true })}
              />

              {errors.password && <span id="span-error-message">Campo obrigatório</span>}
              <Button type="submit">Sign Up</Button>
              <p
                className="dont-have-account"
              >
                Já possui uma conta?{" "}
                <span onClick={toggleLogin}>
                  <strong>Entrar</strong>
                </span>
              </p>
            </>
          )}
        </Form>
      </SignInContent>
    </SignInWrapper>
  );
}

export default SignIn;
