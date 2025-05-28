import { RoundedButton } from "../../../ui/Buttons";
import {
  ChatFilledRefreshed,
  StatusRefreshed,
  NewsletterOutline,
  CommunityRefreshed,
} from "../../../ui/Icons";

import styles from "./NavButtons.module.css";

export default function NavButtons() {
  return (
    <nav className={styles.navButtons}>
      <RoundedButton isSelected={true}>
        <ChatFilledRefreshed pointerEvents={"none"} />
      </RoundedButton>
      <RoundedButton>
        <StatusRefreshed pointerEvents={"none"} />
      </RoundedButton>
      <RoundedButton>
        <NewsletterOutline pointerEvents={"none"} />
      </RoundedButton>
      <RoundedButton>
        <CommunityRefreshed pointerEvents={"none"} />
      </RoundedButton>
    </nav>
  );
}
