import Image from 'next/image';

const Cards = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-xs w-full transform hover:scale-105 transition-transform duration-300 ease-in-out">
      <Image
        src="/img.png" // Update this image path to match your course image.
        alt="Course Image"
        width={400}
        height={250}
        className="w-full h-56 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">Mastering Web Development</h3>
        <p className="text-gray-700 mb-4">
          Dive deep into web development with our comprehensive course covering HTML, CSS, JavaScript, and more!
        </p>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src="/img.png" // Update this image path for the instructor's avatar.
              alt="Instructor Avatar"
              width={32}
              height={32}
              className="w-8 h-8 rounded-full mr-2 object-cover"
            />
            <span className="text-gray-800 font-semibold">Jane Smith</span>
          </div>
          <span className="text-sm text-gray-600">Updated 1 day ago</span>
        </div>
        <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default Cards;
