import Sidebar from "./Sidebar";

function Javascript() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 p-6 bg-gray-100 min-h-screen ml-64">
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-400 mb-4 underline underline-offset-8">
            JavaScript Core Concepts
          </h1>

          {/* FUNDAMENTALS */}
          <Section title="Variables & Data Types" color="text-blue-600">
            JavaScript allows you to store data in variables using <code>let</code>, <code>const</code>, or <code>var</code>.
            <br />
            - <code>let</code>: Allows reassigning values.
            <br />
            - <code>const</code>: Creates constants that cannot be reassigned.
            <br />
            - <code>var</code>: Is function-scoped and can be re-declared.
            <br />
            Common data types in JavaScript:
            <br />
            - <code>string</code>, <code>number</code>, <code>boolean</code>, <code>null</code>, <code>undefined</code>, and <code>object</code>.
          </Section>

          <Section title="Functions" color="text-green-600">
            Functions are reusable blocks of code. You define them using the <code>function</code> keyword.
            <br />
            - Named or anonymous functions.
            <br />
            - Arrow functions provide shorter syntax and lexical <code>this</code>.
          </Section>

          <Section title="Scope" color="text-lime-600">
            Scope determines the accessibility of variables:
            <br />
            - <strong>Global Scope:</strong> Accessible everywhere.
            <br />
            - <strong>Function Scope:</strong> Only within the function.
            <br />
            - <strong>Block Scope:</strong> Limited to block <code>&#123;&#125;</code> with <code>let</code> or <code>const</code>.
          </Section>

          <Section title="Closures" color="text-purple-600">
            A closure is a function that "remembers" the environment in which it was created.
            <br />
            It allows access to outer function variables even after the outer function has returned.
            <br />
            <code>
              function outer() &#123;
              <br />
              &nbsp;&nbsp;let count = 0;
              <br />
              &nbsp;&nbsp;return function inner() &#123; return ++count; &#125;
              <br />
              &#125;
            </code>
          </Section>

          <Section title="DOM (Document Object Model)" color="text-pink-600">
            The DOM is a programming interface for HTML and XML documents.
            <br />
            - It represents the page structure as nodes and objects.
            <br />
            - You can access and manipulate elements using <code>document.querySelector</code>, <code>getElementById</code>, etc.
          </Section>

          <Section title="Callbacks" color="text-cyan-700">
            A callback is a function passed as an argument to another function.
            <br />
            - Used for async operations like event handling or network requests.
            <br />
            <code>
              function greet(name, cb) &#123; cb("Hello " + name); &#125;
            </code>
          </Section>

          <Section title="Promises and Async/Await" color="text-teal-600">
            Promises handle async operations.
            <br />
            - States: pending, fulfilled, rejected.
            <br />
            <code>
              fetch("url").then(res =&gt; res.json()).catch(err =&gt; console.error(err));
            </code>
            <br />
            <strong>Async/Await:</strong> Cleaner syntax for working with promises.
            <br />
            <code>
              async function loadData() &#123;
              <br />
              &nbsp;&nbsp;try &#123;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;let res = await fetch("url");
              <br />
              &nbsp;&nbsp;&#125; catch (err) &#123; console.error(err); &#125;
              <br />
              &#125;
            </code>
          </Section>

          <Section title="Higher-Order Functions" color="text-orange-600">
            A higher-order function takes another function as an argument or returns one.
            <br />
            - Common examples: <code>map()</code>, <code>filter()</code>, <code>reduce()</code>
            <br />
            <code>
              const nums = [1, 2, 3];
              <br />
              const doubled = nums.map(n =&gt; n * 2);
            </code>
          </Section>

          <Section title="Arrays" color="text-pink-600">
            Arrays store multiple values in a single variable.
            <br />
            - <code>push()</code>, <code>pop()</code>, <code>shift()</code>, <code>unshift()</code>
            <br />
            - <code>map()</code>, <code>filter()</code>, <code>reduce()</code>
          </Section>

          <Section title="Objects" color="text-teal-600">
            Objects store key-value pairs.
            <br />
            - Use dot or bracket notation to access values.
            <br />
            - Useful for representing structured data.
          </Section>

          <Section title="Loops" color="text-yellow-600">
            Loops repeat code:
            <br />
            - <code>for</code>, <code>while</code>, <code>do...while</code>
            <br />
            - Array methods like <code>forEach()</code>
          </Section>

          <Section title="Events" color="text-indigo-600">
            JavaScript handles browser interactions with events.
            <br />
            - <code>addEventListener</code>
            <br />
            - Events: click, submit, input
          </Section>

          <Section title="Error Handling" color="text-red-600">
            Handle errors using:
            <br />
            - <code>try...catch</code>
            <br />
            - <code>finally</code>
          </Section>

          <Section title="ES6+ Features" color="text-orange-600">
            Modern features:
            <br />
            - Arrow functions, destructuring, template literals
            <br />
            - Spread/rest, classes, modules
          </Section>

          {/* ADVANCED */}
          <Section title="This Keyword" color="text-violet-600">
            <code>this</code> refers to the object from where the function was called.
            <br />
            - Global: <code>window</code>
            <br />
            - Method: the object
            <br />
            - Arrow function: lexical <code>this</code>
          </Section>

          <Section title="Strict Mode" color="text-sky-600">
            <code>"use strict"</code> enforces stricter parsing and error handling.
          </Section>

          <Section title="Set & Map" color="text-cyan-600">
            - <code>Set</code>: Unique values
            <br />
            - <code>Map</code>: Key-value pairs
          </Section>

          <Section title="Type Coercion" color="text-red-500">
            Automatic type conversion:
            <br />
            - <code>"5" + 1</code> = <code>"51"</code>
            <br />
            - <code>"5" - 1</code> = <code>4</code>
          </Section>

          <Section title="Equality (== vs ===)" color="text-amber-600">
            - <code>==</code>: Loose (with coercion)
            <br />
            - <code>===</code>: Strict (no coercion)
          </Section>

          <Section title="Memory Management" color="text-zinc-600">
            Memory is allocated when variables/objects are created and freed when unreferenced.
          </Section>

          <Section title="Garbage Collection" color="text-rose-500">
            JavaScript automatically reclaims memory using garbage collection.
          </Section>

          <Section title="Event Loop & Call Stack" color="text-emerald-600">
            JS is single-threaded.
            <br />
            - Call Stack: Tracks function execution
            <br />
            - Event Loop: Handles async callbacks
          </Section>

          <Section title="Debouncing & Throttling" color="text-teal-600">
            <strong>Debounce:</strong> Delays execution after inactivity.
            <br />
            <strong>Throttle:</strong> Executes at intervals.
          </Section>

          <Section title="Modules (import/export)" color="text-yellow-700">
            Break code into reusable files:
            <br />
            <code>export const sum = (a, b) =&gt; a + b;</code>
            <br />
            <code>import &#123; sum &#125; from "./utils.js";</code>
          </Section>
        </div>
      </div>
    </div>
  );
}

function Section({
  title,
  color,
  children,
}: {
  title: string;
  color: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-6">
      <h2 className={`text-xl font-semibold ${color} mb-2`}>{title}</h2>
      <p className="text-gray-700 text-sm leading-relaxed">{children}</p>
    </div>
  );
}

export default Javascript;
