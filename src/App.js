import './App.css'
import Analysis from './components/Analysis'
import AverageRating from './components/AverageRating'
import Reviews from './components/Reviews'
import Dashboard from './components/Sentiment'
import WebsiteVisitors from './components/WebsiteVisitors'




function App() {
  return (
    <div className="App">
      <>
      <div className="Dashboard"><Dashboard/></div>
      <div className="Analysis"><Analysis/> </div>
     <div className="AverageRating"> <AverageRating/> </div>
      <div className="Reviews"><Reviews/> </div>
      <div className="WebsiteVisitors"><WebsiteVisitors/> </div>
      </>
    </div>
  );
}

export default App;
