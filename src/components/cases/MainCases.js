import Clickjacking from "./Clickjacking";
import CORS from "./CORS";
import CSRF from "./CSRF";
import DOMbasedVulnerabilities from "./DOMbasedVulnerabilities";
import HTTPRequestSmuggling from "./HTTPRequestSmuggling";
import OSCommandInjection from "./OSCommandInjection";
import SQL from "./SQL";
import SSRF from "./SSRF";
import XSS from "./XSS";
import XXE from "./XXE";

const MainCases = () => {
    return(
        <section className="cases">
            <h1>Cases</h1>

            <details>
                <summary>WEB</summary>

                <ul>
                    <li>
                        <SQL/>
                    </li>
                    <li>
                        <XSS/>
                    </li>
                    <li>
                        <CSRF/>
                    </li>
                    <li>
                        <Clickjacking/>
                    </li>
                    <li>
                        <DOMbasedVulnerabilities/>
                    </li>
                    <li>
                        <CORS/>
                    </li>
                    <li>
                        <XXE/>
                    </li>
                    <li>
                        <SSRF/>
                    </li>
                    <li>
                        <HTTPRequestSmuggling/>
                    </li>
                    <li>
                        <OSCommandInjection/>
                    </li>
                </ul>
            </details>
        </section>
    )
}

export default MainCases;