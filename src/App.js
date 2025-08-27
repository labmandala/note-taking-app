import React from "react";

const App = () => (
  <div>
    <header>
      <h1>Super Sticky Notes</h1>
      <aside>
        <button>+ New Note</button>
        <div>
          <img
            src="magnifying-glass-solid-full.svg"
            alt="search icon"
            className="search-icon"
          />
          <label className="visually-hidden" for="search">
            Search notes
          </label>
          <input type="text" id="search" placeholder="ToDo" />
        </div>
      </aside>
    </header>
    <ul>
      <li>
        <input type="text" aria-label="Title" placeholder="ToDo Today" />
        <textarea aria-label="Description" placeholder="Take a nap!" />
        <span>X</span>
      </li>
      <li>
        <input type="text" aria-label="Title" placeholder="ToDo Today" />
        <textarea aria-label="Description" placeholder="Take a nap!" />
        <span>X</span>
      </li>
      <li>
        <input type="text" aria-label="Title" placeholder="ToDo Today" />
        <textarea aria-label="Description" placeholder="Take a nap!" />
        <span>X</span>
      </li>
    </ul>
  </div>
);

export default App;
