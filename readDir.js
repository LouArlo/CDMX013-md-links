const fs = require('fs');

const directory_name = process.argv[2];
// const dm = directory_name[0];

// const directory_name = '../PRUEBAS';
// Open the directory
const openedDir = directory_name;

let filesLeft = true;
//while (filesLeft) {
  // Read a file as fs.Dirent object
const fileDirent = fs.readdirSync(openedDir);
console.log(fileDirent);

  // If readSync() does not return null
  // print its filename
  // if (fileDirent != null) { console.log('Name:', fileDirent.name); }
 /* if (fileDirent != null) {
    const bf = fileDirent.name.split('\n');
    console.log(bf);
  } else {
    filesLeft = false;
    // If the readSync() returns null
    // stop the loop
  }
//}
/*const fs = require('fs');

fs.readdir('../CDMX013-cipher', (error, files) => {
  if (error) {
    throw error;
  }
  console.log(files);
});

// Import the filesystem module
/* const fs = require('fs');

const directory_name = '../CDMX013-cipher';

// Function to get current filenames
// in directory
const filenames = fs.readdirSync(directory_name);

console.log('\nFilenames in directory:');
filenames.forEach((file) => {
  console.log('File:', file);
});
// Import the filesystem module

/* LO MISMO PERO UNO POE AREA */
//const fs = require('fs');
//module.exports = {

//const directory_name = process.argv.slice(2);

// const directory_name = '../PRUEBAS';

// Open the directory
//const openedDir = directory_name[0];
//const openedDir = fs.openedDirSync(directory_name[0]);
// Print the pathname of the directory
// console.log('\nPath of the directory:', openedDir.path);

// Get the files present in the directory
// console.log('Files Present in directory:');

//let filesLeft = true;
//while (filesLeft) {
  // Read a file as fs.Dirent object
  //const fileDirent = fs.readdirSync(openedDir);
  
  // If readSync() does not return null
  // print its filename
  // if (fileDirent != null) { console.log('Name:', fileDirent.name); }
  /*if (fileDirent != null) {
    const bf = fileDirent.name.split('\n');
    console.log(bf);
  }
  // If the readSync() returns null
  // stop the loop
  else { filesLeft = false; }
}
//}
/* const filesList = new Array();
let filesIndex = 0;
const fso = new ActiveXObject('../PRUEBAS'); // Scripting.FileSystemObject
function searchFilesList(filePath) {
  const f = fso.GetFolder(filePath);
  // Recorrer el directorio
  const fk = new Enumerator(f.SubFolders);
  for (; !fk.atEnd(); fk.moveNext()) {
    filesList[filesIndex++] = fk.item();
    searchFilesList(fk.item());
  }
  // Recorrer archivos de directorio
  const fc = new Enumerator(f.files);
  for (; !fc.atEnd(); fc.moveNext()) {
    filesList[filesIndex++] = fc.item();
  }
}
function searchFiles() {
  searchFilesList(fixfolder.value);
  // información del ciclo
  for (let i = 0; i < filesList.length; i++) {
    textarea.innerHTML += `${filesList[i]}<br>`;
  }
} */
