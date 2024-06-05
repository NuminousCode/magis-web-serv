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
  
  // Usage example:
  document.querySelectorAll('.col-md-4').forEach((col, index) => {
    const threshold = .1;
    let delay
    const callback = (target) => {
      target.style.transform = "translateY(0px)";
    };
  
    if (index < 3){
         delay = (index + 1) * 150; 
    } else {
        delay = (index - 2) * 150
    }
    
    // Use the useImageIntersectionObserver function to create an observer for each col-md-4
    const observer = useImageIntersectionObserver(callback, delay, threshold);
  
    // Attach the observer to the col-md-4 element
    observer.observe(col);
  });
  