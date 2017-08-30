import React from 'react'
import Button from '../components/button'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const BasicExample = () => (
  <Router>
    <div>
      <ul className="ul-wrapper">
        <li className="li-item"><Link to="/">Home</Link></li>
        <li className="li-item"><Link to="/Button">Button</Link></li>
        <li className="li-item"><Link to="/topics">Topics</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/button" component={Button}/>
      <Route path="/topics" component={Topics}/>
    </div>
  </Router>
)

const Home = () => (
  <div className="title">
    <p>/Home</p> 
  </div>
)

/* const About = () => (
  <div>
    <h2>About</h2>
  </div>
) */

const Topics = ({ match }) => (
  <div>
    <p className="title">Topics</p>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React 
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

export default BasicExample