import { useLocation, useNavigate } from 'react-router-dom';

export default function Results() {
  const location = useLocation();
  const navigate = useNavigate();
  const { answers } = location.state || { answers: {} };


  const correctAnswers = {
    q1: 'Alar Karis',
    q2: 'Paul Aaron',
    q3: 'Ott Kiivikas'
  };

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


  const score = Object.keys(answers).filter(
    (key) => answers[key] === correctAnswers[key]
  ).length;

  const totalQuestions = questions.length;

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow">
      <h1 className="text-4xl font-bold mb-6">Tulemused</h1>

      {/* Score Summary */}
      <div className="mb-8 p-4 bg-stone-100 rounded-lg text-center">
        <p className="text-2xl font-bold">
          {score} / {totalQuestions}
        </p>
        <p className="text-lg text-stone-600 mt-2">
          {Math.round((score / totalQuestions) * 100)}%
        </p>
      </div>

      {/* Results */}
      {questions.map((q) => {
        const isCorrect = answers[q.id] === correctAnswers[q.id];
        return (
          <div
            key={q.id}
            className={`mb-6 p-4 rounded-lg border-2 ${
              isCorrect
                ? 'bg-green-50 border-green-300'
                : 'bg-red-50 border-red-300'
            }`}
          >
            <h2 className="text-lg font-semibold mb-3">{q.question}</h2>

            {/* Your Answer */}
            <div className="mb-3">
              <p className="font-semibold text-stone-700">Sinu vastus:</p>
              <p
                className={`text-base ${
                  isCorrect ? 'text-green-700' : 'text-red-700'
                }`}
              >
                {answers[q.id] || 'Vastuse andmata'}
              </p>
            </div>

            {/* Correct Answer (show only if wrong) */}
            {!isCorrect && (
              <div>
                <p className="font-semibold text-stone-700">Õige vastus:</p>
                <p className="text-base text-green-700">{correctAnswers[q.id]}</p>
              </div>
            )}

            {/* Status */}
            <div className="mt-3">
              {isCorrect ? (
                <span className="text-green-700 font-semibold">✓ Õige</span>
              ) : (
                <span className="text-red-700 font-semibold">✗ Vale</span>
              )}
            </div>
          </div>
        );
      })}

      {/* Back Button */}
      <button
        onClick={() => navigate('/')}
        className="mt-6 px-6 py-2 bg-stone-900 text-white rounded hover:bg-stone-700"
      >
        Tagasi
      </button>
    </div>
  );
}
