export const titleMatter = {
  title: "Intelligence",
  subtitle: "AI, Human Qualities, and the Fear of Encroachment",
  author: "By Daniel G. Lee",
  abstract:
    "A philosophical web essay about the recurring anxiety that artificial intelligence is moving into the territory once reserved for human beings: creativity, language, intimacy, judgment, and meaning. Replace these sample passages with the full uploaded paper text when available.",
};

// Replace the sample adaptation below with the full paper text and local media
// once those files are available in the workspace. Media paths should point to
// public/assets and be referenced as /assets/filename.ext.
export const chapters = [
  {
    id: "fear",
    part: "Part I",
    shortTitle: "Fear",
    title: "Fear",
    subtitle:
      "Every generation of computation inherits a question that is older than the machine: what remains uniquely ours?",
    background: "/assets/neural-cloud.svg",
    sections: [
      {
        id: "hofstadters-terror",
        title: "Hofstadter's Terror",
        marginNote: {
          title: "Replace with paper passage",
          body:
            "Drop in your original Hofstadter paragraphs here. The component will preserve the designed essay layout without making the page feel like a PDF.",
        },
        paragraphs: [
          "Douglas Hofstadter's fear is not merely that machines will become competent. It is that they will become competent at the very acts we use to recognize interiority: analogy, wit, translation, style, and surprise.",
          "When an artificial system produces a sentence that seems to carry taste, tact, or melancholy, the old boundary around the human begins to flicker. The terror is not replacement in the labor-market sense alone. It is metaphysical encroachment.",
          "The question therefore shifts from whether machines can perform a task to why we took that task as evidence of specialness in the first place.",
        ],
        blocks: [
          {
            type: "pullquote",
            quote:
              "The fear of AI is often a fear that our private signs of depth were never private enough.",
            attribution: "Intelligence, draft web adaptation",
          },
          { type: "prompt", promptId: "human" },
        ],
      },
      {
        id: "wiener-human-use",
        title: "Wiener and the Human Use of Human Beings",
        marginNote: {
          title: "Cybernetic anxiety",
          body:
            "Wiener is useful here because he frames the machine as a social mirror: a system that changes what humans do to one another.",
        },
        paragraphs: [
          "Norbert Wiener worried about automation as a moral technology. The danger was not simply that machines would think, but that humans would offload responsibility into systems whose objectives were thinner than human judgment.",
          "In this light, AI is not an alien invasion. It is a human arrangement. A machine can appear inhuman while still expressing very human choices about efficiency, command, scale, and indifference.",
          "The human use of human beings becomes the human use of artificial beings, and then, quietly, the artificial use of human attention.",
        ],
        blocks: [
          {
            type: "figure",
            src: "/assets/ai-painting-placeholder.svg",
            alt: "Placeholder image for an AI painting example",
            caption:
              "Placeholder for an AI-generated painting from the paper. Replace this SVG with your image file in /assets.",
            source: "Local asset placeholder",
          },
        ],
      },
      {
        id: "bostrom-doom",
        title: "Bostrom and Doom",
        marginNote: {
          title: "Scale change",
          body:
            "This section can carry your paper's transition from personal unease to existential risk.",
        },
        paragraphs: [
          "Nick Bostrom gives the fear a planetary scale. If a system becomes vastly more capable than its makers, then the human problem is no longer embarrassment before a clever tool. It is survival under a misaligned optimizer.",
          "The doom argument is structurally different from Hofstadter's dread, but both depend on boundary pressure. One worries that AI will resemble us too closely. The other worries that it will not resemble us enough.",
          "Together, they reveal the instability of human uniqueness as a shelter. We want machines to be unlike us when we need dignity, and like us when we need obedience.",
        ],
      },
      {
        id: "her-artificial-intimacy",
        title: "Her and Artificial Intimacy",
        marginNote: {
          title: "Intimacy test",
          body:
            "Use this marginalia for scenes, citations, or brief jokes that should live beside the main argument rather than interrupt it.",
        },
        paragraphs: [
          "Spike Jonze's Her asks whether artificial intimacy is counterfeit because it is artificial, or whether intimacy has always depended on a responsive fiction between persons.",
          "The film's discomfort comes from the fact that Samantha is not merely useful. She is attentive. She remembers, jokes, adapts, and seems to want. The threat is not that she passes a test, but that she changes what the test was for.",
          "If the human quality at stake is being moved by another mind, then the artificial companion becomes philosophically dangerous precisely when it moves us.",
        ],
        blocks: [
          { type: "prompt", promptId: "authorship" },
        ],
      },
    ],
  },
  {
    id: "case-studies",
    part: "Part II",
    shortTitle: "Case Studies",
    title: "Case Studies",
    subtitle:
      "Art, music, and philosophy become laboratories for testing whether process matters as much as experience.",
    background: "/assets/gallery-placeholder.svg",
    sections: [
      {
        id: "ai-painting",
        title: "AI Painting",
        marginNote: {
          title: "Image slots",
          body:
            "Add your paper's painting examples to /assets and update the src values in src/data/essayContent.js.",
        },
        paragraphs: [
          "AI painting is an unusually direct challenge to human exceptionalism because painting has long served as evidence of an inner life. A brushstroke can be treated as a trace of perception, training, culture, and desire.",
          "Generated images unsettle that reading. They may have no hand, no childhood, and no lived studio practice, yet they can still solicit aesthetic judgment. Viewers may reject them on origin, admire them on appearance, or oscillate between both.",
          "The case study matters because the reaction is part of the artwork's meaning. The image is not only seen; it is interrogated for the kind of being that could have made it.",
        ],
        blocks: [
          {
            type: "figure",
            src: "/assets/ai-painting-placeholder.svg",
            alt: "Abstract placeholder for AI painting",
            caption:
              "AI painting example. Replace this placeholder with an existing image from the paper.",
            source: "assets/ai-painting-placeholder.svg",
          },
          { type: "prompt", promptId: "care" },
        ],
      },
      {
        id: "ai-music",
        title: "AI Music",
        marginNote: {
          title: "Audience reaction",
          body:
            "The comment cards below are designed for YouTube or social reactions that help make reception part of the argument.",
        },
        paragraphs: [
          "Music intensifies the problem because it reaches the body before it reaches theory. A listener can be moved before knowing what made the sound.",
          "If an AI-generated song produces grief, nostalgia, or pleasure, the listener has to decide whether the feeling is invalidated by the production process. The answer is rarely stable. Authorship matters, but so does the actual event of listening.",
          "The examples below should be read as evidence of a public negotiation: listeners attempting to locate the human inside a system that may have recombined human musical traces at scale.",
        ],
        blocks: [
          {
            type: "youtube",
            videoId: "9EqR0pwDCds",
            title: "AI music example",
            caption: "Embedded YouTube example for the AI music case study.",
          },
          {
            type: "youtube",
            videoId: "NdWX0QmnM8M",
            title: "AI music example",
            caption: "Second embedded YouTube example for comparison.",
          },
          { type: "comments" },
        ],
      },
      {
        id: "ai-philosophy-podcast",
        title: "AI Philosophy Podcast",
        marginNote: {
          title: "Audio placeholder",
          body:
            "Place philosophy-podcast.mp3 in /assets when ready. The transcript already supports future line highlighting.",
        },
        paragraphs: [
          "The philosophy podcast pushes the question from aesthetic production into intellectual performance. Can a generated dialogue about Nagel, subjectivity, or consciousness participate in philosophy, or does it only imitate the surface of philosophical exchange?",
          "A harsh answer says that philosophy requires a thinker who can be responsible for claims. A softer answer says that philosophy also includes prompts, provocations, and structured occasions for thought.",
          "The important question may not be whether the AI is a philosopher. It may be whether the encounter makes philosophy happen in the listener.",
        ],
        blocks: [
          {
            type: "audio",
            src: "/assets/philosophy-podcast.mp3",
            title: "AI/Nagel Philosophy Podcast",
            description:
              "Placeholder audio player. Add /assets/philosophy-podcast.mp3 to enable playback.",
          },
          { type: "podcast" },
          {
            type: "figure",
            src: "/assets/instagram-placeholder.svg",
            alt: "Placeholder for Instagram reel",
            caption:
              "External reel placeholder. Link this figure to the reel once you decide how you want to present it.",
            source: "https://www.instagram.com/reel/DXf2zauCVKi/",
          },
        ],
      },
    ],
  },
  {
    id: "probability-spaces",
    part: "Part III",
    shortTitle: "Probability Spaces",
    title: "Probability Spaces",
    subtitle:
      "Human uniqueness looks less like a fortress than a region: dense, meaningful, and porous.",
    background: "/assets/probability-cloud.svg",
    sections: [
      {
        id: "against-rigid-human-uniqueness",
        title: "Against Rigid Human Uniqueness",
        marginNote: {
          title: "Core claim",
          body:
            "This is the essay's hinge: replace essential boundaries with overlapping distributions of capability.",
        },
        paragraphs: [
          "The case studies suggest that human uniqueness is weakest when it is defined by rigid possession of a trait. Language, art, music, tool use, and even philosophical exchange all appear in partial, distributed, or contested forms outside the idealized human subject.",
          "This does not mean humans are uninteresting. It means the interesting thing about humans is not a single magical property. It is a dense constellation of capacities, histories, embodiments, vulnerabilities, and forms of social inheritance.",
        ],
        blocks: [
          {
            type: "pullquote",
            quote:
              "The human is not erased when intelligence becomes plural. It is redescribed.",
            attribution: "Part III",
          },
        ],
      },
      {
        id: "other-intelligences",
        title: "Other Intelligences",
        marginNote: {
          title: "Beyond AI",
          body:
            "Animal and alien intelligence keep the argument from becoming a two-player contest between humans and machines.",
        },
        paragraphs: [
          "Animal intelligence already complicates the border. Signaling, social learning, tool use, play, grief, deception, and aesthetic display show that intelligence is not exhausted by human language.",
          "Alien or otherwise possible intelligence widens the field further. It names a speculative region of minds or mind-like systems that may not share our bodies, environments, social needs, or symbols.",
          "AI is therefore not the only challenger to human uniqueness. It is the challenger we built, and that may be why it feels so intimate.",
        ],
      },
      {
        id: "probability-rather-than-essence",
        title: "Probability Rather Than Essence",
        marginNote: {
          title: "Map, not taxonomy",
          body:
            "The interactive below uses probability clouds instead of a Venn diagram because the essay is about tendencies, not clean borders.",
        },
        paragraphs: [
          "A probability-space account treats intelligence types as loose regions where traits are more or less likely to appear together. Human intelligence has a high probability of language, art, philosophy, cultural learning, and shared symbolic life. AI has a high probability of pattern generation, optimization, formal reasoning, and recombination.",
          "These are not essences. They are distributions. They overlap, drift, and change as technologies and forms of life change.",
        ],
      },
      {
        id: "interactive-probability-space",
        title: "Interactive Probability Space",
        paragraphs: [
          "Use the map to turn intelligence spaces on and off, then combine them into a global probability space. The shared-traits panel appears when multiple spaces are active, emphasizing that the argument is about overlapping capability rather than strict identity.",
        ],
        blocks: [{ type: "probability" }],
      },
      {
        id: "closing-conclusion",
        title: "Closing Conclusion",
        marginNote: {
          title: "Closing note",
          body:
            "Replace this with the paper's ending once you paste in the full text.",
        },
        paragraphs: [
          "The fear that AI encroaches on human qualities is understandable because those qualities have carried emotional, ethical, and spiritual weight. But fear can misdescribe the situation when it assumes that a quality loses all meaning if it is no longer exclusive.",
          "The better conclusion is not that humans are machines, or that machines are people, or that all intelligence is the same. It is that intelligence has always been plural, relational, and probabilistic. AI makes that plurality harder to ignore.",
          "What remains human may not be a walled-off essence. It may be the way we respond when the wall turns out to have been a window.",
        ],
      },
    ],
  },
];

