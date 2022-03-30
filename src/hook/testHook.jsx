import { useEffect, useState } from "react"

export const TestHook = (startValue=0) => {
    const [count, setCount] = useState(startValue);

    const increase = () => {
        setCount(count + 1)
    }

    const decrease = () => {
        setCount(count - 1)
    }

    return {count, increase, decrease}
}