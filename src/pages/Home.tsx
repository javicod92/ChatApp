import { Outlet, useParams } from "react-router";
import ChatListPanel from "../components/composites/ChatListPanel";

export default function Home() {
  const params = useParams();
  const { id } = params;

  return (
    <>
      <ChatListPanel />
      {id ? <Outlet /> : <p>There is nothing 😩</p>}
    </>
  );
}
