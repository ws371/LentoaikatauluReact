
import {InHeaderComponent} from '../components/HeaderComponent';
import {InStatusTextComponent} from '../components/StatusTextComponent';
import {InFlightsTableComponent} from '../components/FlightsTableComponent';
import {useState} from "react";

const Inflightobjectlist = [
    {Lennonnumero: "SX9554", Kohde: "Tallinna", Klo: "14:50", Portti: "3"},
    {Lennonnumero: "EN1321", Kohde: "Lontoo", Klo: "15:30", Portti: "15"}
];

function InFlightsPage() {
    const [selectedFlightObject, setSelectedFlight] = useState(null);
    const handleSelect = (flight) => {
        setSelectedFlight(flight);
    };

    return (
        <div>
            <InHeaderComponent />
            <InStatusTextComponent selectedflight={selectedFlightObject} />
            <InFlightsTableComponent flights={Inflightobjectlist} onSelect={handleSelect}/>
        </div>
    )
}
export default InFlightsPage;
