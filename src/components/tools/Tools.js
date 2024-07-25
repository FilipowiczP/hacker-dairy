import './tools.scss';
import { Link } from 'react-router-dom';

const Tools = () => {

    return(
        <section>
            <h1>Tools list repos</h1>
            <Link to='https://github.com/FilipowiczP/dnsenum'>dnsenum - Kompleksowe narzędzie do wyliczania DNS, które obsługuje ataki słownikowe i brute-force w celu wykrycia subdomen.</Link>
            <Link to='https://github.com/FilipowiczP/gobuster'>gobuster - Wielozadaniowe narzędzie często używane do brutalnego wymuszania katalogów/plików, ale także skuteczne do wykrywania hostów wirtualnych.
</Link>
        </section>
    )
};

export default Tools;