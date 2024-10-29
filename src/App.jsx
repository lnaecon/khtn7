import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from './components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from './components/ui/card';
import './App.css';

const App = () => {
  const [isPhoneticOpen, setIsPhoneticOpen] = useState(false);

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-gray-50">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-800">
        Ôn tập Tiếng Anh lớp 7 🎓
      </h1>

      <Card>
        <Button
          onClick={() => setIsPhoneticOpen(!isPhoneticOpen)}
          variant="default"
          className="w-full flex items-center justify-between text-lg font-semibold rounded-t-lg hover:bg-blue-700 transition-colors"
        >
          <span>Phonetics {isPhoneticOpen ? "▼" : "▶"}</span>
          {isPhoneticOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
        </Button>

        {isPhoneticOpen && (
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-blue-800 mb-4">1. Nguyên âm (Vowels) 🗣️</h2>

              <Card className="bg-blue-50">
                <CardContent>
                  <h3 className="font-bold text-blue-700 mb-2">Nguyên âm /ə/ (schwa)</h3>
                  <p className="mb-2">
                    🔊 Đây là âm ngắn, nhẹ, không căng, giống như khi bạn nói "ơ" rất nhẹ trong tiếng Việt
                  </p>
                  <Card className="bg-white">
                    <CardContent>
                      <p className="font-bold text-gray-700">Ví dụ:</p>
                      <p><span className="text-blue-600 font-bold">collect</span> /kəˈlekt/</p>
                      <p><span className="text-blue-600 font-bold">colour</span> /ˈkʌlə/</p>
                      <p><span className="text-blue-600 font-bold">together</span> /təˈɡeðə/</p>
                    </CardContent>
                  </Card>
                </CardContent>
              </Card>

              <Card className="bg-blue-50">
                <CardContent>
                  <h3 className="font-bold text-blue-700 mb-2">Nguyên âm /ɜː/</h3>
                  <p className="mb-2">
                    🔊 Âm dài, giống như "ơ" kéo dài trong tiếng Việt
                  </p>
                  <Card className="bg-white">
                    <CardContent>
                      <p className="font-bold text-gray-700">Ví dụ:</p>
                      <p><span className="text-blue-600 font-bold">nurse</span> /nɜːs/</p>
                      <p><span className="text-blue-600 font-bold">bird</span> /bɜːd/</p>
                      <p><span className="text-blue-600 font-bold">surfing</span> /ˈsɜːfɪŋ/</p>
                    </CardContent>
                  </Card>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-bold text-blue-800 mb-4">2. Phụ âm (Consonants) 🎵</h2>

              <Card className="bg-green-50">
                <CardContent>
                  <h3 className="font-bold text-green-700 mb-2">Phụ âm /f/</h3>
                  <p className="mb-2">
                    🔊 Đặt răng trên lên môi dưới và thổi hơi ra, không rung dây thanh
                  </p>
                  <Card className="bg-white">
                    <CardContent>
                      <p className="font-bold text-gray-700">Ví dụ:</p>
                      <p><span className="text-green-600 font-bold">flu</span> /fluː/</p>
                      <p><span className="text-green-600 font-bold">food</span> /fuːd/</p>
                      <p><span className="text-green-600 font-bold">face</span> /feɪs/</p>
                    </CardContent>
                  </Card>
                </CardContent>
              </Card>

              <Card className="bg-green-50">
                <CardContent>
                  <h3 className="font-bold text-green-700 mb-2">Phụ âm /v/</h3>
                  <p className="mb-2">
                    🔊 Tương tự như /f/ nhưng có rung dây thanh (đặt tay lên cổ sẽ thấy rung)
                  </p>
                  <Card className="bg-white">
                    <CardContent>
                      <p className="font-bold text-gray-700">Ví dụ:</p>
                      <p><span className="text-green-600 font-bold">vest</span> /vest/</p>
                      <p><span className="text-green-600 font-bold">very</span> /ˈveri/</p>
                      <p><span className="text-green-600 font-bold">save</span> /seɪv/</p>
                    </CardContent>
                  </Card>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-yellow-50">
              <CardContent>
                <h3 className="font-bold text-yellow-800">💡 Lưu ý:</h3>
                <ul className="list-disc list-inside space-y-2 text-yellow-800">
                  <li>Tập phát âm trước gương để xem vị trí miệng</li>
                  <li>Nghe và bắt chước giọng phát âm chuẩn từ các ứng dụng học tiếng Anh</li>
                  <li>Luyện tập thường xuyên với các từ ví dụ</li>
                </ul>
              </CardContent>
            </Card>
          </CardContent>
        )}
      </Card>
    </div>
  );
};

export default App;
