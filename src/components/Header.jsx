import React, { useContext } from "react";
import { RouteContext } from "../context";

const Header = () => {
    const { route, setRoute } = useContext(RouteContext);

    return (
        <header className="flex items-center mb-12 justify-between">
            <div className="flex items-center gap-4">
                <div>
                    <div
                        className="flex items-baseline gap-3 cursor-pointer"
                        onClick={() => setRoute("create-img")}
                    >
                        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight bg-linear-to-r from-indigo-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                            AI
                        </h1>
                        <span className="text-lg md:text-xl font-semibold text-zinc-200/90 tracking-wide">
                            STUDIO
                        </span>
                    </div>

                </div>
            </div>

            <nav>
                <ul className="ml-4 text-sm text-zinc-400 flex gap-8">
                    <li>
                        <button
                            className={`hover:text-zinc-200 ${route === "create-img" ? "font-medium text-zinc-200" : ""
                                } cursor-pointer transition-all`}
                            onClick={() => setRoute("create-img")}
                        >
                            Create Image
                        </button>
                    </li>

                    <li>
                        <button
                            className={`hover:text-zinc-200 ${route === "downloaded-img" ? "font-medium text-zinc-200" : ""
                                } cursor-pointer transition-all`}
                            onClick={() => setRoute("downloaded-img")}
                        >
                            Downloaded
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
