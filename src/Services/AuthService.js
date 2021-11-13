import axios from 'axios';

const url = 'http://localhost:3000/api/login'
class authService {
    static login(email, password){

        return new Promise(async (resolve, reject)=>{
            try{
                const response = await axios.post(url, {email, password});
                resolve(response.data);
                console.log(response.data)
                localStorage.setItem('token', response.data.token)
                const token = localStorage.getItem(token)
                console.log(token)
                
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
}

export default authService;