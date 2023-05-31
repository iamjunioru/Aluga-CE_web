import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/authContext";
import { useForm, SubmitHandler } from "react-hook-form";
import { Inputs } from "../../pages/SignIn";
import { UserService } from "../../services/UserService";
import { toast } from "react-toastify";
import { UserFormInfoWrapper } from "./styled";
import Loader from "../Loader";

function UserFormInfo() {
  const [isLoading, setLoading] = useState<boolean>(false);
  const userContext = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setLoading(true);
    const { email, password, name, phone_number } = data;
    UserService.updateUser(
      userContext?.user?.id,
      email,
      password,
      name,
      phone_number
    )
      .then((response) => {
        userContext.setUser(response.data.user);
        toast.success(
          response.data.message || "Usuário atualizado com sucesso"
        );
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.errors.default || "Erro ao atualizar usuário");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    setLoading(true);
    if (userContext?.user) {
      UserService.getUser(userContext?.user?.id)
        .then((response) => {
          setLoading(false);
          setValue("email", response.data.user.email);
          setValue("name", response.data.user.name);
          setValue("phone_number", response.data.user.phone_number);

          console.log(response.message);
          toast.success(
            response.message || "Dados do usuário carregados com sucesso"
          );
        })
        .catch((error) => {
          console.log(error.response.data.errors.default);
          toast.error(
            error.response.data.errors.default ||
              "Não foi possível carregar os dados do usuário"
          );
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [setValue, userContext]);

  return (
    <UserFormInfoWrapper>
      {isLoading ? (
        <Loader />
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="E-mail"
              {...register("email", { required: true })}
            />
            {errors.password && (
              <span id="span-error-message">Campo obrigatório</span>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Nome"
              {...register("name", { required: true })}
            />
            {errors.password && (
              <span id="span-error-message">Campo obrigatório</span>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="phone_number">Telefone</label>
            <input
              type="text"
              className="form-control"
              id="phone_number"
              placeholder="Telefone"
              {...register("phone_number", { required: true })}
            />
            {errors.password && (
              <span id="span-error-message">Campo obrigatório</span>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Senha"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span id="span-error-message">Campo obrigatório</span>
            )}
          </div>
        </form>
      )}
    </UserFormInfoWrapper>
  );
}

export default UserFormInfo;
