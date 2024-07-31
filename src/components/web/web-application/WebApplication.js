import { Link } from 'react-router-dom';
import './web-application.scss';

const WebApplication = () => {

    return(
        <section>
            <h1>Web Application</h1>

            <h2>URL Encoding</h2>
            <table>
                <thead>
                  <tr>
                        <th>Znak</th>
                        <th>Encoding</th>
                   </tr>
                </thead>
                <tbody>
                    <tr>
                       <td>space</td>
                        <td>%20</td>
                    </tr>
                    <tr>
                        <td>!</td>
                        <td>%21</td>
                   </tr>
                    <tr>
                        <td>"</td>
                         <td>%22</td>
                    </tr>
                    <tr>
                        <td>#</td>
                       <td>%23</td>
                    </tr>
                    <tr>
                        <td>$</td>
                        <td>%24</td>
                    </tr>
                    <tr>
                        <td>%</td>
                        <td>%25</td>
                    </tr>
                    <tr>
                        <td>&</td>
                        <td>%26</td>
                    </tr>
                    <tr>
                        <td>'</td>
                        <td>%27</td>
                    </tr>
                    <tr>
                        <td>(</td>
                        <td>%28</td>
                    </tr>
                    <tr>
                        <td>)</td>
                        <td>%29</td>
                    </tr>
                </tbody>
            </table>

            <h2>Backend Servers</h2>
            <table class="table table-striped text-left">
                <thead>
                <tr>
                    <th>Combinations</th>
                    <th>Components</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>LAMP</td>
                    <td>Linux, Apache, MySQL i PHP</td>
                </tr>
                <tr>
                    <td>WAMP</td>
                    <td>Windows, Apache, MySQL i PHP</td>
                </tr>
                <tr>
                    <td>WINS</td>
                    <td>Windows, IIS, .NET i SQL Server</td>
                </tr>
                <tr>
                    <td>MAMP</td>
                    <td>macOS, Apache, MySQL i PHP</td>
                </tr>
                <tr>
                    <td>XAMPP</td>
                    <td>Cross-Platform, Apache, MySQL i PHP/PERL</td>
                </tr>
                </tbody>
            </table>

            <div className='waring'>
                <p>Uwaga: Do odczytania konfiguracji serwera, takiej jak konfiguracja <span className='important'>Apache znaleziona w /etc/apache2/apache2.conf</span>, konfiguracja <span className='important'>Nginx w /etc/nginx/nginx.conf lub konfiguracja IIS w %WinDir%\System32 \Inetsrv\Config\ApplicationHost.config</span> lub możemy wyszukać w Internecie inne możliwe lokalizacje konfiguracji. Co więcej, możemy uruchomić skanowanie rozmyte i spróbować zapisać pliki w różnych możliwych katalogach głównych sieci, używając tej <Link to='https://github.com/FilipowiczP/SecLists/blob/master/Discovery/Web-Content/default-web-root-directory-linux.txt'>listy słów dla Linuksa</Link> lub tej <Link to='https://github.com/FilipowiczP/SecLists/blob/master/Discovery/Web-Content/default-web-root-directory-windows.txt'>listy słów dla Windows</Link>. Wreszcie, jeśli żadne z powyższych nie zadziała, możemy wykorzystać wyświetlane nam błędy serwera i spróbować w ten sposób znaleźć katalog internetowy.</p>
            </div>
         </section>
    )
};

export default WebApplication;