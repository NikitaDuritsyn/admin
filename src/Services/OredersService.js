import axios from 'axios';

const url = 'http://localhost:3000/api/orders'
class ordersService {
    static getAllOrders(){

        return new Promise(async (resolve, reject)=>{
            try{
                const response = await axios.get(url);
                resolve(response.data);
            }catch(e){
                reject(e) 
            }
        })
    }
    static deleteOneOrder(orderID){
        
        return new Promise(async (resolve, reject)=>{
            try{
                // console.log(orderID);
                const response = await axios.delete(url + `/${orderID}`);
                resolve(response.data);
            }catch(e){
                reject(e) 
            }
        })
    }
    // deleteALLOrder
    static deleteALLOrder(){
        
        return new Promise(async (resolve, reject)=>{
            try{
                const response = await axios.delete(url);
                resolve(response.data);
            }catch(e){
                reject(e) 
            }
        })
    }
}

export default ordersService;