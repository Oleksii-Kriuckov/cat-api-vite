import { MyOffcanvas } from "./Offcanvas/Offcanvas";
import GroupLinkButtons from "./UI/Buttons/LinkButtons/GroupLinkButtons";
import SearchInput from "./UI/Search/SearchInput";

const NavBar = () => {
  return (
    <>
      {/* <div className="navbar"></div> */}
        <div className="d-none d-sm-none d-md-flex" style={{ gap: 10 }}>
          <MyOffcanvas />
          <SearchInput />
          <GroupLinkButtons />
        </div>
      

      {/* <div className="navbar_mobile"></div> */}
        <div className="d-flex d-sm-flex flex-column d-md-none" style={{ gap: 10 }}>
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
