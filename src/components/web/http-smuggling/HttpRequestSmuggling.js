import smuggling_01 from '../../../assets/smuggling_01.png';
import smuggling_02 from '../../../assets/smuggling_02.png';
import smuggling_03 from '../../../assets/smuggling_03.png';
import smuggling_04 from '../../../assets/smuggling_04.png';
import smuggling_05 from '../../../assets/smuggling_05.png';
import smuggling_06 from '../../../assets/smuggling_06.png';
import smuggling_07 from '../../../assets/smuggling_07.png';
import smuggling_08 from '../../../assets/smuggling_08.png';
import smuggling_09 from '../../../assets/smuggling_09.png';
import smuggling_10 from '../../../assets/smuggling_10.png';
import smuggling_11 from '../../../assets/smuggling_11.png';
import smuggling_12 from '../../../assets/smuggling_12.png';
import smuggling_13 from '../../../assets/smuggling_13.png';
import smuggling_14 from '../../../assets/smuggling_14.png';
import smuggling_15 from '../../../assets/smuggling_15.png';
import ExampleFrame from '../../exampleFrame/ExampleFrame';


const HTTPRequestSmuggling = () =>{
    return(
        <section>
            <h1>HTTP Request Smuggling</h1>

            <details>
                <summary>Detect type</summary>
                <ExampleFrame screen={smuggling_01} />
            </details>
            
            <hr />
            
            <details>
                <summary>CL.TE</summary>
                <ExampleFrame screen={smuggling_02} />
                <ExampleFrame screen={smuggling_03} />
                <ExampleFrame screen={smuggling_04} />
                <ExampleFrame screen={smuggling_05} />
                <div className='waring'>
                    <p>Można zamiast atrybutu <span className='important'>Dummy:</span> użyć <span className='important'>Z-Ignore: x</span></p>
                </div>
            </details>

            <hr />
            
            <details>
                <summary>TE.TE</summary>
                <table class="table table-striped text-left">
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Header</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Substring match</td>
                            <td>Transfer-Encoding: testchunked</td>
                        </tr>
                        <tr>
                            <td>Space in Header name</td>
                            <td>Transfer-Encoding : chunked</td>
                        </tr>
                        <tr>
                            <td>Horizontal Tab Separator</td>
                            <td>Transfer-Encoding:[\x09]chunked</td>
                        </tr>
                        <tr>
                            <td>Vertical Tab Separator</td>
                            <td>Transfer-Encoding:[\x0b]chunked</td>
                        </tr>
                        <tr>
                            <td>Leading space</td>
                            <td>[space]Transfer-Encoding: chunked</td>
                        </tr>
                        <tr>
                            <td>Add to another attribute</td>
                            <td>X: X[/n]Transfer-Encoding: chunked</td>
                        </tr>
                    </tbody>
                </table>
                <div className='waring'>
                    <p>Uwaga: Sekwencje <span className='important'>[\x09]</span> i <span className='important'>[\x0b]</span> nie są dosłownymi sekwencjami znaków używanymi w zaciemnianiu. <span className='important'>Oznaczają one raczej znak tabulacji poziomej (ASCII 0x09) i znak tabulacji pionowej (ASCII 0x0b).</span></p>
                    <p>Zmieniamy byte na <span className='important'>09</span> lub <span className='important'>0b</span></p>
                    <ExampleFrame screen={smuggling_06} />
                </div>
            </details>

            <hr />
            
            <details>
                <summary>TE.CL</summary>
                <ExampleFrame screen={smuggling_07} />
                <ExampleFrame screen={smuggling_08} />
                <ExampleFrame screen={smuggling_09} />
            </details>

            <hr />
            
            <details>
                <summary>H2.CL</summary>
                <ExampleFrame screen={smuggling_10} />
                <ExampleFrame screen={smuggling_11} />
            </details>

            <hr />
            
            <details>
                <summary>H2.TE</summary>
                <ExampleFrame screen={smuggling_12} />
                <ExampleFrame screen={smuggling_13} />
            </details>

            <hr />
            
            <details>
                <summary>via CRLF injection</summary>
                <div className='waring'>
                    <p>foo	bar<span className='important'>\r\nTransfer-Encoding: chunked</span></p>
                </div>
                <ExampleFrame screen={smuggling_14} />
            </details>

            <hr />
            
            <details>
                <summary>HTTP/2 request splitting</summary>
                <ExampleFrame screen={smuggling_15} />
            </details>

        </section>
    )
}

export default HTTPRequestSmuggling;