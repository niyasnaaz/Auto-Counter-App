import React from 'react'

function Header() {
  return (
    <div>
      <div className='navbar bg-secondary'>
        <div className="container-fluid">
          <div href='/' className='text fs-5' style={{fontFamily:"Orbitron",fontWeight:"bolder",marginLeft:'10px', color:'black'}}>
            <img
              src='https://th.bing.com/th/id/R.6d33dc7af8760b1c93b6485275af012c?rik=uBakaSZMxmqtdQ&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2fnTE%2fXdx%2fnTEXdx8TA.gif&ehk=z8nzZUJ8h1gnJRsw1CIMMXYqUVpsoBsal0gWbqKcLr0%3d&risl=&pid=ImgRaw&r=0'
              height='50'
              alt=''
              loading='lazy'
              style={{borderRadius:"50px",boxShadow:"0 4px 8px 0"}}
            /> Automatic Counter App
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header