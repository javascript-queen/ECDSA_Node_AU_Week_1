import React from 'react'

const AllowedAddress = () => {
  function copy(text) {
    navigator.clipboard.writeText(text)
  .then(() => {
    console.log(`Copied text to clipboard: ${text}`);
    // alert(`Copied text to clipboard: ${text}`);
  })
  .catch((error) => {
    console.error(`Could not copy text: ${error}`);
  });
  }

  return (
    <div>
      <h1>Allowed  Addresses:</h1>
      <div className="app">
        <button className="button" onClick={() => navigator.clipboard.writeText("030b4f83673ea47a991c7888bdeb5a7e8aefe4b19f5a9340a7bf4738f65fc767ea")}>1</button>
        <button className="button" onClick={() => navigator.clipboard.writeText("02bd0f6d77c0dd63efd6ff5df25c135bf6a8d4acdcd04519df3833c7cab1c26b3c")}>2</button>
        <button className="button" onClick={() => navigator.clipboard.writeText("02e8e1d2e76a2545e0453cb740628d6d13deccb44818be13339bb428d7af5718cc")}>3</button>
      </div>
    </div>
  )
}

export default AllowedAddress
