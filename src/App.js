import "./App.css";
import Header from "./componens/Header";
import Navbar from "./componens/Navbar";
import Profile from "./componens/Profile";

const App = () => {
    return (
        <div className="appWrapper">
          <Header/>
          <Navbar/>
          <Profile/>
        </div>
    );
};

export default App;
