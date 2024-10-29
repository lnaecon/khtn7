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
  const [showPhonetics, setShowPhonetics] = useState(false);
  const [showGuide, setShowGuide] = useState(false);

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
              onClick={() => setShowPhonetics(!showPhonetics)}
              className={`p-4 rounded-lg flex items-center justify-center gap-2 transition-all
                ${showPhonetics 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-blue-100 text-blue-600 hover:bg-blue-200'}`}
            >
              <Book size={20} />
              {showPhonetics ? 'Close' : 'Phonetics'}
            </button>

            <button
              onClick={() => setShowGuide(!showGuide)}
              className={`p-4 rounded-lg flex items-center justify-center gap-2 transition-all
                ${showGuide 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-blue-100 text-blue-600 hover:bg-blue-200'}`}
            >
              <HelpCircle size={20} />
              {showGuide ? 'Close' : 'Guide'}
            </button>
          </div>

          {showPhonetics && (
            <div className="mt-6 space-y-6 p-4 bg-gray-50 rounded-lg">
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-blue-600">
                  🎵 Nguyên âm (Vowels)
                </h2>
                
                <div className="pl-4 space-y-4">
                  <div>
                    <h3 className="font-medium text-blue-500">
                      /ə/ - Âm "ơ" ngắn 
                    </h3>
                    <p>Phát âm giống như âm "ơ" trong tiếng Việt nhưng ngắn hơn và nhẹ hơn.</p>
                    <div className="bg-blue-50 p-2 rounded mt-2">
                      Ví dụ: <span className="font-semibold">collect</span> /kəˈlekt/, 
                      <span className="font-semibold"> colour</span> /ˈkʌlə/, 
                      <span className="font-semibold"> correct</span> /kəˈrekt/
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium text-blue-500">
                      /ɜː/ - Âm "ơ" dài
                    </h3>
                    <p>Phát âm giống âm "ơ" trong tiếng Việt và kéo dài.</p>
                    <div className="bg-blue-50 p-2 rounded mt-2">
                      Ví dụ: <span className="font-semibold">nurse</span> /nɜːs/, 
                      <span className="font-semibold"> bird</span> /bɜːd/, 
                      <span className="font-semibold"> surf</span> /sɜːf/
                    </div>
                  </div>
                </div>

                <h2 className="text-xl font-semibold text-blue-600">
                  🔊 Phụ âm (Consonants)
                </h2>
                
                <div className="pl-4 space-y-4">
                  <div>
                    <h3 className="font-medium text-blue-500">
                      /f/ - Âm "ph"
                    </h3>
                    <p>Đặt môi dưới chạm nhẹ răng trên và thổi hơi ra.</p>
                    <div className="bg-blue-50 p-2 rounded mt-2">
                      Ví dụ: <span className="font-semibold">flu</span> /fluː/, 
                      <span className="font-semibold"> food</span> /fuːd/, 
                      <span className="font-semibold"> face</span> /feɪs/
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium text-blue-500">
                      /v/ - Âm "v"
                    </h3>
                    <p>Tương tự âm /f/ nhưng có rung dây thanh.</p>
                    <div className="bg-blue-50 p-2 rounded mt-2">
                      Ví dụ: <span className="font-semibold">vest</span> /vest/, 
                      <span className="font-semibold"> save</span> /seɪv/, 
                      <span className="font-semibold"> leave</span> /liːv/
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {showGuide && (
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-700">
                Hướng dẫn sử dụng trang này
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default EnglishReview;
