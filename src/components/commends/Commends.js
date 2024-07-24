import './commends.scss';

const Commends = () => {

    return(
        <section className='commends'>
            <h1>Linux commends</h1>

            <h2 id='curl'>cURL</h2>
            <table>
                <thead>
                    <tr>
                        <th>Komenda</th>
                        <th>Przykład</th>
                        <th>Opis</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                    <td>curl -O (nazwa strony HTTP)</td>
                    <td>curl -O inlanefreight.com/index.html</td>
                    <td>Pobieranie pliku</td>
                </tr>
                <tr>
                    <td>curl -s (nazwa strony HTTP)</td>
                    <td>curl -s inlanefreight.com/index.html</td>
                    <td>Wyciszenie zbędnych danych</td>
                </tr>
                <tr>
                    <td>curl -k (nazwa strony HTTPS://)</td>
                    <td>curl -k https://inlanefreight.com/index.html</td>
                    <td>Pomijanie certyfikatu SSL</td>
                </tr>
                <tr>
                    <td>curl -v (nazwa strony HTTP://)</td>
                    <td>curl -v inlanefreight.com</td>
                    <td>Pełen request oraz response</td>
                </tr>
                <tr>
                    <td>curl -vvv (nazwa strony HTTP://)</td>
                    <td>curl -vvv inlanefreight.com</td>
                    <td>Szczegółowy request oraz response</td>
                </tr>
                <tr>
                    <td>curl -u (nazwa strony HTTP://)</td>
                    <td>curl -u http://inlanefreight.com</td>
                    <td>Podstawowe poświadczenia autoryzacji HTTP</td>
                </tr>
                <tr>
                    <td>curl -H 'Authorization: Basic YWRtaW46YWRtaW4=' (nazwa strony HTTP://)</td>
                    <td>curl -H 'Authorization: Basic YWRtaW46YWRtaW4=' http://inlanefreight.com</td>
                    <td>Set request header, można wielokrotnie użyć by ustawić wiele nagłówków</td>
                </tr>
                <tr>
                    <td>curl -X POST -d 'username=admin&password=admin' (nazwa strony HTTP://)</td>
                    <td>curl -X POST -d 'username=admin&password=admin' http://inlanefreight.com</td>
                    <td>Wyślij żądanie POST z danymi</td>
                </tr>
                <tr>
                    <td>curl -b 'PHPSESSID=c1nsa6op7vtk7kdis7bcnbadf1' (nazwa strony HTTP://)</td>
                    <td>curl -b 'PHPSESSID=c1nsa6op7vtk7kdis7bcnbadf1' http://inlanefreight.com</td>
                    <td>Ustaw żądanie plików cookie</td>
                </tr>
                <tr>
                    <td>curl -X POST -d {"{"}"search":"london"{"}"} -H 'Content-Type: application/json' (nazwa strony HTTP://)</td>
                    <td>curl -X POST -d {"{"}"search":"london"{"}"} -H 'Content-Type: application/json' http://inlanefreight.com</td>
                    <td>Ustaw żądanie plików cookie</td>
                </tr>
                </tbody>
            </table>
        </section>
    )
};

export default Commends;