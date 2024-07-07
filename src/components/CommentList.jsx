import SingleComment from "./SingleComment"

function CommentList({ comments }) {
    return (
        <>
            {comments.map(c => <SingleComment key={c._id} comment={c}/>)}
        </>
    )
}

export default CommentList