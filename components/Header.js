import React from "react";
import {Icon, Menu} from 'semantic-ui-react';
import {Link} from '../routes';
const Header=()=>{
    return(<>
     <Menu style={{ marginTop: '10px',padding:'10px' ,backgroundColor:'black',color:'white'}}>
      <Link route="/">
        <a className="item" style={{fontSize:'19px', fontFamily: "Arial",color:'DodgerBlue',fontWeight:'bold'}}>
        KichEthIsh 
        </a>
  
      </Link>

      <Menu.Menu position="right">
        <Link route="/">
          <a className="item" style={{fontSize:'19px', fontFamily: "Arial",color:'DodgerBlue',fontWeight:'bold'}}>Campaigns</a>
        </Link>

        <Link route="/campaigns/new">
        <Icon className="icon" name="plus square outline"  size='big' />
        </Link>
      </Menu.Menu>
    </Menu>
   
    </>);
}
export default Header;