import React from "react";

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