export default function HomeScreen({setScreen}) {
    return (
        <div className="HomeScreen">
            <img width={136} src="img/image 1.svg" />
            <h1>ZapRecall</h1>
            <button onClick={() => setScreen("FirstScreen")}>Iniciar recall!!</button>
        </div>
    )
}