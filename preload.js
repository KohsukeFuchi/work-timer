// Use new namespace for require so that
// normal js modules can use 'require' properly.
// https://teratail.com/questions/172094
const storage = require('electron-json-storage');
global.storage = storage;
