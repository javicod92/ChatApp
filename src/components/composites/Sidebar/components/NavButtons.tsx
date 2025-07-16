import { NavLink } from "react-router";
import { RoundedButton } from "../../../ui/Buttons";
import {
  ChatFilledRefreshed,
  StatusRefreshed,
  NewsletterOutline,
  CommunityRefreshed,
} from "../../../ui/Icons";
import styles from "./NavButtons.module.css";

interface NavButtonsProps {
  handleClick: () => void;
}

export default function NavButtons({ handleClick }: NavButtonsProps) {
  return (
    <nav className={styles.navButtons}>
      <NavLink to={"/"}>
        {({ isActive }) => (
          <RoundedButton
            isSelected={isActive}
            handleClick={handleClick}
            aria-label="Open chat list"
          >
            <ChatFilledRefreshed pointerEvents="none" />
          </RoundedButton>
        )}
      </NavLink>

      <RoundedButton aria-label="Open states">
        <StatusRefreshed pointerEvents="none" />
      </RoundedButton>

      <RoundedButton aria-label="Open channels">
        <NewsletterOutline pointerEvents="none" />
      </RoundedButton>

      <RoundedButton aria-label="Open Community">
        <CommunityRefreshed pointerEvents="none" />
      </RoundedButton>
    </nav>
  );
}
