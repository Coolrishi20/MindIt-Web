# Mind It! — webpage version

This repository hosts the browser version of **Mind It! v1.69** with GitHub Pages, so it opens properly on an iPhone or iPad. Currently build **156**.

**Open it:** https://coolrishi20.github.io/MindIt-Web/

**On an iPhone or iPad:** open the address in Safari, tap **Share → Add to Home Screen**, then **Add**. You get the gold **M** icon named **Mind It!**, which opens full-screen.

Good to know:

- It's the whole quiz on one device. Team phones, the tablet remote and Phone Buzzer Mode need the laptop app (Windows or Mac).
- To use an iPhone or iPad as the **remote for a laptop quiz**, don't use this page: on the laptop open **📲 Connect ▾ → Connect Device** and scan the **iPad / iPhone** code.
- Players, history and questions are kept on each device, in that browser (or in the home-screen app). They are never stored here. Use **Backups & Restore** to move them between devices.
- The home-screen app keeps its own data, separate from Safari's.
- **A big collection still saves** (since build 135): when the players, photos and questions outgrow Safari's quick storage (about 5 MB per site), they are kept in the browser's own database (IndexedDB) instead. If a save ever fails, the message says why, nothing on screen is lost, and **Try Again** / **Save Backup File** appear.
- **Pictures, videos and music are kept too** (since build 140): a quiz with lots of pictures, videos, music or team photos is also saved complete in the browser's database, so **Resume saved game** brings them back after the page is closed or the phone restarts. If there is ever no room, a red card says so, with **Save Backup File**.
- **See where it's kept** (since build 141): the page asks the browser to keep its data, and **Backups & Restore** shows whether it agreed ("Protected — the browser keeps it", or "Not protected — … back up regularly").
- **A Safety Backup after every game** (since build 142): as soon as a finished game is saved to Historic Games, **Backups & Restore → 🛟 Safety backups** keeps a copy by itself ("After the game — … won"), with the last 10 on this device.
- **Smooth moments** (since build 145): the question grows out of its square, screens fade, TIME’S UP stamps, a correct answer sparkles and more. Setup → 5 · Audio & Presentation → **Motion** (Full / Subtle / Off); a device set to Reduce Motion shows none.
- **A premium look and 🎨 Theme** (since build 146): every theme gets a glossier board in its own colours; during a game, **🎨 Theme ▾** in the top bar changes the theme in one pick. **🎲 Fun Names** in Setup names the teams for you. Back to the board after 3 seconds, No One Answered after 3 seconds, and a **🏆 Champions card** on the winner screen (with **💾 Save Champions Picture**).
- **Premium theme moments** (since build 147): every theme plays its own short moments on the TV — the question reveal, correct and wrong answers, the Daily Double, round intros, the Final and the winner — and Comic Book is redesigned in ink, crimson, gold and cream. Motion Subtle keeps a gentle glow; Off shows none.
- **Blind It!, Rewind It!, Mastermind It! and The Rascala!** (since build 148): the Daily Double is now **Blind It!** and the Final Round **Mastermind It!** (same rules); Setup → 4 · Rounds & Questions → **Special Question** can swap Blind It! for **Rewind It!**, a cowboy-hat wheel worth 1×–5× (a wrong answer loses at most 3×; no chips that game); last place becomes **The Rascala!**, revealed after the winner.
- **Build 149:** The Rascala! is a cowboy cat; the tagline **“Enna Rascala....Mind It!”**; the **Mind It! sound pack** (recorded sounds in place of the synthesised ones, a theme's own sounds kept); the wager screens keep clear of the theme scenery; fixes.
- **Build 150:** the sounds follow the Mind It! trailer: the ding and a score pop for a right answer, a whoosh between screens, the standings tally, the winner's impact and cheer, a sparkle when the theme changes, all at the trailer's balance.
- **Build 151:** a cleaner look on the Galaxy Tab ("Studio Glass"), easier portrait use, the winner's confetti falls again, a small dotted orb beside long waits, Rewind It!'s payout in green and red, Wi-Fi TVs on a slow link no longer drop while a big picture loads. With the laptop app, the team that gets Rewind It! in Buzzer Mode spins the wheel on its own phone.
- **Build 152:** the Question Database's top row gets **⬇ Excel ▾** (both templates and the whole database); safer host controls ("are you sure?" boxes start on Cancel, End round early is Shift+E, T resumes the timer, ⌨ Keyboard Shortcuts in ⋯ or with ?); a tidier layout. With the laptop app there is now **Mind It! TV** for an Android TV box, and the laptop and Galaxy Tab apps update themselves.
- **Works with no internet** (since build 129): once it has been opened with internet, the phone keeps a copy and opens it offline, with its players and history. With internet it always loads the newest build first. Open it once with internet after each new build.

Contents: `index.html` (the tested page from build 154; only two changes: the home-screen icon link points to `apple-touch-icon.png` instead of an embedded copy, and it registers `sw.js`) · `sw.js` (keeps the offline copy) · `apple-touch-icon.png` · `.nojekyll`.
