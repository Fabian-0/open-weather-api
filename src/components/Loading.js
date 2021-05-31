import React from "react";
import '../assets/css/loading.css';

function Loading() {
  return(
    <div className="loading">
      <div className="loadingCircle">
        <div className="loadingCircleChild"></div>
      </div>
    </div>
  );
}

export default Loading;