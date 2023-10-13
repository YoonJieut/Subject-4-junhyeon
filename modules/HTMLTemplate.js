// const pureSlide = require('./pureslide');

const HTMLTemplate = (styleTag, logics)=>{
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  ${styleTag}
  <title>Test</title>
</head>
<body>
  <h1>나는 슬라이드</h1>
  <script>
    ${logics}
  </script>
</body>
</html>
`;
}
// console.log(pureSlide);
// console.log(HTMLTemplate(pureSlide));

module.exports = HTMLTemplate;