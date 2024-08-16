import Chats from "../components/inbox/";
import { useAuth } from "../hooks/useAuth";
import { PageLayout } from "../layout/pageLayout";

export default function Home() {
  const user = useAuth();
  console.log(user?.user, "user data");

  const handleLogout = () => {
    user.logout();
  };

  return (
    <PageLayout>
      <Chats />
    </PageLayout>
  );
}
