import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function About() {
    return (
        <>
            <Nav />
            <section className="h-full ">
                <div className="w-full lg:w-1/2 h-min px-10 my-10 space-y-8 text-center lg:text-justify">
                    <div className="space-y-3 border p-6 rounded-lg shadow-lg bg-blue-japan text-white">
                        <h1 className="font-nuku text-4xl text-center">Chi Siamo</h1>
                        <p>
                            Benvenuti su Hondana, la vostra libreria di manga giapponesi! Fondata dalla passione per la cultura del fumetto giapponese, Hondana nasce con l'obiettivo di portare le storie, le avventure e le emozioni dei manga direttamente a casa vostra.
                        </p>
                    </div>
                    <div className="space-y-3 border p-6 rounded-lg shadow-lg bg-blue-japan text-white">
                        <h2 className="font-nuku text-4xl text-center">La Nostra Storia</h2>
                        <p>
                            Hondana è stata creata da un gruppo di appassionati di manga che desideravano condividere il loro amore per queste opere con il mondo. Con anni di esperienza nel settore e una vasta conoscenza dei titoli più amati e dei nuovi arrivi, ci impegniamo a offrire una selezione curata e aggiornata di manga per tutti i gusti e le età.
                        </p>
                    </div>
                    <div className="space-y-3 border p-6 rounded-lg shadow-lg bg-blue-japan text-white">
                        <h3 className="font-nuku text-4xl text-center">La Nostra Missione</h3>
                        <p>
                            La nostra missione è semplice: vogliamo rendere i manga giapponesi accessibili a tutti. Che siate fan di lunga data o nuovi lettori curiosi, su Hondana troverete un'ampia gamma di titoli, dai grandi classici ai capolavori contemporanei. Crediamo che ogni manga racconti una storia unica e vogliamo assicurarci che ogni appassionato possa trovare il suo prossimo grande amore tra le nostre pagine.
                        </p>
                    </div>
                    <div className="space-y-3 border p-6 rounded-lg shadow-lg bg-blue-japan text-white">
                        <h3 className="font-nuku text-4xl text-center">Cosa Offriamo</h3>
                        <ul>
                            <li><strong>Selezione Curata:</strong> Ogni manga che trovate su Hondana è selezionato con cura dai nostri esperti. Ci assicuriamo di offrire solo il meglio, dai bestseller ai titoli di nicchia.</li>
                            <li><strong>Novità e Classici:</strong> Manteniamo il nostro catalogo sempre aggiornato con le ultime uscite e non dimentichiamo mai i grandi classici che hanno fatto la storia del manga.</li>
                            <li><strong>Qualità e Autenticità:</strong> Tutti i nostri manga sono autentici e di alta qualità. Collaboriamo direttamente con editori giapponesi per garantire che ogni copia sia perfetta.</li>
                            <li><strong>Esperienza di Acquisto Impeccabile:</strong> La vostra soddisfazione è la nostra priorità. Offriamo spedizioni rapide e un servizio clienti sempre disponibile per qualsiasi esigenza.</li>
                        </ul>
                    </div>
                    <div className="space-y-3 border p-6 rounded-lg shadow-lg bg-blue-japan text-white">
                        <h3 className="font-nuku text-4xl text-center">Unisciti a Noi</h3>
                        <p>
                            Entrate a far parte della comunità di Hondana e condividete con noi la passione per i manga. Seguiteci sui nostri canali social per essere sempre aggiornati sulle ultime novità, promozioni e eventi speciali. Insieme, possiamo esplorare infinite storie e avventure tra le pagine dei manga.
                        </p>
                    </div>
                    <div className="space-y-3 border p-6 rounded-lg shadow-lg bg-blue-japan text-white">
                        <h3 className="font-nuku text-4xl text-center">Contattaci</h3>
                        <p>
                            Avete domande, suggerimenti o semplicemente volete condividere il vostro manga preferito? Non esitate a contattarci. Siamo qui per voi e non vediamo l'ora di sentire la vostra opinione.
                        </p>
                    </div>
                </div>

            </section>
            <Footer />
        </>
    )
}