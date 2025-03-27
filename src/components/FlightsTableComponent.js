
export function OutFlightsTableComponent({flights, onSelect}) {

    return (
        <table className="table">
            <thead className="thead">
                <tr>
                    <th> Lennonnumero </th>
                    <th> Kohde </th>
                    <th> Klo </th>
                    <th> Portti </th>
                    <th> Valitse </th>
                </tr>
            </thead>
            <tbody>
                {flights.map((flight, index) => (
                    <tr key={index}>
                        <td>{flight.Lennonnumero}</td>
                        <td>{flight.Kohde}</td>
                        <td>{flight.Klo}</td>
                        <td>{flight.Portti}</td>
                        <td>
                            <button onClick={() => onSelect(flight)}>Valitse</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}


export function InFlightsTableComponent({flights, onSelect}) {

    return (
        <table className="table">
            <thead className="thead">
            <tr>
                <th> Lennonnumero </th>
                <th> Kohde </th>
                <th> Klo </th>
                <th> Portti </th>
                <th> Valitse </th>
            </tr>
            </thead>
            <tbody>
            {flights.map((flight, index) => (
                <tr key={index}>
                    <td>{flight.Lennonnumero}</td>
                    <td>{flight.Kohde}</td>
                    <td>{flight.Klo}</td>
                    <td>{flight.Portti}</td>
                    <td>
                        <button onClick={() => onSelect(flight)}>Valitse</button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}