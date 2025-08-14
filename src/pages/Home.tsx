import { Outlet, useParams } from "react-router";
import ChatListPanel from "../components/composites/ChatListPanel";
import WelcomePage from "./WelcomePage";
import FormCard from "../components/composites/FormCard";
import { useFormContext } from "../hooks/useFormContext";

export default function Home() {
  const params = useParams();
  const { id } = params;
  const { isFormOpen } = useFormContext();

  return (
    <>
      <ChatListPanel />
      {id ? <Outlet /> : <WelcomePage />}
      {isFormOpen && <FormCard />}
    </>
  );
}
