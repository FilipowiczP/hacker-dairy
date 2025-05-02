import deserialization_01 from '../../../assets/deserialization_01.png';
import ExampleFrame from '../../exampleFrame/ExampleFrame';


const Deserialization = () =>{
    return(
        <section>
            <h1>Deserialization</h1>
            <p>Serializacja to proces konwersji złożonych struktur danych, takich jak obiekty i ich pola, do „płaskiego” formatu, który można wysyłać i odbierać jako sekwencyjny strumień bajtów. Serializacja danych znacznie ułatwia:</p>
            <ul>
                <li>Zapisywanie złożonych danych w pamięci międzyprocesowej, pliku lub bazie danych</li>
                <li>Wysyłanie złożonych danych, na przykład, przez sieć, między różnymi komponentami aplikacji lub w wywołaniu API</li>
            </ul>   
            <ExampleFrame screen={deserialization_01} />

            <hr />

            <details>
                <summary>PHP serialization format</summary>
                <div className='waring'>
                    <p>{`$user->name = "carlos";`}</p>
                    <p>{`$user->isLoggedIn = true;`}</p>
                    <br />
                    <p><span className='important'>{`O:4:"User":2:{s:4:"name":s:6:"carlos"; s:10:"isLoggedIn":b:1;}`}</span></p>
                    <br />
                    <br />
                    <p><span className='important'>O:4:"User"</span> - An object with the <span className='important'>4-character</span> class name <span className='important'>"User"</span></p>
                    <p><span className='important'>2</span> - the object has <span className='important'>2 attributes</span></p>
                    <p><span className='important'>s:4:"name"</span> - The key of the first attribute is the <span className='important'>4-character string "name"</span></p>
                    <p><span className='important'>s:6:"carlos"</span> - The value of the first attribute is the <span className='important'>6-character string "carlos"</span></p>
                    <p><span className='important'>s:10:"isLoggedIn"</span> - The key of the second attribute is the <span className='important'>10-character string</span></p>
                    <p><span className='important'>"isLoggedIn"</span></p>
                    <p><span className='important'>b:1</span> - The value of the second attribute is the boolean value <span className='important'>true</span></p>
                </div>
                <div className='waring'>
                    <p>Wartości <span className='importnat'>string</span> oznaczamy <span className='important'>s:{`<DŁUGOŚĆ STRINGA>`}</span></p>
                    <p>Wartości <span className='importnat'>boolean</span> oznaczamy <span className='important'>b:{`<TRUE (1)/ FALSE (0)>`}</span></p>
                    <p>Wartości <span className='importnat'>int</span> oznaczamy <span className='important'>i:{`<INT>`}</span></p>
                </div>

                <h2>Modifying data types</h2>
                <p>Logika oparta na PHP jest szczególnie podatna na tego typu manipulacje ze względu na zachowanie operatora luźnego porównania <span className='important'>(==)</span> podczas porównywania różnych typów danych. Na przykład, jeśli wykonasz luźne porównanie między liczbą całkowitą a ciągiem znaków, 
                <span className='important'>PHP spróbuje przekonwertować ciąg znaków na liczbę całkowitą, co oznacza, że ​​5 == "5" zostanie ocenione jako prawda</span>.Nietypowo, działa to również dla <span className='important'>dowolnego ciągu alfanumerycznego, który zaczyna się od liczby</span>. W takim przypadku PHP <span className='important'>skutecznie przekonwertuje
                     cały ciąg znaków na wartość całkowitą na podstawie początkowej liczby</span>. Reszta ciągu znaków jest całkowicie ignorowana. <span className='important'>Dlatego 5 == "5 czegoś" jest w praktyce traktowane jako 5 == 5</span>. Podobnie, <span className='important'>w PHP 7.x i wcześniejszych wersjach porównanie 0 == "Przykładowy ciąg znaków" zostanie ocenione jako prawda</span>
                     , ponieważ PHP traktuje cały ciąg znaków jako
                      liczbę całkowitą 0. <span className='important'>W PHP 8 i nowszych wersjach porównanie 0 == „Przykładowy ciąg” jest oceniane jako fałsz, ponieważ ciągi nie są już domyślnie konwertowane na 0 podczas porównywania</span>. W rezultacie ten exploit nie jest możliwy w tych wersjach PHP.
                        Zachowanie podczas porównywania ciągu alfanumerycznego, który zaczyna się od liczby, pozostaje takie samo w PHP 8. W związku z tym <span className='important'>5 == „5 czegoś” jest nadal traktowane jako 5 == 5.</span></p>
            </details>

            <hr />

            <details>
                <summary>Magic methods</summary>
                <p>Metody magiczne to specjalny podzbiór metod, których nie trzeba jawnie wywoływać. Zamiast tego są wywoływane automatycznie, gdy wystąpi określone zdarzenie lub scenariusz. Jednym z najczęstszych przykładów <span className='important'>w PHP jest __construct()</span>,
                     który jest wywoływany, gdy obiekt klasy jest instancjonowany, podobnie jak <span className='important'>__init__ w Pythonie</span>. Zazwyczaj metody magiczne konstruktora, takie jak ta, zawierają kod do inicjalizacji atrybutów instancji. </p>
                <p>Metody magiczne, które <span className='important'>są wywoływane automatycznie podczas procesu deserializacji</span>. Na przykład metoda PHP <span className='important'>unserialize()</span> wyszukuje i wywołuje metodę magiczną <span className='important'>__wakeup()</span> obiektu.</p>
            </details>

            <hr />

            <details>
                <summary>Java deserialization with Apache Commons - ysoserial</summary>
                <div className='waring'>
                    <p>java \</p>
                    <p>--add-opens=java.xml/com.sun.org.apache.xalan.internal.xsltc.trax=ALL-UNNAMED \</p>
                    <p>--add-opens=java.xml/com.sun.org.apache.xalan.internal.xsltc.runtime=ALL-UNNAMED \</p>
                    <p>--add-opens=java.base/java.net=ALL-UNNAMED \</p>
                    <p>--add-opens=java.base/java.util=ALL-UNNAMED \</p>
                    <p>-jar ysoserial-all.jar CommonsCollections4 '{`<COMMAND>`}'</p>
                </div>
            </details>

            <hr />

            <details>
                <summary>PHP Generic Gadget Chains - PHP Generic Gadget Chains" (PHPGGC)</summary>
                <div className='waring'>
                    <p>./phpggc Symfony/RCE4 exec '{`<COMMAND>`}' | base64</p>
                </div>
            </details>

        </section>
    )
}

export default Deserialization;