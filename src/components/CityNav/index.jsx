import React from 'react'
import './style.less'

export default class CityNav extends React.Component{
    backTo(){
        //返回页面
        // window.history.back();
        this.props.history.push('/')
    }

    render(){
        return(
            <div id='common-header'>
                {/* 返回按钮返回home页面,添加点击事件 */}
                <span className='back-icon' onClick={this.backTo.bind(this)}>
                    <i className="icon-chevron-left"></i>
                </span>
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}