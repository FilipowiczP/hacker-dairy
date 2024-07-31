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
      </Routes>
    )
};

export default Routing;
