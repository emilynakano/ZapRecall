import React from 'react';


export default function FirstScreen() {
    const [contador, setContador] = React.useState(0);
    const [forgot, setForgot] = React.useState(0)
    

    return (
        <div className="FirstScreen">
            <header>
                <img width={53} src="img/image 1.svg" />
                <h1>ZappRecall</h1>
            </header>
            {questions.map((question, index)=>
                    <TestQuestion number={index} key={index} question={question.question} answer={question.answer} setContador={setContador} setForgot={setForgot} forgot={setForgot} contador={contador}/>
                )
             }
            <Testfooter contador={contador} forgot={forgot}/>
            
        </div>
    )
}
function Testfooter(props) {
    return (
        <>
        {props.contador === 4 ? props.forgot === 0 ? <footer className='bigFooter'>
                <div>
                    <img src="img/party 2.svg" />
                    <h2> parabens </h2>
                </div>
                <h2>Você não esqueceu de nenhum flashcard!</h2>
                <h2> {props.contador}/4 CONCLUIDAS!</h2>

        </footer> 
        : 
        <footer className='bigFooter'>
                <div>
                    <img src="img/sad 7.svg" />
                    <h2> putz</h2>
                </div>
                <h2>Ainda faltam alguns... 
                    Mas não desanime!</h2>
                <h2> {props.contador}/4 CONCLUIDAS!</h2>

        </footer> 
        :
        <footer>
               <h2> {props.contador}/4 CONCLUIDAS!</h2>
        </footer>}
        </>
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
    const [img, setImg] = React.useState("img/Vector.svg")

    return ( <>{openQuestion === "Flashcard" ? <Flashcard img={img} color={color} setopenQuestion={setopenQuestion} number={props.number}/> : <Question setImg={setImg} number={props.number} setopenQuestion={setopenQuestion} setColor={setColor} contador={props.contador} setContador={props.setContador} question={props.question} answer={props.answer} setForgot={props.setForgot} forgot={props.forgot}/>}</>
    ) 
   
}

function Flashcard(props) {
    return (
        <button className='Flashcard' onClick={() => props.setopenQuestion("Question")}> 
            {props.color}
            <img width={23} src={props.img} />  
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
        <div onClick={() => {
            props.setopenQuestion("Flashcard")
            props.setColor(<h5>Pergunta {props.number + 1}</h5>)
            props.setImg("img/forgot.svg")
            props.setContador(props.contador + 1)
            props.setForgot(props.forgot + 1)
        }
        } className='button red'>
           <h3>Nao lembrei</h3> 
        </div>
        <div onClick={() => {
            props.setopenQuestion("Flashcard")
            props.setColor(<h4>Pergunta {props.number + 1}</h4>)
            props.setImg("img/doubt.svg")
            props.setContador(props.contador + 1)
        }
        } className='button yellow'>
           <h3 >Quase nao lembrei</h3> 
        </div>
        <div onClick={() => {
            props.setopenQuestion("Flashcard")
            props.setColor(<h3>Pergunta {props.number + 1}</h3>)
            props.setImg("img/remember.svg")
            props.setContador(props.contador + 1)
        }
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