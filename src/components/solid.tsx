import "solid-js";
import { createEffect, createSignal } from "solid-js";
import type { Accessor, JSXElement, Setter } from "solid-js";

import ProjectsMasterComponent from "./ProjectsMaster.tsx";

import { colorVariants } from "../colors.ts"

export default function SolidComponent({ colorVariant }: { colorVariant: "green" | "blue" | "orange" | "yellow" }) {

  const [elemVisibility, setElemVisibility] = createSignal(0);
  createEffect(() => {
    console.log(elemVisibility())

    const hasReadBio = (() => {
      if (!localStorage.getItem("hasReadBio")) return false;
      return localStorage.getItem("hasReadBio") == "true";
    })();

    if (hasReadBio) setElemVisibility(5);
  });

  return (
    <main class="flex flex-col">

      <div class={`
        flex flex-col
        justify-between gap-0
        max-w-[80ch]
      `}>
        <div class="
          md:ml-8 ml-5 mr-3 mb-10
          transition-opacity duration-300 ease-in-out
        ">

          {/* Hello section */}
          <div class="flex flex-row gap-2">
            <p>Hi there. It's nice to finally meet you.</p>
          </div>

          <br/>

          {/* Intro section */}

          <div class="flex flex-row gap-2">
            <p>I'm</p>
            <ExpandTextLink
              name={`Yash Karthik${elemVisibility() >= 2 ? "," : "."}`}
              desiredElemVisibility={2}
              elemVisibility={elemVisibility}
              setElemVisibility={setElemVisibility}
              decorationColor={colorVariants[colorVariant].decorationColor}
            />
            <UnfoldingText
              desiredElemVisibility={2}
              visibilityAccessor={elemVisibility}
            >
              <p>
                I'm a{" "}
                <ExpandTextLink
                  name="programmer"
                  desiredElemVisibility={3}
                  elemVisibility={elemVisibility}
                  setElemVisibility={setElemVisibility}
                decorationColor={colorVariants[colorVariant].decorationColor}
                />.
              </p>
            </UnfoldingText>
          </div>

          <br/>

          {/* Coding section */}
          <div class="flex flex-col gap-2">
            <UnfoldingText
              desiredElemVisibility={3}
              visibilityAccessor={elemVisibility}
            >
              <div class="flex flex-row gap-1">
                <p>
                  Five years ago I awoke in a strange new world: I learned to{' '}
                  <ExpandTextLink
                    name="code."
                    desiredElemVisibility={3.1}
                    elemVisibility={elemVisibility}
                    setElemVisibility={setElemVisibility}
                    decorationColor={colorVariants[colorVariant].decorationColor}
                  />
                </p>
              </div>

            </UnfoldingText>

            <UnfoldingText
              desiredElemVisibility={3.1}
              visibilityAccessor={elemVisibility}
            >
              <p>
                My friend and I were tasked with cleaning-up the robotics lab after a late night session.
                Rather than spending hours sorting the parts manually, we{" "}
                <ExpandTextLink
                  name="built"
                  desiredElemVisibility={3.2}
                  elemVisibility={elemVisibility}
                  setElemVisibility={setElemVisibility}
                  decorationColor={colorVariants[colorVariant].decorationColor}
                />
                {" "} a robot to do it for us (finishing the task in a few days instead of hours xD).
              </p>
            </UnfoldingText>

            <UnfoldingText
              desiredElemVisibility={3.2}
              visibilityAccessor={elemVisibility}
            >
              <p>
                I knew how transformative technology is. It had been all around us.
                But actually leveraging it myself to automate a mundane task was when I truly <i>grokked</i> the power of{" "}
                <ExpandTextLink
                  name="technology"
                  desiredElemVisibility={3.3}
                  elemVisibility={elemVisibility}
                  setElemVisibility={setElemVisibility}
                  decorationColor={colorVariants[colorVariant].decorationColor}
                />.
              </p>
            </UnfoldingText>

            <UnfoldingText
              desiredElemVisibility={3.3}
              visibilityAccessor={elemVisibility}
            >
              <p>
                Since then, I've built fast and beautiful web apps; efficient and powerful robots;
                slow and pointless(?) VMs; and learned to embrace the lightness of being a{' '}
                <i>
                  <ExpandTextLink
                    name="perpetual beginner"
                    desiredElemVisibility={5}
                    elemVisibility={elemVisibility}
                    setElemVisibility={setElemVisibility}
                    decorationColor={colorVariants[colorVariant].decorationColor}
                  />
                </i>.
              </p>
            </UnfoldingText>

          </div>

          <br/>

          {/* Section about IRL */}
          <div class="flex flex-col gap-2">
            <UnfoldingText
              desiredElemVisibility={5}
              visibilityAccessor={elemVisibility}
            >
              <div class="w-max">
                <p> I'm currently... </p>
                <ul class="ml-5 list-disc">
                  <li><s>crashing</s> Building drones.</li>
                  <li>Hacking on 3d renderers.</li>
                  <li>Studying computer engineering at{' '}
                    <a href="https://uw-ece.github.io/webring/" target="_blank" class={`
                      pb-0
                      underline decoration-2 ${colorVariants[colorVariant].decorationColor}
                      underline-offset-2
                    `}>
                      Waterloo
                    </a>.
                  </li>
                  <li>
                    Trying to find more{' '}
                    <a href="/people" target="_blank" class={`
                      pb-0
                      underline decoration-2 ${colorVariants[colorVariant].decorationColor}
                      underline-offset-2
                    `}>
                      people
                    </a>{' '}

                    to nerd out with (
                    <a href="/links" target="_blank" class={`
                      pb-0
                      underline decoration-2 ${colorVariants[colorVariant].decorationColor}
                      underline-offset-2
                    `}>
                      reach out
                    </a>
                    !!).
                  </li>
                </ul>
              </div>

              <br/>
              <br/>
              <br/>
              <p class="text-zinc-400 dark:text-zinc-500"> *** </p>
            </UnfoldingText>
          </div>
        </div>
      </div>

      <div class={`
        max-sm:w-10/12 self-start
        ml-8
        ${elemVisibility() >= 5 ? "" : "hidden "}
      `}>
        <header class="
          items-center
          text-start 
          mb-7
        ">
          <h1 class="
            text-3xl
            font-serif-styled font-black
            mb-3
          ">
            Projects
          </h1>

          <p class="
            mt-1
            text-sm italic
            prose dark:prose-invert
          ">
            Robust, bleeding edge systems; <br/>
            Random puzzles & scripts; <br/>
            Graveyard of abandoned ideas.
          </p>
        </header>

        <ProjectsMasterComponent colorVariant={colorVariant} />
      </div>
    </main>
  );
}

