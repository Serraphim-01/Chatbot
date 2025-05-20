export default function MessageBubble({
  role,
  text,
}: {
  role: 'user' | 'bot';
  text: string;
}) {
  const isUser = role === 'user';
  return (
    <div
      className={`max-w-[80%] px-4 py-2 
        rounded-lg text-sm ${
        isUser
          ? 'bg-purple-600 text-white self-end ml-auto'
          : 'bg-gray-700 text-white self-start mr-auto'
      }`}
    >
      {text}
    </div>
  );
}
