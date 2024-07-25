import './commends.scss';

const Commends = () => {

    return(
        <section className='commends'>
            <h1>Linux commends</h1>

            <h2 id='curl'>cURL</h2>
            <table>
                <thead>
                    <tr>
                        <th>Komenda</th>
                        <th>Przykład</th>
                        <th>Opis</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                    <td>curl -O (nazwa strony HTTP)</td>
                    <td>curl -O inlanefreight.com/index.html</td>
                    <td>Pobieranie pliku</td>
                </tr>
                <tr>
                    <td>curl -s (nazwa strony HTTP)</td>
                    <td>curl -s inlanefreight.com/index.html</td>
                    <td>Wyciszenie zbędnych danych</td>
                </tr>
                <tr>
                    <td>curl -k (nazwa strony HTTPS://)</td>
                    <td>curl -k https://inlanefreight.com/index.html</td>
                    <td>Pomijanie certyfikatu SSL</td>
                </tr>
                <tr>
                    <td>curl -v (nazwa strony HTTP://)</td>
                    <td>curl -v inlanefreight.com</td>
                    <td>Pełen request oraz response</td>
                </tr>
                <tr>
                    <td>curl -vvv (nazwa strony HTTP://)</td>
                    <td>curl -vvv inlanefreight.com</td>
                    <td>Szczegółowy request oraz response</td>
                </tr>
                <tr>
                    <td>curl -u (nazwa strony HTTP://)</td>
                    <td>curl -u http://inlanefreight.com</td>
                    <td>Podstawowe poświadczenia autoryzacji HTTP</td>
                </tr>
                <tr>
                    <td>curl -H 'Authorization: Basic YWRtaW46YWRtaW4=' (nazwa strony HTTP://)</td>
                    <td>curl -H 'Authorization: Basic YWRtaW46YWRtaW4=' http://inlanefreight.com</td>
                    <td>Set request header, można wielokrotnie użyć by ustawić wiele nagłówków</td>
                </tr>
                <tr>
                    <td>curl -X POST -d 'username=admin&password=admin' (nazwa strony HTTP://)</td>
                    <td>curl -X POST -d 'username=admin&password=admin' http://inlanefreight.com</td>
                    <td>Wyślij żądanie POST z danymi</td>
                </tr>
                <tr>
                    <td>curl -b 'PHPSESSID=c1nsa6op7vtk7kdis7bcnbadf1' (nazwa strony HTTP://)</td>
                    <td>curl -b 'PHPSESSID=c1nsa6op7vtk7kdis7bcnbadf1' http://inlanefreight.com</td>
                    <td>Ustaw żądanie plików cookie</td>
                </tr>
                <tr>
                    <td>curl -X POST -d {"{"}"search":"london"{"}"} -H 'Content-Type: application/json' (nazwa strony HTTP://)</td>
                    <td>curl -X POST -d {"{"}"search":"london"{"}"} -H 'Content-Type: application/json' http://inlanefreight.com</td>
                    <td>Ustaw żądanie plików cookie</td>
                </tr>
                </tbody>
            </table>

            <h2>XSS</h2>
            <p className='important'>{'#"><img src=/ onerror=alert(document.cookie)>'}</p>

            <h2>WHOIS</h2>
            <h4 className='important'>whois inlanefreight.com</h4>
            <ul>
                <li>
                    <span className='important'>Nazwa domeny (Domain Name)</span>: Nazwa domeny (np. example.com)</li>
                <li>
                    <span className='important'>Zarejstrowana (Registrar)</span>: Firma, w której zarejestrowana została domena (np. GoDaddy, Namecheap)</li>
                <li>
                    <span className='important'>Kontakt z rejestrującym (Registrant Contact)</span>: Osoba lub organizacja, która zarejestrowała domenę.</li>
                <li>
                    <span className='important'>Kontakt administracyjny (Administrative Contact)</span>: Osoba odpowiedzialna za zarządzanie domeną (The person responsible for managing the domain)</li>
                <li>
                    <span className='important'>Kontakt techniczny (Technical Contact)</span>: Osoba zajmująca się sprawami technicznymi związanymi z domeną.</li>
                <li>
                    <span className='important'>Daty utworzenia i wygaśnięcia (Creation and Expiration Dates)</span>: Kiedy domena została zarejestrowana i kiedy wygaśnie.</li>
                <li>
                <span className='important'>Nazwa serwera (Name Servers)</span>: Serwery tłumaczące nazwę domeny na adres IP.</li>
            </ul>
        </section>
    )
};

export default Commends;