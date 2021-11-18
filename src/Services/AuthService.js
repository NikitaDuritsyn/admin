import axios from 'axios';

const url = 'http://localhost:3000/api/login'
const urlRegister = 'http://localhost:3000/api/registration'
class authService {
    static login(email, password){

        return new Promise(async (resolve, reject)=>{
            try{
                const response = await axios.post(url, {email, password});
                const token = response.data.token
                localStorage.setItem('token',token)
                resolve(response.data);
                
                // console.log(response.data.token)
                // console.log(token);
                // const token = localStorage.getItem(token)
                // const getToken = 'Bearer ' + localStorage.getItem('token')
                // console.log(getToken);
                // axios.defaults.headers.common['authorization'] = 'Bearer ' + localStorage.getItem('token')
            }catch(e){
                reject(e) 
            }
        })
    }
    static logout(email, password){

        return new Promise(async (resolve, reject)=>{
            try{

            }catch(e){
                reject(e) 
            }
        })
    }
    static registrationNewUser(name, lastname, email, phone, role, password){
        return new Promise(async (resolve, reject)=>{
            try{
                const response = await axios.post(urlRegister,{name, lastname, email, password, phone, role})
                resolve(response.data)
            }catch(e){
                reject(e)
            }
        })
    }
}

export default authService;