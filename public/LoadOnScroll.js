const heroRef = useRef(null);

useEffect(() => {
  const handleScroll = () => {
    if (heroRef.current) {
      const { top } = heroRef.current.getBoundingClientRect();
      if (top <= window.innerHeight / 2) {
        heroRef.current.classList.add("animate");
      } else {
        heroRef.current.classList.remove("animate");
      }
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);
