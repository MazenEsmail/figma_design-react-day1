import photo2 from '../assets/reactjs-icon 2.svg';
function MainPage() {
    return (
        <>
            <main>
                <h1>
                    Fun facts about React
                </h1>
                <ul>
                    <li>Was first released in 2013</li>
                    <li>Was originally created by Jordan Walke</li>
                    <li>Has well over 200K stars on GitHub</li>
                    <li>Is maintained by Meta</li>
                    <li>Powers thousands of enterprise apps, including mobile apps</li>
                </ul>
                <img className="img2" src={photo2} alt />
            </main>

        </>
    )
}

export default MainPage;
