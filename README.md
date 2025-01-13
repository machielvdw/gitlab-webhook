# GitLab Webhook Example
An example webhook for GitLab. This webhook will listen for events and print the payload to the console.

## Pre-requisites
1. Set up localtunnel
```bash
npm install -g localtunnel
```

2. A GitLab account with example project and issues etc.

3. A secret for the webhook to verify the requests, you can generate one using the following command:
```bash
openssl rand -hex 12
```

## Usage
1. Install the dependencies
```bash
npm install
```

2. Create a `.env` file with the following content:
```env
PORT=3000
WEBHOOK_SECRET=your_secret_here
```

3. Start the server
```bash
node index
```

4. Open a tunnel to your local server using localtunnel
```bash
lt --port 3000 --subdomain your_subdomain_here
```

## GitLab Setup
1. Go to your project settings
2. Go to Webhooks
3. Click on "Add new webhook"
4. Enter the URL from localtunnel
5. Enter the secret from your `.env` file
6. Select the events you want to listen for
7. Untick "Enable SSL verification"
8. Click on "Add webhook"

## Test
1. Create a new issue in your project/run a test from the test selector after webhook setup
2. Check the console for the payload


