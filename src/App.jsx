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
  Droplet,
  Ruler,
  Leaf,
  Mountain,
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
  },
  {
    question: "🌍 Châu Á có diện tích khoảng bao nhiêu?",
    icon: <Globe className="text-green-500" />,
    answers: [
      { text: "30,3 triệu km²", isCorrect: false, explanation: "❌ Hơi \"gầy\" so với thực tế rồi!" },
      { text: "44,4 triệu km²", isCorrect: true, explanation: "✅ Bingo! Châu Á \"to đùng\" đúng 44,4 triệu km² (kể cả các đảo)." },
      { text: "42,5 triệu km²", isCorrect: false, explanation: "❌ Số này thuộc về \"anh em\" châu Âu đấy." },
      { text: "17,8 triệu km²", isCorrect: false, explanation: "❌ Đây là diện tích của \"ông lớn\" Nga, không phải cả châu Á." }
    ],
    historicalContext: "🌎 Châu Á \"chiếm sóng\" 30% diện tích đất liền trên Trái Đất. Quả là một \"ngôi sao\" sáng giá!"
  },
  {
    question: "🌊 Châu Á tiếp giáp với bao nhiêu đại dương?",
    icon: <Droplet className="text-blue-600" />,
    answers: [
      { text: "2", isCorrect: false, explanation: "❌ Thiếu mất 1 \"người bạn\" đại dương rồi!" },
      { text: "3", isCorrect: true, explanation: "✅ Chính xác! Châu Á có 3 \"người bạn\" đại dương: Thái Bình Dương, Ấn Độ Dương và Bắc Băng Dương." },
      { text: "4", isCorrect: false, explanation: "❌ Hơi nhiều, châu Á chỉ có 3 \"người bạn\" đại dương thôi." },
      { text: "5", isCorrect: false, explanation: "❌ Wow, quá nhiều rồi! Châu Á chỉ có 3 \"người bạn\" đại dương thôi." }
    ],
    historicalContext: "🏆 Châu Á là \"siêu sao\" duy nhất tiếp giáp với cả 3 đại dương lớn của Trái Đất!"
  },
  {
    question: "📏 Chiều dài lớn nhất của châu Á theo hướng Đông-Tây là bao nhiêu?",
    icon: <Ruler className="text-yellow-600" />,
    answers: [
      { text: "7.500 km", isCorrect: false, explanation: "❌ Hơi \"ngắn\" so với thực tế rồi!" },
      { text: "8.500 km", isCorrect: false, explanation: "❌ Gần đúng, nhưng đây là chiều dài Bắc-Nam." },
      { text: "9.200 km", isCorrect: true, explanation: "✅ Chính xác! Châu Á \"dài ngoằng\" 9.200 km từ Tây sang Đông." },
      { text: "10.000 km", isCorrect: false, explanation: "❌ Hơi \"dài\" so với thực tế rồi!" }
    ],
    historicalContext: "✈️ 9.200 km này tương đương với chuyến bay từ London (Anh) đến Tokyo (Nhật Bản). Một chuyến du lịch xuyên lục địa tuyệt vời!"
  },
  {
    question: "🗻 Khu vực nào của châu Á có địa hình núi cao, đồ sộ và hiểm trở nhất thế giới?",
    icon: <Mountain className="text-gray-500" />,
    answers: [
      { text: "Phía bắc", isCorrect: false, explanation: "❌ Phía bắc là vùng đất phẳng lì, không phải \"nóc nhà thế giới\"." },
      { text: "Phía đông", isCorrect: false, explanation: "❌ Phía đông là \"bậc thang khổng lồ\", không phải nơi cao nhất." },
      { text: "Trung tâm", isCorrect: true, explanation: "✅ Bingo! Trung tâm châu Á là \"nóc nhà thế giới\" với Himalaya hùng vĩ." },
      { text: "Phía nam và tây nam", isCorrect: false, explanation: "❌ Phía nam và tây nam đa dạng, nhưng không phải nơi cao nhất." }
    ],
    historicalContext: "🏔️ Đỉnh Everest ở Himalaya là \"ông hoàng\" của các ngọn núi, cao 8.848m - tương đương với 29 tòa nhà Empire State chồng lên nhau!"
  },
  {
    question: "🌋 Đặc điểm nào sau đây KHÔNG phải là đặc điểm địa hình của châu Á?",
    icon: <Mountain className="text-orange-600" />,
    answers: [
      { text: "Đa dạng", isCorrect: false, explanation: "❌ Sai lầm! Châu Á đa dạng như một bảo tàng địa chất sống." },
      { text: "Bề mặt bị chia cắt mạnh", isCorrect: false, explanation: "❌ Không đúng! Châu Á bị chia cắt như một bức tranh ghép khổng lồ." },
      { text: "Chủ yếu là đồng bằng", isCorrect: true, explanation: "✅ Chính xác! Châu Á không chỉ có đồng bằng, mà còn có cả \"rừng\" địa hình khác." },
      { text: "Có nhiều núi và sơn nguyên cao đồ sộ", isCorrect: false, explanation: "❌ Sai rồi! Châu Á có nhiều núi cao đồ sộ, đúng là \"nóc nhà thế giới\"." }
    ],
    historicalContext: "🌾 Mặc dù không chỉ có đồng bằng, châu Á vẫn có những \"chảo lúa\" khổng lồ như đồng bằng Bắc Trung Quốc - rộng bằng 3 lần diện tích Việt Nam!"
  },
  {
    question: "🌿 Ý nghĩa nào sau đây KHÔNG phải của đặc điểm địa hình châu Á đối với việc sử dụng và bảo vệ tự nhiên?",
    icon: <Leaf className="text-green-400" />,
    answers: [
      { text: "Gây khó khăn cho giao thông ở vùng núi cao", isCorrect: false, explanation: "❌ Sai rồi! Núi cao đúng là thách thức cho giao thông." },
      { text: "Đòi hỏi chú ý chống xói mòn khi khai thác, sử dụng", isCorrect: false, explanation: "❌ Không đúng! Địa hình chia cắt đúng là cần chú ý chống xói mòn." },
      { text: "Thuận lợi cho sản xuất và định cư ở cao nguyên, đồng bằng", isCorrect: false, explanation: "❌ Sai lầm! Cao nguyên, đồng bằng đúng là thiên đường cho sản xuất và định cư." },
      { text: "Tạo điều kiện phát triển nông nghiệp ở mọi nơi", isCorrect: true, explanation: "✅ Chính xác! Địa hình đa dạng không cho phép phát triển nông nghiệp ở mọi nơi, nhất là ở vùng núi cao hiểm trở." }
    ],
    historicalContext: "🍚 Dù có nhiều \"thách thức địa hình\", châu Á vẫn là \"ông vua\" sản xuất gạo, chiếm 90% sản lượng toàn cầu. Quả là một kỳ tích!"
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
            <h3 className="text-xl font-semibold">🌍 <strong>A. Liên minh Châu Âu (EU) là một trong bốn trung tâm kinh tế lớn trên thế giới</strong></h3>
            <p className="ml-4">EU được thành lập chính thức vào 1/11/1993.</p>
            <ul className="list-disc list-inside ml-8">
              <li>Năm 2020, EU có 27 quốc gia thành viên với khoảng 447 triệu dân 👥</li>
              <li>Trụ sở đặt tại Brussels, Bỉ 🏙️</li>
              <li>Có thị trường chung và đồng tiền chung (Euro) 💼</li>
              <li>Là nhà trao đổi hàng hóa và dịch vụ lớn nhất thế giới 🌐 (31% trị giá xuất khẩu toàn cầu năm 2020)</li>
              <li>Là đối tác thương mại hàng đầu của 80 quốc gia 🤝</li>
              <li>Là trung tâm tài chính lớn với các ngân hàng có uy tín toàn cầu 💰</li>
              <li>GDP năm 2020: 15.276 tỷ USD 💶</li>
              <li>GDP bình quân đầu người năm 2020: 34.115 USD/năm 💸</li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-semibold">Thông tin thú vị</h3>
            <ul className="list-disc list-inside ml-8">
              <li>🎓 <strong>Erasmus+:</strong> Chương trình "du học" siêu cool cho teen EU! Học ở nước ngoài, kết bạn quốc tế, trải nghiệm văn hóa mới - tất cả miễn phí! 🌈✈️</li>
              <li>🌱 <strong>EU - Siêu anh hùng bảo vệ Trái Đất!</strong> Họ đang dẫn đầu cuộc chiến chống biến đổi khí hậu với mục tiêu "Net Zero" vào 2050. Thật "xanh sạch đẹp"! 🦸‍♂️🌍</li>
              <li>🤖 <strong>EU đang đầu tư mạnh vào AI và công nghệ tương lai.</strong> Imagine: robot phục vụ trong nhà hàng, xe tự lái trên đường phố - tương lai đã ở đây rồi! 🚗💻</li>
              <li>🍕 <strong>Ẩm thực EU - thiên đường cho foodies!</strong> Từ pizza Ý, tapas Tây Ban Nha đến bánh mì Pháp. Một chuyến food tour qua 27 nước = 27 hương vị độc đáo! 😋🍽️</li>
            </ul>
          </div>

          {/* Phần mới bổ sung */}
          <div className="mb-4">
            <h3 className="text-xl font-semibold">🌏 <strong>B. Vị trí địa lý, hình dạng và kích thước lãnh thổ của Châu Á</strong></h3>
            <p className="ml-4">Châu Á là châu lục rộng lớn nhất thế giới</p>
            <ul className="list-disc list-inside ml-8">
              <li>📏 Diện tích khoảng 44,4 triệu km² (bao gồm cả các đảo)</li>
              <li>🤝 Tiếp giáp với 2 châu lục (Châu Âu và Châu Phi) và 3 đại dương (Thái Bình Dương, Ấn Độ Dương, Bắc Băng Dương)</li>
              <li>🧩 Hình dạng: khối rõ rệt</li>
              <li>📐 Kích thước:
                <ul className="list-disc list-inside ml-8">
                  <li>Bắc-Nam: từ sát Xích đạo lên quá vòng cực Bắc, khoảng 8.500 km</li>
                  <li>Đông-Tây: nơi rộng nhất từ ven Địa Trung Hải tới ven Thái Bình Dương, khoảng 9.200 km</li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-semibold">Thông tin thú vị</h3>
            <ul className="list-disc list-inside ml-8">
              <li>🧊 Mũi Chelyuskin (Nga) - "Ông vua phương Bắc" của châu Á! Nằm ở vĩ độ 77°43' Bắc, nó là điểm cực Bắc trên đất liền của châu lục. Bạn có thể tưởng tượng một nơi lạnh đến mức nào không? 🥶❄️</li>
              <li>🏝️ Đảo Rondo (Indonesia) - "Nàng thơ phương Nam" của châu Á! Nằm ở vĩ độ 11°00'46" Nam, đây là điểm cực Nam của châu lục. Một thiên đường nhiệt đới giữa lòng đại dương! 🌴🥥</li>
              <li>🌊 Châu Á có đường bờ biển dài nhất thế giới - 62.800 km! Nếu bạn đi dọc bờ biển này mỗi ngày 10km, bạn sẽ mất gần 17 năm để đi hết! Một chuyến phiêu lưu tuyệt vời, phải không? 🏄‍♀️🚶‍♂️</li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-semibold">🏔️ <strong>C. Đặc điểm địa hình của Châu Á và ý nghĩa đối với việc sử dụng và bảo vệ tự nhiên</strong></h3>
            <ul className="list-disc list-inside ml-8">
              <li>Đa dạng như một bảo tàng địa chất sống: núi cao, sơn nguyên đồ sộ, cao nguyên và đồng bằng rộng lớn</li>
              <li>Bề mặt địa hình bị chia cắt mạnh như một bức tranh ghép khổng lồ</li>
            </ul>

            <p className="ml-4">🗺️ Chia thành các khu vực:</p>
            <ul className="list-disc list-inside ml-8">
              <li>Trung tâm: "Nóc nhà thế giới" với các dãy núi cao nhất hành tinh (Thiên Sơn, Côn Luân, Himalaya)</li>
              <li>Phía bắc: Vùng đất phẳng lì với đồng bằng và cao nguyên thấp</li>
              <li>Phía đông: "Bậc thang khổng lồ" thấp dần về phía biển, gồm núi, cao nguyên và đồng bằng ven biển</li>
              <li>Phía nam và tây nam: Bức tranh đa sắc với dãy núi trẻ, sơn nguyên và đồng bằng xen kẽ</li>
            </ul>

            <p className="ml-4">🌿 Ý nghĩa đối với việc sử dụng và bảo vệ tự nhiên:</p>
            <ul className="list-disc list-inside ml-8">
              <li>Núi cao = Thử thách cho giao thông, sản xuất và cuộc sống</li>
              <li>Địa hình chia cắt = Cảnh báo đỏ cho xói mòn khi khai thác</li>
              <li>Cao nguyên, đồng bằng rộng lớn = Thiên đường cho sản xuất và định cư</li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-semibold">Thông tin thú vị</h3>
            <ul className="list-disc list-inside ml-8">
              <li>🏆 Châu Á - "Vua của các đỉnh cao"! 8/14 ngọn núi trên 8000m của thế giới đều nằm ở dãy Himalaya. Bạn có muốn thử sức chinh phục không? 🧗‍♂️🏔️</li>
              <li>💧 Hồ Baikal (Nga) - "Giếng nước ngọt" của hành tinh! Sâu nhất, chứa nhiều nước nhất thế giới. Bạn có thể tưởng tượng một hồ chứa 20% lượng nước ngọt của Trái Đất không? 🌊🌍</li>
              <li>🏜️ Sa mạc Gobi - "Quái vật cát" của châu Á! Trải dài qua Mông Cổ và Trung Quốc, lớn thứ 5 thế giới. Một chuyến phiêu lưu qua sa mạc, bạn dám thử không? 🐫🌵</li>
            </ul>
          </div>
        </div>
      )}

      {/* Phần Nội dung Tự luận */}
      {isEssayOpen && (
        <div className="absolute top-16 left-0 right-0 mx-auto w-full max-w-3xl bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg z-10 overflow-y-auto max-h-[80vh]">
          <h2 className="text-2xl font-bold mb-4">Tự Luận</h2>

          {/* Câu hỏi về GDP và GDP bình quân */}
          <h3 className="font-semibold text-xl mb-4">📊 <strong>Câu hỏi:</strong> So sánh GDP và GDP bình quân đầu người của EU với các trung tâm kinh tế lớn khác trên thế giới năm 2020. Từ đó rút ra nhận xét về vị thế kinh tế của EU.</h3>

          <h4 className="font-semibold text-xl mb-2 mt-6">💡 <strong>Trả lời:</strong></h4>
          <p className="mt-2">So sánh GDP (tỷ USD):</p>
          <ol className="list-decimal list-inside ml-6 mt-2">
            <li>🥇 <span className="font-semibold">Hoa Kỳ:</span> 20.937</li>
            <li>🥈 <span className="font-semibold">EU:</span> 15.276</li>
            <li>🥉 <span className="font-semibold">Trung Quốc:</span> 14.723</li>
            <li>🏅 <span className="font-semibold">Nhật Bản:</span> 4.975</li>
          </ol>

          <p className="mt-4">So sánh GDP bình quân đầu người (USD/năm):</p>
          <ol className="list-decimal list-inside ml-6 mt-2">
            <li>🥇 <span className="font-semibold">Hoa Kỳ:</span> 63.544</li>
            <li>🥈 <span className="font-semibold">Nhật Bản:</span> 39.539</li>
            <li>🥉 <span className="font-semibold">EU:</span> 34.115</li>
            <li>🏅 <span className="font-semibold">Trung Quốc:</span> 10.500</li>
          </ol>

          <h4 className="mt-6 font-semibold">🌟 <strong>Nhận xét:</strong></h4>
          <ul className="list-disc list-inside ml-6 mt-2">
            <li>🏆 EU là "cầu thủ" kinh tế hạng 3 thế giới về tổng GDP, sau Hoa Kỳ và Trung Quốc.</li>
            <li>💰 GDP bình quân đầu người của EU ở mức "trung bình khá": cao hơn Trung Quốc nhưng thấp hơn Nhật Bản và Hoa Kỳ.</li>
            <li>🌍 EU có vị thế kinh tế quan trọng, là 1 trong 4 "siêu anh hùng" kinh tế toàn cầu cùng Hoa Kỳ, Trung Quốc và Nhật Bản.</li>
          </ul>

          {/* Câu hỏi về vị trí địa lý của châu Á */}
          <h3 className="font-semibold text-xl mb-4 mt-8">📝 <strong>Câu hỏi:</strong> Trình bày vị trí địa lý của châu Á và phân tích ý nghĩa của vị trí này đối với sự phát triển kinh tế - xã hội của châu lục.</h3>

          <h4 className="font-semibold text-xl mb-2 mt-6">💡 <strong>Trả lời:</strong></h4>
          <p className="mt-2">Vị trí địa lý của châu Á:</p>
          <ul className="list-disc list-inside ml-6 mt-2">
            <li>🏆 Là "ông hoàng" của các châu lục về diện tích</li>
            <li>🤝 Có 2 "người hàng xóm" châu lục: Châu Âu và Châu Phi</li>
            <li>🌊 Có 3 "người bạn" đại dương: Thái Bình Dương, Ấn Độ Dương và Bắc Băng Dương</li>
            <li>🌡️ Trải dài từ vùng nóng bỏng gần Xích đạo đến vùng lạnh giá quá vòng cực Bắc</li>
          </ul>

          <p className="mt-4">Ý nghĩa đối với sự phát triển kinh tế - xã hội:</p>
          <ul className="list-disc list-inside ml-6 mt-2">
            <li>🏞️ Diện tích "khổng lồ" = Kho báu tài nguyên đa dạng + Vườn sinh thái phong phú</li>
            <li>🚢 Tiếp giáp nhiều châu lục và đại dương = Cửa ngõ giao thương quốc tế + Thiên đường kinh tế biển</li>
            <li>🌾 Trải dài theo vĩ độ = Thiên đường khí hậu đa dạng = Vựa lúa + Bảo tàng văn hóa sống</li>
            <li>🌉 Cầu nối giữa các châu lục = Trung tâm giao thương và văn hóa toàn cầu</li>
          </ul>

          {/* Câu hỏi về địa hình châu Á */}
          <h3 className="font-semibold text-xl mb-4 mt-8">📝 <strong>Câu hỏi:</strong> Phân tích ảnh hưởng của đặc điểm địa hình châu Á đối với sự phát triển kinh tế - xã hội của châu lục này.</h3>

          <h4 className="font-semibold text-xl mb-2 mt-6">💡 <strong>Trả lời:</strong></h4>
          <p className="mt-2">Ảnh hưởng tích cực:</p>
          <ul className="list-disc list-inside ml-6 mt-2">
            <li>🏭 Địa hình đa dạng = Kho báu khoáng sản phong phú = Động lực cho công nghiệp</li>
            <li>🌾 Cao nguyên + Đồng bằng rộng lớn = Thiên đường nông nghiệp + Đô thị hiện đại</li>
            <li>⚡ Núi cao = Tiềm năng thủy điện khổng lồ + Thiên đường du lịch mạo hiểm</li>
          </ul>

          <p className="mt-4">Ảnh hưởng tiêu cực:</p>
          <ul className="list-disc list-inside ml-6 mt-2">
            <li>🚗 Núi cao + Hiểm trở = Thách thức cho giao thông + Cơ sở hạ tầng</li>
            <li>🌋 Địa hình chia cắt = Nguy cơ xói mòn, sạt lở = Chi phí bảo vệ môi trường cao</li>
            <li>💰 Chênh lệch địa hình = Phát triển không đồng đều giữa các vùng</li>
          </ul>

          <p className="mt-4">Giải pháp thích ứng:</p>
          <ul className="list-disc list-inside ml-6 mt-2">
            <li>🚄 Phát triển giao thông đa dạng (đường bộ, đường sắt, hàng không) = Kết nối mọi vùng miền</li>
            <li>🌱 Áp dụng công nghệ canh tác tiên tiến = Chinh phục đồi núi</li>
            <li>🏙️ Quy hoạch đô thị + công nghiệp = Phù hợp với đặc thù địa hình</li>
            <li>🌿 Tăng cường bảo vệ môi trường = Chống xói mòn + sạt lở</li>
          </ul>
        </div>
      )}


      <Card className="w-full max-w-3xl bg-white/80 backdrop-blur-sm shadow-xl z-0">
        <CardHeader className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Địa lý Lớp 7: Ôn Tập Kiến Thức</h1>
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
