/**
 * Copyright (c) 2020, chanjet-fe, https://github.com/chanjet-fe.
 * Based on create-react-app but adds a bunch of useful features.
 */

'use strict';

const chalk = require('chalk');
const commander = require('commander');
const execSync = require('child_process').execSync;
const fs = require('fs-extra');
const os = require('os');
const path = require('path');
const semver = require('semver');
const boxen = require('boxen');

const checkIfOnline = require('./lib/checkIfOnline');

const { checkNpmVersion, checkYarnVersion, shouldUseYarn } = require('./lib/checkVersion');
const install = require('./lib/install');

const checkAppName = require('./lib/checkAppName');
const isSafeToCreateProjectIn = require('./lib/isSafeToCreateProjectIn');
const downloadGithub = require('./lib/downloadGithub');
const checkThatNpmCanReadCwd = require('./lib/checkThatNpmCanReadCwd');

const packageJson = require('./package.json');

let projectName;

const program = new commander.Command(packageJson.name)
  .version(packageJson.version)
  .arguments('<project-directory>')
  .usage(`${chalk.green('<project-directory>')} [options]`)
  .action(name => {
    projectName = name;
  })
  .option('--verbose', 'print additional logs')
  .option('--use-npm')
  .option('--use-pnp')
  .allowUnknownOption()
  .on('--help', () => {
    console.log();
    console.log(`More info see: https://www.github.com/chanjet-fe/create-cjet-h5`);
    console.log();
  })
  .parse(process.argv);


if (typeof projectName === 'undefined') {
  console.error('Please specify the project directory:');
  console.log(
    `  ${chalk.cyan(program.name())} ${chalk.green('<project-directory>')}`
  );
  console.log();
  console.log('For example:');
  console.log(`  ${chalk.cyan(program.name())} ${chalk.green('chanjet-h5')}`);
  console.log();
  console.log(
    `Run ${chalk.cyan(`${program.name()} --help`)} to see all options.`
  );
  process.exit(1);
}

createApp(
  projectName,
  program.verbose,
  program.useNpm,
  program.usePnp
);

async function createApp(
  name,
  verbose,
  useNpm,
  usePnp
) {
  const unsupportedNodeVersion = !semver.satisfies(process.version, '>=8.10.0');
  if (unsupportedNodeVersion) {
    console.log(
      chalk.yellow(
        `You are using Node ${process.version} so the project will be bootstrapped with an old unsupported version of tools.\n\n` +
        `Please update to Node 8.10 or higher for a better, fully supported experience.\n`
      )
    );
  }

  const root = path.resolve(name);
  const appName = path.basename(root);

  checkAppName(appName);

  fs.ensureDirSync(name);
  if (!isSafeToCreateProjectIn(root, name)) {
    process.exit(1);
  }

  await downloadGithub(root);

  const appPackage = require(path.join(root, 'package.json'));

  const packageJson = Object.assign({}, appPackage, {
    name: appName,
    version: '1.0.0'
  });
  fs.writeFileSync(
    path.join(root, 'package.json'),
    JSON.stringify(packageJson, null, 2) + os.EOL
  );

  let message = chalk.cyan('欢迎使用移动端H5企业级应用解决方案');
  message += `\n\nCreating a new h5 app in ${chalk.green(root)}.`;
  message += '\n\nMore info see: https://www.github.com/chanjet-fe/create-cjet-h5'
  console.log(boxen(message, {
    padding: 1,
    borderColor: 'white',
    align: 'center',
    margin: 0,
    borderStyle: 'classic'
  }));

  const useYarn = useNpm ? false : shouldUseYarn();
  const originalDirectory = process.cwd();
  process.chdir(root);
  if (!useYarn && !checkThatNpmCanReadCwd()) {
    process.exit(1);
  }

  if (!useYarn) {
    const npmInfo = checkNpmVersion();
    if (!npmInfo.hasMinNpm) {
      if (npmInfo.npmVersion) {
        console.log(
          chalk.yellow(
            `You are using npm ${npmInfo.npmVersion} so the project will be bootstrapped with an old unsupported version of tools.\n\n` +
            `Please update to npm 5 or higher for a better, fully supported experience.\n`
          )
        );
      }
    }
  } else if (usePnp) {
    const yarnInfo = checkYarnVersion();
    if (!yarnInfo.hasMinYarnPnp) {
      if (yarnInfo.yarnVersion) {
        console.log(
          chalk.yellow(
            `You are using Yarn ${yarnInfo.yarnVersion} together with the --use-pnp flag, but Plug'n'Play is only supported starting from the 1.12 release.\n\n` +
            `Please update to Yarn 1.12 or higher for a better, fully supported experience.\n`
          )
        );
      }
      // 1.11 had an issue with webpack-dev-middleware, so better not use PnP with it (never reached stable, but still)
      usePnp = false;
    }
  }

  if (useYarn) {
    let yarnUsesDefaultRegistry = true;
    try {
      yarnUsesDefaultRegistry =
        execSync('yarnpkg config get registry')
          .toString()
          .trim() === 'https://registry.yarnpkg.com';
    } catch (e) {
      // ignore
    }
    if (yarnUsesDefaultRegistry) {
      fs.copySync(
        require.resolve('./yarn.lock.cached'),
        path.join(root, 'yarn.lock')
      );
    }
  }

  const allDependencies = [
    // 'react',
    // 'react-dom',
    'cjet',
    // 'less',
    // 'less-loader',
    // 'typescript',
    // 'babel-plugin-import',
    // '@types/node',
    // '@types/react',
    // '@types/react-dom',
    // 'antd-mobile'
  ];
  const isOnline = await checkIfOnline(useYarn);

  await install(
    root,
    useYarn,
    usePnp,
    allDependencies,
    verbose,
    isOnline
  );

  // Display the most elegant way to cd.
  // This needs to handle an undefined originalDirectory for
  // backward compatibility with old global-cli's.
  let cdpath;
  if (originalDirectory && path.join(originalDirectory, appName) === root) {
    cdpath = appName;
  } else {
    cdpath = root;
  }

  // Change displayed command to yarn instead of yarnpkg
  const displayedCommand = useYarn ? 'yarn' : 'npm';

  console.log();
  console.log(`Success! Created ${appName} at ${root}`);
  console.log('Inside that directory, you can run several commands:');
  console.log();
  console.log(chalk.cyan(`  ${displayedCommand} ${useYarn ? '' : 'run '}dev`));
  console.log('    Starts the development server.');
  console.log();
  console.log(
    chalk.cyan(`  ${displayedCommand} ${useYarn ? '' : 'run '}build`)
  );
  console.log('    Bundles the app into static files for production.');
  console.log();
  console.log();
  console.log('We suggest that you begin by typing:');
  console.log();
  console.log(chalk.cyan('  cd'), cdpath);
  console.log(`  ${chalk.cyan(`${displayedCommand} ${useYarn ? '' : 'run '}dev`)}`);

  console.log();
}





















