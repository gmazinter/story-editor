import type { Component } from "solid-js";
import { Router, Routes, Route } from "solid-app-router";

import logo from "./logo.svg";
import styles from "./App.module.css";
import Editor from "./pages/editor";

const App: Component = () => {
	return (
		<Router>
			<Routes>
				<Route
					path="/"
					element={
						<div class={styles.App}>
							<header class={styles.header}>
								<img src={logo} class={styles.logo} alt="logo" />
								<p>
									Edit <code>src/App.tsx</code> and save to reload.
								</p>
								<a
									class={styles.link}
									href="https://github.com/solidjs/solid"
									target="_blank"
									rel="noopener noreferrer"
								>
									Learn Solid
								</a>
							</header>
						</div>
					}
				/>
				<Route path="/editor" element={<Editor />} />
			</Routes>
		</Router>
	);
};

export default App;
