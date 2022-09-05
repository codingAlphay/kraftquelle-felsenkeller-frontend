import ReactPlayer from "react-player/lazy"

export default function HeroClip() {
    return (
        <div className="hero__clip absolute flex h-2/3 items-center overflow-hidden w-full">
            <ReactPlayer
                url='./heroclip.webm'
                playing={true}
                muted={true}
                loop={true}
                playsinline={true}
                height={'auto'}
                width={'100%'}
            />
        </div>
    )
}