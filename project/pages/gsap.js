import gsap from 'gsap';

const tl = gsap.timeline({ delay: 0.2 });
tl.from(".text", { opacity: 0, duration: 0.3 });

