import axios from 'axios';

const url = 'http://localhost:3000/api/user'
class UserService {
    static getAllUsers(){

        return new Promise(async (resolve,reject)=>{
            try{
                const response = await axios.get(url);
                resolve(response.data);
            }catch(e){
                reject(e) 
            }
        })

        // const response = axios.get('http://localhost:3000/api/user')
        // console.log(response.Promise);
        // return response.data;
    }   
}

export default UserService;