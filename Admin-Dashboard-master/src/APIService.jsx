import axios from "axios";
export default class APISerive{
    static addAdmin(body){
        return fetch(`http://127.0.0.1:8000/Admin/`,{
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
                // 'Authorization': `Token ${token}`
            },
            body:JSON.stringify(body)
        }).then(resp => resp.json())
    }
    static getAdmin(){
        return fetch(`http://127.0.0.1:8000/Admin/`,{
            method:'Get',
            headers: {

                'Content-Type': 'application/json',
                // 'Authorization': `Token ${token}`
            },
            body:JSON.stringify(body)
        }).then(resp => resp.json())
    }
    static getMember(){
        return axios.get('http://127.0.0.1:8000/Member/')
        .then(res => {
          return res.data
        })
        
    }
    static addMember(body){
        return fetch(`http://127.0.0.1:8000/Member/`,{
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
                // 'Authorization': `Token ${token}`
            },
            body:JSON.stringify(body)
        }).then(resp => resp.json())
    }
}