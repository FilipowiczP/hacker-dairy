import { Link } from 'react-router-dom';
import xxe from '../../../assets/xxe.png';
import xxe_svg from '../../../assets/xxe_svg.png';
import ExampleFrame from '../../exampleFrame/ExampleFrame';

const XXE = () => {

    return(
        <section>
            <h1>XXE (XML eXternal Entity)</h1>
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

        </section>
    )
};

export default XXE;