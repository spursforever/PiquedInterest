import { useState, useEffect, useRef } from 'react';
import {  Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import "./search.css"

const Search = () => {
 const [searchWord, setSearchWord ] = useState('')
 const [searchresult, setSearchResult] = useState([])
 const searchBar = useRef()
//  const history = useHistory()
 const pins = useSelector(state => Object.values(state?.pin))
 useEffect(() => {
    if ( searchWord.length > 0) {
      const result = pins.filter((pin) => {
         return (
            pin?.title.toLowerCase().indexOf(searchWord.toLowerCase()) > -1 ||
            pin?.description.toLowerCase().indexOf(searchWord.toLowerCase()) > -1
         )
      })
      setSearchResult(result)
    }
 }, [searchWord])

 useEffect(() => {
   if (searchWord.length > 0) {
      searchBar.current.style.display = 'flex'
   }
 }, [searchWord])
 return (
   <form className='searchForm'>
      <div>
         <input
         className='searchInput'
         onClick={e=> searchBar.current.style.display = 'flex'}
         placeholder='Search your pin'
         value={searchWord}
         type="text"
         onChange={(e) => setSearchWord(e.target.value)}
         autoComplete='on'
         >
         </input>
         <div id="search-result" ref={searchBar} onMouseLeave={ e => {
            searchBar.current.style.display = 'none'
         }}>
         {searchresult?.map(pin => <Link to={`/pins/${pin?.id}`}  key={pin?.id} className="pin-result" > {pin?.title}</Link>)}
         </div>
      </div>
      </form>
 )
}

export default Search