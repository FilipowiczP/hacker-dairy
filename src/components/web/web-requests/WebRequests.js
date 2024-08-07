import './webRequests.scss';
import { Link } from 'react-router-dom';
import web_structure from '../../../assets/web_structure.png';
import web_dns_request from '../../../assets/http_dns_request.png';
import https_flow from '../../../assets/https_flow.png';
import dns_query from '../../../assets/dns_query.png';

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
            <p>W pierwszej kolejności przeglądarka robi zapytanie <span className='important'>/etc/hosts</span> dla Linux</p>
            <p><span className='important'>C:\Windows\System32\drivers\etc\hosts</span> dla Windows</p>

            <hr />

            <h2><Link to='/commends#curl'>cURL</Link></h2>
            <p>cURL nie renderuje kodu HTML/JavaScript/CSS, w przeciwieństwie do przeglądarki internetowej, ale drukuje go w nieprzetworzonym formacie</p>
            <p className='code'>curl -O (nazwa strony HTTP) <span>Pobieranie pliku</span></p>
            <p className='code'>curl -O inlanefreight.com/index.html</p>

            <img src={https_flow} width='900px'/>
            <p>Można obniżyć do HTTP przez man in the middle jako proxy by otrzymywać nie zaszyfrowane dane</p>
            <p className='code'>curl -k https://inlanefreight.com/index.html <span>Pomijanie certyfikatu SSL</span></p>

            <hr />

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
           
            <hr />

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

            <hr />

            <h2>Response Codes</h2>
            <table>
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

            <img src={dns_query} width='1200px'/>
            <ol>
                <li>
                    <span className='important'>Sprawdzanie pamięci komputera (DNS Query)</span>: Kiedy wpisujesz nazwę domeny, Twój komputer najpierw sprawdza swoją pamięć (cache), aby sprawdzić, czy pamięta adres IP z poprzedniej wizyty. Jeśli nie, kontaktuje się z narzędziem do rozpoznawania nazw DNS, zwykle udostępnianym przez dostawcę usług internetowych (internet service provider - ISP).

                </li>
                <li>
                    <span className='important'>Narzędzie do rozpoznawania nazw DNS sprawdza swoją mapę (wyszukiwanie rekurencyjne) - The DNS Resolver Checks its Map (Recursive Lookup)</span>: Mechanizm rozpoznawania nazw również posiada pamięć podręczną i jeśli nie znajdzie tam adresu IP, rozpoczyna podróż przez hierarchię DNS. Rozpoczyna się od zapytania do głównego serwera nazw, który działa jak bibliotekarz w Internecie.
                </li>
                <li>
                    <span className='important'>Główny serwer nazw wskazuje drogę - Root Name Server Points the Way</span>: Serwer główny nie zna dokładnego adresu, ale wie, kto go zna – serwer nazw domeny najwyższego poziomu (Top-Level Domain - TLD) odpowiedzialny za zakończenie domeny (np. .com, .org). Wskazuje przelicznikowi właściwy kierunek.
                </li>
                <li>
                    <span className='important'>Serwer nazw TLD zawęża zakres - TLD Name Server Narrows It Down</span>: Serwer nazw TLD przypomina mapę regionalną. Wie, który autorytatywny serwer nazw jest odpowiedzialny za konkretną domenę, której szukasz (np. example.com) i wysyła tam program rozpoznawania nazw.
                </li>
                <li>
                    <span className='important'>Autorytatywny serwer nazw dostarcza adres - Authoritative Name Server Delivers the Address</span>: Autorytatywny serwer nazw to ostatni przystanek. To jak adres wybranej witryny internetowej. Przechowuje prawidłowy adres IP i wysyła go z powrotem do usługi rozpoznawania nazw.
                </li>
                <li>
                    <span className='important'>Narzędzie do rozpoznawania nazw DNS zwraca informacje - The DNS Resolver Returns the Information</span>: Usługa rozpoznawania nazw otrzymuje adres IP i przekazuje go Twojemu komputerowi. Zapamiętuje go również na chwilę, na wypadek gdybyś chciał wkrótce ponownie odwiedzić witrynę.

                </li>
                <li>
                    <span className='important'>Połączenie ze stroną/ aplikacją</span>: Teraz, gdy Twój komputer zna adres IP, może połączyć się bezpośrednio z serwerem WWW hostującym witrynę i rozpocząć przeglądanie.
                </li>
            </ol>
        </section>
    )
};

export default WebRequests;