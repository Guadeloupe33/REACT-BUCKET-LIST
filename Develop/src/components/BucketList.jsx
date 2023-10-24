import React, { useState } from 'react';
import BucketForm from './BucketForm';
import Bucket from './Bucket';

function BucketList() {
  const [bucket, setBucket] = useState([]);

  // Function to add a bucket list item
  const addBucketItem = (item) => {
    // Add the new bucket item to the bucket state variable
    setBucket([...bucket, item]);
  };

  // Function to mark bucket list item as complete or incomplete
  const completeBucketItem = (id) => {
    // Update the bucket state variable
    const updatedBucket = bucket.map((item) => {
      if (item.id === id) {
        item.completed = !item.completed; // Toggle completeness
      }
      return item;
    });

    setBucket(updatedBucket);
  };

  // Function to remove bucket list item and update state
  const removeBucketItem = (id) => {
    // Filter out items with the specified ID
    const updatedBucket = bucket.filter((item) => item.id !== id);

    // Update the bucket state variable
    setBucket(updatedBucket);
  };

  // Function to edit the bucket list item
  const editBucketItem = (itemId, newValue, newEagerness) => {
    if (!newValue.text) {
      return;
    }

    // Map through the existing items and update the one with the matching ID
    setBucket((prev) =>
      prev.map((item) =>
        item.id === itemId ? { ...item, text: newValue.text, eagerness: newEagerness } : item
      )
    );
  };

  return (
    <div>
      <h1>What is on your bucket list?</h1>
      <BucketForm onSubmit={addBucketItem} />
      <Bucket
        bucket={bucket}
        completeBucketItem={completeBucketItem}
        removeBucketItem={removeBucketItem}
        editBucketItem={editBucketItem}
      ></Bucket>
    </div>
  );
}

export default BucketList;
