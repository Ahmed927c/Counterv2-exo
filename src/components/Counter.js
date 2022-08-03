// je crée un component Counter avec les props value, increment, decrement, reset;
const Counter = ({value,increment,decrement,reset}) => {

  return (
    <div className="counter">
        <div className="counter-main">
            <button className={value===0?'disabled':'true'} onClick={decrement}>-</button>
            <button className="btn-violet"> {value}</button>
            <button className={value>10? 'disabled':'true'} onClick={increment}>+</button>
            <button className='reset' onClick={reset}>Reset</button>
        </div>
    </div>
  )
}

export default Counter