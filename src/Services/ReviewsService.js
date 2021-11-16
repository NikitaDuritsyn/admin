import axios from "axios";

const url = 'http://localhost:3000/api/reviews_static'

class reviewsService{
    static getAllReviews(){
        return new Promise(async (resolve, reject)=>{
            try{
                const response = await axios.get(url)
                resolve(response.data)
            }catch(e){
                reject(e) 
            }
        })
    }
    static deleteReviews(reciewID){
        return new Promise(async (resolve, reject)=>{
            try{
                const response = await axios.delete(url + `/${reciewID}`)
                resolve(response.data)
            }catch(e){
                reject(e) 
            }
        })
    }
}

export default reviewsService;