import React from "react";

import './style.scss'
//组合模式
// 语法基础：props.children、render props(使用组件时props可以传递ReactNode)
export default props => {
    let {
        children,
        visible
    } = props
    return (
        <div
            className="modal-layer"
            style={{ display: visible ? 'block' : 'none' }}
            onClick={close}
        >
            <div className="modal">
                <div className="header">
                    <span>提示</span>
                    <span className='close'>X</span>
                </div>
                <div className="body">
                    {children}
                </div>
                <div className="footer">
                    <span>确定</span>
                </div>
            </div>
        </div>
    )
}