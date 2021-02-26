const success = require('chalk').green
const error = require('chalk').red
const info = require('chalk').blue
const log = console.log

const { execSync, spawnSync } = require('child_process')

const { existsSync, mkdirSync } = require('fs')
const { resolve, relative } = require('path')

const protocVersion = '3.5.1'

const generatedPath = relative(__dirname, resolve('src', 'generated'))

const binSuffix = process.platform === 'win32' ? '.cmd' : ''
const nodeModulesBin = resolve(__dirname, 'node_modules', '.bin')

const downloadPath = resolve(nodeModulesBin, 'download') + binSuffix

const protocRoot = resolve(__dirname, 'protoc')
const protocLocalBinary = execSync('which protoc').toString().replace('\n', '')

const protocPath = resolve(protocRoot, 'bin', 'protoc')

const protocPluginPath = resolve(nodeModulesBin, 'protoc-gen-ts') + binSuffix

const rimrafPath = resolve(nodeModulesBin, 'rimraf') + binSuffix

const protoIncludePath = relative(__dirname, resolve('src', 'proto'))
const protoGlobPath = resolve(protoIncludePath, '**/*.proto')

const supportedPlatforms = {
  darwin: {
    downloadSuffix: 'osx-x86_64',
    name: 'Mac'
  },
  linux: {
    downloadSuffix: 'linux-x86_64',
    name: 'Linux'
  },
  win32: {
    downloadSuffix: 'win32',
    name: 'Windows'
  }
}

log(
  require('util').inspect({
    protocVersion,
    generatedPath,
    binSuffix,
    nodeModulesBin,
    downloadPath,
    protocRoot,
    protocLocalBinary,
    protocPath,
    protocPluginPath,
    rimrafPath,
    protoIncludePath,
    protoGlobPath
  })
)

const platform = supportedPlatforms[process.platform]
const platformName = platform ? platform.name : `UNKNOWN:${process.platform}`
log(info('You appear to be running on', platformName))

requireBuild()

const glob = require('glob')

requireProtoc()

requireDir(generatedPath)

// Generate no services

log(
  info(
    `Generating TypeScript definition from ${protoGlobPath} to ${generatedPath}...`
  )
)

run(
  protocLocalBinary || protocPath,
  `-I${protoIncludePath}`,
  `--plugin="protoc-gen-ts=${protocPluginPath}"`,
  `--js_out=import_style=commonjs,binary:${generatedPath}`,
  `--ts_out=${generatedPath}`,
  ...glob.sync(protoGlobPath).map(function (match) {
    return relative(__dirname, match)
  })
)

log(
  success(
    `Generating TypeScript definition from ${protoGlobPath} to ${generatedPath}: [DONE]`
  )
)

run(rimrafPath, protocRoot)

function requireBuild () {
  log(info('Ensuring we have NPM packages installed...'))
  run('yarn', 'install')
}

function requireProtoc () {
  log(info('Checking existing local protoc binary...'))
  if (existsSync(protocLocalBinary)) {
    log(info(`Using existing local protoc binary ${protocLocalBinary}!`))
    return
  }

  if (!platform) {
    throw new Error(
      'Cannot download protoc. ' +
        platformName +
        ' is not currently supported by ts-protoc-gen'
    )
  }

  log(info(`Downloading protoc v${protocVersion} for ${platform.name}`))
  const protocUrl = `https://github.com/google/protobuf/releases/download/v${protocVersion}/protoc-${protocVersion}-${platform.downloadSuffix}.zip`

  run(downloadPath, '--extract', '--out', protocRoot, protocUrl)
}

function requireDir (path) {
  if (existsSync(path)) {
    run(rimrafPath, path)
  }

  mkdirSync(path)
}

function run (executablePath, ...args) {
  log(info(`Running ${executablePath} ${args.join(' ')}`))
  const result = spawnSync(executablePath, args, {
    cwd: __dirname,
    shell: true,
    stdio: 'inherit'
  })
  if (result.status !== 0) {
    log(error(`Exited ${executablePath} with status ${result.status}`))
    throw new Error(`Exited ${executablePath} with status ${result.status}`)
  }
}
