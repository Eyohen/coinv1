import React, { useState } from 'react'
import { FaPlus, FaTrash } from 'react-icons/fa'
import Sidebar from '../components/Sidebar'

export default function CreateExamination() {
  const [examData, setExamData] = useState({
    name: '',
    category: '',
    description: '',
    staffType: [],
    questions: []
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setExamData(prev => ({ ...prev, [name]: value }))
  }

  const handleStaffTypeChange = (e) => {
    const { value, checked } = e.target
    setExamData(prev => ({
      ...prev,
      staffType: checked
        ? [...prev.staffType, value]
        : prev.staffType.filter(type => type !== value)
    }))
  }

  const addQuestion = () => {
    setExamData(prev => ({
      ...prev,
      questions: [...prev.questions, { text: '', options: ['', '', '', ''], correctAnswer: '' }]
    }))
  }

  const updateQuestion = (index, field, value) => {
    setExamData(prev => ({
      ...prev,
      questions: prev.questions.map((q, i) => 
        i === index ? { ...q, [field]: value } : q
      )
    }))
  }

  const updateOption = (questionIndex, optionIndex, value) => {
    setExamData(prev => ({
      ...prev,
      questions: prev.questions.map((q, i) => 
        i === questionIndex
          ? { ...q, options: q.options.map((opt, j) => j === optionIndex ? value : opt) }
          : q
      )
    }))
  }

  const removeQuestion = (index) => {
    setExamData(prev => ({
      ...prev,
      questions: prev.questions.filter((_, i) => i !== index)
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the examData to your backend
    console.log(examData)
    alert('Examination created successfully!')
  }

  return (
    <>
    <Sidebar/>

    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold mb-6">Create Examination</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Examination Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={examData.name}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
              Category
            </label>
            <select
              id="category"
              name="category"
              value={examData.category}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            >
              <option value="">Select a category</option>
              <option value="Math">Math</option>
              <option value="Science">Science</option>
              <option value="History">History</option>
              <option value="Literature">Literature</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={examData.description}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
              required
            />
          </div>
          <div className="mb-4">
            <span className="block text-gray-700 text-sm font-bold mb-2">Staff Type</span>
            <div className="flex gap-4">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  value="teaching"
                  checked={examData.staffType.includes('teaching')}
                  onChange={handleStaffTypeChange}
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span className="ml-2 text-gray-700">Teaching Staff</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  value="non-teaching"
                  checked={examData.staffType.includes('non-teaching')}
                  onChange={handleStaffTypeChange}
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span className="ml-2 text-gray-700">Non-teaching Staff</span>
              </label>
            </div>
          </div>
          <div className="mb-4">
            <h2 className="text-xl font-bold mb-2">Questions</h2>
            {examData.questions.map((question, questionIndex) => (
              <div key={questionIndex} className="mb-6 p-4 border rounded">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-semibold">Question {questionIndex + 1}</h3>
                  <button
                    type="button"
                    onClick={() => removeQuestion(questionIndex)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <FaTrash />
                  </button>
                </div>
                <input
                  type="text"
                  value={question.text}
                  onChange={(e) => updateQuestion(questionIndex, 'text', e.target.value)}
                  placeholder="Enter question text"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
                  required
                />
                {question.options.map((option, optionIndex) => (
                  <div key={optionIndex} className="flex items-center mb-2">
                    <input
                      type="text"
                      value={option}
                      onChange={(e) => updateOption(questionIndex, optionIndex, e.target.value)}
                      placeholder={`Option ${optionIndex + 1}`}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      required
                    />
                    <input
                      type="radio"
                      name={`correctAnswer-${questionIndex}`}
                      value={optionIndex}
                      checked={question.correctAnswer === optionIndex.toString()}
                      onChange={() => updateQuestion(questionIndex, 'correctAnswer', optionIndex.toString())}
                      className="ml-2 form-radio h-5 w-5 text-blue-600"
                      required
                    />
                  </div>
                ))}
              </div>
            ))}
            <button
              type="button"
              onClick={addQuestion}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center"
            >
              <FaPlus className="mr-2" /> Add Question
            </button>
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Create Examination
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}