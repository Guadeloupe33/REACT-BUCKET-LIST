import React, { useState } from 'react';

function Bucket(props) {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
    eagerness: '',
  });

  console.log(props.bucket);

  const submitUpdate = (id, newValue, newEagerness) => {
    // Call the editBucketItem prop with the supplied values
    props.editBucketItem(id, newValue, newEagerness);

    // Set the key-value pairs in the `edit` object back to empty strings
    setEdit({
      id: null,
      value: '',
      eagerness: '',
    });
  };

  return props.bucket.map((item, index) => (
    <div
      className={`bucket-row ${item.completed ? 'complete' : ''} ${item.eagerness}`}
      key={index}
    >
      <div onClick={() => props.completeBucketItem(item.id)}>
        {item.text}
      </div>
      <div className="icons">
        <p
          onClick={() =>
            setEdit({ id: item.id, value: item.text, eagerness: item.eagerness })
          }
        >
          ✏️
        </p>
        <p onClick={() => props.removeBucketItem(item.id)}> 🗑️</p>
      </div>
    </div>
  ));
}

export default Bucket;
