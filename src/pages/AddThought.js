import React, { PureComponent } from "react";
import axios from "axios";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Form, Input, Button, message, Select } from "antd";
import { UserOutlined } from "@ant-design/icons";
const { Option } = Select;
function handleChange(value) {
  console.log(`selected ${value}`);
}
class AddThought extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
          selectedKeys: [],
        };
      }
      
  handleSubmit = (values) => {
    const userId = this.props.user.getIn(["user", "_id"], "");
    axios
      .post("api/thought/add", {
        userId: userId,
        topics: values.topic,
        text: values.text,
      })
      .then((res) => {
        window.location.href = "/";
      })
      .catch((err) => {
        if (err.response.status === 401) {
          message.error("Adding failed: user not exist or password incorrect.");
        } else {
          message.error("Adding failed");
        }
      });
  };

  render() {
    const username = this.props.user.getIn(["user", "username"], "");
    return (
      <Form
        onFinish={this.handleSubmit}
        className="Thought-form"
        layout={"vertical"}
      >
        <h1>Add Thought</h1>
        <Form.Item
          label="UserName"
          name={"username"}
        >
          <Input
           disabled= {true}
           prefix={<UserOutlined/>}
           placeholder={username} />
        </Form.Item>

        <Form.Item
          label="Text"
          name={"text"}
          rules={[
            { required: true, message: "aaa" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Topic"
          name={"topic"}
        >
          <Select defaultValue="61b65942ed2d5178169d0e3d" style={{ width: 120 }} onChange={handleChange}>
            <Option value="61b65942ed2d5178169d0e3d">Test</Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            New thought
          </Button>
        </Form.Item>
      </Form>
    );
  }
}
const mapStateToProps = (state) => {
    const { user } = state;
    return { user };
  };
  export default withRouter(connect(mapStateToProps)(AddThought));
