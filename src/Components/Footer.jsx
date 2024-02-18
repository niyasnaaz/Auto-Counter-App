import React from 'react'
import {
  MDBFooter,
} from 'mdb-react-ui-kit';

function Footer() {
  return (
<MDBFooter className='text-center text-white' style={{marginTop:"44px" }}>

      <div className='text-dark fw-bold text-center p-3 bg-secondary' style={{fontFamily:"Orbitron"}}>
        © 2024 Copyright :<a className='text' href='/' style={{color:'red'}}> AutoCounterApp.com
        </a>
      </div>
    </MDBFooter>
  );
}

export default Footer