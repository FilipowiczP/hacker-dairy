import './tools.scss';
import tool_bashfuscator from '../../assets/tool_bashfuscator.png';
import tool_dosfuscation from '../../assets/tool_dosfuscation.png';
import sstimap from '../../assets/sstimap.png';
import sstimap_functions from '../../assets/sstimap_functions.png';
import password_SAM from '../../assets/password_SAM.png';
import authentication_rsa_sign2n from '../../assets/authentication_rsa_sign2n.png';
import { Link } from 'react-router-dom';
import ExampleFrame from '../exampleFrame/ExampleFrame';
import shell from '../../assets/shell.png';

const Tools = () => {

    return(
        <section className='tools'>
            <h1>Tools list repos</h1>

            <Link to='https://book.hacktricks.xyz'>hacktricks</Link>
            <Link to='https://portswigger.net/web-security/cross-site-scripting/cheat-sheet'>XSS cheat sheet</Link>
            <Link to='https://www.revshells.com'>Reverse shell web</Link>
            <Link to='https://webhook.site/#!/view/9c66c930-0809-483f-a428-4d6a416d3940'>Weebhooks</Link>

            <hr />

            <Link to='https://github.com/FilipowiczP/SecLists'>SecLists - Word listy.</Link>
            <Link to='https://github.com/FilipowiczP/dirsearch'>dirsearch - Kompleksowe narzędzie do wyliczania folderów na stronie.</Link>
            <Link to='https://github.com/FilipowiczP/dnsenum'>dnsenum - Kompleksowe narzędzie do wyliczania DNS, które obsługuje ataki słownikowe i brute-force w celu wykrycia subdomen.</Link>
            <Link to='https://github.com/FilipowiczP/gobuster'>gobuster - Wielozadaniowe narzędzie często używane do brutalnego wymuszania katalogów/plików, ale także skuteczne do wykrywania hostów wirtualnych.</Link>
            
            <hr />

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
            
            <hr />

            <Link to='https://github.com/FilipowiczP/XSStrike'>XSStrike - Narzędzie do wykrywania podatnych pól do XSS.</Link>
            <Link to='https://github.com/FilipowiczP/PayloadsAllTheThings'>PayloadsAllTheThings - Wszyskie możliwe wstrzyknięcia</Link>
            <Link to='https://github.com/FilipowiczP/PayloadsAllTheThings/tree/master/SQL%20Injection'>SQL Injections - Wszyskie możliwe wstrzyknięcia</Link>
            <Link to='https://github.com/FilipowiczP/PayloadsAllTheThings/tree/master/XSS%20Injection'>Xss - Wszyskie możliwe wstrzyknięcia</Link>
            <Link to='https://github.com/FilipowiczP/PayloadsAllTheThings/tree/master/Command%20Injection#filter-bypasses'>Wszyskie możliwe ominięcia wstrzyknięcia komend</Link>
            
            <hr />
            
            <Link to='https://github.com/FilipowiczP/bashfuscator'>Narzędzie automatyzujące komendy do wstrzyknięcia</Link>
            <div className='waring'>
                <p>git clone https://github.com/FilipowiczP/bashfuscator</p>
                <p>cd Bashfuscator</p>
                <p>pip3 install setuptools==65</p>
                <p>python3 setup.py install --user</p>
                <p>cd ./bashfuscator/bin/</p>
                <p>./bashfuscator -h</p>
            </div>

            <ExampleFrame screen={tool_bashfuscator} />
            
            <hr />

            <h3>Windows (DOSfuscation)</h3>
            <Link to='https://github.com/FilipowiczP/Invoke-DOSfuscation'>Narzędzie automatyzujące komendy do wstrzyknięcia Windows</Link>
            <div className='waring'>
                <p>git clone https://github.com/FilipowiczP/Invoke-DOSfuscation</p>
                <p>cd Invoke-DOSfuscation</p>
                <p>Import-Module .\Invoke-DOSfuscation.psd1</p>
                <p>Invoke-DOSfuscation</p>
                <p>SET COMMAND type <span className='important'>C:\Users\htb-student\Desktop\flag.txt</span></p>
                <p>encoding</p>
                <p>1</p>
            </div>

            <ExampleFrame screen={tool_dosfuscation} />

            <hr />

            <Link to='https://github.com/FilipowiczP/phpbash'>Plik .php do webowego shella</Link>
            <Link to='https://github.com/FilipowiczP/PayloadsAllTheThings/blob/master/Upload%20Insecure%20Files/Extension%20PHP/extensions.lst'>Lista rozszerzeń PHP</Link>
            <Link to='https://github.com/FilipowiczP/SecLists/blob/master/Discovery/Web-Content/web-extensions.txt'>Ogólna lista rozszerzeń</Link>
            <Link to='https://github.com/FilipowiczP/SecLists/blob/master/Miscellaneous/Web/content-type.txt'>Lista content-types</Link>
            <h3>Magic byte (MIME-Type)</h3>
            <Link to='https://en.wikipedia.org/wiki/List_of_file_signatures'>Podpisy plików (Magiczny byte)</Link>
            <Link to='https://opensource.apple.com/source/file/file-23/file/magic/magic.mime'>Magiczny byte</Link>

            <hr />

            <Link to='https://github.com/FilipowiczP/Gopherus'>Gopherus - generate Gopher payload</Link>

            <hr />

            <Link to='https://github.com/FilipowiczP/PayloadsAllTheThings/blob/master/Server%20Side%20Template%20Injection/README.md'>PayloadsAllTheThings - Server Side Template Injection</Link>
            <Link to='https://github.com/FilipowiczP/SSTImap'>SSTI - automatyczne narzędzie do wykrywania oraz wykorzystywania payload</Link>
            <div className='waring'>
                <p>git clone https://github.com/FilipowiczP/SSTImap</p>
                <p>cd SSTImap</p>
                <p>pip3 install -r requirements.txt</p>
                <p>python3 sstimap.py </p>
                <p>python3 sstimap.py -u http://SERVER_IP/index.php?name=test</p>
            </div>
            <ExampleFrame screen={sstimap} />

            <hr />
            <Link to='https://github.com/FilipowiczP/enum4linux-ng'>Enum4Linux</Link>
            <div className='waring'>
                <p>git clone https://github.com/FilipowiczP/enum4linux-ng</p>
                <p>cd enum4linux-ng</p>
                <p>pip3 install -r requirements.txt</p>
                <p>./enum4linux-ng.py 10.129.14.128 -A </p>
 
            </div>

            <hr/>
            <Link to='https://github.com/FilipowiczP/web-shells'>Web Shells</Link>
            <Link to='https://github.com/FilipowiczP/nishang/tree/master/Antak-WebShell'>Web Terminal</Link>
            <ExampleFrame screen={shell} />

            <hr />
            <Link to='https://github.com/FilipowiczP/impacket/blob/master/examples/secretsdump.py'>secretsdump</Link>
            <ExampleFrame screen={password_SAM} />

            <Link to='https://github.com/FilipowiczP/pypykatz'>Pypykatz</Link>
            <Link to='https://github.com/AlessandroZ/LaZagne/releases/'>Lazagne Windows</Link>
            <Link to='https://github.com/AlessandroZ/LaZagne'>Lazagne Linux</Link>

            <hr />
            <Link to='https://github.com/FilipowiczP/smtp-user-enum'>Smtp user enum</Link>

            <hr />
            <h2>Active directory</h2>
            <Link to='https://github.com/FilipowiczP/PowerSploit/blob/master/Recon/PowerView.ps1'>PowerView.ps1</Link>
            <Link to='https://github.com/FilipowiczP/impacket/blob/master/examples/GetUserSPNs.py'>GetUserSPNs.py</Link>
            <Link to='https://github.com/FilipowiczP/impacket/blob/master/examples/secretsdump.py'>secretsdump.py</Link>
            <Link to='https://github.com/FilipowiczP/mimikatz'>Mimikatz</Link>

            <hr />
            <h2>Chisel</h2>
            <Link to='https://github.com/FilipowiczP/chisel'>Chisel</Link>
            <div className='waring'>
                <p>cd chisel</p>
                <p>go build</p>
            </div>

            <hr />
            <h2>LinPEAS</h2>
            <Link to='https://github.com/FilipowiczP/Peas/tree/master/linPEAS'>LinPEAS</Link>

            <hr />
            <Link to='https://github.com/FilipowiczP/accesschk'>accesschk.exe</Link>
            <Link to='https://github.com/FilipowiczP/printspoofer-potato'>PrintSpoofer.exe oraz JuicyPotato.exe</Link>
            <Link to='https://github.com/FilipowiczP/enable-privilege'>Enable-Privilege.ps1</Link>
            <Link to='https://github.com/FilipowiczP/SessionGopher'>SessionGopher.ps1</Link>
            <Link to='https://github.com/FilipowiczP/PowerUp'>PowerUp.ps1</Link>
            <Link to='https://github.com/FilipowiczP/hhupd.exe'>hhupd.exe</Link>


            <hr />

            <Link to='https://github.com/FilipowiczP/username-anarchy'>username anarchy</Link>
            <Link to='https://github.com/FilipowiczP/jwt_tool'>JWT tool</Link>
            <Link to='https://github.com/FilipowiczP/rsa_sign2n'>JWT rsa_sign2n</Link>
            <div className='waring'>
                <p>git clone https://github.com/FilipowiczP/rsa_sign2n</p>
                <p>cd rsa_sign2n/standalone/</p>
                <p>docker build . -t sig2n</p>
                <p>docker run -it sig2n /bin/bash</p>
                <p>python3 jwt_forgery.py {`<Token_1>`} {`Token_2`}</p>
                <ExampleFrame screen={authentication_rsa_sign2n} />
            </div>
            
        </section>
    )
};

export default Tools;