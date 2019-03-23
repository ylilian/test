import React from 'react'
// import { httpGet } from '../../../utils/http'
import HomeHot from '../../../components/HomeHotView'
import { homeHotHttp1 } from '../../../fetch/home/homeHotHttp'
import { homeHotHttp2 } from '../../../fetch/home/homeHotHttp'

//redux组件(读取状态用)
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class HomeHot1 extends React.Component{
    constructor(){
        super();
        this.state = {
            currentData: [],
            currentData1: []
        }
    }

    componentDidMount(){
        //原始写法
        /* httpGet('/api/homehot1')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.setState({
                    currentData: data
                })
            })

        httpGet('/api/homehot2')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.setState({
                    currentData1: data
                })
            }) */
        
        //封装为函数
        //实时传递当前城市参数
        const city = this.props.changeCity.cityName || '北京'
        homeHotHttp1(city)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    currentData: data
                })
            })
        homeHotHttp2(city)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    currentData1: data
                })
            })
    }
    render(){
        return(
            <div>
                {
                    this.state.currentData.length > 0 ?
                    <div>
                        <HomeHot data={this.state.currentData} title='热卖单品'/>
                    </div>
                    :
                    <div>数据请求中</div>
                }

                {
                    this.state.currentData.length > 0 ?
                        <div>
                            <HomeHot data={this.state.currentData1} title='热门周边' />
                        </div>
                        :
                        <div>数据请求中</div>
                } 
            </div>
        )
    }
}

//-----redux-------
function mapStateToProps(state) {
    return {
        changeCity: state.changeCity
    }
}

export default withRouter(connect(
    mapStateToProps
)(HomeHot1))