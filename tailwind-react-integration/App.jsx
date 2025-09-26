export default function App() {
  return (
    <h1 className="text-4xl font-bold text-blue-600">
      Hello, Tailwind + React + Vite!
    </h1>
  )
}
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <div>
      <UserProfile />
    </div>
  );
}

export default App;
