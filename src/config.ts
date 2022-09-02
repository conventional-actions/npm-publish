import * as core from '@actions/core'

type Config = {
  access: string
  tag: string
}

export async function getConfig(): Promise<Config> {
  return {
    access: core.getInput('access') || '',
    tag: core.getInput('tag') || 'latest'
  }
}
