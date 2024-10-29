import React, { useState } from 'react';
import './App.css';
import { Button } from './components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from './components/ui/card';
import { 
  Volume2, 
  Atom,
  BookText,
  TestTube,
  Microscope,
  Lightbulb,
} from 'lucide-react'; // Imported necessary icons

const EnglishReview = () => {
  const [activeSection, setActiveSection] = useState('none');

  const toggleSection = (section) => {
    if (activeSection === section) {
      setActiveSection('none');
    } else {
      setActiveSection(section);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 font-sans">
      <Card className="mb-8">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-blue-600">
            Ôn tập Tiếng Anh lớp 7
          </CardTitle>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <div className="grid grid-cols-3 gap-4">
            <button
              onClick={() => toggleSection('atom')}
              className={`p-4 rounded-lg flex items-center justify-center gap-2 transition-all
                ${activeSection === 'atom'
                  ? 'bg-blue-600 text-white' 
                  : 'bg-blue-100 text-blue-600 hover:bg-blue-200'}`}
            >
              <Atom size={20} />
              {activeSection === 'atom' ? 'Đóng' : 'Nguyên Tử'}
            </button>
            <button
              onClick={() => toggleSection('element')}
              className={`p-4 rounded-lg flex items-center justify-center gap-2 transition-all
                ${activeSection === 'element'
                  ? 'bg-blue-600 text-white' 
                  : 'bg-blue-100 text-blue-600 hover:bg-blue-200'}`}
            >
              <TestTube size={20} />
              {activeSection === 'element' ? 'Đóng' : 'Nguyên Tố'}
            </button>
            <button
              onClick={() => toggleSection('periodicTable')}
              className={`p-4 rounded-lg flex items-center justify-center gap-2 transition-all
                ${activeSection === 'periodicTable'
                  ? 'bg-blue-600 text-white' 
                  : 'bg-blue-100 text-blue-600 hover:bg-blue-200'}`}
            >
              <Grid size={20} />
              {activeSection === 'periodicTable' ? 'Đóng' : 'Bảng Tuần Hoàn'}
            </button>
          </div>

          {/* Periodic Table Section */}
          {activeSection === 'periodicTable' && (
            <div className="mt-6 space-y-6 p-4 bg-gray-50 rounded-lg">
              <div className="space-y-6">
                {/* Section: BẢNG TUẦN HOÀN CÁC NGUYÊN TỐ HÓA HỌC */}
                <div className="p-6 rounded-lg shadow-sm bg-blue-50">
                  <h2 className="text-2xl font-semibold text-red-600 flex items-center gap-2 mb-4">
                    <Grid size={24} className="text-red-500" />
                    BẢNG TUẦN HOÀN CÁC NGUYÊN TỐ HÓA HỌC
                  </h2>

                  {/* I. Kiến thức trọng tâm */}
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">I. Kiến thức trọng tâm</h3>

                    {/* 1. Nguyên tắc xây dựng bảng tuần hoàn */}
                    <div className="mb-4 bg-white p-4 rounded-lg">
                      <h4 className="text-lg font-semibold text-blue-600 flex items-center gap-2 mb-2">
                        <TestTube size={20} />
                        1. Nguyên tắc xây dựng bảng tuần hoàn
                      </h4>
                      <ul className="list-disc list-inside space-y-2">
                        <li>
                          <strong>Nguyên tắc cơ bản:</strong>
                          <ul className="list-disc list-inside ml-5 space-y-1">
                            <li>Sắp xếp theo chiều tăng dần của điện tích hạt nhân</li>
                            <li>Các nguyên tố cùng hàng có cùng số lớp electron</li>
                            <li>Các nguyên tố cùng cột có tính chất gần giống nhau</li>
                          </ul>
                        </li>
                        <li>
                          <strong>Lịch sử:</strong>
                          <ul className="list-disc list-inside ml-5 space-y-1">
                            <li>1869: Men-đê-lê-ép xây dựng bảng tuần hoàn đầu tiên</li>
                            <li>Dựa trên khối lượng nguyên tử tăng dần</li>
                            <li>Hiện nay gồm 118 nguyên tố</li>
                          </ul>
                        </li>
                      </ul>
                    </div>

                    {/* 2. Cấu tạo bảng tuần hoàn */}
                    <div className="mb-4 bg-white p-4 rounded-lg">
                      <h4 className="text-lg font-semibold text-blue-600 flex items-center gap-2 mb-2">
                        <Microscope size={20} />
                        2. Cấu tạo bảng tuần hoàn
                      </h4>
                      <ul className="list-disc list-inside space-y-2">
                        <li>
                          <strong>Ô nguyên tố:</strong>
                          <ul className="list-disc list-inside ml-5 space-y-1">
                            <li>Chứa thông tin: ký hiệu, tên, số hiệu, khối lượng nguyên tử</li>
                            <li>Số hiệu = Số proton = Số electron</li>
                          </ul>
                        </li>
                        <li>
                          <strong>Chu kỳ:</strong>
                          <ul className="list-disc list-inside ml-5 space-y-1">
                            <li>7 chu kỳ ngang, đánh số 1-7</li>
                            <li>Chu kỳ nhỏ: 1, 2, 3</li>
                            <li>Chu kỳ lớn: 4, 5, 6, 7</li>
                            <li>Số thứ tự chu kỳ = Số lớp electron</li>
                          </ul>
                        </li>
                        <li>
                          <strong>Nhóm:</strong>
                          <ul className="list-disc list-inside ml-5 space-y-1">
                            <li>8 nhóm A (IA - VIIIA)</li>
                            <li>8 nhóm B (IB - VIIIB)</li>
                            <li>Số thứ tự nhóm A = Số electron lớp ngoài cùng</li>
                          </ul>
                        </li>
                      </ul>
                    </div>

                    {/* 3. Vị trí các loại nguyên tố */}
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="text-lg font-semibold text-blue-600 flex items-center gap-2 mb-2">
                        <Lightbulb size={20} />
                        3. Vị trí các loại nguyên tố
                      </h4>
                      <ul className="list-disc list-inside space-y-2">
                        <li>
                          <strong>Kim loại:</strong>
                          <ul className="list-disc list-inside ml-5 space-y-1">
                            <li>Khoảng 90/118 nguyên tố</li>
                            <li>Vị trí: góc dưới bên trái</li>
                            <li>Gồm: IA, IIA, IIIA và một số IVA-VIA</li>
                          </ul>
                        </li>
                        <li>
                          <strong>Phi kim:</strong>
                          <ul className="list-disc list-inside ml-5 space-y-1">
                            <li>Dưới 20/118 nguyên tố</li>
                            <li>Vị trí: góc trên bên phải</li>
                            <li>Gồm: VIIA, VIA và một số IVA, IIIA</li>
                          </ul>
                        </li>
                        <li>
                          <strong>Khí hiếm:</strong>
                          <ul className="list-disc list-inside ml-5 space-y-1">
                            <li>7 nguyên tố nhóm VIIIA</li>
                            <li>Electron lớp ngoài cùng bền vững</li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* II. Thông tin thú vị và ứng dụng thực tế */}
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">II. Thông tin thú vị và ứng dụng thực tế</h3>

                    {/* 1. Ứng dụng của các kim loại */}
                    <div className="mb-4 bg-green-50 p-4 rounded-lg">
                      <h4 className="text-lg font-semibold text-green-600 flex items-center gap-2 mb-2">
                        <Lightbulb size={20} />
                        1. Ứng dụng của các kim loại
                      </h4>
                      <ul className="list-disc list-inside space-y-2">
                        <li>Nhôm (Al): Màng bọc thực phẩm</li>
                        <li>Sắt (Fe): Công trình xây dựng</li>
                        <li>Đồng (Cu): Dây dẫn điện</li>
                        <li>Vàng (Au): Trang sức</li>
                      </ul>
                    </div>

                    {/* 2. Ứng dụng của phi kim */}
                    <div className="mb-4 bg-green-50 p-4 rounded-lg">
                      <h4 className="text-lg font-semibold text-green-600 flex items-center gap-2 mb-2">
                        <Lightbulb size={20} />
                        2. Ứng dụng của phi kim
                      </h4>
                      <ul className="list-disc list-inside space-y-2">
                        <li>Oxygen (O): Hô hấp, quang hợp</li>
                        <li>Chlorine (Cl): Khử trùng nước</li>
                        <li>Bromine (Br): Thuốc tẩy trắng</li>
                        <li>Sulfur (S): Sản xuất axit</li>
                      </ul>
                    </div>

                    {/* 3. Ứng dụng của khí hiếm */}
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="text-lg font-semibold text-green-600 flex items-center gap-2 mb-2">
                        <Lightbulb size={20} />
                        3. Ứng dụng của khí hiếm
                      </h4>
                      <ul className="list-disc list-inside space-y-2">
                        <li>Helium (He): Khinh khí cầu</li>
                        <li>Argon (Ar): Đèn LED</li>
                        <li>Neon (Ne): Đèn quảng cáo</li>
                      </ul>
                    </div>
                  </div>

                  {/* III. Câu hỏi tự luyện tập và đáp án */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">III. Câu hỏi tự luyện tập và đáp án</h3>

                    {/* Câu hỏi */}
                    <div className="mb-4 bg-purple-50 p-4 rounded-lg">
                      <h4 className="text-lg font-semibold text-indigo-600 mb-2">Câu hỏi</h4>
                      <ol className="list-decimal list-inside space-y-2">
                        <li>Tại sao bảng tuần hoàn được gọi là "tuần hoàn"?</li>
                        <li>Số thứ tự chu kỳ và số thứ tự nhóm A cho ta biết thông tin gì?</li>
                        <li>Làm sao để xác định một nguyên tố là kim loại hay phi kim?</li>
                        <li>Tại sao khí hiếm ít tham gia phản ứng hóa học?</li>
                      </ol>
                    </div>

                    {/* Đáp án */}
                    <div className="bg-purple-50 p-4 rounded-lg text-sm">
                      <h4 className="text-lg font-semibold text-indigo-600 mb-2">Đáp án</h4>
                      <ol className="list-decimal list-inside space-y-4">
                        <li>
                          <strong>Vì:</strong>
                          <ul className="list-disc list-inside ml-5 space-y-1">
                            <li>Tính chất các nguyên tố lặp lại theo chu kỳ</li>
                            <li>Cấu trúc electron lặp lại theo quy luật</li>
                            <li>Nguyên tố cùng nhóm có tính chất tương tự</li>
                          </ul>
                        </li>
                        <li>
                          <strong>Số thứ tự:</strong>
                          <ul className="list-disc list-inside ml-5 space-y-1">
                            <li>Chu kỳ = Số lớp electron</li>
                            <li>Nhóm A = Số electron lớp ngoài cùng</li>
                          </ul>
                        </li>
                        <li>
                          <strong>Xác định dựa vào:</strong>
                          <ul className="list-disc list-inside ml-5 space-y-1">
                            <li>Vị trí trong bảng tuần hoàn</li>
                            <li>Kim loại: góc dưới bên trái</li>
                            <li>Phi kim: góc trên bên phải</li>
                          </ul>
                        </li>
                        <li>
                          <strong>Khí hiếm ít phản ứng vì:</strong>
                          <ul className="list-disc list-inside ml-5 space-y-1">
                            <li>Lớp electron ngoài cùng bền vững</li>
                            <li>Có 8 electron ở lớp ngoài (trừ He có 2e)</li>
                            <li>Không có xu hướng nhận/nhường electron</li>
                          </ul>
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}


          {/* Element Section */}
          {activeSection === 'element' && (
            <div className="mt-6 space-y-6 p-4 bg-gray-50 rounded-lg">
              <div className="space-y-6">
                {/* Section: NGUYÊN TỐ HÓA HỌC - KHÁI NIỆM CƠ BẢN */}
                <div className="p-6 rounded-lg shadow-sm bg-blue-50">
                  <h2 className="text-2xl font-semibold text-red-600 flex items-center gap-2 mb-4">
                    <TestTube size={24} className="text-red-500" />
                    NGUYÊN TỐ HÓA HỌC - KHÁI NIỆM CƠ BẢN
                  </h2>

                  {/* I. Kiến thức trọng tâm */}
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">I. Kiến thức trọng tâm</h3>

                    {/* 1. Khái niệm nguyên tố hóa học */}
                    <div className="mb-4 bg-white p-4 rounded-lg">
                      <h4 className="text-lg font-semibold text-blue-600 flex items-center gap-2 mb-2">
                        <TestTube size={20} />
                        1. Khái niệm nguyên tố hóa học
                      </h4>
                      <ul className="list-disc list-inside space-y-2">
                        <li>Nguyên tố hóa học là tập hợp các nguyên tử có cùng số proton trong hạt nhân</li>
                        <li>Mỗi nguyên tố có số hiệu nguyên tử riêng, chính là số proton trong hạt nhân</li>
                        <li>Các nguyên tử cùng nguyên tố có thể có số neutron khác nhau</li>
                        <li>Hiện nay đã phát hiện được 118 nguyên tố hóa học</li>
                      </ul>
                    </div>

                    {/* 2. Tên gọi và ký hiệu hóa học */}
                    <div className="mb-4 bg-white p-4 rounded-lg">
                      <h4 className="text-lg font-semibold text-blue-600 flex items-center gap-2 mb-2">
                        <Microscope size={20} />
                        2. Tên gọi và ký hiệu hóa học
                      </h4>
                      <ul className="list-disc list-inside space-y-2">
                        <li>
                          <strong>Tên gọi:</strong>
                          <ul className="list-disc list-inside ml-5 space-y-1">
                            <li>Một số có từ thời cổ đại: vàng, bạc, sắt...</li>
                            <li>Một số mới phát hiện gần đây: rutherfordium, bohrium...</li>
                            <li>Được quy định thống nhất theo IUPAC</li>
                          </ul>
                        </li>
                        <li>
                          <strong>Ký hiệu hóa học:</strong>
                          <ul className="list-disc list-inside ml-5 space-y-1">
                            <li>Gồm 1-2 chữ cái từ tên nguyên tố</li>
                            <li>Chữ đầu viết hoa, chữ sau viết thường</li>
                            <li>Một số dựa trên tên Latin (Na - natrium, K - kalium)</li>
                          </ul>
                        </li>
                      </ul>
                    </div>

                    {/* 3. Nguyên tố trong tự nhiên */}
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="text-lg font-semibold text-blue-600 flex items-center gap-2 mb-2">
                        <Lightbulb size={20} />
                        3. Nguyên tố trong tự nhiên
                      </h4>
                      <ul className="list-disc list-inside space-y-2">
                        <li>
                          <strong>Trong cơ thể người:</strong>
                          <ul className="list-disc list-inside ml-5 space-y-1">
                            <li>4 nguyên tố chính (96%): C, O, H, N</li>
                            <li>Các nguyên tố phụ (4%): P, S, Ca, K</li>
                            <li>Nguyên tố vi lượng: Fe, I...</li>
                          </ul>
                        </li>
                        <li>
                          <strong>Trong không khí:</strong>
                          <ul className="list-disc list-inside ml-5 space-y-1">
                            <li>Nitrogen (N<sub>2</sub>)</li>
                            <li>Oxygen (O<sub>2</sub>)</li>
                            <li>Các khí hiếm</li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* II. Thông tin thú vị và ứng dụng thực tế */}
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">II. Thông tin thú vị và ứng dụng thực tế</h3>

                    {/* 1. Ứng dụng trong đời sống */}
                    <div className="mb-4 bg-green-50 p-4 rounded-lg">
                      <h4 className="text-lg font-semibold text-green-600 flex items-center gap-2 mb-2">
                        <Lightbulb size={20} />
                        1. Ứng dụng trong đời sống
                      </h4>
                      <ul className="list-disc list-inside space-y-2">
                        <li>Thành phần thực phẩm, thuốc</li>
                        <li>Vật liệu xây dựng</li>
                        <li>Công nghiệp sản xuất</li>
                        <li>Y học và điều trị</li>
                      </ul>
                    </div>

                    {/* 2. Những con số thú vị */}
                    <div className="mb-4 bg-green-50 p-4 rounded-lg">
                      <h4 className="text-lg font-semibold text-green-600 flex items-center gap-2 mb-2">
                        <Lightbulb size={20} />
                        2. Những con số thú vị
                      </h4>
                      <ul className="list-disc list-inside space-y-2">
                        <li>Hydrogen là nguyên tố nhẹ nhất</li>
                        <li>Oxygen chiếm 65% khối lượng cơ thể người</li>
                        <li>Iodine cần 0.15mg/ngày cho tuyến giáp</li>
                      </ul>
                    </div>
                  </div>

                  {/* III. Câu hỏi tự luyện tập và đáp án */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">III. Câu hỏi tự luyện tập và đáp án</h3>

                    {/* Câu hỏi */}
                    <div className="mb-4 bg-purple-50 p-4 rounded-lg">
                      <h4 className="text-lg font-semibold text-indigo-600 mb-2">Câu hỏi</h4>
                      <ol className="list-decimal list-inside space-y-2">
                        <li>Thế nào là nguyên tố hóa học?</li>
                        <li>Tại sao các nguyên tử có số neutron khác nhau vẫn thuộc cùng một nguyên tố?</li>
                        <li>Oxygen có số hiệu nguyên tử là 8, số proton trong hạt nhân là bao nhiêu?</li>
                        <li>Kể tên các nguyên tố chính trong cơ thể người?</li>
                      </ol>
                    </div>

                    {/* Đáp án */}
                    <div className="bg-purple-50 p-4 rounded-lg text-sm">
                      <h4 className="text-lg font-semibold text-indigo-600 mb-2">Đáp án</h4>
                      <ol className="list-decimal list-inside space-y-4">
                        <li>Nguyên tố hóa học là tập hợp các nguyên tử có cùng số proton trong hạt nhân.</li>
                        <li>Vì số proton quyết định bản chất nguyên tố, không phụ thuộc số neutron.</li>
                        <li>Số proton = số hiệu nguyên tử = 8.</li>
                        <li>Carbon (C), Oxygen (O), Hydrogen (H), Nitrogen (N) chiếm 96% khối lượng cơ thể.</li>
                      </ol>
                    </div>
                  </div>

                  {/* Video Section */}
                  <div className="mt-8">
                    <h2 className="text-xl font-semibold text-blue-600 mb-4 flex items-center gap-2">
                      📺 Video Hướng Dẫn
                    </h2>
                    <div className="aspect-video">
                      <iframe 
                        width="560" 
                        height="315" 
                        src="https://www.youtube.com/embed/fPnwBITSmgU?si=fdBcQOT-mMquZWgo" 
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin" 
                        allowFullScreen>
                      </iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Atom Section */}
          {activeSection === 'atom' && (
            <div className="mt-6 space-y-6 p-4 bg-gray-50 rounded-lg">
              <div className="space-y-6">
                {/* Section I: Kiến thức trọng tâm */}
                <div className="p-6 rounded-lg shadow-sm bg-blue-50">
                  <h2 className="text-2xl font-semibold text-red-600 flex items-center gap-2 mb-4">
                    <TestTube size={24} className="text-red-500" />
                    NGUYÊN TỬ - TỪ VI MÔ ĐẾN VĨ MÔ
                  </h2>

                  {/* I. Kiến thức trọng tâm */}
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">I. Kiến thức trọng tâm</h3>
                    
                    {/* 1. Lịch sử phát hiện nguyên tử */}
                    <div className="mb-4 bg-white p-4 rounded-lg">
                      <h4 className="text-lg font-semibold text-blue-600 flex items-center gap-2 mb-2">
                        <TestTube size={20} />
                        1. Lịch sử phát hiện nguyên tử
                      </h4>
                      <ul className="list-disc list-inside space-y-2">
                        <li><strong>Thời cổ đại</strong>: Đê-mô-crít (Democritus) đề xuất ý tưởng về hạt nhỏ nhất không thể chia cắt</li>
                        <li><strong>Thế kỷ XIX</strong>: Các nhà khoa học chứng minh sự tồn tại của nguyên tử qua thí nghiệm</li>
                        <li><strong>Đóng góp quan trọng</strong>:
                          <ul className="list-disc list-inside ml-5">
                            <li>Tôm-xơn (J.J. Thomson): Phát hiện electron (1897)</li>
                            <li>Rơ-dơ-pho (E. Rutherford): Phát hiện hạt nhân và proton</li>
                            <li>Chát-uých (J. Chadwick): Phát hiện neutron</li>
                            <li>Bo (N. Bohr): Hoàn thiện mô hình nguyên tử hiện đại</li>
                          </ul>
                        </li>
                      </ul>
                    </div>

                    {/* 2. Cấu tạo nguyên tử theo mô hình Rơ-dơ-pho – Bo */}
                    <div className="mb-4 bg-white p-4 rounded-lg">
                      <h4 className="text-lg font-semibold text-blue-600 flex items-center gap-2 mb-2">
                        <Microscope size={20} />
                        2. Cấu tạo nguyên tử theo mô hình Rơ-dơ-pho – Bo
                      </h4>
                      <ul className="list-disc list-inside space-y-2">
                        <li><strong>Hạt nhân</strong>:
                          <ul className="list-disc list-inside ml-5">
                            <li>Proton (p): Điện tích dương (+1)</li>
                            <li>Neutron (n): Không mang điện</li>
                            <li>Kích thước: ~1/10000 kích thước nguyên tử</li>
                          </ul>
                        </li>
                        <li><strong>Vỏ electron</strong>:
                          <ul className="list-disc list-inside ml-5">
                            <li>Electron (e): Điện tích âm (-1)</li>
                            <li>Sắp xếp theo lớp:
                              <ul className="list-disc list-inside ml-5">
                                <li>Lớp electron trong cùng: Tối đa 2 electron</li>
                                <li>Lớp electron thứ hai: Tối đa 8 electron</li>
                                <li>Lớp electron ngoài cùng quyết định tính chất hóa học</li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>

                    {/* 3. Đặc điểm quan trọng */}
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="text-lg font-semibold text-blue-600 flex items-center gap-2 mb-2">
                        <Lightbulb size={20} />
                        3. Đặc điểm quan trọng
                      </h4>
                      <ul className="list-disc list-inside space-y-2">
                        <li>Nguyên tử trung hòa về điện</li>
                        <li>Số proton = Số electron</li>
                        <li>Khối lượng tính bằng đơn vị amu (atomic mass unit)</li>
                        <li>Kích thước: ~10<sup>-10</sup> mét</li>
                      </ul>
                    </div>
                  </div>

                  {/* II. Thông tin thú vị và ứng dụng thực tế */}
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">II. Thông tin thú vị và ứng dụng thực tế</h3>
                    
                    {/* 1. Những con số ấn tượng */}
                    <div className="mb-4 bg-green-50 p-4 rounded-lg">
                      <h4 className="text-lg font-semibold text-green-600 flex items-center gap-2 mb-2">
                        <Lightbulb size={20} />
                        1. Những con số ấn tượng
                      </h4>
                      <ul className="list-disc list-inside space-y-2">
                        <li>Trong một hạt cát có khoảng 10<sup>19</sup> nguyên tử!</li>
                        <li>Mỗi giây, cơ thể bạn thay thế khoảng 1 triệu tỷ nguyên tử</li>
                        <li>DNA trong một tế bào chứa khoảng 100 tỷ nguyên tử</li>
                      </ul>
                    </div>

                    {/* 2. Ứng dụng trong cuộc sống */}
                    <div className="mb-4 bg-green-50 p-4 rounded-lg">
                      <h4 className="text-lg font-semibold text-green-600 flex items-center gap-2 mb-2">
                        <TestTube size={20} />
                        2. Ứng dụng trong cuộc sống
                      </h4>
                      <div className="space-y-4">
                        {/* Y học */}
                        <div className="flex items-start">
                          <span className="text-red-500 mr-2">🏥</span>
                          <div>
                            <strong>Y học:</strong>
                            <ul className="list-disc list-inside ml-5 space-y-1">
                              <li>Chụp X-quang: Dựa trên sự tương tác của tia X với các nguyên tử</li>
                              <li>PET/CT scan: Sử dụng nguyên tử phóng xạ để chẩn đoán bệnh</li>
                              <li>Xạ trị: Điều trị ung thư bằng bức xạ nguyên tử</li>
                            </ul>
                          </div>
                        </div>

                        {/* Năng lượng */}
                        <div className="flex items-start">
                          <span className="text-yellow-500 mr-2">🔋</span>
                          <div>
                            <strong>Năng lượng:</strong>
                            <ul className="list-disc list-inside ml-5 space-y-1">
                              <li>Pin mặt trời: Hoạt động dựa trên sự chuyển động của electron</li>
                              <li>LED: Phát sáng nhờ sự chuyển mức năng lượng của electron</li>
                            </ul>
                          </div>
                        </div>

                        {/* Công nghệ */}
                        <div className="flex items-start">
                          <span className="text-purple-500 mr-2">🖥️</span>
                          <div>
                            <strong>Công nghệ:</strong>
                            <ul className="list-disc list-inside ml-5 space-y-1">
                              <li>Chip máy tính: Hoạt động nhờ sự di chuyển của electron</li>
                              <li>Màn hình cảm ứng: Dựa trên tương tác điện tử</li>
                              <li>GPS: Hoạt động nhờ đồng hồ nguyên tử siêu chính xác</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 3. Thí nghiệm đơn giản tại nhà */}
                    <div className="mb-4 bg-green-50 p-4 rounded-lg">
                      <h4 className="text-lg font-semibold text-green-600 flex items-center gap-2 mb-2">
                        <TestTube size={20} />
                        3. Thí nghiệm đơn giản tại nhà
                      </h4>
                      <div className="space-y-4">
                        {/* Thí nghiệm 1 */}
                        <div>
                          <strong>Thí nghiệm 1: Quan sát lực tĩnh điện</strong>
                          <ul className="list-disc list-inside ml-5 space-y-1">
                            <li>Dụng cụ: Bóng bay, mảnh giấy nhỏ</li>
                            <li>Cách làm: Cọ bóng bay vào tóc rồi đặt gần mảnh giấy</li>
                            <li>Giải thích: Electron di chuyển tạo lực hút tĩnh điện</li>
                          </ul>
                        </div>

                        {/* Thí nghiệm 2 */}
                        <div>
                          <strong>Thí nghiệm 2: Khuếch tán phân tử</strong>
                          <ul className="list-disc list-inside ml-5 space-y-1">
                            <li>Dụng cụ: Nước màu, cốc nước trong</li>
                            <li>Cách làm: Nhỏ một giọt nước màu vào cốc nước trong</li>
                            <li>Giải thích: Các nguyên tử và phân tử luôn chuyển động</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* 4. Những điều bất ngờ về nguyên tử */}
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="text-lg font-semibold text-green-600 flex items-center gap-2 mb-2">
                        <Lightbulb size={20} />
                        4. Những điều bất ngờ về nguyên tử
                      </h4>
                      <ul className="list-disc list-inside space-y-2">
                        <li>99.9999999999999% thể tích nguyên tử là khoảng trống</li>
                        <li>Nếu loại bỏ khoảng trống, toàn bộ nhân loại có thể thu nhỏ bằng một quả cam</li>
                        <li>Mỗi nguyên tử trong cơ thể bạn đã từng là một phần của ngôi sao</li>
                        <li>Nguyên tử không bao giờ "chết", chúng chỉ tái tổ hợp thành dạng khác</li>
                      </ul>
                    </div>
                  </div>

                  {/* III. Mẹo học tập hiệu quả */}
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">III. Mẹo học tập hiệu quả</h3>
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <ul className="list-decimal list-inside space-y-2">
                        <li>Liên hệ với đồ vật quen thuộc:
                          <ul className="list-disc list-inside ml-5">
                            <li>Hạt nhân như hạt nho ở giữa sân vận động</li>
                            <li>Electron như những con ong bay xung quanh tổ</li>
                          </ul>
                        </li>
                        <li>Sử dụng công cụ trực quan:
                          <ul className="list-disc list-inside ml-5">
                            <li>Xem video mô phỏng 3D về nguyên tử</li>
                            <li>Làm mô hình bằng đất nặn hoặc hạt</li>
                          </ul>
                        </li>
                        <li>Học qua trò chơi:
                          <ul className="list-disc list-inside ml-5">
                            <li>"Xếp electron" như chơi ghép hình</li>
                            <li>"Xây dựng nguyên tử" như chơi Minecraft</li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* IV. Câu hỏi tự luyện tập và đáp án */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">IV. Câu hỏi tự luyện tập và đáp án</h3>
                    
                    {/* Câu hỏi */}
                    <div className="mb-4 bg-purple-50 p-4 rounded-lg">
                      <h4 className="text-lg font-semibold text-indigo-600 mb-2">Câu hỏi</h4>
                      <ol className="list-decimal list-inside space-y-2">
                        <li>Tại sao nguyên tử trung hòa về điện tích?</li>
                        <li>Electron ở lớp ngoài cùng ảnh hưởng gì đến tính chất của nguyên tố?</li>
                        <li>Vì sao chúng ta không thể "nhìn thấy" nguyên tử bằng mắt thường?</li>
                        <li>Làm thế nào nguyên tử tạo nên mọi vật chất trong vũ trụ?</li>
                      </ol>
                    </div>

                    {/* Đáp án */}
                    <div className="bg-purple-50 p-4 rounded-lg text-sm">
                      <h4 className="text-lg font-semibold text-indigo-600 mb-2">Đáp án</h4>
                      <ol className="list-decimal list-inside space-y-4">
                        <li>
                          <strong>Nguyên tử trung hòa về điện tích vì:</strong>
                          <ul className="list-disc list-inside ml-5 space-y-1">
                            <li>Số proton (điện tích dương) trong hạt nhân bằng số electron (điện tích âm) trong vỏ nguyên tử</li>
                            <li>Mỗi proton mang điện tích +1, mỗi electron mang điện tích -1</li>
                            <li>Do đó tổng điện tích dương và âm bằng nhau, làm cho nguyên tử trung hòa</li>
                          </ul>
                        </li>
                        <li>
                          <strong>Electron lớp ngoài cùng ảnh hưởng đến tính chất nguyên tố vì:</strong>
                          <ul className="list-disc list-inside ml-5 space-y-1">
                            <li>Quyết định khả năng tham gia phản ứng hóa học</li>
                            <li>Ảnh hưởng đến khả năng liên kết với các nguyên tử khác</li>
                            <li>Xác định tính kim loại hay phi kim của nguyên tố</li>
                          </ul>
                        </li>
                        <li>
                          <strong>Không thể nhìn thấy nguyên tử bằng mắt thường vì:</strong>
                          <ul className="list-disc list-inside ml-5 space-y-1">
                            <li>Kích thước quá nhỏ (khoảng 10<sup>-10</sup> mét)</li>
                            <li>Nhỏ hơn nhiều lần bước sóng ánh sáng khả kiến</li>
                            <li>Mắt người chỉ có thể nhìn thấy vật có kích thước từ 0.1mm trở lên</li>
                          </ul>
                        </li>
                        <li>
                          <strong>Nguyên tử tạo nên vật chất trong vũ trụ thông qua:</strong>
                          <ul className="list-disc list-inside ml-5 space-y-1">
                            <li>Liên kết với nhau tạo thành phân tử</li>
                            <li>Phân tử kết hợp tạo thành các chất</li>
                            <li>Các chất kết hợp tạo nên mọi vật thể từ đơn giản đến phức tạp</li>
                          </ul>
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>

                {/* Video Section */}
                <div className="mt-8">
                  <h2 className="text-xl font-semibold text-blue-600 mb-4 flex items-center gap-2">
                    📺 Video Hướng Dẫn
                  </h2>
                  <div className="aspect-video">
                    <iframe 
                      width="560" 
                      height="315" 
                      src="https://www.youtube.com/embed/LhveTGblGHY?si=VIy-XGlQWtNTiMQJ" 
                      title="YouTube video player" 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                      referrerPolicy="strict-origin-when-cross-origin" 
                      allowFullScreen>
                    </iframe>
                  </div>
                </div>
              </div>
            </div>
          )}

          
        </CardContent>
      </Card>
    </div>
  );
};

export default EnglishReview;
