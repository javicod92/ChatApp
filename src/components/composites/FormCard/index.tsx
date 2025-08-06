import ProfileAvatar from "../../ui/ProfileAvatar";
import styles from "./FormCard.module.css";
import Form from "../Form";
import { useFormContext } from "../../../hooks/useFormContext";
import { chatService } from "../../../data/service";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../../../lib/react-query";
import { useNavigate } from "react-router";

export default function FormCard() {
  const { formData, setIsFormOpen } = useFormContext();
  const navigate = useNavigate();

  function handleClick() {
    setIsFormOpen(false);
  }

  const createChatMutation = useMutation({
    mutationFn: ({
      name,
      avatar,
      message,
    }: {
      name: string;
      avatar?: string;
      message: string;
    }) => chatService.createChat({ name, avatar, message }),

    /* I use a single useRef instead of useState, because the text entered in the input element 
    does not need to be processed. This avoids unnecessary Re-renders */
    onSuccess: (newChat) => {
      queryClient.invalidateQueries({ queryKey: ["chatBody"] }); // It refresh the new message in ChatBody component
      queryClient.invalidateQueries({ queryKey: ["chatList"] }); // It refresh the new message in ChatList component
      setIsFormOpen(false);
      navigate(`/chat/${newChat.id}`);
    },
  });

  function onSubmit() {
    createChatMutation.mutate({
      name: formData.name,
      avatar: formData.avatar,
      message: formData.message,
    });
  }

  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardContent}>
        <div className={styles.card}>
          {/* FormCard Header */}
          <div className={styles.cardHeader}>
            <div className={styles.headerAvatar}>
              {formData.avatar ? (
                <ProfileAvatar url={`${formData.avatar}`} size="large" />
              ) : (
                <ProfileAvatar size="large" />
              )}
            </div>
            <div className={styles.headerContactName}>
              {formData.name ? <p>{formData.name}</p> : "Usuario"}
            </div>
          </div>

          {/* FormCard Form */}
          <div className={styles.formContainer}>
            <Form onSubmit={onSubmit}>
              <Form.Input
                label="Nombre de contacto"
                name="name"
                placeholder="(Ingrese un nombre)"
              />
              <Form.Input
                label="Avatar de contacto (Opcional)"
                name="avatar"
                placeholder="(Ingrese una URL)"
              />
              <Form.Input
                label="Mensaje"
                name="message"
                placeholder="(Escriba un mensaje)"
              />
              <div className={styles.formButtonsContainer}>
                <Form.Button
                  bgColor="gray"
                  type="button"
                  style={{ width: "40%" }}
                  handleClick={handleClick}
                >
                  Cancelar
                </Form.Button>
                <Form.Button
                  bgColor="green"
                  type="submit"
                  style={{ width: "40%" }}
                >
                  Crear
                </Form.Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
