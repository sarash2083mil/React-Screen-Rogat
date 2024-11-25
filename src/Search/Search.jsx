
import React, { useState, useEffect } from "react";
const Search = ({ dataToSearch, searchKey }) => {

    //state = { searchTxt = '' };
    const [searchTxt, setSearchTxt] = useState([]);
    const find = () => {
       // const res = dataToSearch.find((x) => { x[searchKey] == searchTxt });
        const res = dataToSearch.filter(entry => Object.values(entry).some(val => typeof val === "string" && val.includes(searchTxt)));

        if (res && res.length)
            return res;
        return false;
    }
    // componentDidUpdate = (prevProps, prevState) => {
    //     if (prevState.searchTxt != searchTxt) {
    //         setSearchTxt(searchTxt);
    //         find();
    //     }
    // }
    return (<div className="input-container">
        <input type="text" placeholder="Search .."  onChange={(event) => find(event.target.value)}
            style={{ width: "250px", "margin-left": "20px","margin-top": "11px"}}></input>
    </div>);
}

export default Search;