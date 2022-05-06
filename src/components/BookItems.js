import React from 'react';

import { useState } from 'react';

import Data from '../assets/data/data.js';

function BookItems() {
  const [BookItems, setBookItems] = useState(Data);
  return (
    <div className='booklistcontainer'>
      {BookItems.map((props) => {
        const { id, title, author, star, image_url } = props;
        return (
          <div className='bookitem' key={id}>
            <img src={image_url} alt={title} />
            <p className='booktitle'>{title}</p>
            <p className='bookauthor'>{author}</p>
            <p className='bookrating'>{star}</p>
          </div>
        );
      })}
    </div>
  );
}

export default BookItems;
