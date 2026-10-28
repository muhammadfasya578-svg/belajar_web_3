function LoggedIn({ login, admin }) {
    return (
        <>
            {login ? (
                admin ? <p>kamu adalah admin</p> : <p>kamu adalah user</p>
            ) : <p>user belum login</p>}
        </>
    )
}

export default LoggedIn