import React from 'react';
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';


function SearchPanel(props) {
    const dispatch = useDispatch()
    const searchString = useSelector(state => state.searchString)
    let str = ""
    const writeSearchString = (string) => {
        dispatch({type:"WRITE_SEARCHSTRING", payload: string})
    }

    function handleSubmit(e) {
        writeSearchString(str)
        console.log(searchString);
        e.preventDefault();
    }

    function click() {
        alert(searchString)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
            Name:
            <input type="text" value={str} onChange={handleSubmit} />
            </label>
            <input type="submit" value="Submit" onClick={click}/>
        </form>
      );
}

export default SearchPanel;