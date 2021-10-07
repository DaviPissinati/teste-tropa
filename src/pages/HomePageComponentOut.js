import React from 'react';
import { useRouteMatch, Switch, Route } from 'react-router-dom';
import PageComponent from '../presentation/PageComponent';
import SideBarComponent from '../presentation/SideBarComponent';

export default function HomePageComponentOut() {

    let { path } = useRouteMatch();
    let container = {
        justifyContent: 'space-between',
        display: 'flex'
    }
    return (
        <div style={container}>
            
            <PageComponent
                // titletxt={"Home"}
                body={
                    <>
                        <SideBarComponent />
                        <Switch>
                            <Route exact path={path}>
                                <h3>Please select a topic.</h3>
                            </Route>
                            <Route path={`${path}/:topicId`}>
                                <>

                                </>
                            </Route>
                        </Switch>
                    </>
                }
            />
        </div>
    );
}


