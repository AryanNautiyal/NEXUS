const twilio = require('twilio');

// Replace with your actual credentials from Twilio Console
const accountSid = 'ACc82aea526e33d4b2655adb85f113aede';
const authToken = '65a5ef131936f3aeafcf38effe3e6f06';
const client = twilio(accountSid, authToken);

// Generate TURN credentials
async function getTurnCredentials() {
  try {
    const token = await client.tokens.create({
      ttl: 3600 // 1 hour expiry
    });
    
    // console.log('TURN Server Configuration:');
    // console.log(JSON.stringify(token.iceServers, null, 2));
    
    console.log(token.iceServers);
    return token.iceServers;
  } catch (error) {
    console.error('Error:', error.message);
  }
}

getTurnCredentials();