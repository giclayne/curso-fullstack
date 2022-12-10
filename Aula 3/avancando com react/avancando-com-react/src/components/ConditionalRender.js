import {useState} from 'react'

const ConditionalRender = () => {
    const [x] = useState(true);

    /**IF else */
    const [name] = useState("Joao")
  return (
    <div>
        <h1>Isso será exibido?</h1>
        {x && <p>Se x for true, sim!</p>}

        {/**IF else com operador ternario */}
        {name==="Joao" ? (<div><p>Nome João</p></div>) : (<div><p>Nome não encontrado</p></div>)}
    </div>
  )
}

export default ConditionalRender