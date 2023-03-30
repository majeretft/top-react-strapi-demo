import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/layout";
import LayoutIndex from "./pages/layout_index";
import IndexPage from "./pages/index";
import AdminPage from "./pages/admin";
import Page404 from "./pages/page404";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route element={<LayoutIndex />}>
            <Route path="/" element={<IndexPage />} />
          </Route>
          <Route element={<Layout />}>
            <Route path="/admin" element={<AdminPage />} />
            <Route path="*" element={<Page404 />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
};

export default App;
