'use client';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center h-screen bg-gray-950 text-white">
      <button
        className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg text-xl font-bold"
        onClick={() => router.push('/chat')}
      >
        Start Chatting 💬
      </button>
    </div>
  );
}
