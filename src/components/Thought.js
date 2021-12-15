import React, { PureComponent } from "react";
import axios from "axios";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Card, Avatar, Typography,Tag,Button,Popover,Form,Input } from "antd";
import { renderIf } from "../utils/commonUtils";
import { RobotOutlined,ReadOutlined } from "@ant-design/icons";
const { Text } = Typography;
const { TextArea } = Input;
var clockface = require('time-to-emoji');
class Thought extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }
  hide = () => {
    this.setState({
      visible: false,
    });
  };
  handleVisibleChange = visible => {
    this.setState({ visible });
  };
  editPost = (values) =>{
    console.log(values.topicId, " ", values.text, " ", this.props.id);
    axios
      .put("api/thought/edit/" + this.props.id,
      {
        topicId:values.topicId,
        text: values.text,
      },
      {
        headers: { "Content-Type": "application/json"}
      })
      .then((res) => {
        window.location.href = "/mythoughts";
      })
      .catch((err) => {
        if (err.response.status === 401) {
          message.error("lol");
        } else {
          message.error("lllloooollll");
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
            this.editPost(values);
          })
          .catch((err) => {
          });}else{
            values.topicId = res.data._id;
            this.editPost(values);}
        
        }
      )
      .catch((err) => {
        if (err.response) {
          message.error(err.response.status);
        } else {
        }
      });
  };
  render(){
  const date = new Date(this.props.time)
  const initialValues = {
    topic: this.props?.topic.name,
    text: this.props?.text
  };
  return (

    <Card
    title={<div><Avatar size={25}>{this.props.username}</Avatar> <Text type="success">{this.props.username}</Text></div>}
      extra={<Text code>{date.toEmoji()+ "📅"+ date.getFullYear() + "-"+ date.getMonth()+ "-" + date.getDate() }</Text>}
    >
    <Text type="default">{this.props.text}</Text>
    
    <p>
    {renderIf(this.props.topic)(
      <Tag icon={<RobotOutlined />} color="green">
        {this.props.topic.name}
      </Tag>
      
    )}
    {renderIf(this.props.owner)(
      <>
        <Button style={{ background: "rgb(255, 242, 240)", color: "rgb(255, 77, 79)" }} onClick={() => {
          axios
            .post("api/thought/remove/" + this.props.id, {})
            .then(() => {
              window.location.href = "/mythoughts";
            })
            .catch((err) => {
            });
        }}>❌ Delete</Button>
        <Popover
          content={
          <>
          <Form
            onFinish={this.handleSubmit}
            className="Thought-form"
            layout={"vertical"}
            initialValues = {initialValues}
          >
            <Form.Item
              label="Text"
              name={"text"}
              rules={[
                { required: true, message: "aaa" },
              ]}
            >
              <TextArea
              prefix={<ReadOutlined/>} />
            </Form.Item>
            <Form.Item
              label="Topic"
              name={"topic"}
            >
              <Input
              prefix={<RobotOutlined/>} />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Edit Thought
              </Button>
            </Form.Item>
      </Form>  
          <Button danger onClick={this.hide}>Close</Button></>
          }
          title= "Edit Thought"
          trigger="click"
          visible={this.state.visible}
          onVisibleChange={this.handleVisibleChange}
        >
          <Button style={{ background: "rgb(255, 251, 230)", color: "rgb(250, 173, 20)" }}>
          ✂️ Edit</Button>
        </Popover>
      </>
    )}
    </p>
    </Card>
  );
}
}
export default Thought;