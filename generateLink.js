// Simple Node.js script to create expiring access links

const crypto = require("crypto");

function generateLink(hours = 1) {
  const baseUrl = "https://tumharaapp.vercel.app"; // <-- apna Vercel app link likho yahan
  const token = crypto.randomBytes(8).toString("hex");
  const expires = Date.now() + hours * 60 * 60 * 1000; // convert hours → ms
  const link = `${baseUrl}/?token=${token}&expires=${expires}`;
  return link;
}

// Command line argument (default = 1 hour)
const hours = Number(process.argv[2]) || 1;

console.log(`🔗 Your secure access link (valid for ${hours} hour(s)):`);
console.log(generateLink(hours));
