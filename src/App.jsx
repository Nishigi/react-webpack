import React, { useState } from "react";
import ThemeCtx from '@/utils/theme'
// import Music from "@/views/Music";
// import StudyJSX from "@/views/study/StudyJSX";
// import StudyComponent from "@/views/study/StudyComponent";
import StudyContext from "@/views/study/StudyContext";

// const ele = <StudyJSX />
function App() {
    const [theme, setTheme] = useState({
        color: 'pink',
        background: 'tomato'
    })
    return (
        <>
            {/* {ele} */}
            {/* <StudyComponent /> */}
            <ThemeCtx.Provider value={theme}>
                <StudyContext />
            </ThemeCtx.Provider>
        </>
    )
}
export default App