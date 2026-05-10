import { useMemo, useState } from "react";

const spaces = {
  human: {
    label: "Human Intelligence",
    className: "human-cloud",
    traits: [
      "communication",
      "learning",
      "creativity",
      "tool use",
      "emotional expression",
      "theory-building",
      "embodiment",
      "sociality",
      "subjective experience",
    ],
    description:
      "High probability of language, art, philosophy, shared information, and cultural learning.",
  },
  ai: {
    label: "Artificial Intelligence",
    className: "ai-cloud",
    traits: [
      "communication",
      "learning",
      "creativity",
      "optimization",
      "theory-building",
      "tool use",
    ],
    description:
      "High probability of pattern generation, optimization, language mimicry, formal reasoning, and recombination.",
  },
  animal: {
    label: "Animal Intelligence",
    className: "animal-cloud",
    traits: [
      "communication",
      "learning",
      "creativity",
      "tool use",
      "emotional expression",
      "embodiment",
      "sociality",
      "subjective experience",
    ],
    description:
      "High probability of embodied perception, social learning, signaling, tool use, and aesthetic display.",
  },
  alien: {
    label: "Alien / Other Possible Intelligence",
    className: "alien-cloud",
    traits: [
      "communication",
      "learning",
      "creativity",
      "optimization",
      "embodiment",
      "subjective experience",
      "theory-building",
    ],
    description:
      "Speculative region representing possible intelligences not grounded in human assumptions.",
  },
};

function ProbabilitySpaceInteractive() {
  const [visible, setVisible] = useState({
    human: true,
    ai: true,
    animal: true,
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
                  <small>{count} active spaces</small>
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
