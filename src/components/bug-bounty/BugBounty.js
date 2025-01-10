import { Link } from "react-router-dom";

const BugBounty = () => {
    return (
        <section>
            <h1>BugBounty</h1>
            
            <details>
                <summary>Tools</summary>
                <table>
                    <thead>
                        <tr>
                        <th>Narzędzie</th>
                        </tr>
                    </thead>
                    <tbody className='description'>
                        <tr>
                            <td><Link to="https://www.first.org/cvss/calculator/4.0#CVSS:4.0/AV:P/AC:H/AT:P/PR:L/UI:P/VC:L/VI:L/VA:H/SC:N/SI:N/SA:N">CVSS</Link></td>
                        </tr>
                        <tr>
                            <td><Link to="https://github.com/FilipowiczP/bug-bounty-sh">script</Link></td>
                        </tr>
                        <tr>
                            <td><Link to="https://crt.sh">crt.sh subdomains</Link></td>
                        </tr>
                        <tr>
                            <td><Link to="https://securityheaders.com">securityheaders scan headers</Link></td>
                        </tr>
                        <tr>
                            <td><Link to="https://github.com/FilipowiczP/assetfinder">assetfinder</Link></td>
                        </tr>
                        <tr>
                            <td><Link to="https://github.com/FilipowiczP/amass">amass</Link></td>
                        </tr>
                    </tbody>
                </table>
            </details>

            <hr />

            <details>
                <summary>Kroki</summary>
                <ol>
                    <li>Target</li>
                    <li>Łapanie subdomains - subfinder, assetfinder, amass</li>
                    <li>Łapanie alive subdomains - httprobe</li>
                    <li>Pozbycie się duplikatów - Sortowanie i unique</li>
                    <li>Screeny alived subdomains - gowitness</li>
                    <li>nmap alived subdomains</li>
                </ol>
            </details>

            <hr />

            <h2>Subdomains gathering</h2>
            <details>
                <summary>Assetfinder</summary>
                <table>
                    <thead>
                        <tr>
                        <th>Komenda</th>
                        <th>Opis</th>
                        </tr>
                    </thead>
                    <tbody className='description'>
                        <tr>
                            <td>assetfinder {'<Domena>'}</td>
                            <td>Wyciąganie wszystkie subdomeny (oraz zdjęcia i pliki na nich!)</td>
                        </tr>
                        <tr>
                            <td>assetfinder --subs-only {'<Domena>'}</td>
                            <td>Wyciąganie wszystkie subdomeny</td>
                        </tr>
                    </tbody>
                </table>
            </details>

            <details>
                <summary>Amass</summary>
                <table>
                    <thead>
                        <tr>
                        <th>Komenda</th>
                        <th>Opis</th>
                        </tr>
                    </thead>
                    <tbody className='description'>
                        <tr>
                            <td>amass enum -d {'<Domena>'}</td>
                            <td>Wyciąganie wszystkie subdomeny</td>
                        </tr>
                    </tbody>
                </table>
            </details>

            <hr />
            <h2>Finding Alive Domains</h2>


            <details>
                <summary>Httprobe</summary>
                <table>
                    <thead>
                        <tr>
                        <th>Komenda</th>
                        <th>Opis</th>
                        </tr>
                    </thead>
                    <tbody className='description'>
                        <tr>
                            <td>cat {'<File with subdomains>'} | httprobe </td>
                            <td>Subdomeny odpowiadające</td>
                        </tr>
                        <tr>
                            <td>cat {'<File with subdomains>'} | httprobe -s -p https:443 | sed 's/https\?:\/\///' | tr -d ':443'</td>
                            <td>Subdomeny odpowiadające na porcie 443 oraz czyszczenie odpowiedzi</td>
                        </tr>
                    </tbody>
                </table>
            </details>

        </section>
    )
}

export default BugBounty;