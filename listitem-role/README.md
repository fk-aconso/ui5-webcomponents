# Role on custom list item

Reproduction of: [[Accessibility][Regression][ui5-li-custom] aria-labelledby empty for non-selected ui5-li-custom items in 2.21.1](https://github.com/UI5/webcomponents/issues/13478)

### Setup

```
cd listitem-role
pnpm install
pnpm test
```

### Reproduction

1. Run playwright tests

## Error:

```
Error: expect(locator).toBeVisible() failed

    Locator: getByRole('listitem', { name: 'Pineapple' })
    Expected: visible
    Timeout: 5000ms
    Error: element(s) not found
```

- With v`2.21.1` of the ui5 webcomponents using `getByRole` selector does not work as expected
- Switching back to v`2.19.1` this works fine. Even without setting a explicit `Pineapple`
