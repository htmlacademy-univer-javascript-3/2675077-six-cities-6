import React from 'react';
import MainPage from '../MainPage/MainPage';

interface AppProps {
  offersCount: number;
}

const App: React.FC<AppProps> = ({ offersCount }) => <MainPage offersCount={offersCount} />;

export default App;
