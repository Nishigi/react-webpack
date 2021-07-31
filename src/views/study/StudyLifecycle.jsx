import React from "react";

// 生命周期3-2-1
// 第一阶段 3：装载阶段 constructor、render、componentDidMount
// 第二阶段 2：更新阶段 [render|shouldComponentUpdate]、componentDidupdate
// 第三阶段 1：卸载阶段 componentWillUnmount

export default class Lifecycle extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div>
                生命周期
            </div>
        )
    }
}