<script setup lang="ts">
import { ref } from 'vue';

import 'devextreme/dist/css/dx.material.blue.light.compact.css';
import DxFilterBuilder from 'devextreme-vue/filter-builder';
import TreeView from 'devextreme/ui/tree_view';
import type { Properties, InitializedEvent } from 'devextreme/ui/tree_view';
import { filter, fields } from '../data';

const filterValue = ref(filter);

TreeView.defaultOptions<Properties>({
  device: { deviceType: 'desktop' },
  options: {
    onInitialized: (e: InitializedEvent) => {
      const treeViewInstance = e.component as TreeView;

      if ((treeViewInstance?.option('cssClass') as string)?.includes('dx-filterbuilder-fields')) {
        treeViewInstance?.option({
          height: 200,
          width: 200,
          searchEnabled: true,
        });
      }
    }
  }
});
</script>
<template>
  <div>
    <div class="filter-container">
      <DxFilterBuilder
        :fields="fields"
        v-model:value="filterValue"
      />
    </div>
  </div>
</template>
<style>
.filter-container {
  background-color: transparent;
  box-shadow: 0 8px 16px 0 rgb(0 0 0 / 14%), 0 0 2px 0 rgb(0 0 0 / 12%);
  border-radius: 6px;
  padding: 15px;
  margin: 24px;
}

.dx-filterbuilder .dx-numberbox {
  width: 80px;
}

.dx-treeview-search {
  margin-bottom: 4px;
}

.dx-filterbuilder-overlay
  .dx-popup-content-scrollable
  > div.dx-treeview-with-search {
  max-height: 300px;
  height: auto;
}

.dx-filterbuilder-overlay div.dx-popup-content-scrollable {
  overflow: hidden;
}

.dx-filterbuilder-group-item .dx-scrollable-scroll-content {
  display: none;
}

.dx-treeview .dx-empty-message {
    padding: 8px;
}
</style>
