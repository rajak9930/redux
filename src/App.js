import { ErrorBoundary } from "react-error-boundary";
import Index from "./lazy/Index";

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorBoundary}>
      <Index />
    </ErrorBoundary>
  );
}

export default App;
