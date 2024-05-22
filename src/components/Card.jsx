export default function Card({img, title, price }) {
    return (
        <div className="uppercase text-xl  bg-orange-300 font-bold text-black">
            <img src={img} alt={img} />
            <h1>{title}</h1>
            <p>{price} €</p>
        </div>
    )
}