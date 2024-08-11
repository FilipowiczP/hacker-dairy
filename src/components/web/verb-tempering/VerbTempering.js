import verb_tempering from '../../../assets/verb_tempering.png';
import verb_tempering_option from '../../../assets/verb_tempering_option.png';
import verb_tempering_get from '../../../assets/verb_tempering_get.png';
import verb_tempering_post from '../../../assets/verb_tempering_post.png';
import verb_tempering_insecure_configuration from '../../../assets/verb_tempering_insecure_configuration.png';
import verb_tempering_insecure_configuration_tomcat from '../../../assets/verb_tempering_insecure_configuration_tomcat.png';
import verb_tempering_insecure_configuration_aspnet from '../../../assets/verb_tempering_insecure_configuration_aspnet.png';
import ExampleFrame from '../../exampleFrame/ExampleFrame';


const VerbTampering = () => {

    return(
        <section>
            <h1>Verb Tampering</h1>

            <h2>Pierwszy typ luki związany z manipulacją czasownikiem HTTP jest spowodowany głównie niezabezpieczoną konfiguracją serwera internetowego i wykorzystanie tej luki może pozwolić nam na ominięcie monitu o podstawowe uwierzytelnienie HTTP na niektórych stronach.</h2>

            <p>Aby to zrobić, musimy określić, które strony są ograniczone przez to uwierzytelnienie. Jeśli sprawdzimy żądanie HTTP po kliknięciu przycisku Resetuj lub spojrzymy na adres URL, do którego prowadzi przycisk po kliknięciu, zobaczymy, że znajduje się on pod adresem <span className='important'>/admin/reset.php</span>. Zatem albo katalog <span className='important'>/admin</span> jest ograniczony tylko do uwierzytelnionych użytkowników, albo tylko strona <span className='important'>/admin/reset.php</span>. Możemy to potwierdzić, odwiedzając katalog <span className='important'>/admin</span> i rzeczywiście pojawia się monit o ponowne zalogowanie. Oznacza to, że <span className='important'>pełny katalog /admin</span> jest ograniczony.</p>

            <ExampleFrame screen={verb_tempering} />

            <p>Ponieważ strona korzysta z żądania <span className='important'>GET</span>, możemy wysłać żądanie <span className='important'>POST</span> i sprawdzić, czy strona internetowa zezwala na żądania <span className='important'>POST </span> (tj. czy uwierzytelnianie obejmuje żądania POST). Aby to zrobić, możemy kliknąć prawym przyciskiem myszy przechwycone żądanie w Burp i wybrać <span className='important'>Change Request Method</span>, co automatycznie zmieni żądanie w żądanie POST:</p>

            <p>Możemy wykorzystać wiele innych metod HTTP, w szczególności metodę <span className='important'>HEAD</span>, która jest identyczna z żądaniem <span className='important'>GET</span>, ale nie zwraca treści odpowiedzi HTTP. Jeśli to się powiedzie, możemy nie otrzymać żadnych danych wyjściowych, ale funkcja resetowania powinna mimo to zostać wykonana, co jest naszym głównym celem. Aby sprawdzić, czy serwer akceptuje żądania <span className='important'>HEAD</span>, możemy wysłać do niego żądanie <span className='important'>OPTIONS</span> i sprawdzić, jakie metody HTTP są akceptowane, w następujący sposób:</p>
            <div className='waring'>
                <p>curl -i -X OPTIONS http://SERVER_IP:PORT/</p>
            </div>
            <ExampleFrame screen={verb_tempering_option} />
        
            <hr />
            <h2>Bypassing Security Filters</h2>

            <p>W przypadku gdy aplikacja blokuję metodę <span className='important'>GET</span>, możemy ją zamienić na <span className='important'>POST</span></p>

            <div className='waring'>
                <p>UWAGA: Pamiętać że przy metodzie <span className='important'>GET</span> i <span className='important'>POST</span> przekazane parametry są inaczj zapisane</p>
            </div>

            <ExampleFrame screen={verb_tempering_get} />
            <ExampleFrame screen={verb_tempering_post} />

            <hr />

            <h2 className='defense'>Zapobieganie Verb Tampering</h2>

            <h3 className='defense'>Niebezpieczna konfiguracja</h3>

            <p className='defense'>Luki w zabezpieczeniach związane z manipulacją czasownikami HTTP mogą występować w większości nowoczesnych serwerów internetowych, w tym <span className='important'>Apache, Tomcat i ASP.NET</span>. Luka zwykle pojawia się, gdy ograniczamy autoryzację strony do określonego zestawu czasowników/metod HTTP, co pozostawia pozostałe metody bez ochrony. Poniżej znajduje się przykład konfiguracji podatnej na ataki serwera WWW Apache, która znajduje się w pliku konfiguracyjnym witryny (np. <span className='important'>000-default.conf</span>) lub w pliku konfiguracyjnym strony internetowej <span className='important'>htaccess</span>:</p>
            <ExampleFrame screen={verb_tempering_insecure_configuration} />
            <p className='defense'>Poniższy przykład ilustruje tę samą lukę w konfiguracji serwera WWW <span className='important'>Tomcat</span>, którą można znaleźć w pliku <span className='important'>web.xml</span> określonej aplikacji internetowej Java:</p>
            <ExampleFrame screen={verb_tempering_insecure_configuration_tomcat} />
            <p className='defense'>Na koniec poniżej przedstawiono przykład konfiguracji <span className='important'>ASP.NET</span> znalezionej w pliku <span className='important'>web.config</span> aplikacji internetowej:</p>
            <ExampleFrame screen={verb_tempering_insecure_configuration_aspnet} />
            <p className='defense'>aby uniknąć podobnych ataków, powinniśmy ogólnie rozważyć wyłączenie/odrzucenie wszystkich żądań <span className='important'>HEAD</span>, chyba że jest to wyraźnie wymagane przez aplikację internetową.</p>
        
            <hr />
            <h3 className='defense'>Niepewne kodowanie</h3>
            <p className='defense'>Aby uniknąć luk w zabezpieczeniach związanych z manipulacją czasownikami HTTP w naszym kodzie, musimy zachować spójność w korzystaniu z metod HTTP i upewnić się, że ta sama metoda jest zawsze używana w przypadku określonych funkcji aplikacji internetowej. Zawsze zaleca się rozszerzenie zakresu testów filtrów bezpieczeństwa o przetestowanie wszystkich parametrów żądania. Można to zrobić za pomocą następujących funkcji i zmiennych:</p>
        </section>
    )
};

export default VerbTampering;