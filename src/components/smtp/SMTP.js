import smtp from '../../assets/smtp.png';
import ExampleFrame from '../exampleFrame/ExampleFrame';

const SMTP = () =>{
    return(
        <section>
            <h1>SMTP</h1>
            <p>Simple Mail Transfer Protocol (SMTP) to protokół służący do wysyłania wiadomości e-mail w sieci IP. Można go używać pomiędzy klientem poczty e-mail a serwerem poczty wychodzącej lub pomiędzy dwoma serwerami SMTP. SMTP jest <span className="important">często łączony z protokołami IMAP lub POP3</span>, które umożliwiają pobieranie i wysyłanie wiadomości e-mail. </p>
            <ExampleFrame screen={smtp} />

            <hr />
            <h2>Domyślne ustawienia</h2>

            <div className='waring'>
                <p>cat /etc/postfix/main.cf | grep -v "#" | sed -r "/^\s*$/d"</p>
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
                    <td><code>AUTH PLAIN</code></td>
                    <td>AUTH to rozszerzenie usługi używane do uwierzytelniania klienta.</td>
                    </tr>
                    <tr>
                    <td><code>HELO</code></td>
                    <td>Klient loguje się podając swoją nazwę komputera i tym samym rozpoczyna sesję.</td>
                    </tr>
                    <tr>
                    <td><code>MAIL FROM</code></td>
                    <td>Klient wskazuje nadawcę wiadomości e-mail.</td>
                    </tr>
                    <tr>
                    <td><code>RCPT TO</code></td>
                    <td>Klient wyznacza odbiorcę wiadomości e-mail.</td>
                    </tr>
                    <tr>
                    <td><code>DATA</code></td>
                    <td>Klient inicjuje transmisję wiadomości e-mail.</td>
                    </tr>
                    <tr>
                    <td><code>RSET</code></td>
                    <td>Klient przerywa rozpoczętą transmisję, ale utrzymuje połączenie między klientem a serwerem.</td>
                    </tr>
                    <tr>
                    <td><code>VRFY</code></td>
                    <td>Klient sprawdza, czy skrzynka pocztowa jest dostępna do przesłania wiadomości.</td>
                    </tr>
                    <tr>
                    <td><code>EXPN</code></td>
                    <td>Za pomocą tego polecenia klient sprawdza również, czy skrzynka pocztowa jest dostępna do przesyłania wiadomości.</td>
                    </tr>
                    <tr>
                    <td><code>NOOP</code></td>
                    <td>Klient żąda odpowiedzi od serwera, aby zapobiec rozłączeniu z powodu przekroczenia limitu czasu.</td>
                    </tr>
                    <tr>
                    <td><code>QUIT</code></td>
                    <td>Klient kończy sesję.</td>
                    </tr>
                </tbody>
            </table>
            
            <div className='waring'>
                <p><span className='important'>połączenie z pocztą</span></p>
                <p>telnet 10.129.14.128 25</p>
            </div>

        </section>
    )
}

export default SMTP