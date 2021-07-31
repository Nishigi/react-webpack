import React from "react";


// 表单绑定
// vue中表单是双向绑定的v-model，在react中是单向绑定的

// 受控表单
// 非受控表单

// 建议使用受控表单，严格要求不要使用非受控表单，有且仅有文件上传表单不需要受控
export default class StudyForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '222'
        }
    }
    formChange(key, e) {
        console.log(e.target.value);
        this.setState({
            [key]: e.target.value
        })
    }
    render() {
        let { name } = this.state
        return (
            <div>
                {/* 非受控表单 */}
                {/* -------------------- */}
                {/* 受控表单 */}
                <div>
                    <span>昵称：</span>
                    <input type="text" value={name} onChange={(e) => this.formChange('name', e)} />
                </div>

            </div>
        )
    }
}