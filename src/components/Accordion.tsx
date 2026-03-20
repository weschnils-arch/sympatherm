import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface AccordionItem {
  title: string
  content: string | React.ReactNode
}

interface Props {
  items: AccordionItem[]
  defaultOpen?: number
}

export default function Accordion({ items, defaultOpen = 0 }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpen)

  return (
    <div className="divide-y divide-border rounded-xl border border-border overflow-hidden">
      {items.map((item, i) => (
        <div key={i}>
          <button
            className="w-full flex items-center justify-between px-5 lg:px-6 py-4 lg:py-5 text-left font-semibold text-secondary hover:bg-bg/50 transition-colors"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            aria-expanded={openIndex === i}
          >
            <span className="pr-4">{item.title}</span>
            <ChevronDown
              size={20}
              className={`shrink-0 text-secondary-light transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}
              aria-hidden="true"
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === i ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="px-5 lg:px-6 pb-5 lg:pb-6 text-secondary-light leading-relaxed">
              {typeof item.content === 'string' ? <p>{item.content}</p> : item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
