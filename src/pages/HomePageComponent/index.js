import React from 'react';
import { useRouteMatch, Switch, Route, Link } from 'react-router-dom';
import PageComponent from '../../presentation/PageComponent';

import PageTitleGenericComponent from '../../presentation/generics/PageTitleGenericComponent';
import '../HomePageComponent/style.css';
import SideBarComponent from '../../presentation/SideBarComponent';

export default function HomePageComponent() {

    let { path, url } = useRouteMatch();
    // let container = {
    //     justifyContent: 'space-between',
    //     display: 'flex'
    // }
    return (
        <section className="home">
            <div className="container">
                <SideBarComponent />
                <Switch>
                    <Route exact path={path}>
                        <PageComponent />
                    </Route>
                    <Route path={`${path}/:pageId`}>
                        <PageComponent />
                    </Route>
                </Switch>
            </div>
        </section>
    );
}


