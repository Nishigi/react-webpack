import React from 'react';

function List(props) {
    let { newList } = props
    function lastTiem(val) {//计算时间
        let sec = Math.floor((Date.now() - Date.parse(val)) / 1000);
        let minu = Math.floor(sec / 60);
        let hours = Math.floor(minu / 60);
        let day = Math.floor(hours / 24);
        let month = Math.floor(day / 30);
        let year = Math.floor(month / 12);
        return sec < 60
            ? sec + "秒前"
            : minu < 60
                ? minu + "分前"
                : hours < 24
                    ? hours + "小时前"
                    : day < 30
                        ? day + "天前"
                        : month < 12
                            ? month + "月前"
                            : year + "年前";
    }
    return (
        <div>
            <div className="article-list">
                {
                    newList.map(el => {
                        // console.log(el);
                        return <div className="article" key={el.id}>
                            <img src={el.author.avatar_url} />
                            <div className="num">
                                <span >{el.reply_count}</span>
                                <span>/</span>
                                <span >{el.visit_count}</span>
                            </div>
                            <span
                                className={
                                    (el.top || el.good) ? 'label on' : 'label'
                                }
                            >
                                {el.top ? '置顶'
                                    : el.good ? '精华'
                                        : el.tab === 'ask' ? '问答'
                                            : el.tab === 'share' ? '分享'
                                                : el.tab === 'job' ? '招聘'
                                                    : '未知'
                                }
                            </span>

                            <span className="title" >{el.title} </span>

                            <span className="time" >
                                {lastTiem(el.last_reply_at)}
                            </span>
                        </div>
                    })
                }
            </div>
        </div >
    );
}

export default List;