import { useState, useEffect, useRef } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

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
   <form>
      <div>
         <input
         onClick={e=> searchBar.current.style.display = 'flex'}
         placeholder='Search your pin'
         value={searchWord}
         type="text"
         onChange={(e) => setSearchWord(e.target.value)}
         autoComplete='on'
         >
         </input>
         <div ref={searchBar} onMouseLeave={ e => {
            searchBar.current.style.display = 'none'
         }}>
         {searchresult?.map(pin => <Link to={`/pins/${pin?.id}`}> {pin?.title}</Link>)}
         </div>
      </div>
      </form>
 )
}

export default Search