import React, { useState } from "react";

export default function StudyHooks() {
    const [count, setCount] = useState(0)
    console.log('更新数据函数组件更新');
    return (
        <div>
            <h1>Hooks &nbsp;{count}</h1>
            <button onClick={() => setCount(count + 1)}>加加</button>
            <button onClick={() => setCount(count - 1)}>减减</button>
        </div>
    )
}