"use client"

import {useEffect, useRef, useState} from "react"
import mermaid from "mermaid"

interface MermaidChartProps {
    chart: string
}

export default function MermaidChart({chart}: MermaidChartProps) {
    const ref = useRef<HTMLDivElement>(null)
    const [svg, setSvg] = useState<string>("")
    const [error, setError] = useState<string>("")

    useEffect(() => {
        mermaid.initialize({
            startOnLoad: false,
            theme: "default",
            securityLevel: "loose",
        })
    }, [])

    useEffect(() => {
        const renderChart = async () => {
            if (!chart || !ref.current) return

            try {
                setError("")
                const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`
                const {svg} = await mermaid.render(id, chart)
                setSvg(svg)
            } catch (err) {
                console.error("Mermaid rendering error:", err)
                setError("图表渲染失败，请检查语法")
            }
        }

        renderChart()
    }, [chart])

    if (error) {
        return (
            <div className="border border-red-200 bg-red-50 p-4 rounded-md">
                <p className="text-red-600 text-sm">{error}</p>
                <pre className="text-xs text-red-500 mt-2 overflow-x-auto">{chart}</pre>
            </div>
        )
    }

    return (
        <div
            ref={ref}
            className="flex justify-center my-4 p-4 bg-white rounded-md border"
            dangerouslySetInnerHTML={{__html: svg}}
        />
    )
}
