function Button() {

    const handleClick = () => {
        alert('tombol ini di klick')
    }

    return(

        <button onClick={handleClick}>klick saya</button>
    )
}

export default Button