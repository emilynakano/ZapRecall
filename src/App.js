import React from 'react';

export default function App() {
    const [screen, setScreen] = React.useState("HomeScreen")
    
    
    return (
        <>
            {screen === "HomeScreen" ? <HomeScreen setScreen = {setScreen}/> : <FirstScreen />}
        </>
        
    )
}
function HomeScreen({setScreen}) {
    return (
        <div className="HomeScreen">
            <img width={136} src="img/image 1.svg" />
            <h1>ZapRecall</h1>
            <button onClick={() => setScreen("FirstScreen")}>Iniciar recall!!</button>
        </div>
    )
}
function FirstScreen() {
    return (
        <div className="FirstScreen">
            <header>
                <img width={53} src="img/image 1.svg" />
                <h1>ZappRecall</h1>
            </header>
            {perguntas.map((pergunta, index)=> <Button pergunta={pergunta} key={index}/>)}
            <Question />
            
        </div>
    )
}
function Button (props) {
   return (
    <button onClick={OpenQuestion}> 
        <h2>Pergunta {props.pergunta}</h2> 
        <img width={23} src="img/Vector.svg" />
    </button>
   )
}
const perguntas = [1, 2, 3, 4]

function Question () {
    return (
    <button className='Question' onClick={OpenQuestion}> 
        <h2> O que é JSX?</h2> 
        <div className="vector">
            <img width={23} src="img/Vector (1).svg" />
        </div>
    </button>
    )
}
function OpenQuestion() {
    return (
        alert("oi")
    )
}