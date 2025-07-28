import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-purple-100 flex items-center justify-center p-4 pt-20">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-3xl w-full">
        <h2 className="text-3xl font-bold text-purple-700 mb-6 text-center">About Us</h2>

        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          Welcome to our platform! We are passionate about sharing knowledge and making learning accessible to everyone. 
          Our goal is to create high-quality resources, courses, and tools that help students and professionals grow in their careers.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          This project is built using modern web technologies like React and Tailwind CSS, focusing on speed, simplicity, and responsiveness. 
          Whether you're looking for free resources or in-depth learning paths, we’ve got you covered!
        </p>

        <p className="text-gray-700 text-lg leading-relaxed">
          Thank you for visiting. If you have any questions or suggestions, feel free to reach out through our <a href="/contact" className="text-purple-600 underline">Contact Page</a>.
        </p>
      </div>
    </div>
  );
};

export default About;
