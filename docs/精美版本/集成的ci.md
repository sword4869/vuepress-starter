# REAME
## bash
```bash
yarn init
yarn add -D vuepress

mkdir docs
touch docs/README.md

mkdir -p .github/workflows
touch .github/workflows/ci.yml

touch .gitignore
```

```bash
project
├── docs
│   ├── README.md     // docs下一定要有个README.md, 这是进入网址的初始界面
│   └── xxx文件夹 
|       └── xxx.md
├── node_modules
└── package.json
```
## package.json

```js
"scripts": {
    "vuepress:dev": "vuepress dev docs",
    "vuepress:build": "vuepress build docs"
},
"devDependencies": {
    "vuepress": "^1.9.7",
    "vuepress-plugin-code-copy": "^1.0.6",
    "vuepress-plugin-helper-live2d": "^1.0.2",
    "vuepress-plugin-reading-progress": "^1.0.10"
}
```
## .github/workflows/ci.yml

`docs/.vuepress/config.ts` 已经完全不用写了，我已经将其集成到action [sword4869/vuepress-deploy](https://github.com/sword4869/vuepress-deploy)中了。

```yaml
name: Build and Deploy
on: 
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: vuepress-deploy
        uses: sword4869/vuepress-deploy@main
        env:
          ACCESS_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          TARGET_BRANCH: gh-pages
          BUILD_SCRIPT: python3 translator-v1.py ${{github.repository}} && yarn install && yarn vuepress:build
          BUILD_DIR: docs/.vuepress/dist/

```
再去仓库设置中激活gitpages.
## .gitignore
```
docs/.vuepress/*
!docs/.vuepress/config.ts
node_modules
yarn-error.log
```

