// url=https://www.figma.com/design/XDwmzlvcfKlbuogKzMMM4G/Components?node-id=61-13
// source=src/components/NavigationControls.jsx
// component=FilterChip
import figma from 'figma'
const instance = figma.selectedInstance

const label = instance.getString('Label')
const active = instance.getEnum("State", { "Default": false, "Hover": false, "Pressed": false, "Active": true, "Disabled": false })
const disabled = instance.getEnum("State", { "Default": false, "Hover": false, "Pressed": false, "Active": false, "Disabled": true })

export default {
  example: figma.code`
    <FilterChip label="${label}"${active ? ' active' : ''}${disabled ? ' disabled' : ''} onToggle={() => {}} />
  `,
  id: 'filter-chip',
  metadata: { nestable: true },
}
