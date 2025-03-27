import "./ComponentStyle.css";
export function OutHeaderComponent() {
    const headings = ["Lähtevät lennot 12.4.2024"]
    return (
        <div className="header">
            <h1> {headings} </h1>
        </div>
    )
}
export function InHeaderComponent() {
    const headings = ["Saapuvat lennot 12.4.2024"]
    return (
        <div className="header">
            <h1> {headings} </h1>
        </div>
    )
}

