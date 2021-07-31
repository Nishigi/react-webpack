import React, { Component } from "react";

// 在React中事件名都是以on开头，比如onClick、onChange、onKeyUp等这种事件叫做React合成事件

export default class StudyEvent extends Component {
    constructor() {

    }
    click1(arg, e) {
        console.log('event-----', e);
        console.log('this-----', this);
        console.log('arg------', arg);
    }
    click2(e, arg) {
        console.log('event-----', e);
        console.log('this-----', this);
        console.log('arg------', arg);
    }
    //stopPropagation阻止冒泡
    //preventdefault阻止默认事件
    render() {
        return (
            <div>
                <h1>事件绑定</h1>
                {/* 使用es5语法，使用bind()修改this指向 */}
                <button onClick={this.click1.bind(this, '22')} >click1</button>
                <button onClick={(e) => this.click2(e, '11')} >click2</button>
            </div>
        )
    }
}