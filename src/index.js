import { useRef, useEffect } from "react";
import mapData from "./mapData";

function getColorForValue(value, minValue, maxValue) {
  const percentage = maxValue === minValue ? 0.5 : (value - minValue) / (maxValue - minValue);
  const startColor = [240, 249, 255];
  const endColor = [24, 72, 176];
  const r = Math.round(startColor[0] + percentage * (endColor[0] - startColor[0]));
  const g = Math.round(startColor[1] + percentage * (endColor[1] - startColor[1]));
  const b = Math.round(startColor[2] + percentage * (endColor[2] - startColor[2]));
  return `rgb(${r}, ${g}, ${b})`;
}

function createTooltip(text) {
  const tooltip = document.createElement("div");
  tooltip.style.position = "absolute";
  tooltip.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
  tooltip.style.color = "#fff";
  tooltip.style.padding = "5px 10px";
  tooltip.style.borderRadius = "4px";
  tooltip.style.pointerEvents = "none";
  tooltip.style.fontSize = "12px";
  tooltip.style.zIndex = "1000";
  tooltip.textContent = text;
  return tooltip;
}

function MapWhizz({ data = [], style = {}, className = "", onCountryClick }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Clear previous content on re-render
    container.innerHTML = "";

    try {
      const parser = new DOMParser();
      const svgDoc = parser.parseFromString(mapData, "image/svg+xml");
      const svgElement = svgDoc.documentElement;

      svgElement.setAttribute("width", "100%");
      svgElement.setAttribute("height", "100%");

      const minValue = data.length ? Math.min(...data.map((d) => d.value)) : 0;
      const maxValue = data.length ? Math.max(...data.map((d) => d.value)) : 1;

      const countryDataMap = new Map(data.map((item) => [item.country, item]));

      // Inject styles
      const styleEl = document.createElement("style");
      styleEl.textContent = `
        .mapwhizz-container path {
          transition: all 0.2s ease;
          stroke: #fff;
          stroke-width: 0.5;
          fill: #ccc;
        }
        .mapwhizz-container path:hover {
          opacity: 0.8;
          stroke-width: 1.5;
          cursor: pointer;
        }
      `;
      svgElement.prepend(styleEl);

      // Track tooltip cleanup
      const cleanupFns = [];

      svgElement.querySelectorAll("path").forEach((path) => {
        const country = path.getAttribute("title");
        const countryData = countryDataMap.get(country);

        if (countryData) {
          path.style.fill = getColorForValue(countryData.value, minValue, maxValue);
        }

        const onMouseOver = () => {
          if (!countryData) return;
          const tooltip = createTooltip(`${country}: ${countryData.value}`);
          document.body.appendChild(tooltip);

          const onMouseMove = (e) => {
            tooltip.style.left = `${e.pageX + 12}px`;
            tooltip.style.top = `${e.pageY + 12}px`;
          };

          const onMouseOut = () => {
            if (document.body.contains(tooltip)) {
              document.body.removeChild(tooltip);
            }
            document.removeEventListener("mousemove", onMouseMove);
            path.removeEventListener("mouseout", onMouseOut);
          };

          document.addEventListener("mousemove", onMouseMove);
          path.addEventListener("mouseout", onMouseOut);
        };

        const onClick = () => {
          if (onCountryClick) {
            onCountryClick(country, countryData || null);
          }
        };

        path.addEventListener("mouseover", onMouseOver);
        path.addEventListener("click", onClick);

        cleanupFns.push(() => {
          path.removeEventListener("mouseover", onMouseOver);
          path.removeEventListener("click", onClick);
        });
      });

      container.appendChild(svgElement);

      return () => {
        cleanupFns.forEach((fn) => fn());
        container.innerHTML = "";
      };
    } catch (error) {
      console.error("[MapWhizz] Error rendering map:", error);
    }
  }, [data, onCountryClick]);

  return <div ref={containerRef} className={`mapwhizz-container ${className}`} style={{ width: "100%", overflow: "hidden", ...style }} />;
}

export default MapWhizz;
