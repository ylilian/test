import React from 'react'
import BottomNav from '../../components/BottomNav'
import TopNav from '../../components/TopNav'
import SwiperView from '../../components/SwiperView/index'
//轮播图
import Banner1 from '../../static/images/banner1.png'
import Banner2 from '../../static/images/banner2.png'
import Banner3 from '../../static/images/banner3.png'

//主页内容
import HomeHot1 from './Subpages/homehot'

//redux组件(读取状态用)
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class Home extends React.Component{
    render(){
        return(
            <div>
                <TopNav city={this.props.changeCity.cityName}/>
                <SwiperView banner={[Banner1,Banner2,Banner3]}/>
                <HomeHot1 />
                <BottomNav />
            </div>
        )
    }
}

//-----redux-------
function mapStateToProps(state){
    return{
        changeCity: state.changeCity
    }
}

export default withRouter(connect(
    mapStateToProps
)(Home))
