export default function Card({img, title, vol, price }) {
    return (
        <div className="w-[300px] h-[580px] bg-[#ECF0F1] rounded-xl overflow-hidden border border-[#ECF0F1] hover:shadow-md hover:shadow-slate-400">
            <div className="">
                <div className=" text-black rounded-xl">
                    <div className="h-[400px] object-contain">
                        <img src={img} alt="" className="w-[300px] h-[380px]"/>
                    </div>
                    <div className="w-full h-full flex flex-col justify-center items-center gap-4">
                        <div className="w-full  text-right">
                            <h2 className="text-3xl font-semibold font-blomberg text-center pb-2">{title}</h2  >
                            <div className="px-11">
                                <p className="text-lg ">{vol}</p>
                                <p className="font-semibold text-2xl">{price}</p>
                            </div>
                        </div>
                        <div className="  flex bg-blue-japan px-5 py-2 rounded-xl hover:bg-light-blue-japan">
                            <button className="text-white text-xl font-semibold">Aggiungi al Carello</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}