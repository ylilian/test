import React from 'react'
import './style.less'
import { Link } from 'react-router-dom'

export default class TopNav extends React.Component{
    render(){
        return(
            <div id='home-header' className='clear-fix'>
                <div className='home-header-left float-left'>
                    {/* 添加link链接 */}
                    <Link to='/city'>
                        <span>{this.props.city}</span>
                        <i className="icon-angle-down"></i>
                    </Link>
                </div>
                <div className='home-header-right float-right'>
                    <i className='iconfont icon-car'></i>
                </div>
                <div className='home-header-middle'>
                    <div className='search-container'>
                        <div>
                            <i className="icon-search"></i>
                            <input />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}