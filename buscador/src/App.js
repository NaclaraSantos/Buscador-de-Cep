import{useState} from 'react'
import {FiSearch} from 'react-icons/fi'
import './style.css'
import api from './services/api'
function App() {
 const [input,setInput]=useState('')
 const [cep,Setcep] = useState({})
async function handleSearch(){
  //34012642/json/
 if(input === ''){
  alert("Digite algum Cep!")
  return;
 }
 try{
const response= await api.get(`${input}/json`);
Setcep(response.data)
setInput("")
 }
 catch{
  alert("Ops erro ao buscar!");
  setInput("")
 }
}
  return (
    <div className="Conteiner">
     <h1 className="title">Buscador de CEP</h1>

     <div className="conteinerinput">
      <input
      onChange={(e)=>setInput(e.target.value)}
      value={input}
      type="text"
      placeholder="Digite seu CEP...">
      </input>
      <button className="buttonSearch" onClick={handleSearch}>
        <FiSearch size={25} color='#fff'/>
      </button>
     </div>
     {Object.keys(cep).length > 0 && (
      <main className='main'>
     <h2>CEP:{cep.cep}</h2>
     <span>{cep.logradouro}</span>
     <span>{cep.bairro}</span>
     <span>{cep.localidade}-{cep.uf}</span>
     </main>
     )}
    </div>
  );
}

export default App;
