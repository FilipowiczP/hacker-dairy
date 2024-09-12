const ImapPop3 = () =>{
    return(
        <section>
            <h1>IMAP/ POP3</h1>
            <p>Za pomocą protokołu IMAP możliwy jest dostęp do wiadomości e-mail z serwera pocztowego. W przeciwieństwie do protokołu Post Office Protocol (POP3), protokół IMAP umożliwia zarządzanie wiadomościami e-mail online bezpośrednio na serwerze i obsługuje struktury folderów. </p>

            <hr />
            <h2>Komendy IMAP</h2>

            <table>
                <thead>
                    <tr>
                    <th><strong>Komenda</strong></th>
                    <th><strong>Opie</strong></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td><code>1 LOGIN username password</code></td>
                    <td>Logowanie użytkownika.</td>
                    </tr>
                    <tr>
                    <td><code>1 LIST "" *</code></td>
                    <td>Wyświetla listę wszystkich katalogów.</td>
                    </tr>
                    <tr>
                    <td><code>1 CREATE "INBOX"</code></td>
                    <td>Tworzy skrzynkę pocztową o określonej nazwie.</td>
                    </tr>
                    <tr>
                    <td><code>1 DELETE "INBOX"</code></td>
                    <td>Usuwa skrzynkę pocztową.</td>
                    </tr>
                    <tr>
                    <td><code>1 RENAME "ToRead" "Important"</code></td>
                    <td>Zmienia nazwę skrzynki pocztowej.</td>
                    </tr>
                    <tr>
                    <td><code>1 LSUB "" *</code></td>
                    <td>Zwraca podzbiór nazw ze zbioru nazw, który Użytkownik zadeklarował jako <code className="important">aktywny</code> lub <code className="important">subskrybowany</code>.</td>
                    </tr>
                    <tr>
                    <td><code>1 SELECT INBOX</code></td>
                    <td>Wybiera skrzynkę pocztową, aby można było uzyskać dostęp do wiadomości w skrzynce pocztowej.</td>
                    </tr>
                    <tr>
                    <td><code>1 UNSELECT INBOX</code></td>
                    <td>Opuszcza wybraną skrzynkę pocztową.</td>
                    </tr>
                    <tr>
                    <td><code>1 FETCH &lt;ID&gt; all</code></td>
                    <td>Pobiera dane powiązane z wiadomością w skrzynce pocztowej.</td>
                    </tr>
                    <tr>
                    <td><code>1 CLOSE</code></td>
                    <td>Usuwa wszystkie wiadomości z ustawioną flagą <code>Deleted</code>.</td>
                    </tr>
                    <tr>
                    <td><code>1 LOGOUT</code></td>
                    <td>Zamyka połączenie z serwerem IMAP.</td>
                    </tr>
                </tbody>
            </table>

            <hr />
            <h2>Komendy POP3</h2>

            <table class="table table-striped text-left">
                <thead>
                    <tr>
                    <th><strong>Komenda</strong></th>
                    <th><strong>Opis</strong></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td><code>USER username</code></td>
                    <td>Identyfikuje użytkownika.</td>
                    </tr>
                    <tr>
                    <td><code>PASS password</code></td>
                    <td>Uwierzytelnianie użytkownika za pomocą jego hasła.</td>
                    </tr>
                    <tr>
                    <td><code>STAT</code></td>
                    <td>Żąda podania liczby zapisanych e-maili z serwera.</td>
                    </tr>
                    <tr>
                    <td><code>LIST</code></td>
                    <td>Żąda od serwera liczby i rozmiaru wszystkich e-maili.</td>
                    </tr>
                    <tr>
                    <td><code>RETR id</code></td>
                    <td>Żąda, aby serwer dostarczył żądaną wiadomość e-mail według identyfikatora.</td>
                    </tr>
                    <tr>
                    <td><code>DELE id</code></td>
                    <td>Żąda, aby serwer usunął żądaną wiadomość e-mail według identyfikatora.</td>
                    </tr>
                    <tr>
                    <td><code>CAPA</code></td>
                    <td>Żąda serwera, aby wyświetlić możliwości serwera.</td>
                    </tr>
                    <tr>
                    <td><code>RSET</code></td>
                    <td>Żąda serwera, aby zresetował przesłane informacje.</td>
                    </tr>
                    <tr>
                    <td><code>QUIT</code></td>
                    <td>Zamyka połączenie z serwerem POP3.</td>
                    </tr>
                </tbody>
            </table>

            <hr />
            <h2 className="waring">Niebezpieczne ustawienia</h2>

            <table class="table table-striped text-left">
                <thead>
                    <tr>
                    <th><strong>Ustawienia</strong></th>
                    <th><strong>Opis</strong></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td><code>auth_debug</code></td>
                    <td>Włącza rejestrowanie wszystkich debugowań uwierzytelniania.</td>
                    </tr>
                    <tr>
                    <td><code>auth_debug_passwords</code></td>
                    <td>To ustawienie dostosowuje szczegółowość dziennika, przesłane hasła i rejestrowanie schematu.</td>
                    </tr>
                    <tr>
                    <td><code>auth_verbose</code></td>
                    <td>Rejestruje nieudane próby uwierzytelnienia i ich przyczyny.</td>
                    </tr>
                    <tr>
                    <td><code>auth_verbose_passwords</code></td>
                    <td>Hasła używane do uwierzytelniania są rejestrowane i mogą zostać skrócone.</td>
                    </tr>
                    <tr>
                    <td><code>auth_anonymous_username</code></td>
                    <td>Określa nazwę użytkownika, która będzie używana podczas logowania za pomocą mechanizmu ANONYMOUS SASL.</td>
                    </tr>
                </tbody>
            </table>

            <hr />
            <h2>OpenSSL połączenie</h2>

            <div className="waring">
                <p>openssl s_client -connect 10.129.14.128:pop3s</p>
            </div>
            <div className="waring">
                <p>openssl s_client -connect 10.129.14.128:imaps</p>
            </div>

        </section>
    )
}

export default ImapPop3;