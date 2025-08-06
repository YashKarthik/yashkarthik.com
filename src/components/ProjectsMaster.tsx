import "solid-js"
import { colorVariants } from "../colors";
import { projects } from "../projects";
import { createSignal, onMount, type Setter } from "solid-js";

export default function ProjectsMasterComponent({ colorVariant }: { colorVariant: "green" | "blue" | "orange" | "yellow" }) {
  const [ projectIdx, setProjectIdx] = createSignal(0);
  const [canScrollUp, setCanScrollUp] = createSignal(false);
  const [canScrollDown, setCanScrollDown] = createSignal(false);
  let tocRef: HTMLElement | undefined;

  const updateScrollState = () => {
    if (!tocRef) return;
    const { scrollTop, scrollHeight, clientHeight } = tocRef;
    
    // Check if content is actually scrollable
    const isScrollable = scrollHeight > clientHeight;
    
    if (!isScrollable) {
      setCanScrollUp(false);
      setCanScrollDown(false);
      return;
    }
    
    const canScrollUpValue = scrollTop > 10;
    const canScrollDownValue = scrollTop + clientHeight < scrollHeight - 10;
    
    setCanScrollUp(canScrollUpValue);
    setCanScrollDown(canScrollDownValue);
  };

  onMount(() => {
    const setupScrollListener = () => {
      if (tocRef) {
        updateScrollState();
        tocRef.addEventListener('scroll', updateScrollState);
      }
    };
    
    // Wait for DOM to be ready
    setTimeout(setupScrollListener, 200);
    
    // Check again on resize
    window.addEventListener('resize', () => {
      setTimeout(updateScrollState, 100);
    });
  });

  return (
    <div class="flex flex-col lg:flex-row lg:items-start lg:justify-between font-sans">

      <section 
        ref={tocRef}
        class="
          lg:sticky lg:top-32 lg:max-h-[80vh] lg:overflow-y-auto
          max-h-[12rem] sm:max-h-none lg:max-h-[80vh] overflow-y-auto
          grid gap-x-2 text-sm
          grid-cols-1 sm:grid-cols-3 lg:grid-cols-1
          content-start
          relative
        "
      >
        {projects.map((p, i) => (
          <ProjectElemInSidebar
            projectTitle={p.title}
            projectIdx={i}
            setProjectIdx={setProjectIdx}
            hoverTextStyle={colorVariants[colorVariant].groupHoverText}
          />
        ))}
        {canScrollUp() && (
          <div class="lg:hidden absolute top-1 right-2 text-zinc-400 dark:text-zinc-500 text-xs pointer-events-none animate-pulse">
            ↑
          </div>
        )}
        {canScrollDown() && (
          <div class="lg:hidden absolute bottom-1 right-2 text-zinc-400 dark:text-zinc-500 text-xs pointer-events-none animate-pulse">
            ↓
          </div>
        )}
      </section>

      <section class="
        sm:min-w-[50rem] sm:max-w-[50rem] 
        min-w-full max-w-full lg:min-w-[50rem] lg:max-w-[50rem]
        space-y-3 md:ml-16 ml-0 sm:ml-11 my-7 mx-0 lg:my-0
      ">
        <div>
          <h2 class="
            font-serif-styled text-3xl
          ">
            {projects[projectIdx()].title}
          </h2>

          <div class="flex flex-row gap-2">
            <a href={projects[projectIdx()].github} target="_blank" class="
              font-mono font-extralight text-xs
              underline decoration-2 decoration-dotted
              decoration-zinc-400 dark:decoration-zinc-500
              hover:decoration-zinc-500 dark:hover:decoration-zinc-400
              underline-offset-2 mt-1
              ">
                Source
            </a>
            {projects[projectIdx()].website &&
              <a href={projects[projectIdx()].website} target="_blank" class="
                font-mono font-extralight text-xs
                underline decoration-2 decoration-dotted
                decoration-zinc-400 dark:decoration-zinc-500
                hover:decoration-zinc-500 dark:hover:decoration-zinc-400
                underline-offset-2 mt-1
                ">
                  Live
              </a>
            }
          </div>
        </div>

        <p class="italic font-sans">
          {projects[projectIdx()].short_desc}
        </p>

        {projects[projectIdx()].long_desc.map(l => (
          <p class="font-sans">{l}</p>
        ))}

        <div class={`${(projects[projectIdx()]!.images?.length ?? 0) + (projects[projectIdx()]!.videos?.length ?? 0) > 1 ? "sm:columns-2" : ""}`}>
          {projects[projectIdx()]!.images?.map(image => (
            <img id="projects-section" src={image} alt="" class="
            max-h-[400px] sm:max-h-[600px] w-full object-cover
            my-3 border-transparent border-2 hover:border-0 
            grayscale hover:grayscale-0
            transition-all duration-300 ease-in-out
          "/>
          ))}
          {projects[projectIdx()]!.videos?.map(video => (
            <video autoplay loop muted preload="auto" class="max-h-[400px] sm:max-h-[600px] w-full object-cover">
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ))}
        </div>
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
      <span class={`text-zinc-400 dark:text-dark-500 font-serif-styled ${props.hoverTextStyle}`}>*&nbsp;</span>
      {props.projectTitle}
    </button>
  );
}
