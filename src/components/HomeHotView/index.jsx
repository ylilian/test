import React from 'react'
import './style.less'

export default class HomeHot extends React.Component{
    render(){
        //接受请求的数据
        const datas = this.props.data;
        return(
            <div className='hotproduct'>
                <h3>{this.props.title}</h3>
                <div className='hot-container'>
                    <ul className='clear-fix'>
                        {
                            datas.map((element, index) => {
                                return(
                                <li key={element.id}>
                                    <a href={element.link}>
                                        <img src={element.img} alt={element.title} />
                                        <span>{element.title}</span>
                                    </a>
                                </li>)
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}