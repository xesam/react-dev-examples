import "./App.css";
import {MarkdownViewer} from "./MarkdownViewer.tsx";

function App() {

    return (
        <>
            <MarkdownViewer text={defaultMarkdown}/>
        </>
    );
}

export default App;

const defaultMarkdown = `# React Markdown 演示

这是一个使用 **react-markdown** 的演示项目，支持多种 Markdown 扩展功能。

## 代码块支持

### JavaScript 代码
\`\`\`javascript
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10)); // 55
\`\`\`

### Python 代码
\`\`\`python
def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quick_sort(left) + middle + quick_sort(right)

print(quick_sort([3, 6, 8, 10, 1, 2, 1]))
\`\`\`

## LaTeX 数学公式支持

### 行内公式
这是一个行内公式：$E = mc^2$，爱因斯坦的质能方程。

### 块级公式
$$
\\int_{-\\infty}^{\\infty} e^{-x^2} dx = \\sqrt{\\pi}
$$

$$
\\frac{d}{dx}\\left( \\int_{a}^{x} f(u)\\,du\\right) = f(x)
$$

### 矩阵
$$
\\begin{pmatrix}
a & b \\\\
c & d
\\end{pmatrix}
\\begin{pmatrix}
x \\\\
y
\\end{pmatrix}
=
\\begin{pmatrix}
ax + by \\\\
cx + dy
\\end{pmatrix}
$$

## Mermaid 图表支持

### 流程图
\`\`\`mermaid
graph TD
    A[开始] --> B{是否登录?}
    B -->|是| C[显示主页]
    B -->|否| D[显示登录页]
    D --> E[用户输入凭据]
    E --> F{验证成功?}
    F -->|是| C
    F -->|否| G[显示错误信息]
    G --> D
    C --> H[结束]
\`\`\`

### 序列图
\`\`\`mermaid
sequenceDiagram
    participant 用户
    participant 前端
    participant 后端
    participant 数据库
    
    用户->>前端: 提交表单
    前端->>后端: 发送API请求
    后端->>数据库: 查询数据
    数据库-->>后端: 返回结果
    后端-->>前端: 返回响应
    前端-->>用户: 显示结果
\`\`\`

### 甘特图
\`\`\`mermaid
gantt
    title 项目开发时间线
    dateFormat  YYYY-MM-DD
    section 设计阶段
    需求分析           :done,    des1, 2024-01-01,2024-01-05
    UI设计            :done,    des2, 2024-01-06,2024-01-12
    section 开发阶段
    前端开发          :active,  dev1, 2024-01-13,2024-02-15
    后端开发          :         dev2, 2024-01-20,2024-02-20
    section 测试阶段
    单元测试          :         test1, 2024-02-16,2024-02-25
    集成测试          :         test2, 2024-02-21,2024-03-01
\`\`\`

## 表格支持

| 功能 | 支持状态 | 说明 |
|------|----------|------|
| 代码高亮 | ✅ | 使用 react-syntax-highlighter |
| LaTeX 公式 | ✅ | 使用 remark-math + rehype-katex |
| Mermaid 图表 | ✅ | 自定义组件渲染 |
| 表格 | ✅ | 原生支持 |
| 任务列表 | ✅ | GitHub 风格 |

## 任务列表

- [x] 实现代码块高亮
- [x] 添加 LaTeX 支持
- [x] 集成 Mermaid 图表
- [ ] 添加更多主题
- [ ] 优化移动端显示

## 引用和链接

> 这是一个引用块。可以用来突出显示重要信息或引用他人的话。

更多信息请访问 [React Markdown 官方文档](https://github.com/remarkjs/react-markdown)。
`