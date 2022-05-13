import React from 'react';
import FirstScreen from './components/FirstScreen';
import HomeScreen from './components/HomeScreen';

export default function App() {
    const [screen, setScreen] = React.useState("HomeScreen")
    
    return (
        <>
            {screen === "HomeScreen" ? <HomeScreen setScreen = {setScreen}/> : <FirstScreen />}
        </>
        
    )
}