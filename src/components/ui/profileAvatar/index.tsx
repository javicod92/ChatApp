import styles from "./ProfileAvatar.module.css";

type ProfileProps = {
  size?: "small" | "medium";
  url: string;
};

export default function ProfileAvatar({ size = "small", url }: ProfileProps) {
  return (
    <div className={styles[size]}>
      <img src={url} alt="Profile Image" />
    </div>
  );
}
