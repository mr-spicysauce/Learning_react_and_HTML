export default function Menu({ open }) {
    return (
        <div className={open ? "burger-menu open" : "burger-menu"}>
            <a href="https://genrandom.com/cats/">
                <img src="/emojis/CatTwitterEmoji.png"></img>
                Random cat website
            </a>

            <a
                className="burger-menu-github"
                href="https://github.com/mr-spicysauce/Learning_react_and_HTML"
            >
                <img src="/emojis/GitHubLogo.png"></img>
                <div>GitHub Page</div>
            </a>

            <a href="./" className="burger-menu-github">
                <img src="/emojis/PhoneTwitterEmoji.png"></img>
                Contact me!
            </a>
        </div>
    )
}
