
import Sidebar from "./Sidebar";

function Csss() {
  return (
    <div className="flex">
      <Sidebar />

      {/* Content beside the fixed sidebar */}
      <div className="ml-64 p-6 bg-gray-100 min-h-screen w-full">
        <div className="bg-white rounded-2xl shadow-lg p-6">
          {/* Main Title */}
          <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 mb-8 underline underline-offset-8">
            CSS Property Cheat Sheet
          </h1>

          {/* Styled Preformatted Text */}
          <pre className="whitespace-pre-wrap text-sm text-gray-800 font-mono leading-relaxed">
<span className="text-lg font-semibold text-blue-600 mb-2 inline-block">/* Box Model */</span>
{`
margin: 20px;
padding: 20px;
border: 2px solid black;
border-radius: 10px;
box-sizing: border-box;
`}

<span className="text-lg font-semibold text-purple-600 mb-2 inline-block">/* Dimensions */</span>
{`
width: 300px;
height: 300px;
max-width: 100%;
min-height: 100px;
`}

<span className="text-lg font-semibold text-pink-600 mb-2 inline-block">/* Background */</span>
{`
background-color: #e0e0e0;
background-image: linear-gradient(to right, #ffcc70, #ff7e5f);
background-repeat: no-repeat;
background-size: cover;
background-position: center;
`}

<span className="text-lg font-semibold text-yellow-700 mb-2 inline-block">/* Text & Font */</span>
{`
color: #333;
font-size: 18px;
font-weight: bold;
font-family: Arial, sans-serif;
line-height: 1.5;
letter-spacing: 1px;
text-align: center;
text-transform: uppercase;
text-decoration: underline;
white-space: nowrap;
word-break: break-word;
`}

<span className="text-lg font-semibold text-green-700 mb-2 inline-block">/* Flexbox */</span>
{`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
flex-wrap: wrap;
gap: 10px;
`}

<span className="text-lg font-semibold text-cyan-700 mb-2 inline-block">/* Grid */</span>
{`
display: grid;
grid-template-columns: 1fr 1fr;
grid-gap: 10px;
`}

<span className="text-lg font-semibold text-orange-700 mb-2 inline-block">/* Positioning */</span>
{`
position: relative;
top: 10px;
left: 10px;
z-index: 2;
`}

<span className="text-lg font-semibold text-rose-700 mb-2 inline-block">/* Overflow */</span>
{`
overflow: hidden;
overflow-x: scroll;
overflow-y: auto;
`}

<span className="text-lg font-semibold text-emerald-700 mb-2 inline-block">/* Cursor & Visibility */</span>
{`
cursor: pointer;
visibility: visible;
opacity: 0.9;
`}

<span className="text-lg font-semibold text-indigo-700 mb-2 inline-block">/* Transform & Animation */</span>
{`
transform: scale(1.05) rotate(2deg);
transition: all 0.3s ease;
animation: fadeIn 1s ease-in-out;
`}

<span className="text-lg font-semibold text-gray-700 mb-2 inline-block">/* Shadow */</span>
{`
box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
text-shadow: 1px 1px 2px gray;
`}

<span className="text-lg font-semibold text-fuchsia-700 mb-2 inline-block">/* List & Table */</span>
{`
list-style: none;
table-layout: fixed;
border-collapse: collapse;
`}

<span className="text-lg font-semibold text-teal-700 mb-2 inline-block">/* Misc */</span>
{`
pointer-events: auto;
user-select: none;
clip-path: circle(70%);
filter: blur(0px) brightness(1.2);
-webkit-appearance: none;
`}
          </pre>
        </div>
      </div>
    </div>
  );
}

export default Csss;
