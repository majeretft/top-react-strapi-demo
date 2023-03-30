import { Outlet } from "react-router-dom";

import MenuComponent from "../components/menu";
import HeaderComponent from "../components/header";

const Page = () => {
  return (
    <>
      <HeaderComponent isFullHeight={false}>
        <MenuComponent />
      </HeaderComponent>

      <Outlet />
    </>
  );
};

export default Page;
