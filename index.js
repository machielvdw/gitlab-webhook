import 'dotenv/config';
import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;
const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;

app.use(express.json());

app.post('/webhook', (req, res) => {
  const gitlabToken = req.headers['x-gitlab-token'];

  if (WEBHOOK_SECRET && gitlabToken !== WEBHOOK_SECRET) {
    console.log('Secret token mismatch. Unauthorized request.');
    return res.status(401).send('Unauthorized');
  }

  res.status(200).send('OK');

  const gitlabEvent = req.headers['x-gitlab-event'];
  const payload = req.body;

  console.log('Received GitLab event:', gitlabEvent);
  // console.log('Payload:', JSON.stringify(payload, null, 2));
  console.log('Event data: ', payload.object_attributes);
});


app.listen(PORT, () => {
  console.log(`Webhook listener running on port ${PORT}`);
});
