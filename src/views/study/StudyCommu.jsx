import React, { useState } from "react";

const Child = (props) => {
    const [msg, setMsg] = useState('')
    function send() {
        props.onReceive(msg)
        setMsg('')
    }
    return (
        <div>
            <h2>Child组件</h2>
            <input type="text" value={msg} onChange={e => setMsg(e.target.value)} />
            <button onClick={send}>给父亲msg</button>
            <div>父亲说：{props.content}</div>
        </div>
    )
}

export default class StudyComm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            msg: '',
            content: '',
            childMsg: ''
        }
    }
    send() {
        this.setState({ content: this.state.msg, msg: '' })
    }
    receive(event) {
        console.log('来自孩子', event);
        this.setState({ childMsg: event })
    }
    render() {
        let { content, msg, childMsg } = this.state
        return (
            <div>
                <h2>Father组件</h2>
                <input type="text" value={msg} onChange={e => this.setState({ msg: e.target.value })} />
                <button onClick={() => this.send()}>给孩子msg</button>
                <div>孩子说：{childMsg}</div>
                <hr />
                <Child content={content} onReceive={e => this.receive(e)}></Child>
            </div >
        )
    }
}

