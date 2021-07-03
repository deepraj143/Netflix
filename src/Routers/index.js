import React from 'react'
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom'
import LandingPage from '../LandingPage'
import MovieDetails from '../MovieDetails' 
import Movie from '../movies.json'
import Badges from '../Component/Badges'
import Confrim from '../Confirm'
const index = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/"><LandingPage/></Route>
                {/* <Route path="/movie/:id"><MovieDetails /></Route> */}
                <Route path="/movie/:id" render={(props) => {
                    const id = props.match.params.id;
                    const data =Object.values(Movie).find(item => item.id === id);
                    if(data) {
                        return <MovieDetails {...props} {...data} />
                    }
                    return <Redirect to="/not-found" />
                    }}>
                </Route>
                <Route exact path="/confirm"><Confrim/></Route>
                <Route exact path="/test"><Badges/></Route>
            </Switch>
        </Router>
    )
}

export default index
