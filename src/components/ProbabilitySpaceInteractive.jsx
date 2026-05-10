import { useMemo, useState } from "react";

const spaces = {
  human: {
    label: "Human Intelligence",
    className: "human-cloud",
    traits: [
      "spoken language",
      "symbolic writing",
      "tool use",
      "bipedal motion",
      "music composition",
      "visual art creation",
      "philosophical argument",
      "shared technical knowledge",
      "cumulative culture",
      "intimate bonding",
    ],
    description:
      "Dense region for spoken language, symbolic culture, art, philosophy, tool use, bipedal motion, and cumulative knowledge sharing.",
  },
  ai: {
    label: "Artificial Intelligence",
    className: "ai-cloud",
    traits: [
      "spoken language",
      "symbolic writing",
      "music composition",
      "visual art creation",
      "philosophical argument",
      "style imitation",
      "pattern recombination",
      "formal optimization",
      "shared technical knowledge",
    ],
    description:
      "Dense region for symbolic output, style imitation, pattern recombination, optimization, language, music, images, and formal argument.",
  },
  animal: {
    label: "Chimpanzee Intelligence",
    className: "chimp-cloud",
    traits: [
      "tool use",
      "social learning",
      "gestural communication",
      "emotional bonding",
      "strategic cooperation",
      "color exploration",
      "proto-art making",
      "embodied problem solving",
    ],
    description:
      "Close animal comparison: high probability of tool use, social learning, gestural communication, emotional bonding, and embodied problem solving.",
  },
  crow: {
    label: "Corvid Intelligence",
    className: "crow-cloud",
    traits: [
      "tool use",
      "causal problem solving",
      "object memory",
      "route planning",
      "social signaling",
      "strategic cooperation",
      "pattern recombination",
    ],
    description:
      "Strong non-primate comparison: high probability of tool use, causal problem solving, memory, planning, and social signaling.",
  },
  octopus: {
    label: "Octopus Intelligence",
    className: "octopus-cloud",
    traits: [
      "object manipulation",
      "camouflage display",
      "embodied problem solving",
      "distributed sensing",
      "escape planning",
      "environmental exploration",
    ],
    description:
      "Distant animal comparison: high probability of distributed sensing, object manipulation, camouflage display, and exploratory problem solving.",
  },
  jerboa: {
    label: "Jerboa Intelligence",
    className: "jerboa-cloud",
    traits: ["bipedal motion", "embodied navigation", "predator avoidance", "burrow use"],
    description:
      "A deliberately narrow overlap case: bipedal motion, embodied navigation, predator avoidance, and burrow use without most traits humans use to define uniqueness.",
  },
  alien: {
    label: "Alien / Other Possible Intelligence",
    className: "alien-cloud",
    traits: [
      "unknown symbolic systems",
      "nonhuman embodiment",
      "nonhuman art forms",
      "nonhuman theory-building",
      "environmental engineering",
      "collective cognition",
      "pattern recombination",
    ],
    description:
      "Speculative region for possible intelligences not grounded in human assumptions: unknown symbols, other embodiments, collective cognition, and alien art or theory.",
  },
};

const overlapExamples = [
  {
    id: "human-ai",
    keys: ["human", "ai"],
    text: "Human + AI: spoken language, symbolic writing, music composition, visual art creation, philosophical argument.",
  },
  {
    id: "human-chimp",
    keys: ["human", "animal"],
    text: "Human + chimpanzee: tool use, social learning, emotional bonding, embodied problem solving.",
  },
  {
    id: "human-crow",
    keys: ["human", "crow"],
    text: "Human + corvid: tool use, route planning, social signaling, strategic cooperation.",
  },
  {
    id: "human-octopus",
    keys: ["human", "octopus"],
    text: "Human + octopus: object manipulation, embodied problem solving, environmental exploration.",
  },
  {
    id: "human-jerboa",
    keys: ["human", "jerboa"],
    text: "Human + jerboa: bipedal motion, embodied navigation.",
  },
  {
    id: "ai-crow",
    keys: ["ai", "crow"],
    text: "AI + corvid: pattern recombination, tool-oriented problem solving.",
  },
];

