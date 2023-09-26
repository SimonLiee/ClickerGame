function Buildings(props) {
     // Will automatically increase count every second

    let cabins = "";
    for(let i = 0; i < props.buildings.cabin.owned; i++)
        cabins = cabins + "🏚️";
    
    let houses = "";
    for(let i = 0; i < props.buildings.house.owned; i++)
        houses = houses + "🏠";

    let factories = "";
    for(let i = 0; i < props.buildings.factory.owned; i++)
        factories = factories + "🏭";

    return (
        <div className={props.className}>
            <h2 className='Cabins'>{cabins}</h2>
            <h2 className='House'>{houses}</h2>
            <h2 className='Factory'>{factories}</h2>
        </div>
    )
}

export default Buildings;