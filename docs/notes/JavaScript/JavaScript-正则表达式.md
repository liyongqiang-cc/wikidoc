---
title: JavaScript-正则表达式
author: WIKIDOC
createTime: 2024/05/11 15:05:45
permalink: /JavaScript/yclbjiod/
---

# JavaScript-正则表达式

## 正则表达式

正则表达式是用于匹配字符串中字符组合的模式。在 JavaScript 中，正则表达式也是对象。这些模式被用于`RegExp`的 `exec`和 `text`方法，以及`String`中的 `match`、`matchAll`、`replace`、`search`和`split`方法

## 创建表达式

**字面量**

使用两个 `/` 直接创建正则表达，已斜杠表示开始和结束

```javascript
var reg = /ab/g;
```

当脚本加载后，正则表达式字面量就会被编译。当正则表达式保存不变时，使用此方法可获得更好的性能。

`RegExp`**构造函数**

```javascript
var reg = new RegRxp("ab", "g");
// 等价于   var reg = /ab/g
```

字面量创建斜杠结束后面参数和构造函数第二个参数表示修饰符。

上面两种写法是等加价的都新建了一个在正则表达式对象。区别在于，第一种再引擎编译代码时，就会新建正则表达式。第二种方法在运行时新建表达式，所以字面量效率更高。并且字面量比较便利直观，基本上都会采用字面量定义正则表达式。

## 实例属性

正则修饰符相关实例属性（只读）

- `ignoreCase`：返回布尔值，表示是否设置了`i`修饰符
- `global`：返回布尔值，表示是否设置了`g`修饰符
- `multiline`：返回布尔值，表示是否设置了`m`修饰符
- `flags`：返回一个字符串，包含设置的所有修饰符

与修饰符无关实力属性：

- `lastIndex`：返回一个证书，表示下一次开始搜索的位置
- `source`：返回正则表达式的字符串形式，只读

```javascript
var reg = /abc/gim;
//修饰符相关属性
reg.ignoreCase; //true
reg.global; //true
reg.multiline; //true
reg.flags; //gim
//修饰符无关属性
reg.lastIndex; //0
reg.source; //abc
```

## 实例方法

### 正则实例方法

`test()`

在字符串中测试是否匹配，返回值味 `true`或 `false`

```javascript
var reg = /av/g;
var s = "avbabc";
reg.test(s); //true

reg.lastIndex = 2;
reg.test(s); //false
```

当正则表达式带有`g`修饰符时，每一次`test`方法都会从上一次结束的位置开始向后匹配，可以使用`lastIndex`查看当前位置

```javascript
var reg = /av/g;
var s = "avbavabc";

reg.lastIndex; //0
reg.test(s); //true

reg.lastIndex; //2
reg.test(s); //true

reg.lastIndex; //5
reg.test(s); //false
```

如果正则表达式是一个空字符串，则匹配所有的字符串，都返回`true`

`exec()`

在字符串中执行查找匹配的字符，返回一个数组，未匹配到返回`null`
`exec`方法返回数组包含两个属性：

- `input`：整个原字符串
- `index`：模式匹配成功的开始位置索引

```javascript
var reg = /av/g;
var s = "avbavabc";

reg.exec(s); //["av", index: 0, input: "avbavabc", groups: undefined]
reg.exec(s); //["av", index: 3, input: "avbavabc", groups: undefined]
reg.exec(s); //null
```

同 test 一样，当正则表达式带有`g`修饰符时，每一次`exec`方法都会从上一次结束的位置开始向后匹配，可以使用`lastIndex`查看当前位置

当正则表达式包含`()`组匹配时，返回的数组包含多个匹配数据，第一个是整个正则匹配成功的结果，第二个为括号内的匹配结果，如果有多个括号，第三个为第二个括号内的匹配内容。依次类推。

```javascript
var reg = /a(v)/g;
var s = "avbavabc";

reg.exec(s); //[ 'av', 'v', index: 0, input: 'avbavabc', groups: undefined ]
reg.exec(s); //[ 'av', 'v', index: 3, input: 'avbavabc', groups: undefined ]
reg.exec(s); //null
```

