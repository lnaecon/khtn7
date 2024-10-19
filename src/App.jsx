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
  CalendarDays,
  Clock 
} from 'lucide-react';
import { Card, CardContent, CardHeader } from './components/ui/card';
import { Button } from './components/ui/button';
import './App.css';

const quizData = [
  {
    question: "🎂 EU được thành lập chính thức vào năm nào?",
    icon: <CalendarDays className="text-blue-500" />, // Use CalendarDays instead of Calendar
    answers: [
      { text: "1991", isCorrect: false, explanation: "❌ EU chưa \"chào đời\" năm này." },
      { text: "1992", isCorrect: false, explanation: "❌ Gần lắm rồi, nhưng chưa đúng!" },
      { text: "1993", isCorrect: true, explanation: "✅ Bingo! EU chính thức ra mắt ngày 1/11/1993." },
      { text: "1994", isCorrect: false, explanation: "❌ Muộn mất rồi, EU đã \"lớn\" hơn 1 tuổi rồi." }
    ],
    historicalContext: "👶 Tiền thân của EU là \"em bé\" Cộng đồng Than và Thép châu Âu, sinh năm 1951 với 6 \"ông bố bà mẹ\" sáng lập!"
  },
  {
    question: "🌟 Năm 2020, EU có bao nhiêu quốc gia thành viên?",
    icon: <Globe className="text-green-500" />, // 'Globe' is already imported, no need to import again
    answers: [
      { text: "25", isCorrect: false, explanation: "❌ Thiếu mất 2 \"ngôi sao\" rồi!" },
      { text: "26", isCorrect: false, explanation: "❌ Gần đúng, nhưng còn thiếu 1 nước." },
      { text: "27", isCorrect: true, explanation: "✅ Chính xác! EU 2020 là một gia đình 27 thành viên." },
      { text: "28", isCorrect: false, explanation: "❌ Hơi dư 1 \"ngôi sao\" sau khi UK \"rời bữa tiệc\" (Brexit)." }
    ],
    historicalContext: "🇭🇷 Croatia là \"em út\" của EU, gia nhập \"gia đình\" năm 2013 với tư cách thành viên thứ 28!"
  },
  {
    question: "💰 GDP của EU năm 2020 là bao nhiêu?",
    icon: <Coins className="text-yellow-500" />, // Use the Coins icon from lucide-react
    answers: [
      { text: "14.723 tỷ USD", isCorrect: false, explanation: "❌ Số này thuộc về \"anh hàng xóm\" Trung Quốc năm 2020." },
      { text: "15.276 tỷ USD", isCorrect: true, explanation: "✅ Chính xác! Đây là \"kho báu\" của EU năm 2020." },
      { text: "20.937 tỷ USD", isCorrect: false, explanation: "❌ Wow, số này của \"đại gia\" Hoa Kỳ đấy!" },
      { text: "4.975 tỷ USD", isCorrect: false, explanation: "❌ Hơi ít, đây là GDP của Nhật Bản năm 2020." }
    ],
    historicalContext: "🇩🇪 Đức là \"ông trùm\" kinh tế EU, đóng góp 1/4 tổng GDP của cả nhóm!"
  }
];

