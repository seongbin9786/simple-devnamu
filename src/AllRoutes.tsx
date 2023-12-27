import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./components/Layout";
import ExamplePage from "./example/ExamplePage";
import HRPage from "./pages/HRPage";
import MainPage from "./pages/MainPage";
import MyArticlePage from "./pages/MyArticlePage";
import MyNotificationPage from "./pages/MyNotificationPage";
import NotFoundPage from "./pages/NotFoundPage";

export const AllRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<MainPage />} />
                <Route path="my-articles" element={<MyArticlePage />} />
                <Route path="my-notifications" element={<MyNotificationPage />} />
                <Route path="example" element={<ExamplePage />} />
                <Route path="hr" element={<HRPage />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    </BrowserRouter>
);
