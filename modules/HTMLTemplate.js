

const HTMLTemplate = (styleTag, elementScript,logics)=>{
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  ${styleTag}
  <title>Test</title>
</head>
<body>
  <script>
    ${elementScript}
    ${logics}
  </script>
</body>
</html>
`;
}
// console.log(pureSlide);
// console.log(HTMLTemplate(pureSlide));

module.exports = HTMLTemplate;