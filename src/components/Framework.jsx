import { exp } from "three/tsl";
import { OrbitingCircles } from "./OrbitingCircles";

export function Framework() {
    const skills = [
        "javascript",
        "tailwindcss",
        "react",
        "nodejs",
        "expressjs",
        "mongodb",
        "cplusplus",
        "flutter",
        "firebase",
        "python",
        "dotnetcore",
        "csharp",
        "blazor",
        "wordpress",
        "git",
    ];
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center overflow-hidden">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill, index) => (
            <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {skills.reverse().map((skill, index) => (
            <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon =({src}) => (
    <img src={src} className="rounded-sm hover:scale-110 duration-200"/>
)

export default Framework;