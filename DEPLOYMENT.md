# GitHub Actions Deployment to GitHub Pages

This repository uses **GitHub Actions** to automatically build and deploy a Vue.js application to **GitHub Pages** whenever changes are pushed to the `main` branch. The deployment is done securely using SSH keys.

## Workflow Overview

The workflow is triggered on a push to the `main` branch and automates the following steps:

1. **Checkout the repository**: The code from the repository is checked out to the GitHub Actions runner.
2. **Set up the Node.js environment**: The required version of Node.js is installed.
3. **Install dependencies and build the application**: The necessary dependencies are installed using `npm install`, and the production build is created using `npm run build`.
4. **Deploy the application**: The built application (from the `dist` folder) is deployed to GitHub Pages using the `s0/git-publish-subdir-action` GitHub Action.

## GitHub Secrets Configuration

For secure deployment, two keys need to be configured in the repository settings:

### 1. Private Key (Source Repository)

- The **private key** used for authentication should be stored in the **Secrets** section of the **source repository**.
- This key is used to authenticate with the destination GitHub repository during the deployment process.
- The secret should be named `NEW_PRIVATE_KEY`.

### 2. Public Key (Destination Repository)

- The **public key** corresponding to the private key must be added to the **Deploy Keys** section of the **destination repository** (the repository where GitHub Pages will serve the application).
- This allows the source repository to securely push changes to the `gh-pages` branch of the destination repository.

## Workflow Configuration

The workflow is defined in `.github/workflows/npm-publish.yml` and looks like the following:

```yaml
name: Deploy to Github Pages
on:
  push:
    branches:
      - main

jobs:
  deploy:
    name: Deploy Application
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Repo
        uses: actions/checkout@master
      - name: Create Node Environment
        uses: actions/setup-node@v1
        with:
          node-version: 18.x
      - name: Install Packages and Build Application
        run: |
          npm install
          npm run build
      - name: Deploy
        uses: s0/git-publish-subdir-action@develop
        env:
          REPO: git@github.com:shubhamsharma11/shubhamsharma11.github.io.git
          BRANCH: main
          FOLDER: dist
          SSH_PRIVATE_KEY: ${{ secrets.NEW_PRIVATE_KEY }}
```

## Key Parameters

When setting up the deployment, you need to define the following key parameters:

- **REPO**: The GitHub Pages repository where the built files will be deployed. (Make sure to replace this with your own repository.)
- **BRANCH**: The branch to deploy to (usually `main` or `gh-pages`).
- **FOLDER**: The folder containing the built files to deploy (for Vue.js applications, this is usually the `dist` folder).
- **SSH_PRIVATE_KEY**: The private SSH key stored in GitHub Secrets to authenticate the deployment.

## Secret Keys Configuration

This guide explains how to create and configure the required secret keys in GitHub for a secure deployment process using **GitHub Actions**. These keys are necessary for setting up SSH-based authentication for deploying to **GitHub Pages**.

### Step 1: Generate SSH Keys

Before you create the secrets in GitHub, you need to generate a pair of SSH keys (private and public). This can be done using `ssh-keygen` in your terminal.

### Generate SSH Key Pair

1. Open your terminal (Command Prompt, PowerShell, or a terminal in your development environment).
2. Run the following command to generate the SSH key pair:

   ```bash
   ssh-keygen -t rsa -b 4096 -C "your-email@example.com"
   ```

## Setting Up the SSH Keys

To set up SSH key authentication for the deployment, follow these steps:

### 1. Private Key (Source Repository)

1. Go to the **Settings** of the source repository.
2. In the **Secrets** section, add a new secret with the name `NEW_PRIVATE_KEY`.
3. Paste the **private SSH key** into the secret.

### 2. Public Key (Destination Repository)

1. Go to the **Settings** of the destination repository (where GitHub Pages will be hosted).
2. In the **Deploy Keys** section, add a new deploy key and paste the corresponding **public key**.
3. Ensure that **Write access** is granted if the deployment involves pushing changes to the repository.

## How It Works

Once the workflow is configured, it will automatically run whenever you push changes to the `main` branch. Here's a breakdown of what happens:

### 1. Build Process

- The code is checked out from the repository.
- The **Node.js environment** is set up.
- The necessary dependencies are installed using `npm install`.
- The application is built using `npm run build`.
- The built files are placed in the `dist/` folder (the default build folder for Vue.js projects).

### 2. Deploy Process

- The `dist/` folder, containing the built application, is deployed to the target GitHub Pages repository.
- The deployment is authenticated using the **private SSH key** stored in the repository secrets.

