import React from "react";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>try again</button>
    </div>
  );
}

export default ErrorFallback;
