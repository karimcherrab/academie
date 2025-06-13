import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

export default function ThanksPage() {
//   const navigate = useNavigate();

  useEffect(() => {
    // يمكنك إضافة منطق إضافي إذا لزم الأمر
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-white to-indigo-50 px-4 text-right font-sans">
      <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-10 w-full max-w-2xl space-y-6 border border-indigo-100 text-indigo-800">
        <div className="text-center">
          <img src={logo} alt="مدرسة الجيل الذهبي" className="w-24 mx-auto mb-4" />
          <h1 className="text-3xl font-bold mb-2 text-indigo-700">📬 شكراً لتسجيلك!</h1>
          <p className="text-lg font-medium">
            تم تسجيل ابنك بنجاح في الدورات المختارة.
          </p>
          <p className="text-md mt-2 text-gray-700">
            سنتصل بك قريبًا لتأكيد التسجيل وتحديد مواعيد البداية.
          </p>
        </div>

        <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4 text-sm leading-relaxed text-gray-800">
          <h2 className="text-indigo-700 font-semibold text-lg mb-2">📍 معلومات المدرسة:</h2>
          <p><strong>🏫 الاسم: </strong> أكاديمية الجيل الذهبي</p>
          <p><strong>📍 العنوان: </strong>مجاور مركز موبليس - عين وسارة</p>
          <p><strong>📞 الهاتف: </strong>0775754711</p>
        </div>

    
      </div>
    </div>
  );
}
