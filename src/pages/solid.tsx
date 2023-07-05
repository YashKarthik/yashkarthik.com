import "solid-js";
import { Accessor, JSXElement, Setter, createEffect, createSignal } from "solid-js";

export default function SolidComponent() {
  const [elemVisibility, setElemVisibility] = createSignal(0);
  createEffect(() => {
    console.log(elemVisibility())
  });

  return (
    <div class="flex flex-col gap-0 max-w-[80ch]">
      <div class="
        md:ml-8 ml-5 mr-3 mb-10
        transition-opacity duration-300 ease-in-out
      ">

        {/* Hello section */}
        <div class="flex flex-row gap-2">
          <ExpandTextLink
            name="Hello"
            desiredElemVisibility={1}
            elemVisibility={elemVisibility}
            setElemVisibility={setElemVisibility}
          />
          <p>there.</p>
          <UnfoldingText
            desiredElemVisibility={1}
            visibilityAccessor={elemVisibility}
          >
            <p>It's nice to finally meet you.</p>
          </UnfoldingText>
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
          />
          <UnfoldingText
            desiredElemVisibility={2}
            visibilityAccessor={elemVisibility}
          >
            <p>
              a{" "}
              <ExpandTextLink
                name="programmer"
                desiredElemVisibility={3}
                elemVisibility={elemVisibility}
                setElemVisibility={setElemVisibility}
              />
              {" "}and{" "}
              <ExpandTextLink
                name="writer"
                desiredElemVisibility={4}
                elemVisibility={elemVisibility}
                setElemVisibility={setElemVisibility}
              />{"."}
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
              <p>Five years ago I awoke in a strange new world: I learned to</p>
              <ExpandTextLink
                name="code."
                desiredElemVisibility={3.1}
                elemVisibility={elemVisibility}
                setElemVisibility={setElemVisibility}
              />
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
              />.
            </p>
          </UnfoldingText>

          <UnfoldingText
            desiredElemVisibility={3.3}
            visibilityAccessor={elemVisibility}
          >
            <p>
              Since then, I've built fast and beautiful web apps; efficient and scalable backends;
              cute and silly robots; and learned to embrace the lightness of being a <i>perpetual beginner</i>.
            </p>
          </UnfoldingText>

        </div>

        <br/>

        {/* Writing section */}
        <div class="flex flex-col gap-2">
          <UnfoldingText
            desiredElemVisibility={4}
            visibilityAccessor={elemVisibility}
          >
            <p class="w-max">
              Many things capture my interest. I write about them <a href="/archive" class="underline decoration-2 underline-offset-2 decoration-[#00e100]">here</a>.
            </p>

          </UnfoldingText>

          {/* Meta section */}
          <UnfoldingText
            desiredElemVisibility={4}
            visibilityAccessor={elemVisibility}
          >
            <div class="flex flex-row gap-2 mt-5">
              <p> I can be found as </p>
              <a href="/about#contact" class="underline decoration-2 underline-offset-2 decoration-[#00e100]">@yashkarthik</a>
              <p> {' '}(and its variations) on the interwebs. </p>
            </div>
          </UnfoldingText>
        </div>


      </div>
    </div>
  );
}

function ExpandTextLink(props: {name: string; desiredElemVisibility: number; elemVisibility: Accessor<number>; setElemVisibility:Setter<number>}) {

  const [toggled, setToggle] = createSignal(false);
  const handleClick = () => {
    if (toggled()) return;
    props.setElemVisibility(props.desiredElemVisibility);
    if (props.name == "programmer" || props.name == "writer") toggleTheme();
  }

  createEffect(() => {
    if (props.elemVisibility() == props.desiredElemVisibility) setToggle(true);
  });

  return (
    <a href="#" onClick={handleClick} class={`
      ${toggled() ? "pointer-events-none" : "underline"} decoration-2
      underline-offset-2 decoration-[#00e100]
    `}
    >
      {props.name}
    </a>
  );
}

function UnfoldingText(props: {visibilityAccessor: Accessor<number>; desiredElemVisibility: number; children: JSXElement}) {
  const [ visible, setVisibility] = createSignal(false);
  createEffect(() => {
    if (props.visibilityAccessor() == props.desiredElemVisibility) setVisibility(true);
  });
  return (
    <div class={`
      ${!visible() ? "collapse opacity-0" : "visible opacity-100"}
      transition-all duration-200 ease-in-out
      flex gap-1
    `}>
      {props.children}
    </div>
  );
}

function toggleTheme() {
  const element = document.documentElement;
  element.classList.toggle("dark");
}
