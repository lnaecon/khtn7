import React, { useState } from 'react';
import { 
  AlertCircle, 
  CheckCircle, 
  MapPin, 
  Ship, 
  Book, 
  Globe, 
  Coins, 
  Gift,
  Users, 
  Anchor,
  School,
  Building, 
  Landmark,
  Lightbulb,
  Home,
  Star,
  Calendar,
  Heart,
  Clock 
} from 'lucide-react';
import { Card, CardContent, CardHeader } from './components/ui/card';
import { Button } from './components/ui/button';
import './App.css';

const quizData = [
  {
      question: "🏡 Em tán thành hay không tán thành với những quan điểm dưới đây? Vì sao?",
      icon: <Landmark className="text-yellow-500" />,
      answers: [
        { 
          text: "A: Tự hào về truyền thống quê hương cũng chính là tự hào về nguồn gốc, dòng họ, tổ tiên của mình.",
          isCorrect: true, 
          explanation: "...A: ✅ Đúng! Truyền thống quê hương gắn liền với lịch sử, văn hóa của địa phương, là nơi sinh ra và nuôi dưỡng các thế hệ gia đình, dòng họ."
        },
        { 
          text: "B: Nghề thủ công truyền thống không còn là niềm tự hào của quê hương vì không phù hợp với cuộc sống hiện đại.",
          isCorrect: false, 
          explanation: "...B: ❌ Sai! Nghề thủ công truyền thống vẫn là nét đẹp văn hóa, là niềm tự hào của quê hương cần được gìn giữ và phát huy."
        },
        { 
          text: "C: Truyền dạy chữ Hán và những làn điệu dân ca địa phương là một phần của truyền thống văn hoá quê hương.",
          isCorrect: true, 
          explanation: "...C: ✅ Đúng! Chữ Hán và dân ca địa phương là một phần quan trọng trong di sản văn hóa truyền thống của quê hương."
        }
      ],
      historicalContext: "🌺 Truyền thống quê hương là những giá trị vô cùng quý báu mà cha ông ta đã dày công vun đắp. Dù xã hội có phát triển đến đâu, chúng ta vẫn cần trân trọng, gìn giữ và phát huy những nét đẹp truyền thống ấy!"
    },
    {
      question: "🎋 Em đồng tình hay không đồng tình với những hành vi của các bạn dưới đây? Vì sao?",
      icon: <Heart className="text-orange-500" />,
      answers: [
        { 
          text: "A: K cùng các bạn trong lớp lập nhóm tìm hiểu về truyền thống yêu nước, chống giặc ngoại xâm của thành phố nơi mình sinh sống.",
          isCorrect: true, 
          explanation: "...A: ✅ Đồng tình! Đây là việc làm tốt, thể hiện sự quan tâm tìm hiểu và tự hào về truyền thống quê hương."
        },
        { 
          text: "B: Trong lễ hội đầu xuân, M theo một số anh chị đi chèo kéo khách mua đồ lưu niệm.",
          isCorrect: false, 
          explanation: "...B: ❌ Không đồng tình! Hành vi này làm mất đi nét đẹp văn hóa của lễ hội truyền thống."
        },
        { 
          text: "C: A vận động các bạn trong lớp tham gia hội thi 'Tự hào truyền thống quê hương' do trường tổ chức.",
          isCorrect: true, 
          explanation: "...C: ✅ Đồng tình! Đây là hoạt động ý nghĩa giúp học sinh hiểu hơn và tự hào về truyền thống quê hương."
        }
      ],
      historicalContext: "🌿 Mỗi người trẻ chúng ta đều có thể góp phần gìn giữ và phát huy truyền thống quê hương bằng những việc làm thiết thực. Hãy luôn tự hào và trân trọng những giá trị truyền thống tốt đẹp nhé!"
    },
  {
      question: "❤️ Em tán thành hay không tán thành với ý kiến nào dưới đây? Vì sao?",
      icon: <Heart className="text-red-500" />,
      answers: [
        { 
          text: "A: Chỉ người nào gặp khó khăn mới cần tới sự quan tâm, cảm thông và chia sẻ.",
          isCorrect: false, 
          explanation: "...A: ❌ Sai! Mọi người đều cần được quan tâm, cảm thông và chia sẻ, không chỉ khi gặp khó khăn."
        },
        { 
          text: "B: Khi ai đó có lời đề nghị thì mình mới cần quan tâm, cảm thông và chia sẻ.",
          isCorrect: false, 
          explanation: "...B: ❌ Sai! Chúng ta nên chủ động quan tâm, cảm thông và chia sẻ với người khác, không chỉ khi họ đề nghị."
        },
        { 
          text: "C: Để thể hiện sự quan tâm, cảm thông và chia sẻ thì chỉ cần tặng quà là đủ.",
          isCorrect: false, 
          explanation: "...C: ❌ Sai! Quan tâm, cảm thông và chia sẻ thể hiện qua nhiều cách, không chỉ bằng vật chất mà còn bằng tinh thần."
        },
        { 
          text: "D: Sự quan tâm, cảm thông và chia sẻ giúp mọi người cảm thấy vui vẻ, hạnh phúc và yêu thương nhau hơn.",
          isCorrect: true, 
          explanation: "...D: ✅ Đúng! Quan tâm, cảm thông và chia sẻ giúp tạo nên mối quan hệ tốt đẹp, làm cho cuộc sống ấm áp hơn."
        }
      ],
      historicalContext: "💝 Quan tâm, cảm thông và chia sẻ là những hành động đẹp thể hiện tình người. Đôi khi chỉ cần một lời hỏi thăm, một cái ôm, hay một nụ cười cũng đủ làm ấm lòng người khác rồi!"
    },
    {
      question: "🤝 Em hãy nhận xét hành vi của các bạn dưới đây:",
      icon: <Heart className="text-purple-500" />,
      answers: [
        { 
          text: "A: Mặc dù rất yêu quý ông bà nhưng H ít khi gọi điện hỏi thăm vì cho rằng như thế là không cần thiết.",
          isCorrect: false, 
          explanation: "...A: ❌ Chưa đúng! Gọi điện hỏi thăm là cách thể hiện sự quan tâm, yêu thương đối với ông bà."
        },
        { 
          text: "B: Thấy hoàn cảnh bác hàng xóm khó khăn, M xin mẹ rau và gạo mang sang biếu bác.",
          isCorrect: true, 
          explanation: "...B: ✅ Đúng! Đây là hành động thể hiện sự quan tâm, chia sẻ với người gặp khó khăn."
        },
        { 
          text: "C: K mượn V đồ lặt vặt để giúp V bớt mặc cảm về hoàn cảnh khó khăn của bản thân.",
          isCorrect: true, 
          explanation: "...C: ✅ Đúng! K đã thể hiện sự tinh tế, cảm thông với hoàn cảnh của V và tìm cách giúp bạn cảm thấy thoải mái hơn."
        },
        { 
          text: "D: Trên đường đi học về, thấy một bạn bị bắt nạt, T định dừng lại can ngăn nhưng A kéo tay bảo: 'Thôi...'.",
          isCorrect: false, 
          explanation: "...D: ❌ Chưa đúng! T đã có ý định can ngăn hành vi bắt nạt, thể hiện sự quan tâm đúng đắn. A không nên ngăn cản T."
        }
      ],
      historicalContext: "🌟 Trong cuộc sống, có rất nhiều cách để thể hiện sự quan tâm, cảm thông và chia sẻ. Đôi khi chỉ là những hành động nhỏ nhưng lại mang ý nghĩa lớn. Hãy luôn tinh tế và sẵn sàng giúp đỡ khi người khác cần!"
    },
  {
    question: "📚 Em đồng tình hay không đồng tình với ý kiến nào dưới đây? Vì sao?",
    icon: <Book className="text-blue-500" />,
    answers: [
      { 
        text: "A: Luôn chủ động thực hiện nhiệm vụ học tập mà không cần ai nhắc nhở là biểu hiện của học tập tự giác, tích cực.",
        isCorrect: true, 
        explanation: "...A: ✅ Đúng! Đây là một trong những biểu hiện rõ nét của việc học tập tự giác, tích cực."
      },
      { 
        text: "B: Chỉ cần tự giác, tích cực học tập khi tới các kì kiểm tra.",
        isCorrect: false, 
        explanation: "...B: ❌ Sai! Học tập tự giác, tích cực cần được duy trì thường xuyên, không chỉ khi có kiểm tra."
      },
      { 
        text: "C: Chỉ cần xây dựng kế hoạch học tập còn việc thực hiện thì tuỳ thuộc vào hoàn cảnh.",
        isCorrect: false, 
        explanation: "...C: ❌ Sai! Việc thực hiện kế hoạch học tập là quan trọng, không nên phụ thuộc vào hoàn cảnh."
      },
      { 
        text: "D: Tự giác, tích cực học tập giúp em rèn luyện tính tự lập, tự chủ và tích luỹ kiến thức cho bản thân.",
        isCorrect: true, 
        explanation: "...D: ✅ Đúng! Đây là những lợi ích quan trọng của việc học tập tự giác, tích cực."
      }
    ],
    historicalContext: "💡 Học tập tự giác, tích cực không chỉ giúp em đạt kết quả tốt trong học tập mà còn rèn luyện cho em nhiều kỹ năng quý báu. Đó là khả năng tự quản lý thời gian, tính kỷ luật, sự kiên trì và lòng đam mê học hỏi!"
  },
  {
    question: "👥 Bạn nào dưới đây đã học tập tự giác, tích cực? Vì sao?",
    icon: <Users className="text-green-500" />,
    answers: [
      { 
        text: "A: Q thường nhờ các bạn học giỏi trong lớp làm giúp bài tập rồi chép lại.",
        isCorrect: false, 
        explanation: "...A: ❌ Sai! Q không tự mình làm bài tập, mà nhờ người khác làm hộ."
      },
      { 
        text: "B: A luôn thích đọc tác phẩm văn học, sưu tầm những câu chuyện, câu nói hay để vận dụng vào việc viết văn.",
        isCorrect: true, 
        explanation: "...B: ✅ Đúng! A chủ động tìm tòi, học hỏi để nâng cao kỹ năng của mình."
      },
      {
        text: "C: B thích môn Tiếng Anh nên thường xuyên mang sách Tiếng Anh ra làm bài tập trong các giờ học khác.",
        isCorrect: false,
        explanation: "...C: ❌ Sai! B không tập trung vào môn học đang diễn ra, và có quan điểm sai lệch về tầm quan trọng của các môn học."
      },
      {
        text: "D: N thường xuyên ngồi vào bàn học đúng giờ nhưng tay vẫn cầm điện thoại để nhắn tin.",
        isCorrect: false,
        explanation: "...D: ❌ Sai! N chưa thực sự tập trung vào việc học, và cần sự nhắc nhở của bố mẹ."
      },
      {
        text: "E: Thấy T ngủ gật trong giờ học, P nhắc bạn cần tập trung nghe cô giảng bài.",
        isCorrect: true,
        explanation: "...E: ✅ Đúng! P quan tâm đến việc học của bạn và nhắc nhở bạn tập trung."
      }
    ],
    historicalContext: "🌟 Học tập tự giác không chỉ là việc ngồi vào bàn học đúng giờ, mà còn là thái độ ham học hỏi, chủ động tìm tòi kiến thức mới. Hãy luôn giữ tinh thần học hỏi nhé!"
  },
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

      {isReviewOpen && (
        <div className="absolute top-16 left-0 right-0 mx-auto w-full max-w-3xl bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg z-10 overflow-y-auto max-h-[80vh]">
          <h2 className="text-2xl font-bold mb-4">Ôn Tập Kiến Thức</h2>

          {/* Bài 1: Truyền thống quê hương */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold">🏡 <strong>1. Tự Hào Về Truyền Thống Quê Hương</strong></h3>
            <p className="ml-4">
              Truyền thống quê hương là những giá trị văn hóa tốt đẹp được truyền từ đời này qua đời khác như: ẩm thực, lễ hội, nghệ thuật, trang phục, tinh thần yêu nước,...
            </p>
            <p className="ml-4 mt-2">
              Tự hào về truyền thống quê hương chính là tự hào về nguồn gốc của mình, là nền tảng để xây dựng giá trị cốt lõi và hình thành sự tự tin.
            </p>
            <p className="ml-4 font-semibold mt-2">Cách giữ gìn và phát huy truyền thống: 🌟</p>
            <ul className="list-disc list-inside ml-8">
              <li>🎭 Tham gia các hoạt động văn hóa truyền thống</li>
              <li>📚 Tìm hiểu lịch sử, văn hóa địa phương</li>
              <li>🙏 Kính trọng, biết ơn những người có công với quê hương</li>
              <li>🏛️ Góp phần bảo vệ di sản văn hóa, di tích lịch sử</li>
            </ul>
          </div>

          {/* Bài 2: Quan tâm, cảm thông và chia sẻ */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold">💝 <strong>2. Quan Tâm, Cảm Thông và Chia Sẻ</strong></h3>
            <p className="ml-4">
              Quan tâm, cảm thông và chia sẻ là những biểu hiện của lòng nhân ái, thể hiện qua:
            </p>
            <ul className="list-disc list-inside ml-8">
              <li>❤️ Chăm sóc bằng tình cảm chân thành</li>
              <li>🤝 Đặt mình vào vị trí của người khác để thấu hiểu</li>
              <li>🎁 San sẻ, giúp đỡ về vật chất và tinh thần</li>
            </ul>
            <p className="ml-4 font-semibold mt-2">Biểu hiện cụ thể: 👥</p>
            <ul className="list-disc list-inside ml-8">
              <li>👂 Lắng nghe, động viên, an ủi</li>
              <li>💫 Chia sẻ niềm vui, nỗi buồn</li>
              <li>🤲 Giúp đỡ người gặp khó khăn</li>
            </ul>
          </div>

          {/* Bài 3: Học tập tự giác, tích cực */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold">📚 <strong>3. Học Tập Tự Giác, Tích Cực</strong></h3>
            <p className="ml-4">
              Học tập tự giác, tích cực là chủ động, nỗ lực trong việc học mà không cần ai nhắc nhở.
            </p>
            <p className="ml-4 font-semibold mt-2">Biểu hiện của học tập tự giác: 🎯</p>
            <ul className="list-disc list-inside ml-8">
              <li>🎯 Có mục đích và động cơ học tập đúng đắn</li>
              <li>✍️ Chủ động thực hiện nhiệm vụ học tập</li>
              <li>🗣️ Tích cực tham gia xây dựng bài</li>
              <li>💪 Kiên trì vượt khó trong học tập</li>
              <li>📅 Xây dựng và thực hiện kế hoạch học tập phù hợp</li>
            </ul>
            <p className="ml-4 font-semibold mt-2">Ý nghĩa: ⭐</p>
            <ul className="list-disc list-inside ml-8">
              <li>🏆 Giúp đạt kết quả cao trong học tập</li>
              <li>🌱 Rèn luyện tính tự lập, ý chí kiên cường</li>
              <li>🌟 Tạo nền tảng vững chắc cho tương lai</li>
            </ul>
          </div>
        </div>
      )}

      {/* Phần Nội dung Tự luận */}
      {isEssayOpen && (
        <div className="absolute top-16 left-0 right-0 mx-auto w-full max-w-3xl bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg z-10 overflow-y-auto max-h-[80vh]">
          <h2 className="text-2xl font-bold mb-4">Tự Luận</h2>

          <div className="mb-8">
            <p className="font-semibold text-xl mb-2">✨ <strong>Câu 1: Truyền thống quê hương - Lễ hội Cầu ngư</strong></p>
            <p className="mt-2">
              Quê hương tôi có một truyền thống rất đặc biệt - đó là Lễ hội Cầu ngư 🎏
            </p>
            <ol className="list-decimal list-inside ml-6 mt-2">
              <li>
                <span className="font-semibold">Thời gian và ý nghĩa <Calendar className="inline-block" />:</span> Được tổ chức vào đầu năm mới, cầu mong một năm bình an và đánh bắt được nhiều tôm cá.
              </li>
              <li className="mt-2">
                <span className="font-semibold">Các hoạt động chính <Anchor className="inline-block" />:</span>
                <ul className="list-disc ml-8">
                  <li>Ngày 1: Lễ cúng tại đình làng</li>
                  <li>Ngày 2: Phần hội với trò chơi dân gian</li>
                  <li>Ngày 3: Đoàn thuyền ra khơi</li>
                </ul>
              </li>
              <li className="mt-2">
                <span className="font-semibold">Ý nghĩa văn hóa <Heart className="inline-block" />:</span> Thể hiện đức tin, tăng cường đoàn kết và giới thiệu văn hóa địa phương.
              </li>
            </ol>
          </div>

          <div className="mb-8">
            <p className="font-semibold text-xl mb-2">💫 <strong>Câu 2: Tấm gương về lòng nhân ái - Cô giáo Trần Thị Ngọc Trâm</strong></p>
            <ol className="list-decimal list-inside ml-6 mt-2">
              <li>
                <span className="font-semibold">Công việc và môi trường <School className="inline-block" />:</span> Cô giáo tình nguyện dạy học ở vùng cao Sơn La.
              </li>
              <li className="mt-2">
                <span className="font-semibold">Những việc làm đáng quý <Gift className="inline-block" />:</span>
                <ul className="list-disc ml-8">
                  <li>Quyên góp quần áo, sách vở</li>
                  <li>Tổ chức bữa ăn miễn phí</li>
                  <li>Mở lớp học tình thương</li>
                  <li>Vận động học bổng</li>
                </ul>
              </li>
              <li className="mt-2">
                <span className="font-semibold">Bài học rút ra <Lightbulb className="inline-block" />:</span> Về lòng nhân ái, tinh thần cống hiến và sự quan tâm đến người khác.
              </li>
            </ol>
          </div>

          <div>
            <p className="font-semibold text-xl mb-2">🌟 <strong>Câu 3: Tấm gương học tập - Nguyễn Văn An</strong></p>
            <ol className="list-decimal list-inside ml-6 mt-2">
              <li>
                <span className="font-semibold">Hoàn cảnh <Home className="inline-block" />:</span> Gia đình khó khăn, bố mẹ là công nhân.
              </li>
              <li className="mt-2">
                <span className="font-semibold">Nỗ lực học tập <Book className="inline-block" />:</span>
                <ul className="list-disc ml-8">
                  <li>Dậy sớm ôn bài</li>
                  <li>Tự học thêm tiếng Anh</li>
                  <li>Tham gia câu lạc bộ học thuật</li>
                  <li>Đạt giải Nhất môn Toán cấp thành phố</li>
                </ul>
              </li>
              <li className="mt-2">
                <span className="font-semibold">Bài học kinh nghiệm <Star className="inline-block" />:</span> Ý chí vươn lên, tinh thần tự giác và quản lý thời gian hiệu quả.
              </li>
            </ol>
          </div>

        </div>
      )}

      <Card className="w-full max-w-3xl bg-white/80 backdrop-blur-sm shadow-xl z-0">
        <CardHeader className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Giáo dục Công dân - 7: Ôn Tập Kiến Thức</h1>
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
