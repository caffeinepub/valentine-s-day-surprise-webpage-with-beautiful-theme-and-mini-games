import { useState } from 'react';
import { Heart, CheckCircle2, XCircle } from 'lucide-react';

interface Question {
  question: string;
  options: string[];
  correctAnswer: number;
}

const questions: Question[] = [
  {
    question: "What makes a relationship truly special?",
    options: [
      "Trust and communication",
      "Expensive gifts",
      "Perfect agreement on everything",
      "Never having disagreements"
    ],
    correctAnswer: 0
  },
  {
    question: "What's the best way to show love?",
    options: [
      "Only through grand gestures",
      "Small daily acts of kindness",
      "Buying expensive things",
      "Saying 'I love you' once a year"
    ],
    correctAnswer: 1
  },
  {
    question: "What's most important in a partnership?",
    options: [
      "Always being right",
      "Supporting each other's dreams",
      "Having identical interests",
      "Never spending time apart"
    ],
    correctAnswer: 1
  },
  {
    question: "How should couples handle disagreements?",
    options: [
      "Avoid talking about them",
      "Always let one person win",
      "Listen and find compromise",
      "Keep score of who's right"
    ],
    correctAnswer: 2
  },
  {
    question: "What makes love last forever?",
    options: [
      "Never changing",
      "Growing together through life",
      "Avoiding all challenges",
      "Being perfect for each other"
    ],
    correctAnswer: 1
  },
  {
    question: "What's the secret to a happy relationship?",
    options: [
      "Never saying sorry",
      "Keeping secrets",
      "Appreciation and gratitude",
      "Competing with each other"
    ],
    correctAnswer: 2
  }
];

export default function LoveQuizGame() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleAnswer = (answerIndex: number) => {
    if (isAnswered) return;
    
    setSelectedAnswer(answerIndex);
    setIsAnswered(true);
    
    if (answerIndex === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setIsAnswered(false);
      } else {
        setShowResult(true);
      }
    }, 1500);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResult(false);
    setIsAnswered(false);
  };

  if (showResult) {
    const percentage = Math.round((score / questions.length) * 100);
    let message = "";
    
    if (percentage === 100) {
      message = "Perfect! You know what true love is all about! 💕";
    } else if (percentage >= 80) {
      message = "Excellent! You have a beautiful understanding of love! ❤️";
    } else if (percentage >= 60) {
      message = "Great job! Love is a journey we learn together! 💖";
    } else {
      message = "Every day with you teaches me more about love! 💗";
    }

    return (
      <div className="text-center py-12">
        <div className="mb-6 flex justify-center">
          <Heart className="w-20 h-20 text-rose-500 animate-pulse" fill="currentColor" />
        </div>
        <h3 className="text-4xl font-bold text-rose-600 mb-4">Quiz Complete!</h3>
        <p className="text-3xl font-bold text-rose-700 mb-4">
          {score} out of {questions.length}
        </p>
        <p className="text-xl text-rose-600 mb-8 max-w-md mx-auto">{message}</p>
        <button
          onClick={restartQuiz}
          className="px-8 py-3 bg-gradient-to-r from-rose-500 to-pink-600 text-white font-semibold rounded-full shadow-lg hover:shadow-rose-300/50 hover:scale-105 transition-all duration-300"
        >
          Take Quiz Again
        </button>
      </div>
    );
  }

  const question = questions[currentQuestion];

  return (
    <div>
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm font-medium text-rose-600">
            Question {currentQuestion + 1} of {questions.length}
          </span>
          <span className="text-sm font-medium text-rose-600">
            Score: {score}
          </span>
        </div>
        <div className="w-full bg-rose-100 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-rose-500 to-pink-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <h3 className="text-2xl font-bold text-rose-700 mb-8 text-center">
        {question.question}
      </h3>

      <div className="space-y-4">
        {question.options.map((option, index) => {
          const isCorrect = index === question.correctAnswer;
          const isSelected = selectedAnswer === index;
          
          let buttonClass = "w-full p-4 text-left rounded-xl border-2 transition-all duration-300 ";
          
          if (!isAnswered) {
            buttonClass += "border-rose-200 hover:border-rose-400 hover:bg-rose-50 bg-white";
          } else if (isSelected) {
            if (isCorrect) {
              buttonClass += "border-green-500 bg-green-50";
            } else {
              buttonClass += "border-red-500 bg-red-50";
            }
          } else if (isCorrect) {
            buttonClass += "border-green-500 bg-green-50";
          } else {
            buttonClass += "border-rose-200 bg-white opacity-50";
          }

          return (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              disabled={isAnswered}
              className={buttonClass}
            >
              <div className="flex items-center justify-between">
                <span className="text-gray-700 font-medium">{option}</span>
                {isAnswered && (
                  <>
                    {isSelected && isCorrect && (
                      <CheckCircle2 className="w-6 h-6 text-green-600" />
                    )}
                    {isSelected && !isCorrect && (
                      <XCircle className="w-6 h-6 text-red-600" />
                    )}
                    {!isSelected && isCorrect && (
                      <CheckCircle2 className="w-6 h-6 text-green-600" />
                    )}
                  </>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
