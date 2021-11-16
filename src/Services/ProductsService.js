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
    static updateOneProduct(id, type, title, titletwo, descriptionmaterial, descriptionadvantages, price, urlimage){
        return new Promise(async (resolve, reject)=>{
            try{
                const response = await axios.put(url+`/${id}`, {type, title, titletwo, descriptionmaterial, descriptionadvantages, price, urlimage})
                resolve(response.data)
            }catch(e){
                reject(e)
            }
        })
    }
    static deleteOneProducts(id){
        return new Promise(async (resolve, reject)=>{
            try{
                const response = await axios.delete(url+`/${id}`)
                resolve(response.data)
            }catch(e){
                reject(e)
            }
        })
    }
    static getByTypeAllProduct(typeproduct){
        return new Promise(async (resolve, reject)=>{
            try{
                const response = await axios.get(url+`/${typeproduct}`)
                resolve(response.data)
            }catch(e){
                reject(e)
            }
        })
    }
    static createPrduct(type, title, titletwo, descriptionmaterial, descriptionadvantages, price, urlimage){
        return new Promise(async (resolve, reject)=>{
            try{
                console.log(
                    type,
                    title,
                    titletwo,
                    descriptionmaterial,
                    descriptionadvantages,
                    price,
                    urlimage
                  );
                const response = await axios.post(url,{type, title, titletwo, descriptionmaterial, descriptionadvantages, price, urlimage})
                resolve(response.data)
            }catch(e){
                reject(e)
            }
        })
    }
}

export default prductsService;