import { useState } from "react"

function Votes({ upvotes, downvotes }) {
    const [currUpvotes, setCurrUpvotes] = useState(upvotes)
    const [currDownvotes, setCurrDownvotes] = useState(downvotes)
    return (
        <div>
            <button onClick={handleUp}>{currUpvotes} 👍</button>
            <button onClick={handleDown}>{currDownvotes} 👎</button>
        </div>
    )
    function handleUp() {
        setCurrUpvotes(currUpvotes => currUpvotes + 1)
    }
    function handleDown() {
        setCurrDownvotes(currDownvotes => currDownvotes + 1)
    }
}

export default Votes