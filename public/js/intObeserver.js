const useImageIntersectionObserver = (callback, delay = 0, threshold) => {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            callback(entry.target); // Call the callback function with the observed target
            observer.unobserve(entry.target);
          }, delay);
        }
      });
    }, {threshold});
  
    return observer;
  };
  

  document.querySelectorAll('.col-md-4').forEach((col, index) => {
    var threshold = .05;
    let delay
    const callback = (target) => {
      target.style.transform = "translateY(0px)";
    };
  
    // if (index < 3){
    //      delay = (index + 1) * 0; 
    // } else {
    //   threshold = .01
    //     delay = (index - 2) * 0
    // }
    
    const observer = useImageIntersectionObserver(callback, delay, threshold);
  
    observer.observe(col);
  });
  