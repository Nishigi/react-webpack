import React from "react";

// JSX=JavaScript XML 是语法糖
// 
// JSX是变量，是对象，是React元素
// JSX种可以写注释格式： {/*注释内容*/}
// JSX可以使用其他变量，但要使用{}包起来
// JSX{}里只能写表达式，不能使用语句
// JSX中表达式的返回值，如果是文本直接参与视图渲染 
// JSX{}表达式的返回值可以是数组
// JSX使用动态属性也可以用{}包起来
// JSX中有三个特殊属性：classNmae htmlFor tabIndex
// JSX中新增了三个新属性：key，dangerouslySetInnerHTML，
export default class StudyJSX extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 1
        }
    }
    render() {//生命周期
        return (
            <div>
                <h1>JSX-study</h1>
            </div>
        )
    }
}