import "solid-js"
import { colorVariants } from "../colors";
import { projects } from "../projects";
import { createSignal, type Setter } from "solid-js";

export default function ProjectsMasterComponent({ colorVariant }: { colorVariant: "green" | "blue" | "orange" | "yellow" }) {
  const [ projectIdx, setProjectIdx] = createSignal(0);

  return (
    <div class="flex flex-col items-center lg:flex-row lg:items-start">

      <section class="
        lg:sticky lg:top-32
        grid gap-x-2 text-sm
        grid-cols-2 sm:grid-cols-3 lg:grid-cols-1
        content-start
      ">
        {projects.map((p, i) => (
          <ProjectElemInSidebar
            projectTitle={p.title}
            projectIdx={i}
            setProjectIdx={setProjectIdx}
            hoverTextStyle={colorVariants[colorVariant].groupHoverText}
          />
        ))}
      </section>

      <section class="
        sm:min-w-[40rem] sm:max-w-[40rem] min-h-[40rem]
        min-w-[23rem] max-w-[23rem]
        space-y-3 md:ml-16 ml-11 my-7 mx-0 lg:my-0
      ">
        <div>
          <h2 class="
            font-heading text-4xl
          ">
            {projects[projectIdx()].title}
          </h2>

          <div class="flex flex-row gap-2">
            <a href={projects[projectIdx()].github} target="_blank" class="
              font-mono font-extralight text-xs
              underline decoration-2 decoration-dotted
              decoration-zinc-400 dark:decoration-zinc-500
              hover:decoration-zinc-500 dark:hover:decoration-zinc-400
              underline-offset-2
              ">
                Source
            </a>
            {projects[projectIdx()].website &&
              <a href={projects[projectIdx()].website} target="_blank" class="
                font-mono font-extralight text-xs
                underline decoration-2 decoration-dotted
                decoration-zinc-400 dark:decoration-zinc-500
                hover:decoration-zinc-500 dark:hover:decoration-zinc-400
                underline-offset-2
                ">
                  Visit
              </a>
            }
          </div>
        </div>

        <p class="italic">
          {projects[projectIdx()].short_desc}
        </p>

        {projects[projectIdx()].long_desc.map(l => (
          <p>{l}</p>
        ))}
        {projects[projectIdx()].images &&
          <img id="projects-section" class="grayscale hover:grayscale-0 transition-all duration-300 ease-in-out" src={projects[projectIdx()]!.images![0]} alt="" />
        }

      </section>

    </div>
  );
}

type TProjectElemInSidebar = {
  projectTitle: string;
  projectIdx: number;
  setProjectIdx: Setter<number>;
  hoverTextStyle: string;
}

function ProjectElemInSidebar(props: TProjectElemInSidebar) {

  return (
    <button type="button" onclick={() => props.setProjectIdx(props.projectIdx)} onmouseenter={() => props.setProjectIdx(props.projectIdx)} class="
      group hover:cursor-crosshair
      text-sm sm:text-md
      p-1 max-w-fit
      hover:bg-zinc-100 dark:hover:bg-zinc-900
      transition-colors duration-100 ease-in-out
    ">
      <span class={`text-zinc-400 dark:text-dark-500 ${props.hoverTextStyle}`}>*&nbsp;</span>
      {props.projectTitle}
    </button>
  );
}
