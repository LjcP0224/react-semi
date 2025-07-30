import { Button } from "@douyinfe/semi-ui";
import { useNavigate } from "@tanstack/react-router";
import { DatePicker } from "@douyinfe/semi-ui";

const HomePage = () => {
  const navigate = useNavigate();

  const login = () => {
    navigate({
      to: "/login",
    });
  };
  return (
    <>
      <Button onClick={login}>Login</Button>
      <Button onClick={() => navigate({ to: "/main" })}>main</Button>
      <DatePicker />
    </>
  );
};

export default HomePage;
