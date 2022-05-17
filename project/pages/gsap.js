
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
const tl = gsap.timeline({ delay: 0.3 });
tl.from(".site", { opacity: 0, duration: 0.3 });
gsap.to(".text", { color: "#db7272", duration: 2 })



