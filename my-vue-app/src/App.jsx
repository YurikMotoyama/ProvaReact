import { useState } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css'



function App() {

  const [conselhoAleatorio] = useState([])
  const [conselhoDog] = useState([])
  const [conselhoCat] = useState([])
  const [conselhoStudy] = useState([])


 //if(conselhoAleatorio == ''){
 //  axios.get("https://api.adviceslip.com/advice")
 //  .then(res =>{
 //    console.log(res.data.slip.advice)
 //    alert(res.data.slip.advice)
 //  })
 //}

  function conselhoA() {
    if(conselhoAleatorio == ''){
      axios.get("https://api.adviceslip.com/advice")
      .then(res =>{
        console.log(res.data.slip.advice)
        alert(res.data.slip.advice)
      })
    }
  }

  function conselhoD() {
    if(conselhoDog == ''){
      axios.get("https://api.adviceslip.com/advice/search/dog")
      .then(res =>{
        console.log(res.data.slips[0].advice)
        alert((res.data.slips[0].advice))
      })
    }
  }

  function conselhoC() {
    if(conselhoCat == ''){
      axios.get("https://api.adviceslip.com/advice/search/cat")
      .then(res =>{
        alert((res.data.message.text))
      })
    }
  }

  function conselhoS() {
    if(conselhoStudy == ''){
      axios.get("https://api.adviceslip.com/advice/search/study")
      .then(res =>{
        alert((res.data.message.text))
      })
    }
  }





    return(
    <>
    <div>
        <button className='btn btn-success' onClick={conselhoA}>Conselho Aleatorio</button>
        <button className='btn btn-success' onClick={conselhoD}>Conselho Dog</button>
        <button className='btn btn-success' onClick={conselhoC}>Conselho Cat</button>
        <button className='btn btn-success' onClick={conselhoS}>Conselho Study</button>
    </div>
  
    </>
    
    )
  
}


      



export default App
