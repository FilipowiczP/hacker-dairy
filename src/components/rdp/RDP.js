const RDP = () => {
    return(
        <section>
            <h1>RDP</h1>
            <div className="waring">
                <p>xfreerdp /u:cry0l1t3 /p:"P455w0rd!" /v:10.129.201.248</p>
            </div>

            <hr />
            <h2>WinRM</h2>
            <div className="waring">
                <p>evil-winrm -i 10.129.201.248 -u Cry0l1t3 -p P455w0rD!</p>
            </div>


        </section>
    )
};

export default RDP;