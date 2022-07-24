import { useTheme } from "@nextui-org/react";
import type { NextPage } from "next";
import { useTheme as useNextTheme } from "next-themes";
import HeroComponent from "../components/HeroComponent";

const Home: NextPage = () => {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <HeroComponent></HeroComponent>
      {/* <Switch
        checked={isDark}
        onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
      /> */}
    </div>
  );
};

export default Home;
