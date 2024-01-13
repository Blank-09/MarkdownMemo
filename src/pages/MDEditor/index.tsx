import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import theme from 'react-syntax-highlighter/dist/esm/styles/prism/dracula'

import { Textarea } from '@/components/ui/textarea'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable'

const MDEditor: React.FC = () => {
  const [markdown, setMarkdown] = React.useState('')

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdown(event.target.value)
  }

  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel defaultSize={50} className="p-4">
        <Textarea
          className="h-full"
          value={markdown}
          onChange={handleInputChange}
        />
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={50} className="py-6 px-4">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            code: ({ node, inline, className, children, ...props }) => {
              const match = /language-(\w+)/.exec(className || '')

              return !inline && match ? (
                <SyntaxHighlighter
                  style={theme}
                  language={match[1]}
                  PreTag="div"
                  children={String(children).replace(/\n$/, '')}
                  className="fira-code-semibold"
                  {...props}
                />
              ) : (
                <code {...props}>{children}</code>
              )
            },
          }}
          className="prose prose-neutral dark:text-white dark:prose-headings:text-white prose-code:text-red-400 prose-code:bg-neutral-100 dark:prose-code:bg-neutral-800 prose-code:rounded-md prose-pre:bg-transparent prose-pre:p-0 overflow-auto h-full mx-auto dark:prose-a:text-blue-600"
        >
          {markdown}
        </ReactMarkdown>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}

export default MDEditor
