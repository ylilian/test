import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import * as ActionCity from './action'

//主接口文件(作为路由的承载容器)
class Layout extends React.Component{

    componentDidMount(){
        //传入参数(传入默认城市:北京)
        this.props.ActionCity.setCity({
            cityName: '北京'
        })
    }


    render(){
        return(
            <div>
               {this.props.children}
            </div>
        )
    }
}

//-------redux--------
//读取操作
function mapStateToProps(state){
    return{
        changeCity: state.changeCity
    }
}
//写入操作
function mapDispatchToProps(dispatch){
    return{
        ActionCity: bindActionCreators(ActionCity, dispatch)
    }
}

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(Layout)
)