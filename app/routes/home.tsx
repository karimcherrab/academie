import type { Route } from "./+types/home";
import { use, useState } from "react";
import explication01 from "../assets/explication01.png";

import explication02 from "../assets/explication02.jpg";
import explication03 from "../assets/explication03.png";
import explication04 from "../assets/explication4.png";
import explication05 from "../assets/explication05.png";

import TopBar from "~/Layout/TopBar";
import DynamicQuestion from "~/DynamicQuestion/DynamicQuestion";
import QuestionStep from "~/DynamicQuestion/QuestionStep";
import ProgressBar from "~/Layout/ProgressBar";
import Explication from "~/DynamicQuestion/Explication";
import ResultPage from "../Layout/ResultPage"
import Age from "~/age/Age";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const [step, setStep] = useState(0);
  const [resulte, setResulte] = useState(false);

  const s = [
    {
      question: "كم عمر طفلك؟",
      type: "image",
      niveau : 1,
      
      suggestions: [
        { label: "العمر: 5–6 سنوات →", icon: "👦", color: "blue" },
        { label: "العمر: 7 سنوات فما فوق →", icon: "👧", color: "pink" },
      ],

    },
    {
      question: "اختر جنس طفلك",
      type: "suggestion",
      niveau : 1,
      title:"ملف الطفل",

      suggestions: [
        { label: "ذكر", icon: "👦", color: "blue" },
        { label: "أنثى", icon: "👧", color: "pink" },
      ],
    },
    {
      question: "هل لدى طفلك إخوة أو أخوات؟",
      type: "yes_no_question",
      niveau : 1,
      title:"ملف الطفل",
      imgSrc:null,

      suggestions: [
        { label: "نعم", icon: "✔️", color: "red" },
        { label: "لا", icon: "❌", color: "green" },
      ],
    },
    {
      niveau : 1,
      type: "Explication",
      title:"نحن سعداء بوجودكم هنا!",
      explication:"لننشئ خطة تعليمية مخصصة تساعد طفلك على التعلم من خلال اللعب، من خلال دمج ألعاب ممتعة، وأوراق تمارين، ورسوم متحركة تفاعلية.",
      text_btn:"استمر", 
      imgSrc:explication01

    },
  

   
     {
    question: "هل سبق لطفلك حفظ سور قصيرة من القرآن الكريم؟",
    type: "yes_no_question",
    niveau: 2,
     imgSrc:null,
    title: "المعرفة والمهارات",
    suggestions: [
      { label: "نعم", icon: "✔️", color: "green" },
      { label: "لا", icon: "❌", color: "red" },
    ],
  },
  {
    question: "هل يستطيع طفلك التلاوة مع التجويد الأساسي؟",
    type: "yes_no_question",
    niveau: 2,
         imgSrc:null,

    title: "المعرفة والمهارات",
    suggestions: [
      { label: "نعم", icon: "✔️", color: "green" },
      { label: "لا", icon: "❌", color: "red" },
    ],
  },



  //6
  {
    question: "هل طفلك مهتم بالأرقام ويحب العد؟",
    type: "yes_no_question",
    niveau: 2,
         imgSrc:null,
    title: "المعرفة والمهارات",
    suggestions: [
      { label: "نعم", icon: "🧠", color: "green" },
      { label: "لا", icon: "❌", color: "red" },
    ],
  },
    {
      question:"هل يستطيع طفلك حل مسائل بسيطة في الجمع أو الطرح؟",
      type: "yes_no_question",
      niveau : 2,
            imgSrc:explication05,

      title:"المعرفة والمهارات",
      suggestions: [
        { label: "نعم", icon: "✔️", color: "green" },
      { label: "لا", icon: "❌", color: "red" },
      ],
    },
  
   
   {
      question:"هل يواجه صعوبة في التفكير الحسابي؟",
      type: "yes_no_question",
      niveau : 2,
      imgSrc:null,

      title:"المعرفة والمهارات",
      suggestions: [
            { label: "نعم", icon: "✔️", color: "green" },
      { label: "لا", icon: "❌", color: "red" },
      ],
    },
  


 {
      question:"هل يستطيع طفلك قراءة وفهم قصص قصيرة أو فقرات؟",
      type: "yes_no_question",
      niveau : 2,
      imgSrc:explication03,

      title:"المعرفة والمهارات",
      suggestions: [
         { label: "نعم", icon: "✔️", color: "green" },
      { label: "لا", icon: "❌", color: "red" },
      ],
    },



  
  {
    question: "هل طفلك يواجه صعوبات في القراءة أو الكتابة بالعربية؟",
    type: "yes_no_question",
    niveau: 2,
          imgSrc:null,

    title: "المعرفة والمهارات",
    suggestions: [
      { label: "نعم", icon: "📝", color: "orange" },
      { label: "لا", icon: "❌", color: "green" },
    ],
  },
  {
    question: "هل طفلك يخلط بين الحروف المتشابهة؟ (مثل ب، ت، ث)",
    type: "yes_no_question",
    niveau: 2,
              imgSrc:null,

    title: "المعرفة والمهارات",
    suggestions: [
      { label: "نعم", icon: "✔️", color: "green" },
      { label: "لا", icon: "❌", color: "red" },
    ],
  },

//11
  {
    question: "هل خط طفلك غير واضح أو يصعب قراءته؟",
    type: "yes_no_question",
    niveau: 2,
              imgSrc:null,

    title: "المعرفة والمهارات",
    suggestions: [
      { label: "نعم", icon: "✍️", color: "orange" },
      { label: "لا", icon: "❌", color: "green" },
    ],
  },
  {
    question: "هل يمسك طفلك القلم بطريقة غير صحيحة؟",
    type: "yes_no_question",
    niveau: 2,
              imgSrc:null,

    title: "المعرفة والمهارات",
    suggestions: [
      { label: "نعم", icon: "✏️", color: "red" },
      { label: "لا", icon: "❌", color: "green" },
    ],
  },









//13

  {
    question: "هل لدى طفلك خلفية بسيطة في اللغة الفرنسية؟",
    type: "yes_no_question",
    niveau: 2,
              imgSrc:null,

    title: "المعرفة والمهارات",
    suggestions: [
      { label: "نعم", icon: "🇫🇷", color: "blue" },
      { label: "لا", icon: "❌", color: "red" },
    ],
  },
  {
    question: "هل يستطيع طفلك التعرف على بعض الكلمات أو العبارات الفرنسية؟",
    type: "yes_no_question",
    niveau: 2,
              imgSrc:null,

    title: "المعرفة والمهارات",
    suggestions: [
      { label: "نعم", icon: "🔤", color: "green" },
      { label: "لا", icon: "❌", color: "red" },
    ],
  },
  {
    question: "هل سبق لطفلك تعلم الحروف أو الكلمات باللغة الإنجليزية؟",
    type: "yes_no_question",
    niveau: 2,
              imgSrc:null,

    title: "المعرفة والمهارات",
    suggestions: [
      { label: "نعم", icon: "🇬🇧", color: "blue" },
      { label: "لا", icon: "❌", color: "red" },
    ],
  },
  {
    question: "هل يحب طفلك الأغاني أو القصص الإنجليزية؟",
    type: "yes_no_question",
    niveau: 2,
              imgSrc:null,

    title: "المعرفة والمهارات",
    suggestions: [
      { label: "نعم", icon: "🎵", color: "green" },
      { label: "لا", icon: "❌", color: "red" },
    ],
  },
  {
    question: "هل يُظهر طفلك اهتمامًا بالرسم أو التلوين؟",
    type: "yes_no_question",
    niveau: 2,
              imgSrc:null,

    title: "المعرفة والمهارات",
    suggestions: [
      { label: "نعم", icon: "🎨", color: "orange" },
      { label: "لا", icon: "❌", color: "red" },
    ],
  },
  {
    question: "هل يستمتع طفلك بالأعمال اليدوية مثل القص واللصق؟",
    type: "yes_no_question",
    niveau: 2,
              imgSrc:null,

    title: "المعرفة والمهارات",
    suggestions: [
      { label: "نعم", icon: "✂️", color: "orange" },
      { label: "لا", icon: "❌", color: "red" },
    ],
  },
  {
    question: "هل ترغب في تعزيز القيم والسلوكيات الإيجابية لدى طفلك؟",
    type: "yes_no_question",
    niveau: 2,
              imgSrc:null,

    title: "المعرفة والمهارات",
    suggestions: [
      { label: "نعم", icon: "🌟", color: "green" },
      { label: "لا", icon: "❌", color: "red" },
    ],
  },
  {
    question: "هل طفلك يتفاعل بشكل إيجابي مع القصص الدينية أو الأحاديث؟",
    type: "yes_no_question",
    niveau: 2,
              imgSrc:null,

    title: "المعرفة والمهارات",
    suggestions: [
      { label: "نعم", icon: "📖", color: "blue" },
      { label: "لا", icon: "❌", color: "red" },
    ],
  },
     

        {
      niveau : 2,
      type: "Explication",
      title:"عمل جيد!",
      explication:"سوف نستخدم إجاباتكم لإنشاء خطة تعليمية مناسبة لطفلكم، تغطي المواضيع الأساسية للمرحلة التمهيدية.",
      text_btn:"استمر", 
      imgSrc:explication04

    },
   
      {
      question:"هل يقضي طفلك وقتًا طويلاً أمام الشاشة في لعب الألعاب ومشاهدة الرسوم المتحركة. أخشى أن يُفسده ذلك أو يؤدي إلى سلوك سيئ.؟",
      type: "yes_no_question",
      niveau : 3,
            imgSrc:null,
      title:"خطط التعلم",
      suggestions: [
        { label: "نعم", icon: "✔️", color: "red" },
        { label: "لا", icon: "❌", color: "green" },
      ],
    },
    {
      question:"كم مرة يقوم طفلك بنوبات غضب؟",
      type: "suggestion",
      niveau : 3,
      title:"خطط التعلم",
      suggestions: [
        { label: "كل يوم", icon: "", color: "blue" },
        { label: "مرات في الأسبوع", icon: "", color: "pink" },
        { label: "نادرًا ما يحدث ذلك", icon: "", color: "pink" },

      ],
    },
      {
      question:"كم من الوقت تقضيه مع طفلك؟",
      type: "suggestion",
      niveau : 3,
      title:"خطط التعلم",
      suggestions: [
        { label: "معظم الوقت", icon: "", color: "blue" },
        { label: "كل وقت فراغي", icon: "", color: "pink" },
        { label: "عدة ساعات في اليوم", icon: "", color: "pink" },
        { label: "ليس كثيرًا، فأنا مشغول أغلب الوقت", icon: "", color: "pink" },


      ],
    },
    {
  question: "صف نمط كلام طفلك",
  type: "suggestion",
  niveau: 3,
  title: "خطط التعلم",
  suggestions: [
    { label: "طليق", icon: "", color: "blue" },
    { label: "متقطع", icon: "", color: "pink" },
    { label: "متردد", icon: "", color: "pink" },
    { label: "هادئ", icon: "", color: "pink" },
    { label: "مرتفع الصوت", icon: "", color: "pink" },
  ],
}, 
  {
      niveau : 3,
      type: "Explication",
      title:"اقتربنا!",
      explication:"نحن بحاجة إلى فهم تفضيلات طفلك من أجل تحسين تجربة التعلم. لم يتبقَّ سوى بضع خطوات فقط!",
      text_btn:"استمر", 
      imgSrc:explication02

    },
    {
  question: "ما هي الطريقة المفضلة لطفلك في اللعب؟",
  type: "suggestion",
  niveau: 4,
  title: "تفضيلات التعلم",
  suggestions: [
    { label: "مع الآخرين", icon: "", color: "blue" },
    { label: "بشكل مستقل", icon: "", color: "pink" },
  ],
},{
  question: "هل يستطيع طفلك استخدام الهاتف أو الجهاز اللوحي بمفرده؟",
  type: "yes_no_question",
  niveau: 4,
            imgSrc:null,

  title: "تفضيلات التعلم",
  suggestions: [
     { label: "نعم", icon: "✔️", color: "red" },
        { label: "لا", icon: "❌", color: "green" },
  ],
} , 
{
  question: "ما أنواع الأنشطة التي يحتاجها طفلك؟",
  type: "suggestion",
  niveau: 4,
  title: "تفضيلات التعلم",
  suggestions: [
    { label: "ألعاب وأنشطة جديدة", icon: "", color: "blue" },
    { label: "التحضير للتعليم", icon: "", color: "pink" },
    { label: "تنويع الروتين اليومي", icon: "", color: "green" },
  ],
},{
  question: "ما هي أنشطة التعلم التي يفضلها طفلك؟",
  type: "suggestion",
  niveau: 4,
  title: "تفضيلات التعلم",
  suggestions: [
    { label: "فيديوهات", icon: "", color: "blue" },
    { label: "ألعاب", icon: "", color: "pink" },
    { label: "كتب", icon: "", color: "green" },
    { label: "أنشطة بدون إنترنت", icon: "", color: "orange" },
  ],
}
  ];

  

  const updatedSteps = s.map(step => ({
  ...step,
  answer: null
}));

