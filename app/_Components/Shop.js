
function Shop(props) {
    let buildings = Object.keys(props.buildings);
    const listItems = buildings.map((keys, k) =>
        <tr style={{outlineStyle:"solid"}} key={k}>
            <td style={{outlineStyle:"solid"}}>{props.buildings[keys].name}</td>
            <td style={{outlineStyle:"solid"}}>{props.buildings[keys].prodSpeed}</td>
            <td style={{outlineStyle:"solid"}}>{props.buildings[keys].owned}</td>
            <td style={{outlineStyle:"solid"}}>{props.buildings[keys].max}</td>
            <td style={{outlineStyle:"solid"}}>{props.buildings[keys].price}</td>
            <td>
                <button className="bg-yellow-500" onClick={() => {
                    if(props.count >= props.buildings[keys].price){
                        if(props.buildings[keys].owned < props.buildings[keys].max){
                            props.setCount(() => props.count - props.buildings[keys].price);
                            props.buildings[keys].owned += 1;
                        }
                    }
                }}>Buy
                </button>
            </td>
        </tr>
    );
    return (
        <table className={props.className}>
            <tbody>
                <tr style={{outlineStyle:"solid"}}>
                    <th>Building</th>
                    <th>Production</th>
                    <th>Owned</th>
                    <th>Max</th>
                    <th>Price</th>
                    <th>Buy</th>
                </tr>
                {listItems}
            </tbody>
        </table>
    )
}

export default Shop;