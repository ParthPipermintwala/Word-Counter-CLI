<!-- WordFreq -->

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&height=200&color=0:1FA2FF,100:12D8FA&text=Word%20Counter%20CLI&fontAlign=50&fontAlignY=35&fontColor=ffffff" alt="Word Counter CLI banner" />

<img src="https://readme-typing-svg.demolab.com?font=Space+Grotesk&size=26&duration=2500&pause=600&color=16E7FF&center=true&vCenter=true&width=650&lines=Lightning-Fast+Word+Frequency+Analyzer;Zero+Dependencies.++Pure+Node.js;Count+Everything.+Search+Anything." alt="Animated headline" />

✨ **Now available on npm!** [Install](https://www.npmjs.com/package/@parth_pipermintwala/wordfreq)

[![Node.js](https://img.shields.io/badge/Node.js-25.2.1-1fa2ff?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![NPM](https://img.shields.io/badge/NPM-Published-12d8fa?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/package/@parth_pipermintwala/wordfreq)
[![License](https://img.shields.io/badge/License-MIT-00c7b7?style=for-the-badge)](LICENSE)
[![Zero Dependencies](https://img.shields.io/badge/Deps-0-00e1ff?style=for-the-badge&logo=databricks&logoColor=white)]()

</div>

---

## ✨ Features

🎯 **Smart Analysis** - Count every word with precision  
🔍 **Word Search** - Find specific word occurrences instantly  
🎨 **Case-Insensitive** - Automatically handles uppercase/lowercase  
🚀 **Blazing Fast** - Pure Node.js with zero dependencies  
📋 **Clean Output** - Beautiful formatted results  

---

## 📦 Installation

```bash
npm install -g @parth_pipermintwala/wordfreq
```

---

## 🚀 Quick Start

### Count All Words
```bash
count ./text.txt
```

**Output:**
```
─────────────────────────────────────────────────────────────────
{ theory: 5, is: 4, in: 6, general: 1, any: 5, practice: 3 }
─────────────────────────────────────────────────────────────────
Total words: 250
─────────────────────────────────────────────────────────────────
```

### Search for Specific Word
```bash
count ./text.txt theory
```

**Output:**
```
─────────────────────────────────────────────────────────────────
The word "theory" appears 5 times.
─────────────────────────────────────────────────────────────────
```

---

## 💡 Use Cases

📝 **Content Writers** - Analyze your writing patterns  
🎓 **Students** - Study text composition and word usage  
🔎 **SEO Specialists** - Check keyword density  
📚 **Researchers** - Perform quick text analysis  
✍️ **Authors** - Track word frequency in manuscripts  

---

## 🛠️ How It Works

1. 📖 Reads your text file
2. 🔄 Converts to lowercase for consistency
3. ✂️ Splits into individual words
4. 🧹 Filters out numbers and punctuation
5. 📊 Counts and displays results

---

## ⚙️ Technical Details

- **Runtime:** Node.js 25.2.1+ (ESM modules)
- **Dependencies:** Zero! Pure Node.js
- **File Support:** Any text-based file format
- **Word Detection:** Regex-based (`/\W+/` split + alpha filter)
- **Error Handling:** Clear messages for missing files or invalid paths

---

## 📖 Command Syntax

```bash
count <filePath> [wordToFind]
```

| Argument | Required | Description |
|----------|----------|-------------|
| `filePath` | ✅ Yes | Path to the text file to analyze |
| `wordToFind` | ⬜ Optional | Specific word to search for |

---

## 🎯 Pro Tips

💾 **Export Results** - Save counts to a file:
```bash
count document.txt > results.txt
```

🔗 **Chain Commands** - Combine with other tools:
```bash
cat *.txt | count combined.txt
```

📁 **Analyze Multiple Files** - Use a loop:
```bash
for file in *.txt; do count "$file"; done
```

---

## 📄 License

MIT © 2025

---

<div align="center">

**Made with ❤️ by Parth Pipermintwala**

[Report Bug](https://github.com/yourusername/word-counter-cli/issues) · [Request Feature](https://github.com/yourusername/word-counter-cli/issues)

</div>
