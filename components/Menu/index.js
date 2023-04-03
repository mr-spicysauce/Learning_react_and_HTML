export default function Menu({ open }) {
    return (
        <div className={open ? "burger-menu open" : "burger-menu"}>
            <a href="https://genrandom.com/cats/">
                <span role="img">🐱</span>
                Random cat website
            </a>
        </div>
    )
}
