import React from 'react'

export default function CheckBox(props) {
    const change = e => {
        const checked = e.target.checked
        const value = e.target.value
        let result = checked ? [...props.value, value] : props.value.filter(el => el !== value)
        props.onChange && props.onChange(result)
    }
    return <div style={{ display: props.inline ? 'inline-block' : 'block' }}>
        {
            (props.data || []).map(ele => (
                <span key={ele.id}>
                    <input
                        type="checkbox"
                        value={ele.value}
                        checked={(props.value || []).includes(ele.value)}
                        onChange={change}
                    />
                    <span>{ele.label}</span>
                </span>
            ))
        }
    </div>
}

// export default class CheckBox extends Component {

//     constructor(props) {
//         super(props)

//     }
//     change(e) {
//         const checked = e.target.checked
//         const value = e.target.value
//         if (checked) {

//         }
//     }
//     render() {
//         let { value } = this.props
//         return (
//             <div>
//                 {
//                     data.map(el => {
//                         <span>
//                             <input
//                                 type="checkbox"
//                                 value=""
//                                 onChange=""
//                             />

//                         </span>
//                     })
//                 }
//             </div>
//         )
//     }
// }