### 3. Automatic Deployment

After the workflow completes successfully, your portfolio or website will be live on **GitHub Pages** at the following URL:

`https://<your-github-username>.github.io/<repository-name>`

In the configuration file (`npm-publish.yml`), the following parameters are defined:

- **REPO**: This points to the target GitHub Pages repository.
- **BRANCH**: Specifies which branch to deploy to (typically `main` or `gh-pages`).
- **FOLDER**: Set to `dist`, which is the output folder after building the Vue.js app.

## Key Sections:

1. **Workflow Overview**: Describes what the GitHub Actions workflow does (checkout, build, deploy).
2. **Secrets Configuration**: Instructions for creating the Secrets Key Pair for the source repository (private key) and the destination repository (public key).
3. **Setting Up the SSH Keys**: Step-by-step instructions on how to set up the SSH keys in both the source and destination repositories in the Github.
4. **Key Parameters**: Lists the essential variables used in the workflow configuration (`REPO`, `BRANCH`, `FOLDER`, and `SSH_PRIVATE_KEY`).

This is a **complete and detailed README.md** file to guide anyone setting up the workflow, configuring the SSH keys, and understanding how the deployment process works.


======================

To create a GitHub Actions workflow to build and deploy your Vue.js portfolio website to GitHub Pages, follow these steps.

Step 1: Create the npm-publish.yml file
In your GitHub repository, create a new file at .github/workflows/npm-publish.yml. This file will define the GitHub Actions workflow that builds your Vue.js project and deploys it to GitHub Pages.

Here’s a sample workflow YAML file:

```yaml
name: Build and Deploy to GitHub Pages

on:
push:
branches: - main # Trigger the workflow only when changes are pushed to the `main` branch (or your default branch)

jobs:
build:
runs-on: ubuntu-latest

    steps:
      # Step 1: Check out the repository
      - name: Checkout code
        uses: actions/checkout@v3

      # Step 2: Set up Node.js (Make sure the version matches your project’s requirements)
      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '16'  # Change the version to match the one used in your project

      # Step 3: Install dependencies
      - name: Install dependencies
        run: npm install

      # Step 4: Build the Vue.js project
      - name: Build the project
        run: npm run build

      # Step 5: Deploy to GitHub Pages
      - name: Deploy to GitHub Pages
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          branch: gh-pages  # The branch where the built files will be deployed
          folder: dist      # The folder where the build output is located (default for Vue.js is 'dist')

        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}  # This token is provided automatically by GitHub

```

Explanation of the workflow:
Triggering the workflow:
The on.push.branches trigger ensures that the workflow runs when changes are pushed to the main branch. You can adjust this if you use a different default branch.
Steps in the workflow:
Checkout code: This step checks out your repository's code.
Set up Node.js: Sets up the specified version of Node.js for the workflow (change the version as needed).
Install dependencies: Runs npm install to install the necessary dependencies for your Vue.js project.
Build the Vue.js app: Runs npm run build to create a production-ready build of your application, which will be placed in the dist/ directory by default (the standard output folder for Vue CLI).
Deploy to GitHub Pages: This step uses the JamesIves/github-pages-deploy-action to deploy the contents of the dist/ folder to the gh-pages branch of your repository.
Step 2: Enable GitHub Pages in your repository settings
Go to the Settings tab of your GitHub repository.
In the Pages section (found in the left-hand sidebar), select the gh-pages branch as the source for GitHub Pages.
Set the folder to / (root) to deploy the site from the root of the gh-pages branch.
Step 3: Add the GITHUB_TOKEN secret
The GITHUB_TOKEN is used to authenticate the workflow to push the build files to GitHub Pages. This token is automatically created by GitHub and should not need to be manually added, as it is available by default in workflows. If you’re using a different secret or token, make sure it has the appropriate permissions to push to the gh-pages branch.

Step 4: Push to GitHub
Now, every time you push changes to your main branch (or whichever branch you’ve chosen), this workflow will automatically build your Vue.js project and deploy it to the gh-pages branch.

Step 5: Access your deployed portfolio
After the workflow completes successfully, you should be able to access your portfolio website at:

php
Copy code
https://<your-github-username>.github.io/<repository-name>
This is the URL where GitHub will serve your portfolio from GitHub Pages.

Optional Customizations:
Custom domain: If you have a custom domain, you can configure it in the GitHub Pages settings under your repository’s settings.
Vue router: If you're using Vue Router with history mode, you might need to make additional adjustments to ensure the app is correctly routed when deployed to GitHub Pages.
Let me know if you need further adjustments or additional steps!
