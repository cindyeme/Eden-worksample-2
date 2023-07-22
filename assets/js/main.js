const modals = {
  1: {
    overlay: document.getElementById("modalOverlay1"),
    modal: document.getElementById("modal1"),
  },
  2: {
    overlay: document.getElementById("modalOverlay2"),
    modal: document.getElementById("modal2"),
  },
};

function openModal(modalNumber) {
  const modalData = modals[modalNumber];
  modalData.overlay.classList.add("show-modal");
  modalData.overlay.classList.remove("hide-modal");
}

function closeModal(modalNumber) {
  const modalData = modals[modalNumber];
  modalData.overlay.classList.add("hide-modal");
  modalData.overlay.classList.remove("show-modal");
}
