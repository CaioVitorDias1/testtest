import { useEffect, useState } from "react"

export default function Test(){
    
    const [count, setCount] = useState(1)

    const [count2, setCount2] = useState(1)

    useEffect(() => {
        console.log("roda a cada incrementação")
    }, [count])

    useEffect(() => {
        console.log("roda só uma vez")
    }, [])




    return (
        <>
        <button onClick={() => setCount((prevCount)=>prevCount + 1 )}>
            botaozinho
        </button>

        <p>
            esse é o numero {count}
        </p>


        <button onClick={() => setCount2((prevCount)=>prevCount + 1 )}>
            botaozinho 2
        </button>

        <p>
            esse é o numero {count2}
        </p>
    </>
    )
}