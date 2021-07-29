import React from "react";

//条件渲染
export default class extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            bol: true
        }
    }
    render() {
        const {
            bol
        } = this.state
        return (
            <div>
                <h1>条件渲染</h1>

                <hr />

                {bol && <h2>this is h2</h2>}

                <button onClick={() => this.setState(s => ({ bol: !s.bol }))}>显示/隐藏</button>
            </div >
        )
    }
}