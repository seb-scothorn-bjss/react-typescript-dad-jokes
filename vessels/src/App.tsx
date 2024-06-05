import { useMemo } from 'react';
import './App.css';
import { getVesselsOver10m, getVesselsUnder10m } from './utils/vessels-parser';
function App() {
	const vesselsOver10m = useMemo(getVesselsOver10m, []);
	const vesselsUnder10m = useMemo(getVesselsUnder10m, []);

	const Vessels = () => {
		return (
			<div>
				{vesselsOver10m !== undefined &&
					vesselsOver10m.map((vessel) => {
						return <div>{vessel.name}</div>;
					})}
				{vesselsUnder10m !== undefined &&
					vesselsUnder10m.map((vessel) => {
						return <div>{vessel.name}</div>;
					})}
			</div>
		);
	};

	return (
		<div className="App">
			<header className="App-header">
				<Vessels />
			</header>
		</div>
	);
}

export default App;
