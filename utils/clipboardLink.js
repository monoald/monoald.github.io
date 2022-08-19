function clipboardLink() {
  const current = window.location.href;
  navigator.clipboard.writeText(current);
}

export default clipboardLink;