import React, { PureComponent } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import { renderIf } from "../utils/commonUtils";
import { Layout, Menu,Image } from "antd";
import TopicList from '../components/TopicList';
const SubMenu = Menu.SubMenu;
const {  Sider } = Layout;
class RightSideMenu extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      testList:[],
      selectedKeys: [],
    };
  }

  correctSelectedMenu = () => {
    const path = this.props.location.pathname;
    if (path === "/") {
      this.setState({ selectedKeys: ["/"] });
    } else {
      try {
        this.setState({ selectedKeys: ["/" + path.split("/")[1]] });
      } catch (e) {
        console.error(e);
      }
    }
  };

  componentDidMount = () => {
    this.correctSelectedMenu();
    axios
      .get("api/topic/")
      .then((res) => {this.setState({testList: res.data});})
      .catch((err) => {
        if (err.response) {
          message.error(err.response.status);
        } else {
        }
      });
  };

  componentDidUpdate = (prevProps, prevState, snapshot) => {
    const prePath = prevProps.location.pathname;
    const path = this.props.location.pathname;
    if (prePath !== path) {
      this.correctSelectedMenu();
    }
  };

  onLogout = () => {
    axios.post("/api/auth/logout").then((res) => {
      window.location.href = "/";
    });
  };

  render() {
    const user = this.props.user.get("user");
    const username = this.props.user.getIn(["user", "username"], "");
    const data = this.state.testList;
    return (
      <Sider className="site-layout-background" theme="dark" >
        <div className="logo"><Image src="public/logo.jpg"/></div>
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={this.state.selectedKeys}
          defaultOpenKeys={["test"]}
          style={{ lineHeight: "64px" }}
        >
          <Menu.Item key="/">
            <Link to={"/"}>🏠Home </Link>
          </Menu.Item>
          {renderIf(user)(
            <SubMenu
              key="test"
              title={
                <span>
                  <span>Welcome, {username}&nbsp;</span>
                </span>
              }
            >
              <Menu.Item key="/logout" onClick={this.onLogout}>
              🚪Logout 
              </Menu.Item>
              <Menu.Item key="/addthought">
              <Link to={"/addthought"}>🤔Add Thought </Link>
              </Menu.Item>
              <Menu.Item key="/mythoughts">
              <Link to={"/mythoughts"}>🤭My Thoughts </Link>
              </Menu.Item>
            </SubMenu>
          )}
          {renderIf(!user)(
            <><Menu.Item key="/login" style={{}}>
              <Link to={"/login"}>🔐Login </Link>
            </Menu.Item>
            <Menu.Item key="/register" style={{}}>
            <Link to={"/register"}>🆓Register </Link>
          </Menu.Item>
            </>
          )}
        </Menu>
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={this.state.selectedKeys}
          defaultOpenKeys={["test2"]}
          style={{ lineHeight: "64px" }}
        >
          <SubMenu
              key="test2"
              title={<span>🔥Hot Topics </span>}>
              <TopicList topics={data}/>
          </SubMenu>
        </Menu>
      </Sider>
    );
  }
}

const mapStateToProps = (state) => {
  const { user } = state;
  return { user };
};

export default withRouter(connect(mapStateToProps)(RightSideMenu));
