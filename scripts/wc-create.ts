import { pascalCase } from 'change-case';
import { exec } from 'child_process';

import { readFileSync, writeFileSync } from 'fs';
import * as path from 'path';

function getEnvValue(varName: string, args: string[]) {
  let item;

  try {
    item = args.find((arg) => arg.split('=')[0] === varName);
  } catch {
    return null;
  }

  if (item) {
    return item.split('=')[1];
  } else {
    return null;
  }
}

function execCommand(command: string) {
  return new Promise(function (resolve, reject) {
    exec(command, (error, stdout) => {
      if (error) {
        reject(error);
        return;
      }

      resolve(stdout.trim());
    });
  });
}

async function main() {
  console.log('🏗  Creating a new Web Component project...');

  const args = process.argv.slice(2);
  const elementName = getEnvValue('name', args);
  const workDir = path.join(__dirname, '../');
  const modulePascalCase = pascalCase(elementName + '-module');
  const componentPascalCase = pascalCase(elementName + '-component');

  if (!elementName) {
    console.log('❌  Cannot find param "name"');
    return;
  }

  console.log('🏗  Adding component...');
  try {
    await execCommand(
      [
        'ng g c components/',
        elementName,
        ' --project web-components',
        ' --skip-import',
      ].join('')
    );
  } catch (error) {
    console.log('❌  Cannot create component: ', error);
    return;
  }
  console.log('✅ Component added successfully!');

  const webComponentPath = path.join(
    workDir,
    'projects/web-components/src/app/components/',
    elementName
  );

  console.log('📋 Coping files...');
  try {
    await execCommand(
      [
        'cp ',
        path.join(workDir, 'scripts/templates/' + 'compile.ts'),
        ' ',
        path.join(webComponentPath, elementName + '.compile.ts'),
      ].join('')
    );
  } catch (error) {
    console.log('❌  Cannot copy file: ', error);
    return;
  }

  try {
    await execCommand(
      [
        'cp',
        ' scripts/templates/module.ts ',
        path.join(webComponentPath, elementName + '.module.ts'),
      ].join('')
    );
  } catch (error) {
    console.log('❌  Cannot copy file: ', error);
    return;
  }

  try {
    await execCommand(
      [
        'cp',
        ' scripts/templates/package.json ',
        path.join(webComponentPath, 'package.json'),
      ].join('')
    );
  } catch (error) {
    console.log('❌  Cannot copy file: ', error);
    return;
  }

  console.log('✅ Files copied successfully!');

  console.log('📝 Editing files...');
  try {
    let compileFileContent: Buffer;
    let moduleFileContent: Buffer;
    let packageFileContent: Buffer;

    try {
      compileFileContent = readFileSync(
        path.join(webComponentPath, elementName + '.compile.ts')
      );
      moduleFileContent = readFileSync(
        path.join(webComponentPath, elementName + '.module.ts')
      );
      packageFileContent = readFileSync(
        path.join(webComponentPath, 'package.json')
      );
    } catch (error) {
      console.log('❌  Cannot read files: ', error);
      return;
    }

    let compileEdited = '';
    let moduleEdited = '';
    let packageEdited = '';

    compileEdited = compileFileContent
      .toString()
      .replace(/<MODULE_PASCAL>/gm, modulePascalCase)
      .replace(/<MODULE_PARAM>/gm, elementName);

    moduleEdited = moduleFileContent
      .toString()
      .replace(/<COMPONENT_PASCAL>/gm, componentPascalCase)
      .replace(/<COMPONENT_PARAM>/gm, elementName)
      .replace(/<MODULE_PASCAL>/gm, modulePascalCase);

    packageEdited = packageFileContent
      .toString()
      .replace(/<COMPONENT_PARAM>/gm, elementName);

    try {
      writeFileSync(
        path.join(webComponentPath, elementName + '.compile.ts'),
        compileEdited
      );
      writeFileSync(
        path.join(webComponentPath, elementName + '.module.ts'),
        moduleEdited
      );
      writeFileSync(path.join(webComponentPath, 'package.json'), packageEdited);
    } catch (error) {
      console.log('❌  Cannot edit files: ', error);
      return;
    }
    console.log('✅ Files edited successfully!');
  } catch (error) {
    console.log('❌  Cannot edit files: ', error);
    return;
  }
}

main();
