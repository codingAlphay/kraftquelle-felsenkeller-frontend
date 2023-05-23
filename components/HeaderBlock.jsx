import dynamic from "next/dynamic"
import Navbar from "./Navbar"
import SubHeroSlider from "./SubHeroSlider"

export default function HeaderWrapper({video}) {

    const HeroClip = dynamic(
        () => import('./HeroClip'),
        { ssr: false }
    )

    return (
        <div className="relative w-full h-screen header__wrapper bg-secondary">
            <Navbar/>
            <HeroClip video={video} />
            <SubHeroSlider/>
        </div>
    )
}