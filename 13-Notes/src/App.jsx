import { useState } from "react"
import { X } from "lucide-react"

const App = () => {
  const [title, setTitle] = useState("")
  const [details, setDetails] = useState("")
  const [tasks, setTasks] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()
    if (!title || !details) return

    setTasks(prev => [...prev, { title, details }])
    setTitle("")
    setDetails("")
  }

  const deleteNote = (index) => {
    setTasks(prev => prev.filter((_, idx) => idx !== index))
  }

  return (
    <div className="min-h-screen lg:flex bg-black text-white">

      {/* ADD NOTE */}
      <form
        onSubmit={submitHandler}
        className="flex flex-col gap-4 lg:w-1/2 p-10"
      >
        <h1 className="text-4xl font-bold">Add Notes</h1>

        <input
          type="text"
          placeholder="Title Of Note"
          className="bg-white text-black px-5 py-3 rounded border-2 outline-none"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Write Details"
          className="bg-white text-black px-5 py-3 h-40 rounded border-2 outline-none resize-none"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />

        <button
          type="submit"
          className="bg-white text-black py-3 rounded font-semibold active:scale-95"
        >
          Add To Notes
        </button>
      </form>

      {/* NOTES LIST */}
      <div className="lg:w-1/2 border-l border-gray-700 p-10">
        <h1 className="text-4xl font-bold">Previous Notes</h1>

        <div className="flex flex-wrap gap-5 mt-8">
          {tasks.map((note, idx) => (
            <div
              key={idx}
              className="relative w-44 h-52 p-4 bg-white text-black rounded-2xl"
            >
              <button
                onClick={() => deleteNote(idx)}
                className="absolute top-3 right-3 bg-red-500 p-2 rounded-full"
              >
                <X size={14} />
              </button>

              <h3 className="text-lg font-bold">{note.title}</h3>
              <p className="mt-3 text-sm text-gray-700">{note.details}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
