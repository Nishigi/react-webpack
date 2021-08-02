import React from "react";
export default function test(WrappedComponent) {
    return class Result extends React.Component {
        render() {
            return (
                <WrappedComponent />
            )
        }
    }
}