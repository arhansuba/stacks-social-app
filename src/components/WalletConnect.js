import React from 'react';
import { useConnect } from '@stacks/connect-react';

function WalletConnect() {
  const { authenticate, authOptions } = useConnect();

  const connectWallet = () => {
    authenticate(authOptions);
  };

  return (
    <button onClick={connectWallet}>Connect Wallet</button>
  );
}

export default WalletConnect;