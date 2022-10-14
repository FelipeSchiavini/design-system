# How was Configured this project

start project with vite:
`npm create vite@latest` #https://vitejs.dev/guide/

## tailWind CSS
-> `npm install -D autoprefixer postcss tailwindcss`
#### install VSCODE extensions:
- PostCSS Language Support
- Tailwind CSS IntelliSense
run `npx tailwindcss init -p`
on tailwind.config.cjs
insert 
```
module.exports = {
  content: [
    './src/**/*.tsx' #path to all css documents
  ],
  theme: {
    // here you can extend classes from tailwind css or subscribe this classes for yours

    //example of extend class from tailwind
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif' #standard font-family #Insert font on index.html
      }
    },

    //example of removing tailwind class and add your class
    fontSize: {
      xs: 14,
      small:16,
      medium: 18,
      lg: 20,
      xl:24,
      '2xl': 32,            
    }
  },
  },
  plugins: [],
}

```

## Storybook
when you configure storybook normally they have standard webpack, vite is faster because its use ASbuild.
run `npx sb init --builder @storybook/builder-vite --use-npm` (or yarn) 
you can change the theme on `manager.js` and insert con `preview.cjs`:
```
  docs:{
    theme: themes.dark
  }
```

import `global.css` on preview cjs to use tailwind config on storybook

## Radix-UI
`npm install @radix-ui/react-slot`
`npm install @radix-ui/react-checkbox`

### Others
`npm install --save clsx`
To change component style with props
```
  {
      'text-xs': size === 'sm',
      'text-sm': size === 'md',
      'text-md': size === 'lg'
  }
```

## Deploy on Github
##### https://www.npmjs.com/package/@storybook/storybook-deployer
1. `npm i @storybook/storybook-deployer --save-dev`
2. create git repository
3. insert on package.json: `"deploy-storybook": "storybook-to-ghpages"`
4. run `npm run build-storybook`
5. insert storybook-static on .gitignore
6. on `maincjs` insert:
```
  viteFinal: (config, { configType }) => {
    if (configType === 'PRODUCTION') {
      config.base = '/repository-name/'
    }
```
