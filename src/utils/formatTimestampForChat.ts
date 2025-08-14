export default function formatTimestampForChat(timestamp: Date) {
  const messageDate = new Date(timestamp);

  // --- Time Formatter (AM/PM) ---
  const hours = messageDate.getHours();
  const minutes = messageDate.getMinutes();
  const ampm = hours >= 12 ? "p.m" : "a.m";
  const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
  const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
  const timeString = `${formattedHours}:${formattedMinutes} ${ampm}`;

  return {
    time: timeString,
  };
}