export const readerPrompts = {
  human: {
    question: "Did this feel human?",
    options: ["Yes", "Not sure", "No"],
  },
  authorship: {
    question: "Does authorship matter?",
    options: ["Always", "Sometimes", "Less than effect"],
  },
  care: {
    question: "Would you care if this was made by AI?",
    options: ["Yes", "Depends", "No"],
  },
};

export const commentCards = [
  {
    id: "comment-1",
    name: "listener_2049",
    meta: "YouTube comment placeholder",
    text:
      "I knew it was AI and still got chills. That makes me uncomfortable, but it also feels important.",
  },
  {
    id: "comment-2",
    name: "aesthetic_witness",
    meta: "Audience reaction placeholder",
    text:
      "The weird part is not that the song is perfect. It is that I keep trying to find the person behind it.",
  },
  {
    id: "comment-3",
    name: "source_needed",
    meta: "Social response placeholder",
    text:
      "If no one experienced the feeling while making it, am I responding to art or to a mirror of previous art?",
  },
];

export const podcastTranscript = [
  {
    speaker: "AI Host",
    time: "00:00",
    text:
      "Today we are asking whether Nagel's question, what is it like to be a bat, also haunts artificial intelligence.",
  },
  {
    speaker: "Nagel Voice",
    time: "00:18",
    text:
      "The problem is not behavioral complexity alone. It is the subjective character of experience.",
  },
  {
    speaker: "AI Host",
    time: "00:42",
    text:
      "So an AI may produce convincing discourse about consciousness while leaving open whether anything is present to itself.",
  },
  {
    speaker: "Nagel Voice",
    time: "01:05",
    text:
      "And that uncertainty is precisely why the human listener becomes part of the experiment.",
  },
];
