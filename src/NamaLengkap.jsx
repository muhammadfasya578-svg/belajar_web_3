import { useState } from "react"

function NamaLengkap() {
    const [namaDepan, setNamaDepan] = useState('')
    const [namaBelakang, setNamaBelakang] = useState('')
    const [alamat, setAlamat] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()

        setIsLoading(true);

        setTimeout(function (){
            setIsLoading(false);
            alert(`hallo, ${namaDepan} ${namaBelakang} tinggal di ${alamat}`)
        },3000)
    }

    return (
        <form onSubmit={handleSubmit}>

            <input 
            type="text"
            placeholder="Masukan Nama Depan"
            value={namaDepan}
            onChange={(e) => setNamaDepan(e.target.value)}
            />

            <input 
            type="text"
            placeholder="Masukan Nama Belakang"
            value={namaBelakang}
            onChange={(e) => setNamaBelakang(e.target.value)}
            />

            <textarea 
            name="" 
            placeholder="masukan alamat" 
            id=""
            value={alamat}
            onChange={(e) => setAlamat(e.target.value)}
            ></textarea>

            {isLoading && <p>Loading ...</p>}
            <button type="submit" disabled={isLoading}>simpan</button>


            <p>nama saya {namaDepan} {namaBelakang} tinggal di{alamat}</p>
        </form>
    )
}

export default NamaLengkap