const GetData = async()=>{
    try{
       const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
       if(!response.ok){
        throw new Error("Não foi possivel fazer Fetch")
       }
        const data = response.json()
       return data
    }
    catch(error){
        console.error(error)
        return []
    }
    
    
}

export default GetData