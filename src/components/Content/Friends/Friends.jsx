import React from 'react';
import classes from './Friends.module.css';
import {NavLink} from 'react-router-dom';
import Paginator from './Paginator';


const Friends = ({currentPage, totalCount, pageSize, onChangePage, users, ...props}) => {

  let user = users.map(elem => {
	return <div className={classes.friends_user}>
			<NavLink to={'/profile/' + elem.id}>
				<div>
					<img src={elem.photos.large ?  elem.photos.large : 'https://pbs.twimg.com/media/DY0kJ48WkAAnS3V.jpg:large'} />
				</div>
			</NavLink>
			<div>
				<p>{elem.name}</p>
			</div>
			<div>
			{elem.followed 
				?<button disabled={props.isProgress.some(id => id === elem.id)} onClick={()=> props.unsubscribe(elem.id)}>Удалить</button>
				:<button disabled={props.isProgress.some(id => id === elem.id)} onClick={()=> props.subscribe(elem.id)}>Добавить</button>
			}
			</div>
		</div>
  });
  
  return (
    <div className={classes.friends_block}>
		<div>
			<Paginator
				currentPage={currentPage}
				onChangePage={onChangePage}
				totalCount={totalCount}
				pageSize={pageSize}
			/>
		</div>
		{user}
    </div>
  );
}

export default Friends;
