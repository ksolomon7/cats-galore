import React from 'react'
import CatTile from './CatTile.jsx'

const CatsContainer = (props) => {
  // write logic here for iterating through the cats array and returning a CatTile for each cat instance
  let cats= props.cats.map((cat)=>{
    return <CatTile key={cat.id} cat={cat} />
  })
  return(
    <div className="cat-container">   
      {cats}
    </div>
  )
}

export default CatsContainer