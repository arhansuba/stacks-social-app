# Stacks Social App

## Overview
Stacks Social App is a decentralized social media platform built on the Stacks blockchain. It allows users to connect their Stacks wallet, post messages, view posts from other users, and tip content creators using STX tokens.

This project was created for the Bitcoin Virtual Hackathon organized by Stacks Latam & ICP HUB Mexico.

## Features
- Wallet integration using Stacks Connect
- Post messages to the Stacks blockchain
- View posts from all users
- Tip authors with STX tokens (smart contract function available, UI to be implemented)

## Technologies Used
- React.js
- Stacks.js
- Clarity (for smart contracts)

## Setup and Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-username/stacks-social-app.git
   cd stacks-social-app
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory and add your contract address:
   ```
   REACT_APP_CONTRACT_ADDRESS=your_contract_address_here
   ```

4. Deploy the smart contract:
   - Install Stacks CLI: `npm install -g @stacks/cli`
   - Deploy the contract: `stx deploy_contract social-app ./src/contracts/social-app.clar`
   - Update the contract address in your `.env` file

5. Start the development server:
   ```
   npm start
   ```

6. Open `http://localhost:3000` in your browser

## Smart Contract
The smart contract (`social-app.clar`) includes the following functions:
- `post-message`: Post a new message
- `get-posts`: Retrieve all posts
- `tip-author`: Send STX tokens to a post author

## Future Enhancements
- Implement UI for tipping authors
- Add user profiles
- Implement follow/unfollow functionality
- Create a token economy for content creators
- Add NFT functionality for special posts or achievements
- Improve UI/UX design
- Integrate with Internet Computer Protocol for enhanced scalability

## Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

## License
This project is open source and available under the [MIT License](LICENSE).

## Contact
For any questions or feedback, please contact [Your Name] at [your.email@example.com].# stacks-social-app
