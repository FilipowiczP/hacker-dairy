import { Link } from 'react-router-dom';
import chemistry_1 from '../../../assets/chemistry_1.png';
import chemistry_2 from '../../../assets/chemistry_2.png';
import chemistry_3 from '../../../assets/chemistry_3.png';
import chemistry_4 from '../../../assets/chemistry_4.png';
import chemistry_5 from '../../../assets/chemistry_5.png';
import chemistry_6 from '../../../assets/chemistry_6.png';
import chemistry_7 from '../../../assets/chemistry_7.png';
import chemistry_8 from '../../../assets/chemistry_8.png';
import chemistry_9 from '../../../assets/chemistry_9.png';
import chemistry_10 from '../../../assets/chemistry_10.png';
import ExampleFrame from '../../exampleFrame/ExampleFrame';


const Chemistry = () =>{
    return(
        <section>
            <h1>Chemistry</h1>
            <ExampleFrame screen={chemistry_1} />
            <ExampleFrame screen={chemistry_2} />

            <Link to='https://ethicalhacking.uk/cve-2024-23346-arbitrary-code-execution-in-pymatgen-via-insecure/#gsc.tab=0'>CIF Exploit</Link>
            <ExampleFrame screen={chemistry_3} />
            <ExampleFrame screen={chemistry_4} />
            <ExampleFrame screen={chemistry_5} />
            <ExampleFrame screen={chemistry_6} />
            <div className='waring'>
                <p>unicorniosrosados</p>
            </div>
            <ExampleFrame screen={chemistry_7} />
            <div className='waring'>
                <p>ssh -L 1234:localhost:8080 rosa@10.10.11.38</p>
            </div>
            <ExampleFrame screen={chemistry_8} />
            <ExampleFrame screen={chemistry_9} />
            <Link to='https://ethicalhacking.uk/cve-2024-23334-aiohttps-directory-traversal-vulnerability/#gsc.tab=0'>aiohttp Exploit</Link>
            <ExampleFrame screen={chemistry_10} />
        </section>
    )
}

export default Chemistry;