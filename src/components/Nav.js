import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic,faBolt } from "@fortawesome/free-solid-svg-icons";


const Nav = ({libraryStatus,setLibraryStatus}) =>{
    return(
        <nav>
            <h1> 
                Charged Up <FontAwesomeIcon icon={faBolt} />
            </h1>
            
            <button onClick={()=> setLibraryStatus(!libraryStatus)}>
                Library
                <FontAwesomeIcon icon={faMusic}/>
            </button>
        </nav>
    );
}

export default Nav;