import wordPressStructure from '../../../assets/wordPressStructure.png';
import wordPressUser from '../../../assets/wordPressUser.png';
import wordPressNotUser from '../../../assets/wordPressNotUser.png';
import wordPressSecondUser from '../../../assets/wordPressSecondUser.png';
import wpscan from '../../../assets/wpscan.png';
import wordpressBrute from '../../../assets/wordpressBrute.png';
import ExampleFrame from '../../exampleFrame/ExampleFrame';
import { Link } from 'react-router-dom';


const WordPress = () => {
    return (
        <section>
            <h1>WordPress</h1>
            <h2>Domyślna struktura plików WordPress</h2>
            <ExampleFrame screen={wordPressStructure} />

            <p>Plik <span className='important'>license.txt</span> zawiera przydatne informacje, takie jak zainstalowana wersja WordPressa.</p>
            <p><span className='important'>wp-activate.php</span> służy do aktywacji poczty e-mail podczas konfigurowania nowej witryny WordPress.</p>
            <p>Folder <span>wp-admin</span> zawiera stronę logowania z dostępem administratora i pulpit nawigacyjny zaplecza. Po zalogowaniu się użytkownik może wprowadzać zmiany w witrynie w oparciu o przydzielone mu uprawnienia. Strona logowania może znajdować się pod jedną z poniższych ścieżek:</p>
            <p className='important'>/wp-admin/login.php</p>
            <p className='important'>/wp-admin/wp-login.php</p>
            <p className='important'>/login.php</p>
            <p className='important'>/wp-login.php</p>
            <p><span className='important'>xmlrpc.php</span> to plik reprezentujący funkcję WordPressa, która umożliwia <span className='important'>przesyłanie danych</span> za pomocą protokołu HTTP działającego jako <span className='important'>mechanizm transportu i XML</span> jako mechanizmu kodowania. Ten rodzaj komunikacji został zastąpiony przez <span className='important'>API REST WordPressa</span>.</p>
            <p>Plik wp-<span className='important'>config.php</span> zawiera informacje wymagane przez WordPress do <span className='important'>połączenia się z bazą danych</span>, takie jak nazwa bazy danych, host bazy danych, nazwa użytkownika i hasło, klucze i sole uwierzytelniające oraz prefiks tabeli bazy danych. Tego pliku konfiguracyjnego można również użyć do <span className='important'>aktywowania trybu DEBUG</span>, co może być przydatne przy rozwiązywaniu problemów.</p>
            <p>Folder <span className='important'>wp-content</span> jest głównym katalogiem, w którym przechowywane są <span className='important'>wtyczki i motywy</span>. Podkatalog uploads/ to zazwyczaj miejsce, w którym przechowywane są wszelkie pliki przesłane na platformę. <span className='important'>Te katalogi i pliki należy dokładnie wyliczyć, ponieważ mogą zawierać poufne dane, które mogą prowadzić do zdalnego wykonania kodu lub wykorzystania innych luk w zabezpieczeniach lub błędnych konfiguracji</span>.</p>
            <p><span className='important'>wp-includes</span> zawiera wszystko oprócz komponentów administracyjnych i motywów należących do witryny. Jest to katalog, w którym przechowywane są podstawowe <span className='important'>pliki, takie jak certyfikaty, czcionki, pliki JavaScript i widżety</span>.</p>

            <h3>WordPress User Roles</h3>
            <table>
                <thead>
                    <tr>
                        <th>Rola</th>
                        <th>Opis</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>Administrator</td>
                    <td>Użytkownik ten ma dostęp do funkcji administracyjnych serwisu. Obejmuje to dodawanie i usuwanie użytkowników i postów, a także edycję kodu źródłowego.</td>
                    </tr>
                    <tr>
                    <td>Editor</td>
                    <td>Redaktor może publikować posty i zarządzać nimi, w tym także postami innych użytkowników.</td>
                    </tr>
                    <tr>
                    <td>Author</td>
                    <td>Autorzy mogą publikować własne posty i zarządzać nimi.</td>
                    </tr>
                    <tr>
                    <td>Contributor</td>
                    <td>Ci użytkownicy mogą pisać własne posty i zarządzać nimi, ale nie mogą ich publikować.</td>
                    </tr>
                    <tr>
                    <td>Subscriber</td>
                    <td>Są to zwykli użytkownicy, którzy mogą przeglądać posty i edytować swoje profile.</td>
                    </tr>
                </tbody>
            </table>

            <hr />
            <h2>Enumeracja pluginów oraz theme</h2>

            <div className='waring'>
                <p>Plugins</p>
                <p>curl -s -X GET http://blog.inlanefreight.com | sed 's/href=/\n/g' | sed 's/src=/\n/g' | grep 'wp-content/plugins/*' | cut -d"'" -f2</p>
            </div>

            <div className='waring'>
                <p>Themes</p>
                <p>curl -s -X GET http://blog.inlanefreight.com | sed 's/href=/\n/g' | sed 's/src=/\n/g' | grep 'themes' | cut -d"'" -f2</p>
            </div>

            <hr />
            <h2>Enumeracja Użytkowników</h2>
            <h3>Istniejący user</h3>
            <ExampleFrame screen={wordPressUser} />

            <h3>Nieistniejący user</h3>
            <ExampleFrame screen={wordPressNotUser} />

            <h3>Druga metoda</h3>
            <p>Wymaga interakcji z punktem końcowym JSON, co pozwala nam uzyskać listę użytkowników. Zostało to zmienione w rdzeniu WordPress po wersji 4.7.1, a nowsze wersje pokazują tylko, czy użytkownik jest skonfigurowany, czy nie. Przed tą wersją domyślnie pokazywani byli wszyscy użytkownicy, którzy opublikowali post.</p>
            <ExampleFrame screen={wordPressSecondUser} />

            <hr />
            <h2>WPScan</h2>
            <Link to='https://wpscan.com'>WPS - register - token</Link>
            <p className='important'>wpscan --url http://blog.inlanefreight.com --enumerate --api-token Kffr4fdJzy9qVcTk{`<SNIP>`}</p>
            <ExampleFrame screen={wpscan} />

            <h2>WPscan - XMLRPC</h2>
            <p className='important'>wpscan --password-attack xmlrpc -t 20 -U admin, david -P passwords.txt --url http://blog.inlanefreight.com</p>
            <ExampleFrame screen={wordpressBrute} />

        </section>
    )
}

export default WordPress;