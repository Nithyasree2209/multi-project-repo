import Sidebar from "./Sidebar";

function React() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 p-6 bg-gray-100 min-h-screen ml-64">
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-400 mb-6 underline underline-offset-8">
            React Core Concepts
          </h1>

          <Section title="JSX (JavaScript XML)" color="text-purple-600">
            JSX allows you to write HTML inside JavaScript. It makes code easier to read and write.
            <br />
            Example: <code>{`<h1>Hello, React!</h1>`}</code>
          </Section>

          <Section title="Components" color="text-blue-600">
            React is based on components. Components can be functional or class-based.
            <br />
            Functional Component:
            <br />
            <code>{`function Hello() { return <h1>Hello</h1> }`}</code>
          </Section>

          <Section title="Props (Properties)" color="text-green-600">
            Props are used to pass data from parent to child components.
            <br />
            Example:
            <br />
            <code>{`<Welcome name="Alice" />`}</code>
            <br />
            <code>{`function Welcome(props) { return <h1>{props.name}</h1> }`}</code>
          </Section>

          <Section title="State" color="text-amber-600">
            State is used to store and manage local data inside a component.
            <br />
            <code>
              {`const [count, setCount] = useState(0);`}
            </code>
          </Section>

          <Section title="useEffect Hook" color="text-rose-600">
            <code>useEffect</code> runs side effects like API calls, subscriptions, etc.
            <br />
            <code>
              {`useEffect(() => { fetchData(); }, []);`}
            </code>
          </Section>

          <Section title="Conditional Rendering" color="text-sky-600">
            Render different elements based on conditions.
            <br />
            <code>{`{isLoggedIn ? <Logout /> : <Login />}`}</code>
          </Section>

          <Section title="Lists and Keys" color="text-cyan-600">
            Render a list using <code>map()</code>. Keys help identify items.
            <br />
            <code>{`items.map(item => <li key={item.id}>{item.name}</li>)`}</code>
          </Section>

          <Section title="Forms and Input Handling" color="text-pink-600">
            Use controlled components to handle input changes.
            <br />
            <code>
              {`<input value={name} onChange={(e) => setName(e.target.value)} />`}
            </code>
          </Section>

          <Section title="Lifting State Up" color="text-violet-600">
            Move state to the nearest common ancestor to share it between components.
          </Section>

          <Section title="Context API" color="text-indigo-600">
            Used to avoid prop drilling and share global data.
            <br />
            <code>{`const MyContext = React.createContext();`}</code>
          </Section>

          <Section title="React Router" color="text-blue-700">
            Enables navigation in single-page apps.
            <br />
            <code>{`<Route path="/about" element={<About />} />`}</code>
          </Section>

          <Section title="useRef" color="text-lime-600">
            <code>useRef</code> is used to access DOM nodes or store mutable values.
            <br />
            <code>{`const inputRef = useRef(null);`}</code>
          </Section>

          <Section title="Memoization (useMemo, React.memo)" color="text-teal-600">
            Optimize performance by memoizing components and values.
            <br />
            <code>{`const memoizedValue = useMemo(() => compute(), [deps])`}</code>
          </Section>

          <Section title="Error Boundaries" color="text-red-500">
            Catch errors in the component tree and show fallback UI.
            <br />
            Only works in class components.
          </Section>

          <Section title="Custom Hooks" color="text-fuchsia-600">
            Reuse logic between components.
            <br />
            <code>{`function useCounter() { const [count, setCount] = useState(0); ... }`}</code>
          </Section>

          <Section title="React Fragments" color="text-zinc-700">
            Group multiple elements without adding extra nodes.
            <br />
            <code>{`<> <h1 /> <p /> </>`}</code>
          </Section>

          <Section title="Portals" color="text-yellow-500">
            Render children into a DOM node outside the parent component.
            <br />
            <code>{`ReactDOM.createPortal(child, container)`}</code>
          </Section>

          <Section title="Code Splitting" color="text-emerald-600">
            Split bundles using <code>React.lazy</code> and <code>Suspense</code> to improve load time.
          </Section>

          <Section title="React Strict Mode" color="text-orange-600">
            Helps identify potential problems in the app. Doesn’t render UI.
            <br />
            <code>{`<React.StrictMode>...</React.StrictMode>`}</code>
          </Section>

          <Section title="Keys to Remember" color="text-gray-700">
            - React is declarative, component-based, and unidirectional.
            <br />
            - Always keep UI and state in sync.
            <br />
            - Break UI into reusable components.
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

export default React;
