import HomePage from "./container/HomePage";
import Header from "./container/Header";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <Header />
      <HomePage />
    </QueryClientProvider>
  );
}

export default App;
