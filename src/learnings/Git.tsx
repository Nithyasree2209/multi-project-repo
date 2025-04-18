import Sidebar from "./Sidebar";

function Git() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-64">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 space-y-6 overflow-y-auto bg-gray-50">
        <h1 className="text-4xl font-bold text-green-700">Git Concepts</h1>

        <section>
          <h2 className="text-2xl font-semibold text-purple-700">1. What is Git?</h2>
          <p>Git is a distributed version control system that helps track changes in source code and coordinate work among developers.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-purple-700">2. Git vs GitHub</h2>
          <ul className="list-disc ml-6">
            <li><strong>Git</strong>: Local version control system.</li>
            <li><strong>GitHub</strong>: Hosting service for Git repositories on the cloud.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-purple-700">3. Git Installation</h2>
          <p>Install from <a className="text-blue-600 underline" href="https://git-scm.com" target="_blank" rel="noopener noreferrer">git-scm.com</a>.</p>
          <code className="block bg-gray-200 p-2 rounded">git --version</code>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-purple-700">4. Git Configuration</h2>
          <code className="block bg-gray-200 p-2 rounded">git config --global user.name "Your Name"</code>
          <code className="block bg-gray-200 p-2 rounded mt-2">git config --global user.email "you@example.com"</code>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-purple-700">5. Git Basic Commands</h2>
          <ul className="list-disc ml-6">
            <li><code>git init</code>: Initialize a new Git repo</li>
            <li><code>git clone &lt;repo-url&gt;</code>: Clone existing repo</li>
            <li><code>git status</code>: Show current state</li>
            <li><code>git add .</code>: Add all files to staging</li>
            <li><code>git commit -m "message"</code>: Commit changes</li>
            <li><code>git push</code>: Push changes to remote</li>
            <li><code>git pull</code>: Pull changes from remote</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-purple-700">6. Branching</h2>
          <ul className="list-disc ml-6">
            <li><code>git branch</code>: List branches</li>
            <li><code>git branch &lt;name&gt;</code>: Create new branch</li>
            <li><code>git checkout &lt;name&gt;</code>: Switch branch</li>
            <li><code>git checkout -b &lt;name&gt;</code>: Create and switch</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-purple-700">7. Merging</h2>
          <ul className="list-disc ml-6">
            <li><code>git merge &lt;branch-name&gt;</code>: Merge branch into current</li>
            <li><code>git rebase &lt;branch-name&gt;</code>: Reapply commits on top of another base tip</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-purple-700">8. Undoing Changes</h2>
          <ul className="list-disc ml-6">
            <li><code>git reset</code>: Undo commits or staged changes</li>
            <li><code>git checkout -- &lt;file&gt;</code>: Discard file changes</li>
            <li><code>git revert &lt;commit-id&gt;</code>: Revert commit</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-purple-700">9. .gitignore</h2>
          <p>Use a `.gitignore` file to exclude files/folders from being tracked by Git.</p>
          <code className="block bg-gray-200 p-2 rounded">node_modules/</code>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-purple-700">10. GitHub Workflow</h2>
          <ul className="list-disc ml-6">
            <li>Create repository on GitHub</li>
            <li>Connect local repo: <code>git remote add origin &lt;url&gt;</code></li>
            <li>Push to GitHub: <code>git push -u origin main</code></li>
            <li>Pull Requests for collaboration</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-purple-700">11. Stashing</h2>
          <ul className="list-disc ml-6">
            <li><code>git stash</code>: Save changes temporarily</li>
            <li><code>git stash pop</code>: Reapply stashed changes</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-purple-700">12. Tagging</h2>
          <ul className="list-disc ml-6">
            <li><code>git tag &lt;tagname&gt;</code>: Tag specific commit</li>
            <li><code>git push origin &lt;tagname&gt;</code>: Push tag to remote</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-purple-700">13. Git Log</h2>
          <code className="block bg-gray-200 p-2 rounded">git log</code>
          <p>Shows commit history. Use <code>--oneline</code> for brief view.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-purple-700">14. Git GUI Tools</h2>
          <ul className="list-disc ml-6">
            <li>GitHub Desktop</li>
            <li>Sourcetree</li>
            <li>GitKraken</li>
            <li>VS Code built-in Git support</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Git;
