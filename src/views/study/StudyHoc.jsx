import React from "react";

// 高阶组件

// 作用：是一种业务逻辑复用的高级技巧

// 语法基础：React组合特性。
// 本质：高阶组件就是一个纯函数，所以高阶组件也称为'高阶函数'
// 应用：状态管理（redux）就是基于高阶组件封装的

export default class StudyHoc extends React.Component {

    render() {

        return (
            <div>
                <h1>高阶组件</h1>
            </div >
        )
    }

}