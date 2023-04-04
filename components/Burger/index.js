export default function Burger({ set_open, open }) {
    return (
        <div className="burger" onClick={() => set_open(!open)}>
            <div id={open ? "top-burger" : "burger"}></div>
            <div id={open ? "middle-burger" : "burger"}></div>
            <div id={open ? "bottom-burger" : "burger"}></div>
        </div>
    )
}
