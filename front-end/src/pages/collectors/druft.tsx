import { useQuery } from "react-query";
import axios from "axios";

const Druft=()=>{
    const { isLoading, data }=useQuery('supername',()=>{
        return axios.get('http://localhost:5000/collectors/all')
    })
    if (isLoading) return 'Loading...'

    return (
        <>
        <h2>heading</h2>
        {data?.data.map((name:any)=>{
            return( <div key={name.name}>{name.name}</div>)
        })} 
        </>
    )
}

export default Druft