# Deployment Guide for Himatnagar IT Hub Website

This guide will walk you through deploying your Vite + React + Supabase application to **Netlify**, as requested.

## Prerequisites

1.  **GitHub Account**: You need a GitHub account to host your code.
2.  **Netlify Account**: You need a Netlify account (log in with GitHub) to deploy the site.

## Step 1: Push Your Code to GitHub

I have already initialized a Git repository for you locally. You now need to push it to a remote repository on GitHub.

1.  **Create a New Repository**:
    *   Go to [GitHub.com](https://github.com/new).
    *   Name your repository: `himatnagar-it-hub` (or any name you prefer).
    *   **Public/Private**: Private is safer if you are unsure about secrets (though we secured them).
    *   Do **not** check "Initialize this repository with a README/gitignore".

2.  **Connect and Push**:
    *   Once the repository is created, look for the section **"…or push an existing repository from the command line"**.
    *   Run these commands in your terminal (replace `YOUR_USERNAME` with your GitHub username):
        ```bash
        git remote add origin https://github.com/YOUR_USERNAME/himatnagar-it-hub.git
        git branch -M main
        git push -u origin main
        ```

## Step 2: Deploy to Netlify

1.  **Log in to Netlify**: Go to [netlify.com](https://netlify.com) and log in.
2.  **Add New Site**:
    *   Click **"Add new site"** -> **"Import an existing project"**.
    *   Select **GitHub**.
    *   Authorize Netlify if asked, then select your `himatnagar-it-hub` repository.

3.  **Configure Build Settings**:
    *   Netlify should automatically detect the settings from the `netlify.toml` file I created.
    *   **Build command**: `npm run build`
    *   **Publish directory**: `dist`

## Step 3: Configure Environment Variables (CRUCIAL)

**Before** clicking "Deploy Site" (or immediately after, in "Site Settings"):

1.  Click **"Show advanced"** (or go to **Site settings > Configuration > Environment variables**).
2.  Add the following variables (copy values from your local `.env` file):

| Key | Value |
| :--- | :--- |
| `VITE_SUPABASE_URL` | *(Copy value from your local .env)* |
| `VITE_SUPABASE_PUBLISHABLE_KEY` | *(Copy value from your local .env)* |

3.  Click **Deploy** (or **Save** if in settings).

## Step 4: Finish Deployment

1.  Netlify will build your application.
2.  Once complete, the link (e.g., `https://agitated-franklin-12345.netlify.app`) will turn green.
3.  Click the link to view your live site!

## Troubleshooting

-   **Page Refresh 404s**: If refreshing a page gives a 404 error, ensure the `_redirects` or `netlify.toml` file is present (I have already added `netlify.toml` which handles this).
-   **Missing Data**: Check that your Environment Variables are correct in Netlify Site Settings.

## Understanding the Backend & Database

You might be wondering: **"Where do I deploy the Node.js or Python backend?"**

**Good news: You don't need to!**

This project uses **Supabase**, which is a "Backend-as-a-Service".
*   **The Database**: It is a hosted PostgreSQL database on the Supabase cloud.
*   **The Backend**: Supabase provides a ready-to-use API that your frontend calls directly.
*   **Authentication**: Managed by Supabase Auth.

Your frontend interacts with Supabase using the `VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY`. As long as these variables are set in Netlify (which you did in Step 3), your app has a fully functioning backend.

## Managing the Database Schema

If you ever create a **new** Supabase project for production (instead of using the same one as development), you need to set up the database tables.

1.  **Locate the Migration Files**: You have three important migration files:
    *   `supabase/migrations/20260120150457_....sql` (Initial Setup)
    *   `supabase/migrations/20260124_add_missing_admin_tables.sql` (Admin Key Features)
    *   `supabase/migrations/20260124_add_newsletter_table.sql` (Newsletter Feature)
2.  **Open Supabase Dashboard**: Go to your project on [supabase.com](https://supabase.com).
3.  **Go to SQL Editor**: Click the SQL icon in the left sidebar.
4.  **Run the SQL**: Copy the content of the files and run them.

This will ensure all your tables (Projects, Placements, Testimonials, Newsletters) are created.
