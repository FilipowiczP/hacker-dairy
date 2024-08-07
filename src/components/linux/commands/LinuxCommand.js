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
        </section>
    )
};

export default LinuxCommands;