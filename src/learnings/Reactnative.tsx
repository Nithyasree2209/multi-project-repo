import Sidebar from './Sidebar';

function Reactnative() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-64">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 space-y-6 overflow-y-auto bg-gray-50">
        <h1 className="text-4xl font-bold text-blue-700">React Native Concepts</h1>

        <section>
          <h2 className="text-2xl font-semibold text-purple-700">1. Components</h2>
          <p>Everything in React Native is a component. These are reusable UI blocks such as:</p>
          <ul className="list-disc ml-6">
            <li><strong>View</strong>: Container like div.</li>
            <li><strong>Text</strong>: To display text.</li>
            <li><strong>Image</strong>: For images.</li>
            <li><strong>TouchableOpacity</strong>: Pressable elements with opacity.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-purple-700">2. JSX Syntax</h2>
          <p>JSX is a syntax extension that looks like HTML and allows writing UI layout in JavaScript code.</p>
          <p>Example:</p>
          <code className="block bg-gray-200 p-2 rounded">{"<Text>Hello, React Native!</Text>"}</code>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-purple-700">3. State and Props</h2>
          <p><strong>State</strong> stores internal component data that can change.</p>
          <p><strong>Props</strong> are inputs to a component passed from parent components.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-purple-700">4. Styling</h2>
          <p>React Native styles are JavaScript objects.</p>
          <p>Use either inline styles or <code>StyleSheet.create()</code> for better performance.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-purple-700">5. Navigation</h2>
          <p>Use <strong>React Navigation</strong> to move between screens:</p>
          <ul className="list-disc ml-6">
            <li><strong>Stack Navigator</strong>: Manages a stack of screens (push/pop navigation).</li>
            <li><strong>Bottom Tab Navigator</strong>: Tabs at the bottom for switching views.</li>
            <li><strong>Drawer Navigator</strong>: Side drawer menu.</li>
          </ul>
          <p>Install with:</p>
          <code className="block bg-gray-200 p-2 rounded">npm install @react-navigation/native</code>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-purple-700">6. Hooks</h2>
          <p>React Native supports React Hooks like:</p>
          <ul className="list-disc ml-6">
            <li><code>useState()</code> – for state</li>
            <li><code>useEffect()</code> – for side effects</li>
            <li><code>useContext()</code> – for global state</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-purple-700">7. FlatList and ScrollView</h2>
          <p><strong>FlatList</strong> is efficient for rendering long lists with performance optimizations.</p>
          <p><strong>ScrollView</strong> is useful for wrapping content that might overflow the screen.</p>
          <p>Use <code>{"<ScrollView>"}</code> when your content is not performance-intensive.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-purple-700">8. API Calls</h2>
          <p>Use <code>fetch</code> or <code>axios</code> inside <code>useEffect</code> to call external APIs and update state.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-purple-700">9. AsyncStorage</h2>
          <p>Use <strong>AsyncStorage</strong> for simple key-value local data storage, like storing tokens or preferences.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-purple-700">10. Platform-Specific Code</h2>
          <p>Use <code>Platform.OS</code> to differentiate between iOS and Android in your logic.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-purple-700">11. Permissions & Camera/Location</h2>
          <p>Use libraries like:</p>
          <ul className="list-disc ml-6">
            <li><code>react-native-permissions</code> for permissions</li>
            <li><code>expo-camera</code> or <code>react-native-camera</code></li>
            <li><code>react-native-geolocation-service</code> for GPS</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-purple-700">12. Expo vs React Native CLI</h2>
          <p><strong>Expo</strong>: Easy setup, but limited access to native modules.</p>
          <p><strong>CLI</strong>: More control, can use native code (Java, Swift, etc.).</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-purple-700">13. Debugging Tools</h2>
          <p>Popular tools include:</p>
          <ul className="list-disc ml-6">
            <li>React Native Debugger</li>
            <li>Flipper</li>
            <li>Chrome DevTools</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-purple-700">14. Animations</h2>
          <p>React Native supports:</p>
          <ul className="list-disc ml-6">
            <li><code>Animated</code> API</li>
            <li><code>LayoutAnimation</code></li>
            <li><code>react-native-reanimated</code> for complex interactions</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-purple-700">15. Native Modules & Linking</h2>
          <p>Use native modules to connect React Native with native code (Java, Kotlin, Swift, Objective-C).</p>
          <p>Link them using <code>react-native link</code> or use auto-linking in newer versions.</p>
        </section>
      </div>
    </div>
  );
}

export default Reactnative;
