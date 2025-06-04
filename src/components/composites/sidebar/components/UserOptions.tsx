import { RoundedButton } from "../../../ui/Buttons";
import { SettingsRefreshed } from "../../../ui/Icons";
import ProfileAvatar from "../../../ui/ProfileAvatar";

import styles from "./UserOptions.module.css";

export default function UserOptions() {
  return (
    <div>
      <div className={styles.userOptions}>
        <hr className={styles.divider} />
        <RoundedButton aria-label="Open settings">
          <SettingsRefreshed pointerEvents={"none"} />
        </RoundedButton>

        <RoundedButton aria-label="Account options">
          <ProfileAvatar size="small" url="/Avatars/image_0002.png" />
        </RoundedButton>
      </div>
    </div>
  );
}
