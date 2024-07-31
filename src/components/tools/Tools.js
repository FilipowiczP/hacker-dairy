import './tools.scss';
import { Link } from 'react-router-dom';

const Tools = () => {

    return(
        <section className='tools'>
            <h1>Tools list repos</h1>
            <Link to='https://github.com/FilipowiczP/SecLists'>SecLists - Word listy.</Link>
            <Link to='https://github.com/FilipowiczP/dnsenum'>dnsenum - Kompleksowe narzędzie do wyliczania DNS, które obsługuje ataki słownikowe i brute-force w celu wykrycia subdomen.</Link>
            <Link to='https://github.com/FilipowiczP/gobuster'>gobuster - Wielozadaniowe narzędzie często używane do brutalnego wymuszania katalogów/plików, ale także skuteczne do wykrywania hostów wirtualnych.</Link>
            
            <h2>JavaScrip open source tools</h2>
            <ul>
                <li>
                    <Link to='https://jsconsole.com'>Jsconsole</Link>
                </li>
                <li>
                    <Link to='https://www.toptal.com/developers/javascript-minifier'>Javascript minifier</Link>
                </li>
                <li>
                    <Link to='https://beautifytools.com/javascript-obfuscator.php'>Javascript obfuscator</Link>
                </li>
                <li>
                    <Link to='https://obfuscator.io'>Javascript obfuscator</Link>
                </li>
                <li>
                    <Link to='https://prettier.io/playground/'>Javascript prettier</Link>
                </li>
                <li>
                    <Link to='https://beautifier.io'>Javascript beautifier</Link>
                </li>
                <li>
                    <Link to='https://matthewfl.com/unPacker.html'>Javascript unpacker</Link>
                </li>
            </ul>
            
            <Link to='https://github.com/FilipowiczP/XSStrike'>XSStrike - Narzędzie do wykrywania podatnych pól do XSS.</Link>
            <Link to='https://github.com/FilipowiczP/PayloadsAllTheThings'>PayloadsAllTheThings - Wszyskie możliwe wstrzyknięcia</Link>
            <Link to='https://github.com/FilipowiczP/PayloadsAllTheThings/tree/master/SQL%20Injection'>SQL Injections - Wszyskie możliwe wstrzyknięcia</Link>
            <Link to='https://github.com/FilipowiczP/PayloadsAllTheThings/tree/master/XSS%20Injection'>Xss - Wszyskie możliwe wstrzyknięcia</Link>
            
            
            
            
            
        </section>
    )
};

export default Tools;