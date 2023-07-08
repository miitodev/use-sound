import React from 'react';
import Wrapper from './helpers/Wrapper';
import { Meta, StoryObj } from '@storybook/react';

import CheckboxDemo from './demos/Checkbox';
import SimpleDemo from './demos/Simple';
import HoverDemo from './demos/Hover';
import RisingDemo from './demos/Rising';
import DrumMachineDemo from './demos/DrumMachine';
import MultipleSourcesDemo from './demos/SimpleMultipleSources';
import ShowWhilePlayingDemo from './demos/ShowWhilePlaying';

const meta: Meta<typeof SimpleDemo> = {
  title: 'useSound',
  component: <></>,
  decorators: [(storyFn) => <Wrapper>{storyFn()}</Wrapper>],
};

export const Simple: StoryObj<typeof SimpleDemo> = {
  name: 'Default',
  render: () => <SimpleDemo />,
};

export const Checkbox: StoryObj<typeof CheckboxDemo> = {
  render: () => (
    <div
      style={{ display: 'flex', width: 160, justifyContent: 'space-between' }}
    >
      <CheckboxDemo />
    </div>
  ),
};

export const Hovering: StoryObj<typeof HoverDemo> = {
  name: 'Play when hovering',
  render: () => <HoverDemo />,
};

export const Rising: StoryObj<typeof RisingDemo> = {
  name: 'Rising pitch',
  render: () => <RisingDemo />,
};

export const DrumMachine: StoryObj<typeof DrumMachineDemo> = {
  name: 'Drum machine (sprites)',
  render: () => <DrumMachineDemo />,
};

export const MultipleSources: StoryObj<typeof MultipleSourcesDemo> = {
  name: 'Multiple sources support',
  args: {
    order: 'wav_mp3',
  },
  argTypes: {
    order: {
      name: 'Source',
      control: { type: 'radio' },
      options: {
        'wav/mp3': 'wav_mp3',
        'mp3/wav': 'mp3_wav',
      },
    },
  },
  render: (order) => <MultipleSourcesDemo order={order} />,
};

export const ShowWhilePlaying = {
  name: 'With Howler events (show while playing)',
  render: () => <ShowWhilePlayingDemo />,
};

export default meta;
