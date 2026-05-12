import { useState, useEffect } from 'react'

export function useQueryParam(key: string): string | null {
  const [value, setValue] = useState<string | null>(null)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    setValue(params.get(key))
  }, [key])

  return value
}
