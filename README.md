<!-- default badges list -->
![](https://img.shields.io/endpoint?url=https://codecentral.devexpress.com/api/v1/VersionRange/1128205383/25.2.2%2B)
[![](https://img.shields.io/badge/Open_in_DevExpress_Support_Center-FF7200?style=flat-square&logo=DevExpress&logoColor=white)](https://supportcenter.devexpress.com/ticket/details/T1318162)
[![](https://img.shields.io/badge/📖_How_to_use_DevExpress_Examples-e9f6fc?style=flat-square)](https://docs.devexpress.com/GeneralInformation/403183)
[![](https://img.shields.io/badge/💬_Leave_Feedback-feecdd?style=flat-square)](#does-this-example-address-your-development-requirementsobjectives)
<!-- default badges end -->
# DevExtreme FilterBuilder - How to Enable Search for Fields Dropdown

This example demonstrates how to enable search for the fields dropdown via [TreeView.defaultOptions(rule)](https://js.devexpress.com/Documentation/ApiReference/UI_Components/dxTreeView/Methods/#defaultOptionsrule).

![FilterBuilder Fields Dropdown with Search](images/search-enabled-for-dropdown.gif)

## Implementation Details 

Use [TreeView.defaultOptions(rule)](https://js.devexpress.com/Documentation/ApiReference/UI_Components/dxTreeView/Methods/#defaultOptionsrule) method to set the [TreeView.searchEnabled](https://js.devexpress.com/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#searchEnabled) option to true. Then, add CSS to resolve styling and scrolling issues.

## Files to Review

- **Angular**
    - [app.component.html](Angular/src/app/app.component.html)
    - [app.component.ts](Angular/src/app/app.component.ts)
    - [app.component.scss](Angular/src/app/app.component.scss)
- **React**
    - [App.tsx](React/src/App.tsx)
    - [App.css](React/src/App.css)
- **Vue**
    - [HomeContent.vue](Vue/src/components/HomeContent.vue)
- **jQuery**
    - [index.html](jQuery/src/index.html)
    - [index.js](jQuery/src/index.js)
    - [index.css](jQuery/src/index.css)
- **ASP.NET Core**    
    - [Index.cshtml](ASP.NET%20Core/Views/Home/Index.cshtml)
    - [Site.css](ASP.NET%20Core/wwwroot/css/Site.css)

## Documentation

- [FilterBuilder Overview](https://js.devexpress.com/Documentation/Guide/UI_Components/FilterBuilder/Overview/)
- [TreeView.defaultOptions(rule)](https://js.devexpress.com/Documentation/ApiReference/UI_Components/dxTreeView/Methods/#defaultOptionsrule)
- [TreeView.searchEnabled](https://js.devexpress.com/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#searchEnabled)
- [HTML-Based Components Customization](https://js.devexpress.com/Documentation/Guide/Themes_and_Styles/HTML-Based_Components_Customization/)

<!-- feedback -->
## Does this example address your development requirements/objectives?

[<img src="https://www.devexpress.com/support/examples/i/yes-button.svg"/>](https://www.devexpress.com/support/examples/survey.xml?utm_source=github&utm_campaign=devextreme-filterbuilder-enable-search-for-fields-dropdown&~~~was_helpful=yes) [<img src="https://www.devexpress.com/support/examples/i/no-button.svg"/>](https://www.devexpress.com/support/examples/survey.xml?utm_source=github&utm_campaign=devextreme-filterbuilder-enable-search-for-fields-dropdown&~~~was_helpful=no)

(you will be redirected to DevExpress.com to submit your response)
<!-- feedback end -->
