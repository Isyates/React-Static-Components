
import './App.css';
import Analysis from './components/Analysis'
import AverageRating from './components/AverageRating'
import Reviews from './components/Reviews'
import Dashboard from './components/Sentiment'
import WebsiteVisitors from './components/WebsiteVisitors'




function App() {
  return (
    <div className="App">
      <Analysis />
      <AverageRating/>
      <Reviews/>
      <Dashboard/>
      <WebsiteVisitors/>
    </div>
  );
}

export default App;
