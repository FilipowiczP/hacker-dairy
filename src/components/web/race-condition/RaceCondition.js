import race_condition from '../../../assets/race_condition.png';
import race_condition_window from '../../../assets/race_condition_window.png';
import race_condition_hidden_sequence from '../../../assets/race_condition_hidden_sequence.png';
import race_condition_hidden_sequence_01 from '../../../assets/race_condition_hidden_sequence_01.png';
import race_condition_window_many_request from '../../../assets/race_condition_window_many_request.png';
import race_condition_multi_endpoint from '../../../assets/race_condition_multi_endpoint.png';
import race_condition_multi_example from '../../../assets/race_condition_multi_example.png';
import race_condition_multi_example_01 from '../../../assets/race_condition_multi_example_01.png';
import race_condition_multi_example_02 from '../../../assets/race_condition_multi_example_02.png';
import race_condition_limit from '../../../assets/race_condition_limit.png';
import race_condition_single_endpoint from '../../../assets/race_condition_single_endpoint.png';
import ExampleFrame from '../../exampleFrame/ExampleFrame';

const RaceCondition = () =>{
    return(
        <section>
            <h1>Race Condition</h1>
            <ExampleFrame screen={race_condition} />
            <p>Najczęściej występują:</p>
            <ol>
                <li>Wielokrotna realizacja karty podarunkowej</li>
                <li>Wielokrotna ocena produktu</li>
                <li>Wypłacanie lub przelewanie środków pieniężnych przekraczających saldo konta</li>
                <li>Ponowne użycie jednego rozwiązania CAPTCHA</li>
                <li>Omijanie limitu szybkości przeciwdziałania brutalnej sile</li>
            </ol>

            <details>
                <summary>Wykrywanie i wykorzystywanie warunków wyścigu związanych z przekroczeniem limitów</summary>
                <p>Pamiętajmy o bardzo małym oknie</p>
                <ExampleFrame screen={race_condition_window} />

                <h2>Wiele zapytań oraz wstrzelenie się w okno</h2>
                <ExampleFrame screen={race_condition_window_many_request} />
            </details>

            <hr />

            <details>
                <summary>Ukryte sekwencje wieloetapowe</summary>
                <ExampleFrame screen={race_condition_hidden_sequence}/>
                <p>Tworzymy wiele zapytań z różnymi wartościami</p>
                <ExampleFrame screen={race_condition_hidden_sequence_01}/>
            </details>

            <hr />

            <details>
                <summary>Warunki wyścigu z wieloma punktami końcowymi</summary>
                <ExampleFrame screen={race_condition_multi_endpoint} />

                <h2>Przykład</h2>
                <ExampleFrame screen={race_condition_multi_example} />

                <div className='waring'>
                    <p>Dodajemy jeden przedmiot do koszyka</p>
                    <p>Następnie przerabiamy zapytanie zmieniając przedmiot zakupu oraz dodajemy endpoint zakupu</p>
                </div>

                <ExampleFrame screen={race_condition_multi_example_01} />
                <ExampleFrame screen={race_condition_multi_example_02} />
            </details>

            <hr />

            <details>
                <summary>Nadużywanie limitów szybkości lub zasobów</summary>
                <ExampleFrame screen={race_condition_limit}/>
                <div className='waring'>
                    <p>Duża ilość zapytań tworzące każde kolejne opóźnienie by trafić w okienko</p>
                </div>
            </details>

            <hr />

            <details>
                <summary>Single endpoint race condition</summary>
                <ExampleFrame screen={race_condition_single_endpoint}/>
                <div className='waring'>
                    <p>Nadpisuje wartość pierwszego zapytania</p>
                </div>
            </details>

            <hr />

            <details className='defense'>
                <summary>Zapobieganie race condition</summary>

                <ul className='defense'>
                    <li>Unikaj mieszania danych z różnych miejsc przechowywania.</li>
                    <li>Upewnij się, że wrażliwe punkty końcowe wprowadzają zmiany stanu niepodzielnie, korzystając z funkcji współbieżności magazynu danych. Na przykład użyj pojedynczej transakcji w bazie danych, aby sprawdzić, czy płatność zgadza się z wartością koszyka i potwierdzić zamówienie.</li>
                    <li>Jako środek zapewniający dogłębną obronę, skorzystaj z funkcji integralności i spójności magazynu danych, takich jak ograniczenia unikalności kolumn.</li>
                    <li>Nie próbuj używać jednej warstwy przechowywania danych do zabezpieczenia innej. Na przykład sesje nie nadają się do zapobiegania atakom związanym z przekroczeniem limitów na bazy danych.</li>
                    <li>Upewnij się, że struktura obsługi sesji utrzymuje sesje wewnętrznie spójne. Aktualizowanie zmiennych sesji indywidualnie zamiast zbiorczo może być kuszącą optymalizacją, ale jest niezwykle niebezpieczna. Dotyczy to również ORM; ukrywając pojęcia takie jak transakcje, biorą za nie pełną odpowiedzialność.</li>
                    <li>W niektórych architekturach właściwe może być całkowite unikanie stanu po stronie serwera. Zamiast tego można użyć szyfrowania, aby wypchnąć stan po stronie klienta, na przykład za pomocą tokenów JWT. Należy pamiętać, że wiąże się to z pewnym ryzykiem, co obszernie omówiliśmy w naszym temacie dotyczącym ataków JWT.</li>
                </ul>
            </details>
        </section>
    )
}

export default RaceCondition;