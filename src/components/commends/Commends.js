import './commends.scss';
import { Link } from 'react-router-dom';

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

            <h2 id="dig">dig (Domain Information Groper)</h2>
            <p>Polecenie dig (Domain Information Groper) to wszechstronne i potężne narzędzie do wysyłania zapytań do serwerów DNS i pobierania różnych typów rekordów DNS. Jego elastyczność oraz szczegółowe i konfigurowalne wydruki sprawiają, że jest to doskonały wybór.</p>
            <table class="table table-striped text-left">
                <thead>
                    <tr>
                    <th>Komenda</th>
                    <th>Opis</th>
                    </tr>
                </thead>
                <tbody className='description'>
                    <tr>
                    <td>dig domain.com</td>
                    <td>Wykonuje domyślne wyszukiwanie rekordów A dla domeny.</td>
                    </tr>
                    <tr>
                    <td>dig domain.com A</td>
                    <td>Pobiera adres IPv4 (rekord A) powiązany z domeną.</td>
                    </tr>
                    <tr>
                    <td>dig domain.com AAAA</td>
                    <td>Pobiera adres IPv6 (rekord AAAA) powiązany z domeną.</td>
                    </tr>
                    <tr>
                    <td>dig domain.com MX</td>
                    <td>Znajduje serwery pocztowe (rekordy MX) odpowiedzialne za domenę.</td>
                    </tr>
                    <tr>
                    <td>dig domain.com NS</td>
                    <td>Identyfikuje autorytatywne serwery nazw dla domeny.</td>
                    </tr>
                    <tr>
                    <td>dig domain.com TXT</td>
                    <td>Pobiera wszystkie rekordy TXT powiązane z domeną.</td>
                    </tr>
                    <tr>
                    <td>dig domain.com CNAME</td>
                    <td>Pobiera rekord nazwy kanonicznej (CNAME) dla domeny.</td>
                    </tr>
                    <tr>
                    <td>dig domain.com SOA</td>
                    <td>Pobiera rekord początku uprawnień (SOA) dla domeny.</td>
                    </tr>
                    <tr>
                    <td>dig @1.1.1.1 domain.com</td>
                    <td>Określa konkretny serwer nazw, do którego ma zostać wysłane zapytanie; w tym przypadku 1.1.1.1</td>
                    </tr>
                    <tr>
                    <td>dig +trace domain.com</td>
                    <td>Pokazuje pełną ścieżkę rozpoznawania DNS.</td>
                    </tr>
                    <tr>
                    <td>dig -x 192.168.1.1</td>
                    <td>Wykonuje wyszukiwanie wsteczne adresu IP 192.168.1.1 w celu znalezienia powiązanej nazwy hosta. Może być konieczne określenie serwera nazw.</td>
                    </tr>
                    <tr>
                    <td>dig +short domain.com</td>
                    <td>Podaje krótką i zwięzłą odpowiedź na zapytanie.</td>
                    </tr>
                    <tr>
                    <td>dig +noall +answer domain.com</td>
                    <td>Wyświetla tylko sekcję odpowiedzi wyniku zapytania.</td>
                    </tr>
                    <tr>
                    <td>dig domain.com ANY</td>
                    <td>Pobiera wszystkie dostępne rekordy DNS dla domeny (Uwaga: wiele serwerów DNS ignoruje ANY zapytania, aby zmniejszyć obciążenie i zapobiec nadużyciom, zgodnie z RFC 8482).</td>
                    </tr>
                    <tr>
                    <td>dig axfr @nsztm1.digi.ninja(DNS server) zonetransfer.me</td>
                    <td>To polecenie instruuje dig, aby zażądał pełnego transferu strefy (axfr) z serwera DNS odpowiedzialnego zazonetransfer.me. Jeśli serwer jest źle skonfigurowany i pozwala na transfer, otrzymasz pełną listę rekordów DNS dla domeny, łącznie ze wszystkimi subdomenami.</td>
                    </tr>
                </tbody>
            </table>
            <div className='waring'>
                <p>Uwaga: niektóre serwery mogą wykrywać i blokować nadmierną liczbę zapytań DNS. Zachowaj ostrożność i przestrzegaj limitów stawek. Zawsze uzyskaj pozwolenie przed wykonaniem obszernego rozpoznania DNS celu.</p>
            </div>

            <h2><Link to='/tools'>dnsenum</Link></h2>
            <p>Kompleksowe narzędzie do wyliczania DNS, które obsługuje ataki słownikowe i brute-force w celu wykrycia subdomen.</p>
            <table>
                <thead>
                    <tr>
                    <th>Komenda</th>
                    </tr>
                </thead>
                <tbody className='description'>
                    <tr>
                    <td>dnsenum --enum (nazwa strony) -f (lista słów (word list)) -r</td>
                    </tr>
                    <tr>
                    <td>dnsenum --enum inlanefreight.com -f /usr/share/seclists/Discovery/DNS/subdomains-top1million-110000.txt -r</td>
                    </tr>
                </tbody>
            </table>

            <h2><Link to='/tools'>gobuster</Link></h2>
            <p>Wielozadaniowe narzędzie często używane do brutalnego wymuszania katalogów/plików, ale także skuteczne do wykrywania hostów wirtualnych.</p>
            <table>
                <thead>
                    <tr>
                    <th>Komenda</th>
                    </tr>
                </thead>
                <tbody className='description'>
                    <tr>
                    <td>gobuster vhost -u (http://target_IP_address) -w (wordlist_file) --append-domain</td>
                    </tr>
                    <tr>
                    <td>gobuster vhost -u http://inlanefreight.htb:81 -w /usr/share/seclists/Discovery/DNS/subdomains-top1million-110000.txt --append-domain</td>
                    </tr>
                </tbody>
            </table>

            <div className='waring'>
                <p>W nowszych wersjach Gobustera flaga --append-domain jest wymagana w celu dołączenia domeny bazowej do każdego słowa na liście słów podczas wykrywania hosta wirtualnego. Ta flaga zapewnia, że ​​Gobuster poprawnie konstruuje pełne wirtualne nazwy hostów, co jest niezbędne do dokładnego wyliczenia potencjalnych subdomen. W starszych wersjach Gobuster ta funkcjonalność była obsługiwana inaczej i flaga --append-domain nie była konieczna. Użytkownicy starszych wersji mogą uznać tę flagę za niedostępną lub potrzebną, ponieważ narzędzie domyślnie dołączało domenę bazową lub wykorzystywało inny mechanizm generowania hosta wirtualnego.</p>
            </div>
        </section>
    )
};

export default Commends;