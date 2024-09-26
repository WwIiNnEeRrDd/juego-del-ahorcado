export const Input = () => {

    const [letter, setLetter] = useState('')

    const handleNewLetter = (event) => {
        const newLetter = event.target.value
        setLetter(newLetter)
    }

    return (
        <div>
            <input type="text" maxLength="1" onChange={handleNewLetter} value={letter}></input>
        </div>
        
    )
}