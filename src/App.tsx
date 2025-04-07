import './App.css'
import Button from './presentation/components/molecules/button/Button'

function App() {

  return (
    <>
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <Button title='Click' onClick={() => alert("¡Click!")}
        className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded"
        labelSize="md"/>
    </div>
     
    </>
  )
}

export default App