const QuizDashboard = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isReviewOpen, setIsReviewOpen] = useState(false);
  const [isEssayOpen, setIsEssayOpen] = useState(false);

  const handleAnswerClick = (index) => {
    setSelectedAnswer(index);
    setShowExplanation(true);
  };

  const handleNextQuestion = () => {
    setCurrentQuestion((prev) => (prev + 1) % quizData.length);
    setSelectedAnswer(null);
    setShowExplanation(false);
  };

  const toggleReview = () => {
    setIsReviewOpen((prev) => !prev);
  };

  const toggleEssay = () => {
    setIsEssayOpen((prev) => !prev);
  };

  const currentQuizData = quizData[currentQuestion];

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-100 to-stone-300 flex items-center justify-center p-4 relative">

      {/* Nút Tự luận - Góc Trái */}
      <Button
        className="absolute top-4 left-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        onClick={toggleEssay}
      >
        {isEssayOpen ? 'Đóng lại' : 'Tự luận'}
      </Button>

      {/* Nút Ôn tập kiến thức - Góc Phải */}
      <Button
        className="absolute top-4 right-4 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
        onClick={toggleReview}
      >
        {isReviewOpen ? 'Đóng lại' : 'Ôn tập kiến thức'}
      </Button>

      {/* Phần Nội dung Ôn tập kiến thức */}
      {isReviewOpen && (
        <div className="absolute top-16 left-0 right-0 mx-auto w-full max-w-3xl bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg z-10 overflow-y-auto max-h-[80vh]">
          <h2 className="text-2xl font-bold mb-4">Ôn Tập Kiến Thức</h2>

          <div className="mb-4">
            <h3 className="text-xl font-semibold">🌍 <strong>1. Các cuộc phát kiến địa lí lớn</strong></h3>
            <p className="ml-4">
              Bồ Đào Nha và Tây Ban Nha là những nước tiên phong trong thám hiểm đường biển.
            </p>
            <p className="ml-4 font-semibold">Các cuộc phát kiến chính:</p>
            <ul className="list-disc list-inside ml-8">
              <li>1487: B.Đi-a-xơ đến mũi Hảo Vọng (cực Nam châu Phi) 🧭</li>
              <li>1492: C.Cô-lôm-bô phát hiện châu Mỹ 🌎</li>
              <li>1497-1498: V.Ga-ma tìm ra đường biển đến Ấn Độ 🚢</li>
              <li>1519-1522: Ph. Ma-ghien-lăng hoàn thành chuyến đi vòng quanh thế giới 🌐</li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-semibold">📈 <strong>2. Hệ quả của các cuộc phát kiến địa lí</strong></h3>
            <ul className="list-disc list-inside ml-8">
              <li>Mở ra con đường mới, tìm ra vùng đất mới, thị trường mới 🌍</li>
              <li>Thúc đẩy hàng hải quốc tế phát triển ⛴️</li>
              <li>Châu Âu có được nhiều vàng bạc và kiến thức mới 💰</li>
              <li>Dẫn đến nạn buôn bán nô lệ da đen ⛓️</li>
              <li>Bắt đầu quá trình xâm chiếm, cướp bóc thuộc địa 🏴‍☠️</li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-semibold">🏛️ <strong>3. Sự nảy sinh chủ nghĩa tư bản ở Tây Âu</strong></h3>
            <ul className="list-disc list-inside ml-8">
              <li>Quý tộc và thương nhân châu Âu cướp bóc tài nguyên từ thuộc địa 🌍</li>
              <li>Hiện tượng "rào đất cướp ruộng" xảy ra, đặc biệt ở Anh 🏞️</li>
              <li>Tư sản tích lũy vốn ban đầu và có nguồn lao động làm thuê 🏗️</li>
              <li>Xuất hiện các công trường thủ công, công ty thương mại lớn 🏢</li>
              <li>Hình thành quan hệ chủ - thợ trong sản xuất ⚙️</li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-semibold">⚔️ <strong>4. Biến đổi trong xã hội Tây Âu</strong></h3>
            <ul className="list-disc list-inside ml-8">
              <li>Hình thành hai giai cấp chính:</li>
              <ul className="list-disc list-inside ml-8">
                <li><span className="font-semibold">Giai cấp tư sản:</span> chủ công trường, nhà buôn lớn, có thế lực kinh tế 💼</li>
                <li><span className="font-semibold">Giai cấp vô sản:</span> lao động làm thuê cho tư bản 🛠️</li>
              </ul>
              <li>Tư sản có địa vị kinh tế cao nhưng chưa có quyền lực chính trị 👑</li>
              <li>Vô sản ban đầu chỉ là lực lượng ủng hộ tư sản chống phong kiến 🏰</li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-semibold">💰 <strong>5. Quá trình tích lũy vốn ban đầu của giai cấp tư sản</strong></h3>
            <ul className="list-disc list-inside ml-8">
              <li>Cướp bóc tài nguyên, của cải từ các thuộc địa ở châu Á, châu Phi, châu Mỹ 🌍</li>
              <li>"Rào đất cướp ruộng" - tước đoạt ruộng đất của nông dân 🏞️</li>
              <li>Buôn bán nô lệ da đen ⛓️</li>
              <li>Mở rộng kinh doanh, lập công trường thủ công và công ty thương mại 🏗️</li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-semibold">⚙️ <strong>6. Sự hình thành quan hệ sản xuất tư bản chủ nghĩa</strong></h3>
            <ul className="list-disc list-inside ml-8">
              <li>Xuất hiện hình thức kinh doanh tư bản chủ nghĩa 🏢</li>
              <li>Quan hệ chủ - thợ trong các công trường thủ công 🛠️</li>
              <li>Chủ sở hữu tư liệu sản xuất và công nhân làm thuê 💼</li>
              <li>Bóc lột thông qua tiền lương 💵</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold">🌍 <strong>7. Ảnh hưởng của các cuộc phát kiến địa lý đến sự phát triển của chủ nghĩa tư bản</strong></h3>
            <ul className="list-disc list-inside ml-8">
              <li>Mở rộng thị trường, thúc đẩy thương mại quốc tế 🌐</li>
              <li>Cung cấp nguồn nguyên liệu và lao động giá rẻ từ thuộc địa 🌾</li>
              <li>Tạo điều kiện tích lũy vốn ban đầu cho giai cấp tư sản 💰</li>
              <li>Thúc đẩy sự phát triển của khoa học kỹ thuật 🛠️</li>
            </ul>
          </div>
        </div>
      )}


      {/* Phần Nội dung Tự luận */}
      {isEssayOpen && (
        <div className="absolute top-16 left-0 right-0 mx-auto w-full max-w-3xl bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg z-10 overflow-y-auto max-h-[80vh]">
          <h2 className="text-2xl font-bold mb-4">Tự Luận</h2>

          <p className="font-semibold text-xl mb-2">✨ <strong>Câu 1: Phân tích tác động của các cuộc phát kiến địa lí (cuối thế kỉ XV – đầu thế kỉ XVI)</strong></p>
          <p className="mt-2">
            Các cuộc phát kiến địa lí cuối thế kỉ XV - đầu thế kỉ XVI có nhiều tác động quan trọng:
          </p>
          <ol className="list-decimal list-inside ml-6 mt-2">
            <li>
              <span className="font-semibold">Thứ nhất, mở ra con đường mới và tìm ra vùng đất mới <MapPin className="inline-block" />:</span> Ví dụ như C.Cô-lôm-bô đã tìm ra châu Mỹ năm 1492. Điều này giúp người châu Âu biết thêm về thế giới và tìm ra thị trường mới để buôn bán.
            </li>
            <li className="mt-2">
              <span className="font-semibold">Thứ hai, đem về cho châu Âu rất nhiều vàng bạc và kiến thức mới <Coins className="inline-block" />:</span> Tuy nhiên, nó cũng dẫn đến việc các nước châu Âu bắt đầu chiếm đóng và bóc lột thuộc địa ở những vùng đất mới.
            </li>
            <li className="mt-2">
              <span className="font-semibold">Thứ ba, phát sinh nạn buôn bán nô lệ da đen <Users className="inline-block" />:</span> Người châu Âu bắt người châu Phi làm nô lệ và đưa họ sang châu Mỹ để làm việc. Đây là một hậu quả rất tồi tệ.
            </li>
          </ol>
          <p className="mt-4">
            Tác động quan trọng nhất là việc mở rộng hiểu biết về thế giới 🌍, vì nó thúc đẩy sự phát triển của khoa học và thương mại quốc tế.
          </p>

          <p className="font-semibold text-xl mt-6">📖 <strong>Câu 2: Trình bày sự nảy sinh của chủ nghĩa tư bản và những biến đổi chính trong xã hội Tây Âu sau các cuộc phát kiến địa lí</strong></p>
          <p className="mt-2">
            Sau các cuộc phát kiến địa lí, chủ nghĩa tư bản bắt đầu nảy sinh ở Tây Âu:
          </p>
          <ol className="list-decimal list-inside ml-6 mt-2">
            <li>
              <span className="font-semibold">Đầu tiên, giới quý tộc và thương nhân châu Âu cướp bóc tài nguyên từ các thuộc địa <Globe className="inline-block" />:</span> Ở Anh, họ còn "rào đất cướp ruộng" của nông dân. Nhờ đó, họ tích lũy được nhiều vốn.
            </li>
            <li className="mt-2">
              <span className="font-semibold">Tiếp theo, họ dùng số vốn này để mở rộng kinh doanh <Building className="inline-block" />:</span> Lập các công trường thủ công và công ty thương mại lớn. Quan hệ giữa chủ và thợ - tức là quan hệ tư bản chủ nghĩa - dần hình thành.
            </li>
          </ol>
          <p className="mt-4">
            Xã hội Tây Âu cũng có những thay đổi lớn. Hai giai cấp mới xuất hiện:
          </p>
          <ul className="list-disc list-inside ml-6 mt-2">
            <li><span className="font-semibold">Giai cấp tư sản <Coins className="inline-block" />:</span> là những chủ công trường, chủ buôn giàu có. Họ có tiền nhưng chưa có quyền lực chính trị.</li>
            <li className="mt-2"><span className="font-semibold">Giai cấp vô sản <Users className="inline-block" />:</span> là những người lao động làm thuê. Ban đầu họ ủng hộ tư sản để chống lại chế độ phong kiến.</li>
          </ul>
          <p className="mt-4">
            Sự thay đổi quan trọng nhất là việc hình thành quan hệ sản xuất mới - quan hệ tư bản chủ nghĩa. Nó dần thay thế quan hệ phong kiến cũ và tạo nền tảng cho xã hội hiện đại sau này.
          </p>
        </div>
      )}

      <Card className="w-full max-w-3xl bg-white/80 backdrop-blur-sm shadow-xl z-0">
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
