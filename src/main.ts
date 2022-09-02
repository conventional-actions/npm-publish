import * as core from '@actions/core'
import * as exec from '@actions/exec'
import {getConfig} from './config'

async function run(): Promise<void> {
  try {
    const config = await getConfig()

    let args: string[] = ['publish']

    if (config.access) {
      args = args.concat('--access', config.access)
    }

    if (config.tag) {
      args = args.concat('--tag', config.tag)
    }

    await exec.exec('npm', args)
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
