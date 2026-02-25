import { useCallback, useState } from 'react';
import './App.css';
import 'devextreme/dist/css/dx.material.blue.light.compact.css';
import FilterBuilder, { type FilterBuilderTypes } from 'devextreme-react/filter-builder';
import dxTreeView, { type Properties as dxTreeViewProperties, type InitializedEvent as dxTreeViewInitializedEvent } from 'devextreme/ui/tree_view';

import { filter, fields } from './data';

dxTreeView.defaultOptions<dxTreeViewProperties>({
  device: { deviceType: 'desktop' },
  options: {
    onInitialized: (e: dxTreeViewInitializedEvent) => {
      const treeViewInstance = e.component;
      if ((treeViewInstance?.option('cssClass') as string)?.includes('dx-filterbuilder-fields')) {
        treeViewInstance?.option({
          height: 200,
          width: 200,
          searchEnabled: true,
        });
      }
    },
  },
});

function App(): JSX.Element {
  const [value, setValue] = useState(filter);

  const onValueChanged = useCallback((e: FilterBuilderTypes.ValueChangedEvent) => {
    setValue(e.value);
  }, []);

  return (
    <div className='demo-container'>
      <div className='filter-container'>
        <FilterBuilder fields={fields} value={value} onValueChanged={onValueChanged} />
      </div>
    </div>
  );
}

export default App;
