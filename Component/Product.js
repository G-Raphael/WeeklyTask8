import React, {useState, useEffect} from 'react';
import axios from 'axios'


function Product() {
    const [lists, setLists] = useState(null);
    const url = "https://swapi.dev/api/people/"
     useEffect(() => {
      axios.get(url)
          .then(response =>{
        setLists(response.data.results)
               
      })
      
  },[url]);
  if(lists){
    return (
     lists.map((people, index) => {
         return(
   <div key={index} className="maincontainer" >
       <ul >
           <img src = "https://scotch-res.cloudinary.com/image/upload/v1556479698/xRZsnhr0_400x400_cpyg2t.png" alt = "" />
        <li >
           <p><span className="Intro">Name: </span><span className="response">{people.name}</span></p>
           <p><span className="Intro">Gender: </span><span  className="response">{people.gender}</span></p>
           <p><span className="Intro">Height: </span><span  className="response">{people.height}</span></p>
        
        </li>

        
        </ul>
      </div>
   )
        }))
  }
  
return(
    <div>{lists}</div>
)
}

export default Product;