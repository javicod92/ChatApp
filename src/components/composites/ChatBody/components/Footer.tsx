import { useRef } from "react";
import { RoundedButton } from "../../../ui/Buttons";
import { Expressions, PlusRounded, SendFilled } from "../../../ui/Icons";
import styles from "./Footer.module.css";
import { useMutation } from "@tanstack/react-query";
import { chatService } from "../../../../data/service";
import { queryClient } from "../../../../lib/react-query";

export default function Footer({ chatId }: { chatId: number }) {
  const inputRef = useRef<HTMLDivElement>(null);

  const handleInput = (event: React.FormEvent<HTMLDivElement>) => {
    const el = event.currentTarget;
    if (el.innerHTML === "<br>" || el.innerHTML === "&nbsp;") {
      el.innerHTML = "";
    }
  };

  const createMessageMutation = useMutation({
    mutationFn: ({
      chatId,
      messageText,
    }: {
      chatId: number;
      messageText: string;
    }) => chatService.sendMessage(chatId, messageText),

    /* I use a single useRef instead of useState, because the text entered in the input element 
    does not need to be processed. This avoids unnecessary Re-renders */
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["chatBody"] }); // It refresh the new message in ChatBody component
      queryClient.invalidateQueries({ queryKey: ["chatList"] }); // It refresh the new message in ChatList component
      inputRef.current!.innerText = "";
      inputRef.current?.focus();
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const message = inputRef.current?.innerText.trim();
    if (!message) return;
    createMessageMutation.mutate({ chatId: chatId, messageText: message });
  };

  return (
    <form className={styles.footerContainer} onSubmit={handleSubmit}>
      <RoundedButton aria-label="Attach files" type="button">
        <PlusRounded />
      </RoundedButton>

      <RoundedButton aria-label="Add expressions" type="button">
        <Expressions />
      </RoundedButton>

      <div
        className={styles.textInputContainer}
        aria-label="Escribe un mensaje"
        contentEditable="true"
        role="textbox"
        aria-placeholder="Escribe un mensaje"
        onInput={handleInput}
        ref={inputRef}
        tabIndex={0}
      ></div>

      <RoundedButton aria-label="Send message" type="submit">
        <SendFilled />
      </RoundedButton>
    </form>
  );
}
