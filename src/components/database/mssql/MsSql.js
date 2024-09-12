import mssql from '../../../assets/mssql.png';
import mssql_mssqlclient from '../../../assets/mssql_mssqlclient.png';
import ExampleFrame from '../../exampleFrame/ExampleFrame';

const MsSql = () =>{
    return(
        <section>
            <h1>MS SQL</h1>
            <p>Microsoft SQL (MSSQL) to system zarządzania relacyjnymi bazami danych firmy Microsoft oparty na języku SQL.</p>
            <p>Dostęp do bazy danych działającej w MSSQL można uzyskać za pomocą wielu innych klientów. W tym między innymi:</p>
            <ul>
                <li>mssql-cli</li>
                <li>SQL Server PowerShell</li>
                <li>HeidiSQL</li>
                <li>SQLPro</li>
                <li>Impacket's mssqlclient.py</li>
            </ul>
            <ExampleFrame screen={mssql} />

            <hr />
            <h2>Łączenie przez Mssqlclient.py</h2>

            <div className='waring'>
                <p>python3 mssqlclient.py Administrator@10.129.201.248 -windows-auth</p>
            </div>

            <ExampleFrame screen={mssql_mssqlclient} />
        </section>
    )
}

export default MsSql;