# getting-started-jest

## env

```bash
yarn add --dev jest
```

```bash
yarn add --dev babel-jest @babel/core @babel/preset-env
```

```javascript
// babel.config.js
module.exports = {
  presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
};
```

```bash
yarn add --dev @babel/preset-typescript
```

