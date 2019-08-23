const gpmfExtract = require('gpmf-extract');
const goproTelemetry = require(`gopro-telemetry`);
const fs = require('fs');

const chemin = 'D:/HERO5 Black 1/gopro/DCIM/102GOPRO/'
let speed3D = []

const dir = fs.readdirSync(chemin).filter( nomFichier => nomFichier.indexOf('MP4')>0 );
console.log(dir)


  
  const file = fs.readFileSync(chemin+dir[1]);   
  gpmfExtract(file)
  .then(extracted => {
    let telemetry = goproTelemetry(extracted);
    for ( let coords in telemetry[1]["streams"]["GPS5"]["samples"]){
      speed3D.push(60*60*telemetry[1]["streams"]["GPS5"]["samples"][coords]["value"][4]/1000);
    }

    console.log(' Vitesse max ' , Math.max(...speed3D) , 'km/h' )

    fs.writeFileSync('output_path.json', JSON.stringify(telemetry[1]["streams"]["GPS5"]["samples"]));

  })
  .catch(error => console.log(error));

  const file = fs.readFileSync(chemin+dir[2]);   
  gpmfExtract(file)
  .then(extracted => {
    let telemetry = goproTelemetry(extracted);
    for ( let coords in telemetry[1]["streams"]["GPS5"]["samples"]){
      speed3D.push(60*60*telemetry[1]["streams"]["GPS5"]["samples"][coords]["value"][4]/1000);
    }

    console.log(' Vitesse max ' , Math.max(...speed3D) , 'km/h' )

    fs.writeFileSync('output_path.json', JSON.stringify(telemetry[1]["streams"]["GPS5"]["samples"]));

  })
  .catch(error => console.log(error));




// 
