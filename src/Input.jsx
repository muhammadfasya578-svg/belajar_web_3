import { useState } from "react"

function Input() {
    const [nama, setNama] = useState('')

    const handleChange = (e) => {
        setNama(e.target.value)
    }

    return (
        <>
            <input type="text" value={nama} onChange={handleChange} />
            nama saya adalah {nama}

        </>
    )

}

export default Input