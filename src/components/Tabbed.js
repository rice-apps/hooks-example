import React, { useState, useEffect } from 'react'

const Tabbed = ({}) => {

    const [tab, setTab] = useState("Center");

    useEffect(
        () => {
            document.title = "The current tab is: " + tab;
        },
        [tab]
    )

    return (
        <div>
            <div>
                <button onClick={() => setTab("Left")}>Left</button>
                <button onClick={() => setTab("Center")}>Center</button>
                <button onClick={() => setTab("Right")}>Right</button>
            </div>
            <h1>{tab} Tab</h1>
        </div>
    )
}

export default Tabbed;