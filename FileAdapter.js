var FSFilesAdapter = require('@parse/fs-files-adapter');
 
var fsAdapter = new FSFilesAdapter({
  "filesSubDirectory": "./Claassor_App", // optional, defaults to ./files
});
 
var api = new ParseServer({
    appId: 'Claassor_App',
    masterKey: 'MjY3NzFjNjYxZGYyMGVkNGQwYTM3YTU4NGZjN2NkN2I=',
    filesAdapter: fsAdapter
})
