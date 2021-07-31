import React from "react";

// 只有使用setState()修改state才能重新视图渲染render()重新执行
// state声名变量必须在constructor()中,不要直接修改state可以参与计算
// this.setState是异步合成事件 
// this.setState()在定时器和延时器中是同步的
// 语法1：this.setState({}, cb()) 
// 语法2：this.setState((state, prpos)=>({}), cb())


export default class StudyState extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 1
        }
    }
    changeNum(type) {
        this.setState(state => {
            return {
                count: type === 'add' ? state.count + 1 : state.count - 1
            }
        }, () => { console.log('new count', this.state.count) })
        console.log('old count', this.state.count)
    }
    render() {
        //do something
        let { count } = this.state
        return (
            <div>
                <h1>State使用</h1>
                <hr />
                <div> {count}</div>
                <button onClick={() => this.changeNum('add')}>自增</button>
                <button onClick={() => this.changeNum('sub')}>自减</button>
            </div>
        )
    }
}