import Input from "../Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import api from "../../services/api";
import ErrorMessage from "../errorMessage";
import { useContext } from "react";
import { DialogContext } from "../../context/ModalContext";
import { Button } from "@mui/material";

const schemaCreatePost = yup
  .object({
    title: yup.string().required("A postagem precisa ter um título"),
    text: yup.string().required("A postagem precisa ter um texto da notícia"),
    bannerUrl: yup.string().required("A postagem precisa ter uma url"),
  })
  .required();

const CreatePostForm = () => {
  const { handleOpenModal } = useContext(DialogContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaCreatePost),
  });

  const onSubmit = (data) => {
    api
      .post("/news", data)
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error));
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        {...register("title")}
        type="text"
        placeholder="Insira o Título do seu Post aqui"
        id="title"
        name="title"
      >
        Título
      </Input>
      <ErrorMessage>{errors.title?.message}</ErrorMessage>
      <Input
        {...register("text")}
        type="text"
        placeholder="Insira o texto do seu Post aqui"
        id="text"
        name="text"
      >
        Texto
      </Input>
      <ErrorMessage>{errors.text?.message}</ErrorMessage>
      <Input
        {...register("bannerUrl")}
        type="text"
        placeholder="Insira a URL da imagem do seu banner aqui"
        id="bannner"
        name="bannerUrl"
      >
        Banner
      </Input>
      <ErrorMessage>{errors.bannerUrl?.message}</ErrorMessage>

      <Button onClick={handleOpenModal}>Cancel</Button>
      <Button type="submit">Register</Button>
    </form>
  );
};

export default CreatePostForm;
