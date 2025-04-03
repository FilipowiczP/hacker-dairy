const RequestHeader = () =>{
    return (
        <section>
            <h1>Request Header</h1>

            <details>
                <summary>Content-Type</summary>
                <p>Nagłówek Content-Type określa typ zawartości zwracanej przez serwer w odpowiedzi na żądanie HTTP</p>
                <p>Serwer obsługuje ten typ – Może zwrócić dane o stanie serwera, np. status jego zasobów, obciążenie, aktywne połączenia (np. w serwerze Apache /server-status).</p>
                <p>Serwer nie obsługuje tego typu – Może zignorować ten nagłówek lub zwrócić błąd.</p>
                <p>Przeglądarka nie wie, co z tym zrobić – Może spróbować pobrać plik lub wyświetlić surowe dane.</p>
                <p>Niezamierzona interpretacja – Jeśli serwer posiada niestandardowe mechanizmy do parsowania nagłówków i błędnie interpretuje Content-Type, może dojść do np. prób ustanowienia proxy lub innego rodzaju ataku.</p>
                <div className="waring">
                    <p>Content-Type: <span className="important">proxy:http://127.0.0.1</span></p>
                </div>
            </details>
        </section>
    )
}

export default RequestHeader;