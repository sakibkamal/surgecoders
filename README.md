# surgecoders

##Install TailwindCSS as a postcss plugin

### Follow the following steps
 - Open the terminal in VSCode and type
 
  1. npm init -y
  2. npm install tailwindcss autoprefixer
  3. npm install postcss-cli
  4. npx tailwindcss init -p
  5. create index.html and styles.css files in the public folder
  6. create styles.css in the src folder
  7. In the styles.css file type out the following:
     @tailwind base;
     @tailwind components;
     @tailwind utilities;
     
  8. In package.json type:
  
     "scripts": {
    "build": "postcss ./src/styles.css -o ./public/styles.css"
    
    }
  - In the VSCode terminal type
  9.  npm run build
  10. npm install live-server
  11.live-server public
  12. To purge the css file, go to tailwind.config.js and type the following
  
   purge: {
    content: ['./public/**/*.html']
  },
  
  13. Add another script in the package.json file
  
  "scripts": {
    "build": "postcss ./src/styles.css -o ./public/styles.css"
    
    }
    
   - for windows users you may need to run this command in the vscode terminal before step 12: npm install win-node-env
   
   14. Finally for production type in the terminal npm run prod.
  