function ExpandTextLink(props: {name: string; desiredElemVisibility: number; elemVisibility: Accessor<number>; setElemVisibility:Setter<number>, decorationColor: string}) {

  const [toggled, setToggle] = createSignal(false);

  const handleClick = () => {
    if (toggled()) return;
    props.setElemVisibility(props.desiredElemVisibility);

    if (props.name == "programmer") toggleTheme();
    if (props.name == "perpetual beginner") {
      localStorage.setItem("hasReadBio", "true");
    }
  }

  createEffect(() => {
    if (props.elemVisibility() >= props.desiredElemVisibility) setToggle(true);
  });

  return (
    <a href="#" onClick={handleClick} class={`
      ${toggled() ? "pointer-events-none" : "underline"}
      decoration-2
      underline-offset-2
      ${props.decorationColor}
    `}
    >
      {props.name}
    </a>
  );
}

function UnfoldingText(props: {visibilityAccessor: Accessor<number>; desiredElemVisibility: number; children: JSXElement}) {

  const [ visible, setVisibility] = createSignal(false);
  createEffect(() => {
    if (props.visibilityAccessor() >= props.desiredElemVisibility) setVisibility(true);
  });

  return (
    <div class={`
      ${!visible() ? "collapse opacity-0" : "visible opacity-100"}
      transition-opacity duration-200 ease-in-out
      flex flex-col gap-1
    `}>
      {props.children}
    </div>
  );
}

function toggleTheme() {
  const element = document.documentElement;
  element.classList.toggle("dark");
}
