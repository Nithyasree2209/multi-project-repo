
import Sidebar from "./Sidebar";
// Import the image at the top
import beautifulScenery from "../assets/ns.jpg";

function Learning() {
  return (
    <div className="flex bg-gray-50 min-h-screen">
      <Sidebar />
      <div className="ml-64 p-6 w-full">
        <h1 className="text-3xl font-bold mb-4 text-blue-700">
          HTML (HyperText Markup Language)
        </h1>

        <p className="mb-4 text-gray-700 leading-relaxed">
          HTML stands for <strong>HyperText Markup Language</strong>. It is the
          standard language used to create and design the structure of web
          pages. HTML provides the basic building blocks for web content by
          using a series of elements or tags.
        </p>

        <h2 className="text-2xl font-semibold mb-2 text-green-700">
          📌 Key Features of HTML:
        </h2>
        <ul className="list-disc list-inside mb-4 space-y-1 text-gray-700">
          <li>Defines the structure and layout of web pages.</li>
          <li>
            Uses elements like headings, paragraphs, links, images, and more.
          </li>
          <li>
            Supports semantic tags like <code>&lt;header&gt;</code>,{" "}
            <code>&lt;footer&gt;</code>, <code>&lt;article&gt;</code>, and{" "}
            <code>&lt;section&gt;</code>.
          </li>
          <li>
            HTML5 introduced new features like video/audio embedding, canvas,
            and more.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-2 text-green-700">
          💡 Basic HTML Document Structure:
        </h2>
        <pre className="bg-gray-800 text-white p-4 rounded mb-4 overflow-x-auto text-sm">
          {`<!DOCTYPE html>
<html>
<head>
  <title>My First HTML Page</title>
</head>
<body>
  <h1>Welcome to My Website</h1>
  <p>This is a paragraph.</p>
</body>
</html>`}
        </pre>

        <h2 className="text-2xl font-semibold mb-4 text-green-700">
          🔖 Common HTML Tags (Complete List):
        </h2>

        {/* Document Metadata */}
        <h3 className="text-xl font-semibold mb-2 text-blue-600">📄 Document Metadata</h3>
        <ul className="list-disc list-inside mb-4 text-gray-700 space-y-1">
          <li><code>&lt;!DOCTYPE&gt;</code> – Document type</li>
          <li><code>&lt;html&gt;</code> – Root element</li>
          <li><code>&lt;head&gt;</code> – Metadata container</li>
          <li><code>&lt;title&gt;</code> – Page title</li>
          <li><code>&lt;base&gt;</code> – Base URL</li>
          <li><code>&lt;link&gt;</code> – Link external files</li>
          <li><code>&lt;meta&gt;</code> – Metadata</li>
          <li><code>&lt;style&gt;</code> – Internal CSS</li>
        </ul>

        {/* Sectioning Tags */}
        <h3 className="text-xl font-semibold mb-2 text-blue-600">📚 Sectioning</h3>
        <ul className="list-disc list-inside mb-4 text-gray-700 space-y-1">
          <li><code>&lt;body&gt;</code>, <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code></li>
          <li><code>&lt;main&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;article&gt;</code></li>
          <li><code>&lt;aside&gt;</code>, <code>&lt;footer&gt;</code>, <code>&lt;address&gt;</code></li>
        </ul>

        {/* Text Content */}
        <h3 className="text-xl font-semibold mb-2 text-blue-600">📝 Text Content</h3>
        <ul className="list-disc list-inside mb-4 text-gray-700 space-y-1">
          <li><code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code> – Headings</li>
          <li><code>&lt;p&gt;</code>, <code>&lt;br&gt;</code>, <code>&lt;hr&gt;</code>, <code>&lt;pre&gt;</code></li>
          <li><code>&lt;blockquote&gt;</code>, <code>&lt;ol&gt;</code>, <code>&lt;ul&gt;</code>, <code>&lt;li&gt;</code></li>
          <li><code>&lt;dl&gt;</code>, <code>&lt;dt&gt;</code>, <code>&lt;dd&gt;</code></li>
          <li><code>&lt;figure&gt;</code>, <code>&lt;figcaption&gt;</code></li>
          <li><code>&lt;div&gt;</code>, <code>&lt;span&gt;</code></li>
        </ul>

        {/* Inline Text Semantics */}
        <h3 className="text-xl font-semibold mb-2 text-blue-600">🔤 Inline Text Semantics</h3>
        <ul className="list-disc list-inside mb-4 text-gray-700 space-y-1">
          <li><code>&lt;a&gt;</code>, <code>&lt;em&gt;</code>, <code>&lt;strong&gt;</code></li>
          <li><code>&lt;small&gt;</code>, <code>&lt;mark&gt;</code>, <code>&lt;abbr&gt;</code></li>
          <li><code>&lt;cite&gt;</code>, <code>&lt;code&gt;</code>, <code>&lt;sub&gt;</code>, <code>&lt;sup&gt;</code></li>
          <li><code>&lt;i&gt;</code>, <code>&lt;b&gt;</code>, <code>&lt;u&gt;</code>, <code>&lt;time&gt;</code>, <code>&lt;wbr&gt;</code></li>
        </ul>

        {/* Example before Summary */}
        <h2 className="text-2xl font-semibold mb-4 text-green-700">
          💡 Examples of HTML Tags in Action:
        </h2>

        {/* Image Example */}
        <h3 className="text-xl font-semibold mb-2 text-blue-600">🖼️ Image Example</h3>
        <p className="mb-4 text-gray-700">
          Here is an example of an image tag that embeds an image in a webpage:
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded mb-4 overflow-x-auto text-sm">
          {`<img src="image.jpg" alt="A Beautiful Scenery" width="500" height="300">`}
        </pre>
        {/* Using imported image */}
        <img src={beautifulScenery} alt="A Beautiful Scenery" width="500" height="300" className="mb-4" />

        {/* Link Example */}
        <h3 className="text-xl font-semibold mb-2 text-blue-600">🔗 Link Example</h3>
        <p className="mb-4 text-gray-700">
          A simple example of a link that takes you to another page:
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded mb-4 overflow-x-auto text-sm">
          {`<a href="https://www.example.com">Click Here to Visit Example</a>`}
        </pre>
        <a href="https://www.example.com" className="text-blue-600 hover:underline">
          Click Here to Visit Example
        </a>

        {/* Form Example */}
        <h3 className="text-xl font-semibold mb-2 text-blue-600">📝 Form Example</h3>
        <p className="mb-4 text-gray-700">
          Below is an example of a simple form with text inputs:
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded mb-4 overflow-x-auto text-sm">
          {`<form action="/submit" method="post">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required>

  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>

  <button type="submit">Submit</button>
</form>`}
        </pre>
        <form className="mb-4">
          <label htmlFor="name" className="block mb-1 text-gray-700">Name:</label>
          <input type="text" id="name" name="name" className="border rounded p-2 w-full mb-4" required />

          <label htmlFor="email" className="block mb-1 text-gray-700">Email:</label>
          <input type="email" id="email" name="email" className="border rounded p-2 w-full mb-4" required />

          <button type="submit" className="bg-blue-600 text-white p-2 rounded">Submit</button>
        </form>

        <h2 className="text-2xl font-semibold mb-2 text-green-700">
          🎥 Multimedia in HTML:
        </h2>
        <p className="mb-2 text-gray-700">
          HTML supports multimedia elements to embed videos and audio files:
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded mb-4 overflow-x-auto text-sm">
          {`<video controls>
  <source src="movie.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>`}
        </pre>

        <h2 className="text-2xl font-semibold mb-2 text-green-700">🧠 Summary:</h2>
        <p className="text-gray-700">
          HTML is the backbone of any website. Learning HTML is the first step
          toward becoming a web developer. Once you're comfortable with HTML,
          the next steps are learning CSS to style your content and JavaScript
          to make it interactive.
        </p>
      </div>
    </div>
  );
}

export default Learning;
