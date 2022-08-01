import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass as searchIcon } from '@fortawesome/free-solid-svg-icons'
function Search() {
    return (
        <div className="search-wrap mr-16">
            <input type="text" className="search" />
            <button className="search-btn"><FontAwesomeIcon icon={searchIcon} /></button>      
        </div>
    )
}
export default Search;