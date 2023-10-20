import { MyOffcanvas } from './Offcanvas/Offcanvas'
import GroupLinkButtons from './UI/Buttons/LinkButtons/GroupLinkButtons'
import SearchInput from './UI/Search/SearchInput'

const NavBar = () => {
  return (
    <div className='d-flex' style={{gap: 10}}>
      <MyOffcanvas/>
      <SearchInput/>
      <GroupLinkButtons />
    </div>
  )
}

export default NavBar