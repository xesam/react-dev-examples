import ReactMarkdown from "react-markdown"
// @ts-expect-error: 类型未在默认导出中显式暴露，需动态引入
import type {CodeProps} from 'react-markdown/lib/ast-to-react';
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter"
import {tomorrow} from "react-syntax-highlighter/dist/esm/styles/prism"
import remarkMath from "remark-math"
import rehypeKatex from "rehype-katex"
import remarkGfm from "remark-gfm"
import MermaidChart from "./mermaid-chart"
import "katex/dist/katex.min.css"

export function MarkdownViewer({text}: { text: string }) {

    return (
        <div style={{width: '50%', margin: '0 auto', background: 'white', padding: '20px'}}>
            <ReactMarkdown
                remarkPlugins={[remarkMath, remarkGfm]}
                rehypePlugins={[rehypeKatex]}
                components={{
                    code({inline, className, children, ...props}: CodeProps) {
                        const match = /language-(\w+)/.exec(className || "")
                        const language = match ? match[1] : ""

                        if (language === "mermaid") {
                            return <MermaidChart chart={String(children).replace(/\n$/, "")}/>
                        }

                        return !inline && match ? (
                            <SyntaxHighlighter style={tomorrow} language={language} PreTag="div" {...props}>
                                {String(children).replace(/\n$/, "")}
                            </SyntaxHighlighter>
                        ) : (
                            <code className={className} {...props}>
                                {children}
                            </code>
                        )
                    },
                }}
            >
                {text}
            </ReactMarkdown>
        </div>
    )
}
