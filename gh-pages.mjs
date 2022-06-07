import { publish } from "gh-pages";

publish(
  "dist",
  {
    branch: "deploy",
    repo: "https://github.com/Fhellipy/twitter-clone",
    user: {
      name: "Fhellipy Conceição Santana",
      email: "ffhellipyc.santana@gmail.com",
    },
    dotfiles: true,
  },
  () => {
    console.log("Deploy Completo!");
  }
);