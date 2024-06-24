document.addEventListener("DOMContentLoaded", () => {
  const videos = document.querySelectorAll(".video-carousel video");
  const indicators = document.querySelectorAll(".indicator");
  let currentVideoIndex = 0;

  function showVideo(index) {
    videos.forEach((video, idx) => {
      video.classList.toggle("active", idx === index);
      indicators[idx].classList.toggle("active", idx === index);
      if (idx === index) {
        video.play();
      } else {
        video.pause();
        video.currentTime = 0; // Reset the video to the start
      }
    });
  }

  document.getElementById("nextBtn").addEventListener("click", () => {
    currentVideoIndex = (currentVideoIndex + 1) % videos.length;
    showVideo(currentVideoIndex);
  });

  document.getElementById("prevBtn").addEventListener("click", () => {
    currentVideoIndex = (currentVideoIndex - 1 + videos.length) % videos.length;
    showVideo(currentVideoIndex);
  });

  indicators.forEach((indicator, idx) => {
    indicator.addEventListener("click", () => {
      currentVideoIndex = idx;
      showVideo(currentVideoIndex);
    });
  });

  // Initially show the first video
  showVideo(currentVideoIndex);

  // Add to Cart button functionality (example)
  document.querySelector(".add-to-cart-btn").addEventListener("click", () => {
    alert("Item added to cart!");
  });
});
