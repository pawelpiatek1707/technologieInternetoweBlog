import logo from './logo.svg';
import './App.css';
import { Switch, Route, withRouter } from "react-router";
import Home from './pages/home';
import Blog from './pages/blog';
import About from './pages/about';
import GlobalStyle from './assets/globalStyles';
import GoogleFontLoader from "react-google-font-loader";

function App() {
  return (
    <div className="App">
      <GoogleFontLoader
        fonts={[
          {
            font: 'Montserrat',
            weights: [400, 500, 600, 700],
          },
        ]}
        subsets={['cyrillic-ext', 'greek', 'latin']}
      />
      <GlobalStyle />
      <Switch>
        <Route path="/blog" component={Blog} />
        <Route path="/about" component={About} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
