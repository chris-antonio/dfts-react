// url=https://www.figma.com/design/XDwmzlvcfKlbuogKzMMM4G/Components?node-id=165-251
// source=src/components/Table.jsx
// component=Table
import figma from 'figma'
const instance = figma.selectedInstance

export default {
  example: figma.code`
    <Table
      columns={columns}
      rows={rows}
      selectable
    />
  `,
  id: 'table',
  metadata: { nestable: true },
}
