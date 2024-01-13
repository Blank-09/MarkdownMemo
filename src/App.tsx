import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from 'next-themes'
import { Provider } from 'react-redux'

// Others
import router from './routes'
import store from './app/store'

// Components
import { Toaster } from './components/ui/sonner'
// import { ModeToggle } from './components/ModeToggle'

const App: React.FC = () => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <Provider store={store}>
        <RouterProvider router={router} />
        <Toaster richColors />
        {/* <ModeToggle /> */}
      </Provider>
    </ThemeProvider>
  )
}

export default App
