import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "@/components/Layout";

import ExamplePage from "./example/ExamplePage";
import MainPage from "./pages/MainPage";
import MyArticlePage from "./pages/MyArticlePage";
import MyNotificationPage from "./pages/MyNotificationPage";
import NotFoundPage from "./pages/NotFoundPage";

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
    {
        path: "*",
        element: <NotFoundPage />,
    },
]);

export const Routes = () => (
    <Layout>
        <RouterProvider router={router} />
    </Layout>
);
