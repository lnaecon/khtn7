import React, { useState } from 'react';
import { 
  AlertCircle, 
  CheckCircle, 
  MapPin, 
  Ship, 
  Book, 
  Globe, 
  Coins, 
  Users, 
  Building, 
  Clock 
} from 'lucide-react';
import { Card, CardContent, CardHeader } from './components/ui/card';
import { Button } from './components/ui/button'; // Keep this one
import './App.css';

const quizData = [
  // ... your quiz data remains unchanged
];

const QuizDashboard = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleAnswerClick = (index) => {
    setSelectedAnswer(index);
    setShowExplanation(true);
  };

  const handleNextQuestion = () => {
    setCurrentQuestion((prev) => (prev + 1) % quizData.length);
    setSelectedAnswer(null);
    setShowExplanation(false);
  };

  const currentQuizData = quizData[currentQuestion];

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-100 to-stone-300 flex items-center justify-center p-4">
      <Card className="w-full max-w-3xl bg-white/80 backdrop-blur-sm shadow-xl">
        <CardHeader className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Lịch Sử Lớp 7: Ôn Tập Kiến Thức</h1>
          <div className="flex justify-center space-x-2 mb-4">
            <MapPin className="text-blue-500" />
            <Ship className="text-green-500" />
            <Book className="text-red-500" />
          </div>
        </CardHeader>
        <CardContent>
          <h2 className="text-2xl font-semibold mb-6 text-center">{currentQuizData.question}</h2>
          <div className="space-y-4">
            {currentQuizData.answers.map((answer, index) => (
              <Button
                key={index}
                className={`w-full text-left py-3 px-4 rounded-lg transition-colors ${
                  selectedAnswer === index
                    ? answer.isCorrect
                      ? 'bg-green-500 text-white'
                      : 'bg-red-500 text-white'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
                onClick={() => handleAnswerClick(index)}
                disabled={showExplanation}
              >
                {answer.text}
              </Button>
            ))}
          </div>
          {showExplanation && (
            <div className="mt-6 p-4 bg-white rounded-lg shadow">
              <p className="text-lg mb-2">
                {selectedAnswer !== null && (
                  <>
                    {currentQuizData.answers[selectedAnswer].isCorrect ? (
                      <CheckCircle className="inline-block mr-2 text-green-500" />
                    ) : (
                      <AlertCircle className="inline-block mr-2 text-red-500" />
                    )}
                    {currentQuizData.answers[selectedAnswer].explanation}
                  </>
                )}
              </p>
              <p className="text-md mt-4">{currentQuizData.historicalContext}</p>
              <Button className="mt-4" onClick={handleNextQuestion}>
                Câu hỏi tiếp theo
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default QuizDashboard;
