function Css() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center">
      <div className="w-full max-w-xs bg-white p-8 rounded-lg shadow-lg">
<h1 className="text-center text-4xl font-serif font-semibold">Instagram</h1>

        {/* Form Section */}
        <form>
          {/* Username Input */}
          <input
            type="text"
            placeholder="Phone number, username, or email"
            className="w-full p-3 mb-4 mt-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          {/* Password Input */}
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          {/* Login Button */}
          <button
            type="submit"
            className="w-full p-3 mb-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
          >
            Log In
          </button>

          {/* Forgot Password Link */}
          <div className="text-center mb-4">
            <a href="#" className="text-blue-500 text-sm hover:underline">
              Forgot password?
            </a>
          </div>
        </form>

        {/* Separator */}
        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-4 text-gray-500">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Sign up link */}
        <div className="text-center">
          <span className="text-sm text-gray-500">
            Don't have an account?{' '}
            <a href="#" className="text-blue-500 hover:underline">
              Sign up
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Css;
