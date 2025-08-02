import photo from '../assets/react.svg';
function Navbar() {
    return (
        <header>
            <nav>
                <img src={photo} alt />
                <p>ReactFacts</p>
            </nav>
        </header>
    )
}

export default Navbar;
