import { exec } from 'child_process';
import { readdirSync, readFileSync } from 'fs';
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
  const workDir = path.join(__dirname, '../');
  const args = process.argv.slice(2);
  const env = getEnvValue('env', args);

  console.log(`🗑  Cleaning up dist folder...`);
  await execCommand(`rm -rf dist && mkdir -p dist/web-components`);
  console.log(`✅ Dist folder cleaned up successfully!!`);

  const componentsDir = path.join(
    workDir,
    'projects/web-components/src/app/components'
  );

  console.log(`🏗  Building components...`);
  const components = readdirSync(componentsDir);
  components.forEach((component) => compileComponent(component, env));
}

function readPackageJson(path: string) {
  return JSON.parse(readFileSync(path, 'utf8'));
}

async function compileComponent(componentName: string, env?: string) {
  const packageJsonObj = readPackageJson(
    path.join(
      __dirname,
      `../projects/web-components/src/app/components/${componentName}/package.json`
    )
  );

  const { version } = packageJsonObj;

  if (!version && env === 'prod') {
    console.log(
      `❌ Error in "${componentName}". Cannot find version in package.json`
    );
    return;
  }

  if (env === 'prod') {
    const buildJsFilesProd = `ng build --project web-components --configuration production --delete-output-path --output-path dist/tmp/${componentName} --main projects/web-components/src/app/components/${componentName}/${componentName}.compile.ts`;
    const bundleIntoSingleProd = `cat dist/tmp/${componentName}/runtime.js dist/tmp/${componentName}/main.js dist/tmp/${componentName}/polyfills.js > dist/web-components/${componentName}-${version}.js`;

    console.log(`🏗  Building "${componentName}" in production mode...`);
    await execCommand(buildJsFilesProd);
    console.log(`🏗  Generating "${componentName}" files...`);
    await execCommand(bundleIntoSingleProd);
    console.log(
      `✅ Success"${componentName}" version "${version}" built successfully!!`
    );
  } else {
    const buildJsFiles = `ng build --project web-components --configuration development --delete-output-path --output-path dist/tmp/${componentName} --main projects/web-components/src/app/components/${componentName}/${componentName}.compile.ts`;
    const bundleIntoSingleFile = `cat dist/tmp/${componentName}/runtime.js dist/tmp/${componentName}/main.js dist/tmp/${componentName}/polyfills.js > dist/web-components/${componentName}.js`;

    console.log(`🏗  Building "${componentName}" in dev mode...`);
    await execCommand(buildJsFiles);
    console.log(`🏗  Generating "${componentName}" files...`);
    await execCommand(bundleIntoSingleFile);
    console.log(`✅ "${componentName}" built successfully!!`);
  }
}

main();
