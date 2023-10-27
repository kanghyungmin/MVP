import React, { useEffect } from "react";

function DocumentHandler() {
  useEffect(() => {
    // Access the document object here
    console.log(document.title);
  }, []);

  return <div>Example Component</div>;
}

export default DocumentHandler;
