import React, { PureComponent } from 'react'
import { Route, withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Login from './pages/Login'
import Home from './pages/Home'
import Register from './pages/Register'
import { Layout, Spin } from 'antd'
import * as actions from './redux/actions'
import RightSideMenu from './components/RightSideMenu'
import LeftSideMenu from './components/LeftSideMenu'
import PageHeader from './components/PageHeader'
import AddThought from './pages/AddThought'

const { Content, Footer } = Layout

class App extends PureComponent {
  componentDidMount = () => {
    this.props.actions.fetchUser()
  }

  render () {
    const loading = this.props.user.get('loading')

    if (loading) {
      return (
        <div className={'loading-container'}>
          <Spin size="large"/>
        </div>
      )
    }

    return (
      <Layout className="layout">
        <RightSideMenu/>
        <Content style={{ padding: '0 50px' }}>
          <div style={{ background: '#fff', padding: 24, minHeight: 280, marginTop: 50 }}>
            <Route exact path="/" component={Home}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/register" component={Register}/>
            <Route exact path="/addthought" component={AddThought}/>
          </div>
        </Content>
        <LeftSideMenu/>

      </Layout>
    )
  }
}

const mapStateToProps = state => {
  const { user } = state
  return { user }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
