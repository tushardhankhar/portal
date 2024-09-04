import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import { ThemeProvider } from "./context/themeContext";
import InfiniteScroll from "./components/InfiniteScroll/InfinteScroll";
import TrafficLight from "./components/TrafficLight/TrafficLight";
import Root from "./components/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <HomePage />}, 
      { path: "/infinite-scroll", element: <InfiniteScroll /> },
      {
        path: "/traffic-light",
        element: <TrafficLight />,
      },
    ],
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
