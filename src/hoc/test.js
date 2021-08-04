import React from "react";

// 入参：WrappedComponent是React组件
// 返回值：一个新的React组件

// 结论：高阶组件（高阶函数）被称之为“容器组件”，WrappedComponent被称之为“UI组件”
const Footer = () => (<footer>网站的底部</footer>)

export default function test(WrappedComponent) {
    return class Result extends React.Component {
        render() {
            return (
                <WrappedComponent />
            )
        }
    }
}