//here you can require you dependencies or external functions
/*
exports.handler = async function ( event ) {
	//here you will add your code
	
};

var Jimp = require('jimp');
 
// open a file called "profile.jpg"
Jimp.read('image1.jpg', (err, profile) => {
  if (err) throw err;
  image1
    .resize(256, 256) // resize
    .quality(60) // set JPEG quality
    .write('./modified.jpg'); // save
});
*/
const Jimp = require('jimp');
const inputPath = './images/';
const outputPath = './optimized/';
const JIMP_QUALITY = 60;
const RESIZE = 500;//pixels
const fs = require('fs');


fs.readdir(inputPath, (err,files)=>{
	files.forEach(file =>{
		if(file.toLocaleLowerCase().endsWith(".jpg") || file.toLocaleLowerCase().endsWith(".png") || file.toLocaleLowerCase().endsWith(".gif")){
			resizeImage(file);
		}
	})
})

//trying to resize using jimp
function resizeImage(fileName){
	Jimp.read(inputPath + fileName)
	.then(image => {
		image.resize(RESIZE,RESIZE,Jimp.RESIZE_BEZIER);
		image.write(outputPath + fileName);
		image.quality(JIMP_QUALITY)
		
	}).then(function () {
		var obj = {"filepath": outputPath +'/'+fileName, "procent" : JIMP_QUALITY};
		console.log('moving filename', fileName, obj);
		fs.rename(inputFolder + fileName, processedFolder + fileName, function (ignore) {
		});
	})
	.catch(err => {
	});
}