import { client } from "./lib/client"
export default async function getCategory( ){
   const query = `*[_type == " product " ]`
   const data = await client.fetch (query)
   console.log(data)
   return data
   


}