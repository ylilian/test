import React from 'react'
import './style.less'

export default class Pagination extends React.Component {
    render() {
        //定义一个变量,获取当前轮播图图片数量
        const dot = this.props.dots;

        return (
            <div className='swiper-pagination'>
                <ul>
                    {/* <li className='selected'></li>
                    <li className='selected'></li>
                    <li className='selected'></li> */}
                    {
                        dot.map((element, index) => {
                            // console.log(index);
                            return(
                                //判断当前图片的下标是否与当前li的下标一致
                                <li key={index} className={(index === this.props.index ? 'selected' : '' )}></li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}