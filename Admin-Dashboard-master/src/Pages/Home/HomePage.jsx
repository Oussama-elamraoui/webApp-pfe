import Features from "../../Components/Features/Features"
import UserChart from "../../Components/userChart/UserChart"
import { useState, useEffect } from "react";

export default function HomePage() {

  const [MemberList, setMemberList] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8000/Member/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'a2a76bcaca32becedbd9fc8542dc293f9c98b92b'
      }
    })
      .then(resp => resp.json())
      .then(resp => (setMemberList(resp)))
      .catch(error => console.log(error))
  }, [])
  let dat = [];
  let data = MemberList.map(d => { dat.push(d) })
 
  return (
    <>
      <Features></Features>
      {/* <Widget></Widget> */}
      <UserChart data={data} />
    </>
  )
}
