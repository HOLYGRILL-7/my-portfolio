const GetInTouch = () => {
  return (
    <div className="h-50 bg-gray-50 py-20 px-10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Get In <span className="text-violet-700">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            I'd love to hear from you! Say hello, through any of the channels below.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white w-full rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="text-4xl mb-4">📧</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
            <p className="text-gray-600 mb-4">Drop me a line anytime</p>
            <a
              href="mailto:bismarkjonesoduro@gmail.com"
              className="inline-block bg-violet-700 text-white px-6 py-3 rounded-lg hover:bg-violet-800 transition-colors duration-200"
            >
              Send Email
            </a>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="text-4xl mb-4">💼</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              LinkedIn
            </h3>
            <p className="text-gray-600 mb-4">Let's connect professionally</p>
            <a
              href="https://www.linkedin.com/in/praise-jones-oduro-65a47a253/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Connect
            </a>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="text-4xl mb-4">🐙</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">GitHub</h3>
            <p className="text-gray-600 mb-4">Explore my code. <br /> A click away</p>
            <a
              href="https://github.com/HOLYGRILL-7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200"
            >
              View Profile
            </a>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="text-4xl mb-4">📱</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone</h3>
            <p className="text-gray-600 mb-4">Let's have a chat. <br /> A chat away</p>
            <a
              href="tel:+233245975593"
              className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors duration-200"
            >
              Call Now
            </a>
          </div>
        </div>

        {/* <div className="mt-16 text-center">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Based in Ghana 🇬🇭
            </h3>
            <p className="text-gray-600 mb-4">
              Located in the heart of West Africa, I'm available for remote work and local collaborations.
            </p>
            <p className="text-sm text-gray-500">
              Response time: Usually within 24 hours
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default GetInTouch;
