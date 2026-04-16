# React Bhavya Table 🚀

A highly interactive, feature-rich, and fully responsive data table component for React.

## ✨ Features

- **Dynamic Columns:** Automatically generates columns based on your data structure.
- **Sorting & Filtering:** Click on column headers to sort data (Ascending/Descending), or use the built-in modal to apply specific value filters.
- **Global Search:** Blazing fast global search across all visible columns.
- **Drag & Drop:** Reorder columns effortlessly using native HTML5 drag and drop.
- **Column Toggling:** Show or hide specific columns dynamically via a dropdown menu.
- **Export Capabilities:** 
  - Export to CSV (powered by `react-csv`)
  - Export to PDF (powered by `jspdf`)
  - Print exactly what you see.
- **Responsive Design:** Built with Bootstrap for a robust, mobile-friendly table layout out of the box.

## 📦 Installation

This package is compatible with Create React App, Vite, and Next.js.

```bash
npm install bhavya-table
```

*Note: This package requires `react` and `react-dom` as a peer dependency.*

## 🚀 Usage

Using the table is as simple as passing an array of objects to the `data` prop.

```jsx
import React from 'react';
import { BhavyaTable } from 'bhavya-table';

// VERY IMPORTANT: Import the CSS for styles to apply!
import 'bhavya-table/style.css';

const App = () => {
  const tableData = [
    { id: 1, name: 'John Doe', age: 28, role: 'Developer' },
    { id: 2, name: 'Jane Smith', age: 34, role: 'Designer' },
    { id: 3, name: 'Sam Johnson', age: 41, role: 'Manager' },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h2>Employee Directory</h2>
      {/* Pass your array of objects to the data prop */}
      <BhavyaTable data={tableData} />
    </div>
  );
};

export default App;
```

## 🛠️ API

### Props

| Prop | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `data` | `Array<Object>` | **Yes** | An array of JSON objects. The keys of the object will automatically be interpreted as the column headers. |

## ⚙️ Framework Specific Notes

### Next.js (App Router)
If you are using the Next.js App Router (`app/` directory), importing global CSS (`import 'bhavya-table/style.css'`) directly inside a component may cause Next to throw a warning. It is recommended to import the `style.css` file inside your global `layout.js` or `layout.tsx` file for perfect compatibility, and then use the `<BhavyaTable>` component anywhere else!

## 📄 License
MIT © BhavyaJustChill
