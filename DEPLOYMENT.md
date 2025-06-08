# Deployment Instructions for germanaiagent.com

This guide explains how to deploy the application to Netlify with the custom domain `germanaiagent.com`.

## Prerequisites

1. A Netlify account (sign up at [Netlify](https://app.netlify.com/))
2. The `germanaiagent.com` domain registered with a domain registrar
3. Git installed on your local machine

## Deployment Steps

### 1. Connect to GitHub Repository

1. Log in to your Netlify account
2. Click on "Sites" in the top navigation
3. Click "Import from Git" and select GitHub
4. Authorize Netlify to access your repositories if prompted
5. Select the repository containing this project

### 2. Configure Build Settings

Netlify should automatically detect the Next.js project and configure the build settings based on the `netlify.toml` file. Verify the following settings:

- Build command: `cd app && npm install && npm run build`
- Publish directory: `app/.next`
- Environment variables: Add any required environment variables in the Netlify UI under Site settings > Build & deploy > Environment

### 3. Set Up Custom Domain

1. In the Netlify dashboard, go to "Site settings" > "Domain management"
2. Click "Add custom domain"
3. Enter `germanaiagent.com` and click "Verify"
4. Follow the instructions to configure your domain's DNS settings
   - Add an A record pointing to Netlify's load balancer IP: `75.2.60.5`
   - Add a CNAME record for `www.germanaiagent.com` pointing to `germanaiagent.com`

### 4. Enable HTTPS

1. In the Netlify dashboard, go to "Site settings" > "Domain management"
2. Under "HTTPS", click "Verify DNS configuration"
3. Once verified, click "Provision certificate"
4. Enable "Force HTTPS" to ensure all traffic uses HTTPS

### 5. Deploy the Site

1. Push your changes to the connected GitHub repository
2. Netlify will automatically trigger a new deployment
3. Monitor the deployment in the Netlify dashboard

## Environment Variables

Make sure to set the following environment variables in the Netlify UI:

- `NODE_VERSION`: `20.x`
- `NPM_FLAGS`: `--legacy-peer-deps`
- `NEXT_TELEMETRY_DISABLED`: `1`
- Any other environment variables required by your application

## Troubleshooting

- If the build fails, check the deployment logs in the Netlify dashboard
- Ensure all required environment variables are set
- Verify that the build command and publish directory are correctly configured
- For custom domain issues, check the DNS configuration and SSL certificate status

## Support

For additional help, refer to the [Netlify documentation](https://docs.netlify.com/) or contact Netlify support.
