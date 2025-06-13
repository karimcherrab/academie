import { useEffect, useState } from "react";
import { db } from "../Layout/firebase";
import { collection, getDocs, updateDoc, doc } from "firebase/firestore";

// بطاقة عرض المسجل
const Card = ({ children }) => (
  <div className="border rounded-xl p-4 shadow-md bg-white text-center">{children}</div>
);

// الصفحة الرئيسية
export default function AllRegistrationsPage() {
  const [registrations, setRegistrations] = useState([]);

  // تحميل البيانات من Firebase
  useEffect(() => {
    const fetchData = async () => {
      const snapshot = await getDocs(collection(db, "registrations"));
      const data = snapshot.docs.map((docSnap) => ({
        id: docSnap.id,
        ...docSnap.data(),
      }));
      setRegistrations(data);
    };
    fetchData();
  }, []);

  // عند الضغط على "تم الاتصال"
  const handleCallToggle = async (id, currentStatus) => {
    const docRef = doc(db, "registrations", id);
    await updateDoc(docRef, { called: !currentStatus });

    // تحديث الحالة في الواجهة
    setRegistrations((prev) =>
      prev.map((reg) =>
        reg.id === id ? { ...reg, called: !currentStatus } : reg
      )
    );
  };

  return (
    <div className="w-full mx-auto p-4 space-y-6 font-sans min-h-screen text-right">
      <h1 className="text-2xl font-bold text-center mb-6">📋 قائمة المسجلين</h1>

      {registrations.length === 0 ? (
        <p className="text-center text-gray-500">لا يوجد بيانات حالياً...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4 text-center">
          {registrations.map((reg) => (
            <Card key={reg.id}>
              <h2 className="text-lg font-semibold">{reg.name}</h2>
              <p className="text-sm text-gray-600">{reg.phone}</p>

              {/* زر تم الاتصال */}
              <div
                    onClick={() => handleCallToggle(reg.id, reg.called)}
                    className={`mt-3 flex items-center justify-center gap-2 px-4 py-2 rounded-full text-white text-sm font-medium shadow transition duration-200 ${
                        reg.called ? "bg-green-600 hover:bg-green-700" : "bg-gray-300  hover:bg-blue-700 text-center "
                    }`}
                    >
                    <span className="text-xl">📞</span>
                    {reg.called ? "تم الاتصال" : "اتصل الآن"}
              </div>


              {/* عرض الدورات */}
              <div className="mt-4 space-y-1 text-sm text-right">
                {reg.courses?.map((c, idx) => (
                  <div key={idx} className="bg-gray-100 rounded p-2">
                    📘 {typeof c === "string" ? c : c.title}
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
