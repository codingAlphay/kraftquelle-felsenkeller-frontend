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
        <div className="hidden md:block subhero__slider-element absolute bottom-10 w-full animate-fade">
            <Slider {...settings}>
                <>
                    <div className="subhero__slider-content max-w-5xl justify-center items-center mx-auto px-4 sm:px-6 lg:px-8">
                        <LogoConstructor/>
                        <div
                            className="w-10 md:w-16 h-1 md:h-2 mx-4 md:mx-16 bg-primary dark:bg-secondary"
                            />
                        <div className="uppercase font-black text-primary dark:text-secondary text-xl lg:text-2xl">
                            Schöpfen Sie unentdeckte Kraft
                        </div>
                    </div>
                </>
                <>
                    <div className="subhero__slider-content max-w-5xl justify-center items-center mx-auto px-4 sm:px-6 lg:px-8">
                        <LogoConstructor/>
                        <div
                            className="w-10 md:w-16 h-1 md:h-2 mx-4 md:mx-16 bg-primary dark:bg-secondary"
                            />
                        <div className="uppercase font-black text-primary dark:text-secondary text-xl lg:text-2xl">
                            Atmen Sie wieder auf
                        </div>
                    </div>
                </>
            </Slider>
        </div>
    )
}