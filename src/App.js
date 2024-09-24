import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import { ThemeProvider } from "./context/themeContext";
import InfiniteScroll from "./components/InfiniteScroll/InfinteScroll";
import TrafficLight from "./components/TrafficLight/TrafficLight";
import Root from "./components/Root";
import StopWatch from "./components/StopWatch/StopWatch";
import JobBoard from "./components/JobBoard/JobBoard";
import EmployeeDatabase from "./components/EmployeeDatabase/EmployeeDatabase";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/infinite-scroll", element: <InfiniteScroll /> },
      {
        path: "/traffic-light",
        element: <TrafficLight />,
      },
      {
        path: "/stopwatch",
        element: <StopWatch />,
      },
      {
        path: "/jobBoard",
        element: <JobBoard />,
      },
      {
        path: "/employeeDatabase",
        element: <EmployeeDatabase />,
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
