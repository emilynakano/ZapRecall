import React from 'react';

export default function Testfooter(props) {
    return (
        <>
        {props.contador === 4 ? props.forgot === 0 ? <footer className='bigFooter'>
                <div>
                    <img src="img/party 2.svg" />
                    <h2> parabens </h2>
                </div>
                <h2>Você não esqueceu de nenhum flashcard!</h2>
                <h2> {props.contador}/4 CONCLUIDAS!</h2>
                <div className="images">
                {props.imagesCont.map((i) => <img src={i}/>) }
                </div>

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
                <div className="images">
                {props.imagesCont.map((i) => <img src={i}/>) }
               </div>
        </footer> 
        :
        <footer className='principalFooter'>
               <h2> {props.contador}/4 CONCLUIDAS!</h2>
               <div className="images">
                {props.imagesCont.map((i) => <img src={i}/>) }
               </div>
        </footer>}
        </>
    )
}