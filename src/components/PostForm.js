import React, { useState } from 'react';
import { useConnect } from '@stacks/connect-react';
import { StacksTestnet } from '@stacks/network';
import { callReadOnlyFunction, cvToValue, uintCV, stringUtf8CV } from '@stacks/transactions';

function PostForm() {
  const [content, setContent] = useState('');
  const { doContractCall } = useConnect();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const functionArgs = [
      stringUtf8CV(content),
    ];

    await doContractCall({
      network: new StacksTestnet(),
      contractAddress: process.env.REACT_APP_CONTRACT_ADDRESS,
      contractName: 'social-app',
      functionName: 'post-message',
      functionArgs,
      onFinish: (data) => {
        console.log('Transaction ID:', data.txId);
        setContent('');
      },
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="What's on your mind?"
      />
      <button type="submit">Post</button>
    </form>
  );
}

export default PostForm;