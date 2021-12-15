import { Menu} from "antd";
import { Link, withRouter } from "react-router-dom";
function TopicList(props){
    return(
        <>
            {props.topics.map(topic=> (
            <Menu.Item key= {topic._id}>
                <Link to={"/"}> 🈯{topic.name}</Link>
            </Menu.Item>
            ))}</>
    )
}
export default TopicList;