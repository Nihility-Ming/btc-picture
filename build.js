const fs = require('fs');
const sharp = require('sharp');

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
