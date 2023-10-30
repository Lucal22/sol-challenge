import HomePage from "./container/HomePage";
import Header from "./container/Header";
import { QueryClient, QueryClientProvider } from "react-query";
import { CategoryFilterContextProvider } from "./context/category-filter-context";
import Footer from "./container/Footer";

function App() {
  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <CategoryFilterContextProvider>
        <Header />
        <HomePage />
        <Footer />
      </CategoryFilterContextProvider>
    </QueryClientProvider>
  );
}

export default App;
