import './xss.scss';

const XSS = () => {

    return(
        <section>
            <h1>Cross-Site Scripting (XSS)</h1>
            <table>
                <thead>
                  <tr>
                        <th>Typ</th>
                        <th>Opis</th>
                   </tr>
                </thead>
                <tbody>
                    <tr>
                       <td>Reflected XSS</td>
                        <td>Występuje, gdy po przetworzeniu na stronie zostaną wyświetlone dane wprowadzone przez użytkownika (np. wynik wyszukiwania lub komunikat o błędzie).</td>
                    </tr>
                    <tr>
                        <td>Stored XSS</td>
                        <td>Występuje, gdy dane wejściowe użytkownika są przechowywane w wewnętrznej bazie danych, a następnie wyświetlane po pobraniu (np. posty lub komentarze).</td>
                   </tr>
                    <tr>
                        <td>DOM XSS</td>
                         <td>Występuje, gdy dane wprowadzone przez użytkownika są wyświetlane bezpośrednio w przeglądarce i zapisywane w obiekcie HTML DOM (np. nazwa użytkownika lub tytuł strony, która może być podatna na ataki).</td>
                    </tr>
                </tbody>
            </table>
        </section>
    )
};

export default XSS;