import { Outlet, useParams } from "react-router";
import ChatListPanel from "../components/composites/ChatListPanel";

type HomeProps = {
  isSidebarOpen: boolean;
};

export default function Home({ isSidebarOpen }: HomeProps) {
  const params = useParams();
  const { id } = params;

  return (
    <>
      <ChatListPanel isSidebarOpen={isSidebarOpen} />
      {id ? <Outlet /> : <p>There is nothing 😩</p>}
    </>
  );
}
