import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Tools from './tools/Tools';
import WebRequests from './web/web-requests/WebRequests';
import WebApplication from './web/web-application/WebApplication';
import Commends from './commends/Commends';
import XSS from './web/xss/XSS';
import MySQL from './database/mysql/MySql';
import WebInformationGathering from './web/web-information-gathering.js/WebInformationGathering';
import HTBMySQL from './database/mysql/HTBMySql';
import HTBXSS from './web/xss/HTBXSS';
import LinuxCommands from './linux/commands/LinuxCommand';
import CommandInjection from './web/comands-injection/ComandsInjection';
import FileUpload from './web/file-upload/FileUpload';
import XXE from './web/xxe/XXE';
import SSRF from './web/ssrf/SSRF';
import SSTI from './web/ssti/SSTI';
import BruteForce from './bruteForce/BruteForce';
import Authentication from './web/authentication/Authentication';
import VerbTampering from './web/verb-tempering/VerbTempering';
import IDOR from './web/idor/IDOR';
import MachinesLab from './machines-lab/MachinesLab';
import BoardLight from './machines-lab/htb/BoardLight';
import FileInclusion from './web/file-inclusion/FileInclusion';
import CSRF from './web/csrf/CSRF';
import WebServicesApiAttack from './web/web-services-api-attacks/WebServicesApiAttack';
import WordPress from './web/word-press/WordPress';
import See from './machines-lab/htb/See';
import PermX from './machines-lab/htb/PermX';
import FTP from './ftp/FTP';
import SMB from './smb/SMB';
import NFS from './nfs/NFS';
import DNS from './dns/DNS';
import SMTP from './smtp/SMTP';
import ImapPop3 from './imap-pop3/IMAP-POP3';
import MsSql from './database/mssql/MsSql';
import RDP from './rdp/RDP';
import FileTransferWindows from './file-transfer/FileTransferWindows';
import FileTransferLinux from './file-transfer/FileTransferLinux';
import Shell from './shell/Shell';
import Password from './password/Password';

const Routing = () => {
    return(
        <Routes>
          <Route path="/tools" element={<Tools />} />
          <Route path="/commends" element={<Commends />} />
          <Route path="/web-requests" element={<WebRequests />} />
          <Route path="/web-application" element={<WebApplication />} />
          <Route path="/web-information-gathering" element={<WebInformationGathering />} />
          <Route path="/xss" element={<XSS />} />
          <Route path="/mysql" element={<MySQL />} />
          <Route path="/htb-mysql" element={<HTBMySQL />} />
          <Route path="/htb-xss" element={<HTBXSS />} />
          <Route path="/linux-commends" element={<LinuxCommands />} />
          <Route path="/commands-injection" element={<CommandInjection />} />
          <Route path="/file-upload-attack" element={<FileUpload />} />
          <Route path="/xxe" element={<XXE />} />
          <Route path="/ssrf" element={<SSRF />} />
          <Route path="/csrf" element={<CSRF />} />
          <Route path="/ssti" element={<SSTI />} />
          <Route path="/brute-force" element={<BruteForce />} />
          <Route path="/authentication" element={<Authentication />} />
          <Route path="/verb-tampering" element={<VerbTampering />} />
          <Route path="/idor" element={<IDOR />} />
          <Route path="/machines-lab" element={<MachinesLab />} />
          <Route path="/machines-lab/board-light" element={<BoardLight />} />
          <Route path="/machines-lab/see" element={<See />} />
          <Route path="/machines-lab/permx" element={<PermX />} />
          <Route path="/file-inclusion" element={<FileInclusion />} />
          <Route path="/web-services-api-attack" element={<WebServicesApiAttack />} />
          <Route path="/word-press" element={<WordPress />} />
          <Route path="/ftp" element={<FTP />} />
          <Route path="/smb" element={<SMB />} />
          <Route path="/nfs" element={<NFS />} />
          <Route path="/dns" element={<DNS />} />
          <Route path="/smtp" element={<SMTP />} />
          <Route path="/imap-pop3" element={<ImapPop3 />} />
          <Route path="/mssql" element={<MsSql />} />
          <Route path="/rdp" element={<RDP />} />
          <Route path="/file-transfer-windows" element={<FileTransferWindows />} />
          <Route path="/file-transfer-linux" element={<FileTransferLinux />} />
          <Route path="/shell" element={<Shell />} />
          <Route path="/password" element={<Password />} />


      </Routes>
    )
};

export default Routing;
