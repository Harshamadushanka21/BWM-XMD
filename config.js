const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VUyZKjOBT8F12hugCzOqIihsU24A1jvE70QYBYzGoQtqHC/z6BXRXVh+meGk4KSeRLZeZ77yAv4hpNUQuG76Cs4gvEqF/itkRgCJQmCFAFSOBDDMEQiKOxvXdfX30NY6J1kG0ocZIgjb4xE26cOEznRDMUsSKzeQN3EpSNm8beHwAFj/e3C7vK5J16saeMeT243UheVoK7G60wm0jlKiWySxpSb+DeI8K4ivNwVEYoQxVMp6i1YFx9j367JAjPvG6WrYGdNCznZbbjiuzAT/LRSLtRW3tx2I0jxtzI36O/XB0dHa67ius83kaVm4wSJhYFTTmfqHUTmXy3mKiFvUzkJ/06DnPkGz7KcYzbb+u+tijHHq2yGS0uWWGxc9yZ0aqVp6KjXh0n/nG23KxYRtrmxfeIh6s0wr68uljdZppZ9M5IJreFxSWR5cSCYc61YELhvaDmh1+JW9VnVpL/o/tOVeYqNzmPaadk01PGQlXKmyk90htDOJ5Ud3Mywz3iaOqb9CXKWha7lZAel5XcTZQbk4TrWOjC65JYn8zOykNm7CxvIc1+0Ye4qf7E0rbZbXrS0irkPTP3fHu7OU+4arW2aAr6qVLp7Vz3cE5EnEqYkSQdqFH8ejNfuaR0mf14IKP1trtBajYtrmvNbgzekcO3x4sS1Bo+GNJ3ElQojGtcQRwX+WNPokgA/csaeRXCD3lB4XSdonOCV8W5xOqzlJ5a22YS+ropriP9jBeerLZ7nhPDN0CCsio8VNfI1+MaF1U7R3UNQ1SD4d8/SZCjG34a15cb0CQI4qrGm7wp0wL6n65+HkLPK5ocr9vcU/sFqsCQ+tpGGMd5WPc6NjmsvCi+IDWCuAbDAKY1upPAR5fYQz0eCPiQXe9XN5tu51ypRAv9rF2vPeWoyJ9XRJ+maDpgX0SOEl9YkRJfRF4YvPAcoiUfCazk8oAE8UfP9P/81sJ4g7cGY9NqlG+VjrWa2N3OVqPD1HkG66k9qpAPhrhqEAlc6CVN6RQJyv+AWxFSqrSNHoan9TnMpojiMlZGYVAmv+A+PQXD9685pRZ+j7fSnDnL2hogQfaIYNy/XGIFimUpjhfoIS3+Vf+49jrCsvyRIwxIkMP+MphDv6kj2Nf5MKFH8BGGcVqDIVCnp8tK0Y6pSwhKFFqGLBey/NYH49O0z/Q/0yUJhDsLhSNxpsUiZiMq1cVICpRbR2k+nRMSIRV64BG3jv03EDAETbknzjvWF+ku4y+DGBqTmyvI59EcUbc99DsIIQqMxCpFzBq0H8M1p+/NA7PLuow7nRYH4iYKTu5Rsrae5Nx5kyna9UH5GZ5fiwm0MimdLcUlkUMfct6BZlkWYX2cFzLDZhfo+JJ53oyX4blRReeCpL0fme6A8YR6OmI07nq1mNApzCjUN2J+uRFUqMnPvnzMhfRjHsePjnn/iFoQo8d4+3Dhv8z6Cj11J3+B+JiXvwmWEqDXrGWXTHDGwdRoDN+0X41gf/U8SR74x9dLcIHKYGDVHgHu958kKFOIg6LKwBDUmQsBCVJYY/mraZ04QzWGWQmGtDDgBoLEizwJslYuyzWG+LPXgdx/Y5YG938AdGAMwgcIAAA=',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Ibrahim Adams",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Ibrahim Adams",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

