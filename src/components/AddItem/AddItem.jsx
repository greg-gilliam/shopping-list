export default function AddItem({onAddItem}) {
    const [text, setText] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        setText('')
        onAddItem(text)
    }
    return (
<form onSubmit={handleSubmit}>
    <input 
    placeholder='New Item'
    value={text} onChange={(event) => setText(event.target.value)} />
    <button type='submit'>Add Item</button>
</form>
    )
}