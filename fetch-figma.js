// Pull design data from Figma REST API
// Usage: node fetch-figma.js
// Requires FIGMA_TOKEN in .env

import 'dotenv/config'

const TOKEN = process.env.FIGMA_TOKEN
const FILE_ID = 'V4v1EQKpNiZfKxobV1l5en'
const NODE_ID = '1:5'

if (!TOKEN) {
  console.error('Missing FIGMA_TOKEN in .env')
  process.exit(1)
}

async function fetchFigma() {
  console.log('Fetching Figma file...')

  // Get node data
  const res = await fetch(
    `https://api.figma.com/v1/files/${FILE_ID}/nodes?ids=${NODE_ID}`,
    { headers: { 'X-Figma-Token': TOKEN } }
  )
  const data = await res.json()

  // Get image URLs
  const imgRes = await fetch(
    `https://api.figma.com/v1/files/${FILE_ID}/images`,
    { headers: { 'X-Figma-Token': TOKEN } }
  )
  const imgData = await imgRes.json()

  // Write raw data
  const fs = await import('fs')
  fs.writeFileSync('figma-raw.json', JSON.stringify(data, null, 2))
  fs.writeFileSync('figma-image-urls.json', JSON.stringify(imgData.meta?.images || {}, null, 2))

  // Build readable tree
  function rgbToHex(c) {
    const r = Math.round((c.r || 0) * 255)
    const g = Math.round((c.g || 0) * 255)
    const b = Math.round((c.b || 0) * 255)
    return `#${r.toString(16).padStart(2,'0')}${g.toString(16).padStart(2,'0')}${b.toString(16).padStart(2,'0')}`
  }

  function walk(node, depth = 0) {
    const indent = '  '.repeat(depth)
    const bb = node.absoluteBoundingBox || {}
    let line = `${indent}${node.name} (${node.type}) [${bb.width?.toFixed(0)||0}×${bb.height?.toFixed(0)||0}]`

    const fills = node.fills || []
    for (const f of fills) {
      if (f.type === 'SOLID' && f.visible !== false && f.color) {
        line += ` bg:${rgbToHex(f.color)}`
        if (f.opacity !== undefined && f.opacity < 1) line += `@${f.opacity.toFixed(1)}`
      }
      if (f.type === 'IMAGE') line += ' [IMAGE]'
    }

    if (node.type === 'TEXT') {
      const s = node.style || {}
      line += ` font:${s.fontFamily||'?'}/${s.fontWeight||'?'}/${s.fontSize||'?'}px`
      line += ` "${(node.characters || '').slice(0, 80)}"`
    }

    if (node.layoutMode && node.layoutMode !== 'NONE') {
      line += ` flex:${node.layoutMode} gap:${node.itemSpacing||0} pad:${node.paddingTop||0}/${node.paddingRight||0}/${node.paddingBottom||0}/${node.paddingLeft||0}`
    }

    if (node.cornerRadius > 0) line += ` r:${node.cornerRadius}`

    const strokes = node.strokes || []
    for (const s of strokes) {
      if (s.type === 'SOLID' && s.visible !== false && s.color) {
        line += ` border:${rgbToHex(s.color)}`
      }
    }

    const lines = [line]
    for (const child of (node.children || [])) {
      lines.push(...walk(child, depth + 1))
    }
    return lines
  }

  const node = data.nodes[NODE_ID]?.document
  if (node) {
    const tree = walk(node.children?.[0] || node, 0)
    fs.writeFileSync('figma-design-tree.txt', tree.join('\n'))
    console.log(`✓ Extracted ${tree.length} lines → figma-design-tree.txt`)
  }

  console.log(`✓ Image URLs → figma-image-urls.json`)
  console.log(`✓ Raw data → figma-raw.json`)
  console.log('Done!')
}

fetchFigma().catch(console.error)
