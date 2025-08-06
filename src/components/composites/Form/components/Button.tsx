import PillButtonXL, {
  type PillButtonProps,
} from "../../../ui/Buttons/PillButtonXL";

export default function Button(props: PillButtonProps) {
  return (
    <>
      <PillButtonXL {...props}>{props.children}</PillButtonXL>
    </>
  );
}
