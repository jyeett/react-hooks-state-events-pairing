import { useState } from "react"
import Comment from "./Comment"

function CommentsSect({commentsData}) {
    const [isHidden, setIsHidden] = useState(false)
    const commentElems =  commentsData.map(comment => <Comment comment={comment.comment} user={comment.user}/>)
    return (
        <>
            <br></br>
            <button onClick={handleClick}>{isHidden ? 'Show Comments': "Hide Comments"}</button>
            <hr></hr>
            {isHidden ? null : commentElems}            
        </>
    )
    function handleClick() {
        setIsHidden(!isHidden)
    }
}

export default CommentsSect