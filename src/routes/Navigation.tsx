import { BrowserRouter } from "react-router-dom";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import logo from "../logo.svg";
import { LazyPages1, LazyPages2, LazyPages3 } from "../01-Lazyload/pages";

export const Navigation = () => {
	return (
		<BrowserRouter>
			<div className="main-layout">
				<nav>
					<img src={logo} alt="React logo" />
					<ul>
						<li>
							<NavLink
								to="/Lazy1"
								className={({ isActive }) => (isActive ? "nav-active" : "")}
							>
								Lazy 1
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/Lazy2"
								className={({ isActive }) => (isActive ? "nav-active" : "")}
							>
								Lazy 2
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/Lazy3"
								className={({ isActive }) => (isActive ? "nav-active" : "")}
							>
								Lazy 3
							</NavLink>
						</li>
					</ul>
				</nav>

				<Routes>
					<Route path="/lazy1" element={<LazyPages1 />} />
					<Route path="/lazy2" element={<LazyPages2 />} />
					<Route path="/lazy3" element={<LazyPages3 />} />
					<Route path="/*" element={<Navigate to="/Lazy1" replace />} />{" "}
					{/**replace no me deja regresar al anterior*/}
				</Routes>
			</div>
		</BrowserRouter>
	);
};
