# Frontend Assignment

Web application built with **React**, **TypeScript**, **Tailwind CSS**, **Axios** and **React router dom**. It displays a list of articles on the home page, and when you click on an article, it takes you to a detailed view of that article.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: TypeScript is a syntactic superset of JavaScript which adds static typing.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **Axios**: HTTP client for making API requests.
- **React router dom**: React Router is a library for handling routing and navigation in React JS

## Features

- Displays a list of articles on the home page.
- Clicking on any article will open a detailed page showing the full article content.
- Handled error while fetching article
- Loading component when fetching

## Setup and Installation

### Steps

1. **Download/clone the repository**

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Add .env for API requests**
    ```
    VITE_ARTICLE_URL = <YOUR_API_ENDPOINT>
    ```

4. **Start the development server**:
    ```bash
    npm run dev
    ```

    This will run the app on `http://localhost:5173`.
