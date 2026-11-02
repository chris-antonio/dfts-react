// url=https://www.figma.com/design/XDwmzlvcfKlbuogKzMMM4G/Components?node-id=165-204
// source=src/components/Breadcrumbs.jsx
// component=Breadcrumbs
import figma from 'figma'
const instance = figma.selectedInstance

export default {
  example: figma.code`
    <Breadcrumbs items={[{ label: "Projects", href: "#" }, { label: "DFTS", href: "#" }, { label: "Component Kit" }]} />
  `,
  id: 'breadcrumbs',
  metadata: { nestable: true },
}
