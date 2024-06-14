import * as React from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "./ui/carousel";
import Autoplay from 'embla-carousel-autoplay';
import { Link } from "react-router-dom";

// banner
import banner from "../assets/Banner1.jpg";
import banner1 from "../assets/Banner2.jpg";
import banner2 from "../assets/Banner3.jpg";
import banner3 from "../assets/Banner4.jpg";


export default function CarouselDApiDemo() {
    const [api, setApi] = React.useState(null);
    const [current, setCurrent] = React.useState(0);
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        if (!api) {
            return;
        }

        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap() + 1);

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1);
        });
    }, [api]);

    const plugin = React.useRef(
        Autoplay({ delay: 3000, stopOnInteraction: false }),

    );

    return (
        <div className="">
            <Carousel plugins={[plugin.current]} opts={{
                loop: true,
            }} setApi={setApi} className="w-full">
                <CarouselContent className="w-[1920px] ">
                    <CarouselItem className="w-full object-cover">
                        <Link to="/Novità">
                            <img src={banner} alt="Banner" className="w-full h-full cursor-pointer" />
                        </Link>
                    </CarouselItem>
                    <CarouselItem className="w-full object-cover">
                        <Link to="">
                            <img src={banner1} alt="Banner" className="w-full h-full cursor-pointer" />
                        </Link>
                    </CarouselItem>
                    <CarouselItem className="w-full h-full object-cover">
                        <Link to="/Catalogo">
                            <img src={banner2} alt="Banner" className="w-full h-full cursor-pointer" />
                        </Link>
                    </CarouselItem>
                    <CarouselItem className="w-full h-full object-cover">
                        <Link to="">
                            <img src={banner3} alt="Banner" className="w-full h-full cursor-pointer" />
                        </Link>
                    </CarouselItem>
                </CarouselContent>
            </Carousel>
        </div>
    );
}