import dynamic from "next/dynamic"
import Navbar from "./Navbar"
import SubHeroSlider from "./SubHeroSlider"

export default function HeaderWrapper() {

    const HeroClip = dynamic(
        () => import('./HeroClip'),
        { ssr: false }
    )

    return (
        <div className="header__wrapper relative w-full h-screen bg-white">
            <Navbar/>
            <HeroClip/>
            <SubHeroSlider/>
        </div>
    )
}