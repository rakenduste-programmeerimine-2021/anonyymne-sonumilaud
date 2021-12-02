import React, { PureComponent } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import { renderIf } from "../utils/commonUtils";
import { Layout, Menu, Input, Typography, PageHeader } from "antd";
import { UserOutlined } from "@ant-design/icons";

const SubMenu = Menu.SubMenu;
const { Header, Content, Footer, Sider } = Layout;
const { Search, Button } = Input;
const { Title } = Typography;
const onSearch = value => console.log(value);
class LeftSideMenu extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
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

    return (
        <Sider className="site-layout-background" style = {{ paddingBottom: "20px",paddingTop: "20px", width: "500px"}}>
        <Title level={3} style = {{ color:"white"}}>TOPICS</Title>
        <Search placeholder="input search text" onSearch={onSearch} enterButton />
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub2"]}
            style={{  }}
          >
            <SubMenu key="sub2" icon={<UserOutlined />} title="Popular Topics">
              <Menu.Item key="1">Asi</Menu.Item>
              <Menu.Item key="2">Teema</Menu.Item>
              <Menu.Item key="3">option3</Menu.Item>
              <Menu.Item key="4">Muu</Menu.Item>
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

export default withRouter(connect(mapStateToProps)(LeftSideMenu));
