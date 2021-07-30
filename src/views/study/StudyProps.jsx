import React from "react";

//props:父子组件通信、路由、状态管理、组件化
// 特点：组件内部不能修改props
// 类组件和函数式组件都有props
//类组件用this.props访问，函数式组件中入参就是props
function HelloChild(props) {
    console.log('this is props', props);
    return (
        <div>
            <h2>子组件</h2>
            <div>{props.title}</div>
            <div>{props.name}</div>
        </div>
    )
}
export default class StudyProps extends React.Component {
    render() {
        return (
            <div>
                <h1>Props</h1>
                <hr />
                <HelloChild title={'嗄'} name={'咕咕咕'} />
            </div>
        )
    }
}