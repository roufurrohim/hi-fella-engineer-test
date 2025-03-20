<div id="top"></div>
<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h3 align="center">Hi Fella</h3>
</div>

### Implementation Approach
This project is built using Next.js with the pages routing system. The architecture follows a Component-Based Development approach by separating the UI into reusable components.



### Directory Structure

```
├── public/               # Static assets
├── src/
│   ├── components/       # Reusable React components
│   ├── pages/            # Next.js pages (using pages routing system)
│   │   ├── _components/  # Components used in pages
│   │   ├── api/          # Next.js API routes
│   │   ├── _app.js       # Main application component
│   │   └── index.js      # Home page
│   ├── styles/           # Global stylesheets and SCSS modules
│   │   ├── globals.css   # Global styles
│   │   └── *.module.scss # SCSS modules
└── ... root configuration files
```

### Styling Strategy
This project uses a hybrid approach for styling:

* TailwindCSS for rapid and consistent UI development
* SCSS Modules for components requiring more complex styling

### Tools Used

#### Core Languages and Frameworks

* Next.js (v13.x) - React framework for server-side rendering and routing
* React (v18.x) - UI library
* Node.js (v18.x or higher)

#### Styling

* TailwindCSS (v3.x) - Utility-first CSS framework
* SCSS - CSS preprocessor with additional features

#### Package Manager

* Bun (v1.x or higher) - Fast JavaScript runtime & package manager

#### Development Tools

* ESLint - Linter for JavaScript/TypeScript
* Prettier - Code formatter
* PostCSS - Tool for CSS transformations

#### Setup Instructions

##### System Requirements

* Node.js version 18.x or higher
* Bun version 1.x or higher

##### Installing Bun
If you haven't installed Bun yet, run the following command:
macOS / Linux:
```bash
curl -fsSL https://bun.sh/install | bash
```
Windows (via PowerShell):
```powershell
powershell -c "irm bun.sh/install.ps1 | iex"
```

##### Project Installation
1. Clone this repository
   ```sh
   git clone https://github.com/roufurrohim/hi-fella-engineer-test.git
   ```
2. Inside the project directory
   ```sh
   cd hi-fella-engineer-test
   ```
3. Install Bun packages
   ```bash
   bun install
   ```

##### Running the Application

1. Development Mode
```bash
bun run dev
```
The application will run at http://localhost:3000

2. Build for Production
```bash
bun run build
```
3. Running Production Version
```bash
bun run start
```

### Benefits of Using Bun

* Speed: Bun installs dependencies 30x faster than npm
* Fast JavaScript Runtime: Bun also functions as a JavaScript runtime that's faster than Node.js
* Compatibility: Bun is compatible with the Node.js and npm ecosystem
* Built-in Bundler: Has a built-in bundler that can replace Webpack
* Faster Hot Reloading: More efficient development with faster hot reloading mode
