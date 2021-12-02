import Thought from './Thought';
function ThoughtList(props){
    return(
        <div className="asi">
            {props.thoughts.map(thought=> (
                <Thought key={thought._id} text={thought.text} username={thought.user.username} id={thought._id} time={thought.createdAt} />
            ))}
        </div>
    )
}
export default ThoughtList;