import React, { useState } from 'react';
import CardBody from './CardBody';

// TODO: Add a comment explaining what export default does
// Allows other components to use it - exposes to others
export default function Counter() {
  // TODO: Add a comment that explains how the useState hook works
  let [count, setCount] = useState(0);

  // TODO: Explain what is happening with this click handler
  const handleIncrement = () => {
    setCount((count + 1));
  };

  // TODO: Explain what is happening with this click handler
  const handleDecrement = () => {
    setCount((count - 1));
  };

  const handleMultiply = () => {
    setCount((count * 2));
  }

  return (
    <div className="card text-center">
      <div className="card-header bg-primary text-white">Click Counter!</div>
      {/* TODO: Add a comment that explains what props are getting passed to CardBody */}
      {/* Counter functions are being passed as props */}
      <CardBody
        count={count}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
        handleMultiply={handleMultiply}
      />
    </div>
  );
}
