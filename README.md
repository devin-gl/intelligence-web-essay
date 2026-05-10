# Intelligence Web Essay

A polished single-page React/Vite web essay for **Intelligence: AI, Human Qualities, and the Fear of Encroachment**.

The app is structured like a digital web book: chapter headers, sticky contents navigation, long-form essay sections, marginalia, pull quotes, media figures, embedded videos, an audio/transcript module, reader prompts, comment cards, and an interactive probability-space map.

## Run Locally

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Project Structure

```text
public/assets/
    ai-painting-placeholder.svg
    gallery-placeholder.svg
    instagram-placeholder.svg
    neural-cloud.svg
    probability-cloud.svg
src/
  components/
    AudioPlayer.jsx
    ChapterHeader.jsx
    CommentCard.jsx
    EssaySection.jsx
    MarginNote.jsx
    MediaFigure.jsx
    PodcastDialogue.jsx
    ProbabilitySpaceInteractive.jsx
    PullQuote.jsx
    ReaderPrompt.jsx
    TableOfContents.jsx
    YouTubeEmbed.jsx
  data/
    essayContent.js
  App.jsx
  main.jsx
  styles.css
```

## Adding Your Paper Text

The essay content lives in:

```text
src/data/essayContent.js
```

Replace the sample adaptation paragraphs with the full text from your paper. Keep the chapter and section objects, then update each section's `paragraphs`, `marginNote`, and `blocks`.

The workspace did not include the uploaded paper file when this project was scaffolded, so the current copy is a structured placeholder adaptation based on your requested outline.

## Adding Images, GIFs, and Audio

Put media files in:

```text
public/assets/
```

Then reference them with root-relative paths:

```js
src: "/assets/my-image.jpg"
```

Recommended replacements:

- Replace `/assets/ai-painting-placeholder.svg` with existing AI painting images from the paper.
- Add GIFs or animations to `public/assets` and use them in `MediaFigure`.
- Add the podcast audio at `public/assets/philosophy-podcast.mp3`.
- Update the Instagram reel placeholder in `essayContent.js` when you decide whether to use a thumbnail image, a link, or an embed.

## YouTube Embeds

The included videos are configured in `essayContent.js`:

- `9EqR0pwDCds`
- `NdWX0QmnM8M`

Change the `videoId` field to swap videos.

## Probability Space Interactive

The main custom interactive lives in:

```text
src/components/ProbabilitySpaceInteractive.jsx
```

It includes:

- Toggleable intelligence spaces.
- A global probability-space mode.
- Soft overlapping probability clouds.
- Click-to-select descriptions.
- Shared-traits panel for overlapping active spaces.

Edit the `spaces` object in that file to adjust labels, descriptions, and traits.

## Deploying to Vercel

1. Push the project to GitHub.
2. In Vercel, choose **Add New Project**.
3. Import the repository.
4. Use the default Vite settings:
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Deploy.

No backend, database, login, or paid API calls are required.
