import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Tools from './tools/Tools';
import WebRequests from './web/web-requests/WebRequests';

const Routing = () => {
    return(
        <Routes>
          <Route path="/tools" element={<Tools />} />
          <Route path="/web-requests" element={<WebRequests />} />
      </Routes>
    )
};

export default Routing;
