import * as React from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "./ui/carousel";
import Autoplay from 'embla-carousel-autoplay';

// banner
import banner from "../assets/Frame.jpg";
import banner1 from "../assets/Banner 2.jpg";
import banner2 from "../assets/Banner 3 from WhatsApp.jpg";
import banner3 from "../assets/Banner 4.jpg";


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
                <CarouselContent className="w-full ">
                    <CarouselItem className="w-full object-cover">
                        <img src={banner} alt="Banner" className="w-full h-full" />
                    </CarouselItem>
                    <CarouselItem className="w-full object-cover">
                        <img src={banner1} alt="Banner" className="w-full h-full" />
                    </CarouselItem>
                    <CarouselItem className="w-full h-full object-cover">
                        <img src={banner2} alt="Banner" className="w-full h-full" />
                    </CarouselItem>
                    <CarouselItem className="w-full h-full object-cover">
                        <img src={banner3} alt="Banner" className="w-full h-full" />
                    </CarouselItem>
                </CarouselContent>
            </Carousel>
        </div>
    );
}