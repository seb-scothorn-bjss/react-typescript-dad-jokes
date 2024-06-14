import { useMemo } from 'react';
import './App.css';
import { getVesselsOver10m, getVesselsUnder10m } from './utils/vessels-parser';
// import { VesselCardLists } from './components/VesselCardLists/VesselCardLists';
import { VesselComparisons } from './components/VesselComparisons/VesselComparisons';
function App() {
	const vesselsOver10m = useMemo(getVesselsOver10m, []);
	const vesselsUnder10m = useMemo(getVesselsUnder10m, []);

	return (
		<div className="App">
			<header className="App-header">
				<VesselComparisons
					vesselsOver10m={vesselsOver10m}
					vesselsUnder10m={vesselsUnder10m}
				/>
			</header>
		</div>
	);
}

export default App;
