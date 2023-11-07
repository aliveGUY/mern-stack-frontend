import { useState, useEffect } from "react";

const usePersisit = () => {
    const [persist, setPersist] = useState(JSON.parse(localStorage.getItem('persist')) || false)

    useEffect(() => {
        localStorage.setItem('persist', JSON.stringify(persist))
    }, [persist])

    return [persist, setPersist]
}

export default usePersisit
