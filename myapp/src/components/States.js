// import React from 'react'
// import { useState } from 'react'
// export default function States() {
//     //states Age , Name , Address , Phone
//        const [Mobile,setMobile]=useState({
//         Name:'Iphone',
//         Model:'16 promax',
//         color:'Naivy-blue'
//        })
//        function ChangeColor(){
//         setMobile(previousState=>{
//             return{... previousState, color:'blue' , Model:'17 pro' , Name:'Iphone'}
//         })
//        }a
//     return (
//     <>
//        <p>i am using new {Mobile.Name} that his Model is 
//         {Mobile.Model}  with {Mobile.color} color</p>
//        <button onClick={ChangeColor}>Change color</button>
          
//     </>
//   )
// }

import React, { useState } from "react";
import Timer from "./Timer";

function States() {
  
  const [profilePicture, setProfilePicture] = useState(
    "https://via.placeholder.com/150" // profile keena hore
  );

  // functionka badalaya Profile ka
  const changeProfilePicture = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Create a URL for the uploaded file to display it
      const newProfilePicture = URL.createObjectURL(file);
      setProfilePicture(newProfilePicture);
    }
  };

  return (
    <>
    <Timer/>
        <div style={{ textAlign: "center" }}>
      <h2>Change Profile Picture</h2>
      <img
        src={profilePicture}
        alt="Profile"
        style={{
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          objectFit: "cover",
        }}
      />
      <div style={{ marginTop: "20px" }}>
        <input type="file" accept="image/*" onChange={changeProfilePicture} />
      </div>
    </div>
    </>
  );
}

export default States;
