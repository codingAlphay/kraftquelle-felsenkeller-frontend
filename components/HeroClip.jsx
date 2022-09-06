import ReactPlayer from "react-player/lazy"

export default function HeroClip() {
    return (
        <div className="hero__clip absolute flex h-full md:h-2/3 justify-center items-center overflow-hidden w-full">
            <ReactPlayer
                url={[
                    './heroclip.webm',
                    './heroclip.mp4'
                ]}
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