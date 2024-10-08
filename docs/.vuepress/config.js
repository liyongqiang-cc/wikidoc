import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { plumeTheme } from 'vuepress-theme-plume'
import { searchPlugin } from '@vuepress-plume/plugin-search'

export default defineUserConfig({
    base: '/wikidoc/',
    lang: 'zh-CN',
    theme: plumeTheme({
        hostname: 'https://www.xxx.cn',
        logo: '/logo.png',
        avatar: {
            url: '/logo.png',
            name: 'WIKIDOC',
            description: '.NET开发',
            circle: true,
            location: '上海，中国',
        },
        navbar: [
            { text: '首页', link: '/', icon: 'solar:home-add-linear' },
            { text: '博客', link: '/blog/', icon: 'ri:blogger-line' },
            {
                text: '后端',
                icon: 'ph:file-html',
                items: [
                    { text: 'C#', icon: 'ph:file-html', link: '/notes/Net/IOC' },
                    { text: 'GoLang', icon: 'ph:file-html', link: '/notes/Net/IOC' },
                ],
            },
            {
                text: '前端',
                icon: 'ph:file-vue-duotone',
                items: [
                    { text: 'HTML', icon: 'ph:file-html', link: '/notes/HTML/HTML-Elements.md' },
                    { text: 'CSS', icon: 'ph:file-css', link: '/notes/CSS/CSS选择器' },
                    { text: 'JavaScript', icon: 'ph:file-js', link: '/notes/JavaScript/JavaScript-基础' },
                    { text: 'TypeScript', icon: 'ph:file-ts', link: '/notes/TypeScript/TypeScript-简介安装' },
                    { text: 'Web API', icon: 'icon-park-twotone:web-page', link: '/notes/WebAPI/Web API-Web Socket' },
                    { text: 'Vue', icon: 'ph:file-vue', link: '/notes/Vue/Vue3-简介概述' },
                    { text: 'React', icon: 'mdi:react', link: '/前端框架/React' },
                    { text: 'UNIAPP', icon: 'mdi:unicode', link: '/前端框架/UNIAPP' },
                    { text: '微信小程序', icon: 'ri:wechat-2-line', link: '/前端框架/WeChatApp' },
                ],
            },
            {
                text: '插件',
                icon: 'clarity:plugin-line',
                items: [
                    { text: 'NPM', icon: 'teenyicons:npm-solid', link: '/notes/Plugins/教程-Vue封装组件并发布到npm.md' },
                    { text: 'Element', icon: 'ep:element-plus', link: '/notes/Plugins/Element-Table表头顺序错乱问题' },
                    { text: 'vite-plugin-pwa', icon: 'tabler:brand-vite', link: '/notes/Plugins/VitePluginPWA' },
                ],
            },
            {
                text: '其他',
                icon: 'icon-park-outline:other',
                items: [
                    { text: '计算机基础', icon: 'fa6-solid:computer', link: '/notes/Computer/计算机基础-浏览器是运作原理.md' },
                    { text: 'Node.js', icon: 'devicon-plain:nodejs-wordmark', link: '/notes/Node.js/Node版本管理-n.md' },
                    { text: 'Git', icon: 'teenyicons:git-outline', link: '/notes/Git/Git Commit Message规范.md' },
                    { text: 'Vite', icon: 'tabler:brand-vite', link: '/notes/Vite/Vite基础.md' },
                ],
            },
        ],
        notes: {
            dir: 'notes',
            link: '/',
            notes: [
                {
                    dir: 'Net',
                    link: '/Net/',
                    sidebar: [
                        {
                            text: 'C#/.Net/.Net Core',
                            icon: 'ic:baseline-dashboard',
                            items: ['IOC'],
                        }
                    ],
                },
                {
                    dir: 'HTML',
                    link: '/HTML/',
                    sidebar: [
                        {
                            text: 'HTML基础',
                            icon: 'ic:baseline-dashboard',
                            items: ['HTML-Elements', 'HTML-Attribute', 'HTML-Events', 'HTML-Input', 'HTML-HTML5新增'],
                        },
                        {
                            text: 'HTML问题',
                            icon: 'icon-park-outline:file-question',
                            items: ['移动端H5-相关问题', '移动端H5-点击异常背景色'],
                        },
                        {
                            text: 'HTML方案',
                            icon: 'icon-park-outline:plan',
                            items: ['网站SEO', '移动端H5-响应布局', 'Canvas-图片合成'],
                        },
                    ],
                },
                {
                    dir: 'CSS',
                    link: '/CSS/',
                    sidebar: [
                        {
                            text: 'CSS基础',
                            icon: 'ic:baseline-dashboard',
                            items: [
                                'CSS选择器',
                                'CSS3新增内容',
                                'CSS滚动条-Scrollbar',
                                'CSS自定义属性',
                                '样式滤镜 Filter',
                                '网格布局 Grid',
                            ],
                        },
                        {
                            text: 'CSS问题',
                            icon: 'icon-park-outline:file-question',
                            items: ['H5页面点击异常背景色问题'],
                        },
                        {
                            text: 'CSS方案',
                            icon: 'icon-park-outline:plan',
                            items: ['CSS-文字轮播效果', '响应式布局方案'],
                        },
                    ],
                },
                {
                    dir: 'JavaScript',
                    link: '/JavaScript/',
                    sidebar: [
                        {
                            text: 'JavaScript基础',
                            icon: 'ic:baseline-dashboard',
                            items: [
                                'JavaScript-基础',
                                'JavaScript-内置对象方法',
                                'JavaScript-Promise',
                                'JavaScript-原型链',
                                'JavaScript-Set、Map、WeakSet和WeakMap',
                                'JavaScript-正则表达式',
                            ],
                        },
                        {
                            text: 'JavaScript进阶',
                            icon: 'solar:graph-up-broken',
                            items: [
                                'JavaScript-作用域和闭包',
                                'JavaScript-ECMAScript1-4',
                                'JavaScript-ECMAScript5',
                                'JavaScript-ECMAScript6',
                                'JavaScript-ECMAScript7',
                                'JavaScript-ECMAScript8',
                                'JavaScript-ECMAScript9',
                                'JavaScript-ECMAScript10',
                                'JavaScript-ECMAScript11',
                                'JavaScript-ECMAScript12',
                                'JavaScript-ECMAScript13',
                            ],
                        },
                        {
                            text: 'JavaScript问题',
                            icon: 'icon-park-outline:file-question',
                            items: ['JavaScript-笔记'],
                        },
                        {
                            text: 'JavaScript方案',
                            icon: 'icon-park-outline:plan',
                            items: ['PWA-渐进式应用', 'JavaScript-常用方法', 'JavaScript-浏览器离线储存'],
                        },
                    ],
                },
                {
                    dir: 'TypeScript',
                    link: '/TypeScript/',
                    sidebar: [
                        {
                            text: 'TypeScript基础',
                            icon: 'ic:baseline-dashboard',
                            items: [
                                'TypeScript-简介安装',
                                'TypeScript-基础数据类型',
                                'TypeScript-特有数据类型',
                                'TypeScript-any与unknown',
                                'TypeScript-never与void',
                                'TypeScript-数组与元组',
                                'TypeScript-函数',
                                'TypeScript-对象',
                                'TypeScript-类型相关',
                                'TypeScript-命令方法',
                            ],
                        },
                    ],
                },
                {
                    dir: 'WebAPI',
                    link: '/WebAPI/',
                    sidebar: [
                        {
                            text: 'Web API基础',
                            icon: 'ic:baseline-dashboard',
                            items: [
                                'Web API-Web Socket.md',
                                'Web API-Cache',
                                'Web API-Service Worker',
                                'Web API-Web Messaging',
                                'Web API-Web Worker',
                            ],
                        },
                    ],
                },
                {
                    dir: 'Vue',
                    link: '/Vue/',
                    sidebar: [
                        {
                            text: 'Vue3基础',
                            icon: 'ic:baseline-dashboard',
                            items: [
                                'Vue3-简介概述',
                                'Vue3-setup',
                                'Vue3-ref&reactive',
                                'Vue3-computed&watch',
                                'Vue3-ref&props',
                                'Vue3-生命周期',
                                'Vue3-自定义hook',
                                'Vue3-router',
                                'Vue3-Pinia',
                                'Vue3-组件通信',
                                'Vue3-Slot插槽',
                                'Vue3-其他API',
                            ],
                        },
                        {
                            text: 'Vue3进阶',
                            icon: 'solar:graph-up-broken',
                            items: ['Vue3-全局API', 'Vue3-组合式API', 'Vue3-非兼容性改变'],
                        },
                        {
                            text: 'Vue3方案',
                            icon: 'icon-park-outline:plan',
                            items: ['Vite&Vue3项目创建', 'Vue3开启PWA'],
                        },
                        {
                            text: 'Vue2基础',
                            icon: 'ic:baseline-dashboard',
                            items: ['Vue2数据响应原理解析'],
                        },
                        {
                            text: 'Vue2问题',
                            icon: 'ic:baseline-dashboard',
                            items: ['Vue2相关问题'],
                        },
                        {
                            text: 'Vue2方案',
                            icon: 'icon-park-outline:plan',
                            items: ['Vue2&Vue3项目创建', 'Vue2组件自我调用', 'Vue2事件总线使用'],
                        },
                    ],
                },
                {
                    dir: 'Plugins',
                    link: '/Plugins/',
                    sidebar: [
                        {
                            text: 'NPM',
                            icon: 'ic:baseline-dashboard',
                            items: ['教程-Vue封装组件并发布到npm'],
                        },
                        {
                            text: 'Element',
                            icon: 'ic:baseline-dashboard',
                            items: ['Element-Table表头顺序错乱问题'],
                        },
                        {
                            text: 'vite-plugin-pwa',
                            icon: 'ic:baseline-dashboard',
                            items: ['VitePluginPWA'],
                        },
                    ],
                },
                {
                    dir: 'Computer',
                    link: '/Computer/',
                    sidebar: [
                        {
                            text: '计算机基础',
                            icon: 'ic:baseline-dashboard',
                            items: ['计算机基础-浏览器是运作原理', '计算机基础-HTTPS原理解析'],
                        },
                    ],
                },
                {
                    dir: 'Git',
                    link: '/Git/',
                    sidebar: [
                        {
                            text: 'Git相关',
                            icon: 'ic:baseline-dashboard',
                            items: ['Git基础命令', 'Git Commit Message规范'],
                        },
                    ],
                },
                {
                    dir: 'Node.js',
                    link: '/Node.js/',
                    sidebar: [
                        {
                            text: '相关问题',
                            icon: 'icon-park-outline:file-question',
                            items: ['node-sass安装报错python相关'],
                        },
                        {
                            text: '解决方案',
                            icon: 'ic:baseline-dashboard',
                            items: ['Node版本管理-n', 'Node版本管理-nvm'],
                        },
                    ],
                },
                {
                    dir: 'Vite',
                    link: '/Vite/',
                    sidebar: [
                        {
                            text: 'Vite',
                            icon: 'ic:baseline-dashboard',
                            items: ['Vite基础'],
                        },
                    ],
                },
            ],
        },
        footer: {
            message: 'WIKIDOC|日常记录',
            copyright: 'Copyright © 2024 | ICP备案号：<a target="_blank" href="https://www.xxxxxx.cn/">豫ICP备20240911号-1</a>',
        },
        plugins: {
            markdownEnhance: {
                demo: true,
            },
            comment: {
                provider: 'Giscus',
                comment: true,
                repo: 'liyongqiang-cc/wikidoc',
                repoId: 'R_kgDOMv81XA',
                category: 'General',
                categoryId: 'DIC_kwDOMv81XM4CiYCD',
            },
        },
    }),
    bundler: viteBundler(),
    title: 'WIKIDOC',
    description: 'WIKIDOC，包括内容：日常记录|前端学习|前端笔记|问题记录，HTML，CSS，JavaScript，Vue，Node.js，NPM。',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }],
        ['meta', { name: 'keywords', href: 'WIKIDOC,日常记录,前端学习,前端笔记,问题记录,HTML,CSS,JavaScript,Vue,Node.js' }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
    ],
    serviceWorker: true,
})