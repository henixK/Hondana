import { Input } from "../ui/input";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

export default function Registrazione() {
    return (
        <form action="" className="w-full lg:w-2/4 lg:px-20 grid grid-cols-1 items-center text-center bg-white">
            <h1 className="text-6xl font-nuku ">registrati</h1>
            <div className="space-y-5 px-12">
                <Input type="email" placeholder="Email" />
                <Input type="Name" placeholder="Nome" />
                <Input type="LastName" placeholder="Cognome" />
                <Input type="adress" placeholder="Indirizzo" />
                <Input type="password" placeholder="Password" />
                <Button>Registrati</Button>
            </div>
            <div className="my-2">
                <p>Hai già un account?</p>
                <Link to="/Account"><p className="font-bold">Log in</p></Link>
            </div>
        </form>
    )
}