import React from 'react';

const EnrollNow = () => {
  const course = {
    title: "UPSC CSE MAINS OPTIONAL TEST SERIES 2025",
    validity: "6 months",
    description: "📑 UPSC CSE MAINS OPTIONAL TEST SERIES 2025.\n\n📚 Political Science (PSIR) Freedom Module Test Series. (Offline+Online)",
    programDetails: "✒️ PSIR - Answer Writing and Test Series Program.",
    startDate: "3rd October 2024",
    time: "10:30 am to 1:30 pm",
    features: [
      "Comprehensive syllabus coverage through tests.",
      "Detailed discussion after every test by experienced faculty.",
      "Model answers of all tests as per UPSC standards.",
      "Answer assessment within 10 days."
    ]
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-lg w-full p-8 bg-white rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
        <h2 className="text-3xl font-extrabold text-blue-600 mb-4 text-center">{course.title}</h2>
        <p className="text-gray-600 mb-2 text-center"><strong>Validity:</strong> {course.validity}</p>
        <p className="text-gray-800 mb-2 text-center">{course.description}</p>
        <p className="text-gray-800 mb-4 text-center">{course.programDetails}</p>
        <div className="text-center mb-4">
          <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">{`Starting from: ${course.startDate}`}</span>
          <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">{`Time: ${course.time}`}</span>
        </div>
        <p className="text-gray-800 mb-2 font-semibold text-lg">Features:</p>
        <ul className="list-disc list-inside mb-4">
          {course.features.map((feature, index) => (
            <li key={index} className="text-gray-700 mb-1">{feature}</li>
          ))}
        </ul>
        <div className="flex justify-center">
          <button className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200">
            Pay 
          </button>
        </div>
      </div>
    </div>
  );
};

export default EnrollNow;
