import * as React from "react";
import { Card, CardContent } from "./ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "./ui/carousel";



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

    return (
        <div className="w-full h-[500px] border-4 border-yellow-500">
            <Carousel opts={{
                align: "start",
                autoplay: true,
                loop: true,
            }} setApi={setApi} className="w-full h-full">
                <CarouselContent className="">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index} className="w-full h-full">
                            <Card className="w-full border-2 border-yellow-500">
                                <CardContent className="flex w-full h-full items-center justify-center p-6 border-4 border-blue-900">
                                    <span className="text-4xl font-semibold">{index + 1}</span>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    );
}
