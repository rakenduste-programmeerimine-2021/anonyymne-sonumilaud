import { Card, Avatar, Typography } from "antd";
import { renderIf } from "../utils/commonUtils";
import { UserOutlined } from "@ant-design/icons";
const { Text } = Typography;
const { Meta } = Card;
var clockface = require('time-to-emoji');
function Thought(props) {
    let date = new Date(props.time)
  return (

    <Card
    title={<div><Avatar size={25}>{props.username}</Avatar> <Text type="success">{props.username}</Text></div>}
      extra={<Text code>{date.toEmoji()+ "📅"+ date.getFullYear() + "-"+ date.getMonth()+ "-" + date.getDate() }</Text>}
    >
    <Text type="default">{props.text}</Text>
    {renderIf(props.topic)(
      <Text type="default">AAAAAAAAAAAAAa</Text>
    )}
    {renderIf(props.owner)(
      <Text type="default">AAAAAAAAAAAAAa</Text>
    )}
      
    </Card>
  );
}
export default Thought;