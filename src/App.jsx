import React, { useEffect, useState } from "react";
// import ThemeCtx from '@/utils/theme'
// import Music from "@/views/Music";
// import StudyJSX from "@/views/study/StudyJSX";
// import StudyComponent from "@/views/study/StudyComponent";
// import StudyContext from "@/views/study/StudyContext";

// import StudyHooks from "@/views/study/StudyHooks";
// import { HashRouter, BrowserRouter } from "react-router-dom";
// import { Button } from "antd";
import fetch from './utils/axios'
import List from './views/cnode/List'
import Tab from './views/cnode/Tab'
import Pages from './views/cnode/Pages'

function App() {
    // const [theme, setTheme] = useState({
    //     color: 'pink',
    //     background: 'tomato'
    // })

    const [list, setList] = useState([])
    const [tab, setTab] = useState('')
    const [page, setPage] = useState(1)
    const [cases, setCases] = useState([
        { id: 1, label: "全部", tab: "" },
        { id: 2, label: "精华", tab: "good" },
        { id: 3, label: "分享", tab: "share" },
        { id: 4, label: "问答", tab: "ask" },
        { id: 5, label: "招聘", tab: "job" },
        { id: 6, label: "客户端测试", tab: "test" },
    ])

    useEffect(() => {
        console.log('----请求数据----');
        let data = {
            tab,
            page,
            limit: 5,
            mdrender: true,
        };
        fetch("/topics", "get", data).then((res) => {
            setList(res)
            console.log(res);
        });
    }, [tab, page])
    // useEffect(() => {//监听tab变化
    //     console.log('----请求数据----');
    //     let data = {
    //         tab,
    //         page,
    //         limit: 5,
    //         mdrender: true,
    //     };
    //     fetch("/topics", "get", data).then((res) => {
    //         setList(res)
    //         console.log(res);
    //     });
    // }, [tab])

    // console.log(list);
    function changeOn(val) {
        setTab(val)
    }
    function changePage(val) {
        setPage(val)
    }

    return (
        <>
            {/* <StudyComponent /> */}
            {/* <ThemeCtx.Provider value={theme}>
                <StudyContext />
            </ThemeCtx.Provider> */}
            {/* <StudyHooks /> */}
            <Tab cases={cases} changeOn={changeOn} />
            <List newList={list} />
            <Pages page={page} changePage={changePage} />
        </>
    )
}
export default App