import type { User } from "./types";
import UserDisplay from "./components/UserDisplay";

function App() {
  const users: User[] = [
    {
      name: "Austen",
      messages: [{ body: "Hello, Lauren!!" }, { body: "Goodbye, Lauren!!" }],
    },
    {
      name: "Lauren",
      messages: [
        { body: "Hello, Austen!" },
        { body: "Goodbye, Austen!" },
        { body: "Hello, Austen!" },
        { body: "Goodbye, Austen!" },
      ],
    },
  ];
  return (
    <div className="bg-zinc-800 flex-col h-screen w-full flex items-center justify-center p-4 gap-y-12 overflow-scroll">
      {users.map((user) => (
        <UserDisplay key={user.name} user={user} />
      ))}
    </div>
  );
}

export default App;
