import fs from 'fs';
import path from 'path';

const baseDir = path.join('public', 'images', 'brand');
const outputFile = path.join('src', 'pages', 'landing', 'assets', 'PreloadImages', 'PreloadImages.tsx');

const imageExtensions = new Set(['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg', '.bmp', '.tiff']);

// Function to get all image files recursively
function getImageFiles(dir, base = '') {
  let images = [];
  const files = fs.readdirSync(dir, { withFileTypes: true });

  for (const file of files) {
    const fullPath = path.join(dir, file.name);
    const relPath = path.join(base, file.name);

    if (file.isDirectory()) {
      images = images.concat(getImageFiles(fullPath, relPath));
    } else if (file.isFile() && imageExtensions.has(path.extname(file.name).toLowerCase())) {
      images.push(relPath.replace(/\\/g, '/')); // Normalize to forward slashes for web paths
    }
  }

  return images;
}

// Ensure output directory exists
const outputDir = path.dirname(outputFile);
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Get all images
const images = getImageFiles(baseDir);

// Generate TSX content
let tsxContent = `import React from 'react';

export const PreloadImages: React.FC = () => {
  return (
    <div style={{ display: 'none' }}>
`;

images.forEach((img) => {
  tsxContent += `      <img src="/images/brand/${img}" alt="" />\n`;
});

tsxContent += `    </div>
  );
};
`;

fs.writeFileSync(outputFile, tsxContent, 'utf8');

console.log(`Generated ${outputFile} with ${images.length} image preload tags.`);
