import React, { useState } from 'react'

const Select = ({}) => {

    const [selected, setSelected] = useState("All");

    let handleSelectionChange = (e) => {
        setSelected(e.target.value);
    }

    return (
        <div>
            <select value={selected} onChange={handleSelectionChange}>
                <option value="All">All</option>
                <option value="Option 1">Option 1</option>
                <option value="Option 2">Option 2</option>
            </select>
            <h1>{selected}</h1>
        </div>
    )
}

export default Select;