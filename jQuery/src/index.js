$(() => {
   DevExpress.ui.dxTreeView.defaultOptions({ 
    device: { deviceType: 'desktop' },
    options: {
        onInitialized: (e) => {
          const comp = e.component;
          if (comp.option().cssClass.includes('dx-filterbuilder-fields')) {
            comp.option('height', 200);
            comp.option('width', 200)
            comp.option('searchEnabled', true);
          }
        }
    	}
	});

  $('#filterBuilder').dxFilterBuilder({
    fields,
    value: filter,
  });
});
