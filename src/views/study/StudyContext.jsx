import React from 'react'
import ThemeCtx from '@/utils/theme'

//类组件使用上下文数据第一种写法
// export default class StudyContext extends React.Component {
//     render() {
//         console.log('props', this.props);
//         return (
//             <ThemeCtx.Consumer>
//                 {
//                     (value) => (
//                         <div style={value}>
//                             <h1>上下文</h1>
//                         </div>
//                     )
//                 }
//             </ThemeCtx.Consumer>
//         )
//     }
// }

//类组件使用上下文数据第二种写法
export default class StudyContext extends React.Component {
    render() {
        console.log('cxt', this.context);
        const theme = this.context
        return (
            <div style={theme}>
                <h1>上下文</h1>
            </div>
        )
    }
}
StudyContext.contextType = ThemeCtx  //获取上下文数据放入this.context