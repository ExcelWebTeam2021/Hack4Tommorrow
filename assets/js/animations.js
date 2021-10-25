if ($(window).width() <= 800) {
   ScrollLottie({
      target: "#initial_idea",
      path: "assets/animation/initial_idea.json",
      duration: 1,
      speed: "fast",
   });

   ScrollLottie({
      target: "#execution",
      path: "assets/animation/idea_execution.json",
      duration: 1,
      speed: "fast",
   });

   ScrollLottie({
      target: "#hackathon_rewards",
      path: "assets/animation/rewards.json",
      duration: 1,
      speed: "fast",
   });

   ScrollLottie({
      target: "#showcase",
      path: "assets/animation/showcase.json",
      duration: 1,
      speed: "fast",
   });
} else {
   ScrollLottie({
      target: "#initial_idea",
      path: "assets/animation/initial_idea.json",
      duration: 1,
      speed: "medium",
   });

   ScrollLottie({
      target: "#execution",
      path: "assets/animation/idea_execution.json",
      duration: 1,
      speed: "medium",
   });

   ScrollLottie({
      target: "#hackathon_rewards",
      path: "assets/animation/rewards.json",
      duration: 1,
      speed: "medium",
   });

   ScrollLottie({
      target: "#showcase",
      path: "assets/animation/showcase.json",
      duration: 1,
      speed: "medium",
   });
}
