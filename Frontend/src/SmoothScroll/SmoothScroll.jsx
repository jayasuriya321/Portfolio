// ScrollbarProvider.jsx
import React, { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Scrollbar from "smooth-scrollbar";
import "./SmoothScroll.css";

/**
 * ScrollbarProvider
 * Wrap your app with this. It will:
 * - init smooth-scrollbar
 * - respond to React Router location changes and scroll to hash
 * - intercept local anchor clicks (#id) and scroll smoothly
 *
 * Usage:
 * <ScrollbarProvider>
 *   <AppRoutes />
 * </ScrollbarProvider>
 */

const waitForElement = (selector, root = document, attempts = 40, delay = 50) =>
  new Promise((resolve) => {
    let tries = 0;
    const tick = () => {
      const el =
        (root && root.querySelector && root.querySelector(selector)) ||
        document.querySelector(selector);
      if (el) return resolve(el);
      tries += 1;
      if (tries >= attempts) return resolve(null);
      setTimeout(tick, delay);
    };
    tick();
  });

const ScrollbarComponent = ({
  children,
  options = { damping: 0.07 },
  debug = false,
}) => {
  const containerRef = useRef(null);
  const scrollbarRef = useRef(null);
  const location = useLocation();

  // init / destroy scrollbar
  useEffect(() => {
    if (!containerRef.current) return;
    scrollbarRef.current = Scrollbar.init(containerRef.current, options);

    // ensure keyboard scrolling works (optional)
    // scrollbarRef.current.addListener(() => {});

    return () => {
      if (scrollbarRef.current) {
        scrollbarRef.current.destroy();
        scrollbarRef.current = null;
      }
    };
  }, [options]);

  // helper to compute absolute Y inside scrollbar content and scroll to it
  const scrollToElement = async (selector, duration = 600) => {
    if (!scrollbarRef.current || !containerRef.current || !selector) return;
    // refresh measurements
    scrollbarRef.current.update();

    // try to find the element inside scrollbar's rendered DOM
    // try containerRef first (safer), then document
    const root = containerRef.current;
    const el = await waitForElement(selector, root, 60, 30);
    if (!el) {
      if (debug)
        console.warn("[ScrollbarProvider] target not found:", selector);
      return;
    }

    // compute the offset relative to the scrollbar container top
    const containerRect = containerRef.current.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();

    // offset = distance from viewport top for element minus container top,
    // plus current virtual scrollTop inside the scrollbar
    const offset =
      elRect.top - containerRect.top + scrollbarRef.current.scrollTop;

    if (debug)
      console.log(
        "[ScrollbarProvider] scrolling to",
        selector,
        "offset:",
        offset
      );

    scrollbarRef.current.scrollTo(0, offset, duration);
  };

  // handle location.hash changes (React Router navigation)
  useEffect(() => {
    const doScroll = async () => {
      const hash = location.hash;
      if (!hash) return;

      // small delay to let route content mount; but we'll also retry inside scrollToElement
      setTimeout(() => {
        scrollToElement(hash, 600);
      }, 20);
    };

    doScroll();
    // run when location changes
  }, [location]); // eslint-disable-line react-hooks/exhaustive-deps

  // intercept native anchor clicks inside the scroll container (delegation)
  useEffect(() => {
    const onClick = (e) => {
      // only care about anchor with hash (same-page anchors)
      const anchor = e.target.closest && e.target.closest("a[href^='#']");
      if (!anchor) return;
      e.preventDefault();

      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;

      // update URL without reload
      window.history.pushState({}, "", href);

      // smooth scroll
      scrollToElement(href, 600);
    };

    const container = containerRef.current;
    if (container) container.addEventListener("click", onClick);

    return () => {
      if (container) container.removeEventListener("click", onClick);
    };
  }, []); // run once

  // If your route components load images or async content, call scrollbarRef.current.update()
  // after images finish loading. This block auto-calls update on image load inside container.
  useEffect(() => {
    const container = containerRef.current;
    if (!container || !scrollbarRef.current) return;

    const imgs = Array.from(container.querySelectorAll("img"));
    if (imgs.length === 0) return;

    let loaded = 0;
    const onImg = () => {
      loaded += 1;
      scrollbarRef.current.update();
    };

    imgs.forEach((img) => {
      if (img.complete) onImg();
      else img.addEventListener("load", onImg, { once: true });
    });

    return () => {
      imgs.forEach((img) => img.removeEventListener("load", onImg));
    };
  }, [location]); // re-run on location so newly mounted images are handled

  return (
    // IMPORTANT: give container a fixed full-height wrapper. This is the element you pass to Scrollbar.init()
    <div
      ref={containerRef}
      className="scroll-container"
      style={{ height: "100vh", overflow: "hidden" }}
    >
      <div className="scroll-content">{children}</div>
    </div>
  );
};

export default ScrollbarComponent;
