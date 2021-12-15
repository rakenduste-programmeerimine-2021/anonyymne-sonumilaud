import React, { PureComponent } from "react";
import axios from "axios";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Form, Input, Button, message } from "antd";
import { UserOutlined,ReadOutlined,RobotOutlined } from "@ant-design/icons";
class AddThought extends PureComponent {
    constructor(props) {
        super(props);
      }
  addPost = (values) =>{
    const userId = this.props.user.getIn(["user", "_id"], "");
    axios
      .post("api/thought/add", {
        userId: userId,
        topicId:values.topicId,
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
  }   
  handleSubmit = (values) => {
    axios
      .get("api/topic/name/" + values.topic)
      .then((res) => {
        if(!res.data){
          axios
          .post("api/topic/add", {
            name: values.topic,
          })
          .then((res) => {
            values.topicId = res.data._id;
            this.addPost(values);
          })
          .catch((err) => {
          });}else{
            values.topicId = res.data._id;
            this.addPost(values);}
        
        }
      )
      .catch((err) => {
        if (err.response) {
          message.error(err.response.status);
        } else {
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
          <Input
          prefix={<ReadOutlined/>}
          placeholder="tekst" />
        </Form.Item>
        <Form.Item
          label="Topic"
          name={"topic"}
        >
          <Input
          prefix={<RobotOutlined/>}
           placeholder="toopiline" />
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
