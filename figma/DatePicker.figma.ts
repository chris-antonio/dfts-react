// url=https://www.figma.com/design/XDwmzlvcfKlbuogKzMMM4G/Components?node-id=76-3
// source=src/components/DatePicker.jsx
// component=DatePicker
import figma from 'figma'
const instance = figma.selectedInstance

export default {
  example: figma.code`
    <DatePicker value={date} onChange={setDate} />
  `,
  id: 'date-picker',
  metadata: { nestable: true },
}
