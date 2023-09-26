
function Clicker(props) {
    return (
        <div className={props.className}>
            <button className="outline rounded-xl p-3 bg-red-500 hover:bg-red-700" onClick={() => props.setCount(props.count + 1)}>
                Click
            </button>
        </div>
    )
}

export default Clicker;