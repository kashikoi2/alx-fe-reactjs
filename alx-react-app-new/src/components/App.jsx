import Header from './components/Header';
import UserProfile from './components/UserProfile';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Counter from './components/Counter';

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <UserProfile name="Alice" age={25} bio="Loves traveling and exploring new cultures." />
      <UserProfile name="Bob" age={30} bio="Foodie and history enthusiast." />
      <Counter />
      <Footer />
    </div>
  );
}

export default App;
