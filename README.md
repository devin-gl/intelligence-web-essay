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

The current copy was extracted from `Intelligence FInal Paper.pdf`, with the first-page disclaimer omitted.

For the text to match your essay exactly, paste each original paragraph into the matching `paragraphs` array in `src/data/essayContent.js`. Each string in that array renders as one essay paragraph. Do not rewrite the React components for text edits.

The PDF extraction preserves the paper's wording, but the PDF text layer may introduce small OCR/layout artifacts. If you notice one, edit only that paragraph string.

## Adding Images, GIFs, and Audio

Put media files in:

```text
public/assets/
```

Then reference them with root-relative paths:

```js
src: "/assets/my-image.jpg"
```

Where to place media in the essay:

- Chapter hero images: update a chapter's `background`, for example `background: "/assets/my-hero.jpg"`.
- Regular images/GIFs: add a block with `type: "figure"` inside the relevant section's `blocks` array.
- YouTube videos: add or edit a block with `type: "youtube"` and change `videoId`.
- Podcast/audio: put the file at `public/assets/philosophy-podcast.mp3`, or change the `src` in the audio block.
- Captions and source notes: edit the `caption` and `source` fields in the same block.

Example figure block:

```js
{
  type: "figure",
  src: "/assets/my-ai-painting.jpg",
  alt: "AI painting from the paper",
  caption: "Caption text shown under the image.",
  source: "Source note or citation"
}
```

Example GIF block:

```js
{
  type: "figure",
  src: "/assets/process-animation.gif",
  alt: "Animated generation process",
  caption: "GIF showing the process."
}
```

Recommended replacements:

- Replace `/assets/ai-painting-placeholder.svg` with existing AI painting images from the paper.
- Add GIFs or animations to `public/assets` and use them in `MediaFigure`.
- Add the podcast audio at `public/assets/philosophy-podcast.mp3`.
- Update the Instagram reel placeholder in `essayContent.js` when you decide whether to use a thumbnail image, a link, or an embed.

Extracted paper images are already in:

```text
public/assets/paper/
```

They are referenced throughout `src/data/essayContent.js` with paths like:

```js
src: "/assets/paper/paper-page-13-image-01.png"
```

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
