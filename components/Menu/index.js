export default function Menu({ open }) {
    return (
        <div className={open ? "burger-menu open" : "burger-menu"}>
            <a href="https://genrandom.com/cats/">
                <span role="img">🐱</span>
                Random cat website
            </a>

            <a
                className="burger-menu-github"
                href="https://github.com/mr-spicysauce/Learning_react_and_HTML"
            >
                <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"></img>
                <div>GitHub Page</div>
            </a>

            <a href="./" className="burger-menu-github">
                <span role="img">☎️</span>
                contact us
            </a>
        </div>
    )
}
