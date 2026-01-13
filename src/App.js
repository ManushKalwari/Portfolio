import Header from "./components/Header/Header";
import Portfolio from "./components/Portfolio/Portfolio";
import Footer from "./components/Footer/Footer";
import './App.css';

function App() {
  return (
    <>
      {/* Background blobs behind everything */}
      <div className="background"></div>

      {/* Your main content */}
      <div className="container">
        <Header />
        <main className="main">
          <Portfolio />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;