/**
 * Google Apps Script — Form Submission Handler
 *
 * SETUP INSTRUCTIONS:
 * 1. Go to https://script.google.com and create a new project
 * 2. Paste this entire code into Code.gs
 * 3. Replace SPREADSHEET_ID below with your Google Sheet ID
 *    (from the URL: https://docs.google.com/spreadsheets/d/YOUR_ID_HERE/edit)
 * 4. Click Deploy → New deployment → Web app
 * 5. Set "Execute as" = Me, "Who has access" = Anyone
 * 6. Copy the deployment URL
 * 7. Add it to your .env file as VITE_FORM_ENDPOINT=your_url_here
 * 8. Redeploy the landing page
 *
 * Your Google Sheet ID: 1VCYJA72Iy1fr3dQkvXk0UTNE_vnADXhxv5JndsoM2KM
 */

const SPREADSHEET_ID = '1VCYJA72Iy1fr3dQkvXk0UTNE_vnADXhxv5JndsoM2KM';
const SHEET_NAME = 'RSVPs'; // Name of the sheet tab

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(SHEET_NAME);

    // Create sheet with headers if it doesn't exist
    if (!sheet) {
      const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
      const newSheet = ss.insertSheet(SHEET_NAME);
      newSheet.appendRow([
        'Timestamp',
        'Full Name',
        'Email',
        'Phone',
        'Company',
        'NMLS #',
        'Interest in Joining LF',
        'How They Heard About Event',
        'Notes',
        'Language',
        'Submission Timestamp'
      ]);
      newSheet.getRange(1, 1, 1, 11).setFontWeight('bold');
    }

    const targetSheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(SHEET_NAME);

    targetSheet.appendRow([
      new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles' }),
      data.fullName || '',
      data.email || '',
      data.phone || '',
      data.company || '',
      data.nmls || '',
      data.interest || '',
      data.hearAbout || '',
      data.notes || '',
      data.language || 'en',
      data.timestamp || ''
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ status: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'ok', message: 'Form endpoint is live' }))
    .setMimeType(ContentService.MimeType.JSON);
}

// Test function — run this manually to verify sheet access
function testAppend() {
  const mockEvent = {
    postData: {
      contents: JSON.stringify({
        fullName: 'Test User',
        email: 'test@example.com',
        phone: '555-0100',
        company: 'Test Corp',
        nmls: '123456',
        interest: 'Maybe',
        hearAbout: 'Google Search, LinkedIn',
        notes: 'This is a test submission',
        language: 'en',
        timestamp: new Date().toISOString()
      })
    }
  };

  const result = doPost(mockEvent);
  Logger.log(result.getContent());
}
