import React from 'react';
import { Connect } from '@stacks/connect-react';
import WalletConnect from './components/WalletConnect';
import PostForm from './components/PostForm';
import PostList from './components/PostList';

function App() {
  return (
    <Connect
      authOptions={{
        appDetails: {
          name: 'Stacks Social App',
          icon: window.location.origin + '/logo.png',
        },
        redirectTo: '/',
        onFinish: () => {
          window.location.reload();
        },
      }}
    >
      <div className="App">
        <h1>Stacks Social App</h1>
        <WalletConnect />
        <PostForm />
        <PostList />
      </div>
    </Connect>
  );
}

export default App;