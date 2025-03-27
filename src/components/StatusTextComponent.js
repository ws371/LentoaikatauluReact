export function OutStatusTextComponent({selectedflight}) {
    const description = ["Valittu: "]
    return (
        <div className="p">
            {selectedflight ? (
                <p>{description} {selectedflight.Lennonnumero} -> {selectedflight.Kohde}</p>
            ) : (
                <p>Valitse lento nähdäksesi tiedot</p>
            )}
        </div>
    )
}
export function InStatusTextComponent({selectedflight}) {
    const description = ["Valittu: "]
    return (
        <div className="p">
            {selectedflight ? (
                <p>{description} {selectedflight.Lennonnumero} -> {selectedflight.Kohde}</p>
            ) : (
                <p>Valitse lento nähdäksesi tiedot</p>
            )}
        </div>
    )
}
