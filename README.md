# Benjamen 品牌增长作品集

响应式中英双语作品集，包含人物视频、关于我、六项专长、四个作品、三个案例、指标、评价、经历与本地表单。默认中文，英文 /en，隐私 /privacy，更新记录 /changelog。

Node 24.16.0、pnpm 9.15.4。安装 `pnpm install --frozen-lockfile`；开发 `pnpm dev`；生产构建 `pnpm build`，启动 `pnpm start`。默认本机 http://127.0.0.1:43510，可通过 PORT 修改；前台 Ctrl+C 停止。无需数据库、密钥或外部服务。

检查：`pnpm typecheck`、`pnpm lint`、`pnpm test`。正式构建在本地 Linux 文件系统执行。`pnpm bundle` 生成共享包；包导出 template 和 host，支持消费者注入品牌。

修改前先读 .tpl/README.md、template.json、project.json。品牌、内容和主题各有独立入口。参考素材包含英文图中文字，许可未确认；不能当作商业授权。实际验证与限制见 .tpl/docs/VERIFICATION.md。
