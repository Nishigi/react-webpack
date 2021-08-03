import React from 'react';

function Pages(props) {
    let { page, changePage } = props
    function pageArr() {
        const val = page;
        // console.log(val);
        return val > 3
            ? [val - 2, val - 1, val, val + 1, val + 2]
            : [1, 2, 3, 4, 5];
    }
    return (
        <div className="pages">
            <span
                style={{ cursor: page === 1 ? 'default' : 'pointer' }}
            >
                ←
            </span>
            {page > 3 && <span >...</span>}
            {

            }
            <span>...</span>
            <span  >→</span>
        </div>
    );
}

export default Pages;