const NFS = () =>{
    return(
        <section>
            <h1>NFS</h1>
            <p>Network File System (NFS) to sieciowy system plików opracowany przez firmę Sun Microsystems i ma taki sam cel jak <span className="important ">SMB</span></p>

            <table class="table table-striped text-left">
                <thead>
                    <tr>
                    <th><strong>Wersja</strong></th>
                    <th><strong>Opis</strong></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td><code>NFSv2</code></td>
                    <td>Jest starszy, ale jest obsługiwany przez wiele systemów i początkowo działał wyłącznie poprzez protokół UDP.</td>
                    </tr>
                    <tr>
                    <td><code>NFSv3</code></td>
                    <td>Ma więcej funkcji, w tym zmienny rozmiar pliku i lepsze raportowanie błędów, ale nie jest w pełni kompatybilny z klientami NFSv2.</td>
                    </tr>
                    <tr>
                    <td><code>NFSv4</code></td>
                    <td>Obejmuje protokół Kerberos, działa przez zapory ogniowe i Internet, nie wymaga już programów do mapowania portów, obsługuje listy ACL, stosuje operacje oparte na stanach oraz zapewnia poprawę wydajności i wysokie bezpieczeństwo. Jest to także pierwsza wersja posiadająca protokół stanowy.</td>
                    </tr>
                </tbody>
            </table>

            <hr />
            <h2>domyślna konfiguracja</h2>
            <p className="important">/etc/exports</p>

            <table class="table table-striped text-left">
                <thead>
                    <tr>
                    <th><strong>Opcja</strong></th>
                    <th><strong>Opis</strong></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td><code>rw</code></td>
                    <td>Uprawnienia do odczytu i zapisu</td>
                    </tr>
                    <tr>
                    <td><code>ro</code></td>
                    <td>Uprawnienia tylko do odczytu</td>
                    </tr>
                    <tr>
                    <td><code>sync</code></td>
                    <td>Synchroniczny transfer danych. (Trochę wolniej)</td>
                    </tr>
                    <tr>
                    <td><code>async</code></td>
                    <td>Asynchroniczny transfer danych. (Trochę szybciej)</td>
                    </tr>
                    <tr>
                    <td><code>secure</code></td>
                    <td>Porty powyżej 1024 nie będą używane.</td>
                    </tr>
                    <tr>
                    <td><code>insecure</code></td>
                    <td>Używane będą porty powyżej 1024.</td>
                    </tr>
                    <tr>
                    <td><code>no_subtree_check</code></td>
                    <td>Ta opcja wyłącza sprawdzanie drzew podkatalogów.</td>
                    </tr>
                    <tr>
                    <td><code>root_squash</code></td>
                    <td>Przypisuje wszystkie uprawnienia do plików o identyfikatorze root UID/GID 0 do identyfikatora UID/GID anonimowego, co uniemożliwia <span className="important">root</span> dostęp do plików na zamontowaniu NFS.</td>
                    </tr>
                </tbody>
            </table>

            <div className="waring">
                <p>echo '/mnt/nfs  10.129.14.0/24(sync,no_subtree_check)' {`>>`} /etc/exports</p>
                <p>systemctl restart nfs-kernel-server</p>
                <p>exportfs</p>
                <br />
                <br />
                <p>Udostępniliśmy folder /mnt/nfs podsieci 10.129.14.0/24 z ustawieniami pokazanymi powyżej. Oznacza to, że wszystkie hosty w sieci będą mogły zamontować ten udział NFS i sprawdzić zawartość tego folderu.</p>
            </div>

            <hr />
            <h2>Niebezpieczne ustawienia</h2>

            <table class="table table-striped text-left">
                <thead>
                    <tr>
                    <th><strong>Opcja</strong></th>
                    <th><strong>Opis</strong></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td><code>rw</code></td>
                    <td>Uprawnienia do odczytu i zapisu.</td>
                    </tr>
                    <tr>
                    <td><code>insecure</code></td>
                    <td>Używane będą porty powyżej 1024.</td>
                    </tr>
                    <tr>
                    <td><code>nohide</code></td>
                    <td>Jeśli pod wyeksportowanym katalogiem zamontowano inny system plików, katalog ten zostanie wyeksportowany za pomocą własnego wpisu eksportu.</td>
                    </tr>
                    <tr>
                    <td><code>no_root_squash</code></td>
                    <td>Wszystkie pliki utworzone przez roota mają identyfikator UID/GID 0.</td>
                    </tr>
                </tbody>
            </table>

            <hr />
            <h2>Pokaż dostępne udziały NFS</h2>

            <div className="waring">
                <p>showmount -e 10.129.14.128</p>
            </div>
            <div className="waring">
                <p>mkdir target-NFS</p>
                <p>sudo mount -t nfs 10.129.14.128:/ ./target-NFS/ -o nolock</p>
                <p>cd target-NFS</p>
                <p>tree .</p>
            </div>

            <h3>Odmontowanie udziału NFS</h3>

            <div className="waring">
                <p>sudo umount ./target-NFS</p>
            </div>
        </section>
    )
}

export default NFS;