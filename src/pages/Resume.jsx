import React from "react";
import IframeResizer from "iframe-resizer-react";

export default function Resume() {
  return (
      <IframeResizer
        log
        src="/Resume.pdf"
        style={{ width: '1px', minWidth: '100%', height: '93vh', padding: '3%', border: 'none' }}
      />
  )
}