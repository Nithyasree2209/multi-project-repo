
import Sidebar from "./Sidebar";

function Bootstrap() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="ml-64 p-6 bg-gray-100 min-h-screen w-full">
        <div className="bg-white rounded-2xl shadow-lg p-6 space-y-6">
          <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-400 mb-4 underline underline-offset-8">
            Bootstrap Core Component Cheat Sheet
          </h1>

          <Section title="Grid & Layout" color="text-blue-600">
            Bootstrap uses a 12-column responsive grid system.
            You structure content using containers, rows, and columns. 
            <ul className="list-disc ml-6 mt-2">
              <li><strong>Container</strong>: Wraps content with padding.</li>
              <li><strong>Row</strong>: Horizontal groups of columns.</li>
              <li><strong>Col</strong>: Auto-width or defined width (e.g., col-6).</li>
            </ul>
          </Section>

          <Section title="Navbar" color="text-purple-600">
            Navbars are responsive navigation headers that support branding, links, forms, and togglers.
            Use classes like <code>navbar</code>, <code>navbar-expand-lg</code>, and <code>navbar-brand</code>.
          </Section>

          <Section title="Buttons" color="text-green-600">
            Bootstrap provides predefined button styles with contextual classes like:
            <code className="block mt-1">btn-primary</code>, <code className="block">btn-danger</code>, <code className="block">btn-outline-success</code>.
          </Section>

          <Section title="Modal" color="text-rose-600">
            Modals are pop-up dialogs used for user interactions.
            Triggered using <code>data-bs-toggle="modal"</code> and hidden/shown via JavaScript.
          </Section>

          <Section title="Carousel" color="text-yellow-600">
            A carousel cycles through elements, like images or text, like a slideshow.
            Includes inner items and next/prev controls.
          </Section>

          <Section title="Forms" color="text-pink-600">
            Bootstrap offers clean, consistent forms with grid support.
            Classes include <code>form-control</code>, <code>form-label</code>, <code>form-check</code>, etc.
          </Section>

          <Section title="Collapse & Accordion" color="text-cyan-600">
            Collapse hides/shows content dynamically.
            Accordions combine collapses in a single list. Use <code>data-bs-toggle</code> to control visibility.
          </Section>

          <Section title="Alerts" color="text-indigo-600">
            Alerts are used to show feedback messages.
            Styles include <code>alert-success</code>, <code>alert-warning</code>, and more.
          </Section>

          <Section title="Badges, Spinners & Toasts" color="text-teal-600">
            <ul className="list-disc ml-6 mt-2">
              <li><strong>Badges</strong>: Small count/label indicators (<code>badge bg-primary</code>).</li>
              <li><strong>Spinners</strong>: Show loading state (<code>spinner-border</code>).</li>
              <li><strong>Toasts</strong>: Small popup notifications that appear temporarily.</li>
            </ul>
          </Section>

          <div className="bg-white rounded-2xl shadow-lg p-6 mt-8">
            <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-400 mb-8 underline underline-offset-8">
              Code Examples
            </h1>

            <pre className="whitespace-pre-wrap text-sm text-gray-800 font-mono leading-relaxed">
              <span className="text-lg font-semibold text-blue-600 mb-2 inline-block">/* Grid & Layout */</span>
              {`
<div class="container">
  <div class="row">
    <div class="col">1 of 3</div>
    <div class="col">2 of 3</div>
    <div class="col">3 of 3</div>
  </div>
</div>
              `}

              <span className="text-lg font-semibold text-purple-600 mb-2 inline-block">/* Navbar */</span>
              {`
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Brand</a>
  <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarNav">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home</a>
      </li>
    </ul>
  </div>
</nav>
              `}

              <span className="text-lg font-semibold text-green-600 mb-2 inline-block">/* Buttons */</span>
              {`
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-outline-danger">Outline Danger</button>
              `}

              <span className="text-lg font-semibold text-rose-600 mb-2 inline-block">/* Modal */</span>
              {`
<!-- Trigger -->
<button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch modal
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal Title</h5>
        <button class="btn-close" data-bs-dismiss="modal"></button>
      </div>
      <div class="modal-body">Modal content...</div>
    </div>
  </div>
</div>
              `}

              <span className="text-lg font-semibold text-yellow-600 mb-2 inline-block">/* Carousel */</span>
              {`
<div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="..." class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="..." />
    </div>
  </div>
  <button class="carousel-control-prev" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </button>
  <button class="carousel-control-next" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon"></span>
  </button>
</div>
              `}

              <span className="text-lg font-semibold text-pink-600 mb-2 inline-block">/* Forms */</span>
              {`
<form>
  <div class="mb-3">
    <label class="form-label">Email</label>
    <input type="email" class="form-control" placeholder="name@example.com" />
  </div>
  <div class="mb-3">
    <label class="form-label">Message</label>
    <textarea class="form-control" rows="3"></textarea>
  </div>
</form>
              `}

              <span className="text-lg font-semibold text-cyan-600 mb-2 inline-block">/* Collapse (Accordion) */</span>
              {`
<p>
  <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button">
    Toggle content
  </a>
</p>
<div class="collapse" id="collapseExample">
  <div class="card card-body">
    This is collapsible content.
  </div>
</div>
              `}

              <span className="text-lg font-semibold text-indigo-600 mb-2 inline-block">/* Alerts */</span>
              {`
<div class="alert alert-success" role="alert">
  A simple success alert—check it out!
</div>
              `}

              <span className="text-lg font-semibold text-teal-600 mb-2 inline-block">/* Badges, Spinners, Toasts */</span>
              {`
<span class="badge bg-primary">New</span>
<div class="spinner-border text-warning" role="status"><span class="visually-hidden">Loading...</span></div>

<div class="toast show">
  <div class="toast-header">
    <strong class="me-auto">Bootstrap</strong>
    <button type="button" class="btn-close" data-bs-dismiss="toast"></button>
  </div>
  <div class="toast-body">Hello, world! This is a toast message.</div>
</div>
              `}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}

function Section({ title, color, children }: { title: string; color: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className={`text-xl font-semibold ${color} mb-2`}>{title}</h2>
      <p className="text-gray-700 text-sm leading-relaxed">{children}</p>
    </div>
  );
}

export default Bootstrap;

