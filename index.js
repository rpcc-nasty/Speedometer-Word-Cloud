import React from 'react'
import { Button } from '@storybook/react/demo'
import { storiesOf } from '@storybook/react'

// DEVELOPMENT
import ReactSpeedometer from '../index'
// PRODUCTION: switch to dist for checking production version
// import ReactSpeedometer from "../../dist/index"

import SpeedoButton from './speedo-button'
import MultiSpeedoMeters from './multi-speedometers'
import AutoRefresh from './auto-refresh'

export default {
  title: `<ReactSpeedometer>`,
}

const textColor = '#AAA'
export const GradientEffectWithLargeNumberOfSegmentsAndMaxSegmentLabelsConfig = () => (
    <ReactSpeedometer
      needleHeightRatio={0.7}
      maxSegmentLabels={5}
      segments={5555}
      value={333}
      textColor={textColor}
    />
  )