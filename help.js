'use strict';

const {promisify} = require('util');
const {exec} = require('child_process');
const fs = require('fs');
const writeFileAsync = promisify(fs.writeFile);
const readFileAsync = promisify(fs.readFile);
const descs = require('./descs');

const e = function (cmd) {
	return new Promise(function (resolve, reject) {
		console.log('> $ ' + cmd);

		exec(cmd, function (err, stdout, stderr) {
			if (err) {
				reject(err);
			}
			console.log('\t\t\t\t\t...OK!');
			resolve(stdout);
		});
	});
};


const createVariant = async function ({desc: description, name, number}, names, readme, index) {
	console.log(`\n\n\n####################################`);
	console.log(`Process variant-${number}`);


	await e(`git checkout master`);
	await e(`git reset --hard`);
	await e(`git checkout -b variant-${number}`);

	await writeFileAsync('index.html', index
		.replace(/{{{VAR}}}/ig, number.toString())
		.replace(/{{{NAME}}}/ig, name)
	);
	await writeFileAsync('README.md', readme
		.replace(/{{{VAR}}}/ig, number.toString())
		.replace('{{{TASK}}}', description)
	);

	const filesToRemove = names
		.filter(n => ![ name, 'max' ].includes(n))
		.map(n => `tests/${n}.js`)
		.join(' ');

	console.log(filesToRemove);


	await e('rm ' + filesToRemove);
	await e('rm descs.js');
	await e('rm help.js');
	// await e('rm -rf node_modules/');

	await e(`git add .`);
	await e(`git add --all`);
	await e(`git commit -am "Подготовка варианта ${number}"`);
	await e(`git push -u origin variant-${number}:variant-${number}`);
};

(async function () {
	const readme = await readFileAsync('README.md', 'utf-8');
	const index = await readFileAsync('index.html', 'utf-8');

	const names = [];

	const variants = descs.map((desc, number) => {
		const name = desc.match(/`(.+)`/i)[ 1 ];
		names.push(name);
		return {name, desc, number: number + 1};
	});

	for (const variant of variants) {
		await createVariant(variant, names, readme, index);
	}
})()
	.catch(console.error);
