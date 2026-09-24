"use client";

import { useState } from "react";
import { skillScenes } from "../data/skills";

const SkillPlayground = () => {
  const [activeSceneIndex, setActiveSceneIndex] = useState(0);
  const activeScene = skillScenes[activeSceneIndex];

  return (
    <div
      className="skill-story"
      data-active-scene={activeScene.title.toLowerCase()}
      role="region"
      aria-label="Interactive skills console"
    >
      <div className="skill-device" aria-hidden="true">
        <div className="device-bar">
          <span />
          <span />
          <span />
        </div>
        <div className="device-screen">
          <div className="device-sidebar" />
          <div className="device-main">
            <span />
            <span />
            <span />
          </div>
          <div className="device-card device-card-a" />
          <div className="device-card device-card-b" />
          <div className="device-chip">{activeScene.preview.primary}</div>
          <div className="device-chip device-chip-alt">
            {activeScene.preview.secondary}
          </div>
          <div className="device-status">
            <span>{activeScene.preview.metric}</span>
            <strong>{activeScene.preview.value}</strong>
          </div>
        </div>
      </div>

      <div className="skill-scenes" role="tablist" aria-label="Skill areas">
        {skillScenes.map((scene, index) => {
          const isActive = activeSceneIndex === index;

          return (
            <button
              aria-controls="skill-console-output"
              aria-selected={isActive}
              className="skill-scene"
              id={`skill-tab-${index}`}
              key={scene.eyebrow}
              onClick={() => setActiveSceneIndex(index)}
              onFocus={() => setActiveSceneIndex(index)}
              onMouseEnter={() => setActiveSceneIndex(index)}
              role="tab"
              type="button"
            >
              <div>
                <p>{scene.eyebrow}</p>
                <h3>{scene.title}</h3>
                <span>{scene.detail}</span>
              </div>
              <ul>
                {scene.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              <code id={isActive ? "skill-console-output" : undefined}>
                {scene.code.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </code>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export { SkillPlayground };
