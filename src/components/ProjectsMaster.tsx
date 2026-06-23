import "solid-js";
import { projects } from "../projects";
import { createSignal } from "solid-js";

export default function ProjectsMasterComponent() {
  const [projectIdx, setProjectIdx] = createSignal(0);

  const project = () => projects[projectIdx()];

  return (
    <div style="display: flex; gap: 0; flex-direction: row; min-height: 60vh;">

      <aside style="
        width: 220px;
        flex-shrink: 0;
        border-right: 1px solid var(--border);
        overflow-y: auto;
      ">
        {projects.map((p, i) => (
          <button
            type="button"
            onclick={() => setProjectIdx(i)}
            style={`
              display: block;
              width: 100%;
              text-align: left;
              padding: 8px 12px;
              background: ${projectIdx() === i ? "var(--bg-subtle)" : "transparent"};
              color: ${projectIdx() === i ? "var(--accent)" : "var(--text-muted)"};
              border: none;
              border-bottom: 1px solid var(--border);
              cursor: pointer;
              font-family: inherit;
              font-size: 12px;
              line-height: 1.4;
              transition: color 80ms, background 80ms;
            `}
            onmouseover={(e) => {
              if (projectIdx() !== i) (e.currentTarget as HTMLElement).style.color = "var(--text)";
            }}
            onmouseout={(e) => {
              if (projectIdx() !== i) (e.currentTarget as HTMLElement).style.color = "var(--text-muted)";
            }}
          >
            <span style={`margin-right: 6px; ${projectIdx() === i ? "color: var(--accent);" : "color: var(--border-bright);"}`}>›</span>
            {p.title}
          </button>
        ))}
      </aside>

      <div style="flex: 1; padding: 24px 32px; overflow-y: auto;">
        <div style="margin-bottom: 20px; padding-bottom: 16px; border-bottom: 1px solid var(--border);">
          <h2 style="font-size: 16px; font-weight: 700; color: var(--text); margin-bottom: 8px;">
            {project().title}
          </h2>
          <div style="display: flex; gap: 16px; font-size: 11px;">
            {project().github && (
              <a
                href={project().github}
                target="_blank"
                style="color: var(--text-muted); letter-spacing: 0.05em;"
                onmouseover={(e) => (e.currentTarget as HTMLElement).style.color = "var(--accent)"}
                onmouseout={(e) => (e.currentTarget as HTMLElement).style.color = "var(--text-muted)"}
              >
                [source]
              </a>
            )}
            {project().website && (
              <a
                href={project().website}
                target="_blank"
                style="color: var(--text-muted); letter-spacing: 0.05em;"
                onmouseover={(e) => (e.currentTarget as HTMLElement).style.color = "var(--accent)"}
                onmouseout={(e) => (e.currentTarget as HTMLElement).style.color = "var(--text-muted)"}
              >
                [live]
              </a>
            )}
          </div>
        </div>

        <p style="color: var(--text-dim); font-size: 12px; margin-bottom: 16px; font-style: italic; line-height: 1.7;">
          {project().short_desc}
        </p>

        <div style="display: flex; flex-direction: column; gap: 12px; margin-bottom: 24px;">
          {project().long_desc.map((para) => (
            <p style="color: var(--text-muted); font-size: 12px; line-height: 1.7;">{para}</p>
          ))}
        </div>

        {((project().images?.length ?? 0) + (project().videos?.length ?? 0)) > 0 && (
          <div style={`
            display: grid;
            gap: 12px;
            grid-template-columns: ${(project().images?.length ?? 0) + (project().videos?.length ?? 0) > 1 ? "1fr 1fr" : "1fr"};
          `}>
            {project().images?.map((src) => (
              <img
                src={src}
                alt=""
                style="
                  width: 100%;
                  object-fit: cover;
                  max-height: 360px;
                  border: 1px solid var(--border);
                  filter: grayscale(60%);
                  transition: filter 200ms;
                "
                onmouseover={(e) => (e.currentTarget as HTMLImageElement).style.filter = "grayscale(0%)"}
                onmouseout={(e) => (e.currentTarget as HTMLImageElement).style.filter = "grayscale(60%)"}
              />
            ))}
            {project().videos?.map((src) => (
              <video
                autoplay
                loop
                muted
                preload="auto"
                style="width: 100%; max-height: 360px; object-fit: cover; border: 1px solid var(--border);"
              >
                <source src={src} type="video/mp4" />
              </video>
            ))}
          </div>
        )}
      </div>

    </div>
  );
}
