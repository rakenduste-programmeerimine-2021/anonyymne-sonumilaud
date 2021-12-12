import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import { Layout, Card ,message} from "antd";
import { renderIf } from "../utils/commonUtils";
import axios from "axios";
import ThoughtList from '../components/ThoughtList';

const { Content} = Layout;

class MyThoughts extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      testList: [],
    };
  }
  componentDidMount = () => {
    const userId = this.props.user.getIn(["user", "_id"], "");
    axios
      .get("api/thought/find/" + userId)
      .then((res) => {this.setState({testList: res.data});})
      .catch((err) => {
        if (err.response) {
          message.error(err.response.status);
        } else {
        }
      });
    }
  render() {
    const data = this.state.testList;
    console.log(data);
    return (
          <Content style={{ padding: "0 24px", minHeight: 280 }}>
            {renderIf(data)(
            <ThoughtList thoughts={data} owner={true}/>
          )}
        
          </Content>
        
    );
  }
}

const mapStateToProps = state => {
  const {user} = state;
  return {user};
};

export default connect(mapStateToProps)(MyThoughts);