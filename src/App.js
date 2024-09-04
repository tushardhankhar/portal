import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import { ThemeProvider } from "./context/themeContext";
import InfiniteScroll from "./components/InfiniteScroll/InfinteScroll";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path : '/infinite-scroll',
    element: <InfiniteScroll />
  }
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
