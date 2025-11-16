# Google Drive Connection Files

This document identifies all files in the MVNH website that are connected to Google Drive.

## Summary

The website uses Google Drive to host and embed preview content. All Google Drive connections are found in the compiled JavaScript bundle.

## Files Containing Google Drive References

### Source Files (TypeScript/React)

The following source files contain Google Drive URLs in their class data structures:

**Class 11 Files:**
1. `/src/Layouts/classes/class11/class11Biology.tsx`
2. `/src/Layouts/classes/class11/class11Chemistry.tsx`
3. `/src/Layouts/classes/class11/class11Computer.tsx`
4. `/src/Layouts/classes/class11/class11Maths.tsx`
5. `/src/Layouts/classes/class11/class11Physic.tsx`

**Class 12 Files:**
6. `/src/Layouts/classes/class12/class12Biology.tsx`
7. `/src/Layouts/classes/class12/class12Chemistry.tsx`
8. `/src/Layouts/classes/class12/class12Computer.tsx`
9. `/src/Layouts/classes/class12/class12MathsGrid.tsx`
10. `/src/Layouts/classes/class12/class12PhysicsGrid.tsx`

### Compiled/Deployed File

**1. `/assets/index-qGsR9eGM.js`**

**Type:** Compiled JavaScript Bundle (Minified)

**Purpose:** Main application JavaScript containing all the business logic and component code for the website compiled from the source files above.

**Google Drive Integration:**

#### Direct File Embed URLs

The following Google Drive file preview URLs are embedded in the application:

1. **File ID: 1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i**
   - URL: `https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview`
   - This URL appears multiple times in the code (likely used across different components)

2. **File ID: 1M5N9_h9KD7UmXC4Z7g1DPeJkmfGGDUNP**
   - URL: `https://drive.google.com/file/d/1M5N9_h9KD7UmXC4Z7g1DPeJkmfGGDUNP/preview`

3. **File ID: 1o4gssCXW3kZIsxV099TVhgAQtTiSEhR2**
   - URL: `https://drive.google.com/file/d/1o4gssCXW3kZIsxV099TVhgAQtTiSEhR2/preview`

#### Google APIs Integration

The JavaScript bundle also includes references to Google APIs, specifically:

- **`gapi` (Google API JavaScript Client Library)**: Used for loading Google API services
- **`gapi.iframes`**: Used for iframe-based authentication and embedding
- **Google Identity Toolkit API endpoints:**
  - `identitytoolkit.googleapis.com`
  - `staging-identitytoolkit.sandbox.googleapis.com`
  - `test-identitytoolkit.sandbox.googleapis.com`

These API references are part of Firebase Authentication integration, which uses Google's identity services.

## Technical Implementation

### Embedding Method

The Google Drive files are embedded using the `/preview` endpoint, which allows:
- Direct embedding of Google Drive files in iframes
- Preview functionality without requiring download
- Public or shared link access to the files

### Code Structure

Each class component file (e.g., `class12PhysicsGrid.tsx`) contains:
- A `Classdata` object with course information
- A `Links` array containing Google Drive preview URLs for each chapter and sub-chapter
- The URLs are embedded in nested arrays corresponding to the course structure

**Example structure:**
```typescript
const Classdata = {
  title: "Physics 12",
  chapters: ["Mechanics", "Heat and Thermodynamics", ...],
  Links: [
    ["url1", "url2", ...],  // Links for chapter 1
    ["url3", "url4", ...],  // Links for chapter 2
    ...
  ]
}
```

The build process (using Vite) compiles these source files into `assets/index-qGsR9eGM.js`.

## Files NOT Containing Google Drive References

The following files were checked but do NOT contain Google Drive connections:

- `/index.html` - Main HTML file (loads the JS bundle)
- `/404.html` - Error page
- `/assets/index-D6ggm79b.css` - CSS stylesheet
- `/Firebase/.gitignore` - Firebase configuration directory (currently only contains .gitignore)
- All image assets in `/assets/` directory

## Recommendations

1. **Source Code Access**: To make changes to the Google Drive URLs, you would need access to the original source code (likely in a `src/` directory) before it's compiled.

2. **URL Management**: Consider centralizing all Google Drive URLs in a configuration file or environment variables for easier management.

3. **Content Security**: Ensure that all Google Drive files referenced have appropriate sharing permissions (public or anyone with the link).

4. **Build Process**: The website appears to be built with Vite. To modify the Google Drive connections, you would need to:
   - Access the source repository
   - Update the URLs in the source files
   - Rebuild the project (`npm run build` or similar)
   - Deploy the new compiled assets

## How to Update Google Drive Links

### Step 1: Locate the Source File
Find the appropriate class file in the source repository:
- Class 11: `/src/Layouts/classes/class11/`
- Class 12: `/src/Layouts/classes/class12/`

### Step 2: Edit the Links Array
Update the Google Drive URLs in the `Links` array within the `Classdata` object:
```typescript
Links: [
  [
    "https://drive.google.com/file/d/NEW_FILE_ID/preview",
    "https://drive.google.com/file/d/ANOTHER_FILE_ID/preview",
    ...
  ],
  ...
]
```

### Step 3: Rebuild and Deploy
```bash
# Install dependencies
npm install

# Build the project
npm run build

# Deploy to gh-pages or your hosting platform
```

The build process will compile the updated source files into new asset bundles.

---

**Last Updated:** 2025-11-16  
**Generated by:** Automated repository analysis
