
export default function Registrazione(){
    return(
        <div>
            <h1>Form Esempio</h1>
            <form method="post" action="esempio.php"></form>
            <label for="name">Full Name</label>
            <input type="text" id="Full Name" name="Full Name" placeholder="Insert Full Name"/>
            <label for="cognome">Email</label>
            <input type="text" id="cognome" name="cognome" placeholder="Inserisci cognome"/>
            <label for=""></label>
            <input type="submit" value="Invia Dati"/>
            <MyComponent name="api_request" id="api_request"></MyComponent>
        </div>
        
    )
}