function toggleModal(modal) {
  document.querySelector(modal).show();
    document.querySelector(modal).focus();
    setTimeout(() => {
      document.querySelector(modal).close();
    }, 4000);
}

export default toggleModal