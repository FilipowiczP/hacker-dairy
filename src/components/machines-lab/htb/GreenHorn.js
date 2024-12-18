import greenHorn_1 from '../../../assets/greenHorn_1.png';
import greenHorn_2 from '../../../assets/greenHorn_2.png';
import greenHorn_3 from '../../../assets/greenHorn_3.png';
import greenHorn_4 from '../../../assets/greenHorn_4.png';
import greenHorn_5 from '../../../assets/greenHorn_5.png';
import greenHorn_6 from '../../../assets/greenHorn_6.png';
import greenHorn_7 from '../../../assets/greenHorn_7.png';
import greenHorn_8 from '../../../assets/greenHorn_8.png';
import greenHorn_9 from '../../../assets/greenHorn_9.png';
import greenHorn_10 from '../../../assets/greenHorn_10.png';
import ExampleFrame from '../../exampleFrame/ExampleFrame';

const GreenHorn = () =>{
    return(
        <section>
            <h1>Green Horn</h1>
            <ExampleFrame screen={greenHorn_1}/>
            <div className='waring'>
               <p>vim /etc/hosts {'->'} 10.10.11.25 greenhorn.htb</p>
            </div>
            <ExampleFrame screen={greenHorn_2}/>
            <ExampleFrame screen={greenHorn_3}/>
            <ExampleFrame screen={greenHorn_4}/>
            <ExampleFrame screen={greenHorn_5}/>
            <ExampleFrame screen={greenHorn_6}/>
            <ExampleFrame screen={greenHorn_7}/>
            <div className='waring'>
               <p>https://github.com/spipm/Depix</p>
            </div>
            <ExampleFrame screen={greenHorn_8}/>
            <ExampleFrame screen={greenHorn_9}/>
            <ExampleFrame screen={greenHorn_10}/>
        </section>
    )
}

export default GreenHorn;