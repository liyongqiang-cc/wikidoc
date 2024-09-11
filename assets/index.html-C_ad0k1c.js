import{_ as i,c as a,a as n,o as e}from"./app-BMGf1kKn.js";const l={};function t(h,s){return e(),a("div",null,s[0]||(s[0]=[n(`<h2 id="事件总线-event-bus" tabindex="-1"><a class="header-anchor" href="#事件总线-event-bus"><span>事件总线（Event Bus）</span></a></h2><p>轻量级的发布-订阅模式的应用。允许组件之前通过发布-订阅通信。（基于事件驱动）</p><ul><li><p>事件（Event）：Event Bus之间相互通信的基本单位。通信通过事件触发。</p></li><li><p>发布者（Publisher）：发布事件到Event Bus的一方。</p></li><li><p>订阅者（Subscriber）：事件订阅者，接受事件的一方。</p></li></ul><h2 id="vue中使用" tabindex="-1"><a class="header-anchor" href="#vue中使用"><span>Vue中使用</span></a></h2><h3 id="vue中main-js文件" tabindex="-1"><a class="header-anchor" href="#vue中main-js文件"><span>Vue中<code>main.js</code>文件：</span></a></h3><div class="language-js line-numbers-mode" data-ext="js" data-title="js"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">new</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> Vue</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">({</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  el</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">#app</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  router</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">  render</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> h</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =&gt;</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> h</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">App</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">),</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  // 开启事件总线</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">  beforeCreate</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(){</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    Vue</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">prototype</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">$bus</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> this</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  },</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="发布事件的一方" tabindex="-1"><a class="header-anchor" href="#发布事件的一方"><span>发布事件的一方：</span></a></h3><ul><li>需要发送事件和数据的组件</li></ul><p><code>publisher.vue</code>：</p><div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">script</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">export</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> default</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">Publisher</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  methods</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    // 点击事件调用事件总线</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">    clickEvent</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">data</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">      this</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">$bus</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">$emit</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">clickEvent</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> data</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">};</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">script</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>this.$bus.$emit(&#39;clickEvent&#39;, data)</code>：发布事件</p><ul><li><code>clickEvent</code>为事件名，</li><li><code>data</code>为传参数据</li></ul><h3 id="订阅事件的一方" tabindex="-1"><a class="header-anchor" href="#订阅事件的一方"><span>订阅事件的一方</span></a></h3><ul><li>接受事件和参数的组件</li></ul><p><code>subscriber.vue</code>：</p><div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">script</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">export</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> default</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">subscriber</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">  mounted</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(){</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">    this</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">$bus</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">$on</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">clickEvent</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">this</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">drillDown</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  },</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  methods</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    // 点击事件调用事件总线</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">    drillDown</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">data</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">      // 处理事件 data传值</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">};</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">script</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>this.$bus.$on(&#39;clickEvent&#39;,this.drillDown)</code>订阅事件</p><ul><li><code>clickEvent</code>为订阅事件名，需和发布事件名一致才能接收到事件</li><li><code>this.drillDown</code>接收到事件后所执行方法，传参为发布事件时所传参数。</li></ul>`,18)]))}const k=i(l,[["render",t],["__file","index.html.vue"]]),d=JSON.parse(`{"path":"/Vue/amnf6e15/","title":"Vue2事件总线使用","lang":"zh-CN","frontmatter":{"title":"Vue2事件总线使用","author":"WIKIDOC","createTime":"2024/05/20 22:50:23","permalink":"/Vue/amnf6e15/","description":"事件总线（Event Bus） 轻量级的发布-订阅模式的应用。允许组件之前通过发布-订阅通信。（基于事件驱动） 事件（Event）：Event Bus之间相互通信的基本单位。通信通过事件触发。 发布者（Publisher）：发布事件到Event Bus的一方。 订阅者（Subscriber）：事件订阅者，接受事件的一方。 Vue中使用 Vue中main...","head":[["script",{"id":"check-dark-mode"},";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();"],["script",{"id":"check-mac-os"},"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))"],["meta",{"property":"og:url","content":"https://www.xxx.cn/Vue/amnf6e15/"}],["meta",{"property":"og:site_name","content":"WIKIDOC笔记"}],["meta",{"property":"og:title","content":"Vue2事件总线使用"}],["meta",{"property":"og:description","content":"事件总线（Event Bus） 轻量级的发布-订阅模式的应用。允许组件之前通过发布-订阅通信。（基于事件驱动） 事件（Event）：Event Bus之间相互通信的基本单位。通信通过事件触发。 发布者（Publisher）：发布事件到Event Bus的一方。 订阅者（Subscriber）：事件订阅者，接受事件的一方。 Vue中使用 Vue中main..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-11T06:08:33.000Z"}],["meta",{"property":"article:author","content":"WIKIDOC"}],["meta",{"property":"article:modified_time","content":"2024-09-11T06:08:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Vue2事件总线使用\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-09-11T06:08:33.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"WIKIDOC\\"}]}"]]},"headers":[{"level":2,"title":"事件总线（Event Bus）","slug":"事件总线-event-bus","link":"#事件总线-event-bus","children":[]},{"level":2,"title":"Vue中使用","slug":"vue中使用","link":"#vue中使用","children":[{"level":3,"title":"Vue中main.js文件：","slug":"vue中main-js文件","link":"#vue中main-js文件","children":[]},{"level":3,"title":"发布事件的一方：","slug":"发布事件的一方","link":"#发布事件的一方","children":[]},{"level":3,"title":"订阅事件的一方","slug":"订阅事件的一方","link":"#订阅事件的一方","children":[]}]}],"readingTime":{"minutes":1.07,"words":322},"git":{"createdTime":1726034913000,"updatedTime":1726034913000,"contributors":[{"name":"hardy","email":"WikiFX@DESKTOP-Q1VUAS6","commits":1}]},"autoDesc":true,"filePathRelative":"notes/Vue/Vue2事件总线使用.md"}`);export{k as comp,d as data};
