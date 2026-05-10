import { useMemo, useState } from "react";
import {
  chapters,
  commentCards,
  podcastTranscript,
  readerPrompts,
  titleMatter,
} from "./data/essayContent.js";
import AudioPlayer from "./components/AudioPlayer.jsx";
import ChapterHeader from "./components/ChapterHeader.jsx";
import CommentCard from "./components/CommentCard.jsx";
import EssaySection from "./components/EssaySection.jsx";
import MarginNote from "./components/MarginNote.jsx";
import MediaFigure from "./components/MediaFigure.jsx";
import PodcastDialogue from "./components/PodcastDialogue.jsx";
import ProbabilitySpaceInteractive from "./components/ProbabilitySpaceInteractive.jsx";
import PullQuote from "./components/PullQuote.jsx";
import ReaderPrompt from "./components/ReaderPrompt.jsx";
import TableOfContents from "./components/TableOfContents.jsx";
import YouTubeEmbed from "./components/YouTubeEmbed.jsx";

const componentMap = {
  audio: AudioPlayer,
  comments: CommentCardsBlock,
  figure: MediaFigure,
  podcast: PodcastDialogue,
  probability: ProbabilitySpaceInteractive,
  pullquote: PullQuote,
  prompt: ReaderPrompt,
  youtube: YouTubeEmbed,
};

function CommentCardsBlock({ items = commentCards }) {
  return (
    <div className="comment-grid" aria-label="Audience reactions">
      {items.map((comment) => (
        <CommentCard key={comment.id} {...comment} />
      ))}
    </div>
  );
}

function InlineBlock({ block }) {
  if (!block?.type) return null;
  const Component = componentMap[block.type];
  if (!Component) return null;

  if (block.type === "audio") {
    return <Component {...block} transcript={podcastTranscript} />;
  }

  if (block.type === "podcast") {
    return <Component transcript={podcastTranscript} />;
  }

  if (block.type === "prompt") {
    return <Component {...readerPrompts[block.promptId]} />;
  }

  return <Component {...block} />;
}

function App() {
  const [theme, setTheme] = useState("dark");
  const tocItems = useMemo(
    () =>
      chapters.flatMap((chapter) => [
        { id: chapter.id, label: chapter.shortTitle, type: "chapter" },
        ...chapter.sections.map((section) => ({
          id: section.id,
          label: section.title,
          type: "section",
        })),
      ]),
    [],
  );

  return (
    <div className="app" data-theme={theme}>
      <a className="skip-link" href="#main-content">
        Skip to essay
      </a>
      <TableOfContents
        items={tocItems}
        theme={theme}
        onThemeChange={() => setTheme((value) => (value === "dark" ? "light" : "dark"))}
      />

      <main id="main-content">
        <section className="title-spread" aria-labelledby="essay-title">
          <div className="title-media" aria-hidden="true">
            <div className="constellation constellation-a" />
            <div className="constellation constellation-b" />
            <div className="constellation constellation-c" />
          </div>
          <div className="title-copy">
            <p className="kicker">Interactive Web Essay</p>
            <h1 id="essay-title">{titleMatter.title}</h1>
            <p className="subtitle">{titleMatter.subtitle}</p>
            <p className="byline">{titleMatter.author}</p>
            <p className="abstract">{titleMatter.abstract}</p>
          </div>
        </section>

        {chapters.map((chapter) => (
          <article className="chapter" key={chapter.id}>
            <ChapterHeader {...chapter} />
            {chapter.sections.map((section) => (
              <EssaySection key={section.id} id={section.id} title={section.title}>
                {section.marginNote && <MarginNote {...section.marginNote} />}
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.blocks?.map((block, index) => (
                  <InlineBlock key={`${section.id}-${block.type}-${index}`} block={block} />
                ))}
              </EssaySection>
            ))}
          </article>
        ))}
      </main>
    </div>
  );
}

export default App;
