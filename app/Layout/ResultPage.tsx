import { useEffect, useState } from "react";
import { db } from "../Layout/firebase.js";
import { collection, addDoc } from "firebase/firestore";
import quran from "../assets/quran.svg";
import drew from "../assets/drew2.jpg";
import sorobane from "../assets/sorobane.jpg";
import math from "../assets/math.jpg";
import arabe from "../assets/arabe.jpg";
import colors from "../assets/colors.jpg";
import anglais from "../assets/anglais.jpg";
import french from "../assets/french.jpg";
import rel from "../assets/rel.jpg";
import { useNavigate } from "react-router-dom";



const Button = ({ children, className = "", ...props }) => (
  <button
    {...props}
    className={`rounded-full px-6 py-3 font-semibold text-lg shadow-md hover:shadow-lg transition duration-300 ${className}`}
  >
    {children}
  </button>
);

const Modal = ({
  show,
  onClose,
  onSave,
  name,
  setName,
  phone,
  setPhone,
  allCourses,
  selectedCourses,
  setSelectedCourses,
  error,
}) => {
  if (!show) return null;
  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50 px-2 sm:px-4">
      <div className="bg-white rounded-3xl w-full sm:w-[70%]  p-4 sm:p-8 shadow-2xl space-y-6 text-right relative overflow-y-auto max-h-[95vh]">
        <h2 className="text-2xl font-bold text-indigo-700 text-center mb-2">📋 تسجيل الطالب</h2>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded-lg text-sm shadow-sm flex items-center gap-2">
            <span className="text-xl">⚠️</span>
            {error}
          </div>
        )}

        <div className="space-y-4">
          <div>
            <label className="block font-medium text-gray-600 mb-1">اسم الطالب</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              placeholder="أدخل اسم الطالب"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-600 mb-1">رقم الهاتف</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              placeholder="أدخل رقم الهاتف"
            />
          </div>

          <div>
            <h3 className="font-semibold text-gray-700 mb-2">اختر الدورات:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {allCourses.map((course, idx) => (
                <label
                  key={idx}
                  className="flex items-center justify-end bg-gray-100 hover:bg-indigo-50 p-2.5 rounded-xl border border-gray-200 transition"
                >
                  <span className="mr-3 text-sm font-medium text-gray-700">{course}</span>
                  <input
                    type="checkbox"
                    checked={selectedCourses.includes(course)}
                    onChange={() => {
                      setSelectedCourses((prev) =>
                        prev.includes(course)
                          ? prev.filter((c) => c !== course)
                          : [...prev, course]
                      );
                    }}
                    className="accent-indigo-600 w-5 h-5"
                  />
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-between pt-2">
          <Button onClick={onClose} className="bg-gray-200 text-gray-700 hover:bg-gray-300">إلغاء</Button>
          <Button onClick={onSave} className="bg-indigo-600 text-white hover:bg-indigo-700">تسجيل</Button>
        </div>
      </div>
    </div>
  );
};

export default function ResultPage({ steps , setStep}) {

    const navigate = useNavigate();

  const [recommendations, setRecommendations] = useState([]);
  const [availableCourses, setAvailableCourses] = useState([]);
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [studentName, setStudentName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");

  const allCourses = [
    "حفظ القرآن الكريم",
    "دورة سوروبان",
    "التأسيس و الدعم في اللغة العربية",
    "نشاطات تحسين الخط",
    "التأسيس و الدعم في الرياضيات",
    "التأسيس و الدعم في اللغة الفرنسية",
    "التأسيس و الدعم في اللغة الانجليزية",
    "ورش تلوين، أشغال ورقية، وتلوين بالطين والماء",
    "حلقات دينية و التربية الصحيحة",
  ];

  const courseImages = [
    quran,
    sorobane,
    arabe,
    drew,
    math,
    french,
    anglais,
    colors,
    rel,
  ];

  useEffect(() => {
    const recList = [];
    const checkAndAdd = (cond, course) => cond && recList.push(course);

    checkAndAdd(true, allCourses[0]);
    checkAndAdd(steps[6]?.answer === "نعم" && steps[7]?.answer === "نعم", allCourses[1]);
    checkAndAdd([steps[9], steps[10], steps[11]].some(s => s?.answer === "لا"), allCourses[2]);
    checkAndAdd([steps[12], steps[13]].some(s => s?.answer === "لا"), allCourses[3]);
    checkAndAdd(steps[7]?.answer === "لا" && steps[8]?.answer === "لا", allCourses[4]);
    checkAndAdd([steps[13], steps[14]].some(s => s?.answer === "لا"), allCourses[5]);
    checkAndAdd([steps[15], steps[16]].some(s => s?.answer === "لا"), allCourses[6]);
    checkAndAdd(steps[17]?.answer === "نعم" && steps[18]?.answer === "نعم", allCourses[7]);
    checkAndAdd(steps[19]?.answer === "نعم" && steps[20]?.answer === "نعم", allCourses[8]);

    setRecommendations(recList);
    setAvailableCourses(allCourses.filter((c) => !recList.includes(c)));
  }, [steps]);

  const validateInputs = () => {
    if (!studentName.trim()) {
      setError("⚠️ الرجاء إدخال اسم الطالب.");
      return false;
    }
    if (!/^(05|06|07)\d{8}$/.test(phoneNumber)) {
      setError("⚠️ يجب أن يكون رقم الهاتف مكونًا من 10 أرقام ويبدأ بـ 05 أو 06 أو 07.");
      return false;
    }
    if (selectedCourses.length === 0) {
      setError("⚠️ يجب عليك اختيار دورة واحدة على الأقل.");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = async () => {
    if (!validateInputs()) return;
    try {
      await addDoc(collection(db, "registrations"), {
        name: studentName,
        phone: phoneNumber,
        courses: selectedCourses,
        timestamp: new Date(),
        called: false,
      });
     
    navigate("/confirmation"); // 🔁 Redirects to /confirmation
      setShowModal(false);
      setStudentName("");
      setPhoneNumber("");
      setSelectedCourses([]);
      
    } catch (err) {
      console.error("❌ فشل في حفظ البيانات:", err);
      alert("حدث خطأ أثناء حفظ البيانات. حاول مرة أخرى.");
    }
  };

  return (
    <div className="p-2 sm:p-6 space-y-6 w-full mx-auto text-right font-sans bg-gradient-to-b from-white to-indigo-50 min-h-screen">
      <h1 className="text-2xl sm:text-3xl font-extrabold text-center text-indigo-700">نتيجة تقييم الطفل</h1>

      <section className="">
        <h2 className="text-2xl font-bold text-center text-indigo-700 mb-3">✅ الخطة التعليمية المقترحة</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {recommendations.map((course, i) => (
            <div
              key={i}
              className="bg-white border border-indigo-200 rounded-xl shadow-md p-2.5 flex items-center justify-end gap-2 hover:shadow-lg transition duration-300"
            >
              <h3 className="text-lg font-semibold text-indigo-800">{course}</h3>
              <img
                src={courseImages[allCourses.indexOf(course)] || quran}
                alt={course}
                className="w-14 h-14 rounded-full border-2 border-indigo-300 px-0.5"
              />
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-indigo-700 mt-10 mb-4">دورات أخرى متوفرة</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {availableCourses.map((course, i) => (
            <div
              key={i}
              className="bg-white border border-indigo-200 rounded-xl shadow-md p-2.5 flex items-center justify-end gap-4 hover:shadow-lg transition duration-300"
            >
              <h3 className="text-lg font-semibold text-indigo-800">{course}</h3>
              <img
                src={courseImages[allCourses.indexOf(course)] || quran}
                alt={course}
                className="w-14 h-14 rounded-full border-2 border-indigo-300 px-0.5"
              />
            </div>
          ))}
        </div>
      </section>

      <Button
        onClick={() => {
          setSelectedCourses(recommendations);
          setShowModal(true);
        }}
        className="w-full bg-indigo-600 text-white text-lg hover:bg-indigo-700 "
      >
        📥 سجل الآن في الدورات المختارة
      </Button>

      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        onSave={handleSubmit}
        name={studentName}
        setName={setStudentName}
        phone={phoneNumber}
        setPhone={setPhoneNumber}
        allCourses={allCourses}
        selectedCourses={selectedCourses}
        setSelectedCourses={setSelectedCourses}
        error={error}
        
      />
    </div>
  );
}
