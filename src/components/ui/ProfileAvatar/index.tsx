import styles from "./ProfileAvatar.module.css";

type ProfileProps = {
  size?: "small" | "medium" | "large";
  url?: string;
};

const defaultProps: Required<ProfileProps> = {
  size: "small",
  url: "/Avatars/default.png",
};

// Default props
export default function ProfileAvatar(props: ProfileProps) {
  const { size, url } = { ...defaultProps, ...props };

  return (
    <div className={styles[size]}>
      <img src={url} alt="Profile Image" loading="lazy" />
    </div>
  );
}
