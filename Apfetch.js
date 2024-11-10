
import { useEffect,useState } from "react"

const Apfetch=()=>{
    const[data,setData]=useState([])
    useEffect(()=>{
        fetchData()},[]);
       async function fetchData(){
             const res=await fetch('https://fakestoreapi.com/products')//metchion code
        const dataForm =await res.json()//json format converted
                //  console.log(dataForm)
                   setData(dataForm)
                
        }
        return(
            <div>
                <h1>Coming Data</h1>
                {
                  data.map((item)=>{
                    return(
                       
                            
                            <div style={{display:'grid', gridTemplateColumns:'300px'}}>
                              <h3>Category:{item.category}</h3>
                              <p>Description:{item.description}</p>
                              <p>Id:{item.id}</p>
                              <img  style={{width:'250ps',height:'250px'}}src={item.image}/>
                              <p >Price:${item.price}</p>
                              <p>Rate:{item.rating.rate}</p>
                              <p>Count:{item.rating.count}</p>
                              <h5>Title:{item.title}</h5>
                           </div>

                   
                    )   
                  })
                }
            </div>
        )
    }
    
export default Apfetch