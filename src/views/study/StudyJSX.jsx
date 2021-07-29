import React from "react";

// 1-JSX=JavaScript XML 是语法糖
// 2-作用：大大提升React的可维护性，但在React开发中JSX语法不是必须的
// 3-JSX默认在React环境是不支持的，需安装@babel/preset-react依赖编译，编译结果是React.createElement()语法
// 4-JSX是变量，是对象，是React元素
// 5-JSX种可以写注释格式： {/*注释内容*/}
// 6-JSX可以使用其他变量，但要使用{}包起来
// 7-JSX{}里只能写表达式，不能使用语句
// 8-JSX中表达式的返回值，如果是文本直接参与视图渲染 
// 9-JSX{}表达式的返回值可以是数组
// 10-JSX中使用style时，{}可以放样式CSS键值对象：style={color:'red'}
// 11-JSX使用动态属性也可以用{}包起来
// 12-JSX中有三个特殊属性：classNmae 、htmlFor 、tabIndex
// 13-JSX中新增了三个新属性：key 、ref、dangerouslySetInnerHTML
// 14-JSX{}语法可以防注入攻击（XSS）
// 15-JSX是不可变对象 
const e = (
    <div>
        <h1>this-JSX</h1>
    </div>
)
const e1 = React.createElement('h1', null, ['react-JSX'])
const e2 = React.createElement('h2', null, ['JSX-study'])
export default class StudyJSX extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 1
        }
    }
    render() {//生命周期
        return (
            <>
                {e}
                {e1}
                {e2}
            </>
        )
    }
}