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
    question: "🏡 Em đồng tình với quan điểm nào dưới đây về truyền thống quê hương?",
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
        text: "C: Chỉ cần giữ gìn các di tích lịch sử là đủ để bảo tồn truyền thống quê hương.",
        isCorrect: false, 
        explanation: "...C: ❌ Sai! Bảo tồn truyền thống quê hương cần nhiều hơn việc chỉ giữ gìn di tích, bao gồm cả việc duy trì văn hóa, phong tục, tập quán."
      }
    ],
    historicalContext: "🌺 Truyền thống quê hương là những giá trị vô cùng quý báu mà cha ông ta đã dày công vun đắp. Dù xã hội có phát triển đến đâu, chúng ta vẫn cần trân trọng, gìn giữ và phát huy những nét đẹp truyền thống ấy!"
  },
  {
    question: "🎋 Em ủng hộ hành động nào dưới đây trong việc gìn giữ truyền thống quê hương?",
    icon: <Heart className="text-orange-500" />,
    answers: [
      { 
        text: "A: Lập nhóm tìm hiểu về truyền thống yêu nước, chống giặc ngoại xâm của thành phố nơi mình sinh sống.",
        isCorrect: true, 
        explanation: "...A: ✅ Đúng! Đây là việc làm tốt, thể hiện sự quan tâm tìm hiểu và tự hào về truyền thống quê hương."
      },
      { 
        text: "B: Chèo kéo khách mua đồ lưu niệm trong lễ hội đầu xuân.",
        isCorrect: false, 
        explanation: "...B: ❌ Sai! Hành vi này làm mất đi nét đẹp văn hóa của lễ hội truyền thống."
      },
      { 
        text: "C: Chỉ tham gia các hoạt động truyền thống khi được nhà trường yêu cầu.",
        isCorrect: false, 
        explanation: "...C: ❌ Sai! Việc gìn giữ truyền thống cần sự chủ động và tự nguyện, không chỉ khi được yêu cầu."
      }
    ],
    historicalContext: "🌿 Mỗi người trẻ chúng ta đều có thể góp phần gìn giữ và phát huy truyền thống quê hương bằng những việc làm thiết thực. Hãy luôn tự hào và trân trọng những giá trị truyền thống tốt đẹp nhé!"
  },
  {
    question: "❤️ Em đồng tình với ý kiến nào dưới đây về sự quan tâm, cảm thông và chia sẻ?",
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
        text: "C: Sự quan tâm, cảm thông và chia sẻ giúp mọi người cảm thấy vui vẻ, hạnh phúc và yêu thương nhau hơn.",
        isCorrect: true, 
        explanation: "...C: ✅ Đúng! Quan tâm, cảm thông và chia sẻ giúp tạo nên mối quan hệ tốt đẹp, làm cho cuộc sống ấm áp hơn."
      }
    ],
    historicalContext: "💝 Quan tâm, cảm thông và chia sẻ là những hành động đẹp thể hiện tình người. Đôi khi chỉ cần một lời hỏi thăm, một cái ôm, hay một nụ cười cũng đủ làm ấm lòng người khác rồi!"
  },
  {
    question: "🤝 Em thấy hành vi nào dưới đây thể hiện sự quan tâm, cảm thông đúng đắn?",
    icon: <Heart className="text-purple-500" />,
    answers: [
      { 
        text: "A: Ít khi gọi điện hỏi thăm ông bà vì cho rằng như thế là không cần thiết.",
        isCorrect: false, 
        explanation: "...A: ❌ Sai! Gọi điện hỏi thăm là cách thể hiện sự quan tâm, yêu thương đối với ông bà."
      },
      { 
        text: "B: Xin mẹ rau và gạo mang sang biếu bác hàng xóm có hoàn cảnh khó khăn.",
        isCorrect: true, 
        explanation: "...B: ✅ Đúng! Đây là hành động thể hiện sự quan tâm, chia sẻ với người gặp khó khăn."
      },
      { 
        text: "C: Kéo tay bạn không cho can ngăn khi thấy một bạn khác bị bắt nạt.",
        isCorrect: false, 
        explanation: "...C: ❌ Sai! Can ngăn hành vi bắt nạt là thể hiện sự quan tâm đúng đắn, không nên ngăn cản việc này."
      }
    ],
    historicalContext: "🌟 Trong cuộc sống, có rất nhiều cách để thể hiện sự quan tâm, cảm thông và chia sẻ. Đôi khi chỉ là những hành động nhỏ nhưng lại mang ý nghĩa lớn. Hãy luôn tinh tế và sẵn sàng giúp đỡ khi người khác cần!"
  },
  {
    question: "📚 Em đồng tình với ý kiến nào dưới đây về học tập tự giác, tích cực?",
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
      }
    ],
    historicalContext: "💡 Học tập tự giác, tích cực không chỉ giúp em đạt kết quả tốt trong học tập mà còn rèn luyện cho em nhiều kỹ năng quý báu. Đó là khả năng tự quản lý thời gian, tính kỷ luật, sự kiên trì và lòng đam mê học hỏi!"
  },
  {
    question: "👥 Em thấy hành động nào dưới đây thể hiện việc học tập tự giác, tích cực?",
    icon: <Users className="text-green-500" />,
    answers: [
      { 
        text: "A: Nhờ các bạn học giỏi trong lớp làm giúp bài tập rồi chép lại.",
        isCorrect: false, 
        explanation: "...A: ❌ Sai! Đây không phải là học tập tự giác, tích cực mà là hành vi gian lận."
      },
      { 
        text: "B: Thích đọc tác phẩm văn học, sưu tầm những câu chuyện, câu nói hay để vận dụng vào việc viết văn.",
        isCorrect: true, 
        explanation: "...B: ✅ Đúng! Đây là biểu hiện của việc chủ động tìm tòi, học hỏi để nâng cao kỹ năng của mình."
      },
      {
        text: "C: Làm bài tập môn Tiếng Anh trong giờ học các môn khác.",
        isCorrect: false,
        explanation: "...C: ❌ Sai! Đây là hành vi không tập trung vào môn học đang diễn ra, thể hiện sự thiếu tôn trọng và không tự giác."
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
            <p className="font-semibold text-xl mb-2">✨ <strong>Câu 1: Em hãy tìm hiểu về một truyền thống của quê hương và viết bài giới thiệu truyền thống đó cho mọi người.</strong></p>
            <p className="mt-2">
              Quê hương tôi có một truyền thống rất đặc biệt - đó là Lễ hội Cầu ngư. Đây là lễ hội truyền thống của ngư dân vùng biển, thường được tổ chức vào đầu năm mới với mong muốn cầu cho một năm mới bình an, đánh bắt được nhiều tôm cá.
              <br /><br />
              Lễ hội thường diễn ra trong 3 ngày, với nhiều nghi lễ và hoạt động văn hóa đặc sắc. Ngày đầu tiên, người dân tổ chức lễ cúng tại đình làng để cầu mong thần linh phù hộ. Ngày thứ hai là phần hội với các trò chơi dân gian như đua thuyền, kéo co, bắt vịt... Ngày cuối cùng, đoàn thuyền ngư dân sẽ ra khơi trong tiếng trống chiêng rộn ràng, mở đầu cho một mùa đánh bắt mới.
              <br /><br />
              Lễ hội Cầu ngư không chỉ thể hiện đức tin của ngư dân, mà còn là dịp để mọi người gắn kết, đoàn kết cùng nhau. Đây cũng là cơ hội để giới thiệu nét đẹp văn hóa địa phương với du khách. Qua đó, truyền thống tốt đẹp này được gìn giữ và lan tỏa đến thế hệ trẻ.
              <br /><br />
              Là người con của vùng biển, tôi rất tự hào về truyền thống Lễ hội Cầu ngư độc đáo này. Tôi mong muốn được góp phần nhỏ bé của mình để giữ gìn và phát huy nét đẹp văn hóa quê hương, để Lễ hội Cầu ngư mãi là niềm tự hào của người dân nơi đây.
            </p>
          </div>
          <div className="mb-8">
            <p className="font-semibold text-xl mb-2">💫 <strong>Câu 2: Sưu tầm và kể về một tấm gương biết quan tâm, cảm thông và chia sẻ với người khác mà em biết. Em học tập được điều gì từ tấm gương đó?</strong></p>
            <p className="mt-2">
              Tôi xin kể về tấm gương của chị Trần Thị Ngọc Trâm, một cô giáo trẻ ở vùng cao Sơn La. Chị Trâm đã tình nguyện lên vùng cao dạy học, nơi còn nhiều khó khăn, thiếu thốn.
              <br /><br />
              Không chỉ dạy chữ, chị Trâm còn quan tâm đến đời sống của học trò. Chị vận động quyên góp quần áo ấm, sách vở cho các em, tổ chức nấu cơm trưa miễn phí để các em có bữa ăn đầy đủ hơn. Mỗi khi có học sinh nghỉ học, chị lại tìm đến tận nhà để tìm hiểu lý do và động viên các em đến trường.
              <br /><br />
              Chị Trâm còn tổ chức các lớp học tình thương vào buổi tối và cuối tuần để giúp học sinh yếu kém theo kịp chương trình. Với những học sinh có hoàn cảnh đặc biệt khó khăn, chị còn vận động mạnh thường quân hỗ trợ học bổng để các em có thể tiếp tục đến trường.
              <br /><br />
              Tấm gương của chị Trâm đã dạy cho tôi bài học quý giá về lòng nhân ái và tinh thần cống hiến. Chị đã cho tôi thấy rằng, chỉ cần có tấm lòng và sự nỗ lực, mỗi người đều có thể góp phần làm cho cuộc sống tốt đẹp hơn. Tôi học được từ chị sự quan tâm, yêu thương học trò, sự kiên trì và lòng nhiệt huyết trong công việc.
              <br /><br />
              Tấm gương của chị Trâm truyền cảm hứng cho tôi luôn cố gắng học tập, rèn luyện để sau này có thể đóng góp cho xã hội. Tôi cũng học cách quan tâm, chia sẻ nhiều hơn với những người xung quanh, đặc biệt là những bạn có hoàn cảnh khó khăn. Tôi tin rằng, nếu mỗi người đều biết quan tâm, cảm thông và chia sẻ như chị Trâm, xã hội sẽ ngày càng tốt đẹp hơn.
            </p>
          </div>
          <div>
            <p className="font-semibold text-xl mb-2">🌟 <strong>Câu 3: Em hãy viết về một tấm gương học tập tự giác, tích cực mà em biết. Em học tập được điều gì từ tấm gương đó?</strong></p>
            <p className="mt-2">
              Tôi xin kể về tấm gương học tập tự giác, tích cực của bạn Nguyễn Văn An, một học sinh lớp 9 trường THCS Lê Quý Đôn.
              <br /><br />
              An là một học sinh có hoàn cảnh gia đình khó khăn. Bố mẹ An đều là công nhân, phải làm việc từ sáng sớm đến tối muộn. Tuy vậy, An luôn nỗ lực vươn lên trong học tập. Mỗi ngày, An dậy từ 5 giờ sáng để ôn bài và chuẩn bị đồ đạc cho ngày học mới. Sau giờ học ở trường, An thường ở lại thư viện để làm bài tập và nghiên cứu thêm.
              <br /><br />
              An luôn chủ động đặt câu hỏi khi chưa hiểu bài và tích cực tham gia các hoạt động nhóm. Bạn còn tự học thêm tiếng Anh qua các ứng dụng trên điện thoại và tham gia các câu lạc bộ học thuật của trường. Nhờ sự nỗ lực không ngừng, An đã đạt được nhiều thành tích xuất sắc trong học tập, trong đó có giải Nhất môn Toán cấp thành phố.
              <br /><br />
              Từ tấm gương của An, tôi học được rằng hoàn cảnh khó khăn không phải là rào cản cho việc học tập. Điều quan trọng là phải có ý chí vươn lên và tinh thần tự giác, tích cực. Tôi cũng học được cách quản lý thời gian hiệu quả, biết tận dụng mọi cơ hội để học hỏi và không ngừng hoàn thiện bản thân.
              <br /><br />
              Tấm gương của An đã truyền cảm hứng cho tôi cố gắng hơn trong học tập. Tôi đã bắt đầu lập kế hoạch học tập cụ thể cho mỗi ngày và tuân thủ nghiêm túc. Tôi cũng tích cực hơn trong việc đặt câu hỏi khi chưa hiểu bài và chủ động tìm kiếm thông tin bổ sung cho các môn học.
              <br /><br />
              Tôi tin rằng, nếu mỗi học sinh đều học tập tự giác, tích cực như An, chúng ta sẽ đạt được nhiều thành tích xuất sắc trong học tập và cuộc sống.
            </p>
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
