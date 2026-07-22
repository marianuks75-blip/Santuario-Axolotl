const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const distDir = path.join(root, 'dist');

if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

const filesToCopy = [
  { from: path.join(root, 'index.html'), to: path.join(distDir, 'index.html') },
  { from: path.join(root, 'public'), to: path.join(distDir, 'public') }
];

for (const entry of filesToCopy) {
  if (fs.existsSync(entry.from)) {
    if (fs.statSync(entry.from).isDirectory()) {
      copyDir(entry.from, entry.to);
    } else {
      fs.copyFileSync(entry.from, entry.to);
    }
  }
}

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const item of fs.readdirSync(src)) {
    const srcPath = path.join(src, item);
    const destPath = path.join(dest, item);
    const stat = fs.statSync(srcPath);
    if (stat.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}
