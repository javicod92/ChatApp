import { NavLink } from "react-router";
import { useColorMode } from "../../../../hooks/useColorTheme";
import { RoundedButton } from "../../../ui/Buttons";
import { MoonIcon, SettingsRefreshed, SunIcon } from "../../../ui/Icons";
import ProfileAvatar from "../../../ui/ProfileAvatar";

import styles from "./UserOptions.module.css";

export default function UserOptions() {
  const { mode, toggleMode } = useColorMode();

  return (
    <div>
      <div className={styles.userOptions}>
        <hr className={styles.divider} />
        <RoundedButton aria-label="Cambiar tema" onClick={toggleMode}>
          {mode === "light" ? <MoonIcon /> : <SunIcon />}
        </RoundedButton>

        <NavLink to={"/settings"}>
          {({ isActive }) => (
            <RoundedButton aria-label="Open settings" isSelected={isActive}>
              <SettingsRefreshed pointerEvents={"none"} />
            </RoundedButton>
          )}
        </NavLink>

        <RoundedButton aria-label="Account options">
          <ProfileAvatar size="small" url="/Avatars/image_0002.webp" />
        </RoundedButton>
      </div>
    </div>
  );
}
