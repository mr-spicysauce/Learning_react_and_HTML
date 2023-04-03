export default function Burger({ set_open, open }) {
    return (
        <div className="burger" onClick={() => set_open(!open)}>
            <div />
            <div />
            <div />
        </div>
    )
}
