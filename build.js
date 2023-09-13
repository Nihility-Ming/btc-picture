const fs = require('fs');
const sharp = require('sharp');
const path = require('path');

const inputFolder = './upload/';
const outputFolder = './thumbnail/';

// 读取images文件夹下的所有文件
fs.readdir(inputFolder, (err, files) => {
  if (err) {
    console.error('Error reading folder:', err);
    return;
  }

  // 过滤出jpg和png格式的文件
  const imageFiles = files.filter(file => {
    const extension = file.split('.').pop().toLowerCase();
    return extension === 'jpg' || extension === 'png';
  });

  // 遍历每个图片文件
  imageFiles.forEach((file, index) => {
    const inputPath = inputFolder + file;
    const outputPath = outputFolder + padNumber(index + 1) + '.jpg';

    // 使用sharp库将图片转换为jpg格式并进行无损压缩
    sharp(inputPath)
      .resize(150, 150, {
        fit: 'cover',
        position: 'centre',
        background: { r: 255, g: 255, b: 255, alpha: 1 }
      })
      .jpeg({ quality: 80, progressive: true })
      .toFile(outputPath, (err, info) => {
        if (err) {
          console.error('Error converting image:', err);
        } else {
          console.log('Image converted:', info);
        }
      });
  });
});

// 辅助函数：将数字填充为三位数
function padNumber(number) {
  return number.toString().padStart(3, '0');
}

// 获取jpg文件数量值
var jpgCount = 0;
fs.readdir(inputFolder, (err, files) => {
  if (err) {
    console.log('无法读取目录：', err);
    return;
  }

  const jpgFiles = files.filter(file => path.extname(file).toLowerCase() === '.jpg');
  console.log('jpg文件数量：', jpgFiles.length);
  jpgCount = jpgFiles.length;
});

// 把图片数量值保存到const.js文件
const filePath = '../js/const.js';
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('无法读取文件：', err);
    return;
  }

  // 将文件内容中的BTCPicturesCount值修改为200
  const modifiedData = data.replace(/BTCPicturesCount\s*=\s*\d+/, 'BTCPicturesCount = ' + jpgCount);

  fs.writeFile(filePath, modifiedData, 'utf8', (err) => {
    if (err) {
      console.error('无法写入文件：', err);
      return;
    }

    console.log('图片数量值BTCPicturesCount已保存到../js/const.js文件');
  });
});