import React from 'react'

import { ExampleComponent, Button, Video, Card } from '@bwalsh/component_library'
import '@bwalsh/component_library/dist/index.css'

const App = () => {
  return (
    <>
      <Card title="Survivor Borneo" description="This was the first season of survivor. Winner: Richard Hatch">
        <Video title="Survivor Borneo" src="https://www.youtube.com/embed/BhKQBTJME5o" />
        <Button>
          hello
        </Button>
      </Card>
    </>
  )
}

export default App
