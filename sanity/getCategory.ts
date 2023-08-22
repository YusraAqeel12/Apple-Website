import { client } from "./lib/client"
export default async function getCategory( ){
   const query = `*[_type == " category " ]{
      _id , 
        ...   }`
   const data = await client.fetch (query)
   console.log(data)
   return data
   


}