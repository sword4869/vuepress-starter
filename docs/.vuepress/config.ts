import { defineConfig } from "vuepress/config";

export default defineConfig({
  /**
   * Type is `DefaultThemeConfig`
   */
  title: "Hello VuePress",
  base: "/vuepress-starter/",
  plugins: [
      'vuepress-plugin-helper-live2d',
      'vuepress-plugin-reading-progress',
      'vuepress-plugin-code-copy',
  ],
  themeConfig: {
    // if your docs are in a different repo from your main project:
    docsRepo: "sword4869/vuepress-starter",
    // if your docs are in a specific branch (defaults to 'master'):
    docsBranch: "main",
    // if your docs are not at the root of the repo:
    docsDir: "docs",
    // defaults to false, set to true to enable
    editLinks: true,
    // custom text for edit link. Defaults to "Edit this page"
    editLinkText: "Help us improve this page!",

    sidebar: {
      "/": [
        ["/theme.md", "theme.md"],
        {
          title: "create",
          children: [
            ["/create/deploy脚本.md", "deploy脚本.md"],
            ["/create/github action.md", "github action.md"],
            ["/create/图片格式.md", "图片格式.md"],
            ["/create/空项目.md", "空项目.md"],
            { title: "fake", children: [["/create/fake/test.md", "test.md"]] },
          ],
        },
      ],
    },
  },
});
