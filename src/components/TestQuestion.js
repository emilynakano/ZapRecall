import React from 'react';

export default function TestQuestion (props) {
    const [openQuestion, setopenQuestion] = React.useState("Flashcard")
    const [color, setColor] = React.useState(<h2>Pergunta {props.number + 1}</h2>)
    const [img, setImg] = React.useState("img/Vector.svg")

    return ( <>{openQuestion === "Flashcard" ? <Flashcard img={img} color={color} setopenQuestion={setopenQuestion} number={props.number}/> : <Question imagesCont={props.imagesCont} setImagesCont={props.setImagesCont} setImg={setImg} number={props.number} setopenQuestion={setopenQuestion} setColor={setColor} contador={props.contador} setContador={props.setContador} question={props.question} answer={props.answer} setForgot={props.setForgot} forgot={props.forgot}/>}</>
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
            props.setImagesCont([...props.imagesCont, "img/forgot.svg"])
        }
        } className='button red'>
           <h3>Nao lembrei</h3> 
        </div>
        <div onClick={() => {
            props.setopenQuestion("Flashcard")
            props.setColor(<h4>Pergunta {props.number + 1}</h4>)
            props.setImg("img/doubt.svg")
            props.setContador(props.contador + 1)
            props.setImagesCont([...props.imagesCont, "img/doubt.svg"])
        }
        } className='button yellow'>
           <h3 >Quase nao lembrei</h3> 
        </div>
        <div onClick={() => {
            props.setopenQuestion("Flashcard")
            props.setColor(<h3>Pergunta {props.number + 1}</h3>)
            props.setImg("img/remember.svg")
            props.setContador(props.contador + 1)
            props.setImagesCont([...props.imagesCont, "img/remember.svg"])
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