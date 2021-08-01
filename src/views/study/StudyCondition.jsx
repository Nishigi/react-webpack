import React from "react";

//条件渲染
export default class StudyCondition extends React.Component {
    constructor(props) {

        super(props)

        this.state = {
            bol: true,
            idx: 1
        }
    }
    render() {
        const {
            bol, idx
        } = this.state

        return (
            <div>
                <h1>条件渲染</h1>

                <hr />

                {bol ? <h2>黑夜</h2> : <h2>白天</h2>}

                <button onClick={() => this.setState(s => ({ bol: !s.bol }))}>显示/隐藏</button>

                <hr />

                {idx === 1 && <h2>1111111111111</h2>}
                {idx === 2 && <h2>2222222222222</h2>}

                {idx === 3 && <h2>3333333333333</h2>}
                {idx === 4 && <h2>4444444444444</h2>}
                <button onClick={() => this.setState(s => ({ idx: s.idx === 4 ? 1 : s.idx + 1 }))}>更改</button>
            </div >
        )
    }
}