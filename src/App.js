import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import { ThemeProvider } from "./context/themeContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);

function App() {
  return (
    <div className="">
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </div>
  );
}

export default App;
