import { useRef } from "react";
import { RoundedButton } from "../../../ui/Buttons";
import { Expressions, PlusRounded, SendFilled } from "../../../ui/Icons";
import styles from "./Footer.module.css";

export default function Footer() {
  const inputRef = useRef<HTMLDivElement>(null);

  const handleInput = (event: React.FormEvent<HTMLDivElement>) => {
    const el = event.currentTarget;
    if (el.innerHTML === "<br>" || el.innerHTML === "&nbsp;") {
      el.innerHTML = "";
    }
  };

  /* I use a single useRef because the text entered in the input element 
  does not need to be processed. This avoids unnecessary Re-renders */
  const handleSend = () => {
    const message = inputRef.current?.innerText.trim();
    if (message) {
      alert(message);
      inputRef.current!.innerText = "";
      inputRef.current?.focus();
    }
  };

  return (
    <div className={styles.footerContainer}>
      <RoundedButton aria-label="Attach files">
        <PlusRounded />
      </RoundedButton>

      <RoundedButton aria-label="Add expressions">
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

      <RoundedButton aria-label="Send message" handleClick={handleSend}>
        <SendFilled />
      </RoundedButton>
    </div>
  );
}
