import { AiOutlineSearch } from 'react-icons/ai';
import './Search.css';

function Search() {
    return (
        <div className="Search-bar d-flex flex-row justify-content-center  pb-5 rounded-pill">
            <div className="search-input-container d-flex justify-content-center rounded-pill">
                <input type="text" className="rounded-pill pt-4 pb-4 ps-4" placeholder="Search by" />
                <button className="search-containe me-3 rounded-circle d-flex justify-content-center align-items-center" >
                    <AiOutlineSearch className="search-containe-icon" />
                </button>
            </div>
        </div>
    );
}
export default Search;
