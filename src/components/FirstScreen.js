import React from 'react';
import Testfooter from './TestFooter';
import TestQuestion from './TestQuestion';

export default function FirstScreen() {
    const [contador, setContador] = React.useState(0);
    const [forgot, setForgot] = React.useState(0)
    const [imagesCont, setImagesCont] = React.useState([])
    

    return (
        <div className="FirstScreen">
            <header>
                <img width={53} src="img/image 1.svg" />
                <h1>ZappRecall</h1>
            </header>
            {questions.map((question, index)=>
                    <TestQuestion imagesCont={imagesCont} setImagesCont={setImagesCont} number={index} key={index} question={question.question} answer={question.answer} setContador={setContador} setForgot={setForgot} forgot={setForgot} contador={contador}/>
                )
             }
            <Testfooter imagesCont={imagesCont} contador={contador} forgot={forgot}/>
            
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
