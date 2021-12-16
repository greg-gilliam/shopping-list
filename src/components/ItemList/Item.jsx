import { useState } from 'react'

function Item({ item, onChange, onDelete }) {
    const [isEditing, setIsEditing] = useState(false)
    let itemContent
    if (isEditing) {
        itemContent = (
            <> 
            <input value={item.text} onChange={(event) => {
                onChange({ ...item, text: event.target.value,})
            }} />
            <button type='button' onClick={() => setIsEditing(false)} >Save</button>
            </>
        )
    } else {
        itemContent = (
            <>
            <p style={{ textDecoration: item.done ? 'line-through' : null}}>
                {item.text}
            </p>
            <button type='button' onClick={() => setIsEditing(true)}>Edit</button>
            </>
        )
    }
    return (
        <div>
            <input type='checkbox' checked={item.done} onChange={(event) => {
                onChange({
                    ...item, 
                    done: event.target.checked,
                })
            }} />
            <button type='button' onClick={() => onDelete(item.id)} >
                Delete
            </button>
        </div>
    )
}

export default Item;
