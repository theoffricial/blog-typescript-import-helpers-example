const fg = require('fast-glob')
const { readFileSync } = require('fs')



Promise.all([
    getModulesLinesOfCode("dist/no-import-helpers-out-tsc/**/*.js"), 
    getModulesLinesOfCode("dist/with-import-helpers-out-tsc/**/*.js")
]).then(([noImportHelpersLinesOfCode, importHelpersLinesOfCode]) => {
    console.log("NO importHeleprs lines of code:", noImportHelpersLinesOfCode)
    console.log("importHelper lines of code:", importHelpersLinesOfCode)
})


async function getModulesLinesOfCode(pattern) {
   const paths = await fg(pattern)

   let outputTotalNumberOfLines = 0;

   for (const path of paths) {
    const content = readFileSync(path, "utf8")

    const fileNumberOfLines = content.split("\n").length + 1

    outputTotalNumberOfLines += fileNumberOfLines;
   }

   return outputTotalNumberOfLines;
}