import { NgModule } from '@angular/core';

import { WebcomponentFourComponent } from './components/webcomponent-four/webcomponent-four.component';
import { WebcomponentOneComponent } from './components/webcomponent-one/webcomponent-one.component';
import { WebcomponentTwoComponent } from './components/webcomponent-two/webcomponent-two.component';

@NgModule({
  declarations: [
    WebcomponentFourComponent,
    WebcomponentOneComponent,
    WebcomponentTwoComponent,
  ],
  imports: [],
  exports: [
    WebcomponentFourComponent,
    WebcomponentOneComponent,
    WebcomponentTwoComponent,
  ],
})
export class ComponentsModule {}
