import { useEffect } from "react";
import MainLayout from "./layout/MainLayout";
import { useAppSelector } from "./redux/hook";

function App() {
  const { user } = useAppSelector((state) => state.user);
  useEffect(() => {
    if (user.email) {
      console.log(user.email, "emaiil bodda");
      // navigate("/");
    }
  }, [user.email]);



  return <MainLayout />;
}

export default App;
