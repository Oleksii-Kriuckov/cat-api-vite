import { MyOffcanvas } from "./Offcanvas/Offcanvas";
import GroupLinkButtons from "./UI/Buttons/LinkButtons/GroupLinkButtons";
import SearchInput from "./UI/Search/SearchInput";

const NavBar = () => {
  return (
    <>
        <div className="d-none d-sm-flex" style={{ gap: 10 }}>
          <MyOffcanvas />
          <SearchInput />
          <GroupLinkButtons />
        </div>

        <div className="d-flex flex-column d-sm-none" style={{ gap: 10 }}>
          <div className="d-flex justify-content-between" style={{ gap: 10 }}>
            <MyOffcanvas />
            <GroupLinkButtons />
          </div>

          <SearchInput />
        </div>
    </>
  );
};

export default NavBar;
