import { RoundedButton } from "../../../ui/Buttons";
import { Expressions, PlusRounded, SendFilled } from "../../../ui/Icons";
import styles from "./Footer.module.css";

export default function Footer() {
  const handleInput = (event: React.FormEvent<HTMLDivElement>) => {
    const el = event.currentTarget;
    if (el.innerHTML === "<br>" || el.innerHTML === "&nbsp;") {
      el.innerHTML = "";
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
      ></div>

      <RoundedButton aria-label="Send message">
        <SendFilled />
      </RoundedButton>
    </div>
  );
}
