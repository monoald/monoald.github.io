import colorsKitLogo from "./icons/colors-kit-logo.svg";
import auraWeb from "./images/aura-web.webp";
import paletteLogo from "./icons/palette-logo.svg";
import honoLogo from "./icons/hono.svg";
import berlinLogo from "./images/berlin.png";

export const SITE_TITLE = "MonoAld";
export const SITE_DESCRIPTION = "Welcome to my website!";

export const stack = [
  {
    name: "HTML",
    color: "#EF652A",
  },
  {
    name: "CSS",
    color: "#30A9DC",
  },
  {
    name: "JavaScript",
    color: "#F0DB4F",
  },
  {
    name: "TypeScript",
    color: "#3178C6",
  },
  {
    name: "Tailwind",
    color: "#17BAB8",
  },
  {
    name: "React",
    color: "#00D8FF",
  },
  {
    name: "Redux",
    color: "#764ABC",
  },
  {
    name: "Next",
    color: "#FAFAFA",
  },
  {
    name: "Astro",
    color: "#FAFAFA",
  },
  {
    name: "NodeJS",
    color: "#539E43",
  },
  {
    name: "ExpressJS",
    color: "#FAFAFA",
  },
  {
    name: "GraphQL",
    color: "#F6009C",
  },
  {
    name: "Deno",
    color: "#FAFAFA",
  },
  {
    name: "Hono",
    color: "#FD5A11",
  },
  {
    name: "Jasmine",
    color: "#8A4182",
  },
  {
    name: "Jest",
    color: "#99425B",
  },
  {
    name: "Testing Library",
    color: "#DC312F",
  },
  {
    name: "Git",
    color: "#DE4C36",
  },
  {
    name: "Linux",
    color: "#DFAF22",
  },
  {
    name: "VS Code",
    color: "#3DA9F2",
  },
  {
    name: "Figma",
    color: "#A95FFF",
  },
];

export const projects = [
  {
    name: "Berlin",
    description:
      'AI generative web app that converts <b style="color: #FAA628;">Images to code</b>, offering a freemium subscription that provides 8 free credits per month to every user. The code generation is made by ChatGPT using the OpenAI API.',
    image: berlinLogo,
    url: "https://berlin-ai.vercel.app/",
  },
  {
    name: "Palette",
    description:
      'A <b style="color: #FAA628;">Web App</b> to craft stunning color palettes, simulate color blindness for accessibility, create eye-catching gradients and animations, and save your favorites for easy access. Plus, add a personal touch with font icon creation.',
    image: paletteLogo,
    url: "https://app-palette.vercel.app",
  },
  {
    name: "Oauth Providers",
    description:
      'A light, simple and easy to use third party <b style="color: #FAA628;">Hono</b> middleware for <b style="color: #FAA628;">OAuth 2.0</b> authentication with providers like Facebook, Github, Google, X, etc. Part of the <b style="color: #FAA628;">official</b> Hono middlewares.',
    image: honoLogo,
    url: "https://github.com/honojs/middleware/tree/main/packages/oauth-providers",
  },

  {
    name: "Colors Kit",
    description:
      '<b style="color: #FAA628;">Npm package</b> for color manipulation in formats like CMYK, RGB, etc. With it, you can convert a color between formats, simulate color blindness, generate all sorts of palettes, image color extraction, and more.',
    image: colorsKitLogo,
    url: "/colors-kit-docs",
  },
];
