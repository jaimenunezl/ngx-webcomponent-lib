import { moduleMetadata, Story, Meta } from '@storybook/angular';

import { CommonModule } from '@angular/common';

import { action } from '@storybook/addon-actions';

import { ExampleComponent } from './example.component';
import { exampleDevicesMock } from './example-mock';

export default {
  component: ExampleComponent,
  decorators: [
    moduleMetadata({
      declarations: [ExampleComponent],
      imports: [CommonModule],
    }),
  ],
  excludeStories: /.*Data$/,
  title: 'Example',
} as Meta;

export const actionsData = {
  onBuyClickEmitter: action('onBuyClickEmitter'),
};

const Template: Story<ExampleComponent> = (args) => ({
  component: ExampleComponent,
  props: {
    ...args,
    onBuyFn: actionsData.onBuyClickEmitter,
  },
});

export const Default = Template.bind({});
Default.args = {
  smartphonesList: exampleDevicesMock,
};

export const NoDevices = Template.bind({});
NoDevices.args = {
  smartphonesList: [],
};
