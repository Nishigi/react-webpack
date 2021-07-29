import React from "react";

export default class extends React.Component {
    click1() {
        console.log('click1 - ', this);
    }
    render() {
        return (
            <div>
                <h1>事件绑定</h1>
                <button onClick={this.click1.bind(this)} >click</button>
            </div>
        )
    }
}