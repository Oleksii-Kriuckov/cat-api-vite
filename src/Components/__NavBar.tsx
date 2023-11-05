import { MyOffcanvas } from "./Offcanvas/Offcanvas";
import GroupLinkButtons from "./UI/Buttons/LinkButtons/GroupLinkButtons";
import SearchInput from "./UI/Search/SearchInput";

const Nav_Bar = () => {
  return (
    <>
      <div className="d-none  d-sm-flex" style={{ gap: 10 }}>
        <div className="d-flex">
          <MyOffcanvas />
          <SearchInput />
        </div>

        <GroupLinkButtons />
      </div>
      {/* d-sm-none */}
      <div className="d-flex  d-sm-none" style={{ gap: 10 }}>
        <div className="d-flex justify-content-between" style={{ gap: 10 }}>
          <MyOffcanvas />
          <GroupLinkButtons />
        </div>
        {/* d-sm-flex flex-column */}
        <SearchInput />
      </div>
    </>
  );
};

export default Nav_Bar;
