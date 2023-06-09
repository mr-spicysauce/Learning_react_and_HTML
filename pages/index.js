import Burger from "@/components/Burger"
import Menu from "@/components/Menu"
import Head from "next/head"
import { useState } from "react"

export default function Home() {
    const [menu_open, set_menu_open] = useState(false)
    const ToDoList = ["test1", "test2", "test3"]
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

                <div className="h1-div">
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
                <div className="header-container">
                    <img
                        width={"300"}
                        height={"96"}
                        src="/emojis/ReactLogos.png"
                    ></img>
                    <h2>Initial Thoughts And Ideas</h2>
                </div>

                <div className="paragraph-container">
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
                        "blog" website in preparation for my future collage
                        assignment.
                    </p>
                    <p>
                        One good thing that stands out to me the most is how the
                        "id" and "className" work and how it can be called in
                        any file. I do most of my coding in the Godot game
                        engine and if I want to use a function from another
                        script I have to reference the script file path and save
                        it as a variable then call the function. However if I
                        want to add the className "main-container" to a div I
                        can just do that without having to reference
                        globals.css! All I need to do is import
                        "@/styles/globals.css" into the main app.js script and
                        it will be loaded for everything! This helps to stop
                        massive, ugly and un-optimized code such as this, which
                        is for loading variable from another script:
                    </p>
                    <img
                        width={"950px"}
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
                    <p>
                        One this I don't like about the class and ID system is
                        that if I want to give something specific, specific
                        properties I have to make a new ID for each one. However
                        as I am typing this I have been informed by EnderDev
                        that for things like images I can set the width and
                        height in the same section that I can ID's and
                        classNames so I wont need to make a million different
                        ID's for each image!
                    </p>

                    <p>
                        One of the hardest things for me to understand and use
                        are the "if statements" and the variable in react and
                        how to use them to make buttons to open and close menus
                        and to animate things. From what I have learnt so far is
                        that you need to make a const that holds a
                        variable(bool) and then a function to switch it from
                        false to true and then set the useState. Then you need
                        to pass them into a something, im not sure what to call
                        this "set_open= set_menu_open open= menu_open" and then
                        on the pages or components that you want to use these
                        variables in you need to add it in the function part at
                        the top of each js script. I think I have got that right
                        and its a very bad explanation of this, but I can
                        understand it, maybe EnderDev will edit this part of the
                        website hahaha.
                    </p>
                </div>

                <div className="header-container">
                    <h2>What to do next?</h2>
                    <img
                        width={"125"}
                        height={"100"}
                        src="/emojis/ThinkingEmoji.png"
                    ></img>
                </div>

                <div className="paragraph-container">
                    <p>
                        From here I will continue to expand on this website and
                        just repeat type as much of the thing I have learnt
                        already and not copy and paste them from other parts of
                        scripts so I can fully learn the bare basics before I
                        get ahead of myself like I do most the time when
                        learning something new. Here is a check list on what I
                        need to do for this website:
                    </p>

                    <p>(Have not learnt how to render lists properly)</p>

                    <p>
                        Soon after I have finished this website I will go on to
                        make my own website for myself with links to every such
                        as discord github etc etc. I am not sure what kind of
                        website I want to make but I think it will be a lot of
                        fun and very practical and will give me a lot of space
                        to apply my knowledge and learn. I want to focus more on
                        animations and media for my own websites as this one is
                        very static and I have so many complicated idea I want
                        to try!
                    </p>

                    <p>
                        The entire reason I am learning react and HTML is for an
                        upcoming "learning to make websites" assignment where we
                        are meant to design, plan and then code the websites
                        similar to the{" "}
                        <a href="https://github.com/mr-spicysauce/4.2-college-assignment">
                            4.2 programming assignment
                        </a>{" "}
                        I did recently. However this time I want to do it
                        "properly" and make a really nice website and get top
                        marks and hopefully have the best looking website in the
                        class. We are suppose to make this website in only HTML
                        and CSS however just like 4.2 we can do it however we
                        want as long as we document our bad code and link any
                        library's we used etc etc. Anyway after listing to
                        EnderDev rant on about how powerful react is and how it
                        is used with almost everything including desktop apps
                        and games, I thought it would be one of the better
                        things to learn over the easter holiday break.
                    </p>
                </div>
            </main>
        </>
    )
}
