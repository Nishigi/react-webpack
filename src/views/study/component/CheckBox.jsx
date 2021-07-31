import React, { Component } from 'react'

export default class CheckBox extends Component {

    constructor(props) {
        super(props)

    }
    change(e) {
        const checked = e.target.checked
        const value = e.target.value
        if (checked) {

        }
    }
    render() {
        let { value } = this.props
        return (
            <div>
                {
                    data.map(el => {
                        <span>
                            <input
                                type="checkbox"
                                value=""
                                onChange=""
                            />

                        </span>
                    })
                }
            </div>
        )
    }
}