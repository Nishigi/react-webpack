import React, { useEffect, useState } from 'react';

function Pages(props) {
    let { page, changePage } = props
    const [nPage, setNpage] = useState([])

    useEffect(() => {
        setNpage(page > 3
            ? [page - 2, page - 1, page, page + 1, page + 2]
            : [1, 2, 3, 4, 5])
    }, [page])
    function prev(val) {
        if (val === 1) alert("已是首页");
        else changePage(val - 1)
    }
    return (
        <div className="pages">
            <span
                style={{ cursor: page === 1 ? 'default' : 'pointer' }}
                onClick={() => prev(page)}
            >
                ←
            </span>
            {page > 3 && <span >...</span>}
            {
                nPage.map(el => {
                    return <span
                        key={el}
                        className={el === page ? 'on' : ''}
                        onClick={() => changePage(el)}
                    >
                        {el}
                    </span>
                })
            }
            <span>...</span>
            <span onClick={() => changePage(page + 1)}>→</span>
        </div >
    );
}

export default Pages;