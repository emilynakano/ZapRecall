import React from 'react';


export default function FirstScreen() {
    const [contador, setContador] = React.useState(0);
    return (
        <div className="FirstScreen">
            <header>
                <img width={53} src="img/image 1.svg" />
                <h1>ZappRecall</h1>
            </header>
            {questions.map((question, index)=>
                    <TestQuestion number={index} key={index} question={question.question} answer={question.answer} setContador={setContador} contador={contador}/>
                )
             }
            <footer>
               <h2> {contador}/4 concluidas</h2>
            </footer>
        </div>
    )
}
const questions = [
    {question:"O que é JSX?", answer:"Uma extensão de linguagem do JavaScript"}, 
    {question:"O React é __", answer:"uma biblioteca JavaScript para construção de interfaces"}, 
    {question:"Componentes devem iniciar com __ ", answer:"letra maiúscula"}, 
    {question:"Podemos colocar __ dentro do JSX ", answer:"expressões"},
    {question:"O ReactDOM nos ajuda __", answer:"interagindo com a DOM para colocar componentes React na mesma"}, 
    {question:"Usamos o npm para __ ", answer:"gerenciar os pacotes necessários e suas dependências"}, 
    {question:"Usamos props para __ ", answer:"passar diferentes informações para componentes "}
]
questions.sort(comparador)
function comparador() { 
    return Math.random() - 0.5; 
}
questions.length = 4

function TestQuestion (props) {
    const [openQuestion, setopenQuestion] = React.useState("Flashcard")
    const [color, setColor] = React.useState(<h2>Pergunta {props.number + 1}</h2>)

    return ( <>{openQuestion === "Flashcard" ? <Flashcard color={color} setopenQuestion={setopenQuestion} number={props.number}/> : <Question setColor={setColor} contador={props.contador} setContador={props.setContador} question={props.question} answer={props.answer}/>}</>
    ) 
   
}

function Flashcard(props) {
    return (
        <button className='Flashcard' onClick={() => props.setopenQuestion("Question")}> 
            {props.color}
            <img width={23} src="img/Vector.svg" />  
        </button>
    )
}
function Question (props) {
    const [openAnswer, setOpenAnswer] = React.useState("question")
    return (<> {openAnswer === "question" ? 
    <Button question={props.question} setOpenAnswer={setOpenAnswer}/> 
    : 
    <button className='Question'> 
    <h2>{props.answer}</h2> 
    <div className="buttons">
        <div className='button red'>
           <h3>Nao lembrei</h3> 
        </div>
        <div className='button yellow'>
           <h3>Quase nao lembrei</h3> 
        </div>
        <div onClick={() =>
            props.setColor(<h3>Pergunta {props.number + 1}</h3>)
        } className='button green'>
           <h3>Zap!</h3> 
        </div>
    </div>
</button>}
    
    </>)
}
function Button (props) {
    return (
        <button className='Question'> 
            <h2>{props.question}</h2> 
            <div className="vector">
                <img onClick={()=> props.setOpenAnswer("answer")} width={23} src="img/Vector (1).svg" />
            </div>
        </button>
    )
}