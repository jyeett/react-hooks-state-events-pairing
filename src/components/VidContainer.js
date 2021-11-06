function VidContainer({ embedUrl }) {
    console.log(embedUrl)
    return (
        <iframe
            width="919"
            height="525"
            src={embedUrl}
            frameBorder="0"
            allowFullScreen
            title="Thinking in React"
        />
    )
}

export default VidContainer