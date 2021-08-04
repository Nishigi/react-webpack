import React, { Component } from "react";

// 事件绑定
// 在React中的事件名，都是以on*开头的，比如onClick、onKeyUp等，这种事件叫做React合成事件。
// 使用ES5的方式绑定事件，事件对象永远都是最后一个参数，还需要使用bind()来解决this指向问题。
// 使用箭头函数的方式绑定事件，事件对象需要手动传递，this默认就指向当前组件的实例对象。

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