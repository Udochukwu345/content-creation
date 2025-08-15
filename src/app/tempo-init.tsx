"use client";
// Import the dev tools and initialize them
import { useEffect } from "react";

export function TempoInit() {
  useEffect(() => {
    const init = async () => {
      if (process.env.NEXT_PUBLIC_TEMPO) {
        const { TempoDevtools } = await import("tempo-devtools");
        TempoDevtools.init();
      }
    };

    init();
  }, []);

  // Add carousel functionality
  useEffect(() => {
    const handleCarouselNavigation = () => {
      // Handle explore page carousel
      const container = document.querySelector(".carousel-container");
      const prevButton = document.getElementById("carousel-prev");
      const nextButton = document.getElementById("carousel-next");

      if (container && prevButton && nextButton) {
        const scrollAmount = 300;

        prevButton.addEventListener("click", () => {
          container.scrollLeft -= scrollAmount;
        });

        nextButton.addEventListener("click", () => {
          container.scrollLeft += scrollAmount;
        });
      }

      // Handle categories page short videos carousel
      const shortVideosContainer = document.querySelector(
        ".short-videos-carousel",
      );
      const shortVideosPrev = document.getElementById("short-videos-prev");
      const shortVideosNext = document.getElementById("short-videos-next");

      if (shortVideosContainer && shortVideosPrev && shortVideosNext) {
        const scrollAmount = 300;

        shortVideosPrev.addEventListener("click", () => {
          shortVideosContainer.scrollLeft -= scrollAmount;
        });

        shortVideosNext.addEventListener("click", () => {
          shortVideosContainer.scrollLeft += scrollAmount;
        });
      }

      // Handle categories page recommendations carousel
      const recommendationsContainer = document.querySelector(
        ".recommendations-carousel",
      );
      const recommendationsPrev = document.getElementById(
        "recommendations-prev",
      );
      const recommendationsNext = document.getElementById(
        "recommendations-next",
      );

      if (
        recommendationsContainer &&
        recommendationsPrev &&
        recommendationsNext
      ) {
        const scrollAmount = 350;

        recommendationsPrev.addEventListener("click", () => {
          recommendationsContainer.scrollLeft -= scrollAmount;
        });

        recommendationsNext.addEventListener("click", () => {
          recommendationsContainer.scrollLeft += scrollAmount;
        });
      }
    };

    // Run after a short delay to ensure DOM is fully loaded
    setTimeout(handleCarouselNavigation, 500);

    return () => {
      // Clean up event listeners
      const carouselButtons = [
        "carousel-prev",
        "carousel-next",
        "short-videos-prev",
        "short-videos-next",
        "recommendations-prev",
        "recommendations-next",
      ];

      carouselButtons.forEach((id) => {
        const button = document.getElementById(id);
        if (button) {
          button.removeEventListener("click", () => {});
        }
      });
    };
  }, []);

  return null;
}
