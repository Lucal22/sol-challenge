import HomePage from "./container/HomePage";
import Header from "./container/Header";
import { QueryClient, QueryClientProvider } from "react-query";
import { CategoryFilterContextProvider } from "./context/category-filter-context";
import Footer from "./container/Footer";
import BookPage from "./container/BookPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <CategoryFilterContextProvider>
        <Header />
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/:id" element={<BookPage />} />
          </Routes>
        </Router>
        <Footer />
      </CategoryFilterContextProvider>
    </QueryClientProvider>
  );
}

export default App;
