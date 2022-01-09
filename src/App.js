import Header from './components/Header/Header.js'
import Main from './pages/Main/Main.js'
import Footer from './components/Footer/Footer.js'
import ChatSection from './components/Chat_Section/Chat_Section.js';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
      <ChatSection></ChatSection>
    </div>
  );
}

export default App;
