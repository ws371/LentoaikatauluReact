

function StatusTextComponent({selectedflight}) {
    const description = ["Valittu: "]
    return (
        <div className="p">
            {selectedflight ? (
                <p>{description} {selectedflight.Lennonnumero} → {selectedflight.Kohde}</p>
            ) : (
                <p>Valitse lento nähdäksesi tiedot</p>
            )}
        </div>
    )
}
export default StatusTextComponent;
