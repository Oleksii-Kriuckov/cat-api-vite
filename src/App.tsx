import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import Initial from "./pages/Initial";
import { AppRoutes } from "./Router/routes";
import "./AppStyle/App.css";
import "./AppStyle/adaptive.css";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Initial />} />
        {AppRoutes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Route>
    </Routes>
  );
}

export default App;
