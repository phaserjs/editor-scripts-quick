const fs = require("fs");
const path = require("path");

function endsWith(file, ...fileExtensions) {

	for (const ext of fileExtensions) {

		if (file.endsWith(ext)) {

			return true;
		}
	}

	return false;
}

function copyFiles(srcFolder, outFolder, ...exts) {

	const files = fs.readdirSync(srcFolder);

	for (const file of files) {

		const from = path.join(srcFolder, file);
		const to = path.join(outFolder, file);

		if (fs.statSync(from).isDirectory()) {

			fs.mkdirSync(to);

			copyFiles(from, to, ...exts);

		} else if (endsWith(file, ...exts) && file !== "index.js") {

			fs.copyFileSync(from, to);
		}
	}
}

function processJSFiles(fromFolder, toFolder) {

	const files = fs.readdirSync(fromFolder);

	for (const file of files) {

		const from = path.join(fromFolder, file);
		const to = path.join(toFolder, file);

		if (fs.statSync(from).isDirectory()) {

			processJSFiles(from, to);

		} else if (endsWith(file, ".js") && file !== "index.js") {

			let content = fs.readFileSync(from, "utf8");

			const importRegex = /from "([^"]+)"/g;

			content = content.replace(importRegex, (match, p1) => {
				if (p1 === '@phaserjs/editor-scripts-base') {
					return `from "../../phaserjs_editor_scripts_base/index.js"`;
				}
				return `from "${p1}.js"`;
			});

			//console.log(`Writing ${to}`);
			fs.writeFileSync(to, content);
		}
	}
}

const packageData = JSON.parse(fs.readFileSync("package.json"));
const name = packageData.name
	.replaceAll("@", "")
	.replaceAll("/", "_")
	.replaceAll("-", "_");

const version = packageData.version;

fs.rmSync(`browser/${name}`, {recursive: true, force: true});
fs.mkdirSync(`browser/${name}`, { recursive: true });

fs.writeFileSync(`browser/${name}/library.txt`, version);
copyFiles("src", `browser/${name}/`, ".scene", ".components");
processJSFiles("out", `browser/${name}/`);