多个`()`

```javascript
var reg = /a(v)(b)/g;
var s = "avbavabc";

reg.exec(s); // [ 'avb', 'v', 'b', index: 0, input: 'avbavabc', groups: undefined ]
reg.exec(s); //null
```

### String 实例方法

`match()`

在字符串中执行查找匹配的字符，返回一个数组，未匹配到返回`null`
当正则表达式不带有`g`修饰符是，返回的数组带有`index`和`iuput`属性

```javascript
var reg = /ac/;
var s = "acbacvabc";
var s1 = "aabaavabc";

s.match(reg); //[ 'ac', index: 0, input: 'acbacvabc', groups: undefined ]
s1.match(reg); //null
```

正则表达式带有`g`修饰符时，该方法会一次性返回所有匹配成功的结果数组。不再带有`index`和`input`属性

```javascript
var reg = /ac/g;
var s = "acbacvabc";

s.match(reg); //[ 'ac', 'ac' ]
```

注意：设置正则表达式的`lastindex`属性对`match`方法无效，`match`方法总是从字符串第一个开始匹配。

**`matchAll()`**

在字符串中执行查找所有匹配的字符，返回一个迭代器。注意 ，在使用`matchAll`时，正则表达式需要带有`g`修饰符，否则会运行报错。

```javascript
var reg = /a/g;
var s = "acbacvabc";

arr = [...s.matchAll(reg)];
console.log(arr);
//输出：
/**
[
  [ 'a', index: 0, input: 'acbacvabc', groups: undefined ],
  [ 'a', index: 3, input: 'acbacvabc', groups: undefined ],
  [ 'a', index: 6, input: 'acbacvabc', groups: undefined ]
]
**/
```

`search()`

在字符串中执行查找匹配的字符，返回第一个匹配到字符的位置，未匹配到返回-1

```javascript
var reg = /en/g;
var reg1 = /yo/g;
var s = "yuwenbo";

s.search(reg); //3
s.search(reg1); //-1
```

`replace()`

在字符串中执行查找匹配的字符，并且使用替换字符串替换匹配到的子字符串。两个参数一个是正则表达式，一个是需要替换的内容。

如果正则没有`g`修饰符，只替换第一个匹配成功的值。如果有`g`修饰符，则替换所有匹配成功的值。

```javascript
var s = "i love you";
console.log(s.replace(/\s/, "❤")); //i❤love you
console.log(s.replace(/\s/g, "❤")); //i❤love❤you
```

`replace`第二个参数可以使用`$`符号，用来更加方便的制定所替换的内容

- `$&`：匹配的子字符串
- `\$``：匹配结果前面的文本
- `$'`：匹配结果后面的文本
- `$n`：匹配成功的第 n 组内容，n 是从 1 开始的自然数
- `$$`：指代美元符号`$`

```javascript
console.log("he llo".replace(/(\w+)\s(\w+)/, "$2 $1")); //llo he
console.log("hello".replace(/e/, "-$`-$&-$'-")); //h-h-e-llo-llo
```

`replace`的第二个参数也可以作为一个函数，将每一个正则匹配内容替换为函数的返回值

函数可以接受多个参数，第一个为匹配到的内容，后面为组匹配内容(可以有多个组匹配)，倒数第二个参数为匹配内容再字符串中的位置，倒数第一个参数为原字符串。

```javascript
console.log(
  "hello".replace(/e/, function(match, index, str) {
    console.log(match, index, str);
    return "❤";
  })
);

//e 1 hello
//h❤llo
```

`split()`

使用正则表达式或者一个固定字符串分割一个字符串，并将分割后的子字符串存储到数组中
该方法可接受两个参数，第一个参数为正则表达式，表示分割规则，第二个参数是返回数组的最大成员数

```javascript
str = "ni hao ya.hei hei hei";
str.split(/ |\./, 5); //[ 'ni', 'hao', 'ya', 'hei', 'hei' ]
```

**总结：**

判断字符串是否被匹配到，使用`test`或者`search`方法
想获得更多的信息，使用`exec`或者，`match`方法，会比较慢。

## 修饰符（标志符）

修饰符表示附加规则，放在正则模式的最尾部。可以单个使用，也可以一起使用。

```javascript
//单个修饰符
"abAbab".match(/a/g); //["a","a"]

//多个修饰符一起使用
"abAbab".match(/a/gi); //["a", "A", "a"]
```

### `g`修饰符

> 全局搜索，默认情况下只匹配一次，就停止像下匹配了，加上修饰符会一直向下搜索

### `i`修饰符

> 默认情况下会区分匹配字符串的大小写情况

### `m`修饰符

> 多行搜索，多行模式，会修改`^`和`$`的行为
> 默认情况下，`^`和`$`匹配字符串的开始处和结尾处
> 加上`m`修饰符，`^`和`$`还会匹配行首和行尾，即`^`和`$`会识别换行符`\n`

例如：

- `/yewen$/m.test('hi yuwen\n')` 为`true`
- `/yewen$/.test('hi yuwen\n')` 为`false`

### `s`修饰符

> 允许`.`匹配换行符

### `u`修饰符

> 使用`unicode`码的模式进行匹配

### `y`修饰符

> 执行 粘性搜索匹配从目标字符串的当前位置开始

## 特殊字符

### `\`字符

> 转义字符
> 正则表达式中需要匹配特殊字符本身，需要再前面家反斜杠`\`
> 正则表达式中，需要反斜杠转义的：`^`,`.`,`[`,`$`,`(`,`)`,`|`,`*`,`+`,`?`,`{`,`\`

### `^`字符

> 匹配开始位置
> 如果设置多行标志，那么也匹配换行符后的位置

例如：`/^A/`会匹配 `"Ant"`中的`A`，但是不会匹配`"ntA"`中的`A`

### `$`字符

> 匹配结束位置
> 如果设置多行标志，那么也匹配换行符前的位置

例如：`/A$/`会匹配 `"ntA"`中的`A`，但是不会匹配`"Ant"`中的`A`

### `*`字符

> 匹配一个表达式 0 次或多次
> 等价于 `{0, }`

例如：`/yueno*/`会匹配 `"yuenoooyuen"`中的`yuenooo`和`yuen`

### `+`字符

> 匹配一个表达式 1 次或多次
> 等价于 `{1, }`

例如：`/yueno+/`只会匹配 `"yuenoooyuen"`中的`yuenooo`

### `?`字符

> 匹配一个表达式 0 次或 1 次
> 等价于 `{0, 1}`

- 例如：`/yueno?/`只会匹配 `"yuenoooyuen"`中的`yueno`
- 注意：`?`如果紧跟再任何量词 `*`、`+`、`?`或`{}`的后面，将会使量词变得非贪婪（匹配尽量少的字符）
- 例如：`/yueno??/`只会匹配 `"yuenoooyuen"`中的`yuen`

### `.`字符

> 默认匹配出换行符之外的任何单个字符

- 例如：`/.y/`只会匹配 `"yuenoooyuen"`中的`oy`
- 例如：`/..y/`只会匹配 `"yuenoooyuen"`中的`ooy`

### `(x)`字符

> 捕获括号
> 正则表达式中的括号表示分组匹配，括号中的模式可以用匹配分组的内容
> 分组匹配可以使用`\n`
> 正则替换中，可以使用`$1`,`$2`语法

- 例如：`/(wenbo)+/.test('wenbowenbo')` 为`true`，表示匹配`wenbo`整体一次或多次
- 例如：`"wenbo,zhijian".replace(/(wenbo),(zhijian)/, '$2,$1')`
- 输出：`zhijian,wenbo`

### `(?=x)`字符

> 匹配`X`但是不记住匹配项
> 非捕获括号，使你能够定义与正则表达式运算符一起使用的子表达式
> 使用非捕获括号，能匹配元素，但是不能在使用`\n`和`$n`方法

### `x(?=y)`字符

> 匹配> `x`，仅仅当> `x`后面是> `y`> ，先行断言

- 例如：`'wenbo'.match(/wen(?=bo)/)`
- 输出：`[ 'wen', index: 0, input: 'wenbo', groups: undefined ]`
- 例如：`'wenyu'.match(/wen(?=bo)/)`
- 输出：null

### `(?<=y)x`字符

> 匹配> `x`，仅仅当> `x`前面是> `y` ，> 后行断言

- 例如：`'wenbo'.match(/(?<=wen)bo/)`
- 输出：`[ 'bo', index: 3, input: 'wenbo', groups: undefined ]`
- 例如：`'yubo'.match(/(?<=wen)bo/)`
- 输出：null

### `x(?!y)`字符

> 匹配> `x`，仅仅当> `x`后面不是> `y`时，> 正向否定查找

### `(?<=y)x`字符

> 匹配> `x`，仅仅当> `x`前面不是> `y`> ，反向否定查找

### `x|y`字符

> 匹配> `x`或者> `y` 可以连用

- 例如：`'wenyu'.match(/w|e|n/g)`
- 输出：`[ 'w', 'e', 'n' ]`

### `{n}`字符

> 匹配前面一个字符刚好出现> `n`次，> `n`> 是一个正整数

- 例如：`'hello'.match(/l{2}/g)`
- 输出：`[ 'll' ]`

### `{n,}`字符

> 匹配一个字符至少出现了> `n`次，> `n`> 是一个正整数

### `{n,m}`字符

> 匹配前面的字符至少> `n`> 次最多> `m`> 次，> `n`> ，> `m`是> 为正整数>

### `[xyz]`字符

> 字符集合> 匹配方括号中的任意字符，包括转义字符，可以使用破折号(-)制定一个字符，> 例如：> `[a-zA-Z1-9]`>

- 例如：`'hello 123'.match(/[a-h1-2]/g)`
- 输出：`[ 'h', 'e', '1', '2' ]`

### `[^xyz]`字符

> 反向字符集，> 匹配任何没有包含再方括号中的字符

- 例如：`'hello 123'.match(/[^a-h1-2]/g)`
- 输出：`[ 'l', 'l', 'o', '3' ]`

### `[\b]`字符

> 匹配一个退格(U+0008)，不是> `\b`，不要弄混了

### `\b`字符

> 匹配一个词的边界

例如：

- `/\bworld/.test('hello world') // true`
- `/\bworld/.test('hello-world') // true`
- `/\bworld/.test('helloworld') // false`

### `\B`字符

> 匹配一个非单词边界

例如：

- `/\bworld/.test('hello world') // false`
- `/\bworld/.test('hello-world') // false`
- `/\bworld/.test('helloworld') // true`

### `\cX`字符

> 当 X 是出于 A 到 Z 之间字符的时候，匹配字符串中的一个控制符

### `\d`字符

> 匹配一个数字，等价于> `[0-9]`

### `\D`字符

> 匹配一个数字，等价于> `[^0-9]`

### `\D`字符

> 匹配一个数字，等价于> `[^0-9]`

### `\f`字符

> 匹配一个换页符(U+000C)

### `\n`字符

> 匹配一个换行符(U+000A)

### `\r`字符

> 匹配一个回车符

### `\s`字符

> 匹配一个空白字符，包括空格，制表符，换页符，和换行符
>
> `[\f\n\r\t\v\u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]`

### `\S`字符

> 匹配一个非空白字符

### `\t`字符

> 匹配一个水平制表符

### `\v`字符

> 匹配一个垂直制表符

### `\w`字符

> 匹配一个单字字符（字母，数字或者下划线）> ，等价于> `[A-Za-z0-9_]`

### `\w`字符

> 匹配一个非单字字符> ，等价于> `[A-Za-z0-9_]`

### `\W`字符

> 匹配一个非单字字符

### `\n`字符

> 返回最后的第 n 个字捕获匹配的子字符，> 捕获的数目以左括号计算

### `\0`字符

> 匹配 NULL 字符（U+0000）

### `\xhh`字符

> 匹配一个两位十六进制数表示的字符（\x00-\xFF）

### `\uhhhh`字符

> 匹配一个四位十六进制数表示的 UTF-16 代码单元

### `\u{hhhhh}`字符或`\u{hhhh}`

> （仅当设置了 U 标志时）匹配一个十六进制时候表示的 Unicode 字符
