import ReactPlayer from "react-player/lazy"

export default function HeroClip({video}) {
    return (
        <div className="absolute flex items-center justify-center w-full h-full overflow-hidden hero__clip md:h-2/3">
            <ReactPlayer
                url={video.attributes.Video.data.attributes.url}
                playing={true}
                muted={true}
                loop={true}
                playsinline={true}
                height={'100%'}
                width={'100%'}
            />
        </div>
    )
}