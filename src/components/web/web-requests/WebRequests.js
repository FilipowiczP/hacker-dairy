import './webRequests.scss';
import { Link } from 'react-router-dom';
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

            <h2><Link to='/commends#curl'>cURL</Link></h2>
            <p>cURL nie renderuje kodu HTML/JavaScript/CSS, w przeciwieństwie do przeglądarki internetowej, ale drukuje go w nieprzetworzonym formacie</p>
            <p className='code'>curl -O (nazwa strony HTTP) <span>Pobieranie pliku</span></p>
            <p className='code'>curl -O inlanefreight.com/index.html</p>

            <img src={https_flow} width='900px'/>
            <p>Można obniżyć do HTTP przez man in the middle jako proxy by otrzymywać nie zaszyfrowane dane</p>
            <p className='code'>curl -k https://inlanefreight.com/index.html <span>Pomijanie certyfikatu SSL</span></p>

            <h2>Security Headers</h2>
            <table>
                <thead>
                    <tr>
                        <th>Nagłówek</th>
                        <th>Przykład</th>
                        <th>Opis</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Content-Security-Policy</td>
                    <td>Content-Security-Policy: script-src 'self'</td>
                    <td>Narzuca politykę witryny dotyczącą zasobów wstrzykiwanych z zewnątrz. Może to być kod JavaScript, a także zasoby skryptów. Ten nagłówek instruuje przeglądarkę, aby akceptowała zasoby tylko z określonych zaufanych domen, zapobiegając w ten sposób atakom, takim jak Cross-site scripting (XSS).</td>
                </tr>
                <tr>
                    <td>Strict-Transport-Security</td>
                    <td>Strict-Transport-Security: max-age=31536000</td>
                    <td>Uniemożliwia przeglądarce dostęp do witryny internetowej za pośrednictwem protokołu HTTP w postaci zwykłego tekstu i wymusza przesyłanie całej komunikacji za pośrednictwem bezpiecznego protokołu HTTPS (HSTS - HTTP Strict Transport Security) Zabezpiezcz przed downguard z HTTPS na HTTP, chroniąc przed man in the middle. Uniemożliwia to atakującym przechwytywanie ruchu sieciowego i uzyskiwanie dostępu do chronionych informacji, takich jak hasła i inne wrażliwe dane.</td>
                </tr>
                <tr>
                    <td>Referrer-Policy</td>
                    <td>Referrer-Policy: origin</td>
                    <td>Określa, czy przeglądarka powinna uwzględniać wartość określoną w nagłówku Referer, czy nie. Może pomóc w uniknięciu ujawniania wrażliwych adresów URL i informacji podczas przeglądania witryny.</td>
                </tr>
                </tbody>
            </table>
           
            <h2>Request Metody</h2>
            <table>
                <thead>
                    <tr>
                        <th>Metoda</th>
                        <th>Opis</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                    <td>HEAD</td>
                    <td>Żąda nagłówków, które zostałyby zwrócone, gdyby do serwera wysłano żądanie GET. Nie zwraca treści żądania i zwykle ma na celu sprawdzenie długości odpowiedzi przed pobraniem zasobów.</td>
                </tr>
                <tr>
                    <td>OPTIONS</td>
                    <td>Zwraca informacje o serwerze, takie jak akceptowane przez niego metody.</td>
                </tr>
                </tbody>
            </table>

            <h2>Response Codes</h2>
            <table class="table table-striped text-left">
                <thead>
                  <tr>
                        <th>Typ</th>
                        <th>Opis</th>
                   </tr>
                </thead>
                <tbody>
                    <tr>
                       <td>1xx</td>
                        <td>Dostarcza informacji i nie ma wpływu na rozpatrzenie zapytania.</td>
                    </tr>
                    <tr>
                        <td>2xx</td>
                        <td>Zwracany, gdy żądanie się powiedzie.</td>
                   </tr>
                    <tr>
                        <td>3xx</td>
                         <td>Zwracany, gdy serwer przekierowuje klienta.</td>
                    </tr>
                    <tr>
                        <td>4xx</td>
                       <td>Oznacza niewłaściwe żądania klienta. Na przykład żądanie zasobu, który nie istnieje lub żądanie nieprawidłowego formatu.</td>
                    </tr>
                    <tr>
                        <td>5xx</td>
                        <td>Zwracany, gdy występuje problem z samym serwerem HTTP.</td>
                    </tr>
                </tbody>
            </table>
        </section>
    )
};

export default WebRequests;