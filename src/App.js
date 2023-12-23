import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import "./App.css";
import Layout from "./pages/Layout";
import Something from "./pages/Something";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route index element={<Layout />} />
        <Route path="something" element={<Something />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
