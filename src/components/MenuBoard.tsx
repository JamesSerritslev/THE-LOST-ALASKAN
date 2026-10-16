"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./MenuBoard.module.css";

const MIN_SCALE = 1;
const MAX_SCALE = 4;
const SRC = "/images/Screenshot%202026-10-14%20122141.png";
const ALT = "The Lost Alaskan menu board.";

function clampScale(value: number) {
  return Math.min(MAX_SCALE, Math.max(MIN_SCALE, value));
}

export function MenuBoard() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const pointers = useRef(new Map<number, { x: number; y: number }>());
  const pinch = useRef<{ distance: number; scale: number } | null>(null);
  const scaleRef = useRef(1);
  const [open, setOpen] = useState(false);
  const [scale, setScale] = useState(1);
  const [promptVisible, setPromptVisible] = useState(false);

  function applyScale(next: number) {
    const clamped = clampScale(next);
    scaleRef.current = clamped;
    setScale(clamped);
    if (clamped > 1) setPromptVisible(false);
  }

  function openMenu() {
    scaleRef.current = 1;
    setScale(1);
    setPromptVisible(true);
    setOpen(true);
  }

  function closeMenu() {
    pointers.current.clear();
    pinch.current = null;
    scaleRef.current = 1;
    setScale(1);
    setPromptVisible(false);
    setOpen(false);
  }

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!open || !viewport) return;

    const onWheel = (event: WheelEvent) => {
      event.preventDefault();
      const direction = event.deltaY < 0 ? 0.18 : -0.18;
      applyScale(scaleRef.current + direction);
    };

    viewport.addEventListener("wheel", onWheel, { passive: false });
    return () => viewport.removeEventListener("wheel", onWheel);
  }, [open]);

  function onPointerDown(event: React.PointerEvent<HTMLDivElement>) {
    pointers.current.set(event.pointerId, { x: event.clientX, y: event.clientY });
    if (pointers.current.size < 2) return;
    for (const id of pointers.current.keys()) {
      event.currentTarget.setPointerCapture(id);
    }
    const [a, b] = [...pointers.current.values()];
    pinch.current = {
      distance: Math.hypot(a.x - b.x, a.y - b.y),
      scale: scaleRef.current,
    };
  }

  function onPointerMove(event: React.PointerEvent<HTMLDivElement>) {
    if (!pointers.current.has(event.pointerId)) return;
    pointers.current.set(event.pointerId, { x: event.clientX, y: event.clientY });
    if (!pinch.current || pointers.current.size < 2 || pinch.current.distance === 0) return;
    const [a, b] = [...pointers.current.values()];
    const distance = Math.hypot(a.x - b.x, a.y - b.y);
    applyScale(pinch.current.scale * (distance / pinch.current.distance));
  }

  function onPointerUp(event: React.PointerEvent<HTMLDivElement>) {
    pointers.current.delete(event.pointerId);
    if (pointers.current.size < 2) pinch.current = null;
  }

  return (
    <figure className={styles.board}>
      <button
        type="button"
        className={styles.open}
        onClick={openMenu}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-label="Open the drink menu"
      >
        <Image
          src={SRC}
          alt={ALT}
          width={596}
          height={892}
          priority
          sizes="(max-width: 768px) 100vw, 38rem"
        />
      </button>

      <dialog
        ref={dialogRef}
        className={styles.dialog}
        aria-labelledby="menu-zoom-title"
        onClose={closeMenu}
        onClick={(event) => {
          if (event.target === dialogRef.current) closeMenu();
        }}
      >
        <h2 id="menu-zoom-title" className="sr-only">
          Drink menu
        </h2>
        <button type="button" className={styles.close} onClick={closeMenu}>
          Close
        </button>
        <div
          ref={viewportRef}
          className={styles.viewport}
          data-fit={scale === 1 ? "true" : "false"}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          onClick={(event) => {
            if (event.target === viewportRef.current && scaleRef.current === 1) closeMenu();
          }}
        >
          <img
            src={SRC}
            alt=""
            width={596}
            height={892}
            draggable={false}
            className={styles.zoomImage}
            style={scale === 1 ? undefined : { width: `${40 * scale}rem`, maxHeight: "none", maxWidth: "none" }}
          />
        </div>
        {promptVisible ? (
          <p className={styles.prompt} role="status">
            <ZoomIcon />
            Pinch or scroll to zoom in
          </p>
        ) : null}
      </dialog>
    </figure>
  );
}

function ZoomIcon() {
  return (
    <svg className={styles.promptIcon} viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="10.5" cy="10.5" r="6.25" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M15.2 15.2 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M10.5 8v5M8 10.5h5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
