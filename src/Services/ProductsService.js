import axios from "axios";

const url = 'http://localhost:3000/api/products'

class prductsService{
    static getAllProducts(){
        return new Promise(async (resolve, reject)=>{
            try{
                const response = await axios.get(url)
                resolve(response.data)
            }catch(e){
                reject(e)
            }
        })
    }
}

export default prductsService;