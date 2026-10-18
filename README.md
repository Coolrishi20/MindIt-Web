# Mind It! — webpage version

This repository hosts the browser version of **Mind It! v1.69** with GitHub Pages, so it opens properly on an iPhone or iPad. Currently build **136**.

**Open it:** https://coolrishi20.github.io/MindIt-Web/

**On an iPhone or iPad:** open the address in Safari, tap **Share → Add to Home Screen**, then **Add**. You get the gold **M** icon named **Mind It!**, which opens full-screen.

Good to know:

- It's the whole quiz on one device. Team phones, the tablet remote and Phone Buzzer Mode need the laptop app (Windows or Mac).
- To use an iPhone or iPad as the **remote for a laptop quiz**, don't use this page: on the laptop open **📲 Connect ▾ → Connect Device** and scan the **iPad / iPhone** code.
- Players, history and questions are kept on each device, in that browser (or in the home-screen app). They are never stored here. Use **Backups & Restore** to move them between devices.
- The home-screen app keeps its own data, separate from Safari's.
- **A big collection still saves** (since build 135): when the players, photos and questions outgrow Safari's quick storage (about 5 MB per site), they are kept in the browser's own database (IndexedDB) instead. If a save ever fails, the message says why, nothing on screen is lost, and **Try Again** / **Save Backup File** appear.
- **Works with no internet** (since build 129): once it has been opened with internet, the phone keeps a copy and opens it offline, with its players and history. With internet it always loads the newest build first. Open it once with internet after each new build.

Contents: `index.html` (the tested page from build 136; only two changes: the home-screen icon link points to `apple-touch-icon.png` instead of an embedded copy, and it registers `sw.js`) · `sw.js` (keeps the offline copy) · `apple-touch-icon.png` · `.nojekyll`.
