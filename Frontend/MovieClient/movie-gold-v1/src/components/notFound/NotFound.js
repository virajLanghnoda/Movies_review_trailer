import React from 'react'
import {PacmanLoader} from 'react-spinners'

function ColorData({children}) {
  return <span style={{color: 'grey'}}>{children}</span>;
}

const NotFound = () => {
  return (
    <div
    style={{
      backgroundColor: "lightblue",
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '90vh',
    }}
  >
          <div
    style={{
      backgroundColor: "lightblue",
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
    }}
  >     
   
    <h2 style={{color: 'red' }}>Sorry..</h2>
  </div>
    <h2><ColorData>This Page is not available now.</ColorData></h2>
     <div><p><br /><PacmanLoader color="grey" /><br /></p>
  </div>
  </div>
  
  )
}

export default NotFound