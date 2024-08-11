var tl = gsap.timeline ({defaults:{opacity:0}});

tl.from(".group0 h2", {x:150})
tl.from(".group0 li", {x:150, stagger:0.2})
tl.from(".group1 h2", {x:150})
tl.from(".group1 li", {x:150, stagger:0.2})
tl.from(".group2 h2", {x:150})
tl.from(".group2 li", {x:150, stagger:0.2})