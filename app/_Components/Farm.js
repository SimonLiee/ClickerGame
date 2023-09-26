import { useEffect, useState } from 'react';
import './Farm.css';

function randomInt(max) {
    return Math.floor(Math.random() * max);
}

function Seeds(props) {
    let buttonClass = "outline outline-white m-3 rounded";
    return <div>
        <button className={buttonClass}>Plant1</button>
        <button className={buttonClass}>Plant2</button>
        <button className={buttonClass}>Plant3</button>
    </div>;
}

function Farm(props) {
    let plots = [];
    const [plantSprite, setPlantSprite] = useState("/Sprites/plantCursor/rosePlant.jpg");

    // Fill plots with plants
    for(let i = 0; i < props.plants.length; i++) {
        plots.push(<div onClick={onClick} plant={i} key={i} className="plot text-xl">{props.plants[i]}</div>);
    }

    // When a plant is clicked, harvest, plant or ignore
    function onClick(e) {
        let plant = e.target.getAttribute('plant')
        if(props.plants[plant] < 0){
            props.plants[plant] = 0;
        } else if(props.plants[plant] >= 3){
            props.plants[plant] = -1;
            props.setCount(() => props.count + 10);
        }
    }

    // Every 5 seconds, execute growth cycle
    useEffect(()=>{
        const interval = setInterval(() => {
            for(let i = 0; i < 10; i++) {
                if(props.plants[i] >= 0 && props.plants[i] < 3) {
                    props.plants[i] += randomInt(2);
                }
            }
        }, 5000);
        return () => clearInterval(interval);
        }, []
    );
        
    if(props.buildings.farm.owned > 0) 
        return (
            <div className={props.className}>
                <Seeds setPlantSprite={setPlantSprite}/>
                <div className="flex gap-1 m-3">
                    {plots}
                </div>
            </div>
        )
    else    
        return null;
}

export default Farm;