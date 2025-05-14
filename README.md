# Discord Clone

A Discord UI clone built with Next.js and Tailwind CSS.

## Deployment to GitHub Pages

This project is configured to be deployed to GitHub Pages with a custom domain.

### Important Note About Deployment

When setting up this project for the first time, you might see a linter error in the GitHub workflow file regarding the `github-pages` environment value. This is expected and can be resolved by:

1. Pushing your code to GitHub in a repository named `discord-clone`
2. Going to your repository settings on GitHub
3. Navigating to Pages in the sidebar
4. The GitHub workflow will now recognize the `github-pages` environment

### Steps to Deploy

1. Push your code to GitHub in a repository named `discord-clone`
2. Go to your repository settings on GitHub
3. Navigate to Pages in the sidebar
4. Under "Build and deployment", select GitHub Actions as the source
5. For custom domain setup:
   - Enter your domain in the "Custom domain" field
   - Make sure DNS is configured properly
   - Check "Enforce HTTPS" once SSL is ready

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Technologies Used

- Next.js
- React
- Tailwind CSS
- Radix UI Components 