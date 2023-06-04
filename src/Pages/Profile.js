import React from 'react'
import { useNavigate } from 'react-router-dom' 
import { useParams } from 'react-router-dom';



function Profile() {

  let navigate = useNavigate();
  let {username} = useParams();
  

  return (
    <div>This is the profile page for {username} <button onClick= {()=>navigate("/about")}>Change to about page</button></div>
  )
}

export default Profile