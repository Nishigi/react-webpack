import React, { useState } from "react";

const Child = () => {
    return (
        <div>
            <h2>Child组件</h2>
            <input type="text" />
            <button>给父亲msg</button>
        </div>
    )
}

export default function StudyComm() {
    const [msg, setMsg] = useState('')
    return (
        <div>
            <h2>Father组件</h2>
            <input type="text" value={msg} onChange={e => setMsg(e.target.value)} />
            <button>给孩子msg</button>
            <hr />
            <Child></Child>
        </div>
    )
}

