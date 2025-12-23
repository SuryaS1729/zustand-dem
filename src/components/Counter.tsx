import { useState } from "react"
import {useCounterStore} from "../store/counterStore.ts"

type Props = {}

export default function Counter({}: Props) {
    const {count,increase,decrease,reset}= useCounterStore()
    const [count2, setCount2] = useState(0)
  return (
    <div>
        <h2>Counter</h2>
        <p>{count}</p>
        
        <button onClick={decrease}>decrease</button>
        <button onClick={increase}>increase</button>
        <button onClick={reset}>reset</button>
        <h2>Counter2</h2>
        <p>{count2}</p>
        <button onClick={()=>{setCount2(count2-1)}}>decrease</button>
        <button onClick={()=>{setCount2(count2+1)}}>increase</button>
        <button onClick={()=>{setCount2(0)}}>reset</button>
    </div>
  )
}