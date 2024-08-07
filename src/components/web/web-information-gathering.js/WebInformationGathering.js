import ExampleFrame from "../../exampleFrame/ExampleFrame";
import dns_example from '../../../assets/dns_example.png';
import { Link } from 'react-router-dom';

const WebInformationGathering = () => {

    return(
        <section>
            <h1>Web Information Gathering</h1>

            <h2>Pasywny Rekonesans</h2>
            <p>Natomiast rekonesans pasywny polega na zbieraniu informacji o celu bez bezpośredniej interakcji z nim. Polega to na analizie publicznie dostępnych informacji i zasobów, takich jak:</p>
            <table>
                <thead>
                    <tr>
                    <th>Technika</th>
                    <th>Opis</th>
                    <th>Przykład</th>
                    <th>Narzędzie</th>
                    <th>Ryzyko wykrycia</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>Zapytania wyszukiwarki (Search Engine Queries)</td>
                    <td>Wykorzystywanie wyszukiwarek do odkrywania informacji o celu, w tym stron internetowych, profili w mediach społecznościowych i artykułów prasowych.</td>
                    <td>Wyszukiwanie w Google hasła „[Target Name] pracowników” w celu znalezienia informacji o pracownikach lub profili w mediach społecznościowych.</td>
                    <td><span className="important">Google</span>, DuckDuckGo, Bing, and specialised search engines (e.g., Shodan)</td>
                    <td>Bardzo niski: zapytania w wyszukiwarkach są normalną aktywnością w Internecie i jest mało prawdopodobne, aby powodowały wyświetlanie alertów.</td>
                    </tr>
                    <tr>
                    <td>WHOIS Lookups</td>
                    <td>Wysyłanie zapytań do baz danych WHOIS w celu pobrania szczegółów rejestracji domeny.</td>
                    <td>Przeprowadzenie wyszukiwania WHOIS w domenie docelowej w celu znalezienia nazwy rejestrującego, danych kontaktowych i serwerów nazw.</td>
                    <td className="important">whois command-line tool, online WHOIS lookup services</td>
                    <td>Bardzo niski: zapytania WHOIS są uzasadnione i nie budzą podejrzeń.</td>
                    </tr>
                    <tr>
                    <td>DNS</td>
                    <td>Analizowanie rekordów DNS w celu identyfikacji subdomen, serwerów pocztowych i innej infrastruktury.</td>
                    <td>Użycie "dig" do wyliczenia subdomen domeny docelowej.</td>
                    <td className="important">dig, nslookup, host, dnsenum, fierce, dnsrecon</td>
                    <td>Bardzo niski: zapytania DNS są niezbędne do przeglądania Internetu i zazwyczaj nie są oznaczane jako podejrzane.</td>
                    </tr>
                    <tr>
                    <td>Analiza archiwum (Web Archive Analysis)</td>
                    <td>Badanie historycznych migawek witryny docelowej w celu zidentyfikowania zmian, luk w zabezpieczeniach lub ukrytych informacji.</td>
                    <td>Używanie Wayback Machine do przeglądania poprzednich wersji docelowej witryny internetowej i sprawdzania, jak zmieniała się ona na przestrzeni czasu.</td>
                    <td className="important">Wayback Machine</td>
                    <td>Bardzo niski: Dostęp do zarchiwizowanych wersji stron internetowych jest normalną czynnością.</td>
                    </tr>
                    <tr>
                    <td>Analiza mediów społecznościowych (Social Media Analysis)</td>
                    <td>Zbieranie informacji z platform mediów społecznościowych, takich jak LinkedIn, Twitter czy Facebook.</td>
                    <td>Wyszukiwanie na LinkedIn pracowników docelowej organizacji, aby poznać ich role, obowiązki i potencjalne cele socjotechniczne.</td>
                    <td className="important">LinkedIn, Twitter, Facebook, specialised OSINT tools</td>
                    <td>Bardzo niski: Dostęp do publicznych profili w mediach społecznościowych nie jest uważany za inwazyjny.</td>
                    </tr>
                    <tr>
                    <td>
                    Repozytoria kodu (Code Repositories)</td>
                    <td>Analizowanie publicznie dostępnych repozytoriów kodu, takich jak GitHub, pod kątem ujawnionych poświadczeń lub luk w zabezpieczeniach.</td>
                    <td>Przeszukiwanie GitHuba pod kątem fragmentów kodu lub repozytoriów powiązanych z celem, które mogą zawierać poufne informacje lub luki w kodzie.</td>
                    <td className="important">GitHub, GitLab</td>
                    <td>Bardzo niski: repozytoria kodu są przeznaczone do publicznego dostępu i przeszukiwanie ich nie jest podejrzane.</td>
                    </tr>
                </tbody>
            </table>
            
            <hr />

            <h2>Aktywne Rekonesans</h2>
            <p>Podczas aktywnego rozpoznania atakujący bezpośrednio wchodzi w interakcję z systemem docelowym w celu zebrania informacji. Ta interakcja może przybierać różne formy:</p>
            <table>
                <thead>
                <tr>
                <th>Technika</th>
                <th>Opis</th>
                <th>Przykład</th>
                <th>Narzędzie</th>
                <th>Ryzyko wykrycia</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                <td>Chwytanie sztandaru (Banner Grabbing)</td>
                <td>Pobieranie informacji z banerów wyświetlanych przez usługi działające na serwerze docelowym.</td>
                <td>Łączenie się z serwerem WWW na <span className="important">porcie 80</span> i sprawdzanie banera <span className="important">HTTP</span> w celu zidentyfikowania oprogramowania i wersji serwera WWW.</td>
                <td className="important">Netcat, curl</td>
                <td><span className="important">Niski</span>: przechwycenie banera zazwyczaj wymaga minimalnej interakcji, ale nadal może zostać zarejestrowane.</td>
                </tr>
                <tr>
                <td>Odcisk palca systemu operacyjnego (OS Fingerprinting)</td>
                <td>Identyfikacja systemu operacyjnego działającego na urządzeniu docelowym.</td>
                <td>Korzystanie z możliwości wykrywania systemu operacyjnego Nmap (<span className="important">-O</span>) w celu ustalenia, czy na komputerze docelowym działa system <span className="important">Windows, Linux, czy inny system operacyjny</span>.</td>
                <td><span className="important">Nmap</span>, Xprobe2</td>
                <td><span className="important">Niski</span>: pobieranie odcisków palców systemu operacyjnego jest zwykle pasywne, ale można wykryć pewne zaawansowane techniki.</td>
                </tr>
                <tr>
                <td>Wyliczenie serwisów (Service Enumeration)</td>
                <td>Określanie konkretnych wersji usług działających na otwartych portach.</td>
                <td>Używanie wykrywania wersji usługi Nmap (<span className="important">-sV</span>) w celu ustalenia, czy na serwerze WWW działa Apache 2.4.50 czy Nginx 1.18.0.</td>
                <td className="important">Nmap</td>
                <td><span className="important">Niski</span>: Podobnie jak w przypadku przechwytywania banera, wyliczenie usług może być rejestrowane, ale prawdopodobieństwo wyzwolenia alertów jest mniejsze.</td>
                </tr>
                <tr>
                <td>Web Spidering - Crawling</td>
                <td>Indeksowanie docelowej witryny internetowej w celu identyfikacji stron internetowych, katalogów i plików.</td>
                <td>Uruchamianie robota sieciowego, takiego jak Burp Suite Spider lub OWASP ZAP Spider, w celu zmapowania struktury witryny internetowej i odkrycia ukrytych zasobów.</td>
                <td><span className="important">Burp Suite Spider, OWASP ZAP Spider</span>, Scrapy (customisable)</td>
                <td><span className="important">Niski</span> do <span className="waring">średniego</span>: można wykryć, jeśli zachowanie robota nie jest starannie skonfigurowane tak, aby naśladowało legalny ruch.</td>
                </tr>
                <tr>
                <td>Mapowanie sieci (Network Mapping)</td>
                <td>Mapowanie topologii sieci docelowej, w tym podłączonych urządzeń i ich relacji.</td>
                <td>Korzystanie z funkcji traceroute w celu określenia ścieżki, którą pakiety docierają do serwera docelowego, ujawniając potencjalne przeskoki w sieci i infrastrukturę.</td>
                <td>Traceroute, <span className="important">Nmap</span></td>
                <td><span className="waring">Średni</span> do <span className="error">wysokiego</span>: Nadmierny lub nietypowy ruch sieciowy może wzbudzić podejrzenia.</td>
                </tr>
                <tr>
                <td>Skanowanie Portów (Port Scanning)</td>
                <td>Identyfikacja otwartych portów i usług działających na serwerze docelowym.</td>
                <td>Używanie Nmap do skanowania serwera WWW w poszukiwaniu otwartych portów, takich jak <span className="important">80 (HTTP) i 443 (HTTPS)</span>.</td>
                <td><span className="important">Nmap</span>, Masscan, Unicornscan</td>
                <td><span className="error">Wysoki</span>: Bezpośrednia interakcja z celem może uruchomić systemy wykrywania włamań (intrusion detection systems - IDS) i firewalls.</td>
                </tr>
                <tr>
                <td>Skanowanie podatności (Vulnerability Scanning)</td>
                <td>Sondowanie celu pod kątem znanych luk w zabezpieczeniach, takich jak nieaktualne oprogramowanie lub błędne konfiguracje.</td>
                <td>Uruchamianie Nessusa w aplikacji internetowej w celu sprawdzenia luk w wstrzykiwaniu SQL lub luk w zabezpieczeniach skryptów krzyżowych (XSS).</td>
                <td>Nessus, OpenVAS, Nikto</td>
                <td><span className="error">Wysoki</span>: skanery luk w zabezpieczeniach wysyłają ładunki wykorzystujące luki w zabezpieczeniach, które mogą wykryć rozwiązania zabezpieczające.</td>
                </tr>
                </tbody>
            </table>

            <hr />

            <h2>Koncepcja DNS</h2>
            <ExampleFrame screen={dns_example}/>
            <table>
                <thead>
                    <tr>
                    <th>Typ reokordu</th>
                    <th>Pełna nazwa</th>
                    <th>Opis</th>
                    <th>Przykład pliku</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td><code>A</code></td>
                    <td>Rekord adresu - Address Record IPv4</td>
                    <td>Mapuje nazwę hosta na jego adres IPv4.</td>
                    <td className="important">www.example.com. IN A 192.0.2.1</td>
                    </tr>
                    <tr>
                    <td><code>AAAA</code></td>
                    <td>Rekord adresu - Address Record IPv6</td>
                    <td>Mapuje nazwę hosta na jego adres IPv6 </td>
                    <td className="important">www.example.com. IN AAAA 2001:db8:85a3::8a2e:370:7334</td>
                    </tr>
                    <tr>
                    <td><code>CNAME</code></td>
                    <td>Zapis nazwy kanonicznej - Canonical Name Record</td>
                    <td>Tworzy alias dla nazwy hosta, wskazując go na inną nazwę hosta.</td>
                    <td className="important">blog.example.com. IN CNAME webserver.example.net</td>
                    </tr>
                    <tr>
                    <td><code>MX</code></td>
                    <td>Zapis wymiany poczty - Mail Exchange Record</td>
                    <td>Określa serwery pocztowe odpowiedzialne za obsługę poczty e-mail w domenie.</td>
                    <td className="important">example.com. IN MX 10 mail.example.com.</td>
                    </tr>
                    <tr>
                    <td><code>NS</code></td>
                    <td>Rekord serwera nazw - Name Server Record</td>
                    <td>Deleguje strefę DNS do określonego autorytatywnego serwera nazw.</td>
                    <td className="important">example.com. IN NS ns1.example.com</td>
                    </tr>
                    <tr>
                    <td><code>TXT</code></td>
                    <td>Zapis tekstowy - Text Record</td>
                    <td>Przechowuje dowolne informacje tekstowe, często używane do weryfikacji domeny lub zasad bezpieczeństwa.</td>
                    <td className="important">example.com. IN TXT "v=spf1 mx -all" (SPF record)</td>
                    </tr>
                    <tr>
                    <td><code>SOA</code></td>
                    <td>Początek zapisu uprawnień - Start of Authority Record</td>
                    <td>Określa informacje administracyjne dotyczące strefy DNS, w tym podstawowy serwer nazw, adres e-mail osoby odpowiedzialnej i inne parametry.</td>
                    <td className="important">example.com. IN SOA ns1.example.com. admin.example.com. 2024060301 10800 3600 604800 86400</td>
                    </tr>
                    <tr>
                    <td><code>SRV</code></td>
                    <td>Rekordy serwisów - Service Record</td>
                    <td>Definiuje nazwę hosta i numer portu dla określonych usług.</td>
                    <td className="important">_sip._udp.example.com. IN SRV 10 5 5060 sipserver.example.com.</td>
                    </tr>
                    <tr>
                    <td><code>PTR</code></td>
                    <td>Rekord wskaźnika - Pointer Record</td>
                    <td>Używany do odwrotnego wyszukiwania DNS, mapowania adresu IP na nazwę hosta.</td>
                    <td className="important">1.2.0.192.in-addr.arpa. IN PTR www.example.com.</td>
                    </tr>
                </tbody>
            </table>

            <hr />

            <h2>Narzędzia DNS</h2>
            <table>
                <thead>
                    <tr>
                    <th>Narzędzie</th>
                    <th>Cechy</th>
                    <th>Case</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td><Link to="/commends#dig">dig</Link></td>
                    <td>Wszechstronne narzędzie do wyszukiwania DNS, które obsługuje różne typy zapytań (A, MX, NS, TXT itp.) i szczegółowe wyniki.</td>
                    <td>Ręczne zapytania DNS, transfery stref (jeśli są dozwolone), rozwiązywanie problemów z DNS i dogłębna analiza rekordów DNS.</td>
                    </tr>
                    <tr>
                    <td>nslookup</td>
                    <td>Prostsze narzędzie do wyszukiwania DNS, głównie dla rekordów A, AAAA i MX.</td>
                    <td>Podstawowe zapytania DNS, szybkie sprawdzenie rozdzielczości domeny i rekordów serwera pocztowego.</td>
                    </tr>
                    <tr>
                    <td>host</td>
                    <td>Usprawnione narzędzie do wyszukiwania DNS ze zwięzłymi wynikami.</td>
                    <td>Szybkie sprawdzanie rekordów A, AAAA i MX.</td>
                    </tr>
                    <tr>
                    <td>dnsenum</td>
                    <td>Zautomatyzowane narzędzie do wyliczania DNS, ataki słownikowe, brutalne wymuszanie, transfery stref (jeśli są dozwolone).</td>
                    <td>Odkrywanie subdomen i efektywne zbieranie informacji DNS.</td>
                    </tr>
                    <tr>
                    <td>dnsrecon</td>
                    <td>Łączy wiele technik rozpoznania DNS i obsługuje różne formaty wyjściowe.</td>
                    <td>Kompleksowe wyliczanie DNS, identyfikacja subdomen i gromadzenie rekordów DNS do dalszej analizy.</td>
                    </tr>
                </tbody>
            </table>
        </section>
    )
};

export default WebInformationGathering;