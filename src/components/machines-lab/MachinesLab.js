import { Link } from "react-router-dom";
import './machines-lab.scss';

const MachinesLab = () =>{
    return(
        <section className="labs">
            <Link to='board-light'>Board Light</Link>
        </section>
    )
}

export default MachinesLab;