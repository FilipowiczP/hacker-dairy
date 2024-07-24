import './webRequests.scss';
import web_structure from '../../../assets/web_structure.png';
import web_dns_request from '../../../assets/http_dns_request.png';
import https_flow from '../../../assets/https_flow.png';

const WebRequests = () => {

    return(
        <section>
            <h1>Web Requests</h1>
            <img src={web_structure} width='900px'/>
            <ul>
                <li>Scheme służy do identyfikacji protokołu, do którego uzyskuje dostęp klient i kończy się dwukropkiem i podwójnym ukośnikiem (://)</li>
                <li>Jest to opcjonalny komponent zawierający dane uwierzytelniające (oddzielone dwukropkiem :) używane do uwierzytelniania na hoście i oddzielony od hosta znakiem at (@)</li>
                <li>Host oznacza lokalizację zasobu. Może to być nazwa hosta lub adres IP</li>
                <li>Port jest oddzielony od hosta dwukropkiem (:). Jeśli nie określono żadnego portu, schematy http domyślnie korzystają z portu 80, a https domyślnie korzystają z portu 443</li>
                <li>Path wskazuje to na uzyskiwany dostęp do zasobu, którym może być plik lub folder. Jeśli nie określono ścieżki, serwer zwraca indeks domyślny (np. indeks.html).</li>
                <li>Query string ciąg zapytania zaczyna się od znaku zapytania (?) i składa się z parametru (np. loginu) i wartości (np. true). Wiele parametrów można oddzielić znakiem ampersand (&).</li>
                <li>Fragment są przetwarzane przez przeglądarki po stronie klienta w celu zlokalizowania sekcji w zasobach podstawowych (np. nagłówka lub sekcji strony).</li>
            </ul>
            <p>Nie wszystkie komponenty są wymagane, aby uzyskać dostęp do zasobu. Głównymi obowiązkowymi polami są schemat i host, bez których żądanie nie byłoby zasobu, o który można by poprosić.</p>
            <img src={web_dns_request} width='900px'/>
            <p>W pierwszej kolejności przeglądarka robi zapytanie <span className='important'>/etc/hosts</span></p>
            <h2>cURL</h2>
            <p>cURL nie renderuje kodu HTML/JavaScript/CSS, w przeciwieństwie do przeglądarki internetowej, ale drukuje go w nieprzetworzonym formacie</p>
            <p className='code'>curl -O (nazwa strony HTTP) <span>Pobieranie pliku</span></p>
            <p className='code'>curl -O inlanefreight.com/index.html</p>
            <img src={https_flow} width='900px'/>
            <p>Można obniżyć do HTTP przez man in the middle jako proxy by otrzymywać nie zaszyfrowane dane</p>
            <p className='code'>curl -k https://inlanefreight.com/index.html <span>Pomijanie certyfikatu SSL</span></p>
        </section>
    )
};

export default WebRequests;