import { Loader } from './components/Loader/Loader';
import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';

// Ліниве завантаження сторінок
const Home = lazy(() =>
  import('./components/Home/Home').then(module => ({ default: module.Home }))
);
const Tweets = lazy(() =>
  import('./components/Tweets/Tweets').then(module => ({
    default: module.Tweets,
  }))
);

export const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/GOITtestTask/" element={<Home />} />
          <Route path="/GOITtestTask/tweets" element={<Tweets />} />
          <Route path="*" element={<Navigate to="/GOITtestTask/" />} />
        </Routes>
      </Suspense>
    </Router>
  );
};
