import { Outlet } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { lightDark$ } from "../Recoil/atoms";
import Aside from "../Components/Aside/Aside";
import Main from "../Components/main/Main";

const Layout = () => {
  const checked = useRecoilValue(lightDark$);
  return (
    <div className={checked ? "App light" : "App dark"}>
      <div className="d-flex">
        <div className="aside_wrapper">
          <Aside />
        </div>
        <div style={{ position: "relative", minHeight: '100vh'}}>
          <Main>
            <Outlet />
          </Main>
        </div>
      </div>
    </div>
  );
};

export default Layout;