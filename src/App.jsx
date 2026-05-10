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
import PromptStudy from "./components/PromptStudy.jsx";
import ProbabilitySpaceInteractive from "./components/ProbabilitySpaceInteractive.jsx";
import PullQuote from "./components/PullQuote.jsx";
import ReaderPrompt from "./components/ReaderPrompt.jsx";
import ReaderSummary from "./components/ReaderSummary.jsx";
import RichText from "./components/RichText.jsx";
import TableOfContents from "./components/TableOfContents.jsx";
import YouTubeEmbed from "./components/YouTubeEmbed.jsx";

const componentMap = {
  audio: AudioPlayer,
  comments: CommentCardsBlock,
  figure: MediaFigure,
  podcast: PodcastDialogue,
  promptStudy: PromptStudy,
  probability: ProbabilitySpaceInteractive,
  pullquote: PullQuote,
  richText: RichText,
  prompt: ReaderPrompt,
  summary: ReaderSummary,
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

function InlineBlock({ block, responses, onPromptAnswer }) {
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
    return (
      <Component
        id={block.promptId}
        {...readerPrompts[block.promptId]}
        response={responses[block.promptId]}
        onAnswer={onPromptAnswer}
      />
    );
  }

  if (block.type === "summary") {
    return <ReaderSummary prompts={readerPrompts} responses={responses} />;
  }

  return <Component {...block} />;
}

function ParagraphWithArtifacts({ paragraph, artifacts = [] }) {
  const text = typeof paragraph === "string" ? paragraph : paragraph.html;
  const matches = artifacts.filter((artifact) => text?.includes(artifact.anchor));
  const markedText = matches.reduce((current, artifact, index) => {
    const id = `artifact-${artifact.anchor.replace(/[^a-z0-9]+/gi, "-").toLowerCase()}-${index}`;
    const marker = `<a class="artifact-anchor" href="#${id}">${artifact.anchor}</a>`;
    return current.replace(artifact.anchor, marker);
  }, text || "");

  return (
    <div className={matches.length ? "paragraph-with-artifacts" : "paragraph-without-artifacts"}>
      <p>{matches.length ? <RichText>{markedText}</RichText> : typeof paragraph === "string" ? paragraph : <RichText>{paragraph.html}</RichText>}</p>
      {matches.length > 0 && (
        <MarginNote
          id={`artifact-${matches[0].anchor.replace(/[^a-z0-9]+/gi, "-").toLowerCase()}-0`}
          title={matches.length > 1 ? "Margin notes" : matches[0].title || "Margin"}
          body={matches.length > 1 ? "Notes attached to the underlined phrases in this paragraph." : matches[0].body}
          artifacts={
            matches.length > 1
              ? matches.flatMap((match) => [
                  { type: "label", text: match.title || "Margin" },
                  ...(match.artifacts || []),
                ])
              : matches[0].artifacts || []
          }
        />
      )}
    </div>
  );
}

function App() {
  const [theme, setTheme] = useState("dark");
  const [responses, setResponses] = useState({});
  const handlePromptAnswer = (id, response) => {
    setResponses((current) => ({ ...current, [id]: response }));
  };
  const tocItems = useMemo(
    () =>
      chapters.flatMap((chapter) => [
        { id: chapter.id, label: chapter.shortTitle, type: "chapter" },
        ...chapter.sections.map((section) => ({
          id: section.id,
          label: section.title,
          type: section.level >= 3 ? "subsection" : "section",
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
            {titleMatter.abstract && <p className="abstract">{titleMatter.abstract}</p>}
          </div>
        </section>

        {chapters.map((chapter) => (
          <article className="chapter" key={chapter.id}>
            <ChapterHeader {...chapter} />
            {chapter.sections.map((section) => (
              <EssaySection
                key={section.id}
                id={section.id}
                title={section.title}
                level={section.level}
              >
                {section.marginNote && <MarginNote {...section.marginNote} />}
                {section.paragraphs.map((paragraph, paragraphIndex) => (
                  <ParagraphWithArtifacts
                    key={`${section.id}-${paragraphIndex}`}
                    paragraph={paragraph}
                    artifacts={section.marginArtifacts}
                  />
                ))}
                {section.blocks?.map((block, index) => (
                  <InlineBlock
                    key={`${section.id}-${block.type}-${index}`}
                    block={block}
                    responses={responses}
                    onPromptAnswer={handlePromptAnswer}
                  />
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
