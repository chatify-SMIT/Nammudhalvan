

import Profilebar from '../Profilebar';
import Headers from '../Title';

import React from 'react';
import { Outlet, Link } from "react-router-dom";
import '../../css/Main.css';

const Main = ()=>{
    return(
<> 
<div className='d-lg-flex d-none flex-column'>
 <div><Headers /></div> 
 <div className='d-flex ' >
 <Profilebar />
 <div className='d-flex w-100 widget'>
  <Outlet />

</div>
</div>
                 
            </div>
            <div><h1 className='d-flex d-lg-none justify-content-center align-items-center flex-column'>Open on Computer</h1></div>

  </>  
  
  
  )
}  

export default Main
