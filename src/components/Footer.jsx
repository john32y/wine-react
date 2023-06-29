const currentYear = new Date().getFullYear();
const gitHubUrl ="https://github.com/john32y";
export default function Footer() {

    return (
        <footer>
            <p>&copy;{currentYear}</p>
            <p><a href="" target="blank" rel="noreferrer">See Code in Github</a></p>
        </footer>
    );
}