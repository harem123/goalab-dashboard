
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';


const Sidemenu = ()=>{
  <Sidebar>
  <Menu>
    <SubMenu label="Charts">
      <MenuItem> Pie charts </MenuItem>
      <MenuItem> Line charts </MenuItem>
    </SubMenu>
    <MenuItem> Documentation </MenuItem>
    <MenuItem> Calendar </MenuItem>
  </Menu>
</Sidebar>;

}

export default Sidemenu

