import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ExamplePage from "./example/ExamplePage";
import MainPage from "./pages/MainPage";
import MyArticlePage from "./pages/MyArticlePage";
import MyNotificationPage from "./pages/MyNotificationPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage />,
    },
    {
        path: "/my-articles",
        element: <MyArticlePage />,
    },
    {
        path: "/my-notifications",
        element: <MyNotificationPage />,
    },
    {
        path: "/example",
        element: <ExamplePage />,
    },
]);

export const Routes = () => <RouterProvider router={router} />;
