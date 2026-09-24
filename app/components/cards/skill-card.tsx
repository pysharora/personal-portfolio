import type { SkillGroup } from "@/data/skills";
import { Badge } from "../ui/badge";

type SkillCardProps = SkillGroup & {
  index: number;
};

const SkillCard = ({
  title,
  description,
  technologies,
  index,
}: SkillCardProps) => {
  return (
    <li className="skill-card">
      <div className="skill-card-top">
        <span className="skill-number">0{index + 1}</span>
        <span className="skill-mark text-symbol" aria-hidden="true">
          {"↘\uFE0E"}
        </span>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <ul className="skill-tags">
        {technologies.map((technology) => (
          <Badge asChild key={technology}>
            <li>{technology}</li>
          </Badge>
        ))}
      </ul>
    </li>
  );
};

export { SkillCard };
