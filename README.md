# ui5-webcomponents

Reproduction of issues regarding UI5 Web Components

## Multiple Themes

I want to load multiple custom themes.

Followed instruction: [Creating Custom Theme with UI Theme Designer](https://ui5.github.io/webcomponents/docs/advanced/theming/)

### Setup

```
cd multiple-themes
npm install
npm run dev
```

### Reproduction

1. Open http://localhost:5173/?sap-ui-theme=testpink

- Theme `testpink` is loaded, button text displayed in pink

2. Open http://localhost:5173/?sap-ui-theme=testgreen

- Theme `testgreen` is NOT loaded. Fallback to `sap_horizon`

## Error:

```
@ui5_webcomponents_d…s.js?v=f2f8f665:937 You have requested a non-registered theme testgreen - falling back to sap_horizon. Registered themes are: sap_horizon
getThemeProperties	@	@ui5_webcomponents_d…s.js?v=f2f8f665:937
loadThemeBase	@	@ui5_webcomponents_d….js?v=f2f8f665:1110
applyTheme	@	@ui5_webcomponents_d….js?v=f2f8f665:1155
await in applyTheme
```

- If you include only one css file for a custom theme it works
- IF you include multiple css files for custom themes only the last one is working
