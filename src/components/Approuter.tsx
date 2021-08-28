import React, { Suspense } from 'react';
import { Route, Redirect, Switch, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Dashboard from '../pages/Dashboard';
import About from '../pages/About';
import Error from '../pages/Error';

const navData = [
  {
    Component: <Dashboard />,
    path: '/',
  },
  {
    Component: <About />,
    path: '/about',
  },
  {
    Component: <Error />,
    path: '/error',
  },
];

const Content = (): JSX.Element => {
  const location = useLocation();
  return (
    <TransitionGroup>
      <CSSTransition timeout={10} classNames="example" key={location.key}>
        <Switch>
          {navData.map(
            ({ Component, path }): JSX.Element => (
              <Route path={path} exact key={path.toString()}>
                {Component}
              </Route>
            )
          )}
          <Redirect to="/error" />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
};

const Approuter = (): JSX.Element => (
  <Suspense fallback={<div>Loading...</div>}>
    <Content />
  </Suspense>
);

export default Approuter;
