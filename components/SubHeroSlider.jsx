import LogoConstructor from "./LogoConstructor";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


export default function SubHeroSlider() {
    const settings = {
        dots: false,
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 6000,
        speed: 1000,
        
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className="absolute bottom-0 hidden w-full py-4 bg-secondary md:block subhero__slider-element">
            <Slider {...settings}>
                <>
                    <div className="items-center justify-center max-w-5xl px-4 mx-auto subhero__slider-content sm:px-6 lg:px-8 animate-fade">
                        <LogoConstructor/>
                        <div
                            className="w-10 h-1 mx-4 md:w-16 md:h-2 md:mx-16 bg-primary"
                            />
                        <div className="text-xl font-black uppercase text-primary lg:text-2xl">
                            Schöpfen Sie unentdeckte Kraft
                        </div>
                    </div>
                </>
                <>
                    <div className="items-center justify-center max-w-5xl px-4 mx-auto subhero__slider-content sm:px-6 lg:px-8 animate-fade">
                        <LogoConstructor/>
                        <div
                            className="w-10 h-1 mx-4 md:w-16 md:h-2 md:mx-16 bg-primary"
                            />
                        <div className="text-xl font-black uppercase text-primary lg:text-2xl">
                            Atmen Sie wieder auf
                        </div>
                    </div>
                </>
            </Slider>
        </div>
    )
}