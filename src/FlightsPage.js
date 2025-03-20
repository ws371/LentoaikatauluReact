import './App.css';
import HeaderComponent from './components/HeaderComponent';
import StatusTextComponent from './components/StatusTextComponent';
import FlightsTableComponent from './components/FlightsTableComponent';
import {useState} from "react";

const flightobjectlist = [
    {Lennonnumero: "TX8764", Kohde: "Berliini", Klo: "13:10", Portti: "23"},
    {Lennonnumero: "AI987", Kohde: "Tokio", Klo: "13:30", Portti: "10"}
];

function FlightsPage() {
    const [selectedFlightObject, setSelectedFlight] = useState(null);
    const handleSelect = (flight) => {
        setSelectedFlight(flight);
    };

    return (
        <div>
            <HeaderComponent />
            <StatusTextComponent selectedflight={selectedFlightObject} />
            <FlightsTableComponent flights={flightobjectlist} onSelect={handleSelect}/>
        </div>
    )
}
export default FlightsPage;

