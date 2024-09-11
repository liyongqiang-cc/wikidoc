import{_ as d,c as e,a as o,o as c}from"./app-BMGf1kKn.js";const r={};function l(a,t){return c(),e("div",null,t[0]||(t[0]=[o('<h2 id="html-属性" tabindex="-1"><a class="header-anchor" href="#html-属性"><span>HTML 属性</span></a></h2><blockquote><p>所有 HTML 属性以及它们可在哪些元素中使用。</p></blockquote><table><thead><tr><th>属性名称</th><th>属性介绍</th><th>应用场景</th></tr></thead><tbody><tr><td><code>accept</code></td><td>定义 <code>&lt;input type=&quot;file&quot;&gt;</code> 允许上传的文件类型。</td><td>限制文件上传的文件类型。</td></tr><tr><td><code>accept-charset</code></td><td>定义 <code>&lt;form&gt;</code> 允许提交的字符集。</td><td>限定表单提交的字符集。</td></tr><tr><td><code>accesskey</code></td><td>定义快捷键，允许用户通过键盘快速访问元素。</td><td>为元素定义快捷键。</td></tr><tr><td><code>action</code></td><td>定义 <code>&lt;form&gt;</code> 提交的 URL。</td><td>指定表单提交的目标 URL。</td></tr><tr><td><code>alt</code></td><td>定义 <code>&lt;img&gt;</code> 或 <code>&lt;input type=&quot;image&quot;&gt;</code> 的替代文本。</td><td>提供图像的替代文本。</td></tr><tr><td><code>async</code></td><td>定义 <code>&lt;script&gt;</code> 是否异步加载。</td><td>异步加载脚本。</td></tr><tr><td><code>autocomplete</code></td><td>定义 <code>&lt;form&gt;</code> 或 <code>&lt;input&gt;</code> 是否启用自动完成功能。</td><td>启用或禁用自动完成。</td></tr><tr><td><code>autofocus</code></td><td>定义 <code>&lt;input&gt;</code> 或 <code>&lt;button&gt;</code> 是否在页面加载时自动获得焦点。</td><td>自动聚焦到表单元素。</td></tr><tr><td><code>autoplay</code></td><td>定义 <code>&lt;audio&gt;</code> 或 <code>&lt;video&gt;</code> 是否自动播放。</td><td>自动播放音频或视频。</td></tr><tr><td><code>charset</code></td><td>定义 <code>&lt;meta&gt;</code> 或 <code>&lt;script&gt;</code> 的字符集。</td><td>设置文档的字符集。</td></tr><tr><td><code>checked</code></td><td>定义 <code>&lt;input type=&quot;checkbox&quot;&gt;</code> 或 <code>&lt;input type=&quot;radio&quot;&gt;</code> 是否被选中。</td><td>设置复选框或单选按钮的初始状态。</td></tr><tr><td><code>cite</code></td><td>定义 <code>&lt;blockquote&gt;</code> 或 <code>&lt;q&gt;</code> 的引用来源。</td><td>显示引用来源。</td></tr><tr><td><code>class</code></td><td>定义一个或多个类名，用于 CSS 选择器或 JavaScript。</td><td>为元素分配样式类或行为类。</td></tr><tr><td><code>cols</code></td><td>定义 <code>&lt;textarea&gt;</code> 的宽度。</td><td>设置文本区域的宽度。</td></tr><tr><td><code>colspan</code></td><td>定义 <code>&lt;td&gt;</code> 或 <code>&lt;th&gt;</code> 横跨的列数。</td><td>设置单元格横跨的列数。</td></tr><tr><td><code>content</code></td><td>定义 <code>&lt;meta name=&quot;...&quot;&gt;</code> 的内容。</td><td>设置元数据的内容。</td></tr><tr><td><code>contenteditable</code></td><td>定义元素是否可编辑。</td><td>使元素可编辑。</td></tr><tr><td><code>controls</code></td><td>定义 <code>&lt;audio&gt;</code> 或 <code>&lt;video&gt;</code> 是否显示播放控件。</td><td>显示播放控件。</td></tr><tr><td><code>coords</code></td><td>定义 <code>&lt;area&gt;</code> 的坐标。</td><td>设置图像映射的坐标。</td></tr><tr><td><code>data</code></td><td>定义 <code>&lt;object&gt;</code> 的数据源。</td><td>设置对象的数据源。</td></tr><tr><td><code>data-*</code></td><td>定义自定义数据属性，用于存储私有数据。</td><td>存储与元素相关的自定义数据。</td></tr><tr><td><code>datetime</code></td><td>定义 <code>&lt;abbr&gt;</code> 或 <code>&lt;time&gt;</code> 的日期时间。</td><td>设置日期时间。</td></tr><tr><td><code>default</code></td><td>定义 <code>&lt;track&gt;</code> 或 <code>&lt;source&gt;</code> 是否是默认资源。</td><td>设置默认资源。</td></tr><tr><td><code>defer</code></td><td>定义 <code>&lt;script&gt;</code> 是否延迟加载。</td><td>延迟加载脚本。</td></tr><tr><td><code>dir</code></td><td>定义文本的方向，如从左至右（ltr）或从右至左（rtl）。</td><td>设置文本的方向。</td></tr><tr><td><code>dirname</code></td><td>定义 <code>&lt;input type=&quot;text&quot;&gt;</code> 的方向名称。</td><td>设置文本输入的方向名称。</td></tr><tr><td><code>disabled</code></td><td>定义元素是否禁用。</td><td>禁用表单元素。</td></tr><tr><td><code>download</code></td><td>定义 <code>&lt;a&gt;</code> 是否应该下载而不是导航。</td><td>下载文件而不是导航。</td></tr><tr><td><code>draggable</code></td><td>定义元素是否可以被拖动。</td><td>使元素可拖动。</td></tr><tr><td><code>enctype</code></td><td>定义 <code>&lt;form&gt;</code> 的编码类型。</td><td>设置表单提交的数据编码方式。</td></tr><tr><td><code>enterkeyhint</code></td><td>提示输入法引擎（IME）预期的下一步动作。</td><td>提示输入法引擎预期的下一步动作。</td></tr><tr><td><code>for</code></td><td>定义 <code>&lt;label&gt;</code> 关联的 <code>&lt;input&gt;</code>。</td><td>关联标签和输入元素。</td></tr><tr><td><code>form</code></td><td>定义 <code>&lt;input&gt;</code>、<code>&lt;button&gt;</code> 等属于哪个 <code>&lt;form&gt;</code>。</td><td>关联表单元素到表单。</td></tr><tr><td><code>formaction</code></td><td>定义 <code>&lt;input type=&quot;submit&quot;&gt;</code> 提交到的 URL。</td><td>设置提交按钮的目标 URL。</td></tr><tr><td><code>headers</code></td><td>定义 <code>&lt;td&gt;</code> 或 <code>&lt;th&gt;</code> 关联的 <code>&lt;th&gt;</code> 元素。</td><td>关联单元格到表头。</td></tr><tr><td><code>height</code></td><td>定义 <code>&lt;img&gt;</code>、<code>&lt;video&gt;</code> 或 <code>&lt;canvas&gt;</code> 的高度。</td><td>设置元素的高度。</td></tr><tr><td><code>hidden</code></td><td>定义元素是否隐藏。</td><td>隐藏元素。</td></tr><tr><td><code>high</code></td><td>定义 <code>&lt;meter&gt;</code> 的高值范围。</td><td>设置计量范围的高值。</td></tr><tr><td><code>href</code></td><td>定义 <code>&lt;a&gt;</code>、<code>&lt;area&gt;</code>、<code>&lt;link&gt;</code> 等的链接目标。</td><td>设置链接目标。</td></tr><tr><td><code>hreflang</code></td><td>定义 <code>&lt;a&gt;</code> 或 <code>&lt;link&gt;</code> 的语言。</td><td>设置链接的语言。</td></tr><tr><td><code>http-equiv</code></td><td>定义 <code>&lt;meta http-equiv=&quot;...&quot;&gt;</code> 的 HTTP 等价属性。</td><td>设置 HTTP 等价属性。</td></tr><tr><td><code>id</code></td><td>定义元素的唯一标识符。</td><td>为元素分配唯一的标识符。</td></tr><tr><td><code>inert</code></td><td>定义元素是否可交互。</td><td>阻止用户与元素交互。</td></tr><tr><td><code>inputmode</code></td><td>定义输入法引擎（IME）的预期输入类型。</td><td>提示输入法引擎预期的输入类型。</td></tr><tr><td><code>ismap</code></td><td>定义 <code>&lt;img&gt;</code> 是否是图像地图。</td><td>设置图像作为图像地图。</td></tr><tr><td><code>kind</code></td><td>定义 <code>&lt;track&gt;</code> 的类型。</td><td>设置字幕轨道的类型。</td></tr><tr><td><code>label</code></td><td>定义 <code>&lt;track&gt;</code> 的标签。</td><td>设置字幕轨道的标签。</td></tr><tr><td><code>lang</code></td><td>定义元素的语言。</td><td>定义元素的语言。</td></tr><tr><td><code>list</code></td><td>定义 <code>&lt;input type=&quot;text&quot;&gt;</code> 关联的 <code>&lt;datalist&gt;</code>。</td><td>关联输入到数据列表。</td></tr><tr><td><code>loop</code></td><td>定义 <code>&lt;audio&gt;</code> 或 <code>&lt;video&gt;</code> 是否循环播放。</td><td>循环播放音频或视频。</td></tr><tr><td><code>low</code></td><td>定义 <code>&lt;meter&gt;</code> 的低值范围。</td><td>设置计量范围的低值。</td></tr><tr><td><code>max</code></td><td>定义 <code>&lt;input type=&quot;number&quot;&gt;</code> 或 <code>&lt;input type=&quot;range&quot;&gt;</code> 的最大值。</td><td>设置数字或范围输入的最大值。</td></tr><tr><td><code>maxlength</code></td><td>定义 <code>&lt;input type=&quot;text&quot;&gt;</code> 或 <code>&lt;textarea&gt;</code> 的最大长度。</td><td>设置文本输入的最大长度。</td></tr><tr><td><code>media</code></td><td>定义 <code>&lt;link&gt;</code> 或 <code>&lt;style&gt;</code> 的媒体类型。</td><td>设置样式表的媒体类型。</td></tr><tr><td><code>method</code></td><td>定义 <code>&lt;form&gt;</code> 的提交方法（GET 或 POST）。</td><td>设置表单提交的方法。</td></tr><tr><td><code>min</code></td><td>定义 <code>&lt;input type=&quot;number&quot;&gt;</code> 或 <code>&lt;input type=&quot;range&quot;&gt;</code> 的最小值。</td><td>设置数字或范围输入的最小值。</td></tr><tr><td><code>multiple</code></td><td>定义 <code>&lt;input type=&quot;email&quot;&gt;</code> 或 <code>&lt;input type=&quot;file&quot;&gt;</code> 是否接受多个值。</td><td>允许多个值。</td></tr><tr><td><code>muted</code></td><td>定义 <code>&lt;audio&gt;</code> 或 <code>&lt;video&gt;</code> 是否静音。</td><td>设置音频或视频静音。</td></tr><tr><td><code>name</code></td><td>定义元素的名称。</td><td>为元素分配名称。</td></tr><tr><td><code>novalidate</code></td><td>定义 <code>&lt;form&gt;</code> 是否跳过验证。</td><td>跳过表单验证。</td></tr><tr><td><code>open</code></td><td>定义 <code>&lt;details&gt;</code> 是否默认打开。</td><td>设置 <code>&lt;details&gt;</code> 默认打开。</td></tr><tr><td><code>optimum</code></td><td>定义 <code>&lt;meter&gt;</code> 的最佳值。</td><td>设置计量的最佳值。</td></tr><tr><td><code>pattern</code></td><td>定义 <code>&lt;input type=&quot;text&quot;&gt;</code> 的验证模式。</td><td>设置文本输入的验证模式。</td></tr><tr><td><code>placeholder</code></td><td>定义 <code>&lt;input type=&quot;text&quot;&gt;</code> 的占位符文本。</td><td>设置文本输入的占位符文本。</td></tr><tr><td><code>popover</code></td><td>已废弃的属性，用于定义弹出窗口。</td><td>不再推荐使用。</td></tr><tr><td><code>popovertarget</code></td><td>定义弹出窗口的目标元素。</td><td>设置弹出窗口的目标元素。</td></tr><tr><td><code>popovertargetaction</code></td><td>定义弹出窗口触发的动作。</td><td>设置弹出窗口触发的动作。</td></tr><tr><td><code>poster</code></td><td>定义 <code>&lt;video&gt;</code> 的海报图像。</td><td>设置视频的海报图像。</td></tr><tr><td><code>preload</code></td><td>定义 <code>&lt;audio&gt;</code> 或 <code>&lt;video&gt;</code> 的预加载行为。</td><td>设置音频或视频的预加载行为。</td></tr><tr><td><code>readonly</code></td><td>定义 <code>&lt;input type=&quot;text&quot;&gt;</code> 或 <code>&lt;textarea&gt;</code> 是否只读。</td><td>设置文本输入或文本区域只读。</td></tr><tr><td><code>rel</code></td><td>定义 <code>&lt;a&gt;</code>、<code>&lt;link&gt;</code> 的关系类型。</td><td>设置链接的关系类型。</td></tr><tr><td><code>required</code></td><td>定义 <code>&lt;input&gt;</code> 或 <code>&lt;select&gt;</code> 是否必须填写。</td><td>设置表单元素必填。</td></tr><tr><td><code>reversed</code></td><td>定义 <code>&lt;ol&gt;</code> 是否反向排序。</td><td>设置有序列表反向排序。</td></tr><tr><td><code>rows</code></td><td>定义 <code>&lt;textarea&gt;</code> 的行数。</td><td>设置文本区域的行数。</td></tr><tr><td><code>rowspan</code></td><td>定义 <code>&lt;td&gt;</code> 或 <code>&lt;th&gt;</code> 纵跨的行数。</td><td>设置单元格纵跨的行数。</td></tr><tr><td><code>sandbox</code></td><td>定义 <code>&lt;iframe&gt;</code> 的安全沙箱。</td><td>设置 iframe 的安全沙箱。</td></tr><tr><td><code>scope</code></td><td>定义 <code>&lt;th&gt;</code> 的作用域。</td><td>设置表头的作用域。</td></tr><tr><td><code>selected</code></td><td>定义 <code>&lt;option&gt;</code> 是否被选中。</td><td>设置选项的初始选中状态。</td></tr><tr><td><code>shape</code></td><td>定义 <code>&lt;area&gt;</code> 的形状。</td><td>设置图像映射的形状。</td></tr><tr><td><code>size</code></td><td>定义 <code>&lt;select&gt;</code> 的尺寸。</td><td>设置下拉列表的尺寸。</td></tr><tr><td><code>sizes</code></td><td>定义 <code>&lt;img&gt;</code> 或 <code>&lt;link&gt;</code> 的尺寸。</td><td>设置图像或链接的尺寸。</td></tr><tr><td><code>span</code></td><td>定义 <code>&lt;colgroup&gt;</code> 或 <code>&lt;th&gt;</code> 的跨度。</td><td>设置列组或表头的跨度。</td></tr><tr><td><code>spellcheck</code></td><td>定义是否启用拼写检查。</td><td>启用或禁用拼写检查。</td></tr><tr><td><code>src</code></td><td>定义 <code>&lt;img&gt;</code>、<code>&lt;script&gt;</code>、<code>&lt;iframe&gt;</code> 等的源文件。</td><td>设置元素的源文件。</td></tr><tr><td><code>srcdoc</code></td><td>定义 <code>&lt;iframe&gt;</code> 的内联文档。</td><td>设置 iframe 的内联文档。</td></tr><tr><td><code>srclang</code></td><td>定义 <code>&lt;track&gt;</code> 的语言。</td><td>设置字幕轨道的语言。</td></tr><tr><td><code>srcset</code></td><td>定义 <code>&lt;img&gt;</code> 或 <code>&lt;source&gt;</code> 的多个源文件。</td><td>设置图像的多个源文件。</td></tr><tr><td><code>start</code></td><td>定义 <code>&lt;ol&gt;</code> 的起始编号。</td><td>设置有序列表的起始编号。</td></tr><tr><td><code>step</code></td><td>定义 <code>&lt;input type=&quot;number&quot;&gt;</code> 或 <code>&lt;input type=&quot;range&quot;&gt;</code> 的步长。</td><td>设置数字或范围输入的步长。</td></tr><tr><td><code>style</code></td><td>定义元素的内联样式。</td><td>为元素分配内联样式。</td></tr><tr><td><code>tabindex</code></td><td>定义元素在页面中的 tab 顺序。</td><td>控制元素的 tab 顺序。</td></tr><tr><td><code>target</code></td><td>定义 <code>&lt;a&gt;</code> 或 <code>&lt;form&gt;</code> 的目标窗口或框架。</td><td>设置链接或表单的目标窗口或框架。</td></tr><tr><td><code>title</code></td><td>定义元素的提示信息。</td><td>显示元素的提示信息。</td></tr><tr><td><code>translate</code></td><td>定义元素的内容是否应被翻译。</td><td>控制元素内容的翻译。</td></tr><tr><td><code>type</code></td><td>定义 <code>&lt;input&gt;</code>、<code>&lt;script&gt;</code>、<code>&lt;button&gt;</code> 等的类型。</td><td>设置元素的类型。</td></tr><tr><td><code>usemap</code></td><td>定义 <code>&lt;img&gt;</code> 或 <code>&lt;input type=&quot;image&quot;&gt;</code> 的图像映射。</td><td>设置图像映射。</td></tr><tr><td><code>value</code></td><td>定义 <code>&lt;input&gt;</code>、<code>&lt;option&gt;</code> 或 <code>&lt;progress&gt;</code> 的值。</td><td>设置元素的值。</td></tr><tr><td><code>width</code></td><td>定义 <code>&lt;img&gt;</code>、<code>&lt;video&gt;</code> 或 <code>&lt;canvas&gt;</code> 的宽度。</td><td>设置元素的宽度。</td></tr><tr><td><code>wrap</code></td><td>定义 <code>&lt;textarea&gt;</code> 的换行方式。</td><td>设置文本区域的换行方式。</td></tr></tbody></table><h2 id="global-全局属性" tabindex="-1"><a class="header-anchor" href="#global-全局属性"><span>Global 全局属性</span></a></h2><blockquote><p>全局属性是可与所有 HTML 元素一起使用的属性。</p></blockquote><table><thead><tr><th>属性名称</th><th>属性介绍</th><th>应用场景</th></tr></thead><tbody><tr><td><code>accesskey</code></td><td>定义快捷键，允许用户通过键盘快速访问元素。</td><td>为元素定义快捷键。</td></tr><tr><td><code>class</code></td><td>定义一个或多个类名，用于 CSS 选择器或 JavaScript。</td><td>为元素分配样式类或行为类。</td></tr><tr><td><code>contenteditable</code></td><td>定义元素是否可编辑。</td><td>使元素可编辑。</td></tr><tr><td><code>data-*</code></td><td>定义自定义数据属性，用于存储私有数据。</td><td>存储与元素相关的自定义数据。</td></tr><tr><td><code>dir</code></td><td>定义文本的方向，如从左至右（ltr）或从右至左（rtl）。</td><td>设置文本的方向。</td></tr><tr><td><code>draggable</code></td><td>定义元素是否可以被拖动。</td><td>使元素可拖动。</td></tr><tr><td><code>enterkeyhint</code></td><td>规定虚拟键盘上的回车键文本。</td><td>规定虚拟键盘上的回车键文本。</td></tr><tr><td><code>hidden</code></td><td>定义元素是否隐藏。</td><td>隐藏元素。</td></tr><tr><td><code>id</code></td><td>定义元素的唯一标识符。</td><td>为元素分配唯一的标识符。</td></tr><tr><td><code>inert</code></td><td>定义元素是否可交互。</td><td>阻止用户与元素交互。</td></tr><tr><td><code>inputmode</code></td><td>指定虚拟键盘的模式。</td><td>指定虚拟键盘的模式。</td></tr><tr><td><code>lang</code></td><td>定义元素的语言。</td><td>定义元素的语言。</td></tr><tr><td><code>popover</code></td><td>已废弃的属性，用于定义弹出窗口。</td><td>不再推荐使用。</td></tr><tr><td><code>spellcheck</code></td><td>定义是否启用拼写检查。</td><td>启用或禁用拼写检查。</td></tr><tr><td><code>style</code></td><td>定义元素的内联样式。</td><td>为元素分配内联样式。</td></tr><tr><td><code>tabindex</code></td><td>定义元素在页面中的 tab 顺序。</td><td>控制元素的 tab 顺序。</td></tr><tr><td><code>title</code></td><td>定义元素的提示信息。</td><td>显示元素的提示信息。</td></tr><tr><td><code>translate</code></td><td>定义元素的内容是否应被翻译。</td><td>控制元素内容的翻译。</td></tr></tbody></table>',6)]))}const g=d(r,[["render",l],["__file","index.html.vue"]]),n=JSON.parse(`{"path":"/HTML/ts3nvnt6/","title":"HTML-Attribute","lang":"zh-CN","frontmatter":{"title":"HTML-Attribute","author":"WIKIDOC","createTime":"2024/07/25 20:40:36","permalink":"/HTML/ts3nvnt6/","description":"HTML 属性 所有 HTML 属性以及它们可在哪些元素中使用。 Global 全局属性 全局属性是可与所有 HTML 元素一起使用的属性。","head":[["script",{"id":"check-dark-mode"},";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();"],["script",{"id":"check-mac-os"},"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))"],["meta",{"property":"og:url","content":"https://www.xxx.cn/HTML/ts3nvnt6/"}],["meta",{"property":"og:site_name","content":"WIKIDOC笔记"}],["meta",{"property":"og:title","content":"HTML-Attribute"}],["meta",{"property":"og:description","content":"HTML 属性 所有 HTML 属性以及它们可在哪些元素中使用。 Global 全局属性 全局属性是可与所有 HTML 元素一起使用的属性。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-11T06:08:33.000Z"}],["meta",{"property":"article:author","content":"WIKIDOC"}],["meta",{"property":"article:modified_time","content":"2024-09-11T06:08:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"HTML-Attribute\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-09-11T06:08:33.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"WIKIDOC\\"}]}"]]},"headers":[{"level":2,"title":"HTML 属性","slug":"html-属性","link":"#html-属性","children":[]},{"level":2,"title":"Global 全局属性","slug":"global-全局属性","link":"#global-全局属性","children":[]}],"readingTime":{"minutes":8.26,"words":2478},"git":{"createdTime":1726034913000,"updatedTime":1726034913000,"contributors":[{"name":"hardy","email":"WikiFX@DESKTOP-Q1VUAS6","commits":1}]},"autoDesc":true,"filePathRelative":"notes/HTML/HTML-Attribute.md"}`);export{g as comp,n as data};
