import "./ComponentStyle.css";
function HeaderComponent() {
    const headings = ["Lähtevät lennot 12.4.2024"]
    return (
        <div className="header">
            <h1> {headings} </h1>
        </div>
    )
}
export default HeaderComponent;