
import {OutHeaderComponent} from '../components/HeaderComponent';
import {OutStatusTextComponent} from '../components/StatusTextComponent';
import {OutFlightsTableComponent} from '../components/FlightsTableComponent';
import {useState} from "react";

const Outflightobjectlist = [
    {Lennonnumero: "TX8764", Kohde: "Berliini", Klo: "13:10", Portti: "23"},
    {Lennonnumero: "AI987", Kohde: "Tokio", Klo: "13:30", Portti: "10"}
];

function OutFlightsPage() {
    const [selectedFlightObject, setSelectedFlight] = useState(null);
    const handleSelect = (flight) => {
        setSelectedFlight(flight);
    };

    return (
        <div>
            <OutHeaderComponent />
            <OutStatusTextComponent selectedflight={selectedFlightObject} />
            <OutFlightsTableComponent flights={Outflightobjectlist} onSelect={handleSelect}/>
        </div>
    )
}
export default OutFlightsPage;

