import dns_diagram from '../../assets/dns_diagram.png';
import ExampleFrame from '../exampleFrame/ExampleFrame';

const DNS = () =>{
    return(
        <section>
            <h1>DNS</h1>
            <p>DNS to system przekształcania nazw komputerów na adresy IP i nie posiada centralnej bazy danych</p>

            <table class="table table-striped text-left">
                <thead>
                    <tr>
                    <th><strong>Typ serwera</strong></th>
                    <th><strong>Opis</strong></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td><code>DNS Root Server</code></td>
                    <td>Serwery główne DNS odpowiadają za domeny najwyższego poziomu (<code>TLD</code>). Jako ostatnia instancja są one żądane tylko wtedy, gdy serwer nazw nie odpowiada. Zatem serwer główny jest centralnym interfejsem między użytkownikami a treściami w Internecie, ponieważ łączy domenę i adres IP. <a href="https://www.icann.org/" target="_blank" rel="noopener nofollow">Internetowa Korporacja ds. Nadawanych Nazw i Numerów</a> (<code>ICANN</code>) koordynuje pracę głównych serwerów nazw. Na całym świecie istnieje <code>13</code> takich serwerów głównych.</td>
                    </tr>
                    <tr>
                    <td><code>Authoritative Nameserver</code></td>
                    <td>Autorytatywne serwery nazw posiadają uprawnienia dla określonej strefy. Odpowiadają wyłącznie na zapytania z zakresu swojej odpowiedzialności, a zawarte w nich informacje są wiążące. Jeśli autorytatywny serwer nazw nie może odpowiedzieć na zapytanie klienta, w tym momencie jego rolę przejmuje główny serwer nazw.</td>
                    </tr>
                    <tr>
                    <td><code>Non-authoritative Nameserver</code></td>
                    <td>Nieautorytatywne serwery nazw nie są odpowiedzialne za konkretną strefę DNS. Zamiast tego same zbierają informacje o określonych strefach DNS, co odbywa się za pomocą rekursywnych lub iteracyjnych zapytań DNS.</td>
                    </tr>
                    <tr>
                    <td><code>Caching DNS Server</code></td>
                    <td>Buforowanie serwerów DNS buforuje informacje z innych serwerów nazw przez określony czas. Autorytatywny serwer nazw określa czas trwania tego przechowywania.</td>
                    </tr>
                    <tr>
                    <td><code>Forwarding Server</code></td>
                    <td>Serwery przekazujące spełniają tylko jedną funkcję: przekazują zapytania DNS do innego serwera DNS.</td>
                    </tr>
                    <tr>
                    <td><code>Resolver</code></td>
                    <td>Mechanizmy rozpoznawania nazw nie są autorytatywnymi serwerami DNS, ale wykonują rozpoznawanie nazw lokalnie w komputerze lub routerze.</td>
                    </tr>
                </tbody>
            </table>

            <ExampleFrame screen={dns_diagram} />


            <hr />
            <h2 className='waring'>Niebezpiecznie ustawienia</h2>

            <table class="table table-striped text-left">
                <thead>
                    <tr>
                    <th><strong>Opcja</strong></th>
                    <th><strong>Opis</strong></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td><code>allow-query</code></td>
                    <td>Określa, które hosty mogą wysyłać żądania do serwera DNS.</td>
                    </tr>
                    <tr>
                    <td><code>allow-recursion</code></td>
                    <td>Określa, które hosty mogą wysyłać żądania rekurencyjne do serwera DNS.</td>
                    </tr>
                    <tr>
                    <td><code>allow-transfer</code></td>
                    <td>Określa, które hosty mogą odbierać transfery stref z serwera DNS.</td>
                    </tr>
                    <tr>
                    <td><code>zone-statistics</code></td>
                    <td>Gromadzi dane statystyczne stref.</td>
                    </tr>
                </tbody>
            </table>

            <div className='waring'>
                <p>Subdomain Brute Forcing</p>
                <br />
                <p><span className='important'>for sub in $(cat /opt/useful/SecLists/Discovery/DNS/subdomains-top1million-110000.txt);do dig $sub.inlanefreight.htb @10.129.14.128 | grep -v ';\|SOA' | sed -r '/^\s*$/d' | grep $sub | tee -a subdomains.txt;done</span></p>
            </div>
        </section>
    )
}

export default DNS;