import { useAuth } from "../hooks/useAuth";

export default function Home() {
  const user = useAuth();
  console.log(user?.user, "user data");

  const handleLogout = () => {
    user.logout();
  };

  return (
    <div>
      <h1>Home Page</h1>
      {user?.user._id && (
        <button onClick={handleLogout}>Logout {user?.user.username}</button>
      )}
      <button></button>
    </div>
  );
}
