import React, { useState } from "react"
import '../style.css'

const Counter = () => {
    const[count, setCount] = useState(0);

    const handleChange =()=>{
        setCount(count+2)
    }
  return (
    <div>

<h2>{count}</h2>
<button onClick={handleChange}>Click Me</button>
    </div>
  )
}

export default Counter