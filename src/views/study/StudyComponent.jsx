import React, { useState } from "react";

// 一、类组件
// 1、使用class关键字来定义，extends继承React.Component
// 2、类组件有完整的生命周期钩子函数（constructor、render、componentDidMount...）
// 3、在类组件中，可以使用ref、上下文、this等特性
// 4、类组件中有state
// 5、相对函数式组件，类组件运行性能较差

// export default class StudyComponent extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             count: 61
//         }
//     }
//     changeNum(e) {
//         this.setState({
//             count: e.target.value
//         })
//     }
//     render() {
//         return <div>
//             <h1>类组件</h1>
//             <hr />
//             <input type="text" value={this.state.count} onChange={this.changeNum.bind(this)} />
//             <h2>{this.state.count}</h2>
//         </div>
//     }
// }


// 二、函数式组件（无状态组件）
// 1、使用function或箭头函数来定义，不继承React.Component
// 2、没有生命周期，没有this、ref、上下文等
// 3、没有state，所以称之为'无状态组件'
// 4、相对类组件，函数式组件运行性能更好
// 5、React 16.8后完全可以不用类组件了，全部使用函数式组件编码

export default function StudyComponent() {
    const [count, setCount] = useState(63)
    return <div>函数组件
      <hr />
        <input type="text" value={count} onChange={e => setCount(e.target.value)} />
        <h2>{count}</h2>
    </div>
}