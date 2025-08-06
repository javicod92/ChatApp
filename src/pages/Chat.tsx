import { useParams } from "react-router";
import ChatBody from "../components/composites/ChatBody";
import { Suspense } from "react";
import Spinner from "../components/ui/Spinner";
import { ErrorBoundary } from "react-error-boundary";
import styles from "./Chat.module.css";

export default function Chat() {
  const { id } = useParams();
  const selectedId = id ? Number(id) : 0;

  return (
    <ErrorBoundary FallbackComponent={FallbackErrorChatBody}>
      <Suspense fallback={<Spinner />}>
        <ChatBody selectedChatId={selectedId} />
      </Suspense>
    </ErrorBoundary>
  );
}

function FallbackErrorChatBody({ error }: { error: Error }) {
  return (
    <div className={styles.errorContainer}>
      <div className={styles.textContainer}>
        <h3>¡Ups! Ocurrió un error al cargar los mensajes.</h3>
        <pre>{error.message}</pre>
      </div>
    </div>
  );
}

// In this code, I can improve it by adding a .filter or .some methods to verify
// if the current chat exist in whatsappChats list when user write the path
