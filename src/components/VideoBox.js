import Title from "./Title"
import VidContainer from "./VidContainer"
import VidDetails from "./VidDetails"
import Votes from "./Votes"

function VideoBox({ vidData }) {
    const {title, embedUrl, views, createdAt, upvotes, downvotes} = vidData
    return (
        <>
            <VidContainer embedUrl={embedUrl}/>
            <Title title={title}/>
            <VidDetails views={views} createdAt={createdAt}/>
            <Votes upvotes={upvotes} downvotes={downvotes}/>
        </>
    )
}

export default VideoBox