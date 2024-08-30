const fs = require('fs');
const path = 'path/to/animation.svg';

const svgContent = `
<svg width="100" height="100">
  <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
</svg>
`;

fs.writeFileSync(path, svgContent);

console.log('Animation generated successfully.');
