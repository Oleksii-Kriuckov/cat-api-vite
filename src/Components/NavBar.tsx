import { MyOffcanvas } from "./Offcanvas/Offcanvas";
import GroupLinkButtons from "./UI/Buttons/LinkButtons/GroupLinkButtons";
import SearchInput from "./UI/Search/SearchInput";

const NavBar = () => {
  return (
    <>
      <div className="navbar">
        <div className="d-flex" style={{ gap: 10 }}>
          <MyOffcanvas />
          <SearchInput />
          <GroupLinkButtons />
        </div>
      </div>

      <div className="navbar_mobile">
        <div className="d-flex flex-column" style={{ gap: 10 }}>
          <div className="d-flex justify-content-between" style={{ gap: 10 }}>
            <MyOffcanvas />
            <GroupLinkButtons />
          </div>

          <SearchInput />
        </div>
      </div>
    </>
  );
};

export default NavBar;
