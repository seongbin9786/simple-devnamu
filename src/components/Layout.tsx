import { Link, Outlet } from "react-router-dom";

import SideBar from "@/components/SideBar";

const links = [
    {
        path: "/",
        pageName: "MainPage",
    },
    {
        path: "/my-articles",
        pageName: "MyArticlePage",
    },
    {
        path: "/my-notifications",
        pageName: "MyNotificationPage",
    },
    {
        path: "/example",
        pageName: "ExamplePage",
    },
    {
        path: "/hr",
        pageName: "HRPage",
    },
];

export default function Layout() {
    return (
        <div className="flex">
            <div className="p-2 mt-64">
                <SideBar />
                <div className="flex flex-col">
                    {links.map(({ path, pageName }) => (
                        <Link key={path} to={path}>
                            {pageName}
                        </Link>
                    ))}
                </div>
            </div>
            <div className="w-full">
                <Outlet />
            </div>
        </div>
    );
}
