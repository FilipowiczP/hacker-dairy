const RequestHeader = () =>{
    return (
        <section>
            <h1>Request Header</h1>

            <details>
                <summary>Content-Type</summary>
                <p>Nagłówek Content-Type określa typ zawartości zwracanej przez serwer w odpowiedzi na żądanie HTTP</p>
                <p>Serwer obsługuje ten typ – Może zwrócić dane o stanie serwera, np. status jego zasobów, obciążenie, aktywne połączenia (np. w serwerze Apache /server-status).</p>
                <p>Serwer nie obsługuje tego typu – Może zignorować ten nagłówek lub zwrócić błąd.</p>
                <p>Przeglądarka nie wie, co z tym zrobić – Może spróbować pobrać plik lub wyświetlić surowe dane.</p>
                <p>Niezamierzona interpretacja – Jeśli serwer posiada niestandardowe mechanizmy do parsowania nagłówków i błędnie interpretuje Content-Type, może dojść do np. prób ustanowienia proxy lub innego rodzaju ataku.</p>
                <div className="waring">
                    <p>Content-Type: <span className="important">proxy:http://127.0.0.1</span></p>
                </div>
            </details>

            <hr />

            <details>
                <summary>X-Forwarded-For</summary>
                <p>Załóżmy, że klient (np. Twoja przeglądarka) ma <span className="important">IP 203.0.113.5</span> i łączy się z serwerem docelowym przez serwer proxy o IP <span className="important">192.0.2.1</span>. W normalnych warunkach serwer docelowy zobaczy tylko IP proxy (<span className="important">192.0.2.1</span>), ale jeśli proxy dodaje nagłówek <span className="important">X-Forwarded-For</span>, żądanie HTTP będzie zawierać:</p>
                <p><span className="important">X-Forwarded-For: 203.0.113.5</span></p>
                <p>Dzięki temu serwer docelowy może ustalić prawdziwe IP klienta.</p>
                <br />
                <br />
                <p>Kiedy się używa?</p>
                <ul>
                    <li><span className="important">Reverse proxy (np. nginx, HAProxy)</span> — gdy masz serwery aplikacyjne za jednym punktem wejścia.</li>
                    <li><span className="important">Load balancery</span> — AWS ELB, Cloudflare, czy inne rozwiązania chmurowe.</li>
                    <li><span className="important">Aplikacje webowe</span> — które logują adresy IP użytkowników, np. do celów analitycznych lub bezpieczeństwa.</li>
                </ul>
            </details>

            <hr />
            
            <details>
                <summary>X-Forwarded-Host</summary>
                <p>To standardowy nagłówek służący do identyfikacji oryginalnego hosta żądanego przez klienta w nagłówku żądania HTTP. Daje możliwość nadpisywania <span className="important">HOST</span></p>
            </details>
      
            <hr />

            <details>
                <summary>X-Forwarded-Proto / X-Forwarded-Scheme</summary>
                <p>To standardowy nagłówek służący do identyfikacji protokołu (HTTP lub HTTPS) użytego przez klienta do połączenia się z serwerem proxy lub modułem równoważenia obciążenia.</p>
                <p>np.: <span className="important">X-Forwarded-Scheme: nothttps</span></p>
            </details>
      
            <hr />

            <details>
                <summary>X-HTTP-Method-Override</summary>
                <p>To standardowy nagłówek służący do nadpisywania metody requesta, wykorzystywane np. przy fat GET request</p>
                <div className='waring'>
                    <p>GET /?param=innocent HTTP/1.1</p>
                    <p><span className='important'>X-HTTP-Method-Override: POST</span></p>
                    <p>...</p>
                    <p>param=bad-stuff-here</p>
                </div>
            </details>
 
            <hr />

            <details>
                <summary>Vary</summary>
                <p>Podstawowy sposób, w jaki nagłówek Vary jest często używany, może również okazać się pomocny atakującym. <span className="important">Nagłówek Vary określa listę dodatkowych nagłówków, które powinny być traktowane jako część klucza pamięci podręcznej, nawet jeśli normalnie nie są one kluczowane</span>. Jest powszechnie używany do określania, że ​​nagłówek User-Agent jest kluczowany, na przykład, tak aby w przypadku buforowania mobilnej wersji witryny nie została ona dostarczona użytkownikom niemobilnym przez pomyłkę.</p>
            </details>

            <hr />

            <details>
                <summary>Host</summary>
                <ul>
                    <li><span className="important"><u>Inject duplicate Host headers</u></span>
                        <p>Załóżmy, że front-end daje pierwszeństwo pierwszemu wystąpieniu nagłówka, ale back-end preferuje ostatnie wystąpienie.</p>
                        <div className="waring">
                            <p>GET /example HTTP/1.1</p>
                            <p>Host: vulnerable-website.com</p>
                            <p><span className="important">Host: bad-stuff-here</span></p>
                        </div>
                    </li>
                    <li><span className="important"><u>Supply an absolute URL</u></span>
                        <div className="waring">
                            <p>GET <span className="important">https://vulnerable-website.com</span>/ HTTP/1.1</p>
                            <p>Host: <span className="important">bad-stuff-here</span></p>
                        </div>
                    </li>
                    <li><span className="important"><u>Add line wrapping</u></span>
                        <div className="waring">
                            <p>GET /example HTTP/1.1</p>
                            <p className="tab-1"><span className="important">Host: bad-stuff-here</span></p>
                            <p>Host: vulnerable-website.com</p>
                        </div>
                    </li>
                    <li><span className="important"><u>Inject host override headers</u></span>
                        <p><span className="important">X-Host</span></p>
                        <p><span className="important">X-Forwarded-Server</span></p>
                        <p><span className="important">X-HTTP-Host-Override</span></p>
                        <p><span className="important">Forwarded</span></p>
                    <div className="waring">
                            <p>GET /example HTTP/1.1</p>
                            <p>Host: vulnerable-website.com</p>
                            <p><span className="important">X-Forwarded-Host: bad-stuff-here</span></p>
                        </div>
                    </li>
                    <li><span className="important"><u>SSRF</u></span>
                
                    <div className="waring">
                            <p>GET /admin HTTP/1.1</p>
                            <p>Host: <span className="important">localhost</span> lub <span className="important">127.0.0.1</span></p>
                        </div>
                    </li>

                    <li><span className="important"><u>Connection state attack</u></span>
                    <p>Przygotowanie kilku requestów np</p>
                    <div className="waring">
                            <p>GET / HTTP/1.1</p>
                            <p>Host: <span className="important">YOUR-LAB-ID.h1-web-security-academy.net</span></p>
                    </div>
                    <div className="waring">
                            <p>GET /admin HTTP/1.1</p>
                            <p>Host: <span className="important">192.168.0.1</span></p>
                    </div>
                    <div className="waring">
                            <p>POST /admin/delete HTTP/1.1</p>
                            <p>Host: 192.168.0.1</p>
                            <p>...</p>
                            <p>csrf=YOUR-CSRF-TOKEN&username=carlos</p>
                    </div>
                    <p>Wysłać jako group in sequence (single connection).</p>
                    </li>
                </ul>
            </details>
        </section>
    )
}

export default RequestHeader;