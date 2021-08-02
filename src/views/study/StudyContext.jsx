import React from 'react'
import ThemeCtx from '@/utils/theme'

export default class StudyContext extends React.Component {

    render() {
        return (
            <ThemeCtx.Consumer>
                {
                    (value) => (
                        <div style={value}>
                            <h1>上下文</h1>
                        </div>
                    )
                }
            </ThemeCtx.Consumer>
        )
    }
}