function ProbabilitySpaceInteractive() {
  const [visible, setVisible] = useState({
    human: true,
    ai: true,
    animal: true,
    crow: true,
    octopus: true,
    jerboa: false,
    alien: true,
  });
  const [global, setGlobal] = useState(false);
  const [selected, setSelected] = useState("human");

  const activeKeys = Object.keys(spaces).filter((key) => visible[key]);
  const sharedTraits = useMemo(() => {
    if (activeKeys.length < 2) return [];
    const counts = new Map();
    activeKeys.forEach((key) => {
      spaces[key].traits.forEach((trait) => counts.set(trait, (counts.get(trait) || 0) + 1));
    });
    return [...counts.entries()]
      .filter(([, count]) => count > 1)
      .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
      .map(([trait, count]) => ({ trait, count }));
  }, [activeKeys]);

  const toggleSpace = (key) => {
    setVisible((current) => ({ ...current, [key]: !current[key] }));
    setSelected(key);
  };

  return (
    <div className="probability-interactive">
      <div className="probability-primer">
        <p className="eyebrow">How to Read This Map</p>
        <p>
          Each circle is a probability field, not a hard category. Brightness and opacity peak in
          the center, where a creature or system has the highest probability of expressing a
          capability. The field diffuses into the background as the probability weakens.
        </p>
        <p>
          Toggle spaces on and off, click a space to update the selected-region panel, and combine
          the spaces into one global map. The shared-traits panel lists traits with shared high
          probabilities across the visible spaces. There is no precise measuring system here; the
          map is a conceptual model for overlap, not a quantified dataset.
        </p>
      </div>
      <div className="probability-toolbar">
        {Object.entries(spaces).map(([key, space]) => (
          <label key={key}>
            <input type="checkbox" checked={visible[key]} onChange={() => toggleSpace(key)} />
            <span>{space.label}</span>
          </label>
        ))}
        <label className="global-toggle">
          <input type="checkbox" checked={global} onChange={() => setGlobal((value) => !value)} />
          <span>Combine into Global Probability Space</span>
        </label>
      </div>

      <div className={global ? "probability-map is-global" : "probability-map"}>
        <div className="map-grid" aria-hidden="true" />
        {Object.entries(spaces).map(([key, space]) => (
          <button
            key={key}
            className={`probability-cloud ${space.className} ${visible[key] ? "is-visible" : ""} ${
              selected === key ? "is-selected" : ""
            }`}
            onClick={() => setSelected(key)}
            aria-pressed={selected === key}
          >
            <span>{space.label}</span>
          </button>
        ))}
        <div className="overlap-callouts" aria-live="polite">
          {overlapExamples.map((example) => {
            const active = example.keys.every((key) => visible[key]);
            return (
              <button
                key={example.id}
                className={`overlap-chip ${example.id} ${active ? "is-active" : ""}`}
                onClick={() => setSelected(example.keys[0])}
              >
                {example.text}
              </button>
            );
          })}
        </div>
      </div>

      <div className="probability-panels">
        <section>
          <p className="eyebrow">Selected Region</p>
          <h4>{spaces[selected].label}</h4>
          <p>{spaces[selected].description}</p>
        </section>
        <section>
          <p className="eyebrow">Shared Traits</p>
          {sharedTraits.length > 0 ? (
            <ul className="trait-list">
              {sharedTraits.map(({ trait, count }) => (
                <li key={trait}>
                  <span>{trait}</span>
                  <small>shared high probability in {count} spaces</small>
                </li>
              ))}
            </ul>
          ) : (
            <p>Activate two or more spaces to reveal overlapping traits.</p>
          )}
        </section>
      </div>
    </div>
  );
}

export default ProbabilitySpaceInteractive;
