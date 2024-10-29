// React và hooks
import React, { useState } from 'react';

// Styles
import './App.css';

// Custom components
import { Button } from './components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from './components/ui/card';

// Icons
import { Book, HelpCircle } from 'lucide-react';

const EnglishReview = () => {
  const [activeSection, setActiveSection] = useState('none'); // 'none', 'phonetics', or 'guide'

  const toggleSection = (section) => {
    if (activeSection === section) {
      setActiveSection('none');
    } else {
      setActiveSection(section);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <Card className="mb-8">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-blue-600">
            Ôn tập Tiếng Anh lớp 7
          </CardTitle>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => toggleSection('phonetics')}
              className={`p-4 rounded-lg flex items-center justify-center gap-2 transition-all
                ${activeSection === 'phonetics'
                  ? 'bg-blue-600 text-white' 
                  : 'bg-blue-100 text-blue-600 hover:bg-blue-200'}`}
            >
              <Book size={20} />
              {activeSection === 'phonetics' ? 'Đóng' : 'Ngữ Âm'}
            </button>

            <button
              onClick={() => toggleSection('guide')}
              className={`p-4 rounded-lg flex items-center justify-center gap-2 transition-all
                ${activeSection === 'guide'
                  ? 'bg-blue-600 text-white' 
                  : 'bg-blue-100 text-blue-600 hover:bg-blue-200'}`}
            >
              <HelpCircle size={20} />
              {activeSection === 'guide' ? 'Đóng' : 'Hướng Dẫn'}
            </button>
          </div>

          {activeSection === 'phonetics' && (
            <>
              <div className="mt-6 space-y-6 p-4 bg-gray-50 rounded-lg">
                <div className="space-y-6">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h2 className="text-xl font-semibold text-blue-600 mb-3">
                      💡 Giới thiệu về Ngữ âm
                    </h2>
                    <div className="space-y-2">
                      <p><span className="font-medium text-blue-600">Nguyên âm (Vowels)</span> là những âm được tạo ra khi không khí đi qua thanh quản và khoang miệng mà không bị cản trở. Tiếng Anh có 20 nguyên âm (12 nguyên âm đơn và 8 nguyên âm đôi).</p>
                      <p><span className="font-medium text-blue-600">Phụ âm (Consonants)</span> là những âm được tạo ra khi luồng không khí bị cản trở bởi lưỡi, môi, răng hoặc vòm họng. Tiếng Anh có 24 phụ âm.</p>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold text-blue-600 flex items-center gap-2">
                      <Volume2 size={24} />
                      Nguyên âm (Vowels)
                    </h2>
                    
                    <div className="pl-4 space-y-6 mt-4">
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h3 className="font-medium text-blue-500 mb-2">
                          /ə/ - Âm "ơ" ngắn (schwa)
                        </h3>
                        <p className="mb-3">Đây là âm phổ biến nhất trong tiếng Anh, thường xuất hiện ở âm không nhấn. Phát âm giống như âm "ơ" trong tiếng Việt nhưng ngắn và nhẹ hơn.</p>
                        <div className="space-y-2">
                          <div className="grid grid-cols-2 gap-4">
                            <div className="bg-blue-50 p-2 rounded">
                              <span className="font-semibold">about</span>
                              <span className="text-gray-600 ml-2">/əˈbaʊt/</span>
                            </div>
                            <div className="bg-blue-50 p-2 rounded">
                              <span className="font-semibold">teacher</span>
                              <span className="text-gray-600 ml-2">/ˈtiːtʃə/</span>
                            </div>
                            <div className="bg-blue-50 p-2 rounded">
                              <span className="font-semibold">collect</span>
                              <span className="text-gray-600 ml-2">/kəˈlekt/</span>
                            </div>
                            <div className="bg-blue-50 p-2 rounded">
                              <span className="font-semibold">together</span>
                              <span className="text-gray-600 ml-2">/təˈɡeðə/</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h3 className="font-medium text-blue-500 mb-2">
                          /ɜː/ - Âm "ơ" dài
                        </h3>
                        <p className="mb-3">Âm này được phát âm giống âm "ơ" trong tiếng Việt và kéo dài. Thường xuất hiện trong các từ có "ur", "ir", "er".</p>
                        <div className="space-y-2">
                          <div className="grid grid-cols-2 gap-4">
                            <div className="bg-blue-50 p-2 rounded">
                              <span className="font-semibold">nurse</span>
                              <span className="text-gray-600 ml-2">/nɜːs/</span>
                            </div>
                            <div className="bg-blue-50 p-2 rounded">
                              <span className="font-semibold">bird</span>
                              <span className="text-gray-600 ml-2">/bɜːd/</span>
                            </div>
                            <div className="bg-blue-50 p-2 rounded">
                              <span className="font-semibold">learn</span>
                              <span className="text-gray-600 ml-2">/lɜːn/</span>
                            </div>
                            <div className="bg-blue-50 p-2 rounded">
                              <span className="font-semibold">world</span>
                              <span className="text-gray-600 ml-2">/wɜːld/</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold text-blue-600 flex items-center gap-2">
                      <Volume2 size={24} />
                      Phụ âm (Consonants)
                    </h2>
                    
                    <div className="pl-4 space-y-6 mt-4">
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h3 className="font-medium text-blue-500 mb-2">
                          /f/ - Âm "ph"
                        </h3>
                        <p className="mb-3">Đặt môi dưới chạm nhẹ răng trên và thổi hơi ra. Âm này không rung dây thanh.</p>
                        <div className="space-y-2">
                          <div className="grid grid-cols-2 gap-4">
                            <div className="bg-blue-50 p-2 rounded">
                              <span className="font-semibold">food</span>
                              <span className="text-gray-600 ml-2">/fuːd/</span>
                            </div>
                            <div className="bg-blue-50 p-2 rounded">
                              <span className="font-semibold">phone</span>
                              <span className="text-gray-600 ml-2">/fəʊn/</span>
                            </div>
                            <div className="bg-blue-50 p-2 rounded">
                              <span className="font-semibold">enough</span>
                              <span className="text-gray-600 ml-2">/ɪˈnʌf/</span>
                            </div>
                            <div className="bg-blue-50 p-2 rounded">
                              <span className="font-semibold">life</span>
                              <span className="text-gray-600 ml-2">/laɪf/</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h3 className="font-medium text-blue-500 mb-2">
                          /v/ - Âm "v"
                        </h3>
                        <p className="mb-3">Tương tự âm /f/ nhưng có rung dây thanh. Đặt môi dưới chạm nhẹ răng trên và tạo âm có tiếng.</p>
                        <div className="space-y-2">
                          <div className="grid grid-cols-2 gap-4">
                            <div className="bg-blue-50 p-2 rounded">
                              <span className="font-semibold">very</span>
                              <span className="text-gray-600 ml-2">/ˈveri/</span>
                            </div>
                            <div className="bg-blue-50 p-2 rounded">
                              <span className="font-semibold">love</span>
                              <span className="text-gray-600 ml-2">/lʌv/</span>
                            </div>
                            <div className="bg-blue-50 p-2 rounded">
                              <span className="font-semibold">voice</span>
                              <span className="text-gray-600 ml-2">/vɔɪs/</span>
                            </div>
                            <div className="bg-blue-50 p-2 rounded">
                              <span className="font-semibold">live</span>
                              <span className="text-gray-600 ml-2">/lɪv/</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <div className="aspect-video">
                  <iframe 
                    className="w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/mV_CEIroJs8?si=subH2R9orMxZiUAX" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                  />
                </div>
              </div>
            </>
          )}

          {activeSection === 'guide' && (
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-blue-600 mb-3">Hướng dẫn sử dụng</h3>
              <ul className="space-y-2 text-gray-700">
                <li>1. Nhấn vào nút "Ngữ Âm" để xem chi tiết về cách phát âm</li>
                <li>2. Mỗi âm đều có giải thích và ví dụ kèm theo</li>
                <li>3. Các từ ví dụ được chọn từ những từ thông dụng để dễ nhớ</li>
                <li>4. Xem video bên dưới nội dung để luyện tập theo</li>
              </ul>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default EnglishReview;
