function Counter(props) {
    return (
        <div className={props.className}>
            <h2 className="bg-gray-500 p-3">{Math.floor(props.count)}</h2>
        </div>
    )
}

export default Counter;