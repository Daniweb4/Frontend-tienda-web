import axios from 'axios';
import { useState }  from 'react'

const crud = (urlBase) => {

  //REad leer
   const [apiData, setApiData] = useState([]);
  
   /*const getApi=(url)=>{
    axios.get(url)
        .then(res => setApiData(res.data))
        .catch(err => console.log(err))
  
   }*/
   /** Este metodo es para obtener datos*/
   const getApi=(path)=>{
    axios.get(`${urlBase}${path}`)
    .then(res=>setApiData(res.data))
    .catch(err=>console.log(err))
   }/**EEste metodo es para crear e insertar datos */
   const postApi=(path, data)=>{
    axios.post(`${urlBase}${path}/`,data)
    .then(res => { 
      console.log(res.data)
      setApiData([...apiData, res.data])
    })
    .catch(err => console.log(err))

   }/**Este metodo es para eliminar datos de la base de datos */
     //Delete
     const deleteApi=(path,id) =>{
      axios.delete(`${urlBase}${path}/${id}`)
      .then(() => {
          setApiData(apiData.filter(element => element.id!==id))
          console.log('borrado con exito');
     
      })
      .catch(err => console.log(err));
  } 
    //update
    const updateApi=(path,id,data) => {
      axios.put(`${urlBase}${path}/${id}/`,data)
      .then(res=>{ 
          setApiData(apiData.map(element=>element.
          id===id? res.data:element))
          console.log(res.data);
      })
      .catch(err =>console.log(err))

  }

   

  return [apiData, getApi,postApi,deleteApi, updateApi]
}

export default crud
