import { google } from 'googleapis';
import { OAuth2Client } from 'google-auth-library';

// Replace these with your own credentials
const CLIENT_ID = 'YOUR_CLIENT_ID';
const CLIENT_SECRET = 'YOUR_CLIENT_SECRET';
const REDIRECT_URI = 'YOUR_REDIRECT_URI';

// OAuth2 Client
const oauth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

// URL for authorization
const scopes = [
  'https://www.googleapis.com/auth/yt-analytics.readonly',
  'https://www.googleapis.com/auth/youtube.readonly',
];

const authUrl = oauth2Client.generateAuthUrl({
  access_type: 'offline',
  scope: scopes,
});

console.log('Authorize this app by visiting this url:', authUrl);

// Function to get tokens and set credentials
const getAccessToken = async (code: string) => {
  const { tokens } = await oauth2Client.getToken(code);
  oauth2Client.setCredentials(tokens);
  console.log('Tokens acquired:', tokens);
};

// Function to fetch estimated revenue
const fetchEstimatedRevenue = async (startDate: string, endDate: string) => {
  const youtubeAnalytics = google.youtubeAnalytics('v2');

  const response = await youtubeAnalytics.reports.query({
    auth: oauth2Client,
    ids: 'channel==MINE',
    startDate: startDate,
    endDate: endDate,
    metrics: 'estimatedRevenue',
    dimensions: 'day',
  });

  return response.data;
};

// Example usage
const exampleUsage = async () => {
  // Replace with the actual authorization code after the user authorizes the app
  const authorizationCode = 'YOUR_AUTHORIZATION_CODE';
  await getAccessToken(authorizationCode);

  const startDate = '2023-01-01';
  const endDate = '2023-06-30';

  const data = await fetchEstimatedRevenue(startDate, endDate);
  console.log('Estimated Revenue Data:', data);
};

exampleUsage().catch(console.error);
