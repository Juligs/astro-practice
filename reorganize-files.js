import fs from 'fs'
import path from 'path'

const colors = {
    reset: '\x1b[0m',
    green: '\x1b[32m',
    cyan: '\x1b[36m'
}

const logSuccess = (str) => console.log(colors.green, str, colors.reset)
const logInfo = (str) => console.log(colors.cyan, str, colors.reset)

// array with necessary folders for upload
const OUT_FOLDER = 'dist'
const ASTRO_FOLDER = '_astro'
const BUILT_FILES_FOLDER = OUT_FOLDER + '/' + ASTRO_FOLDER
const PREPARE_FOLDERS = [`${OUT_FOLDER}/css`, `${OUT_FOLDER}/js`, `${OUT_FOLDER}/images`]
const BUILT_FILES_TO_FOLDERS = {
    css: 'css',
    js: 'js'
}


for (const dir of PREPARE_FOLDERS) {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true })
        logSuccess(`Created folder: ${dir}`)
    }
}

// Move files to their respective directories
logInfo('Moving files to their respective directories...')
for (const [fileExtension, dir] of Object.entries(BUILT_FILES_TO_FOLDERS)) {
    fs.readdirSync(BUILT_FILES_FOLDER).forEach(file => {
        if (file.endsWith(fileExtension)) {
            const newFileLocation = path.join(OUT_FOLDER, dir, file)
            fs.renameSync(`${BUILT_FILES_FOLDER}/${file}`, newFileLocation)
            logSuccess(`Moved: ${file} to ${newFileLocation}`)
        }
    })
}

/* Update HTML references after moving files */
function updateHTMLImports() {
    const PATH_TO_HTML = OUT_FOLDER + '/index.html'

    // Read the HTML file
    let htmlContent = fs.readFileSync(PATH_TO_HTML, 'utf8')

    // Update CSS and JS reference paths in the HTML file
    for (const [fileExtension, outFileFolder] of Object.entries(BUILT_FILES_TO_FOLDERS)) {
        // Update CSS paths
        if (fileExtension === 'css') {
            htmlContent = htmlContent.replace(
                new RegExp(`href="/${ASTRO_FOLDER}/(.*?).${fileExtension}"`, 'g'),
                `href="/${outFileFolder}/$1.${fileExtension}"`
            )
        }

        // Update JS paths
        if (fileExtension === 'js') {
            htmlContent = htmlContent.replace(
                new RegExp(`src="/${ASTRO_FOLDER}/(.*?).${fileExtension}"`, 'g'),
                `src="/${outFileFolder}/$1.${fileExtension}"`
            )
        }
    }

    // Write the updated HTML back to file
    fs.writeFileSync(PATH_TO_HTML, htmlContent)
}


logInfo('Updating HTML imports...')
updateHTMLImports()


logInfo(`Removing folder: ${BUILT_FILES_FOLDER}...`)
fs.rmdirSync(BUILT_FILES_FOLDER)

logSuccess('Files have been reorganized and imports updated 🚀')
