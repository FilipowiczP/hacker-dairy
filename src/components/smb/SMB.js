import smb from '../../assets/smb.png';
import smb_impacket from '../../assets/smb_impacket.png';
import ExampleFrame from '../exampleFrame/ExampleFrame';

const SMB = () => {
    return(
        <section>
            <h1>SMB</h1>
            <p>Server Message Block (SMB) to protokół klient-serwer, który reguluje dostęp do plików i całych katalogów oraz innych zasobów sieciowych, takich jak drukarki, routery lub interfejsy udostępnione dla sieci. Wymiana informacji pomiędzy różnymi procesami systemowymi może być również obsługiwana w oparciu o protokół SMB.</p>
            <p>cat <span className="important">/etc/samba/smb.conf</span> | grep -v "#\|\;" </p>

            <table>
                <thead>
                    <tr>
                    <th><strong>Ustawienie</strong></th>
                    <th><strong>Opis</strong></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td><code>[sharename]</code></td>
                    <td>Nazwa udziału sieciowego.</td>
                    </tr>
                    <tr>
                    <td><code>workgroup = WORKGROUP/DOMAIN</code></td>
                    <td>Grupa robocza, która pojawi się, gdy klienci zapytają.</td>
                    </tr>
                    <tr>
                    <td><code>path = /path/here/</code></td>
                    <td>Katalog, do którego użytkownik ma mieć dostęp.</td>
                    </tr>
                    <tr>
                    <td><code>server string = STRING</code></td>
                    <td>Ciąg znaków, który pojawi się po zainicjowaniu połączenia.</td>
                    </tr>
                    <tr>
                    <td><code>unix password sync = yes</code></td>
                    <td>Zsynchronizuj hasło UNIX z hasłem SMB</td>
                    </tr>
                    <tr>
                    <td><code>usershare allow guests = yes</code></td>
                    <td>Zezwolić nieuwierzytelnionym użytkownikom na dostęp do określonego udziału</td>
                    </tr>
                    <tr>
                    <td><code>map to guest = bad user</code></td>
                    <td>Co zrobić, gdy żądanie logowania użytkownika nie pasuje do prawidłowego użytkownika UNIX</td>
                    </tr>
                    <tr>
                    <td><code>browseable = yes</code></td>
                    <td>Czy akcja ta powinna być wykazana na liście dostępnych akcji</td>
                    </tr>
                    <tr>
                    <td><code>guest ok = yes</code></td>
                    <td>Zezwolić na połączenie z usługą bez użycia hasła</td>
                    </tr>
                    <tr>
                    <td><code>read only = yes</code></td>
                    <td>Zezwolić użytkownikom tylko na odczyt plików</td>
                    </tr>
                    <tr>
                    <td><code>create mask = 0700</code></td>
                    <td>Jakie uprawnienia należy ustawić dla nowo utworzonych plików</td>
                    </tr>
                </tbody>
            </table>

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
                    <td><code>browseable = yes</code></td>
                    <td>Zezwolić na wyświetlanie dostępnych akcji w bieżącym udziale</td>
                    </tr>
                    <tr>
                    <td><code>read only = no</code></td>
                    <td>Zabronić tworzenia i modyfikowania plików</td>
                    </tr>
                    <tr>
                    <td><code>writable = yes</code></td>
                    <td>Zezwolić użytkownikom na tworzenie i modyfikowanie plików</td>
                    </tr>
                    <tr>
                    <td><code>guest ok = yes</code></td>
                    <td>Zezwól na połączenie z usługą bez użycia hasła</td>
                    </tr>
                    <tr>
                    <td><code>enable privileges = yes</code></td>
                    <td>Honorować przywileje przypisane do konkretnego identyfikatora SID</td>
                    </tr>
                    <tr>
                    <td><code>create mask = 0777</code></td>
                    <td>Jakie uprawnienia należy nadać nowo utworzonym plikom</td>
                    </tr>
                    <tr>
                    <td><code>directory mask = 0777</code></td>
                    <td>Jakie uprawnienia należy nadać nowo utworzonym katalogom</td>
                    </tr>
                    <tr>
                    <td><code>logon script = script.sh</code></td>
                    <td>Jaki skrypt należy wykonać przy logowaniu użytkownika</td>
                    </tr>
                    <tr>
                    <td><code>magic script = script.sh</code></td>
                    <td>Który skrypt powinien zostać wykonany po zamknięciu skryptu</td>
                    </tr>
                    <tr>
                    <td><code>magic output = script.out</code></td>
                    <td>Gdzie należy przechowywać dane wyjściowe magicznego skryptu</td>
                    </tr>
                </tbody>
            </table>

            <p>Teraz możemy <span className="important">wyświetlić listę (-L) udziałów serwera</span> za pomocą polecenia smbclient z naszego hosta. Stosujemy tzw. <span className="important">sesję zerową (-N), która oznacza anonimowy</span> dostęp bez konieczności wprowadzania danych przez istniejących użytkowników lub ważnych haseł.</p>

            <div className="waring">
                <p>smbclient -N -L //10.129.14.128</p>
            </div>

            <div className="waring">
                <p>rpcclient -U "" 10.129.14.128</p>
            </div>

            <table class="table table-striped text-left">
                <thead>
                    <tr>
                    <th><strong>Zapytanie</strong></th>
                    <th><strong>Opis</strong></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td><code>srvinfo</code></td>
                    <td>Informacje o serwerze</td>
                    </tr>
                    <tr>
                    <td><code>enumdomains</code></td>
                    <td>Wylicz wszystkie domeny wdrożone w sieci.</td>
                    </tr>
                    <tr>
                    <td><code>querydominfo</code></td>
                    <td>Zawiera informacje o domenie, serwerze i użytkowniku wdrożonych domen.</td>
                    </tr>
                    <tr>
                    <td><code>netshareenumall</code></td>
                    <td>Wylicza wszystkie dostępne udziały.</td>
                    </tr>
                    <tr>
                    <td><code>netsharegetinfo &lt;share&gt;</code></td>
                    <td>Zawiera informacje o konkretnym udziale.</td>
                    </tr>
                    <tr>
                    <td><code>enumdomusers</code></td>
                    <td>Wylicza wszystkich użytkowników domeny.</td>
                    </tr>
                    <tr>
                    <td><code>queryuser &lt;RID&gt;</code></td>
                    <td>Zawiera informacje o konkretnym użytkowniku.</td>
                    </tr>
                </tbody>
            </table>

            <ExampleFrame screen={smb} />

            <hr />
            <h2>Brute force User RID</h2>

            <div className='waring'>
                <p>for i in $(seq 500 1100);do rpcclient -N -U "" 10.129.14.128 -c "queryuser 0x$(printf '%x\n' $i)" | grep "User Name\|user_rid\|group_rid" && echo "";done</p>
            </div>
            <div className='waring'>
                <p>crackmapexec smb 10.129.14.128 --shares -u '' -p ''</p>
            </div>

        </section>
    )
}

export default SMB;