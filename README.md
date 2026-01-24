# Himatnagar IT Hub Website

This is the official website code for the Department of Information Technology at GP Himatnagar.

## Project Tech Stack

*   **Frontend**: React + Vite + TypeScript
*   **Styling**: Tailwind CSS + shadcn/ui
*   **Backend / Database**: Supabase
*   **Authentication**: Supabase Auth

## Getting Started

1.  Clone the repository.
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Set up Environment Variables:
    *   Create a `.env` file in the root directory.
    *   Add `VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY`.
4.  Run the development server:
    ```bash
    npm run dev
    ```

## Admin Features

This project includes a comprehensive Admin Dashboard (`/admin`) to manage:
*   News & Events
*   Gallery
*   Faculty Profiles
*   Student Projects
*   Placements
*   Testimonials
*   Newsletters

## Deployment

Refer to `DEPLOYMENT.md` for detailed instructions on hosting this site on Netlify.
