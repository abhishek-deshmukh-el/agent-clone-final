import './App.css'
import { Button } from './components/ui/button'
import { EuiProvider, EuiText } from '@elastic/eui'

function App() {

  return (
    <EuiProvider>
      <div className="flex min-h-svh flex-col items-center justify-center">
      <EuiText>
        <p>Hello World!</p>
      </EuiText>
      <Button>Click me</Button>
      </div>
    </EuiProvider>
  )
}

export default App
