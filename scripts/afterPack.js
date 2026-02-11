import fs from 'fs/promises'
import path from 'path'

function isLinux(targets) {
  const re = /AppImage|snap|deb|rpm|freebsd|pacman/i
  return !!targets.find((target) => re.test(target.name))
}

async function afterPack({ targets, appOutDir }) {
  console.info('afterPack', targets, appOutDir)

  
  // 项目根目录（最重要）
  const projectDir = context.packager.info.projectDir
  const scriptsDir = path.join(projectDir, 'scripts')

  console.info('==== afterPack debug start ====')
  console.info('projectDir:', projectDir)
  console.info('appOutDir:', appOutDir)
  console.info('scriptsDir:', scriptsDir)

  try {
    const stat = await fs.stat(scriptsDir)
    console.info('scriptsDir exists, isDirectory:', stat.isDirectory())
  } catch (e) {
    console.error('scriptsDir NOT exists:', e.message)
    console.info('==== afterPack debug end ====')
    return
  }

  try {
    const files = await fs.readdir(scriptsDir, { withFileTypes: true })
    console.info('scriptsDir content:')
    for (const f of files) {
      console.info(
        `  - ${f.name} (${f.isDirectory() ? 'dir' : 'file'})`
      )
    }
  } catch (e) {
    console.error('read scriptsDir failed:', e)
  }

  console.info('==== afterPack debug end ====')
  if (!isLinux(targets)) return
  if (!Array.isArray(targets)) return
  const appName = 'aiwork'
  const scriptPath = path.join(appOutDir, appName)
    try {
    await fs.access(scriptPath)
  } catch {
    // mac / win 下根本不存在，直接跳过
    console.info('scriptPath not exist', scriptPath)
    return
  }
  const script = `#!/bin/bash\n"\${BASH_SOURCE%/*}"/${appName}.bin --no-sandbox "$@"`
  await fs.rename(scriptPath, `${scriptPath}.bin`)
  await fs.writeFile(scriptPath, script)
  await fs.chmod(scriptPath, 0o755)
}

export default afterPack
