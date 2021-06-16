import "../styling/styles.css"


const App = () => {
  return (
    <div class="main">
        <nav class="nav">
            <div class="logo nav__logo">Logo</div>
            <ul class="nav-list">
                <li class="nav-list__item">Home</li>
                <li class="nav-list__item">Blog</li>
                <li class="nav-list__item">About</li>
                <li class="nav-list__item">Services</li>
                <li class="nav-list__item">My Work</li>
                <li class="nav-list__item">Contact</li>
            </ul>
        </nav>
        <header class="header">
            Header
        </header>
        <div class="content">
            Content
        </div>
        <div class="footer">
            Footer
        </div>
    </div>
  )
}

export default App