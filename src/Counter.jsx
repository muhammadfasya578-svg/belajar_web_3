import { useEffect, useState } from "react";

function Counter() {

    const [counter, setCounter] = useState(0)

    const onClickTambah =
        () => { setCounter(counter + 1) }

    useEffect(() => {
        
        const interval = setInterval(() => {
            console.log('interval'+ new Date())
        }, 1000)
        
        return () => {
            clearInterval(interval);
        }
    },[])

    const onClickKurang = () => {
        if (counter <= 0) {
            alert('minimal 0')
            setCounter(0)
        } else
            setCounter(counter - 1)
    }

    return (
        <div>
            komponen counter:
            <button onClick={onClickKurang
            }>kurang</button>
            {counter}
            <button onClick={onClickTambah}>tambah</button>
        </div >
    )
}

export default Counter;