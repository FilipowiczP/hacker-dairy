import ftp_anonymous from '../../assets/ftp_anonymous.png';
import ftp_bounce from '../../assets/ftp_bounce.png';
import ExampleFrame from '../exampleFrame/ExampleFrame';

const FTP = () =>{
    return(
        <section>
            <h1>FTP</h1>

            <p>Protokół przesyłania plików (FTP) jest jednym z najstarszych protokołów w Internecie. FTP działa w warstwie aplikacji stosu protokołów TCP/IP. Zatem znajduje się na tej samej warstwie co HTTP czy POP. Protokoły te współpracują również z obsługą przeglądarek lub klientów poczty e-mail w celu świadczenia swoich usług. Istnieją również specjalne programy FTP obsługujące protokół przesyłania plików.</p>
            <p>Domyślną konfigurację vsFTPd można znaleźć w pliku <span className="important">/etc/vsftpd.conf</span>, a niektóre ustawienia są już domyślnie predefiniowane.</p>

            <table>
                <thead>
                    <tr>
                    <th><strong>Ustawienia</strong></th>
                    <th><strong>Opis</strong></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td><code>listen=NO</code></td>
                    <td>Uruchamiać z inetd czy jako samodzielny demon?</td>
                    </tr>
                    <tr>
                    <td><code>listen_ipv6=YES</code></td>
                    <td>Nasłuchiwanie na IPv6</td>
                    </tr>
                    <tr>
                    <td><code>anonymous_enable=NO</code></td>
                    <td>Włączony anonimowe logowanie</td>
                    </tr>
                    <tr>
                    <td><code>local_enable=YES</code></td>
                    <td>Pozwolenie na logowanie lokalnego usera</td>
                    </tr>
                    <tr>
                    <td><code>dirmessage_enable=YES</code></td>
                    <td>Wyświetlać komunikaty Active Directory, gdy użytkownicy wchodzą do określonych katalogów</td>
                    </tr>
                    <tr>
                    <td><code>use_localtime=YES</code></td>
                    <td>Używanie lokalnego czasu</td>
                    </tr>
                    <tr>
                    <td><code>xferlog_enable=YES</code></td>
                    <td>Aktywować rejestrowanie wysyłania/pobierania</td>
                    </tr>
                    <tr>
                    <td><code>connect_from_port_20=YES</code></td>
                    <td>Łązczenie z portu 20</td>
                    </tr>
                    <tr>
                    <td><code>secure_chroot_dir=/var/run/vsftpd/empty</code></td>
                    <td>Nazwa pustego katalogu</td>
                    </tr>
                    <tr>
                    <td><code>pam_service_name=vsftpd</code></td>
                    <td>Ten ciąg jest nazwą usługi PAM, której będzie używał vsftpd.</td>
                    </tr>
                    <tr>
                    <td><code>rsa_cert_file=/etc/ssl/certs/ssl-cert-snakeoil.pem</code></td>
                    <td>Ostatnie trzy opcje określają lokalizację certyfikatu RSA, który będzie używany w połączeniach szyfrowanych SSL.</td>
                    </tr>
                    <tr>
                    <td><code>rsa_private_key_file=/etc/ssl/private/ssl-cert-snakeoil.key</code></td>
                    <td></td>
                    </tr>
                    <tr>
                    <td><code>ssl_enable=NO</code></td>
                    <td></td>
                    </tr>
                </tbody>
            </table>

            <p>Ponadto istnieje plik o nazwie <span className="important">/etc/ftpusers</span>, na który również musimy zwrócić uwagę, ponieważ plik ten służy do <span className="important">odmawiania niektórym użytkownikom dostępu do usługi FTP</span>. Nawet jeśli istnieją w systemie Linux.</p>

            <hr />
            <h2 className="waring">Niebezpieczne ustawienia</h2>

            <table>
                <thead>
                    <tr>
                    <th><strong>Ustawienie</strong></th>
                    <th><strong>Opis</strong></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td><code>anonymous_enable=YES</code></td>
                    <td>Zezwolenie na anonimowe logowanie</td>
                    </tr>
                    <tr>
                    <td><code>anon_upload_enable=YES</code></td>
                    <td>Zezwolenie anonimowe ładowanie plików</td>
                    </tr>
                    <tr>
                    <td><code>anon_mkdir_write_enable=YES</code></td>
                    <td>Zezwolenie anonimowe na tworzenie nowych folderów</td>
                    </tr>
                    <tr>
                    <td><code>no_anon_password=YES</code></td>
                    <td>Nie pytaj anonimowych userów o hasło</td>
                    </tr>
                    <tr>
                    <td><code>anon_root=/home/username/ftp</code></td>
                    <td>Folder dla anonimowych</td>
                    </tr>
                    <tr>
                    <td><code>write_enable=YES</code></td>
                    <td>Zezwolenie na używanie komend FTP: STOR, DELE, RNFR, RNTO, MKD, RMD, APPE, and SITE</td>
                    </tr>
                    <tr>
                    <td><code>dirmessage_enable=YES</code></td>
                    <td>Pokazać komunikat przy pierwszym wejściu do nowego katalogu</td>
                    </tr>
                    <tr>
                    <td><code>chown_uploads=YES</code></td>
                    <td>Zmień własność anonimowo przesłanych plików?</td>
                    </tr>
                    <tr>
                    <td><code>chown_username=username</code></td>
                    <td>Użytkownik, któremu przyznano własność anonimowo przesłanych plików.</td>
                    </tr>
                    <tr>
                    <td><code>local_enable=YES</code></td>
                    <td>Zezwolić użytkownikom lokalnym na logowanie</td>
                    </tr>
                    <tr>
                    <td><code>chroot_local_user=YES</code></td>
                    <td>Umieść lokalnych użytkowników w ich katalogu domowym</td>
                    </tr>
                    <tr>
                    <td><code>chroot_list_enable=YES</code></td>
                    <td>Użyj listy użytkowników lokalnych, która zostanie umieszczona w ich katalogu domowym</td>
                    </tr>
                    <tr>
                    <td><code>hide_ids=YES</code></td>
                    <td>Wszystkie informacje o użytkownikach i grupach na listach katalogów będą wyświetlane jako „ftp”.</td>
                    </tr>
                    <tr>
                    <td><code>ls_recurse_enable=YES</code></td>
                    <td>Umożliwia korzystanie z list rekurencyjnych.</td>
                    </tr>
                </tbody>
            </table>
            <p><span className="important">ls -R</span> ukazuje całą strukturę plików</p>
            <p><span className="important">wget -m --no-passive ftp://anonymous:anonymous@10.129.14.136</span> pobieranie całą strukturę plików</p>

            <hr />
            <h2>FTP - TLS/SSL</h2>
            <h3>openssl s_client -connect 10.129.14.136:21 -starttls ftp</h3>

            <hr />
            <h2>Anonimowe logowanie</h2>
            <ExampleFrame screen={ftp_anonymous} />

            <hr />
            <h2>Brute foce</h2>

            <div className='waring'>
                <p>medusa -u fiona -P /usr/share/wordlists/rockyou.txt -h 10.129.203.7 -M ftp </p>
            </div>

            <hr />
            <h2>Atak odbijający FTP</h2>

            <ExampleFrame screen={ftp_bounce} />
            <p>Skanowanie infrastruktury poprzez host</p>

            <div className='waring'>
                <p>nmap -Pn -v -n -p80 -b anonymous:password@10.10.110.213 172.17.0.2</p>
            </div>
        </section>
    )
}

export default FTP;