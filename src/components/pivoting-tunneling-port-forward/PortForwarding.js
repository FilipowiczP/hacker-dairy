import port_fortward from '../../assets/port_fortward.png';
import port_fortward_scanning from '../../assets/port_fortward_scanning.png';
import port_fortward_scanning_open from '../../assets/port_fortward_scanning_open.png';
import port_fortward_dynamic from '../../assets/port_fortward_dynamic.png';
import port_fortward_dynamic_diagram from '../../assets/port_fortward_dynamic_diagram.png';
import ExampleFrame from '../exampleFrame/ExampleFrame';

const PortForwarding = () =>{
    return(
        <section>
            <h1>Port Forwarding</h1>
            <ExampleFrame screen={port_fortward} />

            <p>Skanowanie celu obrotowego</p>
            <ExampleFrame screen={port_fortward_scanning} />
            <div className='waring'>
                <p><span className='important'>Linus</span></p>
                <p>for i in {`{`}1..254{`}`} ;do (ping -c 1 172.16.5.$i | grep "bytes from" &) ;done</p>
                <p><span className='important'>CMD</span></p>
                <p>for /L %i in (1 1 254) do ping 172.16.5.%i -n 1 -w 100 | find "Reply"</p>
                <p><span className='important'>PowerShell</span></p>
                <p>1..254 | % {`{"172.16.5.$($_): $(Test-Connection -count 1 -comp 172.15.5.$($_) -quiet)"}`}</p>
            </div>
            <div className='waring'>
                <p>ssh -L <span className='important'>1234</span>:localhost:3306 ubuntu@10.129.202.64</p>
            </div>
            <ExampleFrame screen={port_fortward_scanning_open} />

            <hr />

            <h2>Włączanie dynamicznego przekierowania portów za pomocą protokołu SSH</h2>
            <ExampleFrame screen={port_fortward_dynamic_diagram} />

            <div className='waring'>
                <p><span className='important'>ssh -D 9050 ubuntu@10.129.202.64</span></p>
            </div>

            <ExampleFrame screen={port_fortward_dynamic} />

            <div className='waring'>
                <p><span className='important'>Skanowanie pełnego zakresu dostępnych ip</span></p>
                <p>proxychains nmap -v -sn 172.16.5.1-200</p>
            </div>
            <div className='waring'>
                <p><span className='important'>Skanowanie  konkretnego ip</span></p>
                <p>proxychains nmap -v -Pn -sT 172.16.5.19</p>
            </div>
        </section>
    )
}

export default PortForwarding;