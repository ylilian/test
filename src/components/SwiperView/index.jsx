import React from 'react'
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import './style.less'
import Pagination from './Pagination'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews); 

export default class SwiperView extends React.Component{

    constructor(){
        super();
        this.state = {
            currentIndex: 0
        }
    }

    handleChangeIndex(index){
        //可得到当前图片下标值
        // console.log(index);
        this.setState({
            currentIndex: index
        })
    }
    
    render(){
        const banners = this.props.banner;
        return(
            <div className='swiper'>
                <AutoPlaySwipeableViews  onChangeIndex={this.handleChangeIndex.bind(this)}>
                {
                    banners.map((element,index) => {
                        return(
                            <div className='swiper-view' key={index}>
                                <img src={element} alt=""/>
                            </div>
                        )
                    })
                }
                   {/*  <div className='swiper-view'>
                        <img src={Banner1} alt=""/>
                    </div>
                    <div className='swiper-view'>
                        <img src={Banner2} alt=""/>
                    </div>
                    <div className='swiper-view'>
                        <img src={Banner3} alt=""/>
                    </div> */}
                </AutoPlaySwipeableViews>
                <Pagination dots={banners} index={this.state.currentIndex}/>
            </div>
        )
    }
}