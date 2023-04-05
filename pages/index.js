import Burger from "@/components/Burger"
import Menu from "@/components/Menu"
import Head from "next/head"
import { useState } from "react"

export default function Home() {
    const [menu_open, set_menu_open] = useState(false)
    return (
        <>
            <Head>
                <title>Learning React HTML</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header id="header-style">
                <div></div>

                <div id="h1-div">
                    <h1>Learning React Website!!!</h1>
                </div>

                <div id="burger-div">
                    <Burger set_open={set_menu_open} open={menu_open}></Burger>
                </div>
            </header>

            <div>
                <Menu open={menu_open}></Menu>
            </div>

            <main className="main-container">
                <div id="header1-container">
                    <img
                        width={"300"}
                        height={"96"}
                        src="/emojis/ReactLogos.png"
                    ></img>
                    <h2>Initial Thoughts And Ideas</h2>
                </div>

                <div id="paragraph-container">
                    <p>
                        With my very limited html knowledge, most of which was
                        learnt within an hour or 2 making{" "}
                        <a href="https://github.com/mr-spicysauce/dumb-Website-tests">
                            this website
                        </a>
                        , I have found react to be very intuitive and simple.
                        With the help of{" "}
                        <a href="https://github.com/EnderDev">this epic man</a>,
                        I was able to learn the basics of react in just 3 days
                        and I was able to make this basic but professional
                        website in preparation for my future collage assignment.
                    </p>
                    <p>
                        One thing that stands out to me the most is how the "id"
                        and "className" work and how it can be called in any
                        file. I do most of my coding in the Godot game engine
                        and if I want to use a function from another script I
                        have to reference the script file path and save it as a
                        variable then call the function. However if I want to
                        add the className "main-container" to a div I can just
                        do that without having to reference globals.css! All I
                        need to do is import "@/styles/globals.css" into the
                        main app.js script and it will be loaded for everything!
                        This helps to stop massive, ugly and un-optimized code
                        such as this:
                    </p>
                    <img
                        width={"800px"}
                        height={"100px"}
                        src="/emojis/BadGodotCode.png"
                    ></img>
                    <p>
                        I don't even need a globals.css to reference it
                        anywhere, I can reference menu.css from anywhere if I
                        wanted to! Its only there for origination or for making
                        a program more secure as you can import the css file on
                        a per script bases so only menu.js can access menu.css.
                    </p>
                </div>
            </main>
        </>
    )
}
