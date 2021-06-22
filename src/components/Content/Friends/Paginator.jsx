import React from 'react';
import styles from './Paginator.module.css';


const Paginator = ({totalCount, pageSize, currentPage, onChangePage, portionSize = 10})=> {
  let pagesCount = Math.ceil(totalCount / pageSize);
  
  let pagesArray = [];
  for(let i=1; i<=pagesCount; i++) {
	  pagesArray.push(i);
  }
  
  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = React.useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;
  
  
  return (
	<div className={styles.paginator}>
		{portionNumber > 1 && <button className={styles.stylesButton} onClick={()=> {setPortionNumber(portionNumber - 1)}}>Prev</button>}
		
		{pagesArray.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber).map((p) => {
			return <span className={styles.stylesNumber} key={p} onClick={(e)=> onChangePage(p)}>{p}</span>})}

		{portionCount > portionNumber && <button className={styles.stylesButton} onClick={()=> {setPortionNumber(portionNumber + 1)}}>Next</button>}
		</div>
   )
}

export default Paginator;