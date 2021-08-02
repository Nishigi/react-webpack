import React from "react";

import Modal from './component/Modal'

export default class StudyCombine extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,

        }
    }
    on
    render() {
        let { show } = this.state
        return (
            <button onClick={ }>开关</button>,
            <Modal visible={show} >
                <input type="text" />
            </Modal>
        )
    }
}