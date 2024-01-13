import React, { Suspense } from 'react'

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable'
import Sidebar from '@/components/Sidebar'
import { Outlet } from 'react-router-dom'

const RootLayout: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = React.useState(true)

  function toggleSidebar() {
    setSidebarOpen(!isSidebarOpen)
  }

  React.useEffect(() => {
    window.onkeydown = (e: KeyboardEvent): void => {
      if (e.ctrlKey && e.key === 'b') {
        toggleSidebar()
      }
    }

    return () => {
      window.onkeydown = null
    }
  })

  return (
    <ResizablePanelGroup
      className="h-full"
      direction="horizontal"
      autoSaveId="root-layout"
    >
      <ResizablePanel
        onCollapse={() => setSidebarOpen(false)}
        onExpand={() => setSidebarOpen(true)}
        defaultSize={25}
        collapsible={true}
        minSize={20}
      >
        {isSidebarOpen && <Sidebar setSidebarOpen={toggleSidebar} />}
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={75} className="overflow-auto">
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}

export default RootLayout
