import { moduleMetadata, Story, Meta } from '@storybook/angular';

import { CommonModule } from '@angular/common';

import { Story, Meta } from '@storybook/angular';

import { action } from '@storybook/addon-actions';

import { ExampleComponent } from './example.component';

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
  goNextStep: action('goNextStep'),
};

const Template: Story<ExampleComponent> = (args) => ({
  component: ExampleComponent,
  props: {
    ...args,
    goNextStep: actionsData.goNextStep,
  },
});

export const Catalogo = Template.bind({});
Catalogo.args = {
  title: 'Catalogo',
  nextPage: 'detalle',
};

export const Detalle = Template.bind({});
Detalle.args = {
  title: 'Detalle',
  nextPage: 'catalogo',
};
