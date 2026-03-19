import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Quiz() {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({
    q1: '',
    q2: '',
    q3: ''
  });

  const questions = [
    {
      id: 'q1',
      question: 'Kes neist on Eesti president?',
      options: ['Kersti Kaljulaid', 'Mart Helme', 'Alar Karis']
    },
    {
      id: 'q2',
      question: 'Kes neist on Eesti F1 sõitja?',
      options: ['Franco Colapinto', 'Paul Aaron', 'Nico Hülkenberg']
    },
    {
      id: 'q3',
      question: 'Kes neist on Eesti kulturist?',
      options: ['Ronnie Coleman', 'Chris Bumstead', 'Ott Kiivikas']
    }
  ];

  const handleChange = (questionId, value) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const handleSubmit = () => {
    navigate('/results', { state: { answers } });
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow">
      <h1 className="text-4xl font-bold mb-6">Viktoriin</h1>
      
      {questions.map((q) => (
        <div key={q.id} className="mb-8">
          <h2 className="text-lg font-semibold mb-4">{q.question}</h2>
          <div className="space-y-3">
            {q.options.map((option, idx) => (
              <label key={idx} className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name={q.id}
                  value={option}
                  checked={answers[q.id] === option}
                  onChange={(e) => handleChange(q.id, e.target.value)}
                  className="w-4 h-4 accent-black"
                />
                <span className="ml-3">{option}</span>
              </label>
            ))}
          </div>
        </div>
      ))}

      <button
        onClick={handleSubmit}
        className="mt-6 px-6 py-2 bg-stone-900 text-white rounded hover:bg-stone-700"
      >
        Kinnita
      </button>
    </div>
  );
}
