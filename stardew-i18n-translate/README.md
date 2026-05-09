# Stardew Valley 翻译工作流 Skill

## 目的
将 HTML 中的中文内容替换为英文，并在 i18n.js 中添加对应中文翻译。

## 翻译流程

### 1. 查找中文内容
```bash
# 检查某个页面中的中文
grep -n "中文关键词" page.html

# 或使用 Python 检查所有中文
python3 -c "
import re
with open('page.html', 'r') as f:
    content = f.read()
pattern = re.compile(r'data-i18n=\"[^\"]+\"[^>]*>([\u4e00-\u9fa5]+)')
matches = pattern.findall(content)
print(matches)
"
```

### 2. 在 i18n.js 中查找对应翻译键
```bash
grep -n "对应的翻译键" i18n.js
```

### 3. 修改 HTML
将中文内容替换为英文，并添加 data-i18n 属性：
```html
<!-- 修改前 -->
<span>中文内容</span>

<!-- 修改后 -->
<span data-i18n="page.section.key">English Content</span>
```

### 4. 更新 i18n.js
添加/修改翻译键：
```javascript
'page.section.key': '中文内容',  // 中文翻译
```

### 5. 验证
```bash
# 验证 JavaScript 语法
node -c i18n.js

# 检查 HTML 中的中文
python3 -c "
import re
with open('page.html', 'r') as f:
    content = f.read()
pattern = re.compile(r'data-i18n=\"[^\"]+\"[^>]*>([\u4e00-\u9fa5]+)')
matches = pattern.findall(content)
if matches:
    print(f'仍有 {len(matches)} 处中文未处理')
else:
    print('全部处理完成')
"
```

## 注意事项
1. **HTML 内容必须与 i18n.js 中的英文翻译完全一致**
2. **<strong> 标签内的文字需要单独添加 data-i18n**
3. **翻译键命名规则**: `页面.章节.具体键名`
4. **修改完成后立即验证语法**

## 常见问题
- 如果 i18n.js 中没有对应翻译键，需要先添加
- 如果有多个相似项，可使用 replace_all
- 提交前务必验证 JavaScript 语法

## 经验教训
1. **先验证语法再提交** - `node -c i18n.js`
2. **逐个文件处理** - 不要一次性处理太多文件，容易出错
3. **中英文混合内容** - 如 "Ginger Island Guide站"，需要判断是否完整翻译
4. **批量处理技巧** - 可使用 sed 进行批量替换，但要注意精确匹配
5. **检查残留** - 处理完后立即用 Python 检查是否还有遗漏
