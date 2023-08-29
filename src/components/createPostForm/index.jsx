import Input from "../Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import api from "../../services/api";
import ErrorMessage from "../errorMessage";
import { useContext } from "react";
import { NewsContext } from "../../context/NewsContext";
import { DialogContext } from "../../context/ModalContext";
import Button from "../button";
import TextArea from "../../components/textarea";

const schemaCreatePost = yup
  .object({
    title: yup.string().required("A postagem precisa ter um título"),
    text: yup.string().required("A postagem precisa ter um texto da notícia"),
    banner: yup.string().required("A postagem precisa ter uma url"),
  })
  .required();

const CreatePostForm = () => {
  const { news, setNews } = useContext(NewsContext);
  const { handleOpenModal } = useContext(DialogContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaCreatePost),
  });

  const onSubmit = async (data) => {
    try {
      api
        .post("/news", data)
        .then((res) => {
          setNews([...news, res.data]);
          window.location.reload();
        })
        .catch((error) => console.log(error));
      handleOpenModal();
    } catch (error) {
      console.log("error:", error);
    }
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
      <TextArea
        {...register("text")}
        type="text"
        placeholder="Insira o texto do seu Post aqui"
        id="text"
        name="text"
      >
        Texto
      </TextArea>
      <ErrorMessage>{errors.text?.message}</ErrorMessage>
      <Input
        {...register("banner")}
        type="text"
        placeholder="Insira a URL da imagem do seu banner aqui"
        id="bannner"
        name="banner"
      >
        Banner
      </Input>
      <ErrorMessage>{errors.bannerUrl?.message}</ErrorMessage>

      <div className="flex gap-2 p-4 justify-end">
        <Button onClick={handleOpenModal}>Cancel</Button>
        <Button type="submit">Register</Button>
      </div>
    </form>
  );
};

export default CreatePostForm;
