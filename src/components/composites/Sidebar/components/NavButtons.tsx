import { NavLink, useLocation } from "react-router";
import { RoundedButton } from "../../../ui/Buttons";
import {
  ChatFilledRefreshed,
  StatusRefreshed,
  NewsletterOutline,
  CommunityRefreshed,
} from "../../../ui/Icons";
import styles from "./NavButtons.module.css";

type NavButtonsProps = {
  handleClick: () => void;
};

export default function NavButtons({ handleClick }: NavButtonsProps) {
  const location = useLocation();

  return (
    <nav className={styles.navButtons}>
      <NavLink
        to={"/"}
        onClick={(e) => {
          if (
            location.pathname === "/" ||
            location.pathname.startsWith("/chat/")
          ) {
            e.preventDefault();
          }
        }}
      >
        {({ isActive }) => {
          const shouldBeActive =
            isActive || location.pathname.startsWith("/chat/");

          return (
            <RoundedButton
              isSelected={shouldBeActive}
              handleClick={handleClick}
              aria-label="Open chat list"
            >
              <ChatFilledRefreshed pointerEvents="none" />
            </RoundedButton>
          );
        }}
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
