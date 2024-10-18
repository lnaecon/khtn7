import React, { useState } from 'react';
import { AlertCircle, CheckCircle, MapPin, Ship, Book } from 'lucide-react';
import { Card, CardContent, CardHeader } from './components/ui/card';
import { Button } from './components/ui/button'; // Keep this one
import './App.css';


const quizData = [
  {
    question: "Ai là người dẫn đầu đoàn thám hiểm hoàn thành chuyến đi đường biển vòng quanh thế giới từ năm 1519-1522?",
    answers: [
      { text: "Ma-ghien-lăng", isCorrect: true, explanation: "Đúng! Ma-ghien-lăng dẫn đầu đoàn thám hiểm này. 🎉" },
      { text: "Cô-lôm-bô", isCorrect: false, explanation: "Sai rồi. Cô-lôm-bô phát hiện châu Mỹ năm 1492. 😕" },
      { text: "Đi-a-xơ", isCorrect: false, explanation: "Không đúng. Đi-a-xơ đến mũi Hảo Vọng năm 1487. 😔" },
      { text: "Va-xcô đơ Ga-ma", isCorrect: false, explanation: "Sai. Ga-ma tìm ra đường biển đến Ấn Độ năm 1497-1498. 😞" }
    ],
    historicalContext: "Ma-ghien-lăng đã không sống sót để hoàn thành chuyến đi. Ông bị giết ở Philippines năm 1521, nhưng đoàn thám hiểm của ông vẫn tiếp tục và hoàn thành chuyến đi vòng quanh thế giới. 🌍🚢"
  },
  {
    question: "Hệ quả nào sau đây KHÔNG phải là kết quả của các cuộc phát kiến địa lí?",
    answers: [
      { text: "Mở ra con đường mới", isCorrect: false, explanation: "Sai - Đây là hệ quả của phát kiến địa lí." },
      { text: "Thúc đẩy hàng hải quốc tế", isCorrect: false, explanation: "Sai - Đây là hệ quả của phát kiến địa lí." },
      { text: "Chấm dứt chế độ nô lệ", isCorrect: true, explanation: "Đúng - Phát kiến địa lí thực tế dẫn đến nạn buôn bán nô lệ." },
      { text: "Bắt đầu xâm chiếm thuộc địa", isCorrect: false, explanation: "Sai - Đây là hệ quả của phát kiến địa lí." }
    ],
    historicalContext: "Mặc dù các cuộc phát kiến địa lí mang lại nhiều lợi ích, chúng cũng gây ra nhiều hậu quả tiêu cực. Ví dụ, ước tính có khoảng 12 triệu người châu Phi đã bị bắt làm nô lệ và vận chuyển sang châu Mỹ trong suốt thời kỳ buôn bán nô lệ xuyên Đại Tây Dương."
  },
  {
    question: "Hiện tượng nào đánh dấu sự khởi đầu của quá trình tích lũy vốn ban đầu ở Anh?",
    answers: [
      { text: "Phát minh máy hơi nước", isCorrect: false, explanation: "Sai - Máy hơi nước được phát minh sau này." },
      { text: "\"Rào đất cướp ruộng\"", isCorrect: true, explanation: "Đúng - Đây là hiện tượng đặc trưng ở Anh thời kỳ này." },
      { text: "Khám phá châu Mỹ", isCorrect: false, explanation: "Sai - Đây là một cuộc phát kiến địa lí." },
      { text: "Cách mạng công nghiệp", isCorrect: false, explanation: "Sai - Cách mạng công nghiệp xảy ra sau này." }
    ],
    historicalContext: "\"Rào đất cướp ruộng\" là một quá trình kéo dài từ thế kỷ 15 đến thế kỷ 19 ở Anh. Nó không chỉ tạo ra nguồn vốn ban đầu cho tư bản mà còn tạo ra một lượng lớn lao động tự do - yếu tố quan trọng cho sự phát triển của chủ nghĩa tư bản sau này."
  },
  {
    question: "Đặc điểm nào sau đây KHÔNG phải là đặc điểm của giai cấp tư sản trong giai đoạn đầu?",
    answers: [
      { text: "Có thế lực kinh tế", isCorrect: false, explanation: "Sai - Đây là đặc điểm của giai cấp tư sản." },
      { text: "Nắm quyền lực chính trị", isCorrect: true, explanation: "Đúng - Tư sản lúc này chưa có quyền lực chính trị." },
      { text: "Là chủ các công trường thủ công", isCorrect: false, explanation: "Sai - Đây là đặc điểm của giai cấp tư sản." },
      { text: "Xuất thân từ thương nhân giàu có", isCorrect: false, explanation: "Sai - Đây là nguồn gốc của giai cấp tư sản." }
    ],
    historicalContext: "Sự hình thành của hai giai cấp mới này đánh dấu sự khởi đầu của một cuộc cách mạng xã hội sâu sắc ở châu Âu. Mâu thuẫn giữa hai giai cấp này sẽ trở thành động lực chính cho sự phát triển của xã hội tư bản trong những thế kỷ tiếp theo."
  },
  {
    question: "Hiện tượng \"rào đất cướp ruộng\" diễn ra mạnh mẽ nhất ở quốc gia nào?",
    answers: [
      { text: "Pháp", isCorrect: false, explanation: "Sai - Hiện tượng này phổ biến nhất ở Anh." },
      { text: "Đức", isCorrect: false, explanation: "Sai - Hiện tượng này phổ biến nhất ở Anh." },
      { text: "Anh", isCorrect: true, explanation: "Đúng - Đây là nơi hiện tượng này diễn ra mạnh mẽ nhất." },
      { text: "Tây Ban Nha", isCorrect: false, explanation: "Sai - Hiện tượng này phổ biến nhất ở Anh." }
    ],
    historicalContext: "Quá trình tích lũy vốn ban đầu của giai cấp tư sản thường được gọi là \"tích lũy nguyên thủy\". Đây là giai đoạn chuyển tiếp từ chế độ phong kiến sang chủ nghĩa tư bản, diễn ra từ thế kỷ 16 đến thế kỷ 18 ở châu Âu."
  },
  {
    question: "Đặc điểm nào sau đây KHÔNG phải là đặc điểm của quan hệ sản xuất tư bản chủ nghĩa?",
    answers: [
      { text: "Chủ sở hữu tư liệu sản xuất", isCorrect: false, explanation: "Sai - Đây là đặc điểm của quan hệ SXTBCN." },
      { text: "Công nhân làm thuê", isCorrect: false, explanation: "Sai - Đây là đặc điểm của quan hệ SXTBCN." },
      { text: "Bóc lột thông qua tiền lương", isCorrect: false, explanation: "Sai - Đây là đặc điểm của quan hệ SXTBCN." },
      { text: "Phân phối bình đẳng", isCorrect: true, explanation: "Đúng - Quan hệ SXTBCN dựa trên sự bóc lột, không bình đẳng." }
    ],
    historicalContext: "Sự hình thành quan hệ sản xuất tư bản chủ nghĩa đánh dấu sự ra đời của một phương thức sản xuất mới, tiến bộ hơn so với phương thức sản xuất phong kiến. Điều này tạo tiền đề cho cuộc Cách mạng công nghiệp sau này."
  },
  {
    question: "Yếu tố nào sau đây KHÔNG phải là ảnh hưởng trực tiếp của các cuộc phát kiến địa lý đến sự phát triển của chủ nghĩa tư bản?",
    answers: [
      { text: "Mở rộng thị trường", isCorrect: false, explanation: "Sai - Đây là ảnh hưởng trực tiếp." },
      { text: "Cung cấp nguồn nguyên liệu", isCorrect: false, explanation: "Sai - Đây là ảnh hưởng trực tiếp." },
      { text: "Tích lũy vốn ban đầu", isCorrect: false, explanation: "Sai - Đây là ảnh hưởng trực tiếp." },
      { text: "Cải cách tôn giáo", isCorrect: true, explanation: "Đúng - Cải cách tôn giáo không phải là hệ quả trực tiếp của phát kiến địa lý." }
    ],
    historicalContext: "Các cuộc phát kiến địa lý không chỉ mở rộng bản đồ thế giới mà còn tạo ra một cuộc cách mạng trong tư duy của người châu Âu. Họ bắt đầu nhìn nhận thế giới một cách khoa học hơn, góp phần thúc đẩy phong trào Phục hưng và cách mạng khoa học."
  }
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
