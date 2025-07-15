import { Outlet, useParams } from "react-router";
import ChatListPanel from "../components/composites/ChatListPanel";
import WelcomePage from "./WelcomePage";

export default function Home() {
  const params = useParams();
  const { id } = params;

  return (
    <>
      <ChatListPanel />
      {id ? <Outlet /> : <WelcomePage />}
    </>
  );
}
