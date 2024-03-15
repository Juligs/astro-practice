import fs from 'fs'
import path from 'path'
import encoding from 'encoding'
const urlLab = "https://e00-lab-elmundo.uecdn.es/";
const urlSpecial = "cuanto-dinero-cuesta-sobrevivir-como-estudiante-en-espana/"
const imageExtensions = ['png', 'jpg', 'jpeg', 'svg', 'gif', 'webp']

const colors = {
    reset: '\x1b[0m', //colors ANSI escape codes
    green: '\x1b[32m',
    cyan: '\x1b[36m'
}

const logSuccess = (str) => console.log(colors.green, str, colors.reset)
const logInfo = (str) => console.log(colors.cyan, str, colors.reset)

// array with necessary folders for upload
const OUT_FOLDER = 'dist'
const ASTRO_FOLDER = '_astro'
const images = 'images'
const PUBLIC_FOLDER = 'public'
const BUILT_FILES_FOLDER = OUT_FOLDER + '/' + ASTRO_FOLDER
const PREPARE_FOLDERS = [`${OUT_FOLDER}/css`, `${OUT_FOLDER}/js`, `${OUT_FOLDER}/images`]
const BUILT_FILES_TO_FOLDERS = {
    css: 'css',
    js: 'js',
}


for (const dir of PREPARE_FOLDERS) {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true })
        logSuccess(`Created folder: ${dir}`)
    }
}

// Move files to their respective directories js, css, images
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

// Move images to their respective directories
fs.readdirSync(PUBLIC_FOLDER).forEach(file => {
    if (imageExtensions.some(ext => file.endsWith(ext))) {
        const newFileLocation = path.join(OUT_FOLDER, 'images', file)
        fs.copyFileSync(`${PUBLIC_FOLDER}/${file}`, newFileLocation)
        logSuccess(`Moved: ${file} to ${newFileLocation}`)
    }
})

function updateHTMLImports() {
    const PATH_TO_HTML = path.join(OUT_FOLDER, 'index.html');

    // Lee el contenido del archivo HTML
    let htmlContent = fs.readFileSync(PATH_TO_HTML, 'utf8');

    // Concatena urlLab y urlSpecial asegurándose de que tengan el formato correcto
    const baseUrl = `${urlLab}${urlSpecial.endsWith("/") ? urlSpecial : urlSpecial + "/"}`;

    // Actualiza las rutas de los archivos CSS y JS
    htmlContent = htmlContent.replace(
        new RegExp(`href="/${ASTRO_FOLDER}/(.*?).css"`, 'g'),
        `href="${baseUrl}css/$1.css"`
    ).replace(
        new RegExp(`src="/${ASTRO_FOLDER}/(.*?).js"`, 'g'),
        `src="${baseUrl}js/$1.js"`
    );

    // Actualiza las rutas de las imágenes para que comiencen con urlLab + urlSpecial + '/images'
    htmlContent = htmlContent.replace(
        new RegExp(`src="/images/(.*?)"`, 'g'),
        `src="${baseUrl}images/$1"`
    );

    // Escribe el contenido actualizado en el archivo HTML
    fs.writeFileSync(PATH_TO_HTML, htmlContent);
}

logInfo('Updating HTML imports...')
updateHTMLImports()


logInfo(`Removing folder: ${BUILT_FILES_FOLDER}...`)
fs.rmdirSync(BUILT_FILES_FOLDER)
fs.rmSync(OUT_FOLDER + '/' + "favicon.svg")


// Convert JS files to ISO-8859-15
function convertJSFilesToISO() {
    logInfo('Converting JS files to ISO-8859-15...')
    const files = fs.readdirSync(OUT_FOLDER + "/" + "js")
    for (const file of files) {
        if (file.endsWith(".js")) {
            const filePath = `${OUT_FOLDER}/js/${file}`
            logInfo(`Converting ${filePath} to ISO-8859-15...`) //console.log node
            let fileContent = fs.readFileSync(filePath, 'utf8')
            fileContent = encoding.convert(fileContent, 'ISO-8859-15', 'UTF-8') //recorre la carpeta y convierte los archivos a ISO-8859-15
            fs.writeFileSync(filePath, fileContent)
        }
    }
}
 
convertJSFilesToISO()

// Convert HTML file to ISO-8859-15
function convertHTMLFileToISO() {
    logInfo('Converting HTML file to ISO-8859-15...')
    let fileContent = fs.readFileSync(OUT_FOLDER + "/index.html", 'utf8')
    fileContent = fileContent.replace(/charset=\"utf-8\"/gi, 'charset="iso-8859-15"') // Replace charset=utf-8 with charset=iso-8859-15 in html file
    fileContent = encoding.convert(fileContent, 'ISO-8859-15', 'UTF-8')
    fs.writeFileSync(OUT_FOLDER + "/index.html", fileContent)
}

convertHTMLFileToISO()

logSuccess('Files have been reorganized and imports updated 🚀')
