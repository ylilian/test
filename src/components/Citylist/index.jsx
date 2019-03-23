import React from 'react'
import './style.less'

export default class CityList extends React.Component{
    clickHandler(data){
        console.log(data);
        this.props.customEvent(data);
        this.props.history.replace('/')
    }
    render(){
        return(
            <div>
                <div className='city-list-container'>
                    <h3>热门城市</h3>
                    <ul className='clear-fix'>
                        <li>
                            <span onClick={this.clickHandler.bind(this, '北京')}>北京</span>
                        </li>
                        <li>
                            <span onClick={this.clickHandler.bind(this, '上海')}>上海</span>
                        </li>
                        <li>
                            <span onClick={this.clickHandler.bind(this, '广州')}>广州</span>
                        </li>
                        <li>
                            <span onClick={this.clickHandler.bind(this, '深圳')}>深圳</span>
                        </li>
                        <li>
                            <span onClick={this.clickHandler.bind(this, '南京')}>南京</span>
                        </li>
                        <li>
                            <span onClick={this.clickHandler.bind(this, '西安')}>西安</span>
                        </li>
                        <li>
                            <span onClick={this.clickHandler.bind(this, '天津')}>天津</span>
                        </li>
                        <li>
                            <span onClick={this.clickHandler.bind(this, '武汉')}>武汉</span>
                        </li>
                        <li>
                            <span onClick={this.clickHandler.bind(this, '成都')}>成都</span>
                        </li>
                        <li>
                            <span onClick={this.clickHandler.bind(this, '长沙')}>长沙</span>
                        </li>
                        <li>
                            <span onClick={this.clickHandler.bind(this, '南京')}>南京</span>
                        </li>
                        <li>
                            <span onClick={this.clickHandler.bind(this, '大连')}>大连</span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}