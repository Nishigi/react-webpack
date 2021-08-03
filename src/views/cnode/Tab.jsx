import React, { useState } from 'react';

function Tab(props) {
    let { cases, changeOn } = props
    const [val, setVal] = useState('')

    function changeTab(val) {
        changeOn(val)
        setVal(val)
    }
    return (
        <div className="cates">
            {cases.map(el => {

                return <span
                    key={el.id}
                    className={el.tab === val ? 'on' : ''}
                    onClick={() => { changeTab(el.tab) }}
                >
                    {el.label}
                </span>
            })}
        </div >
    );
}

export default Tab;