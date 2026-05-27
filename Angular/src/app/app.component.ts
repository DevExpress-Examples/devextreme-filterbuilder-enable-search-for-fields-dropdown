import { Component } from '@angular/core';
import TreeView, { Properties } from "devextreme/ui/tree_view";
import { DxTreeViewTypes } from "devextreme-angular/ui/tree-view"
import { Service } from './app.service';
import type { Fields, Condition } from './app.service';
import { DxFilterBuilderModule } from 'devextreme-angular';

@Component({
  selector: 'app-root',
  imports: [DxFilterBuilderModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  fields: Fields;

  filter: Condition;

  gridFilterValue: Condition;

  constructor(service: Service) {
    TreeView.defaultOptions<Properties>({
      device: { deviceType: "desktop" },
      options: {
        onInitialized: (e: DxTreeViewTypes.InitializedEvent) => {
          const treeViewInstance = e.component;
          if ((treeViewInstance?.option('cssClass') as string)?.includes('dx-filterbuilder-fields')) {
            treeViewInstance?.option({
              height: 200,
              width: 200,
              searchEnabled: true,
            })
          }
        }
      }
    });

    this.fields = service.getFields();
    this.filter = service.getFilter();
    this.gridFilterValue = this.filter;
  }
}
