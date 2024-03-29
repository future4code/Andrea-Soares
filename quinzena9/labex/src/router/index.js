import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AppBarApp from '../components/AppbarApp/AppBarApp';
import HomePage from '../components/HomePage/HomePage';
import ListTripPage from '../components/ListTripsPage/ListTripsPage';
import ApplicationFormPage from '../components/ApplicationFormPage/ApplicationFormPage';
import LoginPage from '../components/LoginPage/LoginPage';
import CreateTripPage from '../components/CreateTripPage/CreateTripPage';
import TripDetailspage from '../components/TripDetailsPage/TripDetailsPage';
import AdminPage from '../components/AdminPage/AdminPage';
import ErrorPage from '../components/ErrorPage/ErrorPage';


const Router = () => {
    return(
        <BrowserRouter>
        <AppBarApp />
        <Switch>
        
            <Route exact path='/'>
                <HomePage />
                
            </Route>

            <Route exact path='/trips/list'>
                <ListTripPage />
            </Route>

            <Route exact path='/application-form/:id'>
                <ApplicationFormPage />
            </Route>

            <Route exact path='/login'>
                <LoginPage />
            </Route>

            <Route exact path='/trips/create'>
                <CreateTripPage />
            </Route>

            <Route exact path='/trips/details/:id'>
                <TripDetailspage />
            </Route>

            <Route exact path='/admin'>
                <AdminPage />
            </Route>

            <Route> 
                <ErrorPage />
            </Route>

        </Switch>
        </BrowserRouter>
    )
}

export default Router;