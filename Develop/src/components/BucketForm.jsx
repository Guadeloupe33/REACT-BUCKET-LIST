import React, { useState } from 'react';

function BucketForm(props) {
  const [input, setInput] = useState('');
  const [eagerness, setEagerness] = useState('');

  const eagernessLevel = ['high', 'medium', 'low'];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!eagerness) {
      setEagerness('low');
    }

    const newItem = {
      id: props.edit ? props.edit.id : Math.random(), // Use existing ID for edits, generate a new one for new items
      text: input,
      eagerness: eagerness,
    };

    props.onSubmit(newItem);

    setInput('');
    setEagerness('');
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleEagernessClick = (level) => {
    setEagerness(level);
  };

  return !props.edit ? (
    <div>
      <form className="bucket-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add to your bucket list"
          value={input}
          name="text"
          className="bucket-input"
          onChange={handleChange}
        ></input>
        <div className="dropdown">
          <button className={`dropbtn ${eagerness}`}>
            {eagerness || 'Priority'}
          </button>
          <div className="dropdown-content">
            {eagernessLevel.map((level) => (
              <p key={level} onClick={() => handleEagernessClick(level)}>
                {level}
              </p>
            ))}
          </div>
        </div>
        <button className="bucket-button">Add bucket list item</button>
      </form>
    </div>
  ) : (
    <div>
      <h3>Update entry: {props.edit.value}</h3>
      <form className="bucket-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder={props.edit.value}
          value={input}
          name="text"
          className="bucket-input"
          onChange={handleChange}
        ></input>
        <div className="dropdown">
          <button className={`dropbtn ${eagerness}`}>
            {eagerness || 'Priority'}
          </button>
          <div className="dropdown-content">
            {eagernessLevel.map((level) => (
              <p key={level} onClick={() => handleEagernessClick(level)}>
                {level}
              </p>
            ))}
          </div>
        </div>
        <button className="bucket-button">Update</button>
      </form>
    </div>
  );
}

export default BucketForm;
