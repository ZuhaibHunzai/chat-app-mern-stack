import { useAuth } from "../hooks/useAuth";
import { PageLayout } from "../layout/pageLayout";

export default function Header() {
  const user = useAuth();
  console.log(user?.user, "user data");

  const handleLogout = () => {
    user.logout();
  };
  return (
    <PageLayout>
      <div className="flex items-center justify-between h-24">
        <div>
          <h1 className="text-3xl font-bold text-yellow-300">
            Chit<span className="text-yellow-500">Chat</span>
          </h1>
        </div>
        <div className="flex items-center gap-4">
          {user?.user?.profilePic && (
            <img
              className="h-10 w-10 rounded-full m-auto"
              src={user?.user?.profilePic}
              alt="profile pic"
            />
          )}
          <h2 className="text-xl font-semibold text-center ">
            {user?.user?.username}
          </h2>
          <button
            className="py-2 px-4 bg-yellow-500 rounded-xl text-white"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </PageLayout>
  );
}
