import Thought from './Thought';
function ThoughtList(props){
    return(
        <div className="asi">
            {props.thoughts.map(thought=> (
                <Thought key={thought._id} text={thought.text} topic={thought.topic} username={thought.user.username} id={thought._id} time={thought.createdAt} owner={props.owner} />
            ))}
        </div>
    )
}
export default ThoughtList;