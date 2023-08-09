import { useState } from "react"

export default function NewTodoForm(props) {
    const [newItem, setNewItem] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if (newItem === "") return
        // eslint-disable-next-line react/prop-types
        props.onSubmit(newItem)
    }

    return <>
        <form className="new-item-form" onSubmit={handleSubmit}>
            <div className="form-row">
                <label htmlFor="item">New Item</label>
                <input value={newItem} type="text" id="item" onChange={(e) => setNewItem(e.target.value)} />
            </div>
            <button className="btn" >Add</button>
        </form>
    </>
}