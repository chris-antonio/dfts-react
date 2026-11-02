// url=https://www.figma.com/design/XDwmzlvcfKlbuogKzMMM4G/Components?node-id=65-63
// source=src/components/Tile.jsx
// component=Tile
import figma from 'figma'
const instance = figma.selectedInstance

const title = instance.getString('Title')
const description = instance.getString('Description')
const disabled = instance.getEnum("State", { "Default": false, "Hover": false, "Pressed": false, "Focused": false, "Error": false, "Disabled": true })

export default {
  example: figma.code`
    <Tile title="${title}" description="${description}"${disabled ? ' disabled' : ''} onClick={() => {}} />
  `,
  id: 'tile',
  metadata: { nestable: true },
}
