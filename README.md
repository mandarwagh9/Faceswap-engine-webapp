# AI Face Swapper

An AI-powered application for swapping faces between images using an external API. Built with Node.js, Express, and EJS.

## Features

- Upload and swap faces between images.
- View the result image with swapped faces.

## Prerequisites

- Node.js (>=14.x)
- npm (>=6.x)

## Setup

1. **Clone the Repository**

   ```bash
   git clone https://github.com/mandarwagh9/FACE-SWAP-WEBSITE.git
   ```

2. **Navigate to the Project Directory**

   ```bash
   cd FACE-SWAP-WEBSITE
   ```

3. **Install Dependencies**

   ```bash
   npm install
   ```

4. **Set Up Environment Variables**

   Create a `.env` file in the root directory and add your RapidAPI key:

   ```plaintext
   RAPIDAPI_KEY=your_rapidapi_key_here
   ```

   Replace `your_rapidapi_key_here` with your actual API key.

## Running the Application

1. **Start the Server**

   ```bash
   npm start
   ```

   The server will run at [http://localhost:3000](http://localhost:3000).

2. **Open in Browser**

   Go to [http://localhost:3000](http://localhost:3000) in your web browser.

## How It Works

- **Upload Images**: Use the web interface to upload the source and target images.
- **Swap Faces**: The app sends the images to the API, which returns the swapped face image.
- **View Result**: See the result image on the results page.

## API Details

This app uses the RapidAPI face swapper API. Make sure your API key is valid. Check the [API Documentation](https://rapidapi.com/) for more details.

## Contributing

Contributions are welcome! Fork the repository and submit a pull request with your changes.

## License

MIT License. See the [LICENSE](LICENSE) file for details.