const [steps , setSteps] = useState(updatedSteps)

const handleSuggestionClick = (index, suggestionLabel) => {
  setSteps(prev =>
    prev.map((item, i) =>
      i === index ? { ...item, answer: suggestionLabel } : item
    )
  );
};

  // Handle select for all step types that require interaction
  function handleSelect(selected: string) {
 
    handleSuggestionClick(step ,selected )

    // Move to next step or loop back or do nothing if last step
    setStep((currentStep) => Math.min(currentStep + 1, steps.length - 1));
    if (step=== s.length-1){
        setResulte(true)
    }
  }

  const currentStep = steps[step];

  return (
    <div className="min-h-screen flex flex-col gap-4">


 

      <TopBar setStep={setStep}   step= {step} />


      {
        !resulte ? <div className="w-full h-full">
           {step !== 0 && (currentStep.type === "suggestion" || currentStep.type === "yes_no_question") && (
          <ProgressBar step={currentStep.niveau} totalSteps={5} />

      )}

      {step === 0 && <Age setStep={setStep}  setSteps={setSteps} steps={steps} />}

      {step !== 0 && currentStep.type === "suggestion" && (
        <DynamicQuestion
          step={step + 1}
          totalSteps={steps.length}
          title={currentStep.title}
          question={currentStep.question}
          options={currentStep.suggestions.map((s) => s.icon + " " + s.label)}
          onSelect={handleSelect}
        />
      )}

      {step !== 0 && currentStep.type === "yes_no_question" && (
        <QuestionStep
          title={currentStep.title}
          question={currentStep.question}
          suggestions={currentStep.suggestions}
          onSelect={handleSelect}
          imgSrc = {currentStep.imgSrc}
        />
      )}

      {step !== 0 && currentStep.type === "Explication" && (
        <Explication
          title={currentStep.title}
          explication={currentStep.explication}
          imgSrc={currentStep.imgSrc}
          text_btn={currentStep.text_btn}
          setStep={setStep}
          step= {step}
        />
      )}
        </div> : <ResultPage steps={steps}  setStep={setStep}/>
      }



       


      {/* */}
    </div>
  );
}
