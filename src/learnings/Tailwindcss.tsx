
import Sidebar from "./Sidebar";

function Tailwindcss() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 p-6 bg-gray-100 min-h-screen ml-64">
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-400 mb-4 underline underline-offset-8">
            Understanding Tailwind CSS Concepts
          </h1>

          <Section title="Utility-First Approach" color="text-blue-600">
            Tailwind CSS is a utility-first CSS framework, which means it provides low-level utility classes to build designs directly in your markup. 
            Instead of writing custom CSS, you apply pre-defined utility classes like <code>bg-blue-500</code>, <code>text-center</code>, or <code>p-4</code> to style elements.
          </Section>

          <Section title="Responsive Design" color="text-green-600">
            Tailwind CSS offers responsive utilities to easily create designs that adapt to different screen sizes. 
            You can apply different classes for various breakpoints using prefixes like <code>sm:</code>, <code>md:</code>, <code>lg:</code>, and <code>xl:</code>.
            For example, <code>md:text-xl</code> will apply text size only on medium and larger screens.
          </Section>

          <Section title="Customization" color="text-pink-600">
            Tailwind is highly customizable. You can modify its default configuration using the <code>tailwind.config.js</code> file to change colors, spacing, typography, breakpoints, and more. 
            If you need specific design requirements, it's easy to extend Tailwind's default theme.
          </Section>

          <Section title="Components and Directives" color="text-teal-600">
            Tailwind doesn't ship with pre-built components, but you can create your own components using utility classes. 
            It's recommended to extract reusable components into <code>HTML</code> or <code>React</code> components.
            Directives like <code>@apply</code> help you group utility classes into custom classes for reuse.
          </Section>

          <Section title="JIT Mode (Just-in-Time Compilation)" color="text-yellow-600">
            Tailwind CSS offers JIT mode, which compiles your CSS on-demand, generating only the styles you actually use in your HTML/JSX. 
            This results in much smaller CSS files and faster builds. You can enable JIT mode by adding <code>mode: 'jit'</code> in the configuration.
          </Section>

          <Section title="PurgeCSS" color="text-indigo-600">
            Tailwind CSS uses PurgeCSS to remove unused CSS classes from your final build. 
            This helps in significantly reducing the file size, ensuring that only the used classes remain in the production CSS.
            It's typically enabled during production builds to keep the final bundle lightweight.
          </Section>

          <Section title="Built-in Plugins" color="text-purple-600">
            Tailwind comes with several built-in plugins for forms, typography, and aspect ratio, which can be enabled in the configuration file. 
            For example, the <code>@tailwindcss/forms</code> plugin helps style form elements with utility classes, while <code>@tailwindcss/typography</code> helps with prose formatting.
          </Section>

          <Section title="CSS Grid and Flexbox" color="text-red-600">
            Tailwind CSS provides utilities for both Flexbox and CSS Grid. 
            With Flexbox, you can control item alignment, direction, and distribution, using classes like <code>flex</code>, <code>justify-center</code>, <code>items-center</code>.
            With Grid, you can define layouts with <code>grid-cols-3</code>, <code>gap-4</code>, etc.
          </Section>
        </div>
      </div>
    </div>
  );
}

function Section({ title, color, children }: { title: string; color: string; children: React.ReactNode }) {
  return (
    <div className="mb-6">
      <h2 className={`text-xl font-semibold ${color} mb-2`}>{title}</h2>
      <p className="text-gray-700 text-sm leading-relaxed">{children}</p>
    </div>
  );
}

export default Tailwindcss;
