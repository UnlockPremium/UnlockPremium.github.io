// This is a simplified example of what might be in live.js

// 1. Pre-defined lists of fake data
const usernames = [
    "MelonlayerX", "MelonMaster", "MelonFan", "LuckyRoller", "Jake P.", "Maria S.",
    "GamerGalore", "CodeNinja", "PixelPirate", "QuantumQueen", "SonicBoom",
    "StarGazer", "DragonSlayer", "ShadowWalker", "EpicVoyager", "MysticMage",
    "TechTitan", "VeloCity", "AquaKnight", "FirePhoenix", "BoltMaster",
    "DreamWeaver", "IronHeart", "SilverSurfer", "GoldenGriff", "NightHawk",
    "SunSeeker", "MoonBeam", "ThunderStrike", "CrimsonKing", "JadeJaguar"
];
const amounts = ["36,000", "50,000", "999,999"];
const countries = ["from United States", "from United Kingdom", "from Australia", "from Canada"];

// 2. A function that runs on a timer (e.g., every 4 seconds)
setInterval(function() {
    
    // 3. Randomly pick from the lists
    let randomUser = usernames[Math.floor(Math.random() * usernames.length)];
    let randomAmount = amounts[Math.floor(Math.random() * amounts.length)];
    let randomCountry = countries[Math.floor(Math.random() * countries.length)];

    // Create the message for the popup
    let message = `<b>${randomUser}</b> ${randomCountry} has received <span class="Coins-color">${randomAmount}</span> Melcoins!`;

    // 4. Use the toast library to show the popup
    // The actual function call might be slightly different depending on the library
    if (window.VanillaToasts) {
        VanillaToasts.create({
            title: 'Recent Activity',
            text: message,
            type: 'success', // 'success' gives it a green color
            timeout: 5000 // Popup disappears after 5 seconds
        });
    }

}, 3500); // Run this every 4.5 seconds
