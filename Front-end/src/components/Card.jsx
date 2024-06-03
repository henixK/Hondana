import cart from "../assets/Cart.svg"

export default function Card({img, title, price }) {

    return (
        <div className="w-[300px] h-max m-auto bg-white rounded-xl overflow-hidden">
            <div className="">
                <div className=" text-black rounded-xl">
                    <div className="h-[400px] object-contain ">
                        <img src={img} alt="" className="w-full h-full"/>
                    </div>
                    <div className="w-full h-full flex flex-col justify-center items-center gap-4 py-6">
                        <div className="w-full px-16 text-right">
                            <h1 className="text-2xl font-bold">{title}</h1>
                            <p className="font-semibold text-2xl">{price}</p>
                        </div>
                        <div className="  flex bg-blue-japan px-5 py-2 rounded-xl">
                            <button className="text-white text-xl font-semibold">Aggiungi al Carello</button>
                            <img src={cart} alt="" className="p-1"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}