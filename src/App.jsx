import React, { useEffect, useState } from "react";
import ThemeCtx from '@/utils/theme'
// import Music from "@/views/Music";
// import StudyJSX from "@/views/study/StudyJSX";
// import StudyComponent from "@/views/study/StudyComponent";
// import StudyHooks from "@/views/study/StudyHooks";
import StudyContext from "@/views/study/StudyContext";
// import StudyForm from "@/views/study/StudyForm";
import 'antd/dist/antd.css';
import { HashRouter, BrowserRouter, Route } from "react-router-dom";
import { Button } from "antd";

// cnode
// import fetch from '@/utils/axios'
// import List from '@/views/cnode/List'
// import Tab from '@/views/cnode/Tab'
// import Pages from '@/views/cnode/Pages'


// function cnode() {
//     const [list, setList] = useState([])
//     const [tab, setTab] = useState('')
//     const [page, setPage] = useState(1)
//     const [cases, setCases] = useState([
//         { id: 1, label: "全部", tab: "" },
//         { id: 2, label: "精华", tab: "good" },
//         { id: 3, label: "分享", tab: "share" },
//         { id: 4, label: "问答", tab: "ask" },
//         { id: 5, label: "招聘", tab: "job" },
//         { id: 6, label: "客户端测试", tab: "test" },
//     ])

//     useEffect(() => {//监听页码
//         console.log('----监听page，tab变化----');
//         let data = {
//             tab,
//             page,
//             limit: 5,
//             mdrender: true,
//         };
//         fetch("/topics", "get", data).then((res) => {
//             setList(res)
//             console.log("数据请求成功---list");
//         });
//         // console.log(page);
//     }, [page, tab])
//     useEffect(() => {//监听tab
//         console.log('----tab变化----');
//         setPage(1)
//     }, [tab])

//     function changeOn(val) { //改变tab
//         setTab(val)
//     }
//     function changePage(val) {//改变页码
//         setPage(val)
//     }

//     return (
//         <>
//             {/* <StudyComponent /> */}
//             {/* <StudyHooks /> */}
//             <Tab cases={cases} changeOn={changeOn} />
//             <List newList={list} />
//             <Pages page={page} changePage={changePage} />
//         </>
//     )
// }

function App() {
    const [theme, setTheme] = useState({
        color: 'pink',
        background: 'tomato'
    })
    //HashRouter||BrowserRouter
    return (
        <HashRouter>
            <ThemeCtx.Provider value={theme}>
                {/* <StudyContext /> */}
                {/* <StudyForm /> */}
                <Button type="primary">点击</Button>
                <div
                    style={{
                        width: " 200px",
                        height: " 200px",
                        overflow: "hidden",
                        border: "1px solid #CCC"
                    }}
                >
                    <Route path='/cont' component={StudyContext} />
                </div>
            </ThemeCtx.Provider>
        </HashRouter>
    )
}
export default App