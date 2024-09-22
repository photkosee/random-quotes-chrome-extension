# How to Create Your Own Chrome Extension with React, Vite, and (optionally) Tailwind CSS (It's Easier Than You Think!)

## What Will We Do Today?

Today, we're going to create a popup Chrome extension that generates random punny quotes to encourage you when you face tough times with React, Vite, and (optionally) Tailwind CSS.

## Instruction

### Init Project 🚀

You can start with me by using my template [here](https://github.com/photkosee/vite-react-ts-tailwind-template). This template will initialize a React, Vite, and Tailwind CSS project for you. Once you've cloned the template, navigate to the root directory and run the following command to install all dependencies:

```
npm install
```

### Create the Manifest File 💡

Once you have your React project set up, you'll need to create a file named `manifest.json` inside `public` folder at the root directory of your project. Inside the file, put this code in:

```
{
  "manifest_version": 3,
  "name": "Random quotes Extension",
  "version": "1.0.0",
  "description": "A basic extension that generates random quotes.",
  "icons": {
    "128": "/vite.svg"
  },
  "action": {
    "default_popup": "./index.html",
    "default_title": "Random quotes"
  }
}
```

All the keys here, except the `action` key, are required to create an extension and consist of the extension's metadata. The `default_popup` inside the `actions` key allows us to create a popup-like component for our Chrome extension using the `index.html` file to render as the popup. More options can be found here.

As of today (September 2024), the latest version for a manifest file is 3. Make sure to use the latest version, which you can check [here](https://developer.chrome.com/docs/extensions/reference/manifest). Otherwise, your extension might not work.

Note that WebP and SVG files are not supported as icon formats, but you'll still be able to create your extension as long as you don't leave the key value blank. So, the Vite icon here will not be displayed as your icon — I only included it to avoid getting an error. Feel free to use whatever image you like. Check out more details regarding the `icons` key [here](https://developer.chrome.com/docs/extensions/reference/manifest/icons).

### Prepare our popup ⚙️

Inside `./src/App.tsx`, put this code in it:

```
import { useState } from "react";

function App() {
  const [quote, setQuote] = useState("");

  return (
    <>
      <div
        className="bg-white py-3 px-4 flex flex-col
        gap-y-2 min-w-80 rounded-lg"
      >
        <div
          className="py-2 px-3 min-h-28 bg-white text-wrap
          text-center rounded-lg border border-neutral-700
          flex items-center justify-center"
        >
          {quote}
        </div>

        <button
          className="py-2 px-3 bg-black text-white
          rounded-lg hover:bg-neutral-800"
        >
          Get Quote
        </button>
      </div>
    </>
  );
}

export default App;
```

This is going to be our popup, applying some padding to make it looks decent. In terms of styling, you are free to do whatever you feel like and there are no needs to follow my style here.

The `quote` state will be used to keep track of the quote that we'll generate.

This is simply a box to display the quote and a button to click to generate a new quote.

### Implement Random Quote Generation 🎲

For generating random quotes, we'll be using the DummyJSON API. You can find more details about the API [here](https://dummyjson.com/docs/quotes). It simply gives us a random quote whenever we make a request, and it's free! Although the quotes generated are truly random, they may not always be meaningful. This part is just a cherry on top, and you can modify this to build whatever you need for your custom extension.

Here is the function we'll be using to generate a random quote:
```
const getQuote = async () => {
  try {
    fetch("https://dummyjson.com/quotes/random")
      .then((res) => res.json())
      .then((data) => setQuote(data.quote));
  } catch (error) {
    setQuote("Something went wrong. Please try again later.");
  }
};
```

The code inside `App.tsx` file should look something like this:
```
import { useState } from "react";

function App() {
  const [quote, setQuote] = useState("");

  const getQuote = async () => {
    try {
      fetch("https://dummyjson.com/quotes/random")
        .then((res) => res.json())
        .then((data) => setQuote(data.quote));
    } catch (error) {
      setQuote("Something went wrong. Please try again later.");
    }
  };

  return (
    <>
      <div
        className="bg-white py-3 px-4 flex flex-col
        gap-y-2 min-w-80 rounded-lg"
      >
        <div
          className="py-2 px-3 min-h-28 bg-white text-wrap
          text-center rounded-lg border border-neutral-700
          flex items-center justify-center"
        >
          {quote}
        </div>
        <button
          onClick={getQuote}
          className="py-2 px-3 bg-black text-white
          rounded-lg hover:bg-neutral-800"
        >
          Get Quote
        </button>
      </div>
    </>
  );
}

export default App;
```

### Test Your Extension Locally 🧪

To use your extension locally, first run the following command at the root directory:

```
npm run build
```

Then, navigate to the Chrome Extensions Management page (or simply click [here](chrome://extensions/)). Make sure that you enable developer mode in the top right corner. Once enabled, you'll see buttons like `Load unpacked`, `Pack extension`, and `Update` at the top of the page.

![developer-mode](https://github.com/user-attachments/assets/e5bf5505-ee3b-44cd-9e57-cce799a0f467)


![load-unpack-btn](https://github.com/user-attachments/assets/8e99343e-b7ba-4b84-a71f-6c97b3b87eba)

Click on the `Load unpacked` button and upload the `dist` folder that is generated from the `build` command at your project's root directory. And you're all set to use your personal extension!

Note that you don't need to remove and upload a new unpacked file every time you make changes to your project. Simply run the same `build` command and click on the refresh button on your extension card to apply those changes. You can see my code here for the final product.

![refresh-bth](https://github.com/user-attachments/assets/86615f4d-5f34-4243-a4f5-0157db20b943)

### We're Done! 🙌

It will look something like this once you use the extension that we just implemented:

![popup](https://github.com/user-attachments/assets/a55fcc11-34a6-4213-adbb-b32c0036c13d)

As you can see, creating a Chrome extension is not as difficult as you might have imagined! Now, it’s up to your design and ideas to make great things happen.

For more details on what you can do with your extension, check out [this documentation](https://developer.chrome.com/docs/extensions/reference/manifest). There are plenty of optional keys to help you develop your ideal extension. If you'd like to go further and publish your extension for others to use, you can follow [this guide](https://developer.chrome.com/docs/webstore/publish).

## Author
Phot Koseekrainiramon
- [LinkedIn](https://www.linkedin.com/in/phot-kosee/)
- [GitHub](https://github.com/photkosee)
