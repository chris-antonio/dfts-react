// url=https://www.figma.com/design/XDwmzlvcfKlbuogKzMMM4G/Components?node-id=78-3
// source=src/components/Carousel.jsx
// component=Carousel
import figma from 'figma'
const instance = figma.selectedInstance

export default {
  example: figma.code`
    <Carousel
      label="Carousel"
      slides={[<div key="1">Slide 1</div>, <div key="2">Slide 2</div>, <div key="3">Slide 3</div>]}
    />
  `,
  id: 'carousel',
  metadata: { nestable: true },
}
