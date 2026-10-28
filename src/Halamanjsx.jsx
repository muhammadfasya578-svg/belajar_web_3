import Counter from "./Counter";
import LoggedIn from "./LoggedIn";
import UserProfile from "./UserProfile";
import { useState } from "react";

function Halamanjsx() {

    const nama = "budi";
    const isLoggedIn = false;
    const isAdmin = false;

    const [tab,setTab] = useState('counter');

    const karyawan = [
        {
            nama: "fasya",
            jabatan: "CEO",
            divisi: "IT"
        },
        {
            nama: "padil",
            jabatan: "CEO",
            divisi: "IT"
        },
        {
            nama: "fikri",
            jabatan: "CEO",
            divisi: "IT"
        },
        {
            nama: "allef",
            jabatan: "CEO",
            divisi: "IT"
        }
    ]

    return (
        <>
            <p style={{
                marginTop: '100px',
            }}>
                hello {nama}
            </p>

            <p>Total: {10 + 5}</p>

            <LoggedIn admin={isAdmin} login={isLoggedIn} />
            {karyawan.map((kr,i) => (
                <UserProfile key={i} nama={kr.nama} jabatan={kr.jabatan} divisi={kr.divisi} />
            ))}

            <hr />
            <button onClick={() => setTab('counter')}>counter</button> | <button onClick={() => setTab('koponen_lain')}>koponen lain</button>
            { tab === 'counter' ? <Counter /> : <p>komponen lain</p> }

        </>
    )
}

export default Halamanjsx;