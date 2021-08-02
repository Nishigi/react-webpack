import React from "react";

const Child = ({ children }) => <div>{children}</div>
// console.log(Child);
const UserRow = (props) => <div>{props.user.msg}---{props.user.age}</div>

export default class StudyList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [
                { id: 1, msg: 'list--a', age: 10 },
                { id: 2, msg: 'list--b', age: 20 },
                { id: 3, msg: 'list--c', age: 30 },
                { id: 4, msg: 'list--d', age: 40 },
            ]
        }
    }
    renderList1() {
        let { list } = this.state
        return list.map(ele => {
            ele.age += 3
            return <UserRow user={ele} key={ele.id} />
        })
        // return <div>111</div>
    }
    renderList2() {
        let { list } = this.state
        let result = []
        list.map((ele, idx) => {
            ele['checked'] = (idx % 2 === 0)
            result.push(
                <div key={ele.id}>
                    <input type="checkbox" checked={ele.checked} onChange={() => false} />
                    <UserRow user={ele} inline />
                </div>
            )
        })
        return result
        // return <div>222</div>
    }
    render() {
        let { list } = this.state

        let arr = list.map(el => <UserRow user={el} key={el.id} />)
        return (
            <div>
                <h1>List Render</h1>
                {/* JSX可以直接嵌套数组 */}
                {
                    [
                        <div key='4'>1111111111</div>,
                        [
                            <div key="1" className="row">line--1</div>,
                            <div key="2" className="row">line--2</div>,
                            <Child key='3'>
                                <a href="#"> 超链接</a>
                            </Child>
                        ],
                        ...[
                            'this ... arr',
                            12312
                        ]
                    ]
                }
                <hr />
                {
                    list.map(el => <UserRow user={el} key={el.id} />)
                }
                <hr />
                {/* {等同上一个} */}
                {arr}
                <hr />
                {this.renderList1()}
                <hr />
                {this.renderList2()}
            </div>
        )
    }
}