import "../styling/styles.css"
import mobo from "../resources/mobo.jpg"
import connected from "../resources/connected.jpg"
import react from "../resources/react.jpg"
import tempLogo from "../resources/TempLogo.png"
import code from "../resources/code.jpg"


const App = () => {
  return (
    <div class="main">
        <nav class="nav">
            <img src={tempLogo} />
            <ul class="nav-list">
                <li class="nav-list__item"><a href="#0">Home</a></li>
                <li class="nav-list__item"><a href="#2">About</a></li>
                <li class="nav-list__item"><a href="#1">Blog</a></li>
                <li class="nav-list__item"><a href="#3">Services</a></li>
                <li class="nav-list__item"><a href="#4">My Work</a></li>
                <li class="nav-list__item"><a href="#5">Contact</a></li>
            </ul>
        </nav>
        <header class="header hero">
            <div class="header__text-box">
                <h1 class="header__title">
                    Together, we'll make it happen.
                </h1>
                <button class="btn header__btn">Let's Connect</button>
            </div>
        </header>
        <div class="spacer"></div>
        <div class="content">
            <section>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed arcu diam, condimentum vel lacus quis, ultrices pellentesque eros. Proin a tortor pretium, congue ante eu, ultricies orci. Duis sed imperdiet nisl. Maecenas vel diam tincidunt, dapibus ligula sed, pulvinar lacus. Cras molestie consectetur nisl, eu sollicitudin elit finibus quis. Vestibulum fermentum ultrices ultricies. Nunc at nunc a elit interdum fringilla. Proin finibus neque orci, eget dictum velit bibendum et. Maecenas id sapien accumsan sapien rhoncus lobortis ac sed nisl.</p>
                <img src={mobo} />
            </section>
            <section>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed arcu diam, condimentum vel lacus quis, ultrices pellentesque eros. Proin a tortor pretium, congue ante eu, ultricies orci. Duis sed imperdiet nisl. Maecenas vel diam tincidunt, dapibus ligula sed, pulvinar lacus. Cras molestie consectetur nisl, eu sollicitudin elit finibus quis. Vestibulum fermentum ultrices ultricies. Nunc at nunc a elit interdum fringilla. Proin finibus neque orci, eget dictum velit bibendum et. Maecenas id sapien accumsan sapien rhoncus lobortis ac sed nisl.</p>
                <img src={connected} />
            </section>
            <section>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed arcu diam, condimentum vel lacus quis, ultrices pellentesque eros. Proin a tortor pretium, congue ante eu, ultricies orci. Duis sed imperdiet nisl. Maecenas vel diam tincidunt, dapibus ligula sed, pulvinar lacus. Cras molestie consectetur nisl, eu sollicitudin elit finibus quis. Vestibulum fermentum ultrices ultricies. Nunc at nunc a elit interdum fringilla. Proin finibus neque orci, eget dictum velit bibendum et. Maecenas id sapien accumsan sapien rhoncus lobortis ac sed nisl.</p>
                <img src={react} />
            </section>
            <section>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed arcu diam, condimentum vel lacus quis, ultrices pellentesque eros. Proin a tortor pretium, congue ante eu, ultricies orci. Duis sed imperdiet nisl. Maecenas vel diam tincidunt, dapibus ligula sed, pulvinar lacus. Cras molestie consectetur nisl, eu sollicitudin elit finibus quis. Vestibulum fermentum ultrices ultricies. Nunc at nunc a elit interdum fringilla. Proin finibus neque orci, eget dictum velit bibendum et. Maecenas id sapien accumsan sapien rhoncus lobortis ac sed nisl.</p>
                <img src={tempLogo} />
            </section>
            <section>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed arcu diam, condimentum vel lacus quis, ultrices pellentesque eros. Proin a tortor pretium, congue ante eu, ultricies orci. Duis sed imperdiet nisl. Maecenas vel diam tincidunt, dapibus ligula sed, pulvinar lacus. Cras molestie consectetur nisl, eu sollicitudin elit finibus quis. Vestibulum fermentum ultrices ultricies. Nunc at nunc a elit interdum fringilla. Proin finibus neque orci, eget dictum velit bibendum et. Maecenas id sapien accumsan sapien rhoncus lobortis ac sed nisl.</p>
                <img src={code} />
            </section>
        </div>
        <div class="footer">
            Footer
        </div>
    </div>
  )
}

export default App