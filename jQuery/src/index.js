import { filter, fields } from './data.js';

DevExpress.ui.dxTreeView.defaultOptions({
  device: { deviceType: 'desktop' },
  options: {
    onInitialized: (e) => {
      const treeViewInstance = e.component;
      if (treeViewInstance.option('cssClass').includes('dx-filterbuilder-fields')) {
        treeViewInstance.option({
          height: 200,
          width: 200,
          searchEnabled: true
        });
      }
    }
  }
});

$(() => {
  $('#filterBuilder').dxFilterBuilder({
    fields,
    value: filter,
  });
});
