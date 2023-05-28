import { Input } from 'antd';
import { useState } from 'react';

function Search({searchFood}) {
    const [searchInput, setSearchInput] = useState("");
    const makeSearch = (e) => {
        setSearchInput(e.target.value);
    }
    return (<form className='search'>
    <label>Search</label>
    <Input name="search" value={searchInput} type="text" onChange={makeSearch} />
    </form>
    )        
}
export default Search