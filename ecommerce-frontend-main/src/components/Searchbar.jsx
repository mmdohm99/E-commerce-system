import SearchIcon from '@material-ui/icons/Search'
import '../styles/searchbar.css'


const SearchBar = ({ value, changeInput}) => {
    return (  
        <div className='searchBar-wrap'>
            <SearchIcon className='searchBar-icon' />
            <input type='text' placeholder='Enter a produtc name' value={value} onChange={changeInput} /> 
        </div>
    );
}

export default SearchBar; 