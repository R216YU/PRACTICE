import Footer from "./components/Footer";
import Header from "./components/Header";
import Todolist from "./components/Todolist";

function App() {
  return (
    <div className="container mx-auto">
      <Header />
      <Todolist />
      <Footer />
    </div>
  );
}

export default App;
