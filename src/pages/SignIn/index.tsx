import { useState } from "react";
import { SignInWrapper, Input, Button, Form, SignInContent } from "./styled";
import { useForm, SubmitHandler } from "react-hook-form";
import {UserService} from "../../services/UserService";

interface Inputs {
  email: string;
  password: string;
  name: string;
  phone_number: string;
}

function SignIn() {
  const [isLogin, setIsLogin] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (isLogin) {
      UserService.signIn(data.email, data.password);
      return;
    }
    UserService.signUp(data.email, data.password, data.name, data.phone_number);
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
          {isLogin ? (
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
              {/* inputs type name, email, phone_number e password*/}
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
