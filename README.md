# InkImg

InkImg is a full-stack application that generates images from text using AI. The application consists of a React-based client and a Node.js server that interacts with the OpenAI API for image generation and MongoDB for data storage.

## Project Structure

The repository is divided into two main parts:

- `/client`: Contains the React client-side application.
- `/server`: Contains the Node.js server-side application.

## Features

- Generate images from text using AI.
- Store and retrieve generated images.
- Responsive and user-friendly interface.

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- MongoDB
- OpenAI API Key
- Cloudinary Account (for image storage)

## Clone the Repository

```bash
git clone https://github.com/vshreekrishna/inkimg.git
cd inkimg

## Setup the Server
Navigate to the server directory:
cd server

## Install server dependencies:
npm install

Create a .env file in the server directory and add the following environment variables:

PORT=5000
MONGODB_URI=your_mongodb_connection_string
OPENAI_API_KEY=your_openai_api_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

Start the server:
npm start

## Setup the Client

Navigate to the client directory:
cd client

Install client dependencies:
npm install

Start the client
npm start

Available Scripts
Server Scripts
npm start: Starts the server.
npm run dev: Starts the server in development mode with hot reloading.
Client Scripts
npm start: Runs the app in development mode.
npm test: Launches the test runner in interactive watch mode.
npm run build: Builds the app for production.
npm run eject: Ejects the app configuration.
