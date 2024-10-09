# Viora API

This repository contains the API for **Viora**, a decentralized crowdfunding platform built on the Solana blockchain. The API is responsible for managing user profiles, artist data, campaign information, and the integration between the mobile app, website, and blockchain (Solar-flare Solana program). It also handles custodial wallet management for artists and fans.

## 📋 Prerequisites

Before running the API, make sure you have the following installed:

- **Node.js** (version >= 20.14.0)
- **Yarn** (preferred) or npm
- **Strapi** (latest version)
- **PostgreSQL** (or any preferred database)
- Access to **Solana CLI** for interaction with the blockchain
- The **Anchor framework** for interacting with the Solana program

## 🚀 Installation Steps

Follow these steps to install and set up the API locally:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/viora-app/viora-api.git
    cd viora-api
    ```

2. **Install dependencies:**

    ```bash
    # Using Yarn
    yarn install

    # OR using npm
    npm install
    ```

3. **Set up the database:**

    You can use **PostgreSQL** or any other supported database by Strapi. 

4. **Set up environment variables:**

    Create a `.env` file in the root directory to store your environment variables, including database credentials and Solana RPC URLs:

    ```bash
    DATABASE_HOST=localhost
    DATABASE_PORT=5432
    DATABASE_NAME=viora
    DATABASE_USERNAME=your_username
    DATABASE_PASSWORD=your_password

    SOLANA_RPC_URL=https://api.devnet.solana.com
    ```

5. **Run database migrations:**

    ```bash
    yarn build
    ```

6. **Start the Strapi API:**

    ```bash
    yarn develop
    ```

    This will start the API locally on `http://localhost:1337`.

## 🏦 Managing Custodial Wallets

The API manages custodial wallets for both artists and fans. When a user registers, a wallet is automatically created for them and securely stored in the database.

These transactions are securely processed on the Solana blockchain, and the API acts as the intermediary between the MobileApp and the blockchain.

## 🔄 Synchronizing with Solar-Flare (Solana Program)

To deploy and interact with the Solar-flare program (the Solana smart contract), ensure you have access to the **Anchor** CLI and configure your Solana network:

```bash
# Set network to devnet or mainnet
solana config set --url https://api.devnet.solana.com

# Run on local network for testing
solana-test-validator
```

Make sure the API interacts with the deployed program ID of Solar-flare for reading/writing on-chain data related to campaigns and wallet balances.

## 🛠 Development Tips

- **Strapi Admin Panel:** Access the Strapi admin panel at `http://localhost:1337/admin` for content management.
- **API Documentation:** Use Strapi's built-in API documentation feature to explore and test the endpoints.
- **Solana Program Integration:** Ensure that your Solana keys and Anchor configuration are properly set up for running the program on your preferred Solana cluster (localnet, devnet, or mainnet).

## 🔧 Troubleshooting

- **Database Issues:** Verify that your PostgreSQL instance is running and accessible.
- **Solana Connection:** Make sure that the correct Solana RPC URL is set in your `.env` file.
- **Deployment Issues:** Check that all Strapi configurations match your environment and that you are using the correct Solana cluster.

## 📝 License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

