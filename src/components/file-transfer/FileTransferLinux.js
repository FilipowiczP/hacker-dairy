const FileTransferLinux = () =>{
    return(
        <section>
            <h1>File transfer Linux</h1>
            <h2>Download a File Using</h2>

            <div className="waring">
                <p>wget https://raw.githubusercontent.com/rebootuser/LinEnum/master/LinEnum.sh -O /tmp/LinEnum.sh</p>

                <br />

                <p>curl -o /tmp/LinEnum.sh https://raw.githubusercontent.com/rebootuser/LinEnum/master/LinEnum.sh</p>
            </div>

            <hr />
            <h2>Wywoływanie plików bez pobierania</h2>
            <div className="waring">
                <p>curl https://raw.githubusercontent.com/rebootuser/LinEnum/master/LinEnum.sh | bash</p>
                <br />
                <p>wget -qO- https://raw.githubusercontent.com/juliourena/plaintext/master/Scripts/helloworld.py | python3</p>
            </div>

            <hr />
            <h2>Tworzenie web serwera - python</h2>
            <div className="waring">
                <p>python3 -m http.server 8080</p>
                <p>python2.7 -m SimpleHTTPServer</p>
            </div>
            <hr />
            <h2>Tworzenie web serwera - php</h2>
            <div className="waring">
                <p>php -S 0.0.0.0:8000</p>
            </div>

            <hr />
            <h2>Tworzenie protokołu SMB przez RDP</h2>
            <div className="waring">
                <p>xfreerdp/u:{`<username>`} /p:{`<password>`} /v:{`<host|ip>`}/cert:ignore +drive:smbfolder,{'</path/to/share/>'}</p>
            </div>
        </section>
    )
}

export default FileTransferLinux