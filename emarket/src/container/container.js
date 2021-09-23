import { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from '../Dashboard/dashboard';
import Login from '../login/login';
import Profile from '../profile/Profile';
import BeforeLogin from './beforeloginpage';
import Register from './register';
import FarmProfile from './../profile/farmerProfile';
import Orders from '../orders/orders';
import AddItem from './addProduct/uploadcontent';
import Shopping from '../shopping/shopping';
import ChartsPage from './reports/reports';
class Container extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/farmer/dashboard" component={Dashboard} />
                        <Route exact path="/" component={BeforeLogin} />
                        <Route exact path="/home" component={BeforeLogin} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/Signup" component={Register} />
                        <Route exact path="/Dashboard" component={Dashboard} />
                        <Route exact path="/profile" component={Profile} />
                        <Route exact path="/Farmerprofile" component={FarmProfile} />
                        <Route exact path="/Order" component={Orders} />
                        <Route exact path="/Addproduct" component={AddItem} />
                        <Route exact path="/shopping" component={Shopping} />
                        <Route exact path="/dashboard/shopping" component={Shopping}/>
                        <Route exact path="/farmer/dashboard/shopping" component={Shopping}/>
                        <Route exact path="/report" component={ChartsPage} />
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default Container;
