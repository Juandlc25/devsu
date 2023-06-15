import { Dispatch, SetStateAction } from "react";

export default function listenForOutsideClicks(
  listening: boolean,
  setListening: Dispatch<SetStateAction<boolean>>,
  ref: any,
  onClose: () => void
): () => void {
  return () => {
    if (listening) return;
    if (!ref.current) return;
    setListening(true);
    [`click`, `touchstart`].forEach(() => {
      document.addEventListener(`click`, (evt) => {
        const cur = ref.current;
        const node = evt.target;
        if (cur?.contains(node)) return;
        onClose();
      });
    });
  };
}
