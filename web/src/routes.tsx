import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './pages/landing';
import TeacherList from './pages/landing/TeacherList';
import TeacherForm from './pages/landing/TeacherForm';

function Routes() {

    return (

        <BrowserRouter>

            <Route path="/" exact component={Landing} />
            <Route path="/study" component={TeacherList} />
            <Route path="/give-classes" component={TeacherForm} />

        </BrowserRouter>


    )

}

export default Routes; 