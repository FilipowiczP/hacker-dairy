import { Link } from "react-router-dom";
import './machines-lab.scss';

const MachinesLab = () =>{
    return(
        <section className="labs">
            <h1>HTB - Labs</h1>
            <Link to='board-light'>Board Light</Link>
            <Link to='see'>See</Link>
            <Link to='permx'>PermX</Link>
            <Link to='cicada'>Cicada</Link>
            <Link to='chemistry'>Chemistry</Link>
        </section>
    )
}

export default MachinesLab;