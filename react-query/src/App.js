import logo from "./logo.svg";
import "./App.css";
import {QueryClientProvider,QueryClient} from 'react-query'
import {ReactQueryDevtools} from 'react-query/devtools'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import HomePage from "./components/Home.page";
import RQSuperHeroesPage from "./components/RQSuperHero.page";
import SuperHeroesPage from "./components/SuperHeroes.page";
import SuperHero from "./components/SuperHero.page";
import ParallelQueries from "./components/ParallelQueries.page";
import DependentQueries from './components/DependentQueries.page'
import PaginatedQuery from "./components/PaginatedQueries.page";
const queryClient=new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryClient}>
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/super-heroes">Traditional heros</Link>
            </li>
            <li>
              <Link to="/rq-super-heroes">RQ heros</Link>
            </li>
          </ul>
        </nav>
        <Routes>
           <Route path="/" element={<HomePage />}/>
           <Route path="/rq-dependent" element={<DependentQueries email="anujvwww.com"/>}/>
           <Route path="/paraller-queries" element={<ParallelQueries />}/>
           <Route path="/paginated-query" element={<PaginatedQuery />}/>
          <Route path="/super-heroes" element={<SuperHeroesPage />}/>
          <Route path="/superhero/:id" element={<SuperHero/>} />

          <Route path="/rq-super-heroes" element={<RQSuperHeroesPage/>} />
           

         
        </Routes>
      </div>
    </Router>
    <ReactQueryDevtools initialsOpen={false} position="bottom-right"/>
    </QueryClientProvider>
  );
}

export default App;
