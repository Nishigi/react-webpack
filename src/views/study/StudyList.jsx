import React from "react";

export default class StudyList extends React.Component {

    render() {
        return (
            <div>
                <h1>列表渲染</h1>
                {/* JSX可以直接嵌套数组 */}
                {
                    [
                        <div className="row">line--1</div>,

                    ]
                }
            </div>
        )
    }
}