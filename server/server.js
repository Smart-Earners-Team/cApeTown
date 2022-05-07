const express = require('express');
const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');

const React = require('react');
const ReactDomServer = require('react-dom/server');

const App = require('../src/App');

const app = express();
const router = express.Router();
// app.use(express.urlencoded({ extended: true }));

router.use('^/$', (req, res) => {
  fs.readFile(path.resolve('./build/index.html'), 'utf8', (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).send('some error occured');
    }
    return res.send(
      data.replace(
        '<div id="root"><div>',
        `<div id="root">${ReactDomServer.renderToString(<App />)}<div>`
      )
    );
  });
});

router.use(
  express.static(path.resolve(__dirname, '..', 'build'), { maxAge: '30d' })
);

app.use(router);

app.post('/post', async (req, res) => {
  const { name, twtuser, twtsize, twtlink, email, date } = req.body;

  const auth = new google.auth.GoogleAuth({
    keyFile: 'credentials.json',
    scopes: 'https://www.googleapis.com/auth/spreadsheets',
  });

  // Create client instance for auth
  const client = await auth.getClient();

  // Instance of Google Sheets API
  const googleSheets = google.sheets({ version: 'v4', auth: client });

  const spreadsheetId = '1nE4sxdk-FsZWYqsPKILoNnlpRZMm8tH_J5FcqIJ5L9M';

  // // Get metadata about spreadsheet
  // const metaData = await googleSheets.spreadsheets.get({
  //   auth,
  //   spreadsheetId,
  // });

  // // Read rows from spreadsheet
  // const getRows = await googleSheets.spreadsheets.values.get({
  //   auth,
  //   spreadsheetId,
  //   range: 'Sheet1!A:F',
  // });

  // Write row(s) to spreadsheet
  await googleSheets.spreadsheets.values.append({
    auth,
    spreadsheetId,
    range: 'Sheet1!A:F',
    valueInputOption: 'USER_ENTERED',
    resource: {
      values: [[name, twtuser, twtsize, twtlink, email, date]],
    },
  });

  res.send('Successfully submitted! Thank you!');
});

app.listen(3001, () => console.log('App running on 3001'));
