import routes from "./Routes";
import TopBar from "./Components/TopBar/TopBar";
import { useRoutes } from "react-router-dom";
import Sidebar from "./Components/Sidebar/Sidebar";
import Login from './LoginRegister/Login';
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
function App() {
  const [adminList,setAdminList]=useState([]); 

  let navigate=useNavigate()
  useEffect(()=>{
    fetch('http://localhost:8000/Admin/', {
      method:'GET',  
      headers:{
        'Content-Type': 'application/json',  
        'Authorization': 'a2a76bcaca32becedbd9fc8542dc293f9c98b92b'
      }
    })
    .then(resp => resp.json())
    .then(resp => (setAdminList(resp)))
    .catch(error => console.log(error))

  },[])
  let router = useRoutes(routes);
  const [data, setData] = useState({});
  const [test,setTest]=useState(false)
  // return (
  //   <div className="select-none">
  //     <TopBar />
  //     <Sidebar />
  //     <div className="flex">
  //       <div className="nav-size"></div>
  //       <div className="right-side ">
  //         {router}
  //       </div>
  //     </div>
  //   </div>
  // );
  const checkAdmin = (childdata) => {
    setData(childdata);
    adminList.map((row)=>{if(row.email==data.EmailLogin && row.password==data.passwordLogin){
      setTest(true)
    }else{
      alert("Email or password incorrect") 
    }})
    
  }
  if (test) {
    return (
    <div className="select-none">
      <TopBar/>
      <Sidebar />
      <div className="flex">
        <div className="nav-size"></div>
        <div className="right-side">
          {router}
        </div>
      </div> 
    </div>)
  }
  else{
    return(
      <Login checkAdmin={checkAdmin}/>
    )
  }
}

export default App;
