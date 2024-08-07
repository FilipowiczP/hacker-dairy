import { Link } from 'react-router-dom';

const CommandInjection = () => {

    return(
        <section>
            <h1>Commands Injection</h1>
            <h2 className='defense'>Zapobieganie Commands Injection</h2>
            <ul>
                <li className='defense'>
                    Input Validation
                    <br />
                    Sprawdzanie poprawności danych wejściowych powinno odbywać się zarówno po stronie frontend, jak i backend. W PHP, podobnie jak w wielu innych językach tworzenia stron internetowych, wbudowane są filtry dla różnych standardowych formatów, takich jak e-maile, adresy URL, a nawet adresy IP, których można używać z funkcją filter_var
                    Jeśli chcielibyśmy sprawdzić inny niestandardowy format, możemy użyć wyrażenia regularnego z funkcją preg_match. To samo można osiągnąć za pomocą JavaScript zarówno dla front-endu, jak i backendu. Podobnie jak PHP, w NodeJS, możemy również używać bibliotek do sprawdzania poprawności różnych standardowych formatów, jak na przykład is-ip, który możemy zainstalować za pomocą npm, a następnie użyć funkcji isIp(ip) w naszym kodzie. Możesz przeczytać podręczniki innych języków, np. .NET lub Java, aby dowiedzieć się, jak sprawdzić poprawność danych wprowadzanych przez użytkownika w każdym odpowiednim języku.
                </li>
                <li className='defense'>
                  Input Sanitization
                  <br />
                  Możemy użyć preg_replace, aby usunąć wszelkie znaki specjalne z danych wprowadzonych przez użytkownika.
                </li>
                <li className='defense'>
                    Server Configuration
                    <br />
                    Na koniec powinniśmy upewnić się, że nasz serwer zaplecza jest bezpiecznie skonfigurowany, aby zmniejszyć wpływ w przypadku naruszenia bezpieczeństwa serwera WWW. Niektóre konfiguracje, które możemy wdrożyć, to:
                    <ol className='defense'>
                        <li>Użyj wbudowanej zapory aplikacji internetowej serwera WWW (np. w Apache mod_security) oprócz zewnętrznego WAF (np. Cloudflare, Fortinet, Imperva..)</li>
                        <li>Przestrzegaj zasady najniższych uprawnień (PoLP), uruchamiając serwer WWW jako użytkownik o niskich uprawnieniach (np. www-data)</li>
                        <li>Zapobiegaj wykonywaniu niektórych funkcji przez serwer WWW (np. w PHP Disable_functions=system,...)</li>
                        <li>Ogranicz zakres dostępny dla aplikacji internetowej do jej folderu (np. w PHP open_basedir = '/var/www/html')</li>
                        <li>Odrzucaj podwójnie zakodowane żądania i znaki spoza zestawu ASCII w adresach URL</li>
                        <li>Unikaj używania wrażliwych/nieaktualnych bibliotek i modułów (np. PHP CGI)</li>
                    </ol>
                </li>
            </ul>
        </section>
    )
};

export default CommandInjection;