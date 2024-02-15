import { HashRouter, Routes, Route } from "react-router-dom";
import MainScreen from "./MainScreen";
import NotFoundScreen from "./NotFoundScreen";
import { AppRoutes } from "../const";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path={AppRoutes.MAIN} element={<MainScreen />} />
        <Route path="*" element={<NotFoundScreen />} />
      </Routes>
    </HashRouter>
  );
}

export default App;

