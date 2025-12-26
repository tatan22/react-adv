import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import { LazyPages1, LazyPages2, LazyPages3 } from "../pages";
const LazyLayout = () => {
	return (
		<div>
			<h1>LazyLayout Page</h1>
			<ul>
				<li>
					<NavLink to="/lazyload/lazy1">Lazy 1</NavLink>
				</li>
				<li>
					<NavLink to="/lazyload/lazy2">Lazy 2</NavLink>
				</li>
				<li>
					<NavLink to="/lazyload/lazy3">Lazy 3</NavLink>
				</li>
			</ul>
			<Routes>
				<Route path="lazy1" element={<LazyPages1 />} />
				<Route path="lazy2" element={<LazyPages2 />} />
				<Route path="lazy3" element={<LazyPages3 />} />

        {/* <Route path="*" element={<div>404</div>} /> */}
        <Route path="*" element={<Navigate to="lazy1" replace />} />

			</Routes>
		</div>
	);
};

export default LazyLayout;